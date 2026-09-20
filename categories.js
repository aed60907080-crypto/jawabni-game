/* ============================================================
   جاوبني — سجلّ الفئات
   ------------------------------------------------------------
   مصدر واحد لكل فئات اللعبة: الاسم، الصورة، المجموعة، الرمز.
   صفحة اختيار الفئات تبني بطاقاتها من هنا تلقائياً،
   فإضافة فئة جديدة = سطر واحد هنا + أسئلتها في questions.js
   أو questions-extra.js بنفس الاسم تماماً.

   الحقول:
     name  : اسم الفئة (يجب أن يطابق مفتاح الفئة في بنك الأسئلة حرفياً)
     img   : مسار صورة البطاقة — إن غاب تُولَّد بطاقة رمزية من الإيموجي
     emoji : رمز الفئة (يُستعمل في البطاقة المولّدة وفي الكتيّب)
     tint  : لون البطاقة المولّدة
     group : مجموعة التصنيف لأزرار التصفية
   ============================================================ */

(function (global) {
  "use strict";

  /* مجموعات التصنيف — بترتيب ظهورها في صفحة اختيار الفئات */
  var GROUPS = [
    { id: "all",      label: "كل الفئات",       emoji: "🗂️" },
    { id: "islam",    label: "إسلاميات",        emoji: "🕌" },
    { id: "kuwait",   label: "الكويت",          emoji: "⛵" },
    { id: "gulf",     label: "الخليج",          emoji: "🐪" },
    { id: "world",    label: "العالم",          emoji: "🌍" },
    { id: "history",  label: "تاريخ وحضارات",   emoji: "🏺" },
    { id: "language", label: "لغة وأدب",        emoji: "🔤" },
    { id: "science",  label: "علوم",            emoji: "🔬" },
    { id: "nature",   label: "طبيعة وحياة",     emoji: "🌿" },
    { id: "sport",    label: "رياضة",           emoji: "⚽" },
    { id: "tech",     label: "تقنية",           emoji: "💻" },
    { id: "culture",  label: "ثقافة وفنون",     emoji: "🎭" },
    { id: "media",    label: "ترفيه",           emoji: "🎬" },
    { id: "anime",    label: "أنمي وكرتون",     emoji: "🐉" }
  ];

  /* الفئات مرتّبة داخل كل مجموعة من العام إلى الخاص */
  var CATEGORIES = [
    /* ===== إسلاميات ===== */
    { name: "اسلامي",                  img: "image/islamic.jpg", emoji: "🕌", tint: "#1f7d68", group: "islam" },
    { name: "قرآن وسيرة",              img: "image/قران و السيرة.jpg", emoji: "📖", tint: "#1f7d68", group: "islam" },
    /* الصورة لوحة خطّية «الأنبياء والرسل — عليهم الصلاة والسلام» بلا أي تجسيد */
    { name: "الأنبياء والرسل",         img: "image/الانبياء و الرسل.jpg", emoji: "📜", tint: "#1f7d68", group: "islam" },
    { name: "قصص الأنبياء",            img: "image/قصص الانبياء.jpg", emoji: "📖", tint: "#2a6f5e", group: "islam" },
    { name: "الحج والعمرة",            img: "image/الحج و العمره.jpg", emoji: "🕋", tint: "#1f7d68", group: "islam" },
    { name: "من القارئ",               img: "image/Quraan.png", emoji: "🎧", tint: "#1f7d68", group: "islam" },

    /* ===== الكويت ===== */
    { name: "مناطق الكويت",            img: "image/Kuwait.png", emoji: "📍", tint: "#2f8f7d", group: "kuwait" },
    { name: "مجمعات الكويت",           img: "image/مجمعات الكويت.jpg", emoji: "🏬", tint: "#2f8f7d", group: "kuwait" },
    { name: "شعارات كويتية",           img: "image/شعارات كويتية.jpg", emoji: "🏷️", tint: "#2f8f7d", group: "kuwait" },
    { name: "صيد الكويت",              img: "image/fishing.png", emoji: "🎣", tint: "#2b7d9c", group: "kuwait" },

    /* ===== الخليج ===== */
    { name: "دول الخليج",              img: "image/دول الخليج.jpg", emoji: "🛢️", tint: "#2b7d9c", group: "gulf" },
    { name: "المملكة العربية السعودية", img: "image/المملكه العربية السعوية.jpg", emoji: "🐪", tint: "#1f7d4a", group: "gulf" },
    { name: "الإمارات",                img: "image/الامارات.jpg", emoji: "🏙️", tint: "#2f7f52", group: "gulf" },
    { name: "البحرين",                 img: "image/البحرين.jpg", emoji: "🦪", tint: "#a83232", group: "gulf" },
    { name: "عُمان",                   img: "image/عمان.jpg", emoji: "🪔", tint: "#a13a3a", group: "gulf" },

    /* ===== العالم ===== */
    { name: "دول و عواصم",             img: "image/cca.jpg", emoji: "🏛️", tint: "#2b7d9c", group: "world" },
    { name: "خمن اسم الدولة",          img: "image/Guess-the-country.png", emoji: "🗺️", tint: "#2b7d9c", group: "world" },
    { name: "اعلام",                   img: "image/flags.webp", emoji: "🚩", tint: "#b5453b", group: "world" },
    { name: "خرائط",                   img: "image/mapPointer.jpg", emoji: "🧭", tint: "#2b7d9c", group: "world" },
    { name: "جغرافيا العالم",          img: "image/جغرافيا.jpg", emoji: "🌍", tint: "#2b7d9c", group: "world" },
    { name: "معالم العالم",            img: "image/معالم العالم.jpg", emoji: "🗽", tint: "#2b7d9c", group: "world" },
    { name: "تركيا",                   img: "image/تركيا.jpg", emoji: "🌙", tint: "#a12a2a", group: "world" },
    { name: "مناطق تركيا",             img: "image/مناطق تركيا.jpg", emoji: "🎈", tint: "#8a3a3a", group: "world" },
    { name: "المنظمات الدولية",        img: "image/المنظمة الدولية.jpg", emoji: "🌐", tint: "#2b7d9c", group: "world" },
    { name: "العملات والاقتصاد",       img: "image/العملات والاقتصاد.jpg", emoji: "💰", tint: "#8a7a24", group: "world" },

    /* ===== تاريخ وحضارات ===== */
    { name: "التاريخ",                 img: "image/hist.jpg", emoji: "🏺", tint: "#a06a2c", group: "history" },
    { name: "الحضارات القديمة",        img: "image/الحضارات القديمة.jpg", emoji: "🏛️", tint: "#a06a2c", group: "history" },

    /* ===== لغة وأدب ===== */
    { name: "لغة عربية",               img: "image/لغة العربية.jpg", emoji: "🔤", tint: "#3d6ea5", group: "language" },
    { name: "الشعر العربي",            img: "image/الشعر العربي.jpg", emoji: "🪶", tint: "#8a5a2a", group: "language" },
    { name: "أمثال وألغاز",            img: "image/امثال و الغاز.jpg", emoji: "🧩", tint: "#4a5fb5", group: "language" },

    /* ===== علوم ===== */
    { name: "علوم",                    img: "image/علوم.jpg", emoji: "🔬", tint: "#4a5fb5", group: "science" },
    { name: "الفضاء والفلك",           img: "image/الفضاء والفلك.jpg", emoji: "🪐", tint: "#3b3f8f", group: "science" },
    { name: "جسم الإنسان",             img: "image/جسم الانسان.jpg", emoji: "🫀", tint: "#a63b4a", group: "science" },
    { name: "الكيمياء",                img: "image/الكيمياء.jpg", emoji: "⚗️", tint: "#2f7f6a", group: "science" },
    { name: "الفيزياء",                img: "image/الفيزياء.jpg", emoji: "🧲", tint: "#3b6fb5", group: "science" },
    { name: "الاختراعات والمخترعون",   img: "image/الاختراعات والمخترعون.jpg", emoji: "💡", tint: "#b58a24", group: "science" },
    { name: "ألغاز رياضية",            img: "image/الغاز رياضية.jpg", emoji: "🔢", tint: "#4a5fb5", group: "science" },

    /* ===== طبيعة وحياة ===== */
    { name: "حيوانات",                 img: "image/حيوانات.jpg", emoji: "🦁", tint: "#a8792a", group: "nature" },
    { name: "الطيور",                  img: "image/الطيور.jpg", emoji: "🦅", tint: "#2f7f9c", group: "nature" },
    { name: "البحار والمحيطات",        img: "image/البحار و المحيطات.jpg", emoji: "🌊", tint: "#1f6fa5", group: "nature" },
    { name: "النباتات والأشجار",       img: "image/النباتات و الاشجار.jpg", emoji: "🌳", tint: "#2f8f52", group: "nature" },
    { name: "الديناصورات",             img: "image/الديناصورات.jpg", emoji: "🦕", tint: "#5d7a2f", group: "nature" },

    /* ===== رياضة ===== */
    { name: "رياضة",                   img: "image/رياضة.jpg", emoji: "🏅", tint: "#2f8f52", group: "sport" },
    { name: "كرة القدم العالمية",      img: "image/كرة القدم العالمية.jpg", emoji: "⚽", tint: "#2f8f52", group: "sport" },
    { name: "كأس العالم",              img: "image/كاس العالم.jpg", emoji: "🏆", tint: "#c49a24", group: "sport" },
    { name: "الألعاب الأولمبية",       img: "image/الالعاب الاولمبية.jpg", emoji: "🥇", tint: "#c49a24", group: "sport" },
    { name: "تخمين اللاعب",            img: "image/who is the player.jpg", emoji: "⚽", tint: "#2f8f52", group: "sport" },
    { name: "من صاحب الهدف",           img: "image/من صاحب الهدف.jpg", emoji: "🥅", tint: "#1f7d4a", group: "sport" },
    { name: "شعارات أندية",            img: "image/شعارات اندية.jpg", emoji: "🛡️", tint: "#2f8f52", group: "sport" },

    /* ===== تقنية ===== */
    { name: "تقنية",                   img: "image/تقنية.jpg", emoji: "💻", tint: "#3b6fb5", group: "tech" },
    { name: "الحاسوب والبرمجة",        img: "image/الحاسوب والبرمجة.jpg", emoji: "🖥️", tint: "#3b6fb5", group: "tech" },
    { name: "سيارات",                  img: "image/cars.jpg", emoji: "🚗", tint: "#8a3d3d", group: "tech" },
    { name: "الطيران والطائرات",       img: "image/الطيران و الطائرات.jpg", emoji: "✈️", tint: "#3b6fb5", group: "tech" },

    /* ===== ثقافة وفنون ===== */
    { name: "مشاهير عرب",              img: "image/مشاهير عرب.jpg", emoji: "⭐", tint: "#8a3570", group: "culture" },
    { name: "أغاني عربية",             img: "image/اغاني عربية.jpg", emoji: "🎵", tint: "#8a3570", group: "culture" },
    { name: "عدنيات",                  img: "image/oud3.png", emoji: "🪘", tint: "#a06a2c", group: "culture" },
    { name: "الموسيقى والآلات",        img: "image/الموسيقى و الالات.jpg", emoji: "🎼", tint: "#8a3570", group: "culture" },
    { name: "طعام ومطبخ",              img: "image/طعام و مطبخ.jpg", emoji: "🍽️", tint: "#b5652c", group: "culture" },
    { name: "منتجات",                  img: "image/منتجات.jpg", emoji: "🛒", tint: "#b5652c", group: "culture" },
    { name: "ولا كلمة",                img: "image/ولا كلمة.jpg", emoji: "🤫", tint: "#6a3fa0", group: "culture" },
    { name: "أطفال",                   img: "image/اطفال.jpg", emoji: "🧸", tint: "#c0567f", group: "culture" },

    /* ===== ترفيه: مسلسلات وأفلام وألعاب ===== */
    { name: "خمن اسم المسلسل",         img: "image/KWS.png", emoji: "📺", tint: "#6b3030", group: "media" },
    { name: "ارطغرل",                  img: "image/ErtugurlBey.png", emoji: "🗡️", tint: "#8a5a2a", group: "media" },
    { name: "المؤسس عثمان",            img: "image/المؤسس عثمان.jpg", emoji: "⚔️", tint: "#7a4a22", group: "media" },
    { name: "الحفره",                  img: "image/cukur1.png", emoji: "🎥", tint: "#6b3030", group: "media" },
    { name: "السينما العالمية",        img: "image/السينما العالمية.jpg", emoji: "🎞️", tint: "#6a3fa0", group: "media" },
    { name: "سترينجر ثينجز",           img: "image/سترينجر ثنجز.jpg", emoji: "🔦", tint: "#8a2b2b", group: "media" },
    { name: "لورد أوف ذا رينغز",       img: "image/لورد اوف ذا رينق.jpg", emoji: "💍", tint: "#7a6320", group: "media" },
    { name: "ألعاب فيديو",             img: "image/العاب فيديو.jpg", emoji: "🎮", tint: "#6a3fa0", group: "media" },

    /* ===== أنمي وكرتون ===== */
    { name: "أفلام وأنمي",             img: "image/افلام و انمي.jpg", emoji: "🎬", tint: "#8a3570", group: "anime" },
    { name: "البوكيمون",               img: "image/pokemons.png", emoji: "⚡", tint: "#c49a24", group: "anime" },
    { name: "دراغون بول",              img: "image/دراغون بول.jpg", emoji: "🐉", tint: "#c4622a", group: "anime" },
    { name: "المحقق كونان",            img: "image/المحقق كونان.jpg", emoji: "🔍", tint: "#3b4fa0", group: "anime" },
    /* صورتا «ون بيس» و«ناروتو» غلاف الأنمي من AniList (مصدر صور شخصياتهما) */
    { name: "ون بيس",                  img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-ELSYx3yMPcKM.jpg", emoji: "🏴‍☠️", tint: "#b8322a", group: "anime" },
    { name: "ناروتو",                  img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20-dE6UHbFFg1A5.jpg", emoji: "🍥", tint: "#d9711f", group: "anime" }
  ];

  /* ---------- بطاقة مولّدة من الإيموجي (SVG بلا أي ملفات خارجية) ---------- */
  function artFor(cat) {
    var tint = cat.tint || "#1f7d68";
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">' +
        '<defs>' +
          '<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
            '<stop offset="0%" stop-color="' + tint + '"/>' +
            '<stop offset="100%" stop-color="#04120f"/>' +
          '</linearGradient>' +
          '<radialGradient id="h" cx="50%" cy="42%" r="46%">' +
            '<stop offset="0%" stop-color="#ffffff" stop-opacity=".26"/>' +
            '<stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>' +
          '</radialGradient>' +
        '</defs>' +
        '<rect width="400" height="300" fill="url(#g)"/>' +
        '<rect width="400" height="300" fill="url(#h)"/>' +
        '<circle cx="200" cy="132" r="86" fill="#04120f" fill-opacity=".28"/>' +
        '<circle cx="200" cy="132" r="86" fill="none" stroke="#e7b740" stroke-opacity=".45" stroke-width="2"/>' +
        '<text x="200" y="132" font-size="96" text-anchor="middle" dominant-baseline="central">' +
          esc(cat.emoji || "🎲") +
        '</text>' +
      '</svg>';
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* صورة البطاقة النهائية */
  function imageFor(cat) {
    return cat.img || artFor(cat);
  }

  /* البحث عن فئة بالاسم */
  function find(name) {
    var n = String(name || "").trim();
    for (var i = 0; i < CATEGORIES.length; i++) {
      if (CATEGORIES[i].name === n) return CATEGORIES[i];
    }
    return null;
  }

  /* ---------- معلومات الفئة (زر «!» أعلى بطاقتها) ----------
     وصف قصير لما تسأل عنه كل فئة، وحقائق تُحسب من بنك الأسئلة. */
  var INFO = {
    "اسلامي": "أسئلة عامة في العقيدة والعبادات والفقه والتاريخ الإسلامي.",
    "قرآن وسيرة": "سور القرآن وآياته، وأحداث السيرة النبوية وغزواتها وصحابتها.",
    "التاريخ": "أحداث وشخصيات ومعارك غيّرت تاريخ العالم والعرب.",
    "لغة عربية": "النحو والصرف والمعاني والمفردات وجمع الكلمات وأضدادها.",
    "دول و عواصم": "اعرف عاصمة الدولة — من الدول المشهورة إلى النادرة.",
    "خمن اسم الدولة": "شكل الدولة وحدها على الخريطة — ما اسمها؟",
    "اعلام": "صورة علم — ما الدولة صاحبة هذا العلم؟",
    "خرائط": "خريطة العالم والدولة ملوّنة عليها — ما اسم هذه الدولة؟",
    "جغرافيا العالم": "الأنهار والجبال والقارات والبحار وأرقام الجغرافيا.",
    "علوم": "علوم عامة: أحياء وكيمياء وفيزياء وأرض بأسئلة سهلة إلى صعبة.",
    "حيوانات": "أكبر الحيوانات وأسرعها وطباعها وموطنها.",
    "رياضة": "رياضات العالم كلها: السلة والتنس والملاكمة والسيارات والغولف والكريكيت والرياضات الشتوية والتراثية، و«ما اسم هذه الرياضة؟» بالصورة.",
    "تخمين اللاعب": "صورة لاعب كرة قدم — من هذا اللاعب؟ من النجوم الحاليين إلى الأساطير ونجوم الخليج.",
    "من صاحب الهدف": "مقطع قصير من تيك توك لهدف مشهور بالأبيض والأسود — من صاحب هذا الهدف؟",
    "سيارات": "صورة سيارة — ما نوعها، وما اسمها، وأين صُنعت، وما موديلها؟",
    "تقنية": "ما اسم هذا الجهاز؟ وما نوعه؟ وأسئلة عامة عن التقنية والإنترنت.",
    "ألعاب فيديو": "ما اسم هذه اللعبة؟ — لقطة من داخل اللعبة، أو مقطع لعب 30 ثانية.",
    "أفلام وأنمي": "من هذه الشخصية؟ وماذا حصل في هذا المشهد؟ وأسئلة عامة عن الأفلام والأنمي.",
    "البوكيمون": "صورة بوكيمون من موسوعة البوكيمون الرسمية — من هو، وما نوعه؟",
    "ارطغرل": "من هذه الشخصية؟ وماذا حصل في هذا المشهد؟ — بصور شخصيات «قيامة أرطغرل» ومشاهده.",
    "المؤسس عثمان": "من هذه الشخصية؟ وماذا حصل في هذا المشهد؟ — بصور شخصيات «المؤسس عثمان» ومشاهده.",
    "الحفره": "من هذه الشخصية؟ وماذا حصل في هذا المشهد؟ — بصور ممثلي «الحفرة» ومشاهده.",
    "خمن اسم المسلسل": "مشهد من مسلسل خليجي في مقطع قصير — ما اسم هذا المسلسل؟",
    "من القارئ": "استمع لتلاوة — من القارئ؟",
    "عدنيات": "استمع لمقطع صوتي عدني — من المطرب صاحب الصوت؟",
    "أغاني عربية": "استمع لمقطع من أغنية عربية — ما اسم الأغنية؟",
    "طعام ومطبخ": "أطباق الشعوب ومكوّناتها وأصولها.",
    "مشاهير عرب": "صورة مشهور عربي — من هذه الشخصية؟",
    "أمثال وألغاز": "أكمل المثل أو حلّ اللغز.",
    "ولا كلمة": "امسحوا الباركود بجوال الممثّل فيرى الكلمة وحده، ثم يمثّلها لفريقه بلا كلام.",
    "صيد الكويت": "صورة سمكة — ما نوعها؟ من أسماك الكويت والخليج (الزبيدي، الهامور…) وأسماك العالم المعروفة.",
    "مجمعات الكويت": "صورة مجمع أو سوق في الكويت — ما اسمه، وأين يقع؟",
    "منتجات": "ما اسم هذا المنتج؟ — منتجات الجمعية: شيبس وشوكولاتة ومشروبات، والاسم مغطّى على العبوة.",
    "مناطق الكويت": "خريطة شوارع لمنطقة كويتية وعليها حلقة — ما اسم المنطقة؟",
    "الفضاء والفلك": "الكواكب والنجوم والمجرات ورحلات الفضاء.",
    "جسم الإنسان": "أعضاء الجسم وأجهزته وأرقامه العجيبة.",
    "الكيمياء": "العناصر والرموز والتفاعلات والمركّبات.",
    "الفيزياء": "القوى والطاقة والضوء والكهرباء والعلماء.",
    "ألغاز رياضية": "حسابات وألغاز أرقام تحتاج تفكيراً سريعاً.",
    "الاختراعات والمخترعون": "من اخترع ماذا، ومتى؟",
    "الديناصورات": "أنواع الديناصورات وعصورها وأحجامها.",
    "الطيور": "أنواع الطيور وطباعها وأرقامها العجيبة.",
    "البحار والمحيطات": "المحيطات والبحار والكائنات البحرية.",
    "النباتات والأشجار": "النباتات والأشجار والزهور وفوائدها.",
    "كرة القدم العالمية": "أسئلة عامة مهمة: القوانين والبطولات والأندية والملاعب والأساليب والأرقام القياسية.",
    "كأس العالم": "كل بطولات كأس العالم 1930–2026: البطل، والقائد الذي رفع الكأس، والهدّاف.",
    "الألعاب الأولمبية": "أسئلة عامة: الرموز والتاريخ والمدن المستضيفة والرياضات والأبطال، والكويت والعرب في الأولمبياد.",
    "الحضارات القديمة": "الفراعنة والرومان وبلاد الرافدين وغيرها.",
    "معالم العالم": "أشهر المعالم والأبراج والتماثيل في العالم وأماكنها.",
    "الطيران والطائرات": "الطائرات وشركات الطيران وتاريخ الطيران.",
    "الحاسوب والبرمجة": "لغات البرمجة ومكوّنات الحاسوب وروّاده.",
    "العملات والاقتصاد": "عملات الدول والشركات الكبرى ومصطلحات الاقتصاد.",
    "المنظمات الدولية": "الأمم المتحدة والمنظمات العالمية ومقرّاتها.",
    "الشعر العربي": "الشعراء العرب وألقابهم ومعلّقاتهم وأشهر قصائدهم.",
    "الموسيقى والآلات": "الآلات الموسيقية والمقامات والموسيقيون.",
    "السينما العالمية": "الأفلام والمخرجون والجوائز العالمية.",
    "الأنبياء والرسل": "أسماء الأنبياء وأقوامهم ومعجزاتهم.",
    "قصص الأنبياء": "أحداث قصص الأنبياء كما وردت في القرآن.",
    "الحج والعمرة": "المناسك والمشاعر وأحكام الحج والعمرة.",
    "دراغون بول": "صورة شخصية من «دراغون بول» — من هذه الشخصية؟",
    "المحقق كونان": "صورة شخصية من «المحقق كونان» — من هذه الشخصية؟",
    "ون بيس": "صورة شخصية من «ون بيس» — من هذه الشخصية؟",
    "ناروتو": "صورة شخصية من «ناروتو» — من هذه الشخصية؟",
    "سترينجر ثينجز": "من هذه الشخصية؟ وماذا حصل في هذا المقطع؟ — شخصيات «سترينجر ثينجز» ومشاهدها المشهورة.",
    "لورد أوف ذا رينغز": "من هذه الشخصية؟ وماذا حصل في هذا المشهد؟ — شخصيات «سيد الخواتم» ومشاهدها المشهورة (مقاطع 30 ثانية).",
    "المملكة العربية السعودية": "مدن ومعالم وتاريخ وتراث السعودية.",
    "البحرين": "مدن ومعالم وتاريخ وتراث البحرين.",
    "الإمارات": "الإمارات السبع ومعالمها وتاريخها.",
    "عُمان": "ولايات ومعالم وتاريخ وتراث سلطنة عُمان.",
    "دول الخليج": "أسئلة مشتركة عن دول مجلس التعاون الخليجي.",
    "تركيا": "مدن ومعالم وتاريخ وثقافة تركيا.",
    "مناطق تركيا": "خريطة تركيا مرقّمة — ما اسم المنطقة صاحبة الرقم؟",
    "أطفال": "للأعمار ٦–١٥: رياضيات وعلوم ورياضة وأسماك وإنجليزي.",
    "شعارات أندية": "رمز شعار نادٍ بلا كتابة — لمن شعار النادي هذا؟",
    "شعارات كويتية": "شعار جهة كويتية بلا كتابة — لمن هذا الشعار؟"
  };

  function groupLabel(id) {
    for (var i = 0; i < GROUPS.length; i++) if (GROUPS[i].id === id) return GROUPS[i].emoji + " " + GROUPS[i].label;
    return "";
  }

  /* معلومات الفئة: الوصف، والمجموعة، وعدد الأسئلة، والمستويات، وأنواع الأسئلة */
  function infoFor(name) {
    var cat = find(name) || { name: name };
    var list = (global.questionsData || {})[name] || [];
    var levels = {}, media = { img: 0, audio: 0, video: 0, map: 0 };
    list.forEach(function (q) {
      levels[q.l] = (levels[q.l] || 0) + 1;
      if (q.audio) media.audio++;
      else if (q.yt || q.tt || q.video) media.video++;
      else if (q.pin || q.streets) media.map++;
      else if (q.img) media.img++;
    });
    return {
      name: cat.name,
      emoji: cat.emoji || "❔",
      text: INFO[name] || "",
      group: groupLabel(cat.group),
      count: list.length,
      levels: Object.keys(levels).length,
      media: media
    };
  }

  /* عدد أسئلة الفئة من بنك الأسئلة */
  function countFor(name) {
    var data = global.questionsData || {};
    return (data[name] || []).length;
  }

  /* الفئات الجاهزة للّعب فقط (لها أسئلة) */
  function playable() {
    return CATEGORIES.filter(function (c) { return countFor(c.name) > 0; });
  }

  global.CATEGORIES  = CATEGORIES;
  global.CAT_GROUPS  = GROUPS;
  global.CategoryLib = {
    all: CATEGORIES,
    groups: GROUPS,
    find: find,
    art: artFor,
    image: imageFor,
    count: countFor,
    info: infoFor,
    playable: playable
  };

})(typeof window !== "undefined" ? window : this);
