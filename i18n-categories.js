/* ============================================================
   جاوبني — ترجمة أسماء الفئات (54 فئة × 38 لغة)
   ------------------------------------------------------------
   نفس صيغة i18n-langs.js المضغوطة: قائمة مفاتيح واحدة
   ثم مصفوفة قيم لكل لغة بنفس الترتيب.

   ملاحظة: أسماء الفئات هي مفاتيح بنك الأسئلة نفسها،
   فالترجمة هنا للعرض فقط ولا تغيّر شيئاً في المنطق الداخلي.
   ============================================================ */

(function () {
  "use strict";

  var C = [
    /*  0 */ "اسلامي",
    /*  1 */ "قرآن وسيرة",
    /*  2 */ "التاريخ",
    /*  3 */ "لغة عربية",
    /*  4 */ "دول و عواصم",
    /*  5 */ "خمن اسم الدولة",
    /*  6 */ "اعلام",
    /*  7 */ "خرائط",
    /*  8 */ "جغرافيا العالم",
    /*  9 */ "علوم",
    /* 10 */ "حيوانات",
    /* 11 */ "رياضة",
    /* 12 */ "تخمين اللاعب",
    /* 13 */ "سيارات",
    /* 14 */ "تقنية",
    /* 15 */ "ألعاب فيديو",
    /* 16 */ "أفلام وأنمي",
    /* 17 */ "البوكيمون",
    /* 18 */ "ارطغرل",
    /* 19 */ "الحفره",
    /* 20 */ "خمن اسم المسلسل",
    /* 21 */ "من القارئ",
    /* 22 */ "عدنيات",
    /* 23 */ "طعام ومطبخ",
    /* 24 */ "مشاهير عرب",
    /* 25 */ "أمثال وألغاز",
    /* 26 */ "الصيادون",
    /* 27 */ "مجمعات الكويت",
    /* 28 */ "مناطق الكويت",
    /* 29 */ "الفضاء والفلك",
    /* 30 */ "جسم الإنسان",
    /* 31 */ "الكيمياء",
    /* 32 */ "الفيزياء",
    /* 33 */ "ألغاز رياضية",
    /* 34 */ "الاختراعات والمخترعون",
    /* 35 */ "الديناصورات",
    /* 36 */ "الطيور",
    /* 37 */ "البحار والمحيطات",
    /* 38 */ "النباتات والأشجار",
    /* 39 */ "كرة القدم العالمية",
    /* 40 */ "كأس العالم",
    /* 41 */ "الألعاب الأولمبية",
    /* 42 */ "الحضارات القديمة",
    /* 43 */ "معالم العالم",
    /* 44 */ "الطيران والطائرات",
    /* 45 */ "الحاسوب والبرمجة",
    /* 46 */ "العملات والاقتصاد",
    /* 47 */ "المنظمات الدولية",
    /* 48 */ "الشعر العربي",
    /* 49 */ "الموسيقى والآلات",
    /* 50 */ "السينما العالمية",
    /* 51 */ "الأنبياء والرسل",
    /* 52 */ "الحج والعمرة"
  ];

  var P = {};

  P.en = ["Islamic","Quran & Seerah","History","Arabic Language","Countries & Capitals","Guess the Country","Flags","Maps","World Geography","Science",
          "Animals","Sports","Guess the Player","Cars","Technology","Video Games","Movies & Anime","Pokémon","Ertugrul",
          "Çukur","Guess the Series","Who's the Reciter","Gulf Songs","Food & Cooking","Arab Celebrities","Proverbs & Riddles","Fishermen","Kuwait Malls","Kuwait Areas",
          "Space & Astronomy","Human Body","Chemistry","Physics","Math Puzzles","Inventions & Inventors","Dinosaurs","Birds","Seas & Oceans","Plants & Trees",
          "World Football","World Cup","Olympic Games","Ancient Civilizations","World Landmarks","Aviation & Aircraft","Computing & Programming","Currencies & Economy","International Organizations","Arabic Poetry",
          "Music & Instruments","World Cinema","Prophets & Messengers","Hajj & Umrah"];

  P.fr = ["Islam","Coran & Sîra","Histoire","Langue arabe","Pays & capitales","Devine le pays","Drapeaux","Cartes","Géographie mondiale","Sciences",
          "Animaux","Sport","Devine le joueur","Voitures","Technologie","Jeux vidéo","Films & animés","Pokémon","Ertugrul",
          "Çukur","Devine la série","Qui est le récitant","Chants du Golfe","Cuisine","Célébrités arabes","Proverbes & énigmes","Les pêcheurs","Centres du Koweït","Régions du Koweït",
          "Espace & astronomie","Corps humain","Chimie","Physique","Énigmes mathématiques","Inventions & inventeurs","Dinosaures","Oiseaux","Mers & océans","Plantes & arbres",
          "Football mondial","Coupe du monde","Jeux olympiques","Civilisations anciennes","Monuments du monde","Aviation & avions","Informatique & programmation","Monnaies & économie","Organisations internationales","Poésie arabe",
          "Musique & instruments","Cinéma mondial","Prophètes & messagers","Hajj & Omra"];

  P.es = ["Islam","Corán y Sira","Historia","Lengua árabe","Países y capitales","Adivina el país","Banderas","Mapas","Geografía mundial","Ciencias",
          "Animales","Deportes","Adivina el jugador","Coches","Tecnología","Videojuegos","Cine y anime","Pokémon","Ertugrul",
          "Çukur","Adivina la serie","¿Quién es el recitador?","Canciones del Golfo","Comida y cocina","Famosos árabes","Refranes y acertijos","Los pescadores","Centros de Kuwait","Zonas de Kuwait",
          "Espacio y astronomía","Cuerpo humano","Química","Física","Acertijos matemáticos","Inventos e inventores","Dinosaurios","Aves","Mares y océanos","Plantas y árboles",
          "Fútbol mundial","Copa del Mundo","Juegos Olímpicos","Civilizaciones antiguas","Monumentos del mundo","Aviación y aviones","Informática y programación","Monedas y economía","Organizaciones internacionales","Poesía árabe",
          "Música e instrumentos","Cine mundial","Profetas y mensajeros","Hach y Umra"];

  P.pt = ["Islã","Alcorão e Sira","História","Língua árabe","Países e capitais","Adivinha o país","Bandeiras","Mapas","Geografia mundial","Ciências",
          "Animais","Desporto","Adivinha o jogador","Carros","Tecnologia","Videojogos","Cinema e anime","Pokémon","Ertugrul",
          "Çukur","Adivinha a série","Quem é o recitador","Canções do Golfo","Comida e cozinha","Celebridades árabes","Provérbios e enigmas","Os pescadores","Centros do Kuwait","Regiões do Kuwait",
          "Espaço e astronomia","Corpo humano","Química","Física","Enigmas matemáticos","Invenções e inventores","Dinossauros","Aves","Mares e oceanos","Plantas e árvores",
          "Futebol mundial","Copa do Mundo","Jogos Olímpicos","Civilizações antigas","Monumentos do mundo","Aviação e aviões","Informática e programação","Moedas e economia","Organizações internacionais","Poesia árabe",
          "Música e instrumentos","Cinema mundial","Profetas e mensageiros","Hajj e Umrah"];

  P.de = ["Islam","Koran & Sira","Geschichte","Arabische Sprache","Länder & Hauptstädte","Errate das Land","Flaggen","Karten","Weltgeografie","Wissenschaft",
          "Tiere","Sport","Errate den Spieler","Autos","Technik","Videospiele","Filme & Anime","Pokémon","Ertugrul",
          "Çukur","Errate die Serie","Wer rezitiert?","Golf-Lieder","Essen & Küche","Arabische Stars","Sprichwörter & Rätsel","Die Fischer","Kuwaits Malls","Kuwaits Regionen",
          "Weltraum & Astronomie","Menschlicher Körper","Chemie","Physik","Matherätsel","Erfindungen & Erfinder","Dinosaurier","Vögel","Meere & Ozeane","Pflanzen & Bäume",
          "Weltfußball","Weltmeisterschaft","Olympische Spiele","Alte Zivilisationen","Weltwahrzeichen","Luftfahrt & Flugzeuge","Informatik & Programmierung","Währungen & Wirtschaft","Internationale Organisationen","Arabische Dichtung",
          "Musik & Instrumente","Weltkino","Propheten & Gesandte","Hadsch & Umra"];

  P.it = ["Islam","Corano e Sira","Storia","Lingua araba","Paesi e capitali","Indovina il paese","Bandiere","Mappe","Geografia mondiale","Scienze",
          "Animali","Sport","Indovina il giocatore","Automobili","Tecnologia","Videogiochi","Film e anime","Pokémon","Ertugrul",
          "Çukur","Indovina la serie","Chi è il recitatore","Canzoni del Golfo","Cibo e cucina","Celebrità arabe","Proverbi e indovinelli","I pescatori","Centri del Kuwait","Regioni del Kuwait",
          "Spazio e astronomia","Corpo umano","Chimica","Fisica","Enigmi matematici","Invenzioni e inventori","Dinosauri","Uccelli","Mari e oceani","Piante e alberi",
          "Calcio mondiale","Coppa del Mondo","Giochi olimpici","Civiltà antiche","Monumenti del mondo","Aviazione e aerei","Informatica e programmazione","Valute ed economia","Organizzazioni internazionali","Poesia araba",
          "Musica e strumenti","Cinema mondiale","Profeti e messaggeri","Hajj e Umrah"];

  P.nl = ["Islam","Koran & Sira","Geschiedenis","Arabische taal","Landen & hoofdsteden","Raad het land","Vlaggen","Kaarten","Wereldaardrijkskunde","Wetenschap",
          "Dieren","Sport","Raad de speler","Auto's","Technologie","Videogames","Films & anime","Pokémon","Ertugrul",
          "Çukur","Raad de serie","Wie is de reciteerder","Golfliederen","Eten & koken","Arabische sterren","Spreekwoorden & raadsels","De vissers","Winkelcentra Koeweit","Regio's Koeweit",
          "Ruimte & sterrenkunde","Menselijk lichaam","Scheikunde","Natuurkunde","Wiskundige raadsels","Uitvindingen & uitvinders","Dinosauriërs","Vogels","Zeeën & oceanen","Planten & bomen",
          "Wereldvoetbal","Wereldbeker","Olympische Spelen","Oude beschavingen","Wereldmonumenten","Luchtvaart & vliegtuigen","Informatica & programmeren","Valuta's & economie","Internationale organisaties","Arabische poëzie",
          "Muziek & instrumenten","Wereldcinema","Profeten & boodschappers","Hadj & Oemra"];

  P.sv = ["Islam","Koranen & Sira","Historia","Arabiska språket","Länder & huvudstäder","Gissa landet","Flaggor","Kartor","Världsgeografi","Vetenskap",
          "Djur","Sport","Gissa spelaren","Bilar","Teknik","TV-spel","Film & anime","Pokémon","Ertugrul",
          "Çukur","Gissa serien","Vem reciterar?","Gulfsånger","Mat & matlagning","Arabiska kändisar","Ordspråk & gåtor","Fiskarna","Kuwaits gallerior","Kuwaits områden",
          "Rymden & astronomi","Människokroppen","Kemi","Fysik","Matematiska gåtor","Uppfinningar & uppfinnare","Dinosaurier","Fåglar","Hav & oceaner","Växter & träd",
          "Världsfotboll","VM i fotboll","Olympiska spelen","Forntida civilisationer","Världens landmärken","Flyg & flygplan","Datorer & programmering","Valutor & ekonomi","Internationella organisationer","Arabisk poesi",
          "Musik & instrument","Världsbio","Profeter & sändebud","Hajj & Umrah"];

  P.pl = ["Islam","Koran i Sira","Historia","Język arabski","Kraje i stolice","Zgadnij kraj","Flagi","Mapy","Geografia świata","Nauka",
          "Zwierzęta","Sport","Zgadnij piłkarza","Samochody","Technologia","Gry wideo","Filmy i anime","Pokémon","Ertugrul",
          "Çukur","Zgadnij serial","Kto recytuje?","Pieśni Zatoki","Jedzenie i kuchnia","Arabskie gwiazdy","Przysłowia i zagadki","Rybacy","Centra Kuwejtu","Regiony Kuwejtu",
          "Kosmos i astronomia","Ciało człowieka","Chemia","Fizyka","Zagadki matematyczne","Wynalazki i wynalazcy","Dinozaury","Ptaki","Morza i oceany","Rośliny i drzewa",
          "Piłka nożna świata","Mistrzostwa świata","Igrzyska olimpijskie","Starożytne cywilizacje","Zabytki świata","Lotnictwo i samoloty","Informatyka i programowanie","Waluty i gospodarka","Organizacje międzynarodowe","Poezja arabska",
          "Muzyka i instrumenty","Kino światowe","Prorocy i posłańcy","Hadżdż i Umra"];

  P.cs = ["Islám","Korán a Síra","Historie","Arabský jazyk","Země a hlavní města","Uhodni zemi","Vlajky","Mapy","Světová geografie","Věda",
          "Zvířata","Sport","Uhodni hráče","Auta","Technologie","Videohry","Filmy a anime","Pokémon","Ertugrul",
          "Çukur","Uhodni seriál","Kdo recituje?","Písně Zálivu","Jídlo a vaření","Arabské celebrity","Přísloví a hádanky","Rybáři","Obchodní centra Kuvajtu","Oblasti Kuvajtu",
          "Vesmír a astronomie","Lidské tělo","Chemie","Fyzika","Matematické hádanky","Vynálezy a vynálezci","Dinosauři","Ptáci","Moře a oceány","Rostliny a stromy",
          "Světový fotbal","Mistrovství světa","Olympijské hry","Starověké civilizace","Světové památky","Letectví a letadla","Počítače a programování","Měny a ekonomika","Mezinárodní organizace","Arabská poezie",
          "Hudba a nástroje","Světová kinematografie","Proroci a poslové","Hadždž a Umra"];

  P.ro = ["Islam","Coran și Sira","Istorie","Limba arabă","Țări și capitale","Ghicește țara","Steaguri","Hărți","Geografia lumii","Științe",
          "Animale","Sport","Ghicește jucătorul","Mașini","Tehnologie","Jocuri video","Filme și anime","Pokémon","Ertugrul",
          "Çukur","Ghicește serialul","Cine recită?","Cântece din Golf","Mâncare și bucătărie","Vedete arabe","Proverbe și ghicitori","Pescarii","Mall-uri din Kuweit","Zone din Kuweit",
          "Spațiu și astronomie","Corpul uman","Chimie","Fizică","Ghicitori matematice","Invenții și inventatori","Dinozauri","Păsări","Mări și oceane","Plante și copaci",
          "Fotbal mondial","Cupa Mondială","Jocurile Olimpice","Civilizații antice","Monumente ale lumii","Aviație și avioane","Calculatoare și programare","Monede și economie","Organizații internaționale","Poezie arabă",
          "Muzică și instrumente","Cinema mondial","Profeți și mesageri","Hajj și Umrah"];

  P.hu = ["Iszlám","Korán és Szíra","Történelem","Arab nyelv","Országok és fővárosok","Találd ki az országot","Zászlók","Térképek","Világföldrajz","Tudomány",
          "Állatok","Sport","Találd ki a játékost","Autók","Technológia","Videojátékok","Filmek és anime","Pokémon","Ertugrul",
          "Çukur","Találd ki a sorozatot","Ki recitál?","Öbölbeli dalok","Étel és konyha","Arab hírességek","Közmondások és rejtvények","A halászok","Kuvaiti bevásárlóközpontok","Kuvaiti régiók",
          "Világűr és csillagászat","Az emberi test","Kémia","Fizika","Matematikai rejtvények","Találmányok és feltalálók","Dinoszauruszok","Madarak","Tengerek és óceánok","Növények és fák",
          "Világfutball","Világbajnokság","Olimpiai játékok","Ősi civilizációk","A világ nevezetességei","Repülés és repülőgépek","Számítástechnika és programozás","Valuták és gazdaság","Nemzetközi szervezetek","Arab költészet",
          "Zene és hangszerek","Világmozi","Próféták és küldöttek","Haddzs és Umra"];

  P.el = ["Ισλάμ","Κοράνι & Σίρα","Ιστορία","Αραβική γλώσσα","Χώρες & πρωτεύουσες","Μάντεψε τη χώρα","Σημαίες","Χάρτες","Παγκόσμια γεωγραφία","Επιστήμη",
          "Ζώα","Αθλητισμός","Μάντεψε τον παίκτη","Αυτοκίνητα","Τεχνολογία","Βιντεοπαιχνίδια","Ταινίες & anime","Pokémon","Ερτουγρούλ",
          "Çukur","Μάντεψε τη σειρά","Ποιος απαγγέλλει;","Τραγούδια του Κόλπου","Φαγητό & μαγειρική","Άραβες διάσημοι","Παροιμίες & γρίφοι","Οι ψαράδες","Εμπορικά κέντρα Κουβέιτ","Περιοχές Κουβέιτ",
          "Διάστημα & αστρονομία","Ανθρώπινο σώμα","Χημεία","Φυσική","Μαθηματικοί γρίφοι","Εφευρέσεις & εφευρέτες","Δεινόσαυροι","Πουλιά","Θάλασσες & ωκεανοί","Φυτά & δέντρα",
          "Παγκόσμιο ποδόσφαιρο","Παγκόσμιο Κύπελλο","Ολυμπιακοί Αγώνες","Αρχαίοι πολιτισμοί","Παγκόσμια αξιοθέατα","Αεροπορία & αεροσκάφη","Υπολογιστές & προγραμματισμός","Νομίσματα & οικονομία","Διεθνείς οργανισμοί","Αραβική ποίηση",
          "Μουσική & όργανα","Παγκόσμιος κινηματογράφος","Προφήτες & απεσταλμένοι","Χατζ & Ούμρα"];

  P.ru = ["Ислам","Коран и Сира","История","Арабский язык","Страны и столицы","Угадай страну","Флаги","Карты","География мира","Наука",
          "Животные","Спорт","Угадай игрока","Автомобили","Технологии","Видеоигры","Кино и аниме","Покемон","Эртугрул",
          "Чукур","Угадай сериал","Кто чтец?","Песни Залива","Еда и кухня","Арабские знаменитости","Пословицы и загадки","Рыбаки","Торговые центры Кувейта","Районы Кувейта",
          "Космос и астрономия","Тело человека","Химия","Физика","Математические загадки","Изобретения и изобретатели","Динозавры","Птицы","Моря и океаны","Растения и деревья",
          "Мировой футбол","Чемпионат мира","Олимпийские игры","Древние цивилизации","Достопримечательности мира","Авиация и самолёты","Компьютеры и программирование","Валюты и экономика","Международные организации","Арабская поэзия",
          "Музыка и инструменты","Мировое кино","Пророки и посланники","Хадж и умра"];

  P.uk = ["Іслам","Коран і Сіра","Історія","Арабська мова","Країни та столиці","Вгадай країну","Прапори","Карти","Географія світу","Наука",
          "Тварини","Спорт","Вгадай гравця","Автомобілі","Технології","Відеоігри","Кіно та аніме","Покемон","Ертугрул",
          "Чукур","Вгадай серіал","Хто читець?","Пісні Затоки","Їжа та кухня","Арабські знаменитості","Прислів'я та загадки","Рибалки","Торгові центри Кувейту","Райони Кувейту",
          "Космос і астрономія","Тіло людини","Хімія","Фізика","Математичні загадки","Винаходи та винахідники","Динозаври","Птахи","Моря та океани","Рослини та дерева",
          "Світовий футбол","Чемпіонат світу","Олімпійські ігри","Давні цивілізації","Пам'ятки світу","Авіація та літаки","Комп'ютери та програмування","Валюти та економіка","Міжнародні організації","Арабська поезія",
          "Музика та інструменти","Світове кіно","Пророки та посланці","Хадж і умра"];

  P.tr = ["İslam","Kur'an ve Siyer","Tarih","Arap dili","Ülkeler ve başkentler","Ülkeyi tahmin et","Bayraklar","Haritalar","Dünya coğrafyası","Bilim",
          "Hayvanlar","Spor","Oyuncuyu tahmin et","Arabalar","Teknoloji","Video oyunları","Filmler ve anime","Pokémon","Ertuğrul",
          "Çukur","Diziyi tahmin et","Kim okuyor?","Körfez şarkıları","Yemek ve mutfak","Arap ünlüler","Atasözleri ve bilmeceler","Balıkçılar","Kuveyt AVM'leri","Kuveyt bölgeleri",
          "Uzay ve astronomi","İnsan vücudu","Kimya","Fizik","Matematik bulmacaları","İcatlar ve mucitler","Dinozorlar","Kuşlar","Denizler ve okyanuslar","Bitkiler ve ağaçlar",
          "Dünya futbolu","Dünya Kupası","Olimpiyat Oyunları","Antik uygarlıklar","Dünya simgeleri","Havacılık ve uçaklar","Bilgisayar ve programlama","Para birimleri ve ekonomi","Uluslararası kuruluşlar","Arap şiiri",
          "Müzik ve enstrümanlar","Dünya sineması","Peygamberler ve elçiler","Hac ve Umre"];

  P.az = ["İslam","Quran və Siyər","Tarix","Ərəb dili","Ölkələr və paytaxtlar","Ölkəni tap","Bayraqlar","Xəritələr","Dünya coğrafiyası","Elm",
          "Heyvanlar","İdman","Oyunçunu tap","Avtomobillər","Texnologiya","Video oyunlar","Filmlər və anime","Pokémon","Ərtoğrul",
          "Çukur","Seriali tap","Kim oxuyur?","Körfəz mahnıları","Yemək və mətbəx","Ərəb məşhurları","Atalar sözləri və tapmacalar","Balıqçılar","Küveyt ticarət mərkəzləri","Küveyt bölgələri",
          "Kosmos və astronomiya","İnsan bədəni","Kimya","Fizika","Riyazi tapmacalar","İxtiralar və ixtiraçılar","Dinozavrlar","Quşlar","Dənizlər və okeanlar","Bitkilər və ağaclar",
          "Dünya futbolu","Dünya Kuboku","Olimpiya Oyunları","Qədim sivilizasiyalar","Dünya abidələri","Aviasiya və təyyarələr","Kompüter və proqramlaşdırma","Valyutalar və iqtisadiyyat","Beynəlxalq təşkilatlar","Ərəb şeiri",
          "Musiqi və alətlər","Dünya kinosu","Peyğəmbərlər və elçilər","Həcc və Ümrə"];

  P.he = ["אסלאם","קוראן וסירה","היסטוריה","השפה הערבית","מדינות ובירות","נחש את המדינה","דגלים","מפות","גאוגרפיה עולמית","מדע",
          "בעלי חיים","ספורט","נחש את השחקן","מכוניות","טכנולוגיה","משחקי וידאו","סרטים ואנימה","פוקימון","ארטואורול",
          "צ'וקור","נחש את הסדרה","מי הקורא?","שירי המפרץ","אוכל ובישול","סלבריטאים ערבים","פתגמים וחידות","הדייגים","קניונים בכווית","אזורי כווית",
          "חלל ואסטרונומיה","גוף האדם","כימיה","פיזיקה","חידות מתמטיות","המצאות וממציאים","דינוזאורים","ציפורים","ימים ואוקיינוסים","צמחים ועצים",
          "כדורגל עולמי","גביע העולם","המשחקים האולימפיים","תרבויות עתיקות","אתרי עולם","תעופה ומטוסים","מחשבים ותכנות","מטבעות וכלכלה","ארגונים בינלאומיים","שירה ערבית",
          "מוזיקה וכלי נגינה","קולנוע עולמי","נביאים ושליחים","חג' ועומרה"];

  P.fa = ["اسلامی","قرآن و سیره","تاریخ","زبان عربی","کشورها و پایتخت‌ها","کشور را حدس بزن","پرچم‌ها","نقشه‌ها","جغرافیای جهان","علوم",
          "جانوران","ورزش","بازیکن را حدس بزن","خودروها","فناوری","بازی‌های ویدیویی","فیلم و انیمه","پوکمون","ارطغرل",
          "چوکور","سریال را حدس بزن","قاری کیست؟","ترانه‌های خلیج","خوراک و آشپزی","چهره‌های عرب","ضرب‌المثل و معما","ماهیگیران","مراکز خرید کویت","مناطق کویت",
          "فضا و ستاره‌شناسی","بدن انسان","شیمی","فیزیک","معماهای ریاضی","اختراعات و مخترعان","دایناسورها","پرندگان","دریاها و اقیانوس‌ها","گیاهان و درختان",
          "فوتبال جهانی","جام جهانی","بازی‌های المپیک","تمدن‌های باستانی","نشانه‌های جهان","هوانوردی و هواپیما","رایانه و برنامه‌نویسی","ارزها و اقتصاد","سازمان‌های بین‌المللی","شعر عربی",
          "موسیقی و سازها","سینمای جهان","پیامبران و رسولان","حج و عمره"];

  P.ku = ["Îslamî","Quran û Sîre","Dîrok","Zimanê erebî","Welat û paytext","Welêt texmîn bike","Al","Nexşe","Erdnîgariya cîhanê","Zanist",
          "Ajal","Werzîş","Lîstikvan texmîn bike","Otomobîl","Teknolojî","Lîstikên vîdyoyê","Fîlm û anime","Pokémon","Ertuğrul",
          "Çukur","Rêzefîlm texmîn bike","Kî dixwîne?","Stranên Kendavê","Xwarin û çêjxane","Navdarên ereb","Gotinên pêşiyan û mamik","Masîgir","Navendên Kuweytê","Herêmên Kuweytê",
          "Feza û stêrnasî","Laşê mirov","Kîmya","Fîzîk","Mamikên matematîkê","Îcad û îcadkar","Dînozor","Çûk","Derya û okyanûs","Riwek û dar",
          "Futbola cîhanê","Kûpaya Cîhanê","Lîstikên Olîmpîk","Şaristaniyên kevn","Nîşanên cîhanê","Firrîn û firoke","Komputer û bernamesazî","Diravî û aborî","Rêxistinên navneteweyî","Helbesta erebî",
          "Muzîk û amûr","Sînemaya cîhanê","Pêxember û peyamber","Hec û Umre"];

  P.ur = ["اسلامیات","قرآن و سیرت","تاریخ","عربی زبان","ممالک اور دارالحکومت","ملک پہچانو","پرچم","نقشے","دنیا کا جغرافیہ","سائنس",
          "جانور","کھیل","کھلاڑی پہچانو","گاڑیاں","ٹیکنالوجی","ویڈیو گیمز","فلمیں اور اینیمی","پوکیمون","ارطغرل",
          "چوکور","ڈرامہ پہچانو","قاری کون ہے؟","خلیجی گیت","کھانا اور پکوان","عرب مشہور شخصیات","ضرب الامثال اور پہیلیاں","ماہی گیر","کویت کے مالز","کویت کے علاقے",
          "خلا اور فلکیات","انسانی جسم","کیمیا","طبیعیات","ریاضی کی پہیلیاں","ایجادات اور موجد","ڈائناسور","پرندے","سمندر اور بحر","پودے اور درخت",
          "عالمی فٹ بال","ورلڈ کپ","اولمپک کھیل","قدیم تہذیبیں","دنیا کی نشانیاں","ہوابازی اور طیارے","کمپیوٹر اور پروگرامنگ","کرنسی اور معیشت","بین الاقوامی تنظیمیں","عربی شاعری",
          "موسیقی اور آلات","عالمی سینما","انبیاء و رسل","حج و عمرہ"];

  P.ps = ["اسلامي","قرآن او سیرت","تاریخ","عربي ژبه","هېوادونه او پلازمېنې","هېواد اټکل کړه","بیرغونه","نقشې","نړیواله جغرافیه","ساینس",
          "څاروي","سپورت","لوبغاړی اټکل کړه","موټرې","ټکنالوژي","ویډیو لوبې","فلمونه او انیمي","پوکیمون","ارطغرل",
          "چوکور","لړۍ اټکل کړه","قاري څوک دی؟","د خلیج سندرې","خواړه او پخلنځی","عرب مشهور کسان","متلونه او معماګانې","کبان نیوونکي","د کویت مارکېټونه","د کویت سیمې",
          "فضا او ستورپوهنه","د انسان بدن","کیمیا","فزیک","ریاضي معماګانې","اختراعات او مخترعین","ډایناسورونه","مرغان","سمندرونه او بحرونه","بوټي او ونې",
          "نړیواله فوټبال","نړیوال جام","المپیک لوبې","پخوانۍ تمدنونه","د نړۍ نښې","الوتنه او الوتکې","کمپیوټر او پروګرامنګ","اسعار او اقتصاد","نړیوال سازمانونه","عربي شعر",
          "موسیقي او الات","نړیواله سینما","پیغمبران او رسولان","حج او عمره"];

  P.hi = ["इस्लामी","क़ुरआन और सीरत","इतिहास","अरबी भाषा","देश और राजधानियाँ","देश पहचानो","झंडे","नक़्शे","विश्व भूगोल","विज्ञान",
          "जानवर","खेल","खिलाड़ी पहचानो","कारें","प्रौद्योगिकी","वीडियो गेम","फ़िल्में और एनिमे","पोकेमॉन","एर्तुग्रुल",
          "चुकुर","धारावाहिक पहचानो","पाठ करने वाला कौन?","खाड़ी के गीत","खाना और रसोई","अरब हस्तियाँ","कहावतें और पहेलियाँ","मछुआरे","कुवैत के मॉल","कुवैत के क्षेत्र",
          "अंतरिक्ष और खगोल","मानव शरीर","रसायन विज्ञान","भौतिकी","गणित की पहेलियाँ","आविष्कार और आविष्कारक","डायनासोर","पक्षी","समुद्र और महासागर","पौधे और पेड़",
          "विश्व फ़ुटबॉल","विश्व कप","ओलंपिक खेल","प्राचीन सभ्यताएँ","विश्व के स्मारक","विमानन और विमान","कंप्यूटर और प्रोग्रामिंग","मुद्राएँ और अर्थव्यवस्था","अंतरराष्ट्रीय संगठन","अरबी कविता",
          "संगीत और वाद्य यंत्र","विश्व सिनेमा","पैगंबर और रसूल","हज और उमरा"];

  P.bn = ["ইসলামি","কুরআন ও সীরাত","ইতিহাস","আরবি ভাষা","দেশ ও রাজধানী","দেশ অনুমান করুন","পতাকা","মানচিত্র","বিশ্ব ভূগোল","বিজ্ঞান",
          "প্রাণী","খেলাধুলা","খেলোয়াড় অনুমান করুন","গাড়ি","প্রযুক্তি","ভিডিও গেম","চলচ্চিত্র ও অ্যানিমে","পোকেমন","আরতুগ্রুল",
          "চুকুর","ধারাবাহিক অনুমান করুন","কে তিলাওয়াত করছেন?","উপসাগরীয় গান","খাবার ও রান্না","আরব তারকা","প্রবাদ ও ধাঁধা","জেলেরা","কুয়েতের মল","কুয়েতের অঞ্চল",
          "মহাকাশ ও জ্যোতির্বিজ্ঞান","মানবদেহ","রসায়ন","পদার্থবিজ্ঞান","গণিতের ধাঁধা","আবিষ্কার ও আবিষ্কারক","ডাইনোসর","পাখি","সাগর ও মহাসাগর","উদ্ভিদ ও গাছ",
          "বিশ্ব ফুটবল","বিশ্বকাপ","অলিম্পিক গেমস","প্রাচীন সভ্যতা","বিশ্বের নিদর্শন","বিমান চলাচল ও উড়োজাহাজ","কম্পিউটার ও প্রোগ্রামিং","মুদ্রা ও অর্থনীতি","আন্তর্জাতিক সংস্থা","আরবি কবিতা",
          "সংগীত ও বাদ্যযন্ত্র","বিশ্ব চলচ্চিত্র","নবী ও রাসূল","হজ ও উমরাহ"];

  P.ta = ["இஸ்லாமியம்","குர்ஆனும் சீராவும்","வரலாறு","அரபு மொழி","நாடுகளும் தலைநகரங்களும்","நாட்டை யூகி","கொடிகள்","வரைபடங்கள்","உலக புவியியல்","அறிவியல்",
          "விலங்குகள்","விளையாட்டு","வீரரை யூகி","கார்கள்","தொழில்நுட்பம்","வீடியோ கேம்கள்","திரைப்படங்களும் அனிமேயும்","பொகிமான்","எர்துருல்",
          "சுகுர்","தொடரை யூகி","ஓதுபவர் யார்?","வளைகுடா பாடல்கள்","உணவும் சமையலும்","அரபு பிரபலங்கள்","பழமொழிகளும் புதிர்களும்","மீனவர்கள்","குவைத் வணிக வளாகங்கள்","குவைத் பகுதிகள்",
          "விண்வெளியும் வானியலும்","மனித உடல்","வேதியியல்","இயற்பியல்","கணிதப் புதிர்கள்","கண்டுபிடிப்புகளும் கண்டுபிடிப்பாளர்களும்","டைனோசர்கள்","பறவைகள்","கடல்களும் பெருங்கடல்களும்","தாவரங்களும் மரங்களும்",
          "உலகக் கால்பந்து","உலகக் கோப்பை","ஒலிம்பிக் விளையாட்டு","பண்டைய நாகரிகங்கள்","உலக அடையாளங்கள்","விமானப் போக்குவரத்து","கணினியும் நிரலாக்கமும்","நாணயங்களும் பொருளாதாரமும்","சர்வதேச அமைப்புகள்","அரபுக் கவிதை",
          "இசையும் கருவிகளும்","உலக சினிமா","நபிமார்களும் தூதர்களும்","ஹஜ்ஜும் உம்ராவும்"];

  P.id = ["Islami","Al-Qur'an & Sirah","Sejarah","Bahasa Arab","Negara & ibu kota","Tebak negaranya","Bendera","Peta","Geografi dunia","Sains",
          "Hewan","Olahraga","Tebak pemainnya","Mobil","Teknologi","Gim video","Film & anime","Pokémon","Ertugrul",
          "Çukur","Tebak serialnya","Siapa qarinya?","Lagu Teluk","Makanan & masakan","Selebritas Arab","Peribahasa & teka-teki","Para nelayan","Mal Kuwait","Wilayah Kuwait",
          "Antariksa & astronomi","Tubuh manusia","Kimia","Fisika","Teka-teki matematika","Penemuan & penemu","Dinosaurus","Burung","Laut & samudra","Tumbuhan & pohon",
          "Sepak bola dunia","Piala Dunia","Olimpiade","Peradaban kuno","Landmark dunia","Penerbangan & pesawat","Komputer & pemrograman","Mata uang & ekonomi","Organisasi internasional","Puisi Arab",
          "Musik & alat musik","Sinema dunia","Nabi & rasul","Haji & Umrah"];

  P.ms = ["Islami","Al-Quran & Sirah","Sejarah","Bahasa Arab","Negara & ibu negara","Teka negara","Bendera","Peta","Geografi dunia","Sains",
          "Haiwan","Sukan","Teka pemain","Kereta","Teknologi","Permainan video","Filem & anime","Pokémon","Ertugrul",
          "Çukur","Teka siri","Siapa qarinya?","Lagu Teluk","Makanan & masakan","Selebriti Arab","Peribahasa & teka-teki","Para nelayan","Pusat beli-belah Kuwait","Kawasan Kuwait",
          "Angkasa & astronomi","Tubuh manusia","Kimia","Fizik","Teka-teki matematik","Ciptaan & pencipta","Dinosaur","Burung","Laut & lautan","Tumbuhan & pokok",
          "Bola sepak dunia","Piala Dunia","Sukan Olimpik","Tamadun purba","Mercu tanda dunia","Penerbangan & pesawat","Komputer & pengaturcaraan","Mata wang & ekonomi","Pertubuhan antarabangsa","Puisi Arab",
          "Muzik & alat muzik","Sinema dunia","Nabi & rasul","Haji & Umrah"];

  P.zh = ["伊斯兰","古兰经与先知传","历史","阿拉伯语","国家与首都","猜国家","旗帜","地图","世界地理","科学",
          "动物","体育","猜球员","汽车","科技","电子游戏","电影与动漫","宝可梦","埃尔图鲁尔",
          "深渊","猜剧集","诵读者是谁","海湾歌曲","美食与烹饪","阿拉伯名人","谚语与谜语","渔夫","科威特商场","科威特地区",
          "太空与天文","人体","化学","物理","数学谜题","发明与发明家","恐龙","鸟类","海洋","植物与树木",
          "世界足球","世界杯","奥运会","古代文明","世界地标","航空与飞机","计算机与编程","货币与经济","国际组织","阿拉伯诗歌",
          "音乐与乐器","世界电影","先知与使者","朝觐与副朝"];

  P.ja = ["イスラム","クルアーンとシーラ","歴史","アラビア語","国と首都","国を当てよう","国旗","地図","世界地理","科学",
          "動物","スポーツ","選手を当てよう","車","テクノロジー","ビデオゲーム","映画とアニメ","ポケモン","エルトゥールル",
          "チュクル","ドラマを当てよう","誦む人は誰？","湾岸の歌","food と料理","アラブの著名人","ことわざとなぞなぞ","漁師たち","クウェートのモール","クウェートの地域",
          "宇宙と天文学","人体","化学","物理","数学パズル","発明と発明家","恐竜","鳥","海と大洋","植物と樹木",
          "世界のサッカー","ワールドカップ","オリンピック","古代文明","世界の名所","航空と飛行機","コンピューターとプログラミング","通貨と経済","国際機関","アラビア詩",
          "音楽と楽器","世界映画","預言者と使徒","ハッジとウムラ"];

  P.ko = ["이슬람","꾸란과 시라","역사","아랍어","나라와 수도","나라 맞히기","국기","지도","세계 지리","과학",
          "동물","스포츠","선수 맞히기","자동차","기술","비디오 게임","영화와 애니메","포켓몬","에르투룰",
          "추쿠르","드라마 맞히기","낭송자는 누구","걸프 노래","음식과 요리","아랍 유명인","속담과 수수께끼","어부들","쿠웨이트 쇼핑몰","쿠웨이트 지역",
          "우주와 천문학","인체","화학","물리학","수학 퍼즐","발명과 발명가","공룡","조류","바다와 대양","식물과 나무",
          "세계 축구","월드컵","올림픽","고대 문명","세계의 명소","항공과 항공기","컴퓨터와 프로그래밍","통화와 경제","국제 기구","아랍 시",
          "음악과 악기","세계 영화","예언자와 사도","하지와 움라"];

  P.th = ["อิสลาม","อัลกุรอานและชีวประวัติ","ประวัติศาสตร์","ภาษาอาหรับ","ประเทศและเมืองหลวง","ทายชื่อประเทศ","ธงชาติ","แผนที่","ภูมิศาสตร์โลก","วิทยาศาสตร์",
          "สัตว์","กีฬา","ทายชื่อนักเตะ","รถยนต์","เทคโนโลยี","วิดีโอเกม","ภาพยนตร์และอนิเมะ","โปเกมอน","แอร์ทูรูล",
          "ชูคูร์","ทายชื่อซีรีส์","ใครคือผู้อ่าน","เพลงอ่าวอาหรับ","อาหารและการทำอาหาร","คนดังอาหรับ","สุภาษิตและปริศนา","ชาวประมง","ห้างในคูเวต","พื้นที่ในคูเวต",
          "อวกาศและดาราศาสตร์","ร่างกายมนุษย์","เคมี","ฟิสิกส์","ปริศนาคณิตศาสตร์","สิ่งประดิษฐ์และนักประดิษฐ์","ไดโนเสาร์","นก","ทะเลและมหาสมุทร","พืชและต้นไม้",
          "ฟุตบอลโลก","ฟุตบอลชิงแชมป์โลก","กีฬาโอลิมปิก","อารยธรรมโบราณ","สถานที่สำคัญของโลก","การบินและเครื่องบิน","คอมพิวเตอร์และการเขียนโปรแกรม","สกุลเงินและเศรษฐกิจ","องค์กรระหว่างประเทศ","กวีนิพนธ์อาหรับ",
          "ดนตรีและเครื่องดนตรี","ภาพยนตร์โลก","ศาสดาและผู้ส่งสาร","ฮัจญ์และอุมเราะห์"];

  P.vi = ["Hồi giáo","Kinh Qur'an & Sira","Lịch sử","Tiếng Ả Rập","Quốc gia & thủ đô","Đoán tên nước","Quốc kỳ","Bản đồ","Địa lý thế giới","Khoa học",
          "Động vật","Thể thao","Đoán cầu thủ","Ô tô","Công nghệ","Trò chơi điện tử","Phim & anime","Pokémon","Ertugrul",
          "Çukur","Đoán tên phim bộ","Ai là người xướng đọc","Bài hát vùng Vịnh","Ẩm thực & nấu ăn","Người nổi tiếng Ả Rập","Tục ngữ & câu đố","Những ngư dân","Trung tâm mua sắm Kuwait","Các vùng Kuwait",
          "Vũ trụ & thiên văn","Cơ thể người","Hóa học","Vật lý","Câu đố toán học","Phát minh & nhà phát minh","Khủng long","Chim","Biển & đại dương","Thực vật & cây cối",
          "Bóng đá thế giới","World Cup","Thế vận hội","Nền văn minh cổ đại","Danh thắng thế giới","Hàng không & máy bay","Máy tính & lập trình","Tiền tệ & kinh tế","Tổ chức quốc tế","Thơ Ả Rập",
          "Âm nhạc & nhạc cụ","Điện ảnh thế giới","Các nhà tiên tri & sứ giả","Hajj & Umrah"];

  P.tl = ["Islamiko","Qur'an at Sira","Kasaysayan","Wikang Arabe","Mga bansa at kabisera","Hulaan ang bansa","Mga watawat","Mga mapa","Heograpiya ng mundo","Agham",
          "Mga hayop","Isports","Hulaan ang manlalaro","Mga sasakyan","Teknolohiya","Mga video game","Pelikula at anime","Pokémon","Ertugrul",
          "Çukur","Hulaan ang serye","Sino ang bumibigkas?","Mga awit ng Gulpo","Pagkain at pagluluto","Mga sikat na Arabo","Mga salawikain at bugtong","Mga mangingisda","Mga mall sa Kuwait","Mga lugar sa Kuwait",
          "Kalawakan at astronomiya","Katawan ng tao","Kimika","Pisika","Mga palaisipang matematika","Mga imbensyon at imbentor","Mga dinosaur","Mga ibon","Mga dagat at karagatan","Mga halaman at puno",
          "Pandaigdigang putbol","World Cup","Palarong Olimpiko","Mga sinaunang sibilisasyon","Mga palatandaan ng mundo","Abyasyon at eroplano","Kompyuter at programming","Salapi at ekonomiya","Mga internasyonal na organisasyon","Tulang Arabe",
          "Musika at instrumento","Sine ng mundo","Mga propeta at sugo","Hajj at Umrah"];

  P.sw = ["Uislamu","Qur'ani na Sira","Historia","Lugha ya Kiarabu","Nchi na miji mikuu","Bashiri nchi","Bendera","Ramani","Jiografia ya dunia","Sayansi",
          "Wanyama","Michezo","Bashiri mchezaji","Magari","Teknolojia","Michezo ya video","Filamu na anime","Pokémon","Ertugrul",
          "Çukur","Bashiri mfululizo","Msomaji ni nani?","Nyimbo za Ghuba","Chakula na upishi","Mashuhuri wa Kiarabu","Methali na vitendawili","Wavuvi","Maduka ya Kuwait","Maeneo ya Kuwait",
          "Anga na unajimu","Mwili wa binadamu","Kemia","Fizikia","Vitendawili vya hisabati","Uvumbuzi na wavumbuzi","Dinosauri","Ndege","Bahari na oshani","Mimea na miti",
          "Soka la dunia","Kombe la Dunia","Michezo ya Olimpiki","Ustaarabu wa kale","Alama za dunia","Usafiri wa anga na ndege","Kompyuta na programu","Sarafu na uchumi","Mashirika ya kimataifa","Ushairi wa Kiarabu",
          "Muziki na ala","Sinema ya dunia","Mitume na wajumbe","Hija na Umra"];

  P.ha = ["Musulunci","Alƙur'ani da Sira","Tarihi","Harshen Larabci","Ƙasashe da manyan birane","Zaci ƙasar","Tutoci","Taswirori","Yanayin ƙasa na duniya","Kimiyya",
          "Dabbobi","Wasanni","Zaci ɗan wasa","Motoci","Fasaha","Wasannin bidiyo","Fina-finai da anime","Pokémon","Ertugrul",
          "Çukur","Zaci jerin wasan kwaikwayo","Wanene mai karatu?","Waƙoƙin Tekun Fasha","Abinci da girki","Shahararrun Larabawa","Karin magana da kacici-kacici","Masunta","Cibiyoyin sayayya na Kuwait","Yankunan Kuwait",
          "Sararin samaniya da ilmin taurari","Jikin ɗan adam","Sinadarai","Kimiyyar lissafi","Kacici-kacici na lissafi","Ƙirƙira da masu ƙirƙira","Dinosaur","Tsuntsaye","Tekuna","Tsirrai da bishiyoyi",
          "Ƙwallon ƙafa ta duniya","Kofin Duniya","Wasannin Olympics","Wayewar kai na dā","Alamomin duniya","Jiragen sama","Kwamfuta da shirye-shirye","Kuɗi da tattalin arziki","Ƙungiyoyin ƙasa da ƙasa","Waƙar Larabci",
          "Kiɗa da kayan kiɗa","Fina-finan duniya","Annabawa da manzanni","Hajji da Umra"];

  P.so = ["Islaam","Quraanka iyo Siirada","Taariikh","Luqadda Carabiga","Dalal iyo caasimado","Malee dalka","Calammo","Khariidado","Juqraafiga adduunka","Sayniska",
          "Xayawaanka","Isboortiga","Malee ciyaaryahanka","Baabuurta","Tignoolajiyada","Ciyaaraha fiidiyowga","Filimo iyo anime","Pokémon","Ertugrul",
          "Çukur","Malee taxanaha","Yaa akhrinaya?","Heesaha Gacanka","Cunto iyo karis","Caanka Carabta","Maahmaahyo iyo halxidhaale","Kalluumeystayaasha","Suuqyada Kuwait","Degmooyinka Kuwait",
          "Hawada sare iyo xiddigiska","Jidhka bini'aadamka","Kiimikada","Fiisigiska","Halxidhaalayaal xisaabeed","Hal-abuur iyo hal-abuurayaal","Dinasoorada","Shimbiraha","Badaha iyo baddaha waaweyn","Dhirta iyo geedaha",
          "Kubadda cagta adduunka","Koobka Adduunka","Ciyaaraha Olombikada","Ilbaxnimooyinkii hore","Calaamadaha adduunka","Duulista iyo diyaaradaha","Kombuyuutar iyo barnaamij","Lacagaha iyo dhaqaalaha","Ururrada caalamiga","Gabayga Carabiga",
          "Muusiga iyo qalabka","Filimada adduunka","Nabiyada iyo rasuulada","Xajka iyo Cumrada"];

  P.am = ["እስላማዊ","ቁርአንና ሲራ","ታሪክ","የአረብኛ ቋንቋ","አገራትና ዋና ከተሞች","አገሩን ገምት","ባንዲራዎች","ካርታዎች","የዓለም ጂኦግራፊ","ሳይንስ",
          "እንስሳት","ስፖርት","ተጫዋቹን ገምት","መኪኖች","ቴክኖሎጂ","የቪዲዮ ጨዋታዎች","ፊልሞችና አኒሜ","ፖኬሞን","ኤርቱግሩል",
          "ቹኩር","ተከታታዩን ገምት","አንባቢው ማን ነው?","የባሕረ ሰላጤ ዘፈኖች","ምግብና ማብሰያ","የአረብ ታዋቂዎች","ምሳሌዎችና እንቆቅልሾች","ዓሣ አጥማጆች","የኩዌት ገበያዎች","የኩዌት አካባቢዎች",
          "ጠፈርና ሥነ ፈለክ","የሰው አካል","ኬሚስትሪ","ፊዚክስ","የሒሳብ እንቆቅልሾች","ፈጠራዎችና ፈጣሪዎች","ዳይኖሰሮች","ወፎች","ባሕሮችና ውቅያኖሶች","ተክሎችና ዛፎች",
          "የዓለም እግር ኳስ","የዓለም ዋንጫ","ኦሊምፒክ ጨዋታዎች","ጥንታዊ ሥልጣኔዎች","የዓለም ምልክቶች","አቪዬሽንና አውሮፕላኖች","ኮምፒውተርና ፕሮግራሚንግ","ገንዘቦችና ኢኮኖሚ","ዓለም አቀፍ ድርጅቶች","የአረብኛ ግጥም",
          "ሙዚቃና መሣሪያዎች","የዓለም ሲኒማ","ነቢያትና መልእክተኞች","ሐጅና ዑምራ"];

  /* ============================================================
     الدفعة الثالثة من الفئات (11 فئة)
     ============================================================ */
  var C3 = [
    /* 0 */ "دراغون بول",
    /* 1 */ "المحقق كونان",
    /* 2 */ "سترينجر ثينجز",
    /* 3 */ "لورد أوف ذا رينغز",
    /* 4 */ "المملكة العربية السعودية",
    /* 5 */ "البحرين",
    /* 6 */ "الإمارات",
    /* 7 */ "عُمان",
    /* 8 */ "تركيا",
    /* 9 */ "مناطق تركيا",
    /*10 */ "دول الخليج"
  ];

  var P3 = {};

  P3.en = ["Dragon Ball","Detective Conan","Stranger Things","The Lord of the Rings","Saudi Arabia","Bahrain","United Arab Emirates","Oman","Türkiye","Regions of Türkiye","Gulf States"];
  P3.fr = ["Dragon Ball","Détective Conan","Stranger Things","Le Seigneur des anneaux","Arabie saoudite","Bahreïn","Émirats arabes unis","Oman","Turquie","Régions de Turquie","Pays du Golfe"];
  P3.es = ["Dragon Ball","Detective Conan","Stranger Things","El Señor de los Anillos","Arabia Saudí","Baréin","Emiratos Árabes Unidos","Omán","Turquía","Regiones de Turquía","Países del Golfo"];
  P3.pt = ["Dragon Ball","Detetive Conan","Stranger Things","O Senhor dos Anéis","Arábia Saudita","Barém","Emirados Árabes Unidos","Omã","Turquia","Regiões da Turquia","Países do Golfo"];
  P3.de = ["Dragon Ball","Detektiv Conan","Stranger Things","Der Herr der Ringe","Saudi-Arabien","Bahrain","Vereinigte Arabische Emirate","Oman","Türkei","Regionen der Türkei","Golfstaaten"];
  P3.it = ["Dragon Ball","Detective Conan","Stranger Things","Il Signore degli Anelli","Arabia Saudita","Bahrein","Emirati Arabi Uniti","Oman","Turchia","Regioni della Turchia","Paesi del Golfo"];
  P3.nl = ["Dragon Ball","Detective Conan","Stranger Things","In de ban van de ring","Saoedi-Arabië","Bahrein","Verenigde Arabische Emiraten","Oman","Turkije","Regio's van Turkije","Golfstaten"];
  P3.sv = ["Dragon Ball","Detektiven Conan","Stranger Things","Sagan om ringen","Saudiarabien","Bahrain","Förenade Arabemiraten","Oman","Turkiet","Turkiets regioner","Gulfstaterna"];
  P3.pl = ["Dragon Ball","Detektyw Conan","Stranger Things","Władca Pierścieni","Arabia Saudyjska","Bahrajn","Zjednoczone Emiraty Arabskie","Oman","Turcja","Regiony Turcji","Państwa Zatoki"];
  P3.cs = ["Dragon Ball","Detektiv Conan","Stranger Things","Pán prstenů","Saúdská Arábie","Bahrajn","Spojené arabské emiráty","Omán","Turecko","Regiony Turecka","Státy Zálivu"];
  P3.ro = ["Dragon Ball","Detectivul Conan","Stranger Things","Stăpânul Inelelor","Arabia Saudită","Bahrain","Emiratele Arabe Unite","Oman","Turcia","Regiunile Turciei","Statele din Golf"];
  P3.hu = ["Dragon Ball","Conan, a detektív","Stranger Things","A Gyűrűk Ura","Szaúd-Arábia","Bahrein","Egyesült Arab Emírségek","Omán","Törökország","Törökország régiói","Öböl-menti államok"];
  P3.el = ["Dragon Ball","Ντετέκτιβ Κόναν","Stranger Things","Ο Άρχοντας των Δαχτυλιδιών","Σαουδική Αραβία","Μπαχρέιν","Ηνωμένα Αραβικά Εμιράτα","Ομάν","Τουρκία","Περιφέρειες της Τουρκίας","Χώρες του Κόλπου"];
  P3.ru = ["Драконий жемчуг","Детектив Конан","Очень странные дела","Властелин колец","Саудовская Аравия","Бахрейн","ОАЭ","Оман","Турция","Регионы Турции","Страны Залива"];
  P3.uk = ["Драконовий перл","Детектив Конан","Дивні дива","Володар перснів","Саудівська Аравія","Бахрейн","ОАЕ","Оман","Туреччина","Регіони Туреччини","Країни Затоки"];
  P3.tr = ["Dragon Ball","Dedektif Conan","Stranger Things","Yüzüklerin Efendisi","Suudi Arabistan","Bahreyn","Birleşik Arap Emirlikleri","Umman","Türkiye","Türkiye'nin bölgeleri","Körfez ülkeleri"];
  P3.az = ["Dragon Ball","Dedektiv Konan","Stranger Things","Üzüklərin Hökmdarı","Səudiyyə Ərəbistanı","Bəhreyn","Birləşmiş Ərəb Əmirlikləri","Oman","Türkiyə","Türkiyənin bölgələri","Körfəz ölkələri"];
  P3.fa = ["دراگون بال","کارآگاه کونان","چیزهای عجیب","ارباب حلقه‌ها","عربستان سعودی","بحرین","امارات متحدهٔ عربی","عمان","ترکیه","مناطق ترکیه","کشورهای خلیج"];
  P3.ku = ["Dragon Ball","Detektîv Conan","Stranger Things","Xwedanê Gustîlkan","Erebistana Siûdî","Bahreyn","Mîrektiyên Ereb ên Yekbûyî","Uman","Tirkiye","Herêmên Tirkiyeyê","Welatên Kendavê"];
  P3.ur = ["ڈریگن بال","جاسوس کونان","سٹرینجر تھنگز","لارڈ آف دی رنگز","سعودی عرب","بحرین","متحدہ عرب امارات","عمان","ترکیہ","ترکیہ کے علاقے","خلیجی ممالک"];
  P3.ps = ["ډریګن بال","پلټونکی کونان","سټرینجر ثینګز","د ګوتو څښتن","سعودي عربستان","بحرین","متحده عربي امارات","عمان","ترکیه","د ترکیې سیمې","د خلیج هېوادونه"];
  P3.he = ["דרגון בול","הבלש קונאן","דברים מוזרים","שר הטבעות","ערב הסעודית","בחריין","איחוד האמירויות","עומאן","טורקיה","אזורי טורקיה","מדינות המפרץ"];
  P3.hi = ["ड्रैगन बॉल","जासूस कोनन","स्ट्रेंजर थिंग्स","लॉर्ड ऑफ द रिंग्स","सऊदी अरब","बहरीन","संयुक्त अरब अमीरात","ओमान","तुर्किये","तुर्किये के क्षेत्र","खाड़ी देश"];
  P3.bn = ["ড্রাগন বল","গোয়েন্দা কোনান","স্ট্রেঞ্জার থিংস","লর্ড অব দ্য রিংস","সৌদি আরব","বাহরাইন","সংযুক্ত আরব আমিরাত","ওমান","তুরস্ক","তুরস্কের অঞ্চল","উপসাগরীয় দেশ"];
  P3.ta = ["டிராகன் பால்","துப்பறிவாளர் கோனன்","ஸ்ட்ரேஞ்சர் திங்ஸ்","த லார்ட் ஆஃப் தி ரிங்ஸ்","சவூதி அரேபியா","பஹ்ரைன்","ஐக்கிய அரபு அமீரகம்","ஓமான்","துருக்கி","துருக்கியின் பகுதிகள்","வளைகுடா நாடுகள்"];
  P3.id = ["Dragon Ball","Detektif Conan","Stranger Things","The Lord of the Rings","Arab Saudi","Bahrain","Uni Emirat Arab","Oman","Turki","Wilayah Turki","Negara Teluk"];
  P3.ms = ["Dragon Ball","Detektif Conan","Stranger Things","The Lord of the Rings","Arab Saudi","Bahrain","Emiriah Arab Bersatu","Oman","Turki","Wilayah Turki","Negara Teluk"];
  P3.zh = ["龙珠","名侦探柯南","怪奇物语","指环王","沙特阿拉伯","巴林","阿联酋","阿曼","土耳其","土耳其地区","海湾国家"];
  P3.ja = ["ドラゴンボール","名探偵コナン","ストレンジャー・シングス","ロード・オブ・ザ・リング","サウジアラビア","バーレーン","アラブ首長国連邦","オマーン","トルコ","トルコの地方","湾岸諸国"];
  P3.ko = ["드래곤볼","명탐정 코난","기묘한 이야기","반지의 제왕","사우디아라비아","바레인","아랍에미리트","오만","튀르키예","튀르키예의 지역","걸프 국가"];
  P3.th = ["ดราก้อนบอล","ยอดนักสืบจิ๋วโคนัน","สเตรนเจอร์ ธิงส์","เดอะลอร์ดออฟเดอะริงส์","ซาอุดีอาระเบีย","บาห์เรน","สหรัฐอาหรับเอมิเรตส์","โอมาน","ตุรกี","ภูมิภาคของตุรกี","ประเทศอ่าวอาหรับ"];
  P3.vi = ["Bảy viên ngọc rồng","Thám tử lừng danh Conan","Stranger Things","Chúa tể những chiếc nhẫn","Ả Rập Xê Út","Bahrain","Các Tiểu vương quốc Ả Rập","Oman","Thổ Nhĩ Kỳ","Các vùng Thổ Nhĩ Kỳ","Các nước vùng Vịnh"];
  P3.tl = ["Dragon Ball","Detective Conan","Stranger Things","The Lord of the Rings","Saudi Arabia","Bahrain","United Arab Emirates","Oman","Turkiya","Mga rehiyon ng Turkiya","Mga bansa sa Gulpo"];
  P3.sw = ["Dragon Ball","Mpelelezi Conan","Stranger Things","Bwana wa Pete","Saudi Arabia","Bahrain","Falme za Kiarabu","Omani","Uturuki","Mikoa ya Uturuki","Nchi za Ghuba"];
  P3.ha = ["Dragon Ball","Jami'in bincike Conan","Stranger Things","Ubangijin Zobba","Saudiyya","Bahrain","Hadaddiyar Daular Larabawa","Oman","Turkiyya","Yankunan Turkiyya","Kasashen Gulf"];
  P3.so = ["Dragon Ball","Baadhaha Conan","Stranger Things","Sayidka Giraanta","Sacuudi Carabiya","Baxrayn","Imaaraadka Carabta","Cumaan","Turkiga","Gobollada Turkiga","Dalalka Gacanka"];
  P3.am = ["ድራጎን ቦል","መርማሪ ኮናን","ስትሬንጀር ቲንግስ","የቀለበቶቹ ጌታ","ሳውዲ ዓረቢያ","ባህሬን","የተባበሩት ዓረብ ኤምሬትስ","ኦማን","ቱርክ","የቱርክ ክልሎች","የባህረ ሰላጤ አገራት"];

  /* ============================================================
     الدفعة الرابعة من الفئات (3 فئات)
     ============================================================ */
  var C4 = [
    /* 0 */ "أطفال",
    /* 1 */ "شعارات النوادي",
    /* 2 */ "شعارات كويتية"
  ];

  var P4 = {
    en: ["Kids","Club logos","Kuwaiti logos"],
    fr: ["Enfants","Logos de clubs","Logos koweïtiens"],
    es: ["Niños","Escudos de clubes","Logotipos kuwaitíes"],
    pt: ["Crianças","Emblemas de clubes","Logótipos kuwaitianos"],
    de: ["Kinder","Vereinswappen","Kuwaitische Logos"],
    it: ["Bambini","Stemmi dei club","Loghi kuwaitiani"],
    nl: ["Kinderen","Clublogo's","Koeweitse logo's"],
    sv: ["Barn","Klubbmärken","Kuwaitiska logotyper"],
    pl: ["Dzieci","Herby klubów","Kuwejckie logo"],
    cs: ["Děti","Klubové znaky","Kuvajtská loga"],
    ro: ["Copii","Embleme de cluburi","Logouri kuweitiene"],
    hu: ["Gyerekek","Klubcímerek","Kuvaiti logók"],
    el: ["Παιδιά","Σήματα ομάδων","Λογότυπα του Κουβέιτ"],
    ru: ["Детям","Эмблемы клубов","Логотипы Кувейта"],
    uk: ["Дітям","Емблеми клубів","Логотипи Кувейту"],
    tr: ["Çocuklar","Kulüp logoları","Kuveyt logoları"],
    az: ["Uşaqlar","Klub loqoları","Küveyt loqoları"],
    fa: ["کودکان","نشان باشگاه‌ها","لوگوهای کویتی"],
    ku: ["Zarok","Logoyên klûban","Logoyên Kuweytê"],
    ur: ["بچے","کلبوں کے لوگو","کویتی لوگو"],
    ps: ["ماشومان","د کلبونو نښې","کویټي نښې"],
    he: ["ילדים","סמלי מועדונים","לוגואים כוויתיים"],
    hi: ["बच्चे","क्लबों के लोगो","कुवैती लोगो"],
    bn: ["শিশু","ক্লাবের লোগো","কুয়েতি লোগো"],
    ta: ["குழந்தைகள்","கழக சின்னங்கள்","குவைத் சின்னங்கள்"],
    id: ["Anak-anak","Logo klub","Logo Kuwait"],
    ms: ["Kanak-kanak","Logo kelab","Logo Kuwait"],
    zh: ["儿童","俱乐部队徽","科威特标志"],
    ja: ["キッズ","クラブのエンブレム","クウェートのロゴ"],
    ko: ["어린이","클럽 엠블럼","쿠웨이트 로고"],
    th: ["เด็ก","โลโก้สโมสร","โลโก้คูเวต"],
    vi: ["Thiếu nhi","Logo câu lạc bộ","Logo Kuwait"],
    tl: ["Mga bata","Mga logo ng club","Mga logo ng Kuwait"],
    sw: ["Watoto","Nembo za klabu","Nembo za Kuwait"],
    ha: ["Yara","Tambarin kulob","Tambarin Kuwait"],
    so: ["Carruurta","Astaamaha kooxaha","Astaamaha Kuwayt"],
    am: ["ልጆች","የክለብ አርማዎች","የኩዌት አርማዎች"]
  };

  window.I18N_CAT_KEYS = C;
  window.I18N_CAT_PACKED = P;
  window.I18N_CAT_KEYS3 = C3;
  window.I18N_CAT_PACKED3 = P3;
  window.I18N_CAT_KEYS4 = C4;
  window.I18N_CAT_PACKED4 = P4;
  if (window.I18N && window.I18N.loadPacked) {
    window.I18N.loadPacked(C, P);
    window.I18N.loadPacked(C3, P3);
    window.I18N.loadPacked(C4, P4);
  }
})();
