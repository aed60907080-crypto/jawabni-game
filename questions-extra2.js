/* ============================================================
   جاوبني — الدفعة الثانية من الفئات الإضافية
   ------------------------------------------------------------
   يُحمَّل بعد questions.js و questions-extra.js ويدمج فئاته
   داخل questionsData نفسه.

   حقل iq اختياري: عبارة البحث التي يستعملها محرّك الصور.
   في فئات الأنمي والمسلسلات نضع الاسم بالحروف اللاتينية
   لأن نتائج البحث عنه أدقّ بكثير من الاسم المعرّب.
   ============================================================ */

(function () {
  "use strict";

  var extra = {};

  /* ---------- دراغون بول (46 سؤالاً) ----------
     «من هذه الشخصية؟» — صورة الشخصية من AniList، من الأشهر (المستوى
     الأول) إلى الأقل ظهوراً. تشمل دراغون بول وزد وسوبر. */
  extra["دراغون بول"] = [
    { l: 1, q: "من هذه الشخصية؟", a: "غوكو (سون غوكو)", img: "https://s4.anilist.co/file/anilistcdn/character/large/246-wsRRr6z1kii8.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "فيجيتا — أمير السايان", img: "https://s4.anilist.co/file/anilistcdn/character/large/b913-NIFkKazWM8VO.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "غوهان — ابن غوكو الأكبر", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2093-kdFZhqcNSsqW.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "بيكولو", img: "https://s4.anilist.co/file/anilistcdn/character/large/b914-KuS8AWjqBrqa.jpg" },
    { l: 1, q: "من هذه الشخصية؟", a: "بولما", img: "https://s4.anilist.co/file/anilistcdn/character/large/b678-2YCe13F0tFos.jpg" },
    { l: 1, q: "من هذه الشخصية؟", a: "فريزا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b3694-bDfOdSSdFfPv.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "كريلين", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2159-qtEuMYyOUkwY.jpg" },
    { l: 1, q: "من هذه الشخصية؟", a: "شنرون — تنين الكرات السبع", img: "https://s4.anilist.co/file/anilistcdn/character/large/6127.jpg" },
    { l: 1, q: "من هذه الشخصية؟", a: "تشي تشي — زوجة غوكو", img: "https://s4.anilist.co/file/anilistcdn/character/large/2102.jpg" },
    { l: 2, q: "من هذه الشخصية؟", a: "ترانكس — ابن فيجيتا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2707-YKWmn4q87oF8.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "سيل", img: "https://s4.anilist.co/file/anilistcdn/character/large/3908.jpg" },
    { l: 2, q: "من هذه الشخصية؟", a: "ماجين بو", img: "https://s4.anilist.co/file/anilistcdn/character/large/1012.jpg" },
    { l: 2, q: "من هذه الشخصية؟", a: "المعلّم روشي (موتين روشي)", img: "https://s4.anilist.co/file/anilistcdn/character/large/b6167-aMPt1bHf5YbV.jpg" },
    { l: 2, q: "من هذه الشخصية؟", a: "الرجل الآلي 18 (أندرويد 18)", img: "https://s4.anilist.co/file/anilistcdn/character/large/b4318-HfIy9rOIOZXM.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "غوتين — ابن غوكو الأصغر", img: "https://s4.anilist.co/file/anilistcdn/character/large/2551.jpg" },
    { l: 2, q: "من هذه الشخصية؟", a: "فيديل — زوجة غوهان", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2111-9XqkV0tpjRPB.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "بيروس — إله الدمار", img: "https://s4.anilist.co/file/anilistcdn/character/large/b76348-pGWrznfxgPIV.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "يامتشا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b4014-of2ONLvA7T8p.jpg" },
    { l: 3, q: "من هذه الشخصية؟", a: "تينشينهان", img: "https://s4.anilist.co/file/anilistcdn/character/large/b5499-Cn9kTD2J9dU5.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "الرجل الآلي 17 (أندرويد 17)", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2147-AQ0iJ9QEmwPf.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "باردوك — والد غوكو", img: "https://s4.anilist.co/file/anilistcdn/character/large/b6122-N8XCxV2YPd1r.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "ويس — ملاك بيروس ومعلّمه", img: "https://s4.anilist.co/file/anilistcdn/character/large/b76346-BNh2DE5Rh2IW.jpg" },
    { l: 3, q: "من هذه الشخصية؟", a: "مستر شيطان (هركول) — والد فيديل", img: "https://s4.anilist.co/file/anilistcdn/character/large/9377.jpg" },
    { l: 3, q: "من هذه الشخصية؟", a: "السيد بوبو", img: "https://s4.anilist.co/file/anilistcdn/character/large/6106.jpg" },
    { l: 3, q: "من هذه الشخصية؟", a: "بان — ابنة غوهان", img: "https://s4.anilist.co/file/anilistcdn/character/large/3168.jpg" },
    { l: 3, q: "من هذه الشخصية؟", a: "غوكو بلاك", img: "https://s4.anilist.co/file/anilistcdn/character/large/b126199-SKYF7o73fQtX.jpg" },
    { l: 3, q: "من هذه الشخصية؟", a: "تشاوزو", img: "https://s4.anilist.co/file/anilistcdn/character/large/2151.jpg" },
    { l: 4, q: "من هذه الشخصية؟", a: "راديتز — أخو غوكو", img: "https://s4.anilist.co/file/anilistcdn/character/large/6155.jpg" },
    { l: 4, q: "من هذه الشخصية؟", a: "نابا", img: "https://s4.anilist.co/file/anilistcdn/character/large/5224.jpg" },
    { l: 4, q: "من هذه الشخصية؟", a: "جيرين", img: "https://s4.anilist.co/file/anilistcdn/character/large/b126257-nGjgbsnxZkUB.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "هيت — القاتل المأجور", img: "https://s4.anilist.co/file/anilistcdn/character/large/b126883-TeOFpUuzgqgW.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "دندي", img: "https://s4.anilist.co/file/anilistcdn/character/large/6273.jpg" },
    { l: 4, q: "من هذه الشخصية؟", a: "كايو الشمال (الملك كاي)", img: "https://s4.anilist.co/file/anilistcdn/character/large/4850.jpg" },
    { l: 4, q: "من هذه الشخصية؟", a: "أولونغ", img: "https://s4.anilist.co/file/anilistcdn/character/large/2108.jpg" },
    { l: 4, q: "من هذه الشخصية؟", a: "بوار", img: "https://s4.anilist.co/file/anilistcdn/character/large/b677-PTNZaPeuV1Dx.jpg" },
    { l: 4, q: "من هذه الشخصية؟", a: "ياجيروبي", img: "https://s4.anilist.co/file/anilistcdn/character/large/2097.jpg" },
    { l: 4, q: "من هذه الشخصية؟", a: "برولي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b4945-iE59qIP7TxPu.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "الرجل الآلي 16 (أندرويد 16)", img: "https://s4.anilist.co/file/anilistcdn/character/large/2099.jpg" },
    { l: 5, q: "من هذه الشخصية؟", a: "كارين — القط حارس البرج", img: "https://s4.anilist.co/file/anilistcdn/character/large/7309.jpg" },
    { l: 5, q: "من هذه الشخصية؟", a: "تاو باي باي", img: "https://s4.anilist.co/file/anilistcdn/character/large/2131.jpg" },
    { l: 5, q: "من هذه الشخصية؟", a: "غينيو — قائد فرقة غينيو", img: "https://s4.anilist.co/file/anilistcdn/character/large/6134.jpg" },
    { l: 5, q: "من هذه الشخصية؟", a: "كامي — حارس الأرض", img: "https://s4.anilist.co/file/anilistcdn/character/large/6108.jpg" },
    { l: 5, q: "من هذه الشخصية؟", a: "لانش", img: "https://s4.anilist.co/file/anilistcdn/character/large/2105-u5dq4fBpSho9.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "الملك بيكولو (بيكولو دايماو)", img: "https://s4.anilist.co/file/anilistcdn/character/large/9767.jpg" },
    { l: 5, q: "من هذه الشخصية؟", a: "أوب", img: "https://s4.anilist.co/file/anilistcdn/character/large/9392.jpg" },
    { l: 5, q: "من هذه الشخصية؟", a: "ماي — تابعة بيلاف", img: "https://s4.anilist.co/file/anilistcdn/character/large/2143.jpg" }
  ];

  /* ---------- ون بيس (50 سؤالاً) ----------
     «من هذه الشخصية؟» — صورة الشخصية من AniList، من الأشهر (المستوى
     الأول: طاقم قبعة القش) إلى الأقل ظهوراً. */
  extra["ون بيس"] = [
    { l: 1, q: "من هذه الشخصية؟", a: "مونكي دي لوفي — قبطان قراصنة قبعة القش", img: "https://s4.anilist.co/file/anilistcdn/character/large/b40-MNypXsxSRb1R.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "رورونوا زورو", img: "https://s4.anilist.co/file/anilistcdn/character/large/b62-S7oAeA9WInjV.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "سانجي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b305-6lisPmHtCnLT.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "نامي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b723-vp5hPptgnNEC.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "أوسوب", img: "https://s4.anilist.co/file/anilistcdn/character/large/b724-GFGgI9AJQkfy.jpg" },
    { l: 1, q: "من هذه الشخصية؟", a: "توني توني تشوبر", img: "https://s4.anilist.co/file/anilistcdn/character/large/b309-H64NhbJ2ywIQ.jpg" },
    { l: 1, q: "من هذه الشخصية؟", a: "نيكو روبين", img: "https://s4.anilist.co/file/anilistcdn/character/large/b61-ywXUyyocEEqt.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "بورتغاس دي إيس — أخو لوفي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2072-Lc6jEdsueJUK.jpg" },
    { l: 1, q: "من هذه الشخصية؟", a: "شانكس ذو الشعر الأحمر", img: "https://s4.anilist.co/file/anilistcdn/character/large/b727-wUJx7M1z5xON.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "بروك", img: "https://s4.anilist.co/file/anilistcdn/character/large/b5627-av8oD3zhKvDl.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "فرانكي", img: "https://s4.anilist.co/file/anilistcdn/character/large/n64-ChX6ZzHHjXqA.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "جينبي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b18938-yZANEfjsVhW4.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "ترافلغار لو", img: "https://s4.anilist.co/file/anilistcdn/character/large/b13767-U604OJN9dxCn.jpg" },
    { l: 2, q: "من هذه الشخصية؟", a: "بوا هانكوك", img: "https://s4.anilist.co/file/anilistcdn/character/large/b16342-kVOF6V5Q94go.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "إدوارد نيوغيت (اللحية البيضاء)", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2751-NnzW0N2vCTjX.jpg" },
    { l: 2, q: "من هذه الشخصية؟", a: "سابو — أخو لوفي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b32893-3weZS61cdwLD.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "باغي المهرّج", img: "https://s4.anilist.co/file/anilistcdn/character/large/n725-g04AaiaK5f9B.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "غول دي روجر — ملك القراصنة", img: "https://s4.anilist.co/file/anilistcdn/character/large/b4883-0t76xH00sehO.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "مونكي دي غارب — جدّ لوفي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b8064-dPltKaZ8RAsj.jpg" },
    { l: 2, q: "من هذه الشخصية؟", a: "دونكيخوتي دوفلامينغو", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2754-B4gGSlNYgsyh.jpg" },
    { l: 3, q: "من هذه الشخصية؟", a: "دراكيول ميهوك", img: "https://s4.anilist.co/file/anilistcdn/character/large/n2064-OpnF4nLi6bvL.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "كروكودايل", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2749-e8ebEBN1SlS2.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "نفرتاري فيفي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b726-DqAIpscMuYYx.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "مارشال دي تيتش (اللحية السوداء)", img: "https://s4.anilist.co/file/anilistcdn/character/large/b3331-7ZJDc4BNv9Yp.jpg" },
    { l: 3, q: "من هذه الشخصية؟", a: "كايدو", img: "https://s4.anilist.co/file/anilistcdn/character/large/b46109-MT7Hm4Bk93In.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "شارلوت لينلين (بيغ مام)", img: "https://s4.anilist.co/file/anilistcdn/character/large/b54495-3x1TzSzPEOLd.jpg" },
    { l: 3, q: "من هذه الشخصية؟", a: "سيلفرز رايلي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b17142-OXOpztWZIE2A.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "سموكر", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2753-Y2ja8Pl6PRs0.jpg" },
    { l: 3, q: "من هذه الشخصية؟", a: "ياماتو", img: "https://s4.anilist.co/file/anilistcdn/character/large/b176840-8KRqXXLJeLOg.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "كوبي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b12361-H0SmgKxZ9T61.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "شارلوت كاتاكوري", img: "https://s4.anilist.co/file/anilistcdn/character/large/b124077-TODX2ThCdyx2.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "كوزان (الأدميرال أوكيجي)", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2752-0ENS2a39muDz.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "بورسالينو (الأدميرال كيزارو)", img: "https://s4.anilist.co/file/anilistcdn/character/large/b21093-Pc4kOjUn3ZkZ.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "ساكازوكي (الأدميرال أكاينو)", img: "https://s4.anilist.co/file/anilistcdn/character/large/b22687-tCQVpj6wZhRk.jpg" },
    { l: 4, q: "من هذه الشخصية؟", a: "بارثولوميو كوما", img: "https://s4.anilist.co/file/anilistcdn/character/large/b7453-c3MArieFBs9w.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "يوستاس كيد", img: "https://s4.anilist.co/file/anilistcdn/character/large/b14989-uykLqnBTdAc2.jpg" },
    { l: 4, q: "من هذه الشخصية؟", a: "إينيل", img: "https://s4.anilist.co/file/anilistcdn/character/large/b1541-6c8RouunoL88.jpg" },
    { l: 4, q: "من هذه الشخصية؟", a: "ماركو", img: "https://s4.anilist.co/file/anilistcdn/character/large/b9323-tGArly93xBZv.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "مونكي دي دراغون — والد لوفي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b4884-iBn6FzQ2ESLC.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "أوتا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b270493-pviD8gBS5BXW.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "دونكيخوتي روسينانتي (كورازون)", img: "https://s4.anilist.co/file/anilistcdn/character/large/b120536-PxdNxEhQwE8d.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "بيرونا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b7467-0xxnaxQGfhkY.jpg" },
    { l: 5, q: "من هذه الشخصية؟", a: "بون كلاي (بينثام)", img: "https://s4.anilist.co/file/anilistcdn/character/large/n4875-Ga2TVjP70R6r.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "كوزوكي أودين", img: "https://s4.anilist.co/file/anilistcdn/character/large/b149797-UmdR7up3kgoK.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "روب لوتشي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b5677-ZrZunVe7Kq5P.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "جويلري بوني", img: "https://s4.anilist.co/file/anilistcdn/character/large/b20295-LqpG4Y3HkKxu.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "إيشو (الأدميرال فوجيتورا)", img: "https://s4.anilist.co/file/anilistcdn/character/large/b82259-NFdvvcSHup7Z.jpg" },
    { l: 5, q: "من هذه الشخصية؟", a: "تاشيغي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2750-j3Rf9SC37ehT.jpg" },
    { l: 5, q: "من هذه الشخصية؟", a: "لابون — الحوت", img: "https://s4.anilist.co/file/anilistcdn/character/large/b5413-4j9gPyHIiYim.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "شيراهوشي", img: "https://s4.anilist.co/file/anilistcdn/character/large/40273.jpg" }
  ];

  /* ---------- ناروتو (50 سؤالاً) ----------
     «من هذه الشخصية؟» — صورة الشخصية من AniList (ناروتو وشيبودن)، من
     الأشهر (المستوى الأول) إلى الأقل ظهوراً. */
  extra["ناروتو"] = [
    { l: 1, q: "من هذه الشخصية؟", a: "ناروتو أوزوماكي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b17-phjcWCkRuIhu.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "ساسكي أوتشيها", img: "https://s4.anilist.co/file/anilistcdn/character/large/b13-SISLEw1oAD7a.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "ساكورا هارونو", img: "https://s4.anilist.co/file/anilistcdn/character/large/b145-IorfpI8arxeX.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "كاكاشي هاتاكي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b85-mkVBh2yjxjmx.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "إيتاتشي أوتشيها", img: "https://s4.anilist.co/file/anilistcdn/character/large/b14-9Kb1E5oel1ke.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "غارا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b1662-4E5J0LX9jZKZ.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "جيرايا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2423-RO5MyoXSA9OL.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "هيناتا هيوغا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b1555-Q41GLTV3FvYF.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "روك لي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b306-oUTOO45xInXt.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "كوراما — الثعلب ذو الذيول التسعة", img: "https://s4.anilist.co/file/anilistcdn/character/large/b7407-D8MYzhbuy8zu.jpg" },
    { l: 2, q: "من هذه الشخصية؟", a: "شيكامارو نارا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2007-QaesJlIZDifj.jpg" },
    { l: 2, q: "من هذه الشخصية؟", a: "ميناتو ناميكازي — الهوكاغي الرابع", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2535-Xq9WKNPJQEt3.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "باين", img: "https://s4.anilist.co/file/anilistcdn/character/large/b3180-ITMGBLWNBOgV.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "مادارا أوتشيها", img: "https://s4.anilist.co/file/anilistcdn/character/large/b53901-HnRKSoHMG5Vg.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "مايت غاي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b307-xieUEdhdTVwQ.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "نيجي هيوغا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b1694-TL4obouDwJ7k.jpg" },
    { l: 2, q: "من هذه الشخصية؟", a: "تسونادي — الهوكاغي الخامسة", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2767-r61Cj9v8I0wl.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "أوروتشيمارو", img: "https://s4.anilist.co/file/anilistcdn/character/large/n2455-V9tLMS3TIgJW.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "توبي (أوبيتو أوتشيها)", img: "https://s4.anilist.co/file/anilistcdn/character/large/b3149-j6cl8A9yup51.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "إيروكا أومينو", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2011-WUBm7wMCA6cE.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "تيماري", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2174-XTX0TtzkZCnO.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "زابوزا موموتشي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b728-zHw77BzLzQKT.jpg" },
    { l: 3, q: "من هذه الشخصية؟", a: "ديدارا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b1902-JsEFRFwjmtZJ.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "ساسوري", img: "https://s4.anilist.co/file/anilistcdn/character/large/b1900-Dpd9wVWtlvIx.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "كونان", img: "https://s4.anilist.co/file/anilistcdn/character/large/3179-YVD5zJSYrnPg.jpg" },
    { l: 3, q: "من هذه الشخصية؟", a: "كوشينا أوزوماكي — والدة ناروتو", img: "https://s4.anilist.co/file/anilistcdn/character/large/b7302-KQ6ddZtOkvUf.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "ساي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b1901-vJRGRONNpaiG.jpg" },
    { l: 3, q: "من هذه الشخصية؟", a: "إينو ياماناكا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2009-H7n38Ns1fr0Y.jpg" },
    { l: 3, q: "من هذه الشخصية؟", a: "هاكو", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2039-9NXBvh6H15LD.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "تشوجي أكيميتشي", img: "https://s4.anilist.co/file/anilistcdn/character/large/n2008-j1oCafEGZucg.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "هاشيراما سينجو — الهوكاغي الأول", img: "https://s4.anilist.co/file/anilistcdn/character/large/n12464-fcgqkCPZoREw.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "توبيراما سينجو — الهوكاغي الثاني", img: "https://s4.anilist.co/file/anilistcdn/character/large/n12465-y8ByDAvzC5cA.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "شيسوي أوتشيها", img: "https://s4.anilist.co/file/anilistcdn/character/large/b22893-j0SxfY656SKv.jpg" },
    { l: 4, q: "من هذه الشخصية؟", a: "تينتين", img: "https://s4.anilist.co/file/anilistcdn/character/large/b3710-OmDNYKi0Xfjk.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "كيبا إينوزوكا", img: "https://s4.anilist.co/file/anilistcdn/character/large/n3495-dtw0gHa5SOo6.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "كيلر بي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b18473-AiI3mk28a1Nm.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "هيدان", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2792-lyvtbiT4COp0.jpg" },
    { l: 4, q: "من هذه الشخصية؟", a: "كيسامي هوشيغاكي", img: "https://s4.anilist.co/file/anilistcdn/character/large/2672-oxbHx8n3N7WY.jpg" },
    { l: 4, q: "من هذه الشخصية؟", a: "كابوتو ياكوشي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2405-CqbcGW2tfaMV.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "هيروزين ساروتوبي — الهوكاغي الثالث", img: "https://s4.anilist.co/file/anilistcdn/character/large/n7571-fKldLuBWUtCO.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "أكامارو — كلب كيبا", img: "https://s4.anilist.co/file/anilistcdn/character/large/n4799-gwSQJlSqWnST.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "كيميمارو كاغويا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b3438-h1fxTDdwew0h.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "ياماتو", img: "https://s4.anilist.co/file/anilistcdn/character/large/b2006-FTCz2Eu3cXsI.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "أسوما ساروتوبي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b4775-skviHvjIQHiE.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "شينو أبورامي", img: "https://s4.anilist.co/file/anilistcdn/character/large/n3428-KVeHMgx0xMqO.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "كونوهامارو ساروتوبي", img: "https://s4.anilist.co/file/anilistcdn/character/large/n3889-gCUewPsRY2kD.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "كاكوزو", img: "https://s4.anilist.co/file/anilistcdn/character/large/b3178-fCqs5wyV0dlJ.jpg" },
    { l: 5, q: "من هذه الشخصية؟", a: "كانكورو", img: "https://s4.anilist.co/file/anilistcdn/character/large/n4694-2brvNKpdqARU.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "كاغويا أوتسوتسوكي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b126069-CYxn8C4AHwiD.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "غامابونتا — الضفدع الزعيم", img: "https://s4.anilist.co/file/anilistcdn/character/large/4223.jpg" }
  ];

  /* ---------- المحقق كونان (42 سؤالاً) ----------
     «من هذه الشخصية؟» — صورة الشخصية من AniList، من الأشهر (المستوى
     الأول) إلى الأقل ظهوراً. */
  extra["المحقق كونان"] = [
    { l: 1, q: "من هذه الشخصية؟", a: "كونان إيدوغاوا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b1742-NiV278NBFOvZ.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "ران موري", img: "https://s4.anilist.co/file/anilistcdn/character/large/b1748-j3PdfbQruuOV.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "كوغورو موري — المحقق النائم", img: "https://s4.anilist.co/file/anilistcdn/character/large/b1746-5I4sBSeXvCKP.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "الدكتور أغاسا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b4162-lDyKQxlzEXcj.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "آي هايبارا (شيري)", img: "https://s4.anilist.co/file/anilistcdn/character/large/b1743-yw1FloPUI7jO.png" },
    { l: 1, q: "من هذه الشخصية؟", a: "كايتو كيد — اللص الشبح (كايتو كوروبا)", img: "https://s4.anilist.co/file/anilistcdn/character/large/b1747-LYyYIvIZIdnE.jpg" },
    { l: 1, q: "من هذه الشخصية؟", a: "هيجي هاتوري — محقق الغرب", img: "https://s4.anilist.co/file/anilistcdn/character/large/b1745-EleoviDvO7qh.jpg" },
    { l: 1, q: "من هذه الشخصية؟", a: "جين — من المنظمة السوداء", img: "https://s4.anilist.co/file/anilistcdn/character/large/b6305-Oz8cBjsAE3Ae.jpg" },
    { l: 2, q: "من هذه الشخصية؟", a: "سونوكو سوزوكي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b1749-Jt3uRH7SRntc.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "كازوها تومايا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b3198-h08Pt1lqU5Po.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "المفتش ميغوري", img: "https://s4.anilist.co/file/anilistcdn/character/large/4253.jpg" },
    { l: 2, q: "من هذه الشخصية؟", a: "شويتشي أكاي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b12051-DZE2V53eMi5d.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "تورو أمورو (بوربون)", img: "https://s4.anilist.co/file/anilistcdn/character/large/b62041-VVi8KARP1bVE.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "فيرموث", img: "https://s4.anilist.co/file/anilistcdn/character/large/b6307-enm7W6Cus3FF.jpg" },
    { l: 2, q: "من هذه الشخصية؟", a: "فودكا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b6306-zNmkrOdL8YlF.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "أيومي يوشيدا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b4228-c6vBLrG3AGdN.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "غينتا كوجيما", img: "https://s4.anilist.co/file/anilistcdn/character/large/b4251-CK1ibFjPW7Kx.png" },
    { l: 2, q: "من هذه الشخصية؟", a: "ميتسوهيكو تسوبورايا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b4252-eHo7i4WDIdQv.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "ماسومي سيرا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b41833-h5eU0760M5Sj.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "المحقق واتارو تاكاغي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b9421-q1USRmSvw7BF.jpg" },
    { l: 3, q: "من هذه الشخصية؟", a: "المحققة ميواكو ساتو", img: "https://s4.anilist.co/file/anilistcdn/character/large/b13975-0vSVf8z18ghU.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "إيري كيساكي — والدة ران", img: "https://s4.anilist.co/file/anilistcdn/character/large/b1744-otjI6lcPBAzf.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "يوكيكو كودو — والدة شينيتشي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b20372-UvED45jqnAfv.png" },
    { l: 3, q: "من هذه الشخصية؟", a: "يوساكو كودو — والد شينيتشي", img: "https://s4.anilist.co/file/anilistcdn/character/large/9177.jpg" },
    { l: 3, q: "من هذه الشخصية؟", a: "ماكوتو كيوغوكو", img: "https://s4.anilist.co/file/anilistcdn/character/large/30368.jpg" },
    { l: 3, q: "من هذه الشخصية؟", a: "جودي ستارلينغ", img: "https://s4.anilist.co/file/anilistcdn/character/large/b26754-73EPyg9Mkb1m.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "ساغورو هاكوبا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b12129-qMd0K2FhKt1c.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "آوكو ناكاموري", img: "https://s4.anilist.co/file/anilistcdn/character/large/b13972-IsOmi5I4SN6A.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "المفتش غينزو ناكاموري", img: "https://s4.anilist.co/file/anilistcdn/character/large/b13973-0RmL2qQY0xxI.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "المفتش نينزابورو شيراتوري", img: "https://s4.anilist.co/file/anilistcdn/character/large/b9180-1pTQwiTDZOTj.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "المفتش كانسكي ياماتو", img: "https://s4.anilist.co/file/anilistcdn/character/large/b30359-ct9ed6E3AC3w.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "أكيمي ميانو — أخت هايبارا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b30343-aNkiB1cO0nKP.png" },
    { l: 4, q: "من هذه الشخصية؟", a: "هيدمي هوندو (كير)", img: "https://s4.anilist.co/file/anilistcdn/character/large/b26755-SaPTeSG111g8.jpg" },
    { l: 4, q: "من هذه الشخصية؟", a: "جينبي ماتسودا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b30364-nzrh2LrBvl1E.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "تاكاكي موروفوشي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b30376-DlsVJyjXOCVS.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "الشرطية يومي مياموتو", img: "https://s4.anilist.co/file/anilistcdn/character/large/b28418-eP9a6vMUbl0k.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "يوي أوهارا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b30360-rZSYmdvXDxES.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "شوكيتشي هانيدا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b128047-KadXxP6PQ6CS.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "رومي واكاسا", img: "https://s4.anilist.co/file/anilistcdn/character/large/n127756-3Eqq1pykfpCv.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "أزوسا إينوموتو", img: "https://s4.anilist.co/file/anilistcdn/character/large/n30370-VMTIrUsGXVHG.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "أكاكو كويزومي", img: "https://s4.anilist.co/file/anilistcdn/character/large/b13974-1S6Yuv1DDKiC.png" },
    { l: 5, q: "من هذه الشخصية؟", a: "الشرطي كازونوبو تشيبا", img: "https://s4.anilist.co/file/anilistcdn/character/large/b30373-6sv7EFy1sW8j.png" }
  ];

  /* ---------- سترينجر ثينجز (40 سؤالاً) ----------
     نوعان:
     • «من هذه الشخصية؟» — صورة الشخصية من ويكي المسلسل (Stranger Things Wiki).
     • «ماذا حصل في هذا المقطع؟» — مشهد مشهور بصوته (clip): مقطع يوتيوب من ys
       إلى ye وغلاف «شغّل المقطع» يخفي صورته المصغّرة، وhide يغطي شريط العنوان
       أعلى المشغّل (يكشف اسم المشهد)؛ أو مقطع تيك توك من حساب نتفليكس. */
  var ST_IMG = "https://static.wikia.nocookie.net/strangerthings8338/images/";
  var ST_MASK = [[0, 0, 100, 14]];
  extra["سترينجر ثينجز"] = [
    /* ===== المستوى الأول ===== */
    { l: 1, q: "من هذه الشخصية؟", a: "إليفن (الرقم 11)", img: ST_IMG + "e/e2/Eleven_-_Sorcerer.png/revision/latest/scale-to-width-down/444?nr=1&cb=20260313155200" },
    { l: 1, q: "من هذه الشخصية؟", a: "مايك ويلر", img: ST_IMG + "9/97/Mike_Wheeler_Finale.png/revision/latest/scale-to-width-down/577?nr=1&cb=20260313155900" },
    { l: 1, q: "من هذه الشخصية؟", a: "داستن هندرسون", img: ST_IMG + "4/4f/Dustin_Henderson_1989.png/revision/latest/scale-to-width-down/590?nr=1&cb=20260313155936" },
    { l: 1, q: "من هذه الشخصية؟", a: "لوكاس سنكلير", img: ST_IMG + "7/70/Lucas_Sinclair_Finale.png/revision/latest/scale-to-width-down/512?nr=1&cb=20260313155517" },
    { l: 1, q: "من هذه الشخصية؟", a: "ويل بايرز", img: ST_IMG + "5/5e/Will_Byers_Finale.png/revision/latest/scale-to-width-down/587?nr=1&cb=20260313155557" },
    { l: 1, q: "من هذه الشخصية؟", a: "ستيف هارينغتون", img: ST_IMG + "8/81/Steve_Harrington_1989.png/revision/latest/scale-to-width-down/535?nr=1&cb=20260112123852" },
    { l: 1, q: "من هذه الشخصية؟", a: "جيم هوبر — شريف هوكينز", img: ST_IMG + "e/ed/Jim_Hopper_Finale.png/revision/latest/scale-to-width-down/513?nr=1&cb=20260313155702" },
    { l: 1, q: "ماذا حصل في هذا المقطع؟", a: "إليفن تقلب شاحنة الأشرار في الهواء بقواها لتنقذ الأولاد (الموسم الأول)", yt: "0ONZqhTC-PM", ys: 0, ye: 28, clip: true, hide: ST_MASK },
    { l: 1, q: "ماذا حصل في هذا المقطع؟", a: "إليفن تسرق فطائر «إيغو» من البقالة وتحطّم الزجاج بقواها (الموسم الأول)", yt: "p0jDRJ6-xuE", ys: 0, ye: 40, clip: true, hide: ST_MASK },

    /* ===== المستوى الثاني ===== */
    { l: 2, q: "من هذه الشخصية؟", a: "ماكس مايفيلد", img: ST_IMG + "2/2a/1989.png/revision/latest/scale-to-width-down/489?nr=1&cb=20260313154711" },
    { l: 2, q: "من هذه الشخصية؟", a: "نانسي ويلر — أخت مايك", img: ST_IMG + "3/30/Nancy_Wheeler_Finale.png/revision/latest/scale-to-width-down/600?nr=1&cb=20260313160024" },
    { l: 2, q: "من هذه الشخصية؟", a: "جوناثان بايرز — أخو ويل", img: ST_IMG + "2/24/Jonathan_Byers_1989.png/revision/latest/scale-to-width-down/541?nr=1&cb=20260105150955" },
    { l: 2, q: "من هذه الشخصية؟", a: "جويس بايرز — أم ويل", img: ST_IMG + "1/15/Joyce_Byers_1989.png/revision/latest/scale-to-width-down/531?nr=1&cb=20260313155324" },
    { l: 2, q: "من هذه الشخصية؟", a: "إدي مانسون — رئيس نادي «هيلفاير»", img: ST_IMG + "c/ca/Eddie_Munson.jpg/revision/latest/scale-to-width-down/479?nr=1&cb=20220608205857" },
    { l: 2, q: "من هذه الشخصية؟", a: "فيكنا (هنري كريل)", img: ST_IMG + "4/4d/Vecna_S5.jpeg/revision/latest/scale-to-width-down/527?nr=1&cb=20251229052347" },
    { l: 2, q: "من هذه الشخصية؟", a: "الديموغورغون — وحش العالم المقلوب", img: ST_IMG + "f/ff/Demogorgon_-_Chapter_Eight.jpg/revision/latest?nr=1&cb=20221105220915" },
    { l: 2, q: "ماذا حصل في هذا المقطع؟", a: "جويس تكلّم ابنها ويل عبر أضواء الزينة على جدار الحروف (الموسم الأول)", yt: "jIQ9z2bxXyg", ys: 180, ye: 215, clip: true, hide: ST_MASK },
    { l: 2, q: "ماذا حصل في هذا المقطع؟", a: "هوبر يرقص على أغنية «You Don't Mess Around With Jim» ليُضحك إليفن في الكوخ (الموسم الثاني)", yt: "e-wqBxtyziY", ys: 0, ye: 39, clip: true, hide: ST_MASK },

    /* ===== المستوى الثالث ===== */
    { l: 3, q: "من هذه الشخصية؟", a: "روبن باكلي", img: ST_IMG + "6/6f/Robin_Finale.png/revision/latest/scale-to-width-down/545?nr=1&cb=20260101040655" },
    { l: 3, q: "من هذه الشخصية؟", a: "إيريكا سنكلير — أخت لوكاس", img: ST_IMG + "4/48/Erica89.png/revision/latest/scale-to-width-down/417?nr=1&cb=20260101231247" },
    { l: 3, q: "من هذه الشخصية؟", a: "بيلي هارغروف — أخو ماكس", img: ST_IMG + "a/a3/Billy_Hargrove_-_S3.jpg/revision/latest/scale-to-width-down/443?nr=1&cb=20230429184614" },
    { l: 3, q: "من هذه الشخصية؟", a: "الدكتور مارتن برينر («بابا»)", img: ST_IMG + "b/b5/Brenner_-_The_Nina_Project.png/revision/latest/scale-to-width-down/474?nr=1&cb=20260120195836" },
    { l: 3, q: "من هذه الشخصية؟", a: "آكل العقول (مايند فلاير)", img: ST_IMG + "b/b0/Mind_Flayer_-_Abyss_form.jpeg/revision/latest/scale-to-width-down/600?nr=1&cb=20260107051652" },
    { l: 3, q: "من هذه الشخصية؟", a: "موراي باومان", img: ST_IMG + "8/8e/Murray_1989.png/revision/latest/scale-to-width-down/559?nr=1&cb=20260109113207" },
    { l: 3, q: "من هذه الشخصية؟", a: "بوب نيوبي — صديق جويس", img: ST_IMG + "d/d0/Bob_Newby_S2.png/revision/latest?nr=1&cb=20180327083407" },
    { l: 3, q: "ماذا حصل في هذا المقطع؟", a: "إدي يعزف «Master of Puppets» على الغيتار في العالم المقلوب ليُلهي الخفافيش (الموسم الرابع)", yt: "E4ScPro8YcI", ys: 0, ye: 35, clip: true, hide: ST_MASK },
    { l: 3, q: "ماذا حصل في هذا المقطع؟", a: "ماكس تهرب من فيكنا على أغنية «Running Up That Hill» (الموسم الرابع)", tt: "7104997284772842795", ts: 105, te: 140, band: [10, 92] },

    /* ===== المستوى الرابع ===== */
    { l: 4, q: "من هذه الشخصية؟", a: "كارين ويلر — أم مايك", img: ST_IMG + "b/b4/Karen_Wheeler_Finale.png/revision/latest/scale-to-width-down/458?nr=1&cb=20260101053303" },
    { l: 4, q: "من هذه الشخصية؟", a: "باربرا «بارب» هولاند", img: ST_IMG + "4/46/Barbara_Holland.png/revision/latest/scale-to-width-down/351?nr=1&cb=20221113000712" },
    { l: 4, q: "من هذه الشخصية؟", a: "آرغايل", img: ST_IMG + "4/47/Argyle_S4.png/revision/latest/scale-to-width-down/458?nr=1&cb=20220909212533" },
    { l: 4, q: "من هذه الشخصية؟", a: "كالي — «إيت» (الرقم 8)", img: ST_IMG + "7/72/Kali_s5_Trailer.png/revision/latest/scale-to-width-down/564?nr=1&cb=20251219173651" },
    { l: 4, q: "من هذه الشخصية؟", a: "أليكسي — العالم الروسي", img: ST_IMG + "a/ad/Alexei.JPG/revision/latest/scale-to-width-down/510?nr=1&cb=20190705023926" },
    { l: 4, q: "من هذه الشخصية؟", a: "كريسي كانينغهام", img: ST_IMG + "d/d1/Chrissy_ST4.jpeg/revision/latest/scale-to-width-down/600?nr=1&cb=20260313155747" },
    { l: 4, q: "من هذه الشخصية؟", a: "سوزي — صديقة داستن", img: ST_IMG + "0/03/Suzie_on_the_roof.jpg/revision/latest/scale-to-width-down/600?nr=1&cb=20221124001121" },
    { l: 4, q: "ماذا حصل في هذا المقطع؟", a: "بيلي يضحّي بنفسه ليحمي إليفن من آكل العقول (الموسم الثالث)", yt: "gXdA18JCJqY", ys: 78, ye: 110, clip: true, hide: ST_MASK },

    /* ===== المستوى الخامس ===== */
    { l: 5, q: "من هذه الشخصية؟", a: "السيد سكوت كلارك — معلّم العلوم", img: ST_IMG + "b/b6/Mr_Scott_Clarke_1989.png/revision/latest/scale-to-width-down/481?nr=1&cb=20260101050840" },
    { l: 5, q: "من هذه الشخصية؟", a: "الدكتور سام أوينز", img: ST_IMG + "3/32/Sam_Owens_-_S4.png/revision/latest/scale-to-width-down/431?nr=1&cb=20260101065341" },
    { l: 5, q: "من هذه الشخصية؟", a: "جايسون كارفر", img: ST_IMG + "6/62/Jason_-_The_Piggyback.png/revision/latest/scale-to-width-down/490?nr=1&cb=20221219190124" },
    { l: 5, q: "من هذه الشخصية؟", a: "هولي ويلر — أخت مايك الصغيرة", img: ST_IMG + "0/03/Holly_Wheeler_Finale.png/revision/latest/scale-to-width-down/541?nr=1&cb=20260320014912" },
    { l: 5, q: "من هذه الشخصية؟", a: "ديمتري «إنزو» أنتونوف — الحارس الروسي", img: ST_IMG + "a/a2/Dmitri.png/revision/latest/scale-to-width-down/569?nr=1&cb=20220702211146" }
  ];

  /* ---------- لورد أوف ذا رينغز (36 سؤالاً) ----------
     نوعان:
     • «من هذه الشخصية؟» — لقطة الشخصية من أفلام بيتر جاكسون (ويكي The One
       Wiki to Rule Them All على Fandom — تُطلب بلا Referer، انظر images.js).
     • «ماذا حصل في هذا المشهد؟» — مشهد مشهور بصوته، 30 ثانية من مقطع يوتيوب
       (ys إلى ye حول أكثر لحظة يُعاد تشغيلها)، بغلاف «شغّل المقطع» وشريط
       العنوان مغطّى (clip). */
  var LOTR_MASK = [[0, 0, 100, 14]];
  extra["لورد أوف ذا رينغز"] = [
    /* ===== المستوى 1 ===== */
    { l: 1, q: "من هذه الشخصية؟", a: "فرودو باغينز — حامل الخاتم", img: "https://static.wikia.nocookie.net/lotr/images/3/32/Frodo_%28FotR%29.png/revision/latest/scale-to-width-down/500?nr=1&cb=20221006065757" },
    { l: 1, q: "من هذه الشخصية؟", a: "غاندالف الرمادي", img: "https://static.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg/revision/latest/scale-to-width-down/500?nr=1&cb=20121110131754" },
    { l: 1, q: "من هذه الشخصية؟", a: "غولوم (سميغول)", img: "https://static.wikia.nocookie.net/lotr/images/f/fa/Gollum_Lotr_Movie.png/revision/latest/scale-to-width-down/500?nr=1&cb=20240715204205" },
    { l: 1, q: "من هذه الشخصية؟", a: "ليغولاس — الجنّي الرامي", img: "https://static.wikia.nocookie.net/lotr/images/c/c0/Legolas.jpg/revision/latest?nr=1&cb=20070802171850" },
    { l: 1, q: "من هذه الشخصية؟", a: "أراغورن — ملك غوندور", img: "https://static.wikia.nocookie.net/lotr/images/d/de/Viggo_Mortensen_as_Aragorn_in-chainmail-waist_up.jpg/revision/latest/scale-to-width-down/500?nr=1&cb=20240829043758" },
    { l: 1, q: "من هذه الشخصية؟", a: "غيملي — القزم", img: "https://static.wikia.nocookie.net/lotr/images/a/a5/Lotr_movie_gimli.jpg/revision/latest/scale-to-width-down/500?nr=1&cb=20060228022700" },
    { l: 1, q: "ماذا حصل في هذا المشهد؟", a: "غاندالف يقف أمام البالروغ على الجسر ويصرخ «لن تمر!» ثم يسقط معه (رفقة الخاتم)", yt: "3bReJswiMGM", ys: 70, ye: 100, clip: true, hide: LOTR_MASK },
    { l: 1, q: "ماذا حصل في هذا المشهد؟", a: "بيلبو يلبس الخاتم في حفل عيد ميلاده ويختفي أمام الجميع (رفقة الخاتم)", yt: "Cvr5Nf8eUpg", ys: 60, ye: 90, clip: true, hide: LOTR_MASK },

    /* ===== المستوى 2 ===== */
    { l: 2, q: "من هذه الشخصية؟", a: "سام (سامْوايز غامجي) — رفيق فرودو", img: "https://static.wikia.nocookie.net/lotr/images/5/52/Samwise_Gamgee_1.PNG/revision/latest?nr=1&cb=20200617172124" },
    { l: 2, q: "من هذه الشخصية؟", a: "غاندالف الأبيض", img: "https://static.wikia.nocookie.net/lotr/images/e/ee/Rings-gandalf.jpg/revision/latest/scale-to-width-down/500?nr=1&cb=20050523185311" },
    { l: 2, q: "من هذه الشخصية؟", a: "سارومان الأبيض", img: "https://static.wikia.nocookie.net/lotr/images/e/ee/Saruman-the-white.JPG/revision/latest?nr=1&cb=20070912224216" },
    { l: 2, q: "من هذه الشخصية؟", a: "بيلبو باغينز — عمّ فرودو", img: "https://static.wikia.nocookie.net/lotr/images/8/87/Bilbo_Ian_Holm.png/revision/latest/scale-to-width-down/500?nr=1&cb=20240716164413" },
    { l: 2, q: "من هذه الشخصية؟", a: "بورومير", img: "https://static.wikia.nocookie.net/lotr/images/d/de/Boromir_-_FOTR.png/revision/latest/scale-to-width-down/500?nr=1&cb=20121023114949" },
    { l: 2, q: "من هذه الشخصية؟", a: "آروين — الأميرة الجنّية", img: "https://static.wikia.nocookie.net/lotr/images/6/64/Arwen_-_The_Fellowship_Of_The_Ring.jpg/revision/latest/scale-to-width-down/500?nr=1&cb=20210625164207" },
    { l: 2, q: "ماذا حصل في هذا المشهد؟", a: "موت بورومير بعد أن دافع عن ميري وبيبن، وأراغورن بجانبه (رفقة الخاتم)", yt: "ALaPeQxQMM0", ys: 60, ye: 90, clip: true, hide: LOTR_MASK },
    { l: 2, q: "ماذا حصل في هذا المشهد؟", a: "غولوم يعضّ إصبع فرودو ويأخذ الخاتم ثم يسقط معه في نار جبل الهلاك (عودة الملك)", yt: "7curfSGOhPI", ys: 150, ye: 180, clip: true, hide: LOTR_MASK },

    /* ===== المستوى 3 ===== */
    { l: 3, q: "من هذه الشخصية؟", a: "غالادرييل — سيدة لوثلورين", img: "https://static.wikia.nocookie.net/lotr/images/c/cb/Galadriel.jpg/revision/latest/scale-to-width-down/500?nr=1&cb=20151015204512" },
    { l: 3, q: "من هذه الشخصية؟", a: "ميري (ميرياداك براندي‌باك)", img: "https://static.wikia.nocookie.net/lotr/images/b/b9/Merry.jpg/revision/latest/scale-to-width-down/500?nr=1&cb=20121117101001" },
    { l: 3, q: "من هذه الشخصية؟", a: "سورون — سيد الظلام", img: "https://static.wikia.nocookie.net/lotr/images/9/90/Sauron-2.jpg/revision/latest?nr=1&cb=20110508182634" },
    { l: 3, q: "من هذه الشخصية؟", a: "البالروغ — شيطان موريا الناري", img: "https://static.wikia.nocookie.net/lotr/images/c/c4/Balrog_-_FOTR.png/revision/latest/scale-to-width-down/500?nr=1&cb=20210916195941" },
    { l: 3, q: "من هذه الشخصية؟", a: "إلروند — سيد ريفندل", img: "https://static.wikia.nocookie.net/lotr/images/2/2b/Elrond%27s_armor_-_halfbody.jpg/revision/latest?nr=1&cb=20130202121256" },
    { l: 3, q: "من هذه الشخصية؟", a: "ثيودن — ملك روهان", img: "https://static.wikia.nocookie.net/lotr/images/1/13/King_Theoden_1.jpg/revision/latest?nr=1&cb=20150313135224" },
    { l: 3, q: "ماذا حصل في هذا المشهد؟", a: "إيوين تقتل ملك الساحرة (قائد النازغول) وتقول «لستُ رجلاً» (عودة الملك)", yt: "W7_c-R7i8F4", ys: 145, ye: 175, clip: true, hide: LOTR_MASK },
    { l: 3, q: "ماذا حصل في هذا المشهد؟", a: "إشعال منارات غوندور واحدة تلو الأخرى لطلب نجدة روهان (عودة الملك)", yt: "agBtXRChsJM", ys: 95, ye: 125, clip: true, hide: LOTR_MASK },

    /* ===== المستوى 4 ===== */
    { l: 4, q: "من هذه الشخصية؟", a: "إيومر — فارس روهان", img: "https://static.wikia.nocookie.net/lotr/images/b/b9/Eomer_-_Close_up.PNG/revision/latest?nr=1&cb=20120922113500" },
    { l: 4, q: "من هذه الشخصية؟", a: "فارامير — أخو بورومير", img: "https://static.wikia.nocookie.net/lotr/images/4/43/Faramir.jpg/revision/latest?nr=1&cb=20071211235438" },
    { l: 4, q: "من هذه الشخصية؟", a: "غريما «لسان الدودة»", img: "https://static.wikia.nocookie.net/lotr/images/2/27/Gr%C3%ADma_Wormtongue_Lotr_Movie.png/revision/latest?nr=1&cb=20240715214830" },
    { l: 4, q: "من هذه الشخصية؟", a: "اللحية الشجرية (تريبيرد) — زعيم الإنتس", img: "https://static.wikia.nocookie.net/lotr/images/2/23/TreebeardatIsengard.png/revision/latest/scale-to-width-down/500?nr=1&cb=20210117035345" },
    { l: 4, q: "من هذه الشخصية؟", a: "النازغول — أشباح الخاتم السوداء", img: "https://static.wikia.nocookie.net/lotr/images/b/bf/Nazgul.jpg/revision/latest/scale-to-width-down/500?nr=1&cb=20150423205044" },
    { l: 4, q: "من هذه الشخصية؟", a: "لورتز — قائد الأوروك هاي", img: "https://static.wikia.nocookie.net/lotr/images/b/bf/Lurtz_2.jpg/revision/latest?nr=1&cb=20110527083830" },
    { l: 4, q: "ماذا حصل في هذا المشهد؟", a: "فرسان روهان يهاجمون جيش موردور في معركة حقول بيلينور (عودة الملك)", yt: "Pis3veqKl8k", ys: 130, ye: 160, clip: true, hide: LOTR_MASK },
    { l: 4, q: "ماذا حصل في هذا المشهد؟", a: "تدمير الخاتم وانهيار برج سورون «باراد-دور» (عودة الملك)", yt: "0wgkg3-bMEA", ys: 82, ye: 112, clip: true, hide: LOTR_MASK },

    /* ===== المستوى 5 ===== */
    { l: 5, q: "من هذه الشخصية؟", a: "دينيثور — حاكم غوندور", img: "https://static.wikia.nocookie.net/lotr/images/9/98/Lord_Denethor.jpg/revision/latest/scale-to-width-down/500?nr=1&cb=20150330023544" },
    { l: 5, q: "من هذه الشخصية؟", a: "فم سورون", img: "https://static.wikia.nocookie.net/lotr/images/f/f2/Mouth_of_Sauron.png/revision/latest/scale-to-width-down/500?nr=1&cb=20210117030358" },
    { l: 5, q: "من هذه الشخصية؟", a: "روزي كوتون — زوجة سام", img: "https://static.wikia.nocookie.net/lotr/images/5/5c/Rosie_Cotton_celebrates_-_FOTR.png/revision/latest/scale-to-width-down/500?nr=1&cb=20121003132330" },
    { l: 5, q: "من هذه الشخصية؟", a: "سيليبورن — زوج غالادرييل", img: "https://static.wikia.nocookie.net/lotr/images/a/a9/Celeborn_-_FOTR.png/revision/latest?nr=1&cb=20121002120216" }
  ];

  /* ---------- المملكة العربية السعودية (50 سؤالاً) ---------- */
  extra["المملكة العربية السعودية"] = [
    { l: 1, q: "ما عاصمة المملكة العربية السعودية؟", a: "الرياض", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Masmak.JPG/960px-Masmak.JPG" },
    { l: 1, q: "ما عملة المملكة العربية السعودية؟", a: "الريال السعودي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Saudi_Riyal_Symbol.svg/960px-Saudi_Riyal_Symbol.svg.png" },
    { l: 1, q: "في أي مدينة تقع الكعبة المشرّفة؟", a: "مكة المكرّمة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Makkah_Region_-_Saudi_Arabia.svg/960px-Makkah_Region_-_Saudi_Arabia.svg.png" },
    { l: 1, q: "في أي مدينة يقع المسجد النبوي؟", a: "المدينة المنوّرة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/HAC_2010_MEDINE_MESCIDI_NEBEVI_-_panoramio.jpg/960px-HAC_2010_MEDINE_MESCIDI_NEBEVI_-_panoramio.jpg" },
    { l: 1, q: "ما اللون الأساسي في علم السعودية؟", a: "الأخضر", img: "image/المملكه العربية السعوية.jpg", iq: "علم السعودية" },
    { l: 1, q: "ماذا كُتب على علم المملكة العربية السعودية؟", a: "الشهادة وتحتها سيف", img: "image/المملكه العربية السعوية.jpg", iq: "علم السعودية" },
    { l: 1, q: "ما اسم المدينة الساحلية الكبرى على البحر الأحمر؟", a: "جدة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/%D8%A7%D9%84%D9%88%D8%A7%D8%AC%D9%87%D8%A9_%D8%A7%D9%84%D8%A8%D8%AD%D8%B1%D9%8A%D8%A9_%D9%81%D9%8A_%D9%85%D8%AF%D9%8A%D9%86%D8%A9_%D8%AC%D8%AF%D8%A9_%D8%BA%D8%B1%D8%A8_%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9_%282025%29_%28cropped%29.jpg/960px-%D8%A7%D9%84%D9%88%D8%A7%D8%AC%D9%87%D8%A9_%D8%A7%D9%84%D8%A8%D8%AD%D8%B1%D9%8A%D8%A9_%D9%81%D9%8A_%D9%85%D8%AF%D9%8A%D9%86%D8%A9_%D8%AC%D8%AF%D8%A9_%D8%BA%D8%B1%D8%A8_%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9_%282025%29_%28cropped%29.jpg" },
    { l: 1, q: "ما أهم مورد اقتصادي في المملكة؟", a: "النفط", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Oil_wells_just_offshore_at_Summerland%2C_California%2C_c.1915.jpg/960px-Oil_wells_just_offshore_at_Summerland%2C_California%2C_c.1915.jpg", iq: "حقل نفط" },
    { l: 1, q: "في أي يوم يوافق اليوم الوطني السعودي؟", a: "الثالث والعشرون من سبتمبر", img: "image/المملكه العربية السعوية.jpg", iq: "اليوم الوطني السعودي" },
    { l: 1, q: "ما البحر الذي تطلّ عليه السعودية من الغرب؟", a: "البحر الأحمر", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Red_Sea_37.95521E_21.41271N.jpg/960px-Red_Sea_37.95521E_21.41271N.jpg" },
    { l: 2, q: "من هو مؤسّس المملكة العربية السعودية؟", a: "الملك عبد العزيز آل سعود", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Ibn_Saud.png/960px-Ibn_Saud.png" },
    { l: 2, q: "في أي عام تأسّست المملكة العربية السعودية بشكلها الحالي؟", a: "عام 1932", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/%D8%A8%D9%8A%D8%AA_%D8%A7%D9%84%D8%B4%D9%8A%D8%AE_%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87_%D8%AF%D8%B9%D9%8A%D8%A8%D8%B3_%D8%A7%D9%84%D8%B4%D9%88%D8%A7%D8%A8%D9%83%D8%A9_%D8%B9%D8%A7%D9%85_1932.jpg/960px-%D8%A8%D9%8A%D8%AA_%D8%A7%D9%84%D8%B4%D9%8A%D8%AE_%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87_%D8%AF%D8%B9%D9%8A%D8%A8%D8%B3_%D8%A7%D9%84%D8%B4%D9%88%D8%A7%D8%A8%D9%83%D8%A9_%D8%B9%D8%A7%D9%85_1932.jpg" },
    { l: 2, q: "ما اسم أكبر شركة نفط في السعودية؟", a: "أرامكو السعودية", img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/AramcoCoreArea.jpg" },
    { l: 2, q: "ما اسم أكبر صحراء رملية متصلة في العالم وتقع في السعودية؟", a: "الربع الخالي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Rub_al_Khali_002.JPG/960px-Rub_al_Khali_002.JPG" },
    { l: 2, q: "ما اسم المنطقة السعودية الغنية بالنفط على الخليج؟", a: "المنطقة الشرقية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Sharqiyya_arabic.jpg/960px-Sharqiyya_arabic.jpg" },
    { l: 2, q: "كم عدد مناطق السعودية الإدارية؟", a: "ثلاث عشرة منطقة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Oman.PNG/960px-Oman.PNG", iq: "خريطة السعودية" },
    { l: 2, q: "ما اسم الرؤية التنموية السعودية؟", a: "رؤية 2030", img: "image/المملكه العربية السعوية.jpg", iq: "الرياض" },
    { l: 2, q: "ما اسم أعلى قمة جبلية في السعودية؟", a: "جبل السودة في عسير", img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Alsooda0002.jpg" },
    { l: 2, q: "ما اسم المدينة الجنوبية الشهيرة بالضباب والمرتفعات؟", a: "أبها", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Abha_city.png/960px-Abha_city.png" },
    { l: 2, q: "ما اسم المدينة السعودية التي تضم مقر أرامكو الرئيسي؟", a: "الظهران", img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/AramcoCoreArea.jpg" },
    { l: 3, q: "ما اسم مشروع المدينة المستقبلية شمال غرب السعودية؟", a: "نيوم", img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Neom_location-ar.jpg" },
    { l: 3, q: "ما اسم الموقع النبطي الأثري المدرج في التراث العالمي؟", a: "الحِجر — مدائن صالح في العلا", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Qasr_al_Farid.JPG/960px-Qasr_al_Farid.JPG" },
    { l: 3, q: "ما اسم حي الدرعية التاريخي المدرج في التراث العالمي؟", a: "حي الطريف", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/At-Turaif_District.jpg/960px-At-Turaif_District.jpg" },
    { l: 3, q: "ما اسم أطول برج في السعودية ويطلّ على الحرم؟", a: "برج ساعة مكة", img: "https://upload.wikimedia.org/wikipedia/commons/2/22/%D9%85%D9%83%D8%A9_%D8%A7%D9%84%D9%85%D9%83%D8%B1%D9%85%D8%A9_meca.jpg" },
    { l: 3, q: "ما اسم أكبر واحة نخيل في العالم وتقع في السعودية؟", a: "واحة الأحساء", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Al_Hasa_Cave.jpg/960px-Al_Hasa_Cave.jpg" },
    { l: 3, q: "ما اسم أكبر جزيرة سعودية في البحر الأحمر؟", a: "جزيرة فرسان", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Farasan_Island_3.jpg/960px-Farasan_Island_3.jpg" },
    { l: 3, q: "ما اسم الجسر الذي يربط السعودية بالبحرين؟", a: "جسر الملك فهد", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/King_Fahd_Causeway_bridge_num4.jpg/960px-King_Fahd_Causeway_bridge_num4.jpg" },
    { l: 3, q: "ما اسم النادي السعودي الملقّب بالزعيم؟", a: "الهلال", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Kingdom_Arena.jpg/960px-Kingdom_Arena.jpg", iq: "نادي الهلال السعودي" },
    { l: 3, q: "ما اسم النادي السعودي الملقّب بالعالمي؟", a: "النصر", img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Cristiano_Ronaldo%2C_Al-Nassr_19_Sep_2023_%28cropped%29.jpg", iq: "نادي النصر السعودي" },
    { l: 3, q: "ما اسم المدينة الصناعية السعودية على الخليج؟", a: "الجبيل", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Jubail.JPG/960px-Jubail.JPG" },
    { l: 4, q: "ما اسم المنطقة الجنوبية الغربية الشهيرة بالمدرّجات الزراعية؟", a: "عسير", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Aseer_Region_-_Saudi_Arabia.svg/960px-Aseer_Region_-_Saudi_Arabia.svg.png" },
    { l: 4, q: "ما اسم المدينة الصناعية السعودية على البحر الأحمر؟", a: "ينبع", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Fm_nasa_yanbu_saudi_arabia.jpg/960px-Fm_nasa_yanbu_saudi_arabia.jpg" },
    { l: 4, q: "ما اسم الموسم الترفيهي الأشهر في العاصمة؟", a: "موسم الرياض", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/%D9%85%D8%AC%D8%B3%D9%85_%D8%AC%D8%B1%D9%8A%D9%86%D8%AF%D8%A7%D9%8A%D8%B2%D8%B1_%D9%81%D9%8A_%D8%A8%D9%88%D9%84%D9%8A%D9%81%D8%A7%D8%B1%D8%AF_%D9%88%D9%88%D8%B1%D9%84%D8%AF_%D8%A8%D9%85%D9%88%D8%B3%D9%85_%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6.jpg/960px-%D9%85%D8%AC%D8%B3%D9%85_%D8%AC%D8%B1%D9%8A%D9%86%D8%AF%D8%A7%D9%8A%D8%B2%D8%B1_%D9%81%D9%8A_%D8%A8%D9%88%D9%84%D9%8A%D9%81%D8%A7%D8%B1%D8%AF_%D9%88%D9%88%D8%B1%D9%84%D8%AF_%D8%A8%D9%85%D9%88%D8%B3%D9%85_%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6.jpg" },
    { l: 4, q: "ما اسم أقدم جامعة سعودية؟", a: "جامعة الملك سعود", img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/King_saud_university_entrance.jpg" },
    { l: 4, q: "من هي أول امرأة سعودية تصعد إلى الفضاء؟", a: "ريانة برناوي", img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Rayyanah_Barnawi_%28cropped%29.jpg" },
    { l: 4, q: "ما اسم المهرجان السنوي الأكبر للإبل في السعودية؟", a: "مهرجان الملك عبد العزيز للإبل", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Camel_%286408239431%29.jpg/960px-Camel_%286408239431%29.jpg", iq: "الإبل" },
    { l: 4, q: "ما اسم المشروع السياحي على ساحل البحر الأحمر؟", a: "مشروع البحر الأحمر", img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Red_Sea_island.jpg" },
    { l: 4, q: "ما اسم المشروع الترفيهي الضخم غرب الرياض؟", a: "القدّية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Qiddiya_Illustration.png/960px-Qiddiya_Illustration.png" },
    { l: 4, q: "ما اسم أكبر مطار في السعودية من حيث المساحة؟", a: "مطار الملك فهد الدولي بالدمام", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/King_Fahd_Airport_mosque_2.jpg/960px-King_Fahd_Airport_mosque_2.jpg" },
    { l: 4, q: "ما اسم المتحف الوطني السعودي وأين يقع؟", a: "المتحف الوطني في الرياض", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/%E3%82%A2%E3%83%AB%E3%83%A0%E3%83%88%E3%82%A5%E3%83%A9%E3%82%AF%E3%83%BB%E3%82%A2%E3%83%AB%E3%83%AF%E3%82%BF%E3%83%8B%E3%82%A6%E9%A7%85%EF%BC%88%E5%9B%BD%E7%AB%8B%E5%8D%9A%E7%89%A9%E9%A4%A8%E9%A7%85%EF%BC%89%E3%81%AE%E9%A7%85%E8%88%8E.jpg/960px-%E3%82%A2%E3%83%AB%E3%83%A0%E3%83%88%E3%82%A5%E3%83%A9%E3%82%AF%E3%83%BB%E3%82%A2%E3%83%AB%E3%83%AF%E3%82%BF%E3%83%8B%E3%82%A6%E9%A7%85%EF%BC%88%E5%9B%BD%E7%AB%8B%E5%8D%9A%E7%89%A9%E9%A4%A8%E9%A7%85%EF%BC%89%E3%81%AE%E9%A7%85%E8%88%8E.jpg" },
    { l: 5, q: "في أي عام تأسّست الدولة السعودية الأولى؟", a: "عام 1727", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/German_print_of_the_1727_Gibraltar_Siege.jpg/960px-German_print_of_the_1727_Gibraltar_Siege.jpg" },
    { l: 5, q: "ما عاصمة الدولة السعودية الأولى؟", a: "الدرعية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Diriyahpic.jpg/960px-Diriyahpic.jpg" },
    { l: 5, q: "ما اسم أطول وادٍ في السعودية؟", a: "وادي الرمة", img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Rumah_Valley_13_November_2008.jpg" },
    { l: 5, q: "ما اسم أكبر حرّة بركانية في السعودية؟", a: "حرّة رهط", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Harrat_Rahat.jpg/960px-Harrat_Rahat.jpg" },
    { l: 5, q: "ما اسم الطائر الذي يُعد رمزاً تراثياً في السعودية؟", a: "الصقر", img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/%D8%B4%D8%B9%D8%A7%D8%B1_%D9%86%D8%A7%D8%AF%D9%8A_%D8%A7%D9%84%D8%B5%D9%82%D8%B1.png", iq: "الصقر" },
    { l: 5, q: "ما اسم أعلى نافورة في السعودية؟", a: "نافورة الملك فهد في جدة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/King_Fahd%E2%80%99s_Fountain.jpg/960px-King_Fahd%E2%80%99s_Fountain.jpg" },
    { l: 5, q: "ما اسم المنطقة السعودية التي تضم مدينة تبوك؟", a: "منطقة تبوك", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/%D8%AB%D9%84%D8%AC_%D8%B9%D9%84%D9%82%D8%A7%D9%86_%288384906260%29.jpg/960px-%D8%AB%D9%84%D8%AC_%D8%B9%D9%84%D9%82%D8%A7%D9%86_%288384906260%29.jpg" },
    { l: 5, q: "ما اسم الموقع الأثري في نجران المدرج بالتراث العالمي؟", a: "الأخدود" },
    { l: 5, q: "ما اسم واحة النخيل والمنطقة الأثرية شمال المدينة المنورة؟", a: "العلا", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Al_Ula_%286748577917%29.jpg/960px-Al_Ula_%286748577917%29.jpg" },
    { l: 5, q: "ما اسم أكبر مصفاة نفط في السعودية؟", a: "مصفاة رأس تنورة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/%D8%B4%D8%A7%D8%B7%D8%A6_%D8%B1%D8%A7%D8%B3_%D8%AA%D9%86%D9%88%D8%B1%D8%A9.jpg/960px-%D8%B4%D8%A7%D8%B7%D8%A6_%D8%B1%D8%A7%D8%B3_%D8%AA%D9%86%D9%88%D8%B1%D8%A9.jpg" }
  ];

  /* ---------- البحرين (50 سؤالاً) ---------- */
  extra["البحرين"] = [
    { l: 1, q: "ما عاصمة مملكة البحرين؟", a: "المنامة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Manama%2C_Bahrain_Decembre_2014.jpg/960px-Manama%2C_Bahrain_Decembre_2014.jpg" },
    { l: 1, q: "ما عملة البحرين؟", a: "الدينار البحريني", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Bahrain_World_trade_Center_.jpg/960px-Bahrain_World_trade_Center_.jpg" },
    { l: 1, q: "على أي خليج تقع مملكة البحرين؟", a: "الخليج العربي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/PersianGulf_vue_satellite_du_golfe_persique.jpg/960px-PersianGulf_vue_satellite_du_golfe_persique.jpg" },
    { l: 1, q: "ما اسم الجسر الذي يربط البحرين بالسعودية؟", a: "جسر الملك فهد", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/King_Fahd_Causeway_bridge_num4.jpg/960px-King_Fahd_Causeway_bridge_num4.jpg" },
    { l: 1, q: "ما لونا علم البحرين؟", a: "الأحمر والأبيض", img: "image/البحرين.jpg", iq: "علم البحرين" },
    { l: 1, q: "كم عدد الرؤوس المثلثة في علم البحرين؟", a: "خمسة رؤوس", img: "image/البحرين.jpg", iq: "علم البحرين" },
    { l: 1, q: "ما اسم أكبر جزيرة في البحرين؟", a: "جزيرة البحرين", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/308_Cameron_aerial_of_Bahrain_Island_-_USACE-p15141coll5-15635.jpeg/960px-308_Cameron_aerial_of_Bahrain_Island_-_USACE-p15141coll5-15635.jpeg" },
    { l: 1, q: "ما السباق العالمي الشهير الذي تستضيفه البحرين سنوياً؟", a: "سباق الفورمولا 1", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Opening_lap_of_the_2025_Canadian_Grand_Prix_%28cropped%29.jpg/960px-Opening_lap_of_the_2025_Canadian_Grand_Prix_%28cropped%29.jpg", iq: "فورمولا 1" },
    { l: 1, q: "ما اسم حلبة السباق في البحرين؟", a: "حلبة البحرين الدولية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Bahrain_International_Circuit--Grand_Prix_Layout.svg/960px-Bahrain_International_Circuit--Grand_Prix_Layout.svg.png" },
    { l: 1, q: "ما اللغة الرسمية في البحرين؟", a: "العربية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Arabic_speaking_world.svg/960px-Arabic_speaking_world.svg.png" },
    { l: 2, q: "في أي عام استقلّت البحرين؟", a: "عام 1971", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/1971_Instrument_of_Surrender_WaPo.jpg/960px-1971_Instrument_of_Surrender_WaPo.jpg" },
    { l: 2, q: "ما اسم الأسرة الحاكمة في البحرين؟", a: "آل خليفة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Hamad_bin_Isa_Al_Khalifah_on_September_12%2C_2024_%28cropped%29.jpg/960px-Hamad_bin_Isa_Al_Khalifah_on_September_12%2C_2024_%28cropped%29.jpg" },
    { l: 2, q: "ما اسم الشجرة الشهيرة التي تقف وحيدة وسط صحراء البحرين؟", a: "شجرة الحياة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/TreeofLife.JPG/960px-TreeofLife.JPG", iq: "شجرة الحياة البحرين" },
    { l: 2, q: "ما اسم القلعة الأثرية البحرينية المدرجة في التراث العالمي؟", a: "قلعة البحرين", img: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Bahrain_Fort_overview.jpg" },
    { l: 2, q: "ما اسم الحضارة القديمة التي قامت في البحرين؟", a: "حضارة دلمون", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Bahrain_Fort_March_2015.JPG/960px-Bahrain_Fort_March_2015.JPG" },
    { l: 2, q: "ما اسم ثاني أكبر مدينة في البحرين؟", a: "المحرّق", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Muharraq_and_Manama.jpg/960px-Muharraq_and_Manama.jpg" },
    { l: 2, q: "ما المهنة التاريخية التي اشتهرت بها البحرين قبل النفط؟", a: "الغوص على اللؤلؤ", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Bahrain_Pearling_License_1942.jpg/960px-Bahrain_Pearling_License_1942.jpg", iq: "الغوص على اللؤلؤ" },
    { l: 2, q: "كم عدد محافظات البحرين؟", a: "أربع محافظات", img: "image/البحرين.jpg", iq: "خريطة البحرين" },
    { l: 2, q: "ما اسم مطار البحرين؟", a: "مطار البحرين الدولي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Bahrain_International_Airport_%28New_Terminal%29.jpg/960px-Bahrain_International_Airport_%28New_Terminal%29.jpg" },
    { l: 2, q: "ما اسم أكبر مسجد في البحرين؟", a: "مسجد أحمد الفاتح الكبير", img: "image/البحرين.jpg" },
    { l: 3, q: "ما اسم المسار التراثي في المحرّق المدرج على قائمة اليونسكو، الذي يروي قصة الغوص على اللؤلؤ في البحرين؟", a: "طريق اللؤلؤ", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Muharraq_Bayt_Siyadi_1.jpg/960px-Muharraq_Bayt_Siyadi_1.jpg" },
    { l: 3, q: "ما اسم المشروع العمراني على جزر صناعية جنوب البحرين؟", a: "درة البحرين", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Durrat_Al_Bahrain_Model_Pict_2.jpg/960px-Durrat_Al_Bahrain_Model_Pict_2.jpg" },
    { l: 3, q: "ما اسم المبنى التاريخي عند مدخل سوق المنامة؟", a: "باب البحرين", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Bab_Al_Bahrain%2C_Manama%2C_Bar%C3%A9in%2C_2024-08-18%2C_DD_72.jpg/960px-Bab_Al_Bahrain%2C_Manama%2C_Bar%C3%A9in%2C_2024-08-18%2C_DD_72.jpg" },
    { l: 3, q: "ما اسم المتحف الوطني في البحرين؟", a: "متحف البحرين الوطني", img: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Bahrain_National_Museum_Exterior.jpg" },
    { l: 3, q: "ما اسم البرج الشهير في المنامة ذي التوربينات الهوائية؟", a: "مركز البحرين التجاري العالمي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Bahrain_World_trade_Center_.jpg/960px-Bahrain_World_trade_Center_.jpg" },
    { l: 3, q: "ما اسم الجامعة الحكومية في البحرين؟", a: "جامعة البحرين", img: "https://upload.wikimedia.org/wikipedia/commons/1/14/RCSI_Bahrain_campus.jpg" },
    { l: 3, q: "ما اسم المنطقة المالية في المنامة؟", a: "مرفأ البحرين المالي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Bab_Al_Bahrain%2C_Manama%2C_Bar%C3%A9in%2C_2024-08-18%2C_DD_72.jpg/960px-Bab_Al_Bahrain%2C_Manama%2C_Bar%C3%A9in%2C_2024-08-18%2C_DD_72.jpg" },
    { l: 3, q: "ما اسم الميناء الرئيسي في البحرين؟", a: "ميناء خليفة بن سلمان", img: "image/البحرين.jpg" },
    { l: 3, q: "ما اسم أعلى نقطة طبيعية في البحرين؟", a: "جبل الدخان", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Jabal_Ad_Dukhan.jpg/960px-Jabal_Ad_Dukhan.jpg" },
    { l: 3, q: "ما اسم النادي البحريني الأعرق في كرة القدم؟", a: "نادي المحرّق", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Muharraq_Governorate_Flag.png/960px-Muharraq_Governorate_Flag.png" },
    { l: 4, q: "ما معنى اسم «البحرين»؟", a: "البحران: الماء العذب والماء المالح", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Sea_water_Virgo.jpg/960px-Sea_water_Virgo.jpg" },
    { l: 4, q: "كم عدد الجزر التي تتكوّن منها البحرين تقريباً؟", a: "أكثر من ثلاثين جزيرة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/%D9%88%D8%A7%D8%AC%D9%87%D8%A9-%D9%82%D9%84%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B1%D9%88%D8%AA.jpg/960px-%D9%88%D8%A7%D8%AC%D9%87%D8%A9-%D9%82%D9%84%D8%B9%D8%A9-%D8%AA%D8%A7%D8%B1%D9%88%D8%AA.jpg" },
    { l: 4, q: "ما اسم الجزيرة البحرينية الشهيرة بمحمياتها الطبيعية؟", a: "جزيرة حوار", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Qatar_31_January_2003.jpg/960px-Qatar_31_January_2003.jpg" },
    { l: 4, q: "في أي عام اكتُشف النفط في البحرين؟", a: "عام 1932", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/%D8%A8%D9%8A%D8%AA_%D8%A7%D9%84%D8%B4%D9%8A%D8%AE_%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87_%D8%AF%D8%B9%D9%8A%D8%A8%D8%B3_%D8%A7%D9%84%D8%B4%D9%88%D8%A7%D8%A8%D9%83%D8%A9_%D8%B9%D8%A7%D9%85_1932.jpg/960px-%D8%A8%D9%8A%D8%AA_%D8%A7%D9%84%D8%B4%D9%8A%D8%AE_%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87_%D8%AF%D8%B9%D9%8A%D8%A8%D8%B3_%D8%A7%D9%84%D8%B4%D9%88%D8%A7%D8%A8%D9%83%D8%A9_%D8%B9%D8%A7%D9%85_1932.jpg" },
    { l: 4, q: "ما اسم شركة النفط الوطنية في البحرين؟", a: "بابكو", img: "image/البحرين.jpg" },
    { l: 4, q: "ما اسم المنطقة التي تضم مدافن دلمون الأثرية؟", a: "عالي", img: "image/البحرين.jpg" },
    { l: 4, q: "في أي عام أُقيم أول سباق فورمولا 1 في البحرين؟", a: "عام 2004", img: "image/البحرين.jpg" },
    { l: 4, q: "ما اسم أشهر الأطباق الشعبية البحرينية؟", a: "المحمّر والمجبوس", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/%D9%85%D9%83%D8%A8%D9%88%D8%B3_%D9%84%D8%AD%D9%85.jpg/960px-%D9%85%D9%83%D8%A8%D9%88%D8%B3_%D9%84%D8%AD%D9%85.jpg", iq: "مجبوس" },
    { l: 4, q: "ما لقب منتخب البحرين لكرة القدم؟", a: "الأحمر", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Red_Sea_37.95521E_21.41271N.jpg/960px-Red_Sea_37.95521E_21.41271N.jpg" },
    { l: 4, q: "ما اسم قاعدة الأسطول الخامس الأمريكي في البحرين؟", a: "قاعدة الجفير", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Juffair_starbucks.jpg/960px-Juffair_starbucks.jpg" },
    { l: 5, q: "بأي اسم عُرفت البحرين في الأساطير القديمة كأرض للخلود؟", a: "دلمون", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Bahrain_Fort_March_2015.JPG/960px-Bahrain_Fort_March_2015.JPG" },
    { l: 5, q: "ما اسم أقدم مسجد في البحرين؟", a: "مسجد الخميس", img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Khamis_Mosque_Minaret.jpg" },
    { l: 5, q: "في أي عام انضمّت البحرين إلى الأمم المتحدة؟", a: "عام 1971", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/1971_Instrument_of_Surrender_WaPo.jpg/960px-1971_Instrument_of_Surrender_WaPo.jpg" },
    { l: 5, q: "ما اسم مجلسي النواب والشورى مجتمعين في البحرين؟", a: "المجلس الوطني", img: "image/البحرين.jpg" },
    { l: 5, q: "ما اسم المهرجان الثقافي السنوي في البحرين؟", a: "مهرجان ربيع الثقافة", img: "https://upload.wikimedia.org/wikipedia/ar/4/45/Sbeitla_Festival.jpg" },
    { l: 5, q: "ما اسم الحقل النفطي الرئيسي في البحرين؟", a: "حقل البحرين في عوالي" },
    { l: 5, q: "كم تبلغ مساحة البحرين تقريباً؟", a: "نحو 780 كيلومتراً مربعاً", img: "image/البحرين.jpg", iq: "خريطة البحرين" },
    { l: 5, q: "ما اسم أول مدرسة نظامية للبنين في البحرين؟", a: "مدرسة الهداية الخليفية" },
    { l: 5, q: "ما اسم المدينة الرياضية الشهيرة في البحرين؟", a: "مدينة عيسى الرياضية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/OmanFutsalTeam2015.jpg/960px-OmanFutsalTeam2015.jpg" },
    { l: 5, q: "ما اسم الجسر الذي يربط المنامة بالمحرّق؟", a: "جسر الشيخ عيسى بن سلمان", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Bahrain17.JPG/960px-Bahrain17.JPG" }
  ];

  /* ---------- الإمارات (50 سؤالاً) ---------- */
  extra["الإمارات"] = [
    { l: 1, q: "ما عاصمة دولة الإمارات العربية المتحدة؟", a: "أبوظبي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/%D0%90%D0%B1%D1%83-%D0%94%D0%B0%D0%B1%D0%B8_%28Abu_Dhabi%29_-_panoramio_%281%29.jpg/960px-%D0%90%D0%B1%D1%83-%D0%94%D0%B0%D0%B1%D0%B8_%28Abu_Dhabi%29_-_panoramio_%281%29.jpg" },
    { l: 1, q: "ما عملة دولة الإمارات؟", a: "الدرهم الإماراتي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/UAE_Dirham_Symbol.svg/960px-UAE_Dirham_Symbol.svg.png" },
    { l: 1, q: "كم عدد إمارات الدولة؟", a: "سبع إمارات", img: "https://upload.wikimedia.org/wikipedia/commons/d/df/United_Arab_Emirates_University_%289717029334%29.jpg", iq: "خريطة الإمارات" },
    { l: 1, q: "ما اسم أطول برج في العالم ويقع في دبي؟", a: "برج خليفة", img: "https://thumb.wikimedia.org/wikipedia/ar/thumb/6/65/%D8%A8%D8%B1%D8%AC_%D8%AE%D9%84%D9%8A%D9%81%D8%A9.jpg/960px-%D8%A8%D8%B1%D8%AC_%D8%AE%D9%84%D9%8A%D9%81%D8%A9.jpg" },
    { l: 1, q: "ما أكبر إمارة من حيث المساحة؟", a: "أبوظبي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/%D0%90%D0%B1%D1%83-%D0%94%D0%B0%D0%B1%D0%B8_%28Abu_Dhabi%29_-_panoramio_%281%29.jpg/960px-%D0%90%D0%B1%D1%83-%D0%94%D0%B0%D0%B1%D0%B8_%28Abu_Dhabi%29_-_panoramio_%281%29.jpg" },
    { l: 1, q: "ما اسم أشهر جزيرة صناعية في دبي؟", a: "نخلة جميرا", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Artificial_Archipelagos%2C_Dubai%2C_United_Arab_Emirates_ISS022-E-024940_lrg_%28cropped%29.jpg/960px-Artificial_Archipelagos%2C_Dubai%2C_United_Arab_Emirates_ISS022-E-024940_lrg_%28cropped%29.jpg" },
    { l: 1, q: "ما اسم الفندق الشهير في دبي على شكل شراع؟", a: "برج العرب", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Borg_El_Arab_city_2.jpg/960px-Borg_El_Arab_city_2.jpg" },
    { l: 1, q: "متى يوافق اليوم الوطني الإماراتي؟", a: "الثاني من ديسمبر", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag-hoisting_at_the_Union_Declaration.jpg/960px-Flag-hoisting_at_the_Union_Declaration.jpg", iq: "علم الإمارات" },
    { l: 1, q: "ما ألوان علم الإمارات؟", a: "الأحمر والأخضر والأبيض والأسود", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag-hoisting_at_the_Union_Declaration.jpg/960px-Flag-hoisting_at_the_Union_Declaration.jpg", iq: "علم الإمارات" },
    { l: 1, q: "ما اسم أكبر مركز تجاري في دبي؟", a: "دبي مول", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Dubai_skyline_2015_%28crop%29.jpg/960px-Dubai_skyline_2015_%28crop%29.jpg" },
    { l: 2, q: "من هو مؤسّس دولة الإمارات العربية المتحدة؟", a: "الشيخ زايد بن سلطان آل نهيان", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Zayed_bin_Sultan_Al_Nahyan.jpg/960px-Zayed_bin_Sultan_Al_Nahyan.jpg" },
    { l: 2, q: "في أي عام تأسّست دولة الإمارات؟", a: "عام 1971", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/1971_Instrument_of_Surrender_WaPo.jpg/960px-1971_Instrument_of_Surrender_WaPo.jpg" },
    { l: 2, q: "اذكر أسماء الإمارات السبع.", a: "أبوظبي ودبي والشارقة وعجمان وأم القيوين ورأس الخيمة والفجيرة" },
    { l: 2, q: "ما اسم أكبر مسجد في الإمارات؟", a: "جامع الشيخ زايد الكبير", img: "https://thumb.wikimedia.org/wikipedia/ar/thumb/2/25/%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D8%B4%D9%8A%D8%AE-%D8%B2%D8%A7%D9%8A%D8%AF-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A1.jpg/960px-%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D8%B4%D9%8A%D8%AE-%D8%B2%D8%A7%D9%8A%D8%AF-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A1.jpg" },
    { l: 2, q: "ما اسم فرع متحف اللوفر في الإمارات؟", a: "اللوفر أبوظبي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/LouvreAD_tree.jpg/960px-LouvreAD_tree.jpg" },
    { l: 2, q: "ما اسم شركة الطيران الوطنية لإمارة دبي؟", a: "طيران الإمارات", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/DXB_on_23_September_2007_Pict_5.jpg/960px-DXB_on_23_September_2007_Pict_5.jpg" },
    { l: 2, q: "ما اسم شركة الطيران الوطنية لإمارة أبوظبي؟", a: "الاتحاد للطيران", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/A6-BLL_-_Boeing_787-9_Dreamliner_-_Etihad_Airways_-_MSN_39656_-_VGHS.jpg/960px-A6-BLL_-_Boeing_787-9_Dreamliner_-_Etihad_Airways_-_MSN_39656_-_VGHS.jpg" },
    { l: 2, q: "ما اسم المنطقة الحرة الشهيرة في دبي؟", a: "جبل علي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Port_Jebel_Ali_on_1_May_2007_Pict_1.jpg/960px-Port_Jebel_Ali_on_1_May_2007_Pict_1.jpg" },
    { l: 2, q: "ما اسم أشهر سباق خيول في دبي؟", a: "كأس دبي العالمي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Equestrian_pictogram.svg/960px-Equestrian_pictogram.svg.png", iq: "سباق خيول" },
    { l: 2, q: "ما اسم المعرض العالمي الذي استضافته دبي؟", a: "إكسبو 2020 دبي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/EXPO-01-concourse-rendering-%28c%29-querkraft-patricia-bagienski.jpg/960px-EXPO-01-concourse-rendering-%28c%29-querkraft-patricia-bagienski.jpg" },
    { l: 3, q: "ما اسم المسبار الإماراتي الذي وصل مدار المريخ؟", a: "مسبار الأمل", img: "image/الامارات.jpg" },
    { l: 3, q: "من هو أول رائد فضاء إماراتي؟", a: "هزاع المنصوري", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Hazzaa_AlMansoori.jpg/960px-Hazzaa_AlMansoori.jpg" },
    { l: 3, q: "ما اسم الإمارة التي تطلّ على خليج عمان فقط؟", a: "الفجيرة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Fujairah_in_United_Arab_Emirates.svg/960px-Fujairah_in_United_Arab_Emirates.svg.png" },
    { l: 3, q: "ما اسم أعلى قمة جبلية في الإمارات؟", a: "جبل جيس في رأس الخيمة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Haraz_200612_Yemen-117_%28353667919%29.jpg/960px-Haraz_200612_Yemen-117_%28353667919%29.jpg" },
    { l: 3, q: "ما اسم الحصن التاريخي الأقدم في أبوظبي؟", a: "قصر الحصن", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Qasr_al_Hosn_in_2019.jpg/960px-Qasr_al_Hosn_in_2019.jpg" },
    { l: 3, q: "ما اسم الميناء الرئيسي في دبي؟", a: "ميناء جبل علي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Port_Jebel_Ali_on_1_May_2007_Pict_1.jpg/960px-Port_Jebel_Ali_on_1_May_2007_Pict_1.jpg" },
    { l: 3, q: "ما اسم الحي التاريخي في دبي؟", a: "حي الفهيدي — البستكية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Al_Bastakiya_Dubai.jpg/960px-Al_Bastakiya_Dubai.jpg" },
    { l: 3, q: "ما اسم الممر المائي الذي يشقّ مدينة دبي؟", a: "خور دبي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Dubai_Creek_from_Bur_Dubai_%285374118618%29.jpg/960px-Dubai_Creek_from_Bur_Dubai_%285374118618%29.jpg" },
    { l: 3, q: "أي إمارة تُلقّب بعاصمة الثقافة الإسلامية؟", a: "الشارقة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Sharjah_city_skyline_in_2015.jpg/960px-Sharjah_city_skyline_in_2015.jpg" },
    { l: 3, q: "ما اسم الواحة الشهيرة في مدينة العين؟", a: "واحة العين", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Ripe_Dates_in_the_Al_Ain_Oasis.jpg/960px-Ripe_Dates_in_the_Al_Ain_Oasis.jpg" },
    { l: 4, q: "ما الموقع الإماراتي المدرج في قائمة التراث العالمي؟", a: "المواقع الثقافية في العين", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Ain_sokhna_porto.jpg/960px-Ain_sokhna_porto.jpg" },
    { l: 4, q: "ما اسم أول جامعة أُنشئت في الإمارات؟", a: "جامعة الإمارات العربية المتحدة في العين", img: "https://upload.wikimedia.org/wikipedia/commons/d/df/United_Arab_Emirates_University_%289717029334%29.jpg" },
    { l: 4, q: "ما اسم أطول عجلة دوّارة في العالم وتقع في دبي؟", a: "عين دبي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Ferris_Wheel_Ain_Dubai_in_Dubai_02.jpg/960px-Ferris_Wheel_Ain_Dubai_in_Dubai_02.jpg" },
    { l: 4, q: "ما اسم المَعلم المعماري في دبي الذي يشبه الإطار؟", a: "برواز دبي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/190410_Dubai_Frame.jpg/960px-190410_Dubai_Frame.jpg" },
    { l: 4, q: "ما اسم المحمية الطبيعية الشهيرة قرب أبوظبي؟", a: "جزيرة صير بني ياس", img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/%D8%AC%D8%B2%D9%8A%D8%B1%D8%A9_%D8%B5%D9%8A%D8%B1_%D8%A8%D9%86%D9%8A_%D9%8A%D8%A7%D8%B3_-_%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A.jpg" },
    { l: 4, q: "ما اسم أكبر حديقة زهور طبيعية في العالم وتقع في دبي؟", a: "حديقة دبي المعجزة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Miracle_Garden_1.jpg/960px-Miracle_Garden_1.jpg" },
    { l: 4, q: "ما اسم المركز المالي الرئيسي في دبي؟", a: "مركز دبي المالي العالمي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Dubai_World_Trade_Centre_and_skyline.jpg/960px-Dubai_World_Trade_Centre_and_skyline.jpg" },
    { l: 4, q: "في أي عام افتُتح مترو دبي؟", a: "عام 2009", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Metro_Dubai_001.jpg/960px-Metro_Dubai_001.jpg", iq: "مترو دبي" },
    { l: 4, q: "ما اسم الرياضة التراثية الإماراتية التي تُمارس مع الطيور الجارحة؟", a: "الصقارة", img: "https://upload.wikimedia.org/wikipedia/commons/a/af/%D9%88%D9%81%D9%88%D8%AF_%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9_%D9%85%D9%86%D8%B8%D9%85%D8%A9_%D8%A7%D9%84%D8%B5%D9%82%D8%A7%D8%B1%D8%A9_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9_%D9%81%D9%8A_%D9%85%D8%B1%D8%AF%D8%AC_%D9%83%D8%AA%D8%A7%D8%B1%D8%A7.jpeg", iq: "الصقارة" },
    { l: 4, q: "ما اسم الجزيرة التي يقع عليها اللوفر أبوظبي؟", a: "جزيرة السعديات", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Saadiyat_Island_Model_Pict_1.jpg/960px-Saadiyat_Island_Model_Pict_1.jpg" },
    { l: 5, q: "ما الاسم الذي عُرفت به إمارات الساحل قبل قيام الدولة؟", a: "الإمارات المتصالحة", img: "image/الامارات.jpg" },
    { l: 5, q: "ما اسم أول حقل نفط اكتُشف في أبوظبي؟", a: "حقل باب", img: "https://upload.wikimedia.org/wikipedia/commons/4/49/FV7A2395.jpg" },
    { l: 5, q: "في أي عام صُدّرت أول شحنة نفط من أبوظبي؟", a: "عام 1962", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/United_Arab_Airlines_de_Havilland_DH-106_Comet_4_Groves.jpg/960px-United_Arab_Airlines_de_Havilland_DH-106_Comet_4_Groves.jpg" },
    { l: 5, q: "ما اسم محطة الطاقة النووية السلمية في الإمارات؟", a: "محطة براكة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Barakah_nuclear_power_plant.jpg/960px-Barakah_nuclear_power_plant.jpg" },
    { l: 5, q: "ما اسم أكبر مجمّع للطاقة الشمسية في دبي؟", a: "مجمّع محمد بن راشد للطاقة الشمسية", img: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mohammed_bin_Rashid_Al_Maktoum_%2815-02-2021%29.jpg" },
    { l: 5, q: "ما اسم أول قمر صناعي إماراتي الصنع بالكامل؟", a: "خليفة سات", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/KhalifaSat_UAE_Satellite.jpg/960px-KhalifaSat_UAE_Satellite.jpg" },
    { l: 5, q: "ما اسم أقدم سوق تراثي في الشارقة؟", a: "سوق العرصة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Woman_in_Souk.jpg/960px-Woman_in_Souk.jpg" },
    { l: 5, q: "كم تبلغ مساحة دولة الإمارات تقريباً؟", a: "نحو 83600 كيلومتر مربع", img: "image/الامارات.jpg", iq: "خريطة الإمارات" },
    { l: 5, q: "ما اسم المبنى البيضاوي المجوّف في دبي المزيَّن بالخط العربي، الذي افتُتح عام 2022؟", a: "متحف المستقبل", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Museum_of_the_Future.jpg/960px-Museum_of_the_Future.jpg" },
    { l: 5, q: "ما اسم الجزيرة الثقافية التي تضم متاحف أبوظبي؟", a: "جزيرة السعديات", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Saadiyat_Island_Model_Pict_1.jpg/960px-Saadiyat_Island_Model_Pict_1.jpg" }
  ];

  /* ---------- عُمان (50 سؤالاً) ---------- */
  extra["عُمان"] = [
    { l: 1, q: "ما عاصمة سلطنة عُمان؟", a: "مسقط", img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/MuscatRoadGate.jpg" },
    { l: 1, q: "ما عملة سلطنة عُمان؟", a: "الريال العُماني", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Omr_symbol.svg/960px-Omr_symbol.svg.png" },
    { l: 1, q: "ما لقب حاكم عُمان؟", a: "السلطان", img: "image/عمان.jpg" },
    { l: 1, q: "ما ألوان علم سلطنة عُمان؟", a: "الأبيض والأحمر والأخضر", img: "image/عمان.jpg", iq: "علم عمان" },
    { l: 1, q: "ما الرمز الموجود على علم عُمان؟", a: "الخنجر والسيفان", img: "image/عمان.jpg", iq: "علم عمان" },
    { l: 1, q: "ما اسم الخليج الذي تطلّ عليه عُمان شمالاً؟", a: "خليج عُمان", img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Gulf_of_Oman_%28SeaWiFS%29.jpg" },
    { l: 1, q: "ما اسم البحر الذي تطلّ عليه عُمان جنوباً؟", a: "بحر العرب", img: "https://upload.wikimedia.org/wikipedia/commons/6/68/Sudan-karte-politisch-gharb-bahr-al-ghazal.png" },
    { l: 1, q: "ما اسم الخنجر التقليدي الذي يرمز لعُمان؟", a: "الخنجر العُماني", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/%D8%A7%D9%84%D8%AE%D9%86%D8%AC%D8%B1_%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%86%D9%8A.jpg/960px-%D8%A7%D9%84%D8%AE%D9%86%D8%AC%D8%B1_%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%86%D9%8A.jpg", iq: "الخنجر العماني" },
    { l: 1, q: "متى يوافق العيد الوطني العُماني؟", a: "الثامن عشر من نوفمبر", img: "image/عمان.jpg" },
    { l: 1, q: "ما المنتج العطري الذي اشتهرت به عُمان عبر التاريخ؟", a: "اللبان", img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Ruins6.JPG", iq: "اللبان" },
    { l: 2, q: "من هو سلطان عُمان الحالي؟", a: "السلطان هيثم بن طارق", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Official_portrait_of_Sultan_Haitham_bin_Tariq_%282021%29.jpg/960px-Official_portrait_of_Sultan_Haitham_bin_Tariq_%282021%29.jpg" },
    { l: 2, q: "من هو السلطان الذي حكم عُمان من 1970 إلى 2020؟", a: "السلطان قابوس بن سعيد", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/QaboosBinSaidAlSaid.jpg/960px-QaboosBinSaidAlSaid.jpg" },
    { l: 2, q: "ما اسم أكبر مسجد في سلطنة عُمان؟", a: "جامع السلطان قابوس الأكبر", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Sultan_Qaboos_Grand_Mosque_%281%29.jpg/960px-Sultan_Qaboos_Grand_Mosque_%281%29.jpg" },
    { l: 2, q: "ما اسم المحافظة الجنوبية الشهيرة بموسم الخريف؟", a: "ظفار", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Dhofar_Revolution_in_1971.svg/960px-Dhofar_Revolution_in_1971.svg.png" },
    { l: 2, q: "ما اسم عاصمة محافظة ظفار؟", a: "صلالة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Downtown_Salalah_Oman.jpg/960px-Downtown_Salalah_Oman.jpg" },
    { l: 2, q: "ما اسم الموسم السياحي الأشهر في صلالة؟", a: "موسم الخريف", img: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Salalah_Oman.jpg" },
    { l: 2, q: "ما اسم نظام الري التقليدي العُماني المدرج في التراث العالمي؟", a: "الأفلاج", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Misfah_%286%29.jpg/960px-Misfah_%286%29.jpg", iq: "الأفلاج عمان" },
    { l: 2, q: "ما اسم القلعة العُمانية المدرجة في قائمة التراث العالمي؟", a: "قلعة بهلاء", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Bahla_Fort.jpg/960px-Bahla_Fort.jpg" },
    { l: 2, q: "ما اسم دار الأوبرا في مسقط؟", a: "دار الأوبرا السلطانية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Opera_house_Muscat.jpg/960px-Opera_house_Muscat.jpg" },
    { l: 2, q: "كم عدد محافظات سلطنة عُمان؟", a: "إحدى عشرة محافظة", img: "image/عمان.jpg", iq: "خريطة عمان" },
    { l: 3, q: "ما اسم أعلى قمة جبلية في سلطنة عُمان؟", a: "جبل شمس", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Jebel_Shams.jpg/960px-Jebel_Shams.jpg" },
    { l: 3, q: "ما اسم المضيق الاستراتيجي الذي تشرف عليه عُمان؟", a: "مضيق هرمز", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/%D8%AA%D8%A7%D8%A8%D8%B4_%D8%A2%D9%81%D8%AA%D8%A7%D8%A8_%D8%A7%D8%B2_%D8%A8%DB%8C%D9%86_%D8%A7%D8%A8%D8%B1%D9%87%D8%A7_-_panoramio.jpg/960px-%D8%AA%D8%A7%D8%A8%D8%B4_%D8%A2%D9%81%D8%AA%D8%A7%D8%A8_%D8%A7%D8%B2_%D8%A8%DB%8C%D9%86_%D8%A7%D8%A8%D8%B1%D9%87%D8%A7_-_panoramio.jpg" },
    { l: 3, q: "ما اسم شبه الجزيرة العُمانية المنفصلة في أقصى الشمال؟", a: "مسندم", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Musandam_fjord.jpg/960px-Musandam_fjord.jpg" },
    { l: 3, q: "ما اسم الميناء العُماني الكبير في الجنوب؟", a: "ميناء صلالة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/OM-salalah-hafen.jpg/960px-OM-salalah-hafen.jpg" },
    { l: 3, q: "ما اسم الصحراء الرملية الشهيرة في شرق عُمان؟", a: "رمال الشرقية — وهيبة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Wahiba_Sands_%2812%29.jpg/960px-Wahiba_Sands_%2812%29.jpg" },
    { l: 3, q: "ما اسم الوادي السياحي الأشهر في عُمان؟", a: "وادي شاب", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Tiwi%2C_wadi_shabt%2C_06.jpg/960px-Tiwi%2C_wadi_shabt%2C_06.jpg" },
    { l: 3, q: "ما اسم أول جامعة حكومية في عُمان؟", a: "جامعة السلطان قابوس", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Omani_Studies_Center_%D9%85%D8%B1%D9%83%D8%B2_%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA_%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%86%D9%8A%D8%A9.JPG/960px-Omani_Studies_Center_%D9%85%D8%B1%D9%83%D8%B2_%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA_%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%86%D9%8A%D8%A9.JPG" },
    { l: 3, q: "ما اسم شركة الطيران الوطنية العُمانية؟", a: "الطيران العُماني", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Oman_Air_B737-800_%28A4O-BM%29_%40_DXB%2C_Nov_2009.jpg/960px-Oman_Air_B737-800_%28A4O-BM%29_%40_DXB%2C_Nov_2009.jpg" },
    { l: 3, q: "ما اسم المدينة التي كانت عاصمة عُمان قديماً وتشتهر بقلعتها؟", a: "نزوى", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Nizwa_%287%29.jpg/960px-Nizwa_%287%29.jpg" },
    { l: 3, q: "ما اسم أشهر سوق تقليدي في مسقط؟", a: "سوق مطرح", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/%D9%88%D8%A7%D8%AC%D9%87%D8%A9_%D8%B3%D9%88%D9%82_%D9%85%D8%B7%D8%B1%D8%AD.jpg/960px-%D9%88%D8%A7%D8%AC%D9%87%D8%A9_%D8%B3%D9%88%D9%82_%D9%85%D8%B7%D8%B1%D8%AD.jpg" },
    { l: 4, q: "ما اسم الحيوان البري النادر الذي تشتهر عُمان بحمايته؟", a: "المها العربي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Arabian_Oryx_Sanctuary.jpg/960px-Arabian_Oryx_Sanctuary.jpg", iq: "المها العربي" },
    { l: 4, q: "ما نوع السلاحف البحرية التي تعشّش في رأس الجنز؟", a: "السلاحف الخضراء", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Total_internal_reflection_of_Chelonia_mydas.jpg/960px-Total_internal_reflection_of_Chelonia_mydas.jpg", iq: "السلحفاة الخضراء" },
    { l: 4, q: "ما اسم الحصنين التاريخيين المطلّين على ميناء مسقط؟", a: "الجلالي والميراني", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Old_Muscat_%282%29.jpg/960px-Old_Muscat_%282%29.jpg" },
    { l: 4, q: "ما اسم موقع «أرض اللبان» المدرج في التراث العالمي؟", a: "أرض اللبان في ظفار", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/%D9%85%D8%AA%D8%AD%D9%81_%D8%A3%D8%B1%D8%B6_%D8%A7%D9%84%D9%84%D8%A8%D8%A7%D9%86.png/960px-%D9%85%D8%AA%D8%AD%D9%81_%D8%A3%D8%B1%D8%B6_%D8%A7%D9%84%D9%84%D8%A8%D8%A7%D9%86.png" },
    { l: 4, q: "ما اسم أكبر جزيرة عُمانية في بحر العرب؟", a: "جزيرة مصيرة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Masirah.jpg/960px-Masirah.jpg" },
    { l: 4, q: "ما اسم المنطقة الاقتصادية الخاصة على الساحل الأوسط؟", a: "المنطقة الاقتصادية الخاصة بالدقم", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Special_Economic_Zone_at_Duqm_SEZAD.jpg/960px-Special_Economic_Zone_at_Duqm_SEZAD.jpg" },
    { l: 4, q: "ما اسم أشهر كهف سياحي في عُمان؟", a: "كهف الهوتة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/AlHootahCave.jpg/960px-AlHootahCave.jpg" },
    { l: 4, q: "ما اسم أضخم تجويف كهفي في عُمان؟", a: "مجلس الجن", img: "https://upload.wikimedia.org/wikipedia/commons/0/00/Majlis_al_Jinn_-_Descending_into_cave.jpg" },
    { l: 4, q: "ما اسم المواقع الأثرية العُمانية المدرجة في التراث العالمي بمدافنها؟", a: "بات والخُطم والعين", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Al_Ayn%2C_tombs_%286871088461%29.jpg/960px-Al_Ayn%2C_tombs_%286871088461%29.jpg" },
    { l: 4, q: "ما اسم الجبل الشهير بالزراعة المدرّجة والورد؟", a: "الجبل الأخضر", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Jebel_Akhdar_view.jpg/960px-Jebel_Akhdar_view.jpg" },
    { l: 5, q: "ما اسم الأسرة الحاكمة في سلطنة عُمان؟", a: "الأسرة البوسعيدية" },
    { l: 5, q: "ما اسم الجزيرة الأفريقية التي حكمتها عُمان؟", a: "زنجبار", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Spice_Islands_%28Zanzibar_highlighted%29-ar.svg/960px-Spice_Islands_%28Zanzibar_highlighted%29-ar.svg.png" },
    { l: 5, q: "ما اسم البحّار العُماني الشهير في علم الملاحة؟", a: "أحمد بن ماجد", img: "https://upload.wikimedia.org/wikipedia/commons/4/42/N%C3%A9gociant_musulman_de_Mascate.jpg" },
    { l: 5, q: "ما اسم الفن الشعبي العُماني الذي يؤدّى بالسيوف والشعر؟", a: "الرزحة", img: "https://upload.wikimedia.org/wikipedia/commons/3/30/%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D8%A9.jpg" },
    { l: 5, q: "ما اسم وادي أشجار اللبان المحمي في ظفار؟", a: "وادي دوكة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Wadi_Dawkah.jpg/960px-Wadi_Dawkah.jpg" },
    { l: 5, q: "كم تبلغ مساحة سلطنة عُمان تقريباً؟", a: "نحو 309 آلاف كيلومتر مربع", img: "image/عمان.jpg", iq: "خريطة عمان" },
    { l: 5, q: "ما اسم السفينة العُمانية التاريخية التي أبحرت إلى الصين؟", a: "سفينة صحار", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Aft_view_Thistlegorm.jpg/960px-Aft_view_Thistlegorm.jpg" },
    { l: 5, q: "ما اسم النشيد الوطني العُماني؟", a: "السلام السلطاني", img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Necip_pasha.jpg" },
    { l: 5, q: "ما اسم أقدم مدينة أثرية في عُمان تعود لعصر البرونز؟", a: "بات" },
    { l: 5, q: "ما اسم المدينة الساحلية الشهيرة بصناعة السفن في عُمان؟", a: "صور", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/SubmergedEgyptianHarbour_TyreSour_Lebanon_RomanDeckert04112019.jpg/960px-SubmergedEgyptianHarbour_TyreSour_Lebanon_RomanDeckert04112019.jpg" }
  ];

  /* ---------- تركيا (50 سؤالاً) ---------- */
  extra["تركيا"] = [
    { l: 1, q: "ما عاصمة تركيا؟", a: "أنقرة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Ankara_2016_genel_kolaj%C4%B1.jpg/960px-Ankara_2016_genel_kolaj%C4%B1.jpg" },
    { l: 1, q: "ما أكبر مدينة في تركيا من حيث السكان؟", a: "إسطنبول", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Modern_Istanbul_skyline.jpg/960px-Modern_Istanbul_skyline.jpg" },
    { l: 1, q: "ما اسم المضيق الذي يشقّ إسطنبول ويفصل بين آسيا وأوروبا؟", a: "مضيق البوسفور", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Bosphorus_Bridge.jpg/960px-Bosphorus_Bridge.jpg" },
    { l: 1, q: "ما عملة تركيا؟", a: "الليرة التركية", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/New_Turkish_Lira-set.jpg" },
    { l: 1, q: "ما اسم الساحة الشهيرة في إسطنبول التي يتوسّطها نصب الجمهورية؟", a: "ساحة تقسيم", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Monument_of_the_Republic_in_Taksim%2C_Istanbul_29.10.2023_01.jpg/960px-Monument_of_the_Republic_in_Taksim%2C_Istanbul_29.10.2023_01.jpg" },
    { l: 1, q: "ما اسم السوق المسقوف التاريخي الأشهر في إسطنبول؟", a: "البازار الكبير (كابالي تشارشي)", img: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Grand_Bazaar_in_Istanbul_Turkey.jpg" },
    { l: 1, q: "ما اسم مجموعة الجزر القريبة من إسطنبول التي تُمنع فيها السيارات؟", a: "جزر الأميرات", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Princes%E2%80%99_Islands%2C_Istanbul.jpg/960px-Princes%E2%80%99_Islands%2C_Istanbul.jpg" },
    { l: 1, q: "ما اسم البحيرة الشهيرة بين الجبال في ولاية طرابزون؟", a: "أوزنجول", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Uzung%C3%B6l_lake_and_town.jpg/960px-Uzung%C3%B6l_lake_and_town.jpg" },
    { l: 1, q: "ما اسم أشهر شارع للمشاة والتسوّق في منطقة بيوغلو بإسطنبول، ويسير فيه الترام القديم؟", a: "شارع الاستقلال", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Historic_tram_on_%C4%B0stiklal_Avenue_-_panoramio.jpg/960px-Historic_tram_on_%C4%B0stiklal_Avenue_-_panoramio.jpg" },
    { l: 1, q: "ما اسم المعلم الشهير في إسطنبول الذي كان كنيسة ثم متحفاً ثم عاد مسجداً؟", a: "آيا صوفيا", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/960px-Hagia_Sophia_Mars_2013.jpg" },
    { l: 2, q: "من هو مؤسّس الجمهورية التركية؟", a: "مصطفى كمال أتاتورك", img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Ataturk1930s.jpg" },
    { l: 2, q: "في أي عام تأسّست الجمهورية التركية؟", a: "عام 1923", img: "image/تركيا.jpg" },
    { l: 2, q: "ما اسم المنطقة الصخرية الشهيرة برحلات المناطيد وسط تركيا؟", a: "كابادوكيا", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg/960px-Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg" },
    { l: 2, q: "ما اسم قصر السلاطين العثمانيين في إسطنبول؟", a: "قصر توب كابي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Exterior_of_Topkapi_Palace_%286%29_crop.jpg/960px-Exterior_of_Topkapi_Palace_%286%29_crop.jpg" },
    { l: 2, q: "ما اسم المنطقة التاريخية في إسطنبول التي تضم آيا صوفيا والمسجد الأزرق؟", a: "السلطان أحمد", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Sultanahmet_Square%2C_Istanbul_%2852121369586%29.jpg/960px-Sultanahmet_Square%2C_Istanbul_%2852121369586%29.jpg" },
    { l: 2, q: "ما اسم سوق التوابل التاريخي في منطقة أمينونو بإسطنبول؟", a: "السوق المصري (مصر تشارشيسي)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Interior_of_Spice_Bazaar_%28Misir_Carsisi%29%2C_Istanbul_-_Tarik_Kaan_Muslu.jpg/960px-Interior_of_Spice_Bazaar_%28Misir_Carsisi%29%2C_Istanbul_-_Tarik_Kaan_Muslu.jpg" },
    { l: 2, q: "ما اسم الحي المطلّ على البوسفور الشهير بمسجده تحت الجسر وبطبق «الكومبير»؟", a: "أورتاكوي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Ortak%C3%B6y_Mosque_and_Bosphorus_Bridge%2C_March_2024_01.jpg/960px-Ortak%C3%B6y_Mosque_and_Bosphorus_Bridge%2C_March_2024_01.jpg" },
    { l: 2, q: "ما اسم المنطقة في الجانب الآسيوي من إسطنبول التي يقع فيها شارع بغداد الشهير؟", a: "كاديكوي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Kad%C4%B1k%C3%B6y_iskelesi_IMG_0701.jpg/960px-Kad%C4%B1k%C3%B6y_iskelesi_IMG_0701.jpg" },
    { l: 2, q: "ما اسم المجمع التجاري في إسطنبول المعروف اختصاراً بـ«MOI»؟", a: "مول أوف إسطنبول (Mall of Istanbul)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Mall_of_Istanbul_Residence_Towers.jpg/960px-Mall_of_Istanbul_Residence_Towers.jpg" },
    { l: 2, q: "ما اسم أكبر مسجد في تركيا، ويقع على تلة في أسكودار بإسطنبول؟", a: "مسجد تشامليجا الكبير", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Grand_%C3%87aml%C4%B1ca_Mosque_%2899490%29.jpg/960px-Grand_%C3%87aml%C4%B1ca_Mosque_%2899490%29.jpg" },
    { l: 3, q: "ما اسم المجمع التجاري في منطقة شيشلي بإسطنبول الذي كان عند افتتاحه عام 2005 أكبر مجمع تجاري في أوروبا؟", a: "جواهر إسطنبول (Cevahir)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Cevahir_Shopping_Mall_in_Istanbul.jpg/960px-Cevahir_Shopping_Mall_in_Istanbul.jpg" },
    { l: 3, q: "ما اسم المجمع التجاري في حي ليفنت بإسطنبول المصمَّم على شكل وادٍ مكشوف؟", a: "كانيون (Kanyon)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Kanyon_Shopping_Mall%2C_Istanbul_-_night_shot.jpg/960px-Kanyon_Shopping_Mall%2C_Istanbul_-_night_shot.jpg" },
    { l: 3, q: "ما اسم الحي الإسطنبولي الشهير ببيوته الملوّنة على ضفة القرن الذهبي؟", a: "بلاط", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Colorful_Balat_houses.jpg/960px-Colorful_Balat_houses.jpg" },
    { l: 3, q: "ما اسم أعلى جبل في تركيا؟", a: "جبل أرارات (آغري)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Mount_Ararat_and_the_Araratian_plain_%28cropped%29.jpg/960px-Mount_Ararat_and_the_Araratian_plain_%28cropped%29.jpg" },
    { l: 3, q: "ما اسم أكبر بحيرة في تركيا؟", a: "بحيرة وان", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/STS079-781-53.jpg/960px-STS079-781-53.jpg" },
    { l: 3, q: "ما اسم المدينة الرومانية الأثرية الشهيرة قرب إزمير؟", a: "أفسس", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Ephesus_Celsus_Library_Fa%C3%A7ade.jpg/960px-Ephesus_Celsus_Library_Fa%C3%A7ade.jpg" },
    { l: 3, q: "ما اسم شركة الطيران الوطنية التركية؟", a: "الخطوط الجوية التركية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Berlin_Brandenburg_Airport_Turkish_Airlines_Airbus_A350-941_TC-LGJ_%28DSC01105%29.jpg/960px-Berlin_Brandenburg_Airport_Turkish_Airlines_Airbus_A350-941_TC-LGJ_%28DSC01105%29.jpg" },
    { l: 3, q: "ما اسم المسجد في إسطنبول الذي يضم ضريح الصحابي أبي أيوب الأنصاري؟", a: "مسجد أيوب سلطان", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Ey%C3%BCp_Sultan_Mosque_68.jpg/960px-Ey%C3%BCp_Sultan_Mosque_68.jpg" },
    { l: 3, q: "ما اسم البحيرة في ولاية سكاريا التي يقصدها أهل إسطنبول في العطل؟", a: "بحيرة سبانجا", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/TR_Sakarya_asv2021-10_img01_Lake_Sapanca_airview.jpg/960px-TR_Sakarya_asv2021-10_img01_Lake_Sapanca_airview.jpg" },
    { l: 3, q: "كم عدد ولايات تركيا؟", a: "81 ولاية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Turkey_provinces_blank_gray.svg/960px-Turkey_provinces_blank_gray.svg.png" },
    { l: 4, q: "ما اسم المجمع في منطقة بشكتاش بإسطنبول الذي يضم مركز «PSM» للفنون الأدائية؟", a: "زورلو سنتر (Zorlu Center)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/ZorluCanterTowers.JPG/960px-ZorluCanterTowers.JPG" },
    { l: 4, q: "ما الاسم الحالي لمدينة الألعاب والمجمع التجاري في أيوب سلطان الذي كان يُعرف باسم «فيالاند»؟", a: "إسفانبول (Isfanbul)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Vialand_Theme_Park%2C_%C4%B0stanbul_p3.jpg/960px-Vialand_Theme_Park%2C_%C4%B0stanbul_p3.jpg" },
    { l: 4, q: "ما اسم القرية الجبلية الشهيرة بالشلالات ومطاعم الطبيعة في كارتبه بولاية كوجالي؟", a: "ماشوكية", img: "https://upload.wikimedia.org/wikipedia/commons/f/f6/-Sapanca_-turkey_-istanbul_-tourism_-waterfalls_-nature_-natural_-masukiye_%2814229253057%29.jpg" },
    { l: 4, q: "ما اسم المجمع التجاري الفاخر في منطقة صارِيَر على الجانب الأوروبي من إسطنبول؟", a: "إستينيه بارك (İstinyePark)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Interior_of_%C4%B0stinye_Park.jpg/960px-Interior_of_%C4%B0stinye_Park.jpg" },
    { l: 4, q: "ما اسم المجمع التجاري في بايرام باشا بإسطنبول الذي يضم حوض الأسماك «توركوازو»؟", a: "فوروم إسطنبول (Forum Istanbul)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Required_Ray_in_Turkuazoo%2C_Istanbul%2C_Turkey_%289606744672%29.jpg/960px-Required_Ray_in_Turkuazoo%2C_Istanbul%2C_Turkey_%289606744672%29.jpg" },
    { l: 4, q: "ما اسم أطول جسر معلّق في تركيا؟", a: "جسر جناق قلعة 1915", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/1915_%C3%87anakkale_Bridge_20220327.jpg/960px-1915_%C3%87anakkale_Bridge_20220327.jpg" },
    { l: 4, q: "من هو السلطان العثماني الذي فتح القسطنطينية؟", a: "محمد الفاتح", img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Fatih_Sultan_Mehmed_Han_-_%D8%A7%D9%84%D8%B3%D9%84%D8%B7%D8%A7%D9%86_%D9%85%D8%AD%D9%85%D8%AF_%D8%AE%D8%A7%D9%86_%D8%A7%D9%84%D9%81%D8%A7%D8%AA%D8%AD.jpg" },
    { l: 4, q: "في أي عام فُتحت القسطنطينية؟", a: "عام 1453", img: "image/تركيا.jpg" },
    { l: 4, q: "من هو المعمار العثماني الأشهر؟", a: "معمار سنان", img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Mimar_Sinan%2C_architecte_de_Soliman_le_Magnifique.jpg" },
    { l: 4, q: "ما اسم ميناء السفن السياحية ومنطقة التسوّق الحديثة في كاراكوي على البوسفور؟", a: "غلطة بورت (Galataport)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Galataport.IMG_0665.jpg/960px-Galataport.IMG_0665.jpg" },
    { l: 5, q: "في أي مجمع تجاري بالجانب الآسيوي من إسطنبول تقع مدينة الأطفال «كيدزانيا»؟", a: "أكاسيا عجي بادم (Akasya)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Akasya_Ac%C4%B1badem_Shopping_Mall.jpg/960px-Akasya_Ac%C4%B1badem_Shopping_Mall.jpg" },
    { l: 5, q: "ما اسم أول مجمع تجاري حديث في تركيا، افتُتح عام 1988 في باكركوي بإسطنبول؟", a: "غاليريا أتاكوي (Galleria)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Galleria_%2820493526019%29.jpg/960px-Galleria_%2820493526019%29.jpg" },
    { l: 5, q: "ما اسم المجمع التجاري في حي إتيلر بإسطنبول الذي افتُتح عام 1993؟", a: "أك مركز (Akmerkez)", img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Akmerkez_1040.jpg" },
    { l: 5, q: "ما اسم أكثر أقضية (مناطق) إسطنبول سكاناً؟", a: "إسنيورت", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Haramidere_G%C3%B6kdelenler_B%C3%B6lgesi_Esenyurt_%C4%B0stanbul.JPG/960px-Haramidere_G%C3%B6kdelenler_B%C3%B6lgesi_Esenyurt_%C4%B0stanbul.JPG" },
    { l: 5, q: "ما اسم ضريح أتاتورك في أنقرة؟", a: "أنيت كابير", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Ankara_asv2021-10_img04_An%C4%B1tkabir.jpg/960px-Ankara_asv2021-10_img04_An%C4%B1tkabir.jpg" },
    { l: 5, q: "ما اسم النفق الذي يربط شطري إسطنبول تحت البوسفور بالقطار؟", a: "نفق مرمراي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Marmaraytwotunnel.JPG/960px-Marmaraytwotunnel.JPG" },
    { l: 5, q: "ما اسم الهضبة الخضراء الشهيرة في ولاية ريزه؟", a: "هضبة أيدر", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Ayder%2C_August_2019_%283%29.jpg/960px-Ayder%2C_August_2019_%283%29.jpg" },
    { l: 5, q: "ما رمز الاتصال الدولي لتركيا؟", a: "+90", img: "image/تركيا.jpg" },
    { l: 5, q: "ما اسم الساحة المركزية الشهيرة في قلب العاصمة أنقرة؟", a: "كيزيلاي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/K%C4%B1z%C4%B1lay_Meydan%C4%B1.jpg/960px-K%C4%B1z%C4%B1lay_Meydan%C4%B1.jpg" },
    { l: 5, q: "ما اسم عاصمة الحضارة الحثية في الأناضول؟", a: "حاتوشا", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Hattusha_the_Hittite_Capital-110995.jpg/960px-Hattusha_the_Hittite_Capital-110995.jpg" }
  ];

  /* ---------- مناطق تركيا (50 سؤالاً) ---------- */
  extra["مناطق تركيا"] = [
    /* بالخرائط فقط: الخريطة المرقّمة، والمنطقة الملوّنة، والولاية الملوّنة — ١٠ لكل مستوى */
    { l: 1, q: "على الخريطة: ما اسم المنطقة رقم 1؟", a: "منطقة مرمرة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Turkey_Regions_blank.png/960px-Turkey_Regions_blank.png", labels: [[13, 36, "1"], [17, 55, "2"], [28, 63, "3"], [43, 47, "4"], [52, 29, "5"], [80, 42, "6"], [68, 62, "7"]], mark: "1" },
    { l: 1, q: "على الخريطة: ما اسم المنطقة رقم 4؟", a: "منطقة الأناضول الوسطى", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Turkey_Regions_blank.png/960px-Turkey_Regions_blank.png", labels: [[13, 36, "1"], [17, 55, "2"], [28, 63, "3"], [43, 47, "4"], [52, 29, "5"], [80, 42, "6"], [68, 62, "7"]], mark: "4" },
    { l: 1, q: "على الخريطة: ما اسم المنطقة رقم 5؟", a: "منطقة البحر الأسود", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Turkey_Regions_blank.png/960px-Turkey_Regions_blank.png", labels: [[13, 36, "1"], [17, 55, "2"], [28, 63, "3"], [43, 47, "4"], [52, 29, "5"], [80, 42, "6"], [68, 62, "7"]], mark: "5" },
    { l: 1, q: "ما اسم المنطقة الجغرافية الملوّنة بالأحمر على الخريطة؟", a: "منطقة مرمرة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Latrans-Turkey_location_Marmara_Region.svg/960px-Latrans-Turkey_location_Marmara_Region.svg.png" },
    { l: 1, q: "ما اسم المنطقة الجغرافية الملوّنة بالأحمر على الخريطة؟", a: "منطقة البحر الأسود", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Latrans-Turkey_location_Black_Sea_Region.svg/960px-Latrans-Turkey_location_Black_Sea_Region.svg.png" },
    { l: 1, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "إسطنبول", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Latrans-Turkey_location_Istanbul.svg/960px-Latrans-Turkey_location_Istanbul.svg.png" },
    { l: 1, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "أنقرة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Latrans-Turkey_location_Ankara.svg/960px-Latrans-Turkey_location_Ankara.svg.png" },
    { l: 1, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "إزمير", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Latrans-Turkey_location_%C4%B0zmir.svg/960px-Latrans-Turkey_location_%C4%B0zmir.svg.png" },
    { l: 1, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "أنطاليا", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Latrans-Turkey_location_Antalya.svg/960px-Latrans-Turkey_location_Antalya.svg.png" },
    { l: 1, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "بورصة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Latrans-Turkey_location_Bursa.svg/960px-Latrans-Turkey_location_Bursa.svg.png" },
    { l: 2, q: "على الخريطة: ما اسم المنطقة رقم 2؟", a: "منطقة إيجة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Turkey_Regions_blank.png/960px-Turkey_Regions_blank.png", labels: [[13, 36, "1"], [17, 55, "2"], [28, 63, "3"], [43, 47, "4"], [52, 29, "5"], [80, 42, "6"], [68, 62, "7"]], mark: "2" },
    { l: 2, q: "على الخريطة: ما اسم المنطقة رقم 3؟", a: "منطقة البحر المتوسط", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Turkey_Regions_blank.png/960px-Turkey_Regions_blank.png", labels: [[13, 36, "1"], [17, 55, "2"], [28, 63, "3"], [43, 47, "4"], [52, 29, "5"], [80, 42, "6"], [68, 62, "7"]], mark: "3" },
    { l: 2, q: "ما اسم المنطقة الجغرافية الملوّنة بالأحمر على الخريطة؟", a: "منطقة إيجة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Latrans-Turkey_location_Aegean_Region.svg/960px-Latrans-Turkey_location_Aegean_Region.svg.png" },
    { l: 2, q: "ما اسم المنطقة الجغرافية الملوّنة بالأحمر على الخريطة؟", a: "منطقة البحر المتوسط", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Latrans-Turkey_location_Mediterranean_Region.svg/960px-Latrans-Turkey_location_Mediterranean_Region.svg.png" },
    { l: 2, q: "ما اسم المنطقة الجغرافية الملوّنة بالأحمر على الخريطة؟", a: "منطقة الأناضول الوسطى", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Latrans-Turkey_location_Central_Anatolia_Region.svg/960px-Latrans-Turkey_location_Central_Anatolia_Region.svg.png" },
    { l: 2, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "قونية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Latrans-Turkey_location_Konya.svg/960px-Latrans-Turkey_location_Konya.svg.png" },
    { l: 2, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "طرابزون", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Latrans-Turkey_location_Trabzon.svg/960px-Latrans-Turkey_location_Trabzon.svg.png" },
    { l: 2, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "أضنة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Latrans-Turkey_location_Adana.svg/960px-Latrans-Turkey_location_Adana.svg.png" },
    { l: 2, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "غازي عنتاب", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Latrans-Turkey_location_Gaziantep.svg/960px-Latrans-Turkey_location_Gaziantep.svg.png" },
    { l: 2, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "مرسين", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Latrans-Turkey_location_Mersin.svg/960px-Latrans-Turkey_location_Mersin.svg.png" },
    { l: 3, q: "على الخريطة: ما اسم المنطقة رقم 6؟", a: "منطقة شرق الأناضول", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Turkey_Regions_blank.png/960px-Turkey_Regions_blank.png", labels: [[13, 36, "1"], [17, 55, "2"], [28, 63, "3"], [43, 47, "4"], [52, 29, "5"], [80, 42, "6"], [68, 62, "7"]], mark: "6" },
    { l: 3, q: "على الخريطة: ما اسم المنطقة رقم 7؟", a: "منطقة جنوب شرق الأناضول", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Turkey_Regions_blank.png/960px-Turkey_Regions_blank.png", labels: [[13, 36, "1"], [17, 55, "2"], [28, 63, "3"], [43, 47, "4"], [52, 29, "5"], [80, 42, "6"], [68, 62, "7"]], mark: "7" },
    { l: 3, q: "ما اسم المنطقة الجغرافية الملوّنة بالأحمر على الخريطة؟", a: "منطقة شرق الأناضول", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Latrans-Turkey_location_Eastern_Anatolia_Region.svg/960px-Latrans-Turkey_location_Eastern_Anatolia_Region.svg.png" },
    { l: 3, q: "ما اسم المنطقة الجغرافية الملوّنة بالأحمر على الخريطة؟", a: "منطقة جنوب شرق الأناضول", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Latrans-Turkey_location_Southeastern_Anatolia_Region.svg/960px-Latrans-Turkey_location_Southeastern_Anatolia_Region.svg.png" },
    { l: 3, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "قيصري", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Latrans-Turkey_location_Kayseri.svg/960px-Latrans-Turkey_location_Kayseri.svg.png" },
    { l: 3, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "إسكي شهير", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Latrans-Turkey_location_Eski%C5%9Fehir.svg/960px-Latrans-Turkey_location_Eski%C5%9Fehir.svg.png" },
    { l: 3, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "ديار بكر", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Latrans-Turkey_location_Diyarbak%C4%B1r.svg/960px-Latrans-Turkey_location_Diyarbak%C4%B1r.svg.png" },
    { l: 3, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "أرضروم", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Latrans-Turkey_location_Erzurum.svg/960px-Latrans-Turkey_location_Erzurum.svg.png" },
    { l: 3, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "سامسون", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Latrans-Turkey_location_Samsun.svg/960px-Latrans-Turkey_location_Samsun.svg.png" },
    { l: 3, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "هاتاي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Latrans-Turkey_location_Hatay.svg/960px-Latrans-Turkey_location_Hatay.svg.png" },
    { l: 4, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "وان", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Latrans-Turkey_location_Van.svg/960px-Latrans-Turkey_location_Van.svg.png" },
    { l: 4, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "شانلي أورفا", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Latrans-Turkey_location_%C5%9Eanl%C4%B1urfa.svg/960px-Latrans-Turkey_location_%C5%9Eanl%C4%B1urfa.svg.png" },
    { l: 4, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "ماردين", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Latrans-Turkey_location_Mardin.svg/960px-Latrans-Turkey_location_Mardin.svg.png" },
    { l: 4, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "ملاطية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Latrans-Turkey_location_Malatya.svg/960px-Latrans-Turkey_location_Malatya.svg.png" },
    { l: 4, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "موغلا", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Latrans-Turkey_location_Mu%C4%9Fla.svg/960px-Latrans-Turkey_location_Mu%C4%9Fla.svg.png" },
    { l: 4, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "دنيزلي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Latrans-Turkey_location_Denizli.svg/960px-Latrans-Turkey_location_Denizli.svg.png" },
    { l: 4, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "نوشهير", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Latrans-Turkey_location_Nev%C5%9Fehir.svg/960px-Latrans-Turkey_location_Nev%C5%9Fehir.svg.png" },
    { l: 4, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "ريزه", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Latrans-Turkey_location_Rize.svg/960px-Latrans-Turkey_location_Rize.svg.png" },
    { l: 4, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "أدرنة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Latrans-Turkey_location_Edirne.svg/960px-Latrans-Turkey_location_Edirne.svg.png" },
    { l: 4, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "جناق قلعة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Latrans-Turkey_location_%C3%87anakkale.svg/960px-Latrans-Turkey_location_%C3%87anakkale.svg.png" },
    { l: 5, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "سينوب", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Latrans-Turkey_location_Sinop.svg/960px-Latrans-Turkey_location_Sinop.svg.png" },
    { l: 5, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "هكاري", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Latrans-Turkey_location_Hakkari.svg/960px-Latrans-Turkey_location_Hakkari.svg.png" },
    { l: 5, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "قارص", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Latrans-Turkey_location_Kars.svg/960px-Latrans-Turkey_location_Kars.svg.png" },
    { l: 5, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "آغري", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Latrans-Turkey_location_A%C4%9Fr%C4%B1.svg/960px-Latrans-Turkey_location_A%C4%9Fr%C4%B1.svg.png" },
    { l: 5, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "أرتفين", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Latrans-Turkey_location_Artvin.svg/960px-Latrans-Turkey_location_Artvin.svg.png" },
    { l: 5, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "بولو", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Latrans-Turkey_location_Bolu.svg/960px-Latrans-Turkey_location_Bolu.svg.png" },
    { l: 5, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "قسطموني", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Latrans-Turkey_location_Kastamonu.svg/960px-Latrans-Turkey_location_Kastamonu.svg.png" },
    { l: 5, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "سيواس", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Latrans-Turkey_location_Sivas.svg/960px-Latrans-Turkey_location_Sivas.svg.png" },
    { l: 5, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "إلازغ", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Latrans-Turkey_location_Elaz%C4%B1%C4%9F.svg/960px-Latrans-Turkey_location_Elaz%C4%B1%C4%9F.svg.png" },
    { l: 5, q: "ما اسم الولاية الملوّنة بالأحمر على الخريطة؟", a: "قرقلر إيلي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Latrans-Turkey_location_K%C4%B1rklareli.svg/960px-Latrans-Turkey_location_K%C4%B1rklareli.svg.png" }
  ];

  /* ---------- دول الخليج (50 سؤالاً) ---------- */
  extra["دول الخليج"] = [
    { l: 1, q: "كم عدد دول مجلس التعاون الخليجي؟", a: "ست دول", img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Mercator-Hondius_%281634%29_Ottoman_Empire.jpg", iq: "خريطة الخليج العربي" },
    { l: 1, q: "اذكر دول مجلس التعاون الخليجي.", a: "السعودية والإمارات والكويت وقطر والبحرين وعُمان" },
    { l: 1, q: "ما عاصمة دولة قطر؟", a: "الدوحة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Doha_skyline_in_the_morning_%2812544910974%29.jpg/960px-Doha_skyline_in_the_morning_%2812544910974%29.jpg" },
    { l: 1, q: "ما عاصمة دولة الكويت؟", a: "مدينة الكويت", img: "https://upload.wikimedia.org/wikipedia/commons/9/97/Kuwait_montage.png" },
    { l: 1, q: "ما عملة دولة قطر؟", a: "الريال القطري", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/QAT001.JPG/960px-QAT001.JPG" },
    { l: 1, q: "ما عملة دولة الكويت؟", a: "الدينار الكويتي", img: "https://upload.wikimedia.org/wikipedia/commons/0/0f/KWD_against_USD_ar.PNG" },
    { l: 1, q: "ما أكبر دولة خليجية من حيث المساحة؟", a: "المملكة العربية السعودية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Salman_bin_Abdull_aziz_December_9%2C_2013.jpg/960px-Salman_bin_Abdull_aziz_December_9%2C_2013.jpg" },
    { l: 1, q: "ما اسم البحر الذي تطلّ عليه معظم دول الخليج؟", a: "الخليج العربي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/PersianGulf_vue_satellite_du_golfe_persique.jpg/960px-PersianGulf_vue_satellite_du_golfe_persique.jpg" },
    { l: 1, q: "ما المورد الاقتصادي الرئيسي لدول الخليج؟", a: "النفط والغاز", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Oil_platform_P-51_%28Brazil%29.jpg/960px-Oil_platform_P-51_%28Brazil%29.jpg", iq: "منصة نفط" },
    { l: 1, q: "ما اللغة الرسمية في دول الخليج؟", a: "العربية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Arabic_speaking_world.svg/960px-Arabic_speaking_world.svg.png" },
    { l: 2, q: "في أي عام تأسّس مجلس التعاون لدول الخليج العربية؟", a: "عام 1981" },
    { l: 2, q: "أين يقع مقر الأمانة العامة لمجلس التعاون الخليجي؟", a: "الرياض", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Masmak.JPG/960px-Masmak.JPG" },
    { l: 2, q: "ما أصغر دولة خليجية من حيث المساحة؟", a: "البحرين", img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/AL2011.png" },
    { l: 2, q: "أي دولة خليجية تطلّ سواحلها الأطول على بحر العرب وخليج عُمان؟", a: "سلطنة عُمان", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Nizwa_Fort_Detail.JPG/960px-Nizwa_Fort_Detail.JPG" },
    { l: 2, q: "ما اسم أكبر حقل غاز طبيعي في العالم وتشترك فيه قطر؟", a: "حقل الشمال" },
    { l: 2, q: "أي دولة خليجية استضافت كأس العالم لكرة القدم 2022؟", a: "قطر", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Qatar_diplomatic_crisis.svg/960px-Qatar_diplomatic_crisis.svg.png" },
    { l: 2, q: "ما اسم أطول برج في منطقة الخليج؟", a: "برج خليفة في دبي", img: "https://thumb.wikimedia.org/wikipedia/ar/thumb/6/65/%D8%A8%D8%B1%D8%AC_%D8%AE%D9%84%D9%8A%D9%81%D8%A9.jpg/960px-%D8%A8%D8%B1%D8%AC_%D8%AE%D9%84%D9%8A%D9%81%D8%A9.jpg" },
    { l: 2, q: "ما اسم الجسر الذي يربط دولتين خليجيتين؟", a: "جسر الملك فهد بين السعودية والبحرين", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/King_Fahd_Causeway_bridge_num4.jpg/960px-King_Fahd_Causeway_bridge_num4.jpg" },
    { l: 2, q: "ما اسم المضيق الذي تمرّ منه ناقلات نفط الخليج؟", a: "مضيق هرمز", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/%D8%AA%D8%A7%D8%A8%D8%B4_%D8%A2%D9%81%D8%AA%D8%A7%D8%A8_%D8%A7%D8%B2_%D8%A8%DB%8C%D9%86_%D8%A7%D8%A8%D8%B1%D9%87%D8%A7_-_panoramio.jpg/960px-%D8%AA%D8%A7%D8%A8%D8%B4_%D8%A2%D9%81%D8%AA%D8%A7%D8%A8_%D8%A7%D8%B2_%D8%A8%DB%8C%D9%86_%D8%A7%D8%A8%D8%B1%D9%87%D8%A7_-_panoramio.jpg" },
    { l: 2, q: "ما المهنة التاريخية الأشهر في الخليج قبل اكتشاف النفط؟", a: "الغوص على اللؤلؤ", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Bahrain_Pearling_License_1942.jpg/960px-Bahrain_Pearling_License_1942.jpg", iq: "الغوص على اللؤلؤ" },
    { l: 3, q: "ما عملة سلطنة عُمان؟", a: "الريال العُماني", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Omr_symbol.svg/960px-Omr_symbol.svg.png" },
    { l: 3, q: "ما عملة دولة الإمارات؟", a: "الدرهم الإماراتي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/UAE_Dirham_Symbol.svg/960px-UAE_Dirham_Symbol.svg.png" },
    { l: 3, q: "ما عملة مملكة البحرين؟", a: "الدينار البحريني", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Bahrain_World_trade_Center_.jpg/960px-Bahrain_World_trade_Center_.jpg" },
    { l: 3, q: "ما اسم أكثر مطارات الخليج ازدحاماً بالمسافرين الدوليين؟", a: "مطار دبي الدولي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Dubai_Airport.jpg/960px-Dubai_Airport.jpg" },
    { l: 3, q: "ما اسم شركة الطيران الوطنية القطرية؟", a: "الخطوط الجوية القطرية" },
    { l: 3, q: "ما اسم شركة الطيران الوطنية الكويتية؟", a: "الخطوط الجوية الكويتية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/9K-ANB%40LHR_27AUG13_%2811350678415%29.jpg/960px-9K-ANB%40LHR_27AUG13_%2811350678415%29.jpg" },
    { l: 3, q: "ما الشكل الذي استُوحي منه تصميم متحف قطر الوطني؟", a: "وردة الصحراء", img: "image/دول الخليج.jpg" },
    { l: 3, q: "ما اسم الجزيرة الصناعية الشهيرة في الدوحة؟", a: "اللؤلؤة قطر" },
    { l: 3, q: "ما اسم أكبر مسجد في دولة قطر؟", a: "جامع الإمام محمد بن عبد الوهاب", img: "image/دول الخليج.jpg" },
    { l: 3, q: "ما اسم البطولة الكروية التي تجمع منتخبات الخليج؟", a: "كأس الخليج العربي", img: "https://upload.wikimedia.org/wikipedia/commons/7/70/MuscatGulfCup1.jpg" },
    { l: 4, q: "ما أول دولة خليجية اكتُشف فيها النفط وصدّرته؟", a: "البحرين", img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/AL2011.png" },
    { l: 4, q: "في أي عام اكتُشف النفط في الكويت؟", a: "عام 1938", img: "image/دول الخليج.jpg" },
    { l: 4, q: "ما اسم المنظمة النفطية التي تنتمي إليها معظم دول الخليج؟", a: "أوبك", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Opec_Organization_of_the_Petroleum_Exporting_Countries_countries_2006.png/960px-Opec_Organization_of_the_Petroleum_Exporting_Countries_countries_2006.png" },
    { l: 4, q: "ما اسم القوة العسكرية المشتركة لدول مجلس التعاون؟", a: "قوات درع الجزيرة", img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Unified_Military_Command_of_the_Gulf_Cooperation_Council.png" },
    { l: 4, q: "ما اسم القمة السنوية لقادة دول مجلس التعاون؟", a: "القمة الخليجية" },
    { l: 4, q: "ما اسم قناة الأخبار القطرية الشهيرة؟", a: "الجزيرة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Arabian_Peninsula_%28no_borders%29.svg/960px-Arabian_Peninsula_%28no_borders%29.svg.png" },
    { l: 4, q: "ما اسم أطول جسر بحري في الخليج؟", a: "جسر جابر الأحمد في الكويت", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/26th_December_2019_solar_eclipse_as_viewed_in_Kuwait.jpg/960px-26th_December_2019_solar_eclipse_as_viewed_in_Kuwait.jpg" },
    { l: 4, q: "ما اسم أكبر ميناء حاويات في منطقة الخليج؟", a: "ميناء جبل علي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Port_Jebel_Ali_on_1_May_2007_Pict_1.jpg/960px-Port_Jebel_Ali_on_1_May_2007_Pict_1.jpg" },
    { l: 4, q: "ما اسم المنطقة الحدودية المشتركة بين السعودية والكويت؟", a: "المنطقة المقسومة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Former_Saudi-Kuwaiti_Neutral_Zone_ar.svg/960px-Former_Saudi-Kuwaiti_Neutral_Zone_ar.svg.png" },
    { l: 4, q: "ما اسم أكبر مصفاة نفط في الخليج؟", a: "مصفاة رأس تنورة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/%D8%B4%D8%A7%D8%B7%D8%A6_%D8%B1%D8%A7%D8%B3_%D8%AA%D9%86%D9%88%D8%B1%D8%A9.jpg/960px-%D8%B4%D8%A7%D8%B7%D8%A6_%D8%B1%D8%A7%D8%B3_%D8%AA%D9%86%D9%88%D8%B1%D8%A9.jpg" },
    { l: 5, q: "بأي اسم عُرفت إمارات الساحل قبل قيام دولة الإمارات؟", a: "الإمارات المتصالحة", img: "image/دول الخليج.jpg" },
    { l: 5, q: "في أي عام استقلّت دولة الكويت؟", a: "عام 1961", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/%D8%A3%D8%AD%D9%85%D8%AF_%D9%83%D9%85%D8%A7%D9%84_%D8%B2%D9%83%D9%8A_%D9%85%D8%A7%D8%AC%D8%AF_%D8%A7%D9%84%D8%B4%D8%A8%D9%84_%D8%A3%D9%85%D9%8A%D8%B1%D8%A9_%D8%A7%D9%84%D8%BA%D9%88%D8%B1_%D9%85%D8%AD%D9%85%D8%AF_%D9%83%D9%85%D8%A7%D9%84_%D8%B9%D8%A7%D9%85_1961.jpg/960px-%D8%A3%D8%AD%D9%85%D8%AF_%D9%83%D9%85%D8%A7%D9%84_%D8%B2%D9%83%D9%8A_%D9%85%D8%A7%D8%AC%D8%AF_%D8%A7%D9%84%D8%B4%D8%A8%D9%84_%D8%A3%D9%85%D9%8A%D8%B1%D8%A9_%D8%A7%D9%84%D8%BA%D9%88%D8%B1_%D9%85%D8%AD%D9%85%D8%AF_%D9%83%D9%85%D8%A7%D9%84_%D8%B9%D8%A7%D9%85_1961.jpg" },
    { l: 5, q: "في أي عام استقلّت دولة قطر؟", a: "عام 1971", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/1971_Instrument_of_Surrender_WaPo.jpg/960px-1971_Instrument_of_Surrender_WaPo.jpg" },
    { l: 5, q: "ما اسم العملة الموحّدة التي اقتُرحت لدول الخليج ولم تُطبّق؟", a: "الخليجي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/PersianGulf_vue_satellite_du_golfe_persique.jpg/960px-PersianGulf_vue_satellite_du_golfe_persique.jpg" },
    { l: 5, q: "ما اسم الفن الشعبي البحري المشترك في الخليج المرتبط بالغوص؟", a: "فن النهمة وأغاني الغوص" },
    { l: 5, q: "ما اسم المؤسسة الفضائية العربية التي ساهمت فيها دول الخليج؟", a: "عرب سات", img: "image/دول الخليج.jpg" },
    { l: 5, q: "ما اسم الجزيرة الكويتية التي عُثر فيها على آثار يونانية؟", a: "جزيرة فيلكا", img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Failaka_Island_2.JPG" },
    { l: 5, q: "ما اسم أقدم جامعة حكومية في منطقة الخليج؟", a: "جامعة الملك سعود", img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/King_saud_university_entrance.jpg" },
    { l: 5, q: "ما اسم مشروع سكة الحديد الذي يربط دول الخليج؟", a: "سكة حديد دول مجلس التعاون", img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Eastbound_over_SCB.jpg" },
    { l: 5, q: "ما اسم الطبق الشعبي المشترك في مطابخ الخليج؟", a: "المجبوس — الكبسة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Kabsa.jpg/960px-Kabsa.jpg", iq: "كبسة" }
  ];

  /* ---------- قصص الأنبياء (50 سؤالاً) ----------
     فئة عن أحداث القصص كما وردت في القرآن الكريم — لا عن أسماء الأنبياء
     وألقابهم (تلك فئة «الأنبياء والرسل»).
     كل الأسئلة تشير إلى صورة الفئة عمداً: لا صورة تجسّد نبياً، ولا بحث
     تلقائي يجلب أيقونات تجسّده. */
  extra["قصص الأنبياء"] = [
    { l: 1, q: "ما اسم النبي الذي صنع السفينة ونجا بمن آمن معه من الطوفان؟", a: "نوح عليه السلام", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/The_Prophet_Nuh_%28Noah_In_Islam%29.png/960px-The_Prophet_Nuh_%28Noah_In_Islam%29.png" },
    { l: 1, q: "أي نبي ألقاه قومه في النار فجعلها الله برداً وسلاماً عليه؟", a: "إبراهيم عليه السلام", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/The_Prophet_Ibrahim_%28Abraham_In_Islam%29.png/960px-The_Prophet_Ibrahim_%28Abraham_In_Islam%29.png" },
    { l: 1, q: "ما اسم النبي الذي ابتلعه الحوت؟", a: "يونس عليه السلام", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/The_Prophet_Yunus_%28Jonah_In_Islam%29.png/960px-The_Prophet_Yunus_%28Jonah_In_Islam%29.png" },
    { l: 1, q: "أي نبي ألقاه إخوته في البئر؟", a: "يوسف عليه السلام", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/The_Prophet_Yusuf_%28Joseph_In_Islam%29.png/960px-The_Prophet_Yusuf_%28Joseph_In_Islam%29.png" },
    { l: 1, q: "ما المعجزة التي انشقّ بها البحر لبني إسرائيل؟", a: "عصا موسى عليه السلام", img: "image/قصص الانبياء.jpg" },
    { l: 1, q: "ما اسم النبي الذي سُخِّرت له الريح والجن وعلّمه الله منطق الطير؟", a: "سليمان عليه السلام", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/The_Prophet_Sulaiman_%28Solomon_In_Islam%29.png/960px-The_Prophet_Sulaiman_%28Solomon_In_Islam%29.png" },
    { l: 1, q: "ما اسم أول امرأة، وقد خلقها الله من آدم عليه السلام؟", a: "حواء", img: "image/قصص الانبياء.jpg" },
    { l: 1, q: "ما اسم ابن إبراهيم عليه السلام الذي أُمر بذبحه ففداه الله بذبح عظيم؟", a: "إسماعيل عليه السلام", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/The_Prophet_Ismail_%28Ishmael_In_Islam%29.png/960px-The_Prophet_Ismail_%28Ishmael_In_Islam%29.png" },
    { l: 1, q: "ما اسم الطاغية الذي أرسل الله إليه موسى عليه السلام؟", a: "فرعون", img: "image/قصص الانبياء.jpg" },
    { l: 1, q: "ما اسم الناقة التي كانت معجزة النبي صالح عليه السلام؟", a: "ناقة الله", img: "image/قصص الانبياء.jpg" },

    { l: 2, q: "ما اسم قوم النبي هود عليه السلام؟", a: "قوم عاد", img: "image/قصص الانبياء.jpg" },
    { l: 2, q: "ما اسم قوم النبي صالح عليه السلام؟", a: "قوم ثمود", img: "image/قصص الانبياء.jpg" },
    { l: 2, q: "أي نبي أُرسل إلى أهل مدين؟", a: "شعيب عليه السلام", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/The_Prophet_Shuaib_%28Jethro_In_Islam%29.png/960px-The_Prophet_Shuaib_%28Jethro_In_Islam%29.png" },
    { l: 2, q: "ما الشجرة التي أنبتها الله على يونس عليه السلام بعد خروجه من الحوت؟", a: "شجرة من يقطين", img: "image/قصص الانبياء.jpg" },
    { l: 2, q: "ما اسم الملكة التي أسلمت مع سليمان عليه السلام لله رب العالمين؟", a: "بلقيس ملكة سبأ", img: "image/قصص الانبياء.jpg" },
    { l: 2, q: "ما الطائر الذي حمل خبر مملكة سبأ إلى سليمان عليه السلام؟", a: "الهدهد", img: "image/قصص الانبياء.jpg" },
    { l: 2, q: "كم لبث نوح عليه السلام يدعو قومه كما ذُكر في القرآن؟", a: "ألف سنة إلا خمسين عاماً", img: "image/قصص الانبياء.jpg" },
    { l: 2, q: "ما اسم النبي الذي رُفع إلى السماء ولم يُقتل ولم يُصلب؟", a: "عيسى عليه السلام", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/The_Prophet_Isa_%28Jesus_In_Islam%29.png/960px-The_Prophet_Isa_%28Jesus_In_Islam%29.png" },
    { l: 2, q: "ما اسم أم عيسى عليه السلام؟", a: "مريم عليها السلام", img: "image/قصص الانبياء.jpg" },
    { l: 2, q: "ما الثمر الذي أُمرت مريم عليها السلام أن تهزّ إليه بجذع النخلة؟", a: "الرطب", img: "image/قصص الانبياء.jpg" },

    { l: 3, q: "أي نبي رزقه الله يحيى عليه السلام على الكبر بعد دعائه؟", a: "زكريا عليه السلام", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/The_Prophet_Zakariya_%28Zechariah_In_Islam%29.png/960px-The_Prophet_Zakariya_%28Zechariah_In_Islam%29.png" },
    { l: 3, q: "ما اسم النبي الذي كان يعمل في الحدادة ويصنع الدروع، وأُلين له الحديد؟", a: "داود عليه السلام", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/The_Prophet_Dawud_%28David_In_Islam%29.png/960px-The_Prophet_Dawud_%28David_In_Islam%29.png" },
    { l: 3, q: "ما اسم الوادي المقدّس الذي كلّم الله فيه موسى عليه السلام؟", a: "الوادي المقدّس طوى", img: "image/قصص الانبياء.jpg" },
    { l: 3, q: "من هو أخو موسى عليه السلام الذي طلب من الله أن يكون وزيراً له؟", a: "هارون عليه السلام", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/The_Prophet_Harun_%28Aaron_In_Islam%29.png/960px-The_Prophet_Harun_%28Aaron_In_Islam%29.png" },
    { l: 3, q: "من الذي صنع لبني إسرائيل عجلاً من الذهب يعبدونه في غياب موسى عليه السلام؟", a: "السامري", img: "image/قصص الانبياء.jpg" },
    { l: 3, q: "كم سنة من الرخاء ثم الشدّة فسّرها يوسف عليه السلام في رؤيا الملك؟", a: "سبع سنين رخاء ثم سبع شداد", img: "image/قصص الانبياء.jpg" },
    { l: 3, q: "بماذا ارتدّ بصر يعقوب عليه السلام بصيراً في آخر قصة يوسف؟", a: "بقميص يوسف عليه السلام", img: "image/قصص الانبياء.jpg" },
    { l: 3, q: "ما اسم زوجة إبراهيم عليه السلام التي بُشّرت بإسحاق على الكبر؟", a: "سارة", img: "image/قصص الانبياء.jpg" },
    { l: 3, q: "ما اسم البئر التي تفجّرت لهاجر وإسماعيل في مكة؟", a: "بئر زمزم", img: "image/قصص الانبياء.jpg" },
    { l: 3, q: "أي نبي دخل قرية خاوية فأماته الله مئة عام ثم بعثه؟", a: "عزير عليه السلام (على قول المفسّرين)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Prophet_Uzair_Name.svg/960px-Prophet_Uzair_Name.svg.png" },

    { l: 4, q: "ما الدعاء الذي دعا به يونس عليه السلام في بطن الحوت؟", a: "لا إله إلا أنت سبحانك إني كنت من الظالمين", img: "image/قصص الانبياء.jpg" },
    { l: 4, q: "ما اسم العبد الصالح الذي رافقه موسى عليه السلام ليتعلّم منه؟", a: "الخضر عليه السلام", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/The_Prophet_Khidr.png/960px-The_Prophet_Khidr.png" },
    { l: 4, q: "كم عدد المعجزات (الآيات) التي أُعطيها موسى عليه السلام أمام فرعون كما في القرآن؟", a: "تسع آيات", img: "image/قصص الانبياء.jpg" },
    { l: 4, q: "ما الحشرة التي تكلّمت فسمع سليمان عليه السلام قولها؟", a: "النملة", img: "image/قصص الانبياء.jpg" },
    { l: 4, q: "ما اسم أبي إبراهيم عليه السلام كما ورد في القرآن؟", a: "آزر", img: "image/قصص الانبياء.jpg" },
    { l: 4, q: "بأي شيء حطّم إبراهيم عليه السلام أصنام قومه وترك كبيرهم؟", a: "بالفأس (وجعل الفأس في يد كبيرهم)", img: "image/قصص الانبياء.jpg" },
    { l: 4, q: "ماذا طلب إبراهيم عليه السلام من ربه فأحيا له الطير الأربعة؟", a: "قال: ربِّ أرني كيف تحيي الموتى", img: "image/قصص الانبياء.jpg" },
    { l: 4, q: "من هو النبي الذي ابتُلي في ماله وولده وجسده فصبر؟", a: "أيوب عليه السلام", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/The_Prophet_Ayub_%28Job_In_Islam%29.png/960px-The_Prophet_Ayub_%28Job_In_Islam%29.png" },
    { l: 4, q: "ما العلامة التي جعلها الله لزكريا عليه السلام حين بُشّر بيحيى؟", a: "ألا يكلّم الناس ثلاث ليال سوياً", img: "image/قصص الانبياء.jpg" },
    { l: 4, q: "ما اسم الجبل الذي استوت عليه سفينة نوح عليه السلام؟", a: "الجودي", img: "image/قصص الانبياء.jpg" },

    { l: 5, q: "بماذا ردّ ابن نوح عليه السلام حين دعاه أبوه إلى ركوب السفينة؟", a: "قال: سآوي إلى جبل يعصمني من الماء", img: "image/قصص الانبياء.jpg" },
    { l: 5, q: "ما المعجزات التي أُعطيها عيسى عليه السلام كما ذُكرت في القرآن؟", a: "إبراء الأكمه والأبرص وإحياء الموتى بإذن الله", img: "image/قصص الانبياء.jpg" },
    { l: 5, q: "من الذين طلبوا من عيسى عليه السلام أن يُنزّل عليهم مائدة من السماء؟", a: "الحواريون (وبها سُمّيت سورة المائدة)", img: "image/قصص الانبياء.jpg" },
    { l: 5, q: "ما العذاب الذي أُهلك به قوم لوط عليه السلام؟", a: "قُلبت قريتهم وأُمطروا حجارة من سجّيل", img: "image/قصص الانبياء.jpg" },
    { l: 5, q: "بأي شيء أُهلك قوم عاد قوم هود عليه السلام؟", a: "بريح صرصر عاتية", img: "image/قصص الانبياء.jpg" },
    { l: 5, q: "بأي شيء أُهلك قوم ثمود قوم صالح عليه السلام؟", a: "بالصيحة (الرجفة)", img: "image/قصص الانبياء.jpg" },
    { l: 5, q: "ما اسم النبي الذي حاجّ الملك في ربه فقال: «ربي الذي يحيي ويميت»؟", a: "إبراهيم عليه السلام (حاجّه النمرود)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/The_Prophet_Ibrahim_%28Abraham_In_Islam%29.png/960px-The_Prophet_Ibrahim_%28Abraham_In_Islam%29.png" },
    { l: 5, q: "ماذا طلب بنو إسرائيل من موسى عليه السلام بدلاً من المنّ والسلوى؟", a: "البقل والقثّاء والفوم والعدس والبصل", img: "image/قصص الانبياء.jpg" },
    { l: 5, q: "ما اسم السورة التي قصّ الله فيها قصة كاملة وسمّاها «أحسن القصص»؟", a: "سورة يوسف", img: "image/قصص الانبياء.jpg" },
    { l: 5, q: "ما اسم الغلام الذي بشّرت الملائكة إبراهيم عليه السلام به من سارة؟", a: "إسحاق عليه السلام", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/The_Prophet_Ishaq_%28Isaac_In_Islam%29.png/960px-The_Prophet_Ishaq_%28Isaac_In_Islam%29.png" },
  ];

  /* ---------- المؤسس عثمان (30 سؤالاً) ----------
     نوعان فقط من الأسئلة (ستة لكل مستوى):
       «من هذه الشخصية؟»        صورة الشخصية بزيّ المسلسل — من صفحة طاقم
                                 المسلسل الرسمية على موقع قناة atv، ومن
                                 ويكيبيديا — والجواب اسمها واسم الممثل
       «ماذا حصل في هذا المشهد؟» صورة المقطع الرسمي للمشهد من قناة المسلسل
                                 على يوتيوب (Kuruluş Osman)، مقصوصة (crop)
                                 حتى لا يظهر عنوانها التركي؛ والجواب من
                                 عنوان المقطع */
  extra["المؤسس عثمان"] = [
    { l: 1, q: "من هذه الشخصية؟", a: "عثمان بك (الممثل بوراك أوزجيفيت)", img: "https://upload.wikimedia.org/wikipedia/en/b/b1/Burak%C3%96z%C3%A7ivitasOsmanBey.jpeg" },
    { l: 1, q: "من هذه الشخصية؟", a: "بالا خاتون — زوجة عثمان (الممثلة أوزغه تورير)", img: "https://iatv.tmgrup.com.tr/2023/10/02/204x204/1696247936609.jpg" },
    { l: 1, q: "ماذا حصل في هذا المشهد؟", a: "زفاف عثمان وبالا خاتون (الحلقة 24)", img: "https://i.ytimg.com/vi/uKlYWIL2OLQ/maxresdefault.jpg", crop: [0, 0, 100, 55] },
    { l: 1, q: "ماذا حصل في هذا المشهد؟", a: "وفاة أرطغرل بك (الحلقة 39)", img: "https://i.ytimg.com/vi/-QnD0H_zkLE/maxresdefault.jpg", crop: [20, 0, 80, 65] },
    { l: 1, q: "ماذا حصل في هذا المشهد؟", a: "عثمان يصبح بك قبيلة الكايي الجديد (الحلقة 40)", img: "https://i.ytimg.com/vi/UDrnIrWAjMs/maxresdefault.jpg", crop: [0, 0, 100, 66] },
    { l: 1, q: "ماذا حصل في هذا المشهد؟", a: "استشهاد بامسي بك في هجوم غادر (الحلقة 60)", img: "https://i.ytimg.com/vi/vHjHWQD6NmU/maxresdefault.jpg", crop: [0, 0, 100, 48] },

    { l: 2, q: "من هذه الشخصية؟", a: "مالهون خاتون — زوجة عثمان (الممثلة يلدز تشاغري أتيكسوي)", img: "https://upload.wikimedia.org/wikipedia/en/9/94/Malhun_Hatun.jpg" },
    { l: 2, q: "من هذه الشخصية؟", a: "تورغوت غازي (الممثل جنكيز جوشكون)", img: "https://iatv.tmgrup.com.tr/2025/05/09/204x204/1746776496596.jpg" },
    { l: 2, q: "ماذا حصل في هذا المشهد؟", a: "زواج عثمان من مالهون خاتون (الحلقة 60)", img: "https://i.ytimg.com/vi/ObIKMzo3r3c/maxresdefault.jpg", crop: [0, 5, 100, 62] },
    { l: 2, q: "ماذا حصل في هذا المشهد؟", a: "ولادة أورهان — عثمان يُرزق بوليّ عهده (الحلقة 64)", img: "https://i.ytimg.com/vi/ffIJT7sgoys/maxresdefault.jpg", crop: [0, 0, 100, 66] },
    { l: 2, q: "ماذا حصل في هذا المشهد؟", a: "إعدام دوندار بك بسبب خيانته (الحلقة 54)", img: "https://i.ytimg.com/vi/ytSn3sfPM_8/maxresdefault.jpg", crop: [0, 0, 100, 66] },
    { l: 2, q: "ماذا حصل في هذا المشهد؟", a: "عثمان يقطع رأس نيكولا — نهاية نيكولا (الحلقة 94)", img: "https://i.ytimg.com/vi/4LDz-sXUh3Y/maxresdefault.jpg", crop: [30, 0, 70, 53] },

    { l: 3, q: "من هذه الشخصية؟", a: "جركوتاي (الممثل تشاغري شنسوي)", img: "https://iatv.tmgrup.com.tr/2023/10/02/204x204/1696248617174.jpg" },
    { l: 3, q: "من هذه الشخصية؟", a: "بوران ألب (الممثل ييغيت أوتشان)", img: "https://iatv.tmgrup.com.tr/2023/10/02/204x204/1696248537332.jpg" },
    { l: 3, q: "ماذا حصل في هذا المشهد؟", a: "الهجوم على قلعة كولوجه حصار (الحلقة 36)", img: "https://i.ytimg.com/vi/QFyXD0QvVO0/maxresdefault.jpg", crop: [0, 0, 100, 62] },
    { l: 3, q: "ماذا حصل في هذا المشهد؟", a: "فتح إينه غول ورفع راية الكايي مع الأذان (الحلقة 94)", img: "https://i.ytimg.com/vi/fEsC6gfILEg/maxresdefault.jpg", crop: [0, 0, 100, 44] },
    { l: 3, q: "ماذا حصل في هذا المشهد؟", a: "فتح قلعة بيله جك (الحلقة 91)", img: "https://i.ytimg.com/vi/SAvtpA9CVVc/maxresdefault.jpg", crop: [0, 0, 100, 54] },
    { l: 3, q: "ماذا حصل في هذا المشهد؟", a: "جركوتاي يعتنق الإسلام وينطق الشهادة", img: "https://i.ytimg.com/vi/56xiT0eVAGg/maxresdefault.jpg", crop: [0, 0, 100, 52] },

    { l: 4, q: "من هذه الشخصية؟", a: "علاء الدين بك — ابن عثمان (الممثل عمر فاروق آران)", img: "https://iatv.tmgrup.com.tr/2023/10/02/204x204/1696250668309.jpg" },
    { l: 4, q: "من هذه الشخصية؟", a: "صوفيا (الممثلة ألما تيرزيتش)", img: "https://iatv.tmgrup.com.tr/2024/11/06/204x204/1730884689984.jpg" },
    { l: 4, q: "ماذا حصل في هذا المشهد؟", a: "رؤيا عثمان المباركة (الحلقة 22)", img: "https://i.ytimg.com/vi/nA-gNG1n-p8/maxresdefault.jpg", crop: [0, 0, 100, 52] },
    { l: 4, q: "ماذا حصل في هذا المشهد؟", a: "موت فلاتيوس (الحلقة 48)", img: "https://i.ytimg.com/vi/znxPMHfv0U8/maxresdefault.jpg", crop: [0, 0, 100, 70] },
    { l: 4, q: "ماذا حصل في هذا المشهد؟", a: "نيكولا يقتل سيمون (الحلقة 55)", img: "https://i.ytimg.com/vi/1wYWjc1Oy8g/maxresdefault.jpg", crop: [0, 0, 100, 66] },
    { l: 4, q: "ماذا حصل في هذا المشهد؟", a: "صوفيا تنطق الشهادة وهي تحتضر (الحلقة 194)", img: "https://i.ytimg.com/vi/KeU00Mj2Sqg/maxresdefault.jpg", crop: [0, 0, 100, 57] },

    { l: 5, q: "من هذه الشخصية؟", a: "كلاوديوس (الممثل تايانتش أيايدين)", img: "https://iatv.tmgrup.com.tr/2025/04/10/204x204/1744286713447.jpg" },
    { l: 5, q: "من هذه الشخصية؟", a: "غونجا خاتون (الممثلة بلجين شيمشك)", img: "https://iatv.tmgrup.com.tr/2023/10/02/204x204/1696249021267.jpg" },
    { l: 5, q: "من هذه الشخصية؟", a: "فاطمة خاتون (الممثلة ليا كيرشان)", img: "https://iatv.tmgrup.com.tr/2023/10/02/204x204/1696248782243.jpg" },
    { l: 5, q: "ماذا حصل في هذا المشهد؟", a: "كشف قناع أريوس وعثمان يقطع رأسه (الحلقة 92)", img: "https://i.ytimg.com/vi/-_uwGS_3uHY/maxresdefault.jpg", crop: [35, 0, 65, 100] },
    { l: 5, q: "ماذا حصل في هذا المشهد؟", a: "استشهاد غوكتوغ (الحلقة 78)", img: "https://i.ytimg.com/vi/Vd4rtFjjI8c/maxresdefault.jpg", crop: [0, 0, 100, 57] },
    { l: 5, q: "ماذا حصل في هذا المشهد؟", a: "قاريسي بك يخضع لعثمان (الحلقة 174)", img: "https://i.ytimg.com/vi/epbTjmeslCY/maxresdefault.jpg", crop: [0, 0, 100, 52] },
  ];

  /* ---------- منتجات (12 سؤالاً) ----------
     خمّن المنتج من عبوته. الصور من ويكيميديا كومنز (حرّة الرخصة)،
     وحقل hide يغطّي الاسم المطبوع على العبوة في السؤال ثم يُرفع مع
     الإجابة فتظهر الصورة كاملة بالاسم. المستطيلات [x, y, w, h]
     نسبةً مئوية من عرض الصورة وارتفاعها، قيست بالنظر إلى كل صورة.
     وما لا اسم ظاهراً فيه (كيندر بوينو، أوريو، فيرو روشيه) بلا hide. */
  extra["منتجات"] = [
    { l: 1, q: "ما اسم هذا المشروب الغازي؟", a: "كوكاكولا",
      img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Coca-cola_50cl_can_-_Italia.jpg/960px-Coca-cola_50cl_can_-_Italia.jpg",
      hide: [[26, 18, 40, 58]] },
    { l: 1, q: "ما اسم هذا المشروب الغازي؟", a: "بيبسي",
      img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Pepsi_lime_330ml_can-front_PNr%C2%B00852.jpg/960px-Pepsi_lime_330ml_can-front_PNr%C2%B00852.jpg",
      hide: [[25, 49, 40, 14]] },
    { l: 1, q: "ما اسم هذه الشوكولاتة القابلة للدهن؟", a: "نوتيلا",
      img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/Nutella_ak.jpg/960px-Nutella_ak.jpg",
      hide: [[24, 11, 25, 24]] },

    { l: 2, q: "ما اسم لوح الشوكولاتة السويسري المثلّث الشكل؟", a: "توبلرون",
      img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Toblerone_3362.jpg/960px-Toblerone_3362.jpg",
      hide: [[30, 26, 62, 24]] },
    { l: 2, q: "ما اسم هذا البسكويت المحشو بالكريمة؟", a: "أوريو",
      img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Oreo_Cookies_%2813706103195%29.jpg/960px-Oreo_Cookies_%2813706103195%29.jpg" },
    { l: 2, q: "ما اسم كريم العناية بالبشرة في هذه العلبة الزرقاء؟", a: "نيفيا",
      img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Nivea_Creme_BW_2025-07-05_16-51-45_s.jpg/960px-Nivea_Creme_BW_2025-07-05_16-51-45_s.jpg",
      hide: [[26, 22, 52, 30]] },

    { l: 3, q: "ما اسم هذه الشوكولاتة المحشوّة بالبندق ذات الطبقات المقرمشة؟", a: "كيندر بوينو",
      img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Kinder-Bueno-Split.jpg/960px-Kinder-Bueno-Split.jpg" },
    { l: 3, q: "ما اسم مشروب الشوكولاتة بالشعير في هذه العلبة الخضراء؟", a: "مايلو",
      img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Milo_tin_circa_2004.jpg/960px-Milo_tin_circa_2004.jpg",
      hide: [[16, 40, 70, 20], [52, 26, 30, 12]] },

    { l: 4, q: "ما اسم هذه الزبدة الدنماركية الشهيرة؟", a: "لورباك",
      img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Lurpak_Butter_250g_unsalted_UK_market.jpg/960px-Lurpak_Butter_250g_unsalted_UK_market.jpg",
      hide: [[26, 14, 40, 16], [23, 40, 31, 16]] },
    { l: 4, q: "ما اسم هذه الشوكولاتة الإيطالية المغلّفة بورق ذهبي؟", a: "فيريرو روشيه",
      img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Ferrero_Rocher_8pcs_box_20150118.jpg/960px-Ferrero_Rocher_8pcs_box_20150118.jpg" },

    { l: 5, q: "ما اسم هذه المياه الفوّارة الفرنسية ذات الزجاجة الخضراء؟", a: "بيريه",
      img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/PERRIER_%2812%29.jpg/960px-PERRIER_%2812%29.jpg",
      hide: [[28, 20, 36, 18]] },
    { l: 5, q: "ما اسم مسحوق الغسيل صاحب هذه الكبسولات؟", a: "أريال",
      img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Ariel_pods.jpg/960px-Ariel_pods.jpg",
      hide: [[14, 12, 52, 24]] },
  ];

  /* ---------- أغاني عربية (30 سؤالاً) ----------
     فئة صوتية: يُشغَّل مقطع قصير والمطلوب اسم الأغنية. الأغاني بين
     2000 و 2026، من الخليج ومصر والشام والمغرب.

     المصدر: معاينات آبل الرسمية عبر itunes.apple.com — مفتوحة للعموم
     بلا حساب، وتُبثّ من خوادم آبل مباشرة بلا نسخ محلي. والمشغّل عندنا
     لا يعرض اسم الأغنية ولا صورة الغلاف، فلا تنكشف الإجابة.

     t1: 18 يوقف المقطع عند 18 ثانية، والمعاينة نفسها 30 ثانية.
     ولا صورة للسؤال عمداً: غلاف الألبوم يكشف الأغنية. */
  extra["أغاني عربية"] = [
    /* ===== المستوى الأول ===== */
    { l: 1, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«تملي معاك» — عمرو دياب (2000)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5e/df/09/5edf0981-ce52-4740-f0b2-f6ad0760afcb/mzaf_17144740537777531434.plus.aac.p.m4a", t1: 18 },
    { l: 1, q: "ما اسم الأغنية في هذا المقطع؟", a: "«إنت إيه» — نانسي عجرم (2004)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/51/7b/5a/517b5a4e-74d4-9d0e-666b-86377c14f984/mzaf_1600088455891426148.plus.aac.p.m4a", t1: 18 },
    { l: 1, q: "استمع جيداً — ما اسم هذه الأغنية؟", a: "«بشرة خير» — حسين الجسمي (2014)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/15/46/00/15460053-095b-aa1e-a92c-42737c4f346c/mzaf_16099995635699003830.plus.aac.p.m4a", t1: 18 },
    { l: 1, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«لم علّم» — سعد لمجرد (2015)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/10/8b/58/108b58ff-13d3-9c63-f656-a4edf255631d/mzaf_8631182694702136423.plus.aac.p.m4a", t1: 18 },
    { l: 1, q: "ما اسم الأغنية في هذا المقطع؟", a: "«يا طبطب ودلع» — نانسي عجرم (2006)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a4/44/c0/a444c09f-7a71-1712-29ca-029eceba47c4/mzaf_3607238438218530259.plus.aac.p.m4a", t1: 18 },
    { l: 1, q: "استمع جيداً — ما اسم هذه الأغنية؟", a: "«صبري قليل» — شيرين (2003)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cd/1a/e9/cd1ae9ec-f7cb-9f4e-95fe-2ed86dd60d96/mzaf_5355291922452830237.plus.aac.p.m4a", t1: 18 },

    /* ===== المستوى الثاني ===== */
    { l: 2, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«بتمون» — إليسا (2007)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/09/eb/8a/09eb8aab-c8f2-9ad5-959f-eab62dafd615/mzaf_4305294413609236715.plus.aac.p.m4a", t1: 18 },
    { l: 2, q: "ما اسم الأغنية في هذا المقطع؟", a: "«يا بنت الإيه» — تامر حسني (2007)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bb/a9/4b/bba94bd9-020a-8eb9-c67e-1930dce68986/mzaf_11579290530808350749.plus.aac.p.m4a", t1: 18 },
    { l: 2, q: "استمع جيداً — ما اسم هذه الأغنية؟", a: "«وش جاه» — راشد الماجد (2008)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4c/0a/93/4c0a93b1-d540-4279-7904-216ad82f2e5d/mzaf_14742894182240006440.plus.aac.p.m4a", t1: 18 },
    { l: 2, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«خليك معايا» — عمرو دياب (2005)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/27/2f/60/272f6016-bd6a-f7c5-b597-9a02f85a1b74/mzaf_18088930297802721508.plus.aac.p.m4a", t1: 18 },
    { l: 2, q: "ما اسم الأغنية في هذا المقطع؟", a: "«صوّاها قلبي» — أصالة (2007)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e4/11/66/e41166bb-9dc3-ab7b-a866-2c48d8245cba/mzaf_2606507136071176121.plus.aac.p.m4a", t1: 18 },
    { l: 2, q: "استمع جيداً — ما اسم هذه الأغنية؟", a: "«عمري كلّو» — وائل كفوري (2003)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/72/ad/52/72ad5214-79d6-33c9-ef58-92cdbb6de2d1/mzaf_2307072817582404022.plus.aac.p.m4a", t1: 18 },

    /* ===== المستوى الثالث ===== */
    { l: 3, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«الدنيا دوّارة» — ماجد المهندس (2018)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d6/63/be/d663beae-2167-0229-ddf5-78bd76f2d8f8/mzaf_14560108662420015215.plus.aac.p.m4a", t1: 18 },
    { l: 3, q: "ما اسم الأغنية في هذا المقطع؟", a: "«يلزمني خيالك» — أحلام (2016)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/84/43/5c/84435cde-b304-d66a-9bdc-9cc22edcdc6a/mzaf_17432759770040953479.plus.aac.p.m4a", t1: 18 },
    { l: 3, q: "استمع جيداً — ما اسم هذه الأغنية؟", a: "«عدّي اللي في بالي» — محمد حماقي (2012)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/51/c0/c2/51c0c2e8-c9ab-bfa4-faad-3018937a20be/mzaf_744756614061022063.plus.aac.p.m4a", t1: 18 },
    { l: 3, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«سيدي وصالك» — أنغام (2001)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/35/3b/79/353b79cd-ec72-5d36-944f-65b9bdb91a15/mzaf_9618429099776502251.plus.aac.p.m4a", t1: 18 },
    { l: 3, q: "ما اسم الأغنية في هذا المقطع؟", a: "«قهوة وداع» — حسين الجسمي (2016)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/33/55/8b/33558beb-d691-59d0-e730-12e1982495fd/mzaf_11611515571903933804.plus.aac.p.m4a", t1: 18 },
    { l: 3, q: "استمع جيداً — ما اسم هذه الأغنية؟", a: "«مشاعر» — شيرين (2013)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/08/13/32/08133239-98a1-7578-e365-8b489219c0db/mzaf_13654587899466436776.plus.aac.p.m4a", t1: 18 },

    /* ===== المستوى الرابع ===== */
    { l: 4, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«تعبت منك» — إليسا (2012)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/15/8d/f8/158df852-3ae5-56f1-4948-e524cf7b69c5/mzaf_6774382498010351346.plus.aac.p.m4a", t1: 18 },
    { l: 4, q: "ما اسم الأغنية في هذا المقطع؟", a: "«ممنون» — نوال الكويتية (2019)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/70/1b/c6/701bc6b3-6fb5-5f44-c8f8-d507d88cc847/mzaf_3281977635193480062.plus.aac.p.m4a", t1: 18 },
    { l: 4, q: "استمع جيداً — ما اسم هذه الأغنية؟", a: "«يا تعبني» — تامر حسني (2008)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b9/03/05/b90305d3-fa42-524b-4f74-e14dc0a38a85/mzaf_10518637038864247705.plus.aac.p.m4a", t1: 18 },
    { l: 4, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«كان يهمني» — أصالة (2016)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/70/c6/0e/70c60e6e-2b62-c56b-3e0c-46aa7058b52e/mzaf_2798950891084292409.plus.aac.p.m4a", t1: 18 },
    { l: 4, q: "ما اسم الأغنية في هذا المقطع؟", a: "«بقفل الباب» — عبدالله الرويشد (2018)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/62/51/28/6251281c-0a9c-df39-661f-cde15f8ed192/mzaf_11822626165954897380.plus.aac.p.m4a", t1: 18 },
    { l: 4, q: "استمع جيداً — ما اسم هذه الأغنية؟", a: "«خذ راحتك» — راشد الماجد (2014)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d5/9c/69/d59c6930-01df-d1c4-ce52-5c048325a64f/mzaf_5679770150688146571.plus.aac.p.m4a", t1: 18 },

    /* ===== المستوى الخامس ===== */
    { l: 5, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«يا أنا يا لا» — عمرو دياب (2020)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/78/98/b0/7898b067-3923-e61f-9143-8fbfc8fad617/mzaf_11822862610550744571.plus.aac.p.m4a", t1: 18 },
    { l: 5, q: "ما اسم الأغنية في هذا المقطع؟", a: "«عمري معاك» — أنغام (2003)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/16/65/3e/16653ea2-be4e-ba34-dd87-02c7d1442fbe/mzaf_5299744446191711820.plus.aac.p.m4a", t1: 18 },
    { l: 5, q: "استمع جيداً — ما اسم هذه الأغنية؟", a: "«جننت قلبي» — ماجد المهندس (2023)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/66/9f/9b/669f9b6e-612b-a19a-1a69-617938dd2ad6/mzaf_1654944039507812824.plus.aac.p.m4a", t1: 18 },
    { l: 5, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«عدّى الكلام» — سعد لمجرد (2020)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/af/37/77/af3777e5-dc85-3bbe-b976-965f172e1e6e/mzaf_11473131038850272193.plus.aac.p.m4a", t1: 18 },
    { l: 5, q: "ما اسم الأغنية في هذا المقطع؟", a: "«عيوني بس» — أحلام (2021)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/07/91/c2/0791c2ab-0816-f94d-4955-ffbcd6838bbf/mzaf_9960444028991933489.plus.aac.p.m4a", t1: 18 },
    { l: 5, q: "استمع جيداً — ما اسم هذه الأغنية؟", a: "«البنت القوية» — وائل كفوري (2021)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/99/78/f2/9978f240-0163-db68-4d5b-49a3862c0733/mzaf_12914565316707975548.plus.aac.p.m4a", t1: 18 },

    /* ===== الأحدث: 2024 – 2026 ===== */
    { l: 2, q: "ما اسم الأغنية في هذا المقطع؟", a: "«هو انت مين» — أنغام (2024)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/97/e9/6c/97e96cdd-7400-c9cc-26f3-f9163314c9bc/mzaf_1288156330981299683.plus.aac.p.m4a", t1: 18 },
    { l: 3, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«خطفوني» — عمرو دياب (2025)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/59/f1/75/59f175e8-3787-88d1-7178-f9e0236e62e8/mzaf_9274447277030290168.plus.aac.p.m4a", t1: 18 },
    { l: 5, q: "ما اسم الأغنية في هذا المقطع؟", a: "«عوّدت قلبي» — عبدالمجيد عبدالله (2026)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/02/d2/ad/02d2add8-8065-70ac-a946-133423ccfaf1/mzaf_7106180361730711890.plus.aac.p.m4a", t1: 18 },

    /* ===== دفعة خليجية ===== */
    { l: 1, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«الذاهبة» — خالد عبدالرحمن (2000)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/d3/67/01/d367018d-4c3d-91d2-aa03-b3cbe7ad7bc4/mzaf_18145593572029835390.plus.aac.p.m4a", t1: 18 },
    { l: 1, q: "ما اسم الأغنية في هذا المقطع؟", a: "«لو يسألوني» — ديانا حداد (2002)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f8/31/d7/f831d7fe-6482-0fca-d051-320ab085a03c/mzaf_14468500110829376067.plus.aac.p.m4a", t1: 18 },
    { l: 1, q: "استمع جيداً — ما اسم هذه الأغنية؟", a: "«بالبنط العريض» — حسين الجسمي (2020)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c2/ae/1d/c2ae1d6e-b10a-74b5-0d53-6dfae013a8a1/mzaf_7179156399724832527.plus.aac.p.m4a", t1: 18 },
    { l: 1, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«أحبك لو تكون حاضر» — عبادي الجوهر (2009)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/63/48/d7/6348d71b-b750-b7ba-88fa-7b485a7de6a4/mzaf_14138347803491550805.plus.aac.p.m4a", t1: 18 },
    { l: 2, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«حبيبي آسف» — خالد عبدالرحمن (2001)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ef/70/bb/ef70bb86-5d2e-224e-e982-e2fac2003ab9/mzaf_9409107137359266018.plus.aac.p.m4a", t1: 18 },
    { l: 2, q: "ما اسم الأغنية في هذا المقطع؟", a: "«ماس ولولي» — ديانا حداد (2006)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/48/4a/45/484a45a0-e177-4ade-03c3-c2548d6d1504/mzaf_7321510906542713301.plus.aac.p.m4a", t1: 18 },
    { l: 2, q: "استمع جيداً — ما اسم هذه الأغنية؟", a: "«تعلّم» — فؤاد عبدالواحد (2016)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ed/2e/ff/ed2eff3c-7788-2fcd-5c76-c085a001af1a/mzaf_9554852347328629955.plus.aac.p.m4a", t1: 18 },
    { l: 2, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«من مثلك» — عبدالمجيد عبدالله (2018)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/07/a4/97/07a497d4-063a-81d4-d8c4-cfe2969ed1ef/mzaf_10247668526992363198.plus.aac.p.m4a", t1: 18 },
    { l: 2, q: "ما اسم الأغنية في هذا المقطع؟", a: "«الراية البيضا» — نوال الكويتية (2019)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8f/0c/ac/8f0cac3e-8a10-bbd0-4be7-a67778b7e716/mzaf_13551088955114899681.plus.aac.p.m4a", t1: 18 },
    { l: 3, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«نوّرت يا حلاها» — نبيل شعيل (2017)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/47/16/7c/47167c33-6ae5-d09d-7618-c1563e41fd2d/mzaf_5050306274302834364.plus.aac.p.m4a", t1: 18 },
    { l: 3, q: "ما اسم الأغنية في هذا المقطع؟", a: "«محبوب قلبي هجرني» — بلقيس (2018)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b1/64/c7/b164c7bb-5f0a-03aa-0866-c1d60fb8f721/mzaf_5286687005652942904.plus.aac.p.m4a", t1: 18 },
    { l: 3, q: "استمع جيداً — ما اسم هذه الأغنية؟", a: "«حبيبي مو رومانسي» — شمة حمدان (2014)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/35/71/d5/3571d590-7bbe-e778-6750-6c40c08aa4e4/mzaf_9848944537748409710.plus.aac.p.m4a", t1: 18 },
    { l: 3, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«على كثر القصيد» — رابح صقر (2013)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/39/6b/6a/396b6a57-6ddb-4ad9-e4a8-1a8f1817befd/mzaf_17080427710126379832.plus.aac.p.m4a", t1: 18 },
    { l: 4, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«من بعد مزح ولعب» — عبادي الجوهر (2009)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/57/ca/0d/57ca0df9-9ea5-948d-9531-b552a7182c61/mzaf_10275082029407327554.plus.aac.p.m4a", t1: 18 },
    { l: 4, q: "ما اسم الأغنية في هذا المقطع؟", a: "«الله جابك» — فؤاد عبدالواحد (2020)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d5/ac/bf/d5acbfcb-c544-c322-aff8-1329032158a8/mzaf_4632097716650686819.plus.aac.p.m4a", t1: 18 },
    { l: 4, q: "استمع جيداً — ما اسم هذه الأغنية؟", a: "«عودك» — عايض (2018)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/98/50/30/9850300b-c73c-b880-9572-9815f286f5e7/mzaf_9377369389196150728.plus.aac.p.m4a", t1: 18 },
    { l: 4, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«حبيبة قلبي» — نوال وعبدالله الرويشد (2015)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/2b/20/62/2b2062bd-88d1-5c19-15a2-75abba759e60/mzaf_347798139099918147.plus.aac.p.m4a", t1: 18 },
    { l: 5, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«انتهى» — بلقيس (2021)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/88/37/58/8837584c-acd6-3f7e-4684-1eff4da2606e/mzaf_3639291124250281923.plus.aac.p.m4a", t1: 18 },
    { l: 5, q: "ما اسم الأغنية في هذا المقطع؟", a: "«رادار الوفا» — محمد الشحي (2017)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/2a/08/56/2a0856b7-7c22-05fe-9fd8-44f2ae6579a7/mzaf_790747423608364580.plus.aac.p.m4a", t1: 18 },
    { l: 5, q: "استمع جيداً — ما اسم هذه الأغنية؟", a: "«مشكلتك» — عيضة المنهالي (2003)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/28/13/1f/28131f57-8e4a-f31b-0327-48520199ebd6/mzaf_7391641861959620857.plus.aac.p.m4a", t1: 18 },
    { l: 5, q: "استمعوا إلى المقطع — ما اسم هذه الأغنية؟", a: "«يا سمر» — أصيل أبوبكر (2017)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d3/56/51/d3565131-60e5-9046-e75f-c4336d1f654a/mzaf_5648012628459662221.plus.aac.p.m4a", t1: 18 },
    { l: 5, q: "ما اسم الأغنية في هذا المقطع؟", a: "«يالي تقول» — نبيل شعيل (2020)",
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/62/7d/33/627d3345-2664-b95d-66d5-3e1f1dcc76cc/mzaf_13695950821749303623.plus.aac.p.m4a", t1: 18 },
  ];

  /* ---------- من صاحب الهدف (9 أسئلة) ----------
     «من صاحب هذا الهدف؟» — مقطع قصير من تيك توك (30 ثانية حدّاً أقصى)
     يُعرض بمشغّل تيك توك المضمَّن (tiktok.com/player/v1) بلا نسخ ولا تحميل.
       tt: رقم مقطع تيك توك (من رابطه …/video/الرقم)
       te: يتوقّف المقطع عند هذه الثانية (للمقاطع الأطول من الهدف نفسه)
     المقاطع من حسابات الدوري الإنجليزي ودوري الأبطال وتوتنهام الرسمية
     وغيرها — جُرّب كل مقطع مضمَّناً، واستُبعد كل مقطع يكتب اسم اللاعب
     على الشاشة أو يبدأ بمقابلة معه.

     المقطع صامت (song) تعزف معه أغنية اللعبة، وبأسلوب «الرسم» الأبيض
     والأسود (bw) حتى لا تكشف ألوان القميص اللاعب — ويبقى كذلك حين
     يُكبَّر المقطع لملء الشاشة. شريط التحدي (cap) يغطّي اسم الحساب
     أعلى المشغّل.

     الإجابة تذكر اللاعب والهدف معاً. */
  var GOAL_MASK = [[0, 0, 100, 13]];
  var GOAL_CAP = "اتحداك تعرف صاحب الهدف";
  function goal(l, a, tt, te) {
    var q = { l: l, q: "من صاحب هذا الهدف؟", a: a, tt: tt, hide: GOAL_MASK, bw: true, song: true, cap: GOAL_CAP };
    if (te) q.te = te;
    return q;
  }

  extra["من صاحب الهدف"] = [
    /* ===== المستوى الأول — أشهرها ===== */
    goal(1, "ليونيل ميسي — هدف الفوز في الدقيقة 92 على ريال مدريد في البرنابيو 2017", "7428200800209472801"),
    goal(1, "سيرخيو أغويرو — هدف اللقب في الدقيقة 93:20 أمام كوينز بارك رينجرز 2012", "6972907121637608710"),

    /* ===== المستوى الثاني ===== */
    goal(2, "واين روني — المقصية في ديربي مانشستر 2011", "6981040089753193734"),
    goal(2, "غاريث بيل — المقصية في نهائي دوري الأبطال 2018 أمام ليفربول", "7256802697184136474"),

    /* ===== المستوى الثالث ===== */
    goal(3, "سون هيونغ مين — انطلاقته من منتصف الملعب وهدفه في مرمى بيرنلي 2019", "7650134682926894339", 19),
    goal(3, "روبرتو كارلوس — الركلة الحرة الشهيرة في مرمى فرنسا 1997", "7174245860799286529"),

    /* ===== المستوى الرابع ===== */
    goal(4, "دينيس بيركامب — لفّته وهدفه في مرمى نيوكاسل 2002", "7554382613637598486", 20),
    goal(4, "بابيس سيسيه — تسديدته المقوّسة في مرمى تشيلسي 2012", "7376238566516460832"),

    /* ===== المستوى الخامس ===== */
    goal(5, "إريك لاميلا — هدف «الرابونا» في مرمى آرسنال 2021", "7481658894574488854")
  ];

  /* ---------- ولا كلمة (35 كلمة) ----------
     تمثيل صامت: تظهر على الشاشة صورة باركود لا كلمة فيها. يمسحها
     لاعب الفريق بجوّاله فتظهر له الكلمة وحده، ثم يمثّلها بلا نطق
     ولا إشارة إلى حروفها، وفريقه يخمّن.

     الحقل qr: true يكفي — واللعبة تبني الباركود من الجواب نفسه
     (انظر question.html). فإضافة كلمة جديدة سطر واحد، بلا صور
     ولا روابط. والباركود يحمل الكلمة نصاً، فيقرؤه أي جوّال بكاميرته
     بلا تطبيق ولا إنترنت على الجوّال. */
  extra["ولا كلمة"] = [
    /* ===== المستوى الأول — كلمة واحدة سهلة ===== */
    { l: 1, q: "امسحوا الباركود بجوال الممثّل — ثم مثّلها بلا كلام!", a: "يسبح", qr: true },
    { l: 1, q: "امسح الباركود بجوالك ومثّل الكلمة صامتاً", a: "قهوة", qr: true },
    { l: 1, q: "الباركود يكشف الكلمة لك وحدك — مثّلها بلا نطق", a: "طيارة", qr: true },
    { l: 1, q: "امسحوا الباركود بجوال الممثّل — ثم مثّلها بلا كلام!", a: "نوم", qr: true },
    { l: 1, q: "امسح الباركود بجوالك ومثّل الكلمة صامتاً", a: "يأكل", qr: true },
    { l: 1, q: "الباركود يكشف الكلمة لك وحدك — مثّلها بلا نطق", a: "سيارة", qr: true },
    { l: 1, q: "امسحوا الباركود بجوال الممثّل — ثم مثّلها بلا كلام!", a: "مطر", qr: true },

    /* ===== المستوى الثاني — مهن وحيوانات ===== */
    { l: 2, q: "امسح الباركود بجوالك ومثّل الكلمة صامتاً", a: "طبيب", qr: true },
    { l: 2, q: "الباركود يكشف الكلمة لك وحدك — مثّلها بلا نطق", a: "معلّم", qr: true },
    { l: 2, q: "امسحوا الباركود بجوال الممثّل — ثم مثّلها بلا كلام!", a: "طبّاخ", qr: true },
    { l: 2, q: "امسح الباركود بجوالك ومثّل الكلمة صامتاً", a: "قرد", qr: true },
    { l: 2, q: "الباركود يكشف الكلمة لك وحدك — مثّلها بلا نطق", a: "فيل", qr: true },
    { l: 2, q: "امسحوا الباركود بجوال الممثّل — ثم مثّلها بلا كلام!", a: "شرطي", qr: true },
    { l: 2, q: "امسح الباركود بجوالك ومثّل الكلمة صامتاً", a: "حلّاق", qr: true },

    /* ===== المستوى الثالث — أفعال مركّبة ===== */
    { l: 3, q: "الباركود يكشف الكلمة لك وحدك — مثّلها بلا نطق", a: "يغسل صحون", qr: true },
    { l: 3, q: "امسحوا الباركود بجوال الممثّل — ثم مثّلها بلا كلام!", a: "يركب دراجة", qr: true },
    { l: 3, q: "امسح الباركود بجوالك ومثّل الكلمة صامتاً", a: "يلعب كرة قدم", qr: true },
    { l: 3, q: "الباركود يكشف الكلمة لك وحدك — مثّلها بلا نطق", a: "يصطاد سمك", qr: true },
    { l: 3, q: "امسحوا الباركود بجوال الممثّل — ثم مثّلها بلا كلام!", a: "يكوي ملابس", qr: true },
    { l: 3, q: "امسح الباركود بجوالك ومثّل الكلمة صامتاً", a: "يحمل شنطة ثقيلة", qr: true },
    { l: 3, q: "الباركود يكشف الكلمة لك وحدك — مثّلها بلا نطق", a: "يصوّر سيلفي", qr: true },

    /* ===== المستوى الرابع — مواقف ===== */
    { l: 4, q: "امسحوا الباركود بجوال الممثّل — ثم مثّلها بلا كلام!", a: "يتأخر عن الدوام", qr: true },
    { l: 4, q: "امسح الباركود بجوالك ومثّل الكلمة صامتاً", a: "يبحث عن جواله", qr: true },
    { l: 4, q: "الباركود يكشف الكلمة لك وحدك — مثّلها بلا نطق", a: "يشرب شيئاً حارّاً", qr: true },
    { l: 4, q: "امسحوا الباركود بجوال الممثّل — ثم مثّلها بلا كلام!", a: "يركب مصعد مزدحم", qr: true },
    { l: 4, q: "امسح الباركود بجوالك ومثّل الكلمة صامتاً", a: "ينسى اسم شخص", qr: true },
    { l: 4, q: "الباركود يكشف الكلمة لك وحدك — مثّلها بلا نطق", a: "يمشي ضد الريح", qr: true },
    { l: 4, q: "امسحوا الباركود بجوال الممثّل — ثم مثّلها بلا كلام!", a: "يفتح علبة عصير بصعوبة", qr: true },

    /* ===== المستوى الخامس — معانٍ مجرّدة ===== */
    { l: 5, q: "امسح الباركود بجوالك ومثّل الكلمة صامتاً", a: "الجاذبية", qr: true },
    { l: 5, q: "الباركود يكشف الكلمة لك وحدك — مثّلها بلا نطق", a: "الوقت", qr: true },
    { l: 5, q: "امسحوا الباركود بجوال الممثّل — ثم مثّلها بلا كلام!", a: "الغيرة", qr: true },
    { l: 5, q: "امسح الباركود بجوالك ومثّل الكلمة صامتاً", a: "الصبر", qr: true },
    { l: 5, q: "الباركود يكشف الكلمة لك وحدك — مثّلها بلا نطق", a: "الحظ", qr: true },
    { l: 5, q: "امسحوا الباركود بجوال الممثّل — ثم مثّلها بلا كلام!", a: "الذكاء الاصطناعي", qr: true },
    { l: 5, q: "امسح الباركود بجوالك ومثّل الكلمة صامتاً", a: "الحنين", qr: true },
  ];

  /* ---------- أطفال (50 سؤالاً) — لأعمار 6 إلى 15 سنة ----------
     رياضيات وعلوم ورياضة وأسماك وإنجليزي، سؤالان من كل مادة في كل
     مستوى (المستوى 1 للصغار ← المستوى 5 للأكبر)، بصور حقيقية. */
  extra["أطفال"] = [
    { l: 1, q: "لديك دراجتان هوائيتان مثل هذه، كم عجلة لديك؟", a: "4 عجلات", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Fixed_bollard_bicycle_stand.jpg/960px-Fixed_bollard_bicycle_stand.jpg" },
    { l: 1, q: "ما اسم الشكل الهندسي لهذه البيتزا؟", a: "دائرة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Whole_Argentine_pizza_al_molde_with_ham%2C_onion_and_olives.jpg/960px-Whole_Argentine_pizza_al_molde_with_ham%2C_onion_and_olives.jpg" },
    { l: 1, q: "في أي حالة يكون الماء في مكعبات الثلج: صلبة أم سائلة أم غازية؟", a: "صلبة", img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Ice_cubes_openphoto.jpg" },
    { l: 1, q: "ما اسم الكوكب الذي نعيش عليه؟", a: "كوكب الأرض", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/960px-The_Earth_seen_from_Apollo_17.jpg" },
    { l: 1, q: "ما اسم هذه الرياضة التي يُسجَّل فيها الهدف بالقدم؟", a: "كرة القدم", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Pre-season_friendly_football_match_between_Sky_sports_verse_Kataka_FC_played_in_Mbale_stadium.jpg/960px-Pre-season_friendly_football_match_between_Sky_sports_verse_Kataka_FC_played_in_Mbale_stadium.jpg" },
    { l: 1, q: "كم لاعباً في كل فريق كرة قدم داخل الملعب؟", a: "11 لاعباً", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/The_Belgium_national_team_line-up_before_the_match_against_Brazil%2C_6_July_2018.jpg/960px-The_Belgium_national_team_line-up_before_the_match_against_Brazil%2C_6_July_2018.jpg" },
    { l: 1, q: "ما اسم هذه السمكة البرتقالية المخططة بالأبيض؟", a: "سمكة المهرج (نيمو)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg/960px-Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg" },
    { l: 1, q: "بأي عضو تتنفس الأسماك تحت الماء؟", a: "الخياشيم", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Goldfish_head.JPG/960px-Goldfish_head.JPG" },
    { l: 1, q: "ما اسم هذه الفاكهة باللغة الإنجليزية؟", a: "Apple", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/960px-Red_Apple.jpg" },
    { l: 1, q: "ما اسم هذا الحيوان باللغة الإنجليزية؟", a: "Cat", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/960px-Cat_November_2010-1a.jpg" },
    { l: 2, q: "كم دقيقة في الساعة الواحدة؟", a: "60 دقيقة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Clock_analog_clock.jpg/960px-Clock_analog_clock.jpg" },
    { l: 2, q: "قُسِّمت هذه البيتزا إلى 8 قطع متساوية وأكلتَ 4 منها. ما الكسر الذي أكلته؟", a: "النصف (4 من 8 = ½)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/960px-Pizza-3007395.jpg" },
    { l: 2, q: "ما اسم القوة التي تجعل التفاحة تسقط من الشجرة إلى الأرض؟", a: "الجاذبية الأرضية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Tree_with_red_apples_in_Barkedal_4.jpg/960px-Tree_with_red_apples_in_Barkedal_4.jpg" },
    { l: 2, q: "ماذا تحتاج الورقة الخضراء لتصنع غذاء النبات؟", a: "ضوء الشمس والماء وثاني أكسيد الكربون", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Sunlight_on_a_green_leaf_%28India%2C_2016%29.jpg/960px-Sunlight_on_a_green_leaf_%28India%2C_2016%29.jpg" },
    { l: 2, q: "كم نقطة تُحتسب في كرة السلة للرمية من خارج القوس؟", a: "3 نقاط", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Tim_Hardaway_Jr_jump_shot_Final_Four_2013.jpg/960px-Tim_Hardaway_Jr_jump_shot_Final_Four_2013.jpg" },
    { l: 2, q: "ما اسم هذه الرياضة التي تُلعب بمضرب وكرة صغيرة فوق شبكة؟", a: "التنس", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/A_CFHS_tennis_player_returns_a_serve.jpg/960px-A_CFHS_tennis_player_returns_a_serve.jpg" },
    { l: 2, q: "ما اسم هذا الكائن البحري الذي يحمل فيه الذكرُ البيضَ؟", a: "حصان البحر", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Seahorse_Skeleton_Macro_8.JPG/960px-Seahorse_Skeleton_Macro_8.JPG" },
    { l: 2, q: "ما اسم هذه السمكة التي تنتفخ مثل الكرة عندما تخاف؟", a: "السمكة المنتفخة (سمكة البالون)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Sphoeroides_nephelus_%28southern_pufferfish%29_%28Tampa_Bay%2C_Florida%2C_USA%29_1.jpg/960px-Sphoeroides_nephelus_%28southern_pufferfish%29_%28Tampa_Bay%2C_Florida%2C_USA%29_1.jpg" },
    { l: 2, q: "ما لون هذه السيارة باللغة الإنجليزية؟", a: "Red", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Red_Ferrari_sports_car_in_HK_20190608_191049.jpg/960px-Red_Ferrari_sports_car_in_HK_20190608_191049.jpg" },
    { l: 2, q: "ما اسم هذا الحيوان الضخم باللغة الإنجليزية؟", a: "Elephant", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/960px-African_Bush_Elephant.jpg" },
    { l: 3, q: "كم ضلعاً لكل خلية من خلايا شمع العسل؟", a: "6 أضلاع (شكل سداسي)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Bienenwabe_mit_Eiern_und_Brut_5.jpg/960px-Bienenwabe_mit_Eiern_und_Brut_5.jpg" },
    { l: 3, q: "في حجر النرد، كم مجموع النقاط على كل وجهين متقابلين؟", a: "7", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Dice_%28201651074%29.jpg/960px-Dice_%28201651074%29.jpg" },
    { l: 3, q: "عند كم درجة مئوية يغلي الماء عند مستوى سطح البحر؟", a: "100 درجة مئوية", img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Water_boiling_in_a_pot_on_a_stove.jpg" },
    { l: 3, q: "ماذا نسمّي الصخور المنصهرة التي تخرج من البركان؟", a: "الحِمم (اللافا)", img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Stromboli_Eruption.jpg" },
    { l: 3, q: "كل كم سنة تُقام الألعاب الأولمبية الصيفية؟", a: "كل 4 سنوات", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Montreal_-_Olympic_Park_panorama_-_Cropped_version.jpg/960px-Montreal_-_Olympic_Park_panorama_-_Cropped_version.jpg" },
    { l: 3, q: "كم عدد أساليب السباحة الأساسية في المسابقات؟", a: "4 (الحرة، الظهر، الصدر، الفراشة)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/221000_-_Swimming_Siobhan_Paton_post_race_-_3b_-_2000_Sydney_event_photo.jpg/960px-221000_-_Swimming_Siobhan_Paton_post_race_-_3b_-_2000_Sydney_event_photo.jpg" },
    { l: 3, q: "ما اسم أكبر سمكة في العالم؟", a: "القرش الحوتي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Male_whale_shark_at_Georgia_Aquarium.jpg/960px-Male_whale_shark_at_Georgia_Aquarium.jpg" },
    { l: 3, q: "ما اسم هذه السمكة الفضية المشهورة في الكويت التي تُقدَّم مقلية مع العيش؟", a: "الزبيدي", img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Pampus_argenteus_1.jpg" },
    { l: 3, q: "ما جمع كلمة «child» باللغة الإنجليزية؟", a: "Children", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Children_playing_outdoors.jpg/960px-Children_playing_outdoors.jpg" },
    { l: 3, q: "ما اسم هذا الشيء الذي نحمله تحت المطر باللغة الإنجليزية؟", a: "Umbrella", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/M0354_000727-005_1.jpg/960px-M0354_000727-005_1.jpg" },
    { l: 4, q: "في هذه الكرتونة 12 بيضة. كم بيضة في 12 كرتونة مثلها؟", a: "144 بيضة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/2020-05-05_19_28_32_An_open_carton_of_a_dozen_Large_Grade_A_Chicken_Eggs_from_Egg-land%27s_Best_in_the_Franklin_Farm_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg/960px-thumbnail.jpg" },
    { l: 4, q: "كم درجة مجموع زوايا المثلث؟", a: "180 درجة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Baseball_pool_balls_and_rack.png/960px-Baseball_pool_balls_and_rack.png" },
    { l: 4, q: "ما الصيغة الكيميائية للماء؟", a: "H₂O", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Water_drop_001.jpg/960px-Water_drop_001.jpg" },
    { l: 4, q: "ما اسم هذا الكوكب الذي يُلقّب بالكوكب الأحمر؟", a: "المريخ", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/960px-OSIRIS_Mars_true_color.jpg" },
    { l: 4, q: "كم دقيقة مدة مباراة كرة القدم الأصلية دون الوقت الإضافي؟", a: "90 دقيقة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Kaliningrad_05-2017_img74_new_stadium.jpg/960px-Kaliningrad_05-2017_img74_new_stadium.jpg" },
    { l: 4, q: "في أي دولة أُقيمت كأس العالم لكرة القدم 2022؟", a: "قطر", img: "https://upload.wikimedia.org/wikipedia/commons/8/85/2022_wc_final_08.jpg" },
    { l: 4, q: "ما اسم هذه السمكة التي تسبح عكس التيار إلى النهر لتضع بيضها؟", a: "السلمون", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Oak_Orchard_Salmon_Jumping_Waterfall_-_panoramio.jpg/960px-Oak_Orchard_Salmon_Jumping_Waterfall_-_panoramio.jpg" },
    { l: 4, q: "ما اسم هذه السمكة التي تستطيع توليد صدمات كهربائية؟", a: "ثعبان السمك الكهربائي", img: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Electric_eel_Electrophorus_electricus.jpg" },
    { l: 4, q: "ما صيغة الماضي من الفعل «go» باللغة الإنجليزية؟", a: "Went", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Happy_kids_walking_barefoot_to_school_Nigeria.jpg/960px-Happy_kids_walking_barefoot_to_school_Nigeria.jpg" },
    { l: 4, q: "ما عكس كلمة «hot» باللغة الإنجليزية؟", a: "Cold", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Snow_Scene_at_Shipka_Pass_1.JPG/960px-Snow_Scene_at_Shipka_Pass_1.JPG" },
    { l: 5, q: "رقعة الشطرنج 8 مربعات في 8 مربعات. كم مربعاً صغيراً فيها؟", a: "64 مربعاً", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Chessboard_of_Napoleon-IMG_0637.JPG/960px-Chessboard_of_Napoleon-IMG_0637.JPG" },
    { l: 5, q: "ما قيمة العدد π (باي) مقرّبةً إلى منزلتين عشريتين؟", a: "3.14", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Apple_pie_44.jpg/960px-Apple_pie_44.jpg" },
    { l: 5, q: "ما اسم أصغر وحدة حيّة يتكوّن منها جسم الكائن الحي؟", a: "الخلية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Bryum_capillare_leaf_cells.jpg/960px-Bryum_capillare_leaf_cells.jpg" },
    { l: 5, q: "كم تبلغ سرعة الضوء تقريباً؟", a: "300 ألف كيلومتر في الثانية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Fluorescence_in_calcite.jpg/960px-Fluorescence_in_calcite.jpg" },
    { l: 5, q: "ماذا تمثّل الحلقات الخمس في شعار الألعاب الأولمبية؟", a: "قارات العالم الخمس المأهولة متّحدة في الرياضة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Olympic_rings_on_the_Eiffel_Tower_2024_%2821%29.jpg/960px-Olympic_rings_on_the_Eiffel_Tower_2024_%2821%29.jpg" },
    { l: 5, q: "كم تبلغ مسافة سباق الماراثون؟", a: "42.195 كيلومتراً", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Berlin-Marathon_2015_Runners_14.jpg/960px-Berlin-Marathon_2015_Runners_14.jpg" },
    { l: 5, q: "ما اسم أسرع سمكة في العالم؟", a: "سمكة أبو شراع (السيلفيش)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Istiophorus_platypterus.jpg/960px-Istiophorus_platypterus.jpg" },
    { l: 5, q: "ما اسم هذه السمكة المرقّطة المحبوبة في الكويت والخليج؟", a: "الهامور", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Epinephelus_coioides_%28Orange_spotted_grouper%29_in_the_Philippines.jpg/960px-Epinephelus_coioides_%28Orange_spotted_grouper%29_in_the_Philippines.jpg" },
    { l: 5, q: "ما الكلمة الإنجليزية للمكان الذي نستعير منه الكتب؟", a: "Library", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Bookshelves_in_Faculty_of_Arts_Library%2C_Chulalongkorn_University.jpg/960px-Bookshelves_in_Faculty_of_Arts_Library%2C_Chulalongkorn_University.jpg" },
    { l: 5, q: "أكمل الجملة: She ___ to school every day (go / goes)", a: "goes", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Schoolgirls_in_Street_-_Asahikawa_-_Hokkaido_-_Japan_%2848018181627%29.jpg/960px-Schoolgirls_in_Street_-_Asahikawa_-_Hokkaido_-_Japan_%2848018181627%29.jpg" },
  ];

  /* ---------- شعارات أندية (50 سؤالاً) ----------
     الشعارات من ويكيبيديا. crop يقصّ رمز الشعار وحده بلا أي كتابة
     (انظر cropImage في question.html)، ويظهر الشعار كاملاً مع الإجابة. */
  extra["شعارات أندية"] = [
    { l: 1, q: "لمن شعار النادي هذا؟", a: "مانشستر يونايتد", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/500px-Manchester_United_FC_crest.svg.png", crop: [27, 24, 46, 50] },
    { l: 1, q: "لمن شعار النادي هذا؟", a: "ليفربول", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/500px-Liverpool_FC.svg.png", crop: [5, 57, 90, 29] },
    { l: 1, q: "لمن شعار النادي هذا؟", a: "بايرن ميونخ", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg/500px-FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg.png", crop: [27, 27, 46, 46] },
    { l: 1, q: "لمن شعار النادي هذا؟", a: "باريس سان جيرمان", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/500px-Paris_Saint-Germain_F.C..svg.png", crop: [30, 36, 40, 36] },
    { l: 1, q: "لمن شعار النادي هذا؟", a: "تشيلسي", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/500px-Chelsea_FC.svg.png", crop: [28, 26, 44, 48] },
    { l: 1, q: "لمن شعار النادي هذا؟", a: "آرسنال", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/500px-Arsenal_FC.svg.png", crop: [12, 32, 76, 42] },
    { l: 1, q: "لمن شعار النادي هذا؟", a: "مانشستر سيتي", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/500px-Manchester_City_FC_badge.svg.png", crop: [30, 26, 40, 48] },
    { l: 1, q: "لمن شعار النادي هذا؟", a: "توتنهام هوتسبير", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/500px-Tottenham_Hotspur.svg.png", crop: [15, 0, 70, 68] },
    { l: 1, q: "لمن شعار النادي هذا؟", a: "أتلتيكو مدريد", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/f/f9/Atletico_Madrid_Logo_2024.svg/500px-Atletico_Madrid_Logo_2024.svg.png" },
    { l: 1, q: "لمن شعار النادي هذا؟", a: "النصر السعودي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Nassr_FC_Logo.svg/500px-Nassr_FC_Logo.svg.png", crop: [24, 26, 52, 48] },
    { l: 2, q: "لمن شعار النادي هذا؟", a: "الأهلي المصري", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/7/70/Al_Ahly_SC_logo.svg/500px-Al_Ahly_SC_logo.svg.png", crop: [20, 36, 60, 20] },
    { l: 2, q: "لمن شعار النادي هذا؟", a: "الزمالك المصري", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/e/ef/Zamalek_SC_logo.svg/500px-Zamalek_SC_logo.svg.png", crop: [22, 10, 56, 40] },
    { l: 2, q: "لمن شعار النادي هذا؟", a: "أياكس أمستردام", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Logo_AFC_Ajax_%281928-1991%2C_2025-%29.png/500px-Logo_AFC_Ajax_%281928-1991%2C_2025-%29.png", crop: [10, 30, 88, 68] },
    { l: 2, q: "لمن شعار النادي هذا؟", a: "بنفيكا", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/a/a2/SL_Benfica_logo.svg/500px-SL_Benfica_logo.svg.png", crop: [0, 0, 100, 36] },
    { l: 2, q: "لمن شعار النادي هذا؟", a: "فنربخشة", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/3/39/Fenerbah%C3%A7e.svg/500px-Fenerbah%C3%A7e.svg.png", crop: [30, 26, 40, 44] },
    { l: 2, q: "لمن شعار النادي هذا؟", a: "روما", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/f/f7/AS_Roma_logo_%282017%29.svg/500px-AS_Roma_logo_%282017%29.svg.png", crop: [12, 4, 76, 44] },
    { l: 2, q: "لمن شعار النادي هذا؟", a: "سلتيك", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/7/71/Celtic_FC_crest.svg/500px-Celtic_FC_crest.svg.png", crop: [24, 24, 52, 52] },
    { l: 2, q: "لمن شعار النادي هذا؟", a: "نيوكاسل يونايتد", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/500px-Newcastle_United_Logo.svg.png", crop: [0, 0, 100, 76] },
    { l: 2, q: "لمن شعار النادي هذا؟", a: "إيفرتون", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/7/7c/Everton_FC_logo.svg/500px-Everton_FC_logo.svg.png", crop: [15, 5, 70, 42] },
    { l: 2, q: "لمن شعار النادي هذا؟", a: "ليستر سيتي", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/500px-Leicester_City_crest.svg.png", crop: [28, 26, 44, 44] },
    { l: 3, q: "لمن شعار النادي هذا؟", a: "العين الإماراتي", img: "https://upload.wikimedia.org/wikipedia/en/6/62/Al_Ain_FC_logo_2024.png", crop: [22, 42, 56, 42] },
    { l: 3, q: "لمن شعار النادي هذا؟", a: "العربي القطري", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/2/22/Al-Arabi_SC_Qatar_logo.svg/500px-Al-Arabi_SC_Qatar_logo.svg.png", crop: [28, 20, 44, 50] },
    { l: 3, q: "لمن شعار النادي هذا؟", a: "الأهلي السعودي", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/4/45/Al_Ahli_Saudi_FC_logo.svg/500px-Al_Ahli_Saudi_FC_logo.svg.png", crop: [36, 12, 28, 34] },
    { l: 3, q: "لمن شعار النادي هذا؟", a: "الشباب السعودي", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/2/2d/Al_Shabab_FC_%28Riyadh%29.svg/500px-Al_Shabab_FC_%28Riyadh%29.svg.png", crop: [30, 30, 40, 40] },
    { l: 3, q: "لمن شعار النادي هذا؟", a: "لاتسيو", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/c/ce/S.S._Lazio_badge.svg/500px-S.S._Lazio_badge.svg.png", crop: [0, 0, 100, 34] },
    { l: 3, q: "لمن شعار النادي هذا؟", a: "أتلتيك بلباو", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/9/98/Club_Athletic_Bilbao_logo.svg/500px-Club_Athletic_Bilbao_logo.svg.png", crop: [8, 17, 84, 58] },
    { l: 3, q: "لمن شعار النادي هذا؟", a: "ديربي كاونتي", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/4/4a/Derby_County_crest.svg/500px-Derby_County_crest.svg.png" },
    { l: 3, q: "لمن شعار النادي هذا؟", a: "سبورتنغ لشبونة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Sporting_Clube_de_Portugal_2026.svg/500px-Sporting_Clube_de_Portugal_2026.svg.png", crop: [8, 24, 84, 76] },
    { l: 3, q: "لمن شعار النادي هذا؟", a: "الاتفاق السعودي", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/3/34/Al-Ettifaq_FC_logo.svg/500px-Al-Ettifaq_FC_logo.svg.png", crop: [30, 32, 40, 30] },
    { l: 3, q: "لمن شعار النادي هذا؟", a: "وولفرهامبتون", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/c/c9/Wolverhampton_Wanderers_FC_crest.svg/500px-Wolverhampton_Wanderers_FC_crest.svg.png" },
    { l: 4, q: "لمن شعار النادي هذا؟", a: "الترجي التونسي", img: "https://upload.wikimedia.org/wikipedia/en/f/fb/Esp%C3%A9rance_Sportive_de_Tunis_logo.png", crop: [28, 42, 44, 34] },
    { l: 4, q: "لمن شعار النادي هذا؟", a: "الرجاء البيضاوي", img: "https://upload.wikimedia.org/wikipedia/en/b/bd/Raja_CA_logo.png", crop: [34, 30, 32, 34] },
    { l: 4, q: "لمن شعار النادي هذا؟", a: "آينتراخت فرانكفورت", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/7/7e/Eintracht_Frankfurt_crest.svg/500px-Eintracht_Frankfurt_crest.svg.png" },
    { l: 4, q: "لمن شعار النادي هذا؟", a: "أستون فيلا", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/9/9a/Aston_Villa_FC_new_crest.svg/500px-Aston_Villa_FC_new_crest.svg.png", crop: [18, 5, 64, 64] },
    { l: 4, q: "لمن شعار النادي هذا؟", a: "وست هام يونايتد", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/500px-West_Ham_United_FC_logo.svg.png", crop: [20, 32, 60, 46] },
    { l: 4, q: "لمن شعار النادي هذا؟", a: "نوتنغهام فورست", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/e/e5/Nottingham_Forest_F.C._logo.svg/500px-Nottingham_Forest_F.C._logo.svg.png", crop: [5, 8, 90, 56] },
    { l: 4, q: "لمن شعار النادي هذا؟", a: "بورتو", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/f/f1/FC_Porto.svg/500px-FC_Porto.svg.png", crop: [18, 0, 64, 62] },
    { l: 4, q: "لمن شعار النادي هذا؟", a: "رينجرز", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/4/43/Rangers_FC.svg/500px-Rangers_FC.svg.png", crop: [30, 28, 40, 30] },
    { l: 4, q: "لمن شعار النادي هذا؟", a: "كريستال بالاس", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/a/a2/Crystal_Palace_FC_logo_%282022%29.svg/500px-Crystal_Palace_FC_logo_%282022%29.svg.png", crop: [0, 0, 100, 66] },
    { l: 4, q: "لمن شعار النادي هذا؟", a: "فالنسيا", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/500px-Valenciacf.svg.png", crop: [18, 48, 64, 50] },
    { l: 5, q: "لمن شعار النادي هذا؟", a: "الدحيل القطري", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/8/81/Al-Duhail_SC_%28logo%29.svg/500px-Al-Duhail_SC_%28logo%29.svg.png", crop: [28, 28, 44, 32] },
    { l: 5, q: "لمن شعار النادي هذا؟", a: "شباب الأهلي الإماراتي", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/0/02/Shabab_Al_Ahli_logo.svg/500px-Shabab_Al_Ahli_logo.svg.png", crop: [30, 0, 40, 30] },
    { l: 5, q: "لمن شعار النادي هذا؟", a: "الوحدة الإماراتي", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/e/ef/Al_Wahda_FC_logo.svg/500px-Al_Wahda_FC_logo.svg.png", crop: [34, 36, 32, 38] },
    { l: 5, q: "لمن شعار النادي هذا؟", a: "المحرق البحريني", img: "https://upload.wikimedia.org/wikipedia/en/9/99/Al-Muharraq_SC_%28logo%29.png", crop: [33, 58, 34, 22] },
    { l: 5, q: "لمن شعار النادي هذا؟", a: "بوماس المكسيكي", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/b/b7/Club_Universidad_Nacional_logo.svg/500px-Club_Universidad_Nacional_logo.svg.png" },
    { l: 5, q: "لمن شعار النادي هذا؟", a: "تورينو", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/2/2e/Torino_FC_Logo.svg/500px-Torino_FC_Logo.svg.png", crop: [22, 58, 48, 38] },
    { l: 5, q: "لمن شعار النادي هذا؟", a: "بيراميدز المصري", img: "https://upload.wikimedia.org/wikipedia/en/8/87/Pyramids_FC_%282020%29.png", crop: [25, 38, 50, 32] },
    { l: 5, q: "لمن شعار النادي هذا؟", a: "الجزيرة الإماراتي", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/f/ff/Al_Jazira_Club_logo_en_%282021%29.svg/500px-Al_Jazira_Club_logo_en_%282021%29.svg.png", crop: [32, 22, 36, 50] },
    { l: 5, q: "لمن شعار النادي هذا؟", a: "الريان القطري", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/8/80/Al-Rayyan_SC_logo.svg/500px-Al-Rayyan_SC_logo.svg.png", crop: [33, 12, 34, 28] },
    { l: 5, q: "لمن شعار النادي هذا؟", a: "الوصل الإماراتي", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/3/3d/Al_Wasl_FC_Logo.svg/500px-Al_Wasl_FC_Logo.svg.png", crop: [34, 30, 32, 32] },
  ];

  /* ---------- شعارات كويتية (50 سؤالاً) ----------
     شعارات شركات وبنوك وجهات حكومية وعسكرية وأندية كويتية من ويكيبيديا،
     مقصوصة (crop) على رمز الشعار وحده بلا أي كتابة. */
  extra["شعارات كويتية"] = [
    { l: 1, q: "هذا الشعار الرسمي لأي دولة؟", a: "الكويت", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Emblem_of_Kuwait.svg/500px-Emblem_of_Kuwait.svg.png", crop: [5, 30, 90, 70] },
    { l: 1, q: "ما اسم شركة الطيران صاحبة هذا الشعار؟", a: "الخطوط الجوية الكويتية", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/0/08/Kuwait_Airways_logo.svg/500px-Kuwait_Airways_logo.svg.png", crop: [0, 15, 42, 60] },
    { l: 1, q: "ما اسم البنك صاحب هذا الشعار؟", a: "بنك الكويت الوطني", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/NBK.svg/500px-NBK.svg.png", crop: [66, 0, 34, 78] },
    { l: 1, q: "ما اسم البنك صاحب هذا الشعار؟", a: "بيت التمويل الكويتي (بيتك)", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/e/ec/Kuwait_Finance_House_logo.svg/500px-Kuwait_Finance_House_logo.svg.png", crop: [0, 5, 18, 90] },
    { l: 1, q: "ما اسم شركة الاتصالات صاحبة هذا الشعار؟", a: "زين", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/5/5c/Zain_Group_logo.svg/500px-Zain_Group_logo.svg.png", crop: [0, 0, 20, 100] },
    { l: 1, q: "ما اسم الشركة صاحبة هذا الشعار؟", a: "شركة نفط الكويت", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/KOC_Logo_for_wikipedia.png/500px-KOC_Logo_for_wikipedia.png", crop: [26, 20, 62, 42] },
    { l: 1, q: "ما اسم النادي الكويتي صاحب هذا الشعار؟", a: "نادي القادسية", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/5/50/Qadsia_SC_Crest.svg/500px-Qadsia_SC_Crest.svg.png", crop: [22, 28, 56, 54] },
    { l: 1, q: "ما اسم الشركة صاحبة هذا الشعار؟", a: "شركة البترول الوطنية الكويتية", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/1/10/Kuwait_National_Petroleum_Company_logo.svg/500px-Kuwait_National_Petroleum_Company_logo.svg.png" },
    { l: 1, q: "ما اسم النادي الكويتي صاحب هذا الشعار؟", a: "نادي الكويت", img: "https://thumb.wikimedia.org/wikipedia/ar/thumb/0/00/Kuwait_SC.svg/500px-Kuwait_SC.svg.png", crop: [5, 5, 90, 54] },
    { l: 1, q: "ما اسم علامة محطات الوقود صاحبة هذا الشعار؟", a: "Q8 (البترول الكويتية العالمية)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Q8_logo.svg/500px-Q8_logo.svg.png", crop: [46, 0, 54, 100] },
    { l: 2, q: "ما اسم النادي الكويتي صاحب هذا الشعار؟", a: "نادي كاظمة", img: "https://thumb.wikimedia.org/wikipedia/ar/thumb/5/52/Kazma_SC.svg/500px-Kazma_SC.svg.png", crop: [25, 36, 50, 60] },
    { l: 2, q: "ما اسم الشركة صاحبة هذا الشعار؟", a: "مؤسسة البترول الكويتية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Kuwait_Petroleum_Corporation_Logo.svg/500px-Kuwait_Petroleum_Corporation_Logo.svg.png", crop: [36, 0, 28, 46] },
    { l: 2, q: "ما اسم الشركة صاحبة هذا الشعار؟", a: "مركز سلطان", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Sultanlogo.png/500px-Sultanlogo.png", crop: [22, 0, 56, 46] },
    { l: 2, q: "ما اسم الجهة الرياضية صاحبة هذا الشعار؟", a: "الاتحاد الكويتي لكرة القدم", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/0/0b/Kuwait_Football_Association_logo.svg/500px-Kuwait_Football_Association_logo.svg.png", crop: [0, 40, 100, 60] },
    { l: 2, q: "ما اسم البنك صاحب هذا الشعار؟", a: "البنك الأهلي الكويتي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/ABK_Logo.svg/500px-ABK_Logo.svg.png", crop: [70, 15, 30, 75] },
    { l: 2, q: "ما اسم الشركة صاحبة هذا الشعار؟", a: "بورصة الكويت", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/4/4c/Boursa_Kuwait_logo.svg/500px-Boursa_Kuwait_logo.svg.png", crop: [20, 0, 60, 62] },
    { l: 2, q: "ما اسم البنك صاحب هذا الشعار؟", a: "بنك الكويت المركزي", img: "https://upload.wikimedia.org/wikipedia/en/f/f8/Central_Bank_of_Kuwait_Logo.png", crop: [24, 22, 52, 50] },
    { l: 2, q: "ما اسم البنك صاحب هذا الشعار؟", a: "بنك برقان", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Burgan_Bank_logo.svg/500px-Burgan_Bank_logo.svg.png", crop: [0, 0, 24, 100] },
    { l: 2, q: "ما اسم البنك صاحب هذا الشعار؟", a: "بنك الكويت الدولي", img: "https://upload.wikimedia.org/wikipedia/en/b/b2/Kuwait_International_Bank_Logo.png", crop: [8, 15, 21, 72] },
    { l: 2, q: "ما اسم الجهة الحكومية صاحبة هذا الشعار؟", a: "بلدية الكويت", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Emblem_of_Kuwait_City.svg/500px-Emblem_of_Kuwait_City.svg.png", crop: [0, 42, 100, 58] },
    { l: 3, q: "ما اسم الشركة صاحبة هذا الشعار؟", a: "مجموعة الشايع", img: "https://upload.wikimedia.org/wikipedia/ar/b/b3/%D8%B4%D8%B9%D8%A7%D8%B1_%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9_%D8%A7%D9%84%D8%B4%D8%A7%D9%8A%D8%B9.png", crop: [36, 0, 28, 50] },
    { l: 3, q: "ما اسم القناة صاحبة هذا الشعار؟", a: "تلفزيون الكويت", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/KuwaitTV.svg/500px-KuwaitTV.svg.png", crop: [0, 0, 100, 70] },
    { l: 3, q: "ما اسم النادي الكويتي صاحب هذا الشعار؟", a: "نادي الجهراء", img: "https://upload.wikimedia.org/wikipedia/ar/3/39/Al_Jahra.png", crop: [22, 32, 56, 50] },
    { l: 3, q: "ما اسم الجهة العسكرية صاحبة هذا الشعار؟", a: "الحرس الوطني الكويتي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Kuwaiti_National_Guard_Emblem.svg/500px-Kuwaiti_National_Guard_Emblem.svg.png", crop: [0, 0, 100, 86] },
    { l: 3, q: "ما اسم الجهة العسكرية صاحبة هذا الشعار؟", a: "القوة الجوية الكويتية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Kuwait_Air_Force_emblem.svg/500px-Kuwait_Air_Force_emblem.svg.png", crop: [0, 0, 100, 84] },
    { l: 3, q: "ما اسم الجهة العسكرية صاحبة هذا الشعار؟", a: "القوة البحرية الكويتية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/KNF_Seal.svg/500px-KNF_Seal.svg.png", crop: [0, 0, 100, 80] },
    { l: 3, q: "ما اسم الجهة العسكرية صاحبة هذا الشعار؟", a: "رئاسة الأركان العامة للجيش الكويتي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/KGSHQ_Seal.svg/500px-KGSHQ_Seal.svg.png", crop: [0, 0, 100, 80] },
    { l: 3, q: "ما اسم الجهة الحكومية صاحبة هذا الشعار؟", a: "قوة الإطفاء العام", img: "https://upload.wikimedia.org/wikipedia/ar/c/c8/%D8%B4%D8%B9%D8%A7%D8%B1_%D9%82%D9%88%D8%A9_%D8%A7%D9%84%D8%A5%D8%B7%D9%81%D8%A7%D8%A1_%D8%A7%D9%84%D8%B9%D8%A7%D9%85.png" },
    { l: 3, q: "ما اسم الجهة الحكومية صاحبة هذا الشعار؟", a: "مجلس الأمة الكويتي", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/%D8%B4%D8%B9%D8%A7%D8%B1_%D9%85%D8%AC%D9%84%D8%B3_%D8%A7%D9%84%D8%A3%D9%85%D8%A9_%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA%D9%8A.png/500px-%D8%B4%D8%B9%D8%A7%D8%B1_%D9%85%D8%AC%D9%84%D8%B3_%D8%A7%D9%84%D8%A3%D9%85%D8%A9_%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA%D9%8A.png", crop: [0, 0, 100, 58] },
    { l: 3, q: "ما اسم المطعم صاحب هذا الشعار؟", a: "ميس الغانم", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Mais_Alghanim_Logo.png/500px-Mais_Alghanim_Logo.png", crop: [15, 0, 70, 48] },
    { l: 4, q: "ما اسم الجمعية صاحبة هذا الشعار؟", a: "الجمعية الكويتية لتقنية المعلومات", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Kuwait_Information_Technology_Society_Logo.png/500px-Kuwait_Information_Technology_Society_Logo.png", crop: [52, 0, 48, 40] },
    { l: 4, q: "هذا شعار قديم لأي دولة؟", a: "الكويت (شعارها بين 1956 و1962)", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Emblem_of_Kuwait_%281956%E2%80%931962%29.svg/500px-Emblem_of_Kuwait_%281956%E2%80%931962%29.svg.png", crop: [32, 48, 36, 52] },
    { l: 4, q: "ما اسم الجهة الرياضية صاحبة هذا الشعار؟", a: "اللجنة الأولمبية الكويتية", img: "https://thumb.wikimedia.org/wikipedia/en/thumb/4/4a/Kuwait_Olympic_Committee_logo.svg/500px-Kuwait_Olympic_Committee_logo.svg.png" },
    { l: 4, q: "ما اسم النادي الكويتي صاحب هذا الشعار؟", a: "نادي النصر", img: "https://upload.wikimedia.org/wikipedia/ar/6/62/NaserClub.png", crop: [5, 12, 90, 85] },
    { l: 4, q: "ما اسم النادي الكويتي صاحب هذا الشعار؟", a: "نادي اليرموك", img: "https://upload.wikimedia.org/wikipedia/ar/3/37/Al_Yarmouk_FC_logo.png", crop: [28, 12, 44, 50] },
    { l: 4, q: "ما اسم الشركة صاحبة هذا الشعار؟", a: "شركة مشاريع الكويت القابضة (كيبكو)", img: "https://upload.wikimedia.org/wikipedia/ar/3/35/Kipco.png", crop: [0, 0, 100, 55] },
    { l: 4, q: "ما اسم النادي الكويتي صاحب هذا الشعار؟", a: "نادي الشباب", img: "https://upload.wikimedia.org/wikipedia/ar/9/9d/Al_Shabab_Kuwait.png", crop: [10, 5, 80, 55] },
    { l: 4, q: "ما اسم المؤسسة العلمية صاحبة هذا الشعار؟", a: "معهد الكويت للأبحاث العلمية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/KISR_Logo.jpg/500px-KISR_Logo.jpg", crop: [0, 5, 28, 75] },
    { l: 4, q: "ما اسم البنك صاحب هذا الشعار؟", a: "بنك وربة", img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Warba_Bank_Logo.png", crop: [76, 0, 24, 100] },
    { l: 4, q: "ما اسم الجهة الحكومية صاحبة هذا الشعار؟", a: "وزارة المالية", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Ministry_of_Finance_of_Kuwait_logo.png/500px-Ministry_of_Finance_of_Kuwait_logo.png", crop: [28, 0, 44, 52] },
    { l: 5, q: "ما اسم الشركة صاحبة هذا الشعار؟", a: "أجيليتي", img: "https://thumb.wikimedia.org/wikipedia/ar/thumb/f/f1/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%B4%D8%B1%D9%83%D8%A9_%D8%A3%D8%AC%D9%8A%D9%84%D9%8A%D8%AA%D9%8A.svg/500px-%D8%B4%D8%B9%D8%A7%D8%B1_%D8%B4%D8%B1%D9%83%D8%A9_%D8%A3%D8%AC%D9%8A%D9%84%D9%8A%D8%AA%D9%8A.svg.png", crop: [45, 15, 55, 50] },
    { l: 5, q: "ما اسم الجهة الحكومية صاحبة هذا الشعار؟", a: "الصندوق الكويتي للتنمية الاقتصادية العربية", img: "https://upload.wikimedia.org/wikipedia/en/8/8b/Kfaed_logo.jpg" },
    { l: 5, q: "ما اسم الشركة صاحبة هذا الشعار؟", a: "شركة مطاحن الدقيق والمخابز الكويتية", img: "https://upload.wikimedia.org/wikipedia/commons/9/9f/KFMBC.png", crop: [26, 26, 48, 48] },
    { l: 5, q: "ما اسم النادي الكويتي صاحب هذا الشعار؟", a: "نادي برقان", img: "https://upload.wikimedia.org/wikipedia/ar/6/6f/Burgan%2CSC%2Clogo%2C2016.gif", crop: [28, 26, 44, 46] },
    { l: 5, q: "ما اسم الجهة العسكرية صاحبة هذا الشعار؟", a: "القوة البرية الكويتية", img: "https://upload.wikimedia.org/wikipedia/commons/d/db/Kuwait_Land_Forces_Emblem.jpg", crop: [0, 0, 100, 82] },
    { l: 5, q: "ما اسم النادي الكويتي صاحب هذا الشعار؟", a: "نادي الصليبيخات", img: "https://thumb.wikimedia.org/wikipedia/ar/thumb/d/df/Sulaibikhat_SC.svg/500px-Sulaibikhat_SC.svg.png", crop: [10, 28, 80, 55] },
    { l: 5, q: "ما اسم الجمعية صاحبة هذا الشعار؟", a: "نادي الكويت لمراقبة الطيور", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Kuwait_Birders_Club_%28KBC%29_official_Logo.png/500px-Kuwait_Birders_Club_%28KBC%29_official_Logo.png", crop: [15, 0, 75, 72] },
    { l: 5, q: "ما اسم الجمعية صاحبة هذا الشعار؟", a: "الرحمة العالمية", img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/%D9%84%D9%88%D8%AC%D9%88_%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D8%A9_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9.jpg", crop: [0, 0, 100, 62] },
    { l: 5, q: "ما اسم الجهة الحكومية صاحبة هذا الشعار؟", a: "الهيئة العامة لشؤون ذوي الإعاقة", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%A7%D9%84%D9%87%D9%8A%D8%A6%D8%A9_%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9_%D9%84%D8%B4%D8%A4%D9%88%D9%86_%D8%B0%D9%88%D9%8A_%D8%A7%D9%84%D8%A5%D8%B9%D8%A7%D9%82%D8%A9_%28%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA%29.png/500px-%D8%B4%D8%B9%D8%A7%D8%B1_%D8%A7%D9%84%D9%87%D9%8A%D8%A6%D8%A9_%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9_%D9%84%D8%B4%D8%A4%D9%88%D9%86_%D8%B0%D9%88%D9%8A_%D8%A7%D9%84%D8%A5%D8%B9%D8%A7%D9%82%D8%A9_%28%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA%29.png", crop: [15, 5, 70, 62] },
    { l: 5, q: "ما اسم الجهة التعليمية صاحبة هذا الشعار؟", a: "الجامعة الأمريكية في الكويت", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/American_University_of_Kuwait.svg/500px-American_University_of_Kuwait.svg.png", crop: [35, 0, 30, 38] },
  ];

  /* ---------- التسجيل والدمج ---------- */
  if (typeof window !== "undefined") {
    window.questionsExtra2 = Object.assign(window.questionsExtra2 || {}, extra);

    var data  = window.questionsData;
    var count = window.questionsCount;

    if (data) {
      Object.keys(extra).forEach(function (cat) {
        data[cat] = (data[cat] || []).concat(extra[cat]);
        if (count) count[cat] = data[cat].length;
      });
    } else {
      console.warn("questions-extra2.js: حمّل questions.js أولاً");
    }
  }
})();
