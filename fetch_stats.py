#!/usr/bin/env python3
"""Demorix777 portfolio — live stats fetcher.

Pulls real numbers and writes stats.json next to this file.
Designed to run from GitHub Actions on a cron; the workflow commits the
updated stats.json + cache back to the repo, and index.html reads it.

Sources:
  Steam   — Web API (needs free key in env STEAM_API_KEY). Falls back to the
            public profile XML for online/offline state when key is absent.
  YouTube — channel /about page (no key).
  TikTok  — profile page (no key).
  Instagram — login-walled; NOT fetchable. Carries forward the last known
              value (or INSTAGRAM_FOLLOWERS env / default).

Run locally:  python fetch_stats.py
"""
import json
import os
import re
import sys
import time
import datetime
import urllib.request

STEAM_ID64 = "76561198338679747"
STEAM_CUSTOM = "Demorix777"
STEAM_API_KEY = os.environ.get("STEAM_API_KEY", "").strip()

YOUTUBE_HANDLE = "konfeta4573"
TIKTOK_HANDLE = "_realdemor1313_"
INSTAGRAM_HANDLE = "demorix777"

HERE = os.path.dirname(os.path.abspath(__file__))
STATS_PATH = os.path.join(HERE, "stats.json")
CACHE_PATH = os.path.join(HERE, "steam_ach_cache.json")

UA = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/126.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
}


def http_get(url, extra_headers=None, timeout=30):
    headers = dict(UA)
    if extra_headers:
        headers.update(extra_headers)
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode("utf-8", "replace")


def parse_count(s):
    """'773' -> 773, '1.2K' -> 1200, '1.25M' -> 1250000, '12 345' -> 12345."""
    s = s.strip().replace("\u00a0", " ").replace(" ", "").upper()
    mult = 1
    if s.endswith("K"):
        mult, s = 1000, s[:-1]
    elif s.endswith("M"):
        mult, s = 1000000, s[:-1]
    return int(float(s) * mult)


def fetch_youtube_subs(handle):
    try:
        html = http_get(f"https://www.youtube.com/@{handle}/about")
        m = re.search(r'"content":"([0-9][0-9.,\u00a0 ]*[KMk]?) subscribers"', html)
        if not m:
            return None
        return parse_count(m.group(1))
    except Exception:
        return None


def fetch_tiktok_followers(handle):
    try:
        html = http_get(f"https://www.tiktok.com/@{handle}")
        m = re.search(r'"followerCount":(\d+)', html)
        if not m:
            return None
        return int(m.group(1))
    except Exception:
        return None


def fetch_steam():
    """Return dict with onlineState, inGame, gamesCount, hours, achievements, perfect.
    Requires STEAM_API_KEY for counts; without it only online/in-game (via XML)."""
    out = {
        "onlineState": None,   # 0 offline, 1 online, 2 busy, 3 away, 5 trade, 6 play
        "inGame": None,
        "gamesCount": None,
        "hours": None,
        "achievements": None,
        "perfect": None,
        "source": "steam",
    }

    if not STEAM_API_KEY:
        # Public XML fallback: online state only, no counts.
        try:
            xml = http_get(f"https://steamcommunity.com/id/{STEAM_CUSTOM}/?xml=1")
            st = re.search(r"<onlineState>([^<]+)</onlineState>", xml)
            if st:
                out["onlineState"] = st.group(1)  # 'online' / 'offline' / 'in-game'
            game = re.search(r"<inGameInfo>.*?<gameName><!\[CDATA\[([^\]]+)\]\]>", xml, re.S)
            if game:
                out["inGame"] = game.group(1)
        except Exception:
            pass
        return out

    # Summaries: persona state + current game.
    try:
        j = json.loads(http_get(
            "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/"
            f"?key={STEAM_API_KEY}&steamids={STEAM_ID64}"))
        p = j["response"]["players"][0]
        out["onlineState"] = p.get("personastate")
        if p.get("gameextrainfo"):
            out["inGame"] = p["gameextrainfo"]
    except Exception:
        pass

    # Owned games: count + total playtime + appids for achievements.
    try:
        j = json.loads(http_get(
            "https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/"
            f"?key={STEAM_API_KEY}&steamid={STEAM_ID64}&include_appinfo=1"
            "&include_played_free_games=1&format=json"))
        games = j["response"].get("games", [])
        out["gamesCount"] = j["response"].get("game_count", len(games))
        out["hours"] = round(sum(g.get("playtime_forever", 0) for g in games) / 60.0, 1)
        appids = [g["appid"] for g in games]
    except Exception:
        appids = []

    # Achievements: total earned + "perfect" games (all achievements unlocked).
    if appids:
        total_ach, perfect = 0, 0
        cache = {}
        if os.path.exists(CACHE_PATH):
            try:
                with open(CACHE_PATH, encoding="utf-8") as f:
                    cache = json.load(f)
            except Exception:
                cache = {}
        new_cache = {}
        for appid in appids:
            key = str(appid)
            if key in cache and cache[key].get("total") is not None:
                new_cache[key] = cache[key]
                total_ach += cache[key].get("achieved", 0)
                if cache[key].get("perfect"):
                    perfect += 1
                continue
            try:
                j = json.loads(http_get(
                    "https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/"
                    f"?key={STEAM_API_KEY}&steamid={STEAM_ID64}&appid={appid}&l=en"))
                ach = j.get("playerstats", {}).get("achievements", [])
                if ach:
                    achieved = sum(1 for a in ach if a.get("achieved") == 1)
                    is_perfect = achieved == len(ach)
                    new_cache[key] = {"total": len(ach), "achieved": achieved, "perfect": is_perfect}
                    total_ach += achieved
                    if is_perfect:
                        perfect += 1
                else:
                    new_cache[key] = {"total": 0, "achieved": 0, "perfect": False}
            except Exception:
                new_cache[key] = {"total": None}
            time.sleep(0.2)
        out["achievements"] = total_ach
        out["perfect"] = perfect
        with open(CACHE_PATH, "w", encoding="utf-8") as f:
            json.dump(new_cache, f, ensure_ascii=False, indent=2)

    return out


def main():
    prev = {}
    if os.path.exists(STATS_PATH):
        try:
            with open(STATS_PATH, encoding="utf-8") as f:
                prev = json.load(f)
        except Exception:
            prev = {}

    prev_social = prev.get("social", {})

    youtube = fetch_youtube_subs(YOUTUBE_HANDLE)
    if youtube is None:
        youtube = prev_social.get("youtube")

    tiktok = fetch_tiktok_followers(TIKTOK_HANDLE)
    if tiktok is None:
        tiktok = prev_social.get("tiktok")

    # Instagram is login-walled — use env value, else carry forward the last known.
    instagram_raw = os.environ.get("INSTAGRAM_FOLLOWERS", "").strip()
    try:
        instagram = int(instagram_raw) if instagram_raw else (prev_social.get("instagram") or 9)
    except Exception:
        instagram = prev_social.get("instagram") or 9

    data = {
        "updated": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "steam": fetch_steam(),
        "social": {
            "youtube": youtube,
            "tiktok": tiktok,
            "instagram": instagram,
        },
    }

    with open(STATS_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(json.dumps(data, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
