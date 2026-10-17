/* ============================================================
   Demorix777 — пасхалка: терминал → взлом → музей → wake up
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Данные музея (39 фото + подписи) ---------- */
  var MUSEUM_PHOTOS = {
    ru: [
      { file: "museum_01.jpg", caption: "С наступающим 2024 годом" },
      { file: "museum_02.jpg", caption: "Дроны-убийцы празднуют 2024 год" },
      { file: "museum_03.png", caption: "Торревьеха" },
      { file: "museum_04.png", caption: "Дрейк в шоке, аахаха" },
      { file: "museum_05.png", caption: "Играем в Roblox" },
      { file: "museum_06.png", caption: "Играем с пацанами в Огайо" },
      { file: "museum_07.png", caption: "Угнали машину в Огайо" },
      { file: "museum_08.png", caption: "Так долго..." },
      { file: "museum_09.png", caption: "Киберпанк" },
      { file: "museum_10.png", caption: "Лучшие друзья" },
      { file: "museum_11.png", caption: "2023" },
      { file: "museum_12.png", caption: "Атмосферно" },
      { file: "museum_13.png", caption: "Майнкрафт с сестрой, 2024" },
      { file: "museum_14.png", caption: "Пытался учиться строить" },
      { file: "museum_15.png", caption: "Играл с одноклассником в Майнкрафт, 2024" },
      { file: "museum_16.png", caption: "Roblox опять" },
      { file: "museum_17.png", caption: "Опять же Roblox в 2024" },
      { file: "museum_18.png", caption: "Teardown 2025" },
      { file: "museum_19.png", caption: "Играл с подругой" },
      { file: "museum_20.png", caption: "Поездка к бабушке" },
      { file: "museum_21.png", caption: "Бета-тест 2025..." },
      { file: "museum_22.png", caption: "600 подписчиков" },
      { file: "museum_23.png", caption: "gm_flatgrass" },
      { file: "museum_24.png", caption: "Ink game" },
      { file: "museum_25.png", caption: "Чизбургер" },
      { file: "museum_26.png", caption: "GTA с другом" },
      { file: "museum_27.png", caption: "Умные NPC, версия 1" },
      { file: "museum_28.png", caption: "Скриптинг" },
      { file: "museum_29.png", caption: "Steam профиль, 2025" },
      { file: "museum_30.png", caption: "КС:С" },
      { file: "museum_31.png", caption: "Взрыв в Чернобыле" },
      { file: "museum_32.png", caption: "Обби (obby)" },
      { file: "museum_33.png", caption: "Игра кальмара" },
      { file: "museum_34.png", caption: "Киберпанк" },
      { file: "museum_35.png", caption: "Чипсы Lay's" },
      { file: "museum_36.png", caption: "TF2" },
      { file: "museum_37.png", caption: "Подруга нарисовала, я был очень рад" },
      { file: "museum_38.png", caption: "Майнкрафт, не хватило ока Эндера" },
      { file: "museum_39.png", caption: "GTA 6 уже скоро" }
    ],
    en: [
      { file: "museum_01.jpg", caption: "Happy New Year 2024" },
      { file: "museum_02.jpg", caption: "Killer drones celebrating, 2024" },
      { file: "museum_03.png", caption: "Torrevieja" },
      { file: "museum_04.png", caption: "Drake in shock, haha" },
      { file: "museum_05.png", caption: "Playing Roblox" },
      { file: "museum_06.png", caption: "Playing with the boys in Ohio" },
      { file: "museum_07.png", caption: "Stole a car in Ohio" },
      { file: "museum_08.png", caption: "Took so long..." },
      { file: "museum_09.png", caption: "Cyberpunk" },
      { file: "museum_10.png", caption: "Best friends" },
      { file: "museum_11.png", caption: "2023" },
      { file: "museum_12.png", caption: "Atmospheric" },
      { file: "museum_13.png", caption: "Minecraft with my sister, 2024" },
      { file: "museum_14.png", caption: "Trying to learn building" },
      { file: "museum_15.png", caption: "Minecraft with a classmate, 2024" },
      { file: "museum_16.png", caption: "Roblox again" },
      { file: "museum_17.png", caption: "Roblox again in 2024" },
      { file: "museum_18.png", caption: "Teardown 2025" },
      { file: "museum_19.png", caption: "Playing with my friend" },
      { file: "museum_20.png", caption: "Trip to grandma's" },
      { file: "museum_21.png", caption: "Beta test 2025..." },
      { file: "museum_22.png", caption: "600 subscribers" },
      { file: "museum_23.png", caption: "gm_flatgrass" },
      { file: "museum_24.png", caption: "Ink game" },
      { file: "museum_25.png", caption: "Cheeseburger" },
      { file: "museum_26.png", caption: "GTA with a friend" },
      { file: "museum_27.png", caption: "Smart NPCs, version 1" },
      { file: "museum_28.png", caption: "Scripting" },
      { file: "museum_29.png", caption: "Steam profile, 2025" },
      { file: "museum_30.png", caption: "CS:S" },
      { file: "museum_31.png", caption: "Explosion in Chernobyl" },
      { file: "museum_32.png", caption: "Obby" },
      { file: "museum_33.png", caption: "Squid Game" },
      { file: "museum_34.png", caption: "Cyberpunk" },
      { file: "museum_35.png", caption: "Lay's chips" },
      { file: "museum_36.png", caption: "TF2" },
      { file: "museum_37.png", caption: "My friend drew it, I was so happy" },
      { file: "museum_38.png", caption: "Minecraft, ran out of Ender eyes" },
      { file: "museum_39.png", caption: "GTA 6 coming soon" }
    ],
    es: [
      { file: "museum_01.jpg", caption: "Feliz año nuevo 2024" },
      { file: "museum_02.jpg", caption: "Drones asesinos celebrando, 2024" },
      { file: "museum_03.png", caption: "Torrevieja" },
      { file: "museum_04.png", caption: "Drake en shock, jaja" },
      { file: "museum_05.png", caption: "Jugando Roblox" },
      { file: "museum_06.png", caption: "Jugando con los chicos en Ohio" },
      { file: "museum_07.png", caption: "Robamos un coche en Ohio" },
      { file: "museum_08.png", caption: "Tanto tiempo..." },
      { file: "museum_09.png", caption: "Cyberpunk" },
      { file: "museum_10.png", caption: "Mejores amigos" },
      { file: "museum_11.png", caption: "2023" },
      { file: "museum_12.png", caption: "Atmosférico" },
      { file: "museum_13.png", caption: "Minecraft con mi hermana, 2024" },
      { file: "museum_14.png", caption: "Intentando aprender a construir" },
      { file: "museum_15.png", caption: "Minecraft con un compañero de clase, 2024" },
      { file: "museum_16.png", caption: "Roblox otra vez" },
      { file: "museum_17.png", caption: "Otra vez Roblox en 2024" },
      { file: "museum_18.png", caption: "Teardown 2025" },
      { file: "museum_19.png", caption: "Jugando con mi amiga" },
      { file: "museum_20.png", caption: "Viaje a casa de la abuela" },
      { file: "museum_21.png", caption: "Beta test 2025..." },
      { file: "museum_22.png", caption: "600 suscriptores" },
      { file: "museum_23.png", caption: "gm_flatgrass" },
      { file: "museum_24.png", caption: "Ink game" },
      { file: "museum_25.png", caption: "Hamburguesa con queso" },
      { file: "museum_26.png", caption: "GTA con un amigo" },
      { file: "museum_27.png", caption: "NPCs inteligentes, versión 1" },
      { file: "museum_28.png", caption: "Scripting" },
      { file: "museum_29.png", caption: "Perfil de Steam, 2025" },
      { file: "museum_30.png", caption: "CS:S" },
      { file: "museum_31.png", caption: "Explosión en Chernóbil" },
      { file: "museum_32.png", caption: "Obby" },
      { file: "museum_33.png", caption: "El juego del calamar" },
      { file: "museum_34.png", caption: "Cyberpunk" },
      { file: "museum_35.png", caption: "Patatas Lay's" },
      { file: "museum_36.png", caption: "TF2" },
      { file: "museum_37.png", caption: "Mi amiga lo dibujó, estaba muy feliz" },
      { file: "museum_38.png", caption: "Minecraft, me faltaron ojos de Ender" },
      { file: "museum_39.png", caption: "GTA 6 muy pronto" }
    ]
  };
  function museumPhotos() { return MUSEUM_PHOTOS[lang()] || MUSEUM_PHOTOS.ru; }

  /* ---------- Титры (данные) ---------- */
  var CREDITS_PHOTOS = ["credits_01.jpg", "credits_02.jpg", "credits_03.jpg", "credits_04.jpg", "credits_05.jpg", "credits_06.jpg"];
  var CREDITS_LINES = {
    ru: [
      { t: "DEMORIX777", c: "big" },
      { t: "персональный сайт", c: "small" },
      { t: "", c: "" },
      { t: "в главной роли", c: "small" },
      { t: "Даниил «Demorix777»", c: "" },
      { t: "", c: "" },
      { t: "фотографии", c: "small" },
      { t: "Demorix777", c: "" },
      { t: "", c: "" },
      { t: "музыка", c: "small" },
      { t: "Молчат Дома · Кино", c: "" },
      { t: "", c: "" },
      { t: "отдельное спасибо", c: "small" },
      { t: "тому, кто дошёл до конца", c: "" },
      { t: "", c: "" },
      { t: "продолжение следует...", c: "small" }
    ],
    en: [
      { t: "DEMORIX777", c: "big" },
      { t: "a personal website", c: "small" },
      { t: "", c: "" },
      { t: "starring", c: "small" },
      { t: "Daniil «Demorix777»", c: "" },
      { t: "", c: "" },
      { t: "photography", c: "small" },
      { t: "Demorix777", c: "" },
      { t: "", c: "" },
      { t: "music", c: "small" },
      { t: "Molchat Doma · Kino", c: "" },
      { t: "", c: "" },
      { t: "special thanks", c: "small" },
      { t: "to the one who made it to the end", c: "" },
      { t: "", c: "" },
      { t: "to be continued...", c: "small" }
    ],
    es: [
      { t: "DEMORIX777", c: "big" },
      { t: "un sitio web personal", c: "small" },
      { t: "", c: "" },
      { t: "protagonizado por", c: "small" },
      { t: "Daniil «Demorix777»", c: "" },
      { t: "", c: "" },
      { t: "fotografía", c: "small" },
      { t: "Demorix777", c: "" },
      { t: "", c: "" },
      { t: "música", c: "small" },
      { t: "Molchat Doma · Kino", c: "" },
      { t: "", c: "" },
      { t: "agradecimiento especial", c: "small" },
      { t: "a quien llegó hasta el final", c: "" },
      { t: "", c: "" },
      { t: "continuará...", c: "small" }
    ]
  };

  function toBinary(text) {
    var bytes = new TextEncoder().encode(text);
    var parts = [];
    for (var i = 0; i < bytes.length; i++) parts.push(bytes[i].toString(2).padStart(8, "0"));
    return parts.join(" ");
  }

  /* ---------- Переводы ---------- */
  var I18N = {
    ru: {
      termHead: "root@demorix777: ~",
      termLine1: "Demorix777 secure shell v2.0",
      termLine2: "Требуется аутентификация.",
      termPrompt: "Введите пароль: ",
      granted: "ДОСТУП РАЗРЕШЁН",
      denied: "ДОСТУП ЗАПРЕЩЁН",
      hint: "подсказка: взгляни трижды на фото заправки",
      hackInit: "Запуск протокола взлома...",
      museumTitle: "Выставка Demorix777",
      museumSub: "Мои воспоминания · 2023–2025",
      clickHint: "Нажми на фото, чтобы прочитать",
      doorHint: "нажми на дверь",
      close: "Закрыть",
      thanksTitle: "Спасибо",
      thanksSub: "что нашёл пасхалку",
      wakeup: "проснись",
      toContinue: "продолжение следует..."
    },
    en: {
      termHead: "root@demorix777: ~",
      termLine1: "Demorix777 secure shell v2.0",
      termLine2: "Authentication required.",
      termPrompt: "Enter password: ",
      granted: "ACCESS GRANTED",
      denied: "ACCESS DENIED",
      hint: "hint: look three times at the gas station photo",
      hackInit: "Starting hack protocol...",
      museumTitle: "Demorix777 Exhibition",
      museumSub: "My memories · 2023–2025",
      clickHint: "Click a photo to read",
      doorHint: "click the door",
      close: "Close",
      thanksTitle: "Thank you",
      thanksSub: "for finding the easter egg",
      wakeup: "wake up",
      toContinue: "to be continued..."
    },
    es: {
      termHead: "root@demorix777: ~",
      termLine1: "Demorix777 secure shell v2.0",
      termLine2: "Se requiere autenticación.",
      termPrompt: "Introduce contraseña: ",
      granted: "ACCESO CONCEDIDO",
      denied: "ACCESO DENEGADO",
      hint: "pista: mira tres veces la foto de la gasolinera",
      hackInit: "Iniciando protocolo de hackeo...",
      museumTitle: "Exposición Demorix777",
      museumSub: "Mis recuerdos · 2023–2025",
      clickHint: "Haz clic en una foto para leer",
      doorHint: "haz clic en la puerta",
      close: "Cerrar",
      thanksTitle: "Gracias",
      thanksSub: "por encontrar el easter egg",
      wakeup: "despierta",
      toContinue: "continuará..."
    }
  };

  function lang() { return (document.documentElement.lang === "en" || document.documentElement.lang === "es") ? document.documentElement.lang : "ru"; }
  function t(key) { var d = I18N[lang()] || I18N.ru; return d[key] || I18N.ru[key]; }

  /* ---------- Стили ---------- */
  var CSS = [
    "/* terminal */",
    ".eg-term{position:fixed;inset:0;z-index:1000;background:rgba(0,0,0,.82);display:none;align-items:center;justify-content:center;font-family:monospace}",
    ".eg-term.open{display:flex}",
    ".eg-term-win{width:min(560px,92vw);background:#0a0a0a;border:1px solid #1f6f1f;border-radius:10px;box-shadow:0 0 40px rgba(0,255,0,.15);overflow:hidden}",
    ".eg-term-head{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:#111;color:#3c3;font-size:12px;border-bottom:1px solid #1f6f1f}",
    ".eg-term-head button{background:none;border:none;color:#3c3;font-size:16px;cursor:pointer}",
    ".eg-term-body{padding:14px;color:#3c3;font-size:14px;line-height:1.5;min-height:140px}",
    ".eg-term-body p{margin:4px 0}",
    ".eg-cursor{display:inline-block;width:9px;background:#3c3;height:15px;vertical-align:middle;animation:eg-blink 1s steps(1) infinite}",
    "@keyframes eg-blink{50%{opacity:0}}",
    "/* matrix */",
    ".eg-matrix{position:fixed;inset:0;z-index:999;background:#000;display:none}",
    ".eg-matrix.open{display:block}",
    ".eg-matrix canvas{display:block}",
    ".eg-matrix .eg-hacktext{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);color:#0f0;font-family:monospace;font-size:16px;white-space:nowrap}",
    "/* museum */",
    ".eg-museum{position:fixed;inset:0;z-index:1000;background:#f4efe6;display:none;flex-direction:column;color:#222;overflow:hidden}",
    ".eg-museum.open{display:flex}",
    ".eg-museum-head{display:flex;justify-content:space-between;align-items:center;padding:16px 22px;border-bottom:1px solid #ddd}",
    ".eg-museum-head .t{font-family:'Playfair Display',serif;font-size:22px;color:#222}",
    ".eg-museum-head .s{font-size:12px;color:#888;margin-top:2px}",
    ".eg-museum-head button{background:none;border:1px solid #bbb;border-radius:50%;width:32px;height:32px;cursor:pointer;font-size:16px;color:#555}",
    ".eg-museum-stage{flex:1;display:flex;align-items:center;justify-content:center;gap:16px;padding:20px;position:relative}",
    ".eg-museum-frame{background:#fff;padding:14px;box-shadow:0 10px 40px rgba(0,0,0,.25);border:1px solid #d8cfc0;cursor:pointer;max-width:72vw}",
    ".eg-museum-frame img{display:block;max-height:58vh;max-width:100%;margin:0 auto;object-fit:contain}",
    ".eg-museum-plaque{margin-top:10px;text-align:center;font-family:'Playfair Display',serif;font-style:italic;font-size:14px;color:#555}",
    ".eg-museum-nav{position:absolute;top:50%;transform:translateY(-50%);background:rgba(0,0,0,.5);color:#fff;border:none;width:46px;height:46px;border-radius:50%;font-size:22px;cursor:pointer}",
    ".eg-museum-nav:hover{background:rgba(0,0,0,.75)}",
    ".eg-museum-nav.prev{left:12px}.eg-museum-nav.next{right:12px}",
    ".eg-museum-count{position:absolute;bottom:14px;left:50%;transform:translateX(-50%);font-size:12px;color:#999;letter-spacing:.2em}",
    ".eg-museum-hint{position:absolute;top:18px;left:50%;transform:translateX(-50%);font-size:11px;color:#aaa}",
    "/* description modal */",
    ".eg-desc{position:fixed;inset:0;z-index:1001;background:rgba(20,18,15,.9);display:none;align-items:center;justify-content:center;padding:20px}",
    ".eg-desc.open{display:flex}",
    ".eg-desc-card{background:#fff;max-width:min(680px,92vw);padding:20px;border-radius:8px;text-align:center}",
    ".eg-desc-card img{max-height:60vh;max-width:100%;margin:0 auto}",
    ".eg-desc-card .cap{margin-top:12px;font-family:'Playfair Display',serif;font-size:18px;color:#333}",
    ".eg-desc-card button{margin-top:14px;background:#222;color:#fff;border:none;padding:8px 20px;border-radius:20px;cursor:pointer}",
    "/* ending: door */",
    ".eg-ending{position:fixed;inset:0;z-index:1002;background:#fff;display:none;align-items:center;justify-content:center}",
    ".eg-ending.open{display:flex}",
    ".eg-ending img{height:90vh;width:auto;max-width:96vw;object-fit:contain;cursor:pointer;opacity:0;transition:opacity 1.8s ease}",
    ".eg-ending.open img{opacity:1}",
    ".eg-ending .eg-hint{position:absolute;bottom:46px;color:#999;font-size:11px;letter-spacing:.25em;opacity:0;transition:opacity 1.2s ease 1.4s}",
    ".eg-ending.open .eg-hint{opacity:1}",
    ".eg-ending.brighten img{opacity:0}",
    "/* credits */",
    ".eg-credits{position:fixed;inset:0;z-index:1002;background:#000;display:none;overflow:hidden}",
    ".eg-credits.open{display:block}",
    ".eg-credits .eg-cbg{position:absolute;inset:0;background-size:cover;background-position:center;opacity:0;transition:opacity 1.5s ease}",
    ".eg-credits .eg-cbg.show{opacity:.32}",
    ".eg-credits .eg-ctext{position:absolute;left:50%;top:100%;transform:translateX(-50%);width:min(620px,90vw);text-align:center;color:#e7e3dc;font-family:'Playfair Display',serif;font-size:17px;line-height:2.1;animation:eg-scroll 20s linear forwards}",
    ".eg-credits .eg-ctext .big{font-size:30px;letter-spacing:.2em;margin:8px 0}",
    ".eg-credits .eg-ctext .small{font-size:12px;color:#9a9a9a;letter-spacing:.15em}",
    "@keyframes eg-scroll{0%{transform:translate(-50%,0)}100%{transform:translate(-50%,-240%)}}",
    ".eg-credits.fade{opacity:0;transition:opacity 1.4s ease}",
    "/* wakeup */",
    ".eg-wakeup{position:fixed;inset:0;z-index:1002;background:#000;display:none;align-items:center;justify-content:center}",
    ".eg-wakeup.open{display:flex}",
    ".eg-wakeup span{font-family:'Playfair Display',serif;font-size:clamp(28px,6vw,64px);color:#e7e3dc;letter-spacing:.08em;cursor:pointer;opacity:0;transition:opacity 1.2s ease}",
    ".eg-wakeup.open span{opacity:1}",
    "/* thanks */",
    ".eg-thanks{position:fixed;inset:0;z-index:1002;background:#000;display:none;align-items:center;justify-content:center}",
    ".eg-thanks.open{display:flex}",
    ".eg-thanks .eg-tcard{text-align:center;color:#e7e3dc;padding:24px}",
    ".eg-thanks h2{font-family:'Playfair Display',serif;font-size:clamp(22px,4vw,42px);margin:0 0 12px;font-weight:500}",
    ".eg-thanks p{color:#8a8a8a;font-size:14px;letter-spacing:.05em}"
  ].join("\n");

  var styleEl = document.createElement("style");
  styleEl.textContent = CSS;
  document.head.appendChild(styleEl);

  /* ---------- DOM ---------- */
  var wrap = document.createElement("div");
  wrap.innerHTML =
    '<div class="eg-term" id="egTerm">' +
    '  <div class="eg-term-win">' +
    '    <div class="eg-term-head"><span id="egTermHead"></span><button id="egTermClose">&times;</button></div>' +
    '    <div class="eg-term-body" id="egTermBody"></div>' +
    '  </div>' +
    '</div>' +
    '<div class="eg-matrix" id="egMatrix"><canvas id="egMatrixCanvas"></canvas><div class="eg-hacktext" id="egHackText"></div></div>' +
    '<div class="eg-museum" id="egMuseum">' +
    '  <div class="eg-museum-head"><div><div class="t" id="egMuseumTitle"></div><div class="s" id="egMuseumSub"></div></div><button id="egMuseumClose">&times;</button></div>' +
    '  <div class="eg-museum-hint" id="egMuseumHint"></div>' +
    '  <div class="eg-museum-stage">' +
    '    <button class="eg-museum-nav prev" id="egPrev">&#10094;</button>' +
    '    <div class="eg-museum-frame" id="egFrame"><img id="egFrameImg" alt=""><div class="eg-museum-plaque" id="egPlaque"></div></div>' +
    '    <button class="eg-museum-nav next" id="egNext">&#10095;</button>' +
    '    <div class="eg-museum-count" id="egCount"></div>' +
    '  </div>' +
    '</div>' +
    '<div class="eg-desc" id="egDesc"><div class="eg-desc-card"><img id="egDescImg" alt=""><div class="cap" id="egDescCap"></div><button id="egDescClose"></button></div></div>' +
    '<div class="eg-ending" id="egEnding"><img id="egDoor" src="assets/door.png" alt=""><div class="eg-hint" id="egEndHint"></div></div>' +
'<div class="eg-credits" id="egCredits"><div class="eg-cbg" id="egCbg1"></div><div class="eg-cbg" id="egCbg2"></div><div class="eg-ctext" id="egCtext"></div></div>' +
'<div class="eg-wakeup" id="egWakeup"><span id="egWakeupText">wake up</span></div>' +
'<div class="eg-thanks" id="egThanks"><div class="eg-tcard"><h2 id="egThanksTitle"></h2><p id="egThanksSub"></p></div></div>';
  document.body.appendChild(wrap);

  var elTerm = document.getElementById("egTerm");
  var elTermBody = document.getElementById("egTermBody");
  var elMatrix = document.getElementById("egMatrix");
  var elMuseum = document.getElementById("egMuseum");
  var elDesc = document.getElementById("egDesc");
  var elEnding = document.getElementById("egEnding");
  var elDoor = document.getElementById("egDoor");
  var elEndHint = document.getElementById("egEndHint");
  var elCredits = document.getElementById("egCredits");
  var elCbg1 = document.getElementById("egCbg1");
  var elCbg2 = document.getElementById("egCbg2");
  var elCtext = document.getElementById("egCtext");
  var elWakeup = document.getElementById("egWakeup");
  var elWakeupText = document.getElementById("egWakeupText");
  var elThanks = document.getElementById("egThanks");
  var elThanksTitle = document.getElementById("egThanksTitle");
  var elThanksSub = document.getElementById("egThanksSub");

  /* ---------- Музыка ---------- */
  var hackAudio = new Audio("assets/hack.mp3");
  var museumAudio = new Audio("assets/museum-audio.mp3");
  museumAudio.loop = true;
  var narratorAudio = new Audio("assets/narrator.mp3");
  var doorCreakAudio = new Audio("assets/door-creak.mp3");
  var creditsMusic = new Audio("assets/credits-music.mp3");
  function fadeOut(a, cb) {
    var iv = setInterval(function () {
      if (a.volume > 0.05) a.volume -= 0.05; else { a.volume = 0; a.pause(); clearInterval(iv); if (cb) cb(); }
    }, 60);
  }

  /* ---------- Терминал ---------- */
  var termOpen = false;
  var buffer = "";
  var wrongAttempts = 0;
  function openTerminal() {
    elTerm.classList.add("open");
    termOpen = true;
    buffer = "";
    var html = "<p>" + t("termLine1") + "</p><p>" + t("termLine2") + "</p>";
    if (wrongAttempts >= 2) html += "<p style='color:#9a9a9a;font-style:italic'>" + t("hint") + "</p>";
    html += "<p>" + t("termPrompt") + '<span class="eg-cursor"></span></p>';
    elTermBody.innerHTML = html;
    document.getElementById("egTermHead").textContent = t("termHead");
  }
  function closeTerminal() { elTerm.classList.remove("open"); termOpen = false; }
  document.getElementById("egTermClose").onclick = closeTerminal;
  elTerm.onclick = function (e) { if (e.target === elTerm) closeTerminal(); };

  document.addEventListener("keydown", function (e) {
    if (!termOpen) return;
    if (e.key === "Escape") { closeTerminal(); return; }
    if (e.key === "Enter") {
      if (buffer === "2018") {
        wrongAttempts = 0;
        elTermBody.innerHTML = "<p>" + t("termPrompt") + buffer + "</p><p style='color:#0f0;font-weight:bold'>" + t("granted") + "</p>";
        setTimeout(startHack, 500);
      } else {
        wrongAttempts++;
        var deny = "<p>" + t("termPrompt") + buffer + "</p><p style='color:#f33'>" + t("denied") + "</p>";
        if (wrongAttempts >= 2) deny += "<p style='color:#9a9a9a;font-style:italic'>" + t("hint") + "</p>";
        elTermBody.innerHTML = deny;
        setTimeout(function () { openTerminal(); }, 1400);
      }
      termOpen = false;
      buffer = "";
      return;
    }
    if (e.key === "Backspace") { buffer = buffer.slice(0, -1); }
    else if (e.key.length === 1) { buffer += e.key; }
    elTermBody.innerHTML = "<p>" + t("termLine1") + "</p><p>" + t("termLine2") + "</p><p>" + t("termPrompt") + buffer.replace(/./g, "\u2022") + '<span class="eg-cursor"></span></p>';
  });

  /* ---------- Взлом (матрица) ---------- */
  var matrixTimer = null;
  function startMatrix() {
    var canvas = document.getElementById("egMatrixCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");
    var chars = "アカサタナハマヤラワ0123456789ABCDEF";
    var fs = 16;
    var cols = Math.floor(canvas.width / fs);
    var drops = [];
    for (var i = 0; i < cols; i++) drops[i] = Math.floor(Math.random() * -50);
    matrixTimer = setInterval(function () {
      ctx.fillStyle = "rgba(0,0,0,0.07)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0f0";
      ctx.font = fs + "px monospace";
      for (var c = 0; c < cols; c++) {
        var ch = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(ch, c * fs, drops[c] * fs);
        if (drops[c] * fs > canvas.height && Math.random() > 0.975) drops[c] = 0;
        drops[c]++;
      }
    }, 45);
  }
  function stopMatrix() { if (matrixTimer) { clearInterval(matrixTimer); matrixTimer = null; } }

  function startHack() {
    closeTerminal();
    // погасить фоновую музыку сайта
    var bg = document.getElementById("backgroundAudio");
    if (bg) bg.pause();
    hackAudio.currentTime = 0;
    hackAudio.volume = 0.6;
    hackAudio.play().catch(function () {});
    elMatrix.classList.add("open");
    startMatrix();
    var htext = document.getElementById("egHackText");
    htext.textContent = t("hackInit");
    setTimeout(function () { htext.textContent = ""; }, 3000);
    setTimeout(function () {
      stopMatrix();
      elMatrix.classList.remove("open");
      fadeOut(hackAudio, function () {
        hackAudio.pause();
        showMuseum();
      });
    }, 5000);
  }

  /* ---------- Музей ---------- */
  var photoIndex = 0;
  function showMuseum() {
    document.getElementById("egMuseumTitle").textContent = t("museumTitle");
    document.getElementById("egMuseumSub").textContent = t("museumSub");
    document.getElementById("egMuseumHint").textContent = t("clickHint");
    document.getElementById("egDescClose").textContent = t("close");
    elMuseum.classList.add("open");
    photoIndex = 0;
    renderPhoto();
    museumAudio.currentTime = 0;
    museumAudio.volume = 0.6;
    museumAudio.play().catch(function () {});
  }
  function renderPhoto() {
    var list = museumPhotos();
    var p = list[photoIndex];
    document.getElementById("egFrameImg").src = "assets/museum/" + p.file;
    document.getElementById("egPlaque").textContent = p.caption;
    document.getElementById("egCount").textContent = (photoIndex + 1) + " / " + list.length;
  }
  function nextPhoto() {
    if (photoIndex >= museumPhotos().length - 1) { wakeUp(); return; }
    photoIndex++;
    renderPhoto();
  }
  function prevPhoto() {
    if (photoIndex > 0) { photoIndex--; renderPhoto(); }
  }
  document.getElementById("egNext").onclick = nextPhoto;
  document.getElementById("egPrev").onclick = prevPhoto;
  document.addEventListener("keydown", function (e) {
    if (!elMuseum.classList.contains("open")) return;
    if (e.key === "ArrowRight") nextPhoto();
    if (e.key === "ArrowLeft") prevPhoto();
    if (e.key === "Escape") wakeUp();
  });
  // клик по фото — описание
  document.getElementById("egFrame").onclick = function () {
    var p = museumPhotos()[photoIndex];
    document.getElementById("egDescImg").src = "assets/museum/" + p.file;
    document.getElementById("egDescCap").textContent = p.caption;
    elDesc.classList.add("open");
  };
  document.getElementById("egDescClose").onclick = function () { elDesc.classList.remove("open"); };
  elDesc.onclick = function (e) { if (e.target === elDesc) elDesc.classList.remove("open"); };

  function wakeUp() {
    elDesc.classList.remove("open");
    fadeOut(museumAudio, function () { museumAudio.pause(); });
    elMuseum.classList.remove("open");
    elEnding.classList.add("open");
    elEndHint.textContent = t("doorHint");
  }
  elDoor.onclick = function () {
    doorCreakAudio.currentTime = 0;
    doorCreakAudio.volume = 1;
    doorCreakAudio.play().catch(function () {});
    elEnding.classList.add("brighten");
    var gone = false;
    var toCredits = function () { if (gone) return; gone = true; startCredits(); };
    setTimeout(function () {
      narratorAudio.currentTime = 0;
      narratorAudio.volume = 1;
      narratorAudio.play().catch(toCredits);
      narratorAudio.onended = toCredits;
      setTimeout(toCredits, 4000);
    }, 900);
  };

  /* ---------- Титры ---------- */
  var photoIdx = 0, photoTimer = null;
  function buildCreditsHtml() {
    var lines = CREDITS_LINES[lang()] || CREDITS_LINES.ru;
    return lines.map(function (l) {
      if (!l.t) return "<br>";
      return '<div class="' + l.c + '">' + l.t + "</div>";
    }).join("");
  }
  function startPhotoCycle() {
    var bgs = [elCbg1, elCbg2], cur = 0;
    var show = function () {
      var bg = bgs[cur];
      bg.style.backgroundImage = "url('assets/credits/" + CREDITS_PHOTOS[photoIdx % CREDITS_PHOTOS.length] + "')";
      bg.classList.add("show");
      bgs[1 - cur].classList.remove("show");
      cur = 1 - cur;
      photoIdx++;
    };
    show();
    photoTimer = setInterval(show, 4200);
  }
  function stopPhotoCycle() { if (photoTimer) { clearInterval(photoTimer); photoTimer = null; } }
  function startCredits() {
    elEnding.classList.remove("open");
    elEnding.classList.remove("brighten");
    elCtext.innerHTML = buildCreditsHtml();
    elCredits.classList.add("open");
    creditsMusic.currentTime = 0;
    creditsMusic.volume = 0.7;
    creditsMusic.play().catch(function () {});
    startPhotoCycle();
    setTimeout(function () {
      fadeOut(creditsMusic, function () { creditsMusic.pause(); });
      elCredits.classList.add("fade");
      setTimeout(function () {
        elCredits.classList.remove("open");
        elCredits.classList.remove("fade");
        stopPhotoCycle();
        showWakeup();
      }, 1500);
    }, 20000);
  }

  /* ---------- wake up -> thanks -> возврат ---------- */
  function showWakeup() {
    elWakeupText.textContent = t("wakeup");
    elWakeup.classList.add("open");
  }
  elWakeupText.onclick = function () {
    elWakeup.classList.remove("open");
    showThanks();
  };
  function showThanks() {
    elThanksTitle.textContent = t("thanksTitle");
    elThanksSub.textContent = t("thanksSub");
    elThanks.classList.add("open");
    setTimeout(function () {
      elThanks.classList.remove("open");
      finishReturn();
    }, 4000);
  }
  function finishReturn() {
    applyBinaryTitles();
    window.scrollTo(0, 0);
  }
  function applyBinaryTitles() {
    var heads = document.querySelectorAll("h1[data-i18n], h2[data-i18n]");
    for (var i = 0; i < heads.length; i++) {
      heads[i].textContent = toBinary(heads[i].textContent);
    }
    var footer = document.querySelector("footer");
    if (footer) {
      footer.innerHTML = "© 2026 Demorix · <span>" + toBinary(t("toContinue")) + "</span>";
    }
  }

  /* ---------- Триггер: клик по «Все права защищены» ---------- */
  var rightsEl = document.querySelector('footer [data-i18n="rights"]');
  if (rightsEl) {
    rightsEl.style.cursor = "pointer";
    rightsEl.addEventListener("click", function (e) { e.preventDefault(); openTerminal(); });
  }

  /* ---------- Подсказка пароля: англ. язык + фото заправки x3 ---------- */
  var gasOpenCount = 0;
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImage");
  if (lightbox && lightboxImg) {
    var observer = new MutationObserver(function () {
      if (lightbox.classList.contains("open")) {
        if (lightboxImg.src.indexOf("gas-station.png") !== -1) {
          gasOpenCount++;
          if (gasOpenCount >= 3) {
            var cap = document.querySelector('[data-i18n="photoGas"]');
            if (cap) cap.textContent = "2018";
          }
        }
      }
    });
    observer.observe(lightbox, { attributes: true, attributeFilter: ["class"] });
  }

})();
