/* ============================================================
   جاوبني — قواميس الترجمة (38 لغة)
   ------------------------------------------------------------
   الصيغة مضغوطة: قائمة مفاتيح عربية واحدة (I18N_KEYS)
   ثم مصفوفة قيم لكل لغة بنفس الترتيب تماماً.

   لإضافة لغة جديدة:
     1) أضف سطراً في LANGS داخل i18n.js
     2) أضف مصفوفة بنفس عدد وترتيب I18N_KEYS هنا
   ============================================================ */

(function () {
  "use strict";

  /* ---------- المفاتيح (120 عبارة) ---------- */
  var K = [
    /*  0 */ "جاوبني",
    /*  1 */ "الصفحة الرئيسية",
    /*  2 */ "الرئيسية",
    /*  3 */ "حسابي",
    /*  4 */ "تسجيل دخول",
    /*  5 */ "تسجيل خروج",
    /*  6 */ "تسجيل الدخول",
    /*  7 */ "العودة للصفحة الرئيسية",
    /*  8 */ "اللغة",
    /*  9 */ "الإعدادات",
    /* 10 */ "الرصيد",
    /* 11 */ "النقاط",
    /* 12 */ "نقطة",
    /* 13 */ "ألعابي",
    /* 14 */ "العابي",
    /* 15 */ "إنشاء لعبة",
    /* 16 */ "ابدأ لعبة جديدة",
    /* 17 */ "ابدأ الآن",
    /* 18 */ "الخروج من اللعبة",
    /* 19 */ "زائر",
    /* 20 */ "مرحباً، زائر",
    /* 21 */ "كتيب اللعبة",
    /* 22 */ "طباعة",
    /* 23 */ "استوديو المسابقات الأول",
    /* 24 */ "كيف ألعب؟",
    /* 25 */ "فئة متنوعة",
    /* 26 */ "فئات لكل جولة",
    /* 27 */ "أعلى نقاط للسؤال",
    /* 28 */ "مباشر الآن",
    /* 29 */ "البث مباشر",
    /* 30 */ "فريقان يتنافسان",
    /* 31 */ "لوحة التحكم",
    /* 32 */ "تعرّف على اللعبة",
    /* 33 */ "عن اللعبة",
    /* 34 */ "طريقة اللعب",
    /* 35 */ "اختر الفئات",
    /* 36 */ "الخطوة الأولى",
    /* 37 */ "اختر فئاتك",
    /* 38 */ "الفئات المختارة",
    /* 39 */ "أسماء اللعبة والفريقين",
    /* 40 */ "اسم اللعبة",
    /* 41 */ "فريق 1",
    /* 42 */ "فريق 2",
    /* 43 */ "اسم الفريق الأول",
    /* 44 */ "اسم الفريق الثاني",
    /* 45 */ "ابدأ اللعبة",
    /* 46 */ "قريباً",
    /* 47 */ "ابحث عن فئة…",
    /* 48 */ "كل الفئات",
    /* 49 */ "لوحة اللعب",
    /* 50 */ "إنهاء اللعبة",
    /* 51 */ "جولة مباشرة",
    /* 52 */ "لعبتنا الثقافية",
    /* 53 */ "الفئات التي قمت باختيارها",
    /* 54 */ "بطاقة صفراء · خصم 100",
    /* 55 */ "بطاقة حمراء · خصم 300",
    /* 56 */ "اختر الفئات الآن",
    /* 57 */ "الدور الآن على",
    /* 58 */ "السؤال",
    /* 59 */ "الإجابة",
    /* 60 */ "الفئة",
    /* 61 */ "ثانية",
    /* 62 */ "جارٍ التحميل…",
    /* 63 */ "من أجاب إجابة صحيحة؟",
    /* 64 */ "لا أحد",
    /* 65 */ "بدون نقاط",
    /* 66 */ "رجوع للوحة",
    /* 67 */ "الدور على",
    /* 68 */ "الفريق 1",
    /* 69 */ "الفريق 2",
    /* 70 */ "المقطع الصوتي",
    /* 71 */ "إظهار الإجابة",
    /* 72 */ "صورة السؤال",
    /* 73 */ "النتيجة النهائية",
    /* 74 */ "انتهت الجولة",
    /* 75 */ "الفائز",
    /* 76 */ "تعادل",
    /* 77 */ "سجل الألعاب",
    /* 78 */ "أرشيفك",
    /* 79 */ "إجمالي الألعاب",
    /* 80 */ "آخر لعبة",
    /* 81 */ "رصيدك الحالي",
    /* 82 */ "الرقم",
    /* 83 */ "الوصف",
    /* 84 */ "التاريخ والوقت",
    /* 85 */ "لا توجد ألعاب بعد",
    /* 86 */ "مسح السجل",
    /* 87 */ "ملفك الشخصي",
    /* 88 */ "المعلومات الشخصية",
    /* 89 */ "اسم المستخدم",
    /* 90 */ "البريد الإلكتروني",
    /* 91 */ "رقم الهاتف",
    /* 92 */ "تاريخ الانضمام",
    /* 93 */ "إحصائياتي",
    /* 94 */ "شحن الرصيد",
    /* 95 */ "سجل ألعابي",
    /* 96 */ "كلمة المرور",
    /* 97 */ "قوة كلمة المرور",
    /* 98 */ "تسجيل",
    /* 99 */ "دخول",
    /*100 */ "حساب جديد",
    /*101 */ "أنشئ حساباً جديداً",
    /*102 */ "سجّل دخولك",
    /*103 */ "لديك حساب بالفعل؟",
    /*104 */ "ليس لديك حساب؟",
    /*105 */ "مرحباً بك",
    /*106 */ "أهلاً بعودتك!",
    /*107 */ "المحفظة",
    /*108 */ "شحن رصيد اللعبة",
    /*109 */ "لعبة",
    /*110 */ "ألعاب",
    /*111 */ "الأوفر",
    /*112 */ "ملخّص الطلب",
    /*113 */ "دينار",
    /*114 */ "{n} من {m}",
    /*115 */ "{n} نقطة",
    /*116 */ "{n} أسئلة",
    /*117 */ "{n} ثانية",
    /*118 */ "{n} لعبة",
    /*119 */ "لاعب جديد"
  ];

  var P = {};

  /* ================= English ================= */
  P.en = [
    "Jawabni","Home","Home","My Account","Sign in","Sign out","Sign in","Back to home","Language","Settings",
    "Balance","Points","point","My Games","My Games","Create a game","Start a new game","Start now","Exit the game","Guest",
    "Hello, Guest","Game Booklet","Print","The #1 quiz studio","How do I play?","categories","categories per round","top points per question","Live now","Live",
    "Two teams compete","Dashboard","Get to know the game","About the game","How to play","Choose categories","Step one","Pick your categories","Selected categories","Game and team names",
    "Game name","Team 1","Team 2","First team name","Second team name","Start the game","Coming soon","Search a category…","All categories","Game board",
    "End the game","Live round","Our culture game","The categories you picked","Yellow card · −100","Red card · −300","Choose your categories now","Now playing","Question","Answer",
    "Category","seconds","Loading…","Who answered correctly?","Nobody","No points","Back to board","Turn","Team 1","Team 2",
    "Audio clip","Show the answer","Question image","Final score","Round over","Winner","Draw","Game history","Your archive","Total games",
    "Last game","Your current balance","No.","Description","Date & time","No games yet","Clear history","Your profile","Personal information","Username",
    "Email","Phone number","Joined on","My stats","Top up balance","My game history","Password","Password strength","Sign up","Log in",
    "New account","Create a new account","Log in","Already have an account?","Don't have an account?","Welcome","Welcome back!","Wallet","Top up game balance","game",
    "games","Best value","Order summary","KWD","{n} of {m}","{n} points","{n} questions","{n} seconds","{n} games","New player"
  ];

  /* ================= Français ================= */
  P.fr = [
    "Jawabni","Accueil","Accueil","Mon compte","Se connecter","Se déconnecter","Connexion","Retour à l'accueil","Langue","Paramètres",
    "Solde","Points","point","Mes parties","Mes parties","Créer une partie","Nouvelle partie","Commencer","Quitter la partie","Invité",
    "Bonjour, invité","Livret du jeu","Imprimer","Le premier studio de quiz","Comment jouer ?","catégories","catégories par manche","points max par question","En direct","En direct",
    "Deux équipes s'affrontent","Tableau de bord","Découvrir le jeu","À propos du jeu","Comment jouer","Choisir les catégories","Première étape","Choisissez vos catégories","Catégories choisies","Noms de la partie et des équipes",
    "Nom de la partie","Équipe 1","Équipe 2","Nom de la première équipe","Nom de la deuxième équipe","Lancer la partie","Bientôt","Rechercher une catégorie…","Toutes les catégories","Plateau de jeu",
    "Terminer la partie","Manche en direct","Notre jeu culturel","Les catégories que vous avez choisies","Carton jaune · −100","Carton rouge · −300","Choisissez vos catégories","Au tour de","Question","Réponse",
    "Catégorie","secondes","Chargement…","Qui a bien répondu ?","Personne","Aucun point","Retour au plateau","Tour de","Équipe 1","Équipe 2",
    "Extrait audio","Afficher la réponse","Image de la question","Score final","Manche terminée","Vainqueur","Égalité","Historique des parties","Vos archives","Total des parties",
    "Dernière partie","Votre solde actuel","N°","Description","Date et heure","Aucune partie pour l'instant","Effacer l'historique","Votre profil","Informations personnelles","Nom d'utilisateur",
    "E-mail","Numéro de téléphone","Inscrit le","Mes statistiques","Recharger le solde","Mon historique","Mot de passe","Force du mot de passe","S'inscrire","Connexion",
    "Nouveau compte","Créer un compte","Connectez-vous","Vous avez déjà un compte ?","Pas encore de compte ?","Bienvenue","Bon retour !","Portefeuille","Recharger le solde de jeu","partie",
    "parties","Meilleure offre","Récapitulatif","KWD","{n} sur {m}","{n} points","{n} questions","{n} secondes","{n} parties","Nouveau joueur"
  ];

  /* ================= Español ================= */
  P.es = [
    "Jawabni","Inicio","Inicio","Mi cuenta","Iniciar sesión","Cerrar sesión","Iniciar sesión","Volver al inicio","Idioma","Ajustes",
    "Saldo","Puntos","punto","Mis partidas","Mis partidas","Crear partida","Nueva partida","Empezar ahora","Salir de la partida","Invitado",
    "Hola, invitado","Manual del juego","Imprimir","El estudio de concursos n.º 1","¿Cómo se juega?","categorías","categorías por ronda","puntos máx. por pregunta","En directo","En directo",
    "Dos equipos compiten","Panel","Conoce el juego","Sobre el juego","Cómo jugar","Elegir categorías","Primer paso","Elige tus categorías","Categorías elegidas","Nombres de la partida y los equipos",
    "Nombre de la partida","Equipo 1","Equipo 2","Nombre del primer equipo","Nombre del segundo equipo","Empezar la partida","Próximamente","Buscar una categoría…","Todas las categorías","Tablero de juego",
    "Terminar la partida","Ronda en directo","Nuestro juego cultural","Las categorías que elegiste","Tarjeta amarilla · −100","Tarjeta roja · −300","Elige tus categorías ahora","Turno de","Pregunta","Respuesta",
    "Categoría","segundos","Cargando…","¿Quién respondió bien?","Nadie","Sin puntos","Volver al tablero","Turno de","Equipo 1","Equipo 2",
    "Clip de audio","Mostrar la respuesta","Imagen de la pregunta","Resultado final","Ronda terminada","Ganador","Empate","Historial de partidas","Tu archivo","Partidas totales",
    "Última partida","Tu saldo actual","N.º","Descripción","Fecha y hora","Aún no hay partidas","Borrar historial","Tu perfil","Información personal","Nombre de usuario",
    "Correo electrónico","Número de teléfono","Se unió el","Mis estadísticas","Recargar saldo","Mi historial","Contraseña","Seguridad de la contraseña","Registrarse","Entrar",
    "Cuenta nueva","Crear una cuenta nueva","Inicia sesión","¿Ya tienes cuenta?","¿No tienes cuenta?","Bienvenido","¡Bienvenido de nuevo!","Cartera","Recargar saldo de juego","partida",
    "partidas","Mejor precio","Resumen del pedido","KWD","{n} de {m}","{n} puntos","{n} preguntas","{n} segundos","{n} partidas","Jugador nuevo"
  ];

  /* ================= Português ================= */
  P.pt = [
    "Jawabni","Início","Início","Minha conta","Entrar","Sair","Entrar","Voltar ao início","Idioma","Definições",
    "Saldo","Pontos","ponto","Meus jogos","Meus jogos","Criar jogo","Novo jogo","Começar agora","Sair do jogo","Convidado",
    "Olá, convidado","Manual do jogo","Imprimir","O estúdio de quiz n.º 1","Como se joga?","categorias","categorias por rodada","pontos máx. por pergunta","Ao vivo","Ao vivo",
    "Duas equipas competem","Painel","Conheça o jogo","Sobre o jogo","Como jogar","Escolher categorias","Primeiro passo","Escolha as suas categorias","Categorias escolhidas","Nomes do jogo e das equipas",
    "Nome do jogo","Equipa 1","Equipa 2","Nome da primeira equipa","Nome da segunda equipa","Começar o jogo","Em breve","Procurar uma categoria…","Todas as categorias","Tabuleiro de jogo",
    "Terminar o jogo","Rodada ao vivo","O nosso jogo cultural","As categorias que escolheu","Cartão amarelo · −100","Cartão vermelho · −300","Escolha as categorias agora","Vez de","Pergunta","Resposta",
    "Categoria","segundos","A carregar…","Quem respondeu certo?","Ninguém","Sem pontos","Voltar ao tabuleiro","Vez de","Equipa 1","Equipa 2",
    "Clipe de áudio","Mostrar a resposta","Imagem da pergunta","Resultado final","Rodada terminada","Vencedor","Empate","Histórico de jogos","O seu arquivo","Total de jogos",
    "Último jogo","O seu saldo atual","N.º","Descrição","Data e hora","Ainda não há jogos","Limpar histórico","O seu perfil","Informações pessoais","Nome de utilizador",
    "E-mail","Número de telefone","Aderiu em","As minhas estatísticas","Carregar saldo","O meu histórico","Palavra-passe","Força da palavra-passe","Registar","Entrar",
    "Conta nova","Criar uma conta nova","Inicie sessão","Já tem conta?","Ainda não tem conta?","Bem-vindo","Bem-vindo de volta!","Carteira","Carregar saldo de jogo","jogo",
    "jogos","Melhor valor","Resumo do pedido","KWD","{n} de {m}","{n} pontos","{n} perguntas","{n} segundos","{n} jogos","Jogador novo"
  ];

  /* ================= Deutsch ================= */
  P.de = [
    "Jawabni","Startseite","Start","Mein Konto","Anmelden","Abmelden","Anmelden","Zurück zur Startseite","Sprache","Einstellungen",
    "Guthaben","Punkte","Punkt","Meine Spiele","Meine Spiele","Spiel erstellen","Neues Spiel starten","Jetzt starten","Spiel verlassen","Gast",
    "Hallo, Gast","Spielheft","Drucken","Das Quizstudio Nr. 1","Wie spiele ich?","Kategorien","Kategorien pro Runde","max. Punkte pro Frage","Jetzt live","Live",
    "Zwei Teams treten an","Übersicht","Das Spiel kennenlernen","Über das Spiel","Spielablauf","Kategorien wählen","Erster Schritt","Wähle deine Kategorien","Gewählte Kategorien","Spiel- und Teamnamen",
    "Spielname","Team 1","Team 2","Name des ersten Teams","Name des zweiten Teams","Spiel starten","Bald verfügbar","Kategorie suchen…","Alle Kategorien","Spielbrett",
    "Spiel beenden","Live-Runde","Unser Kulturspiel","Deine gewählten Kategorien","Gelbe Karte · −100","Rote Karte · −300","Wähle jetzt deine Kategorien","Am Zug","Frage","Antwort",
    "Kategorie","Sekunden","Wird geladen…","Wer hat richtig geantwortet?","Niemand","Keine Punkte","Zurück zum Brett","Am Zug","Team 1","Team 2",
    "Audioclip","Antwort anzeigen","Bild zur Frage","Endstand","Runde beendet","Sieger","Unentschieden","Spielverlauf","Dein Archiv","Spiele gesamt",
    "Letztes Spiel","Dein aktuelles Guthaben","Nr.","Beschreibung","Datum & Uhrzeit","Noch keine Spiele","Verlauf löschen","Dein Profil","Persönliche Daten","Benutzername",
    "E-Mail","Telefonnummer","Beigetreten am","Meine Statistik","Guthaben aufladen","Mein Spielverlauf","Passwort","Passwortstärke","Registrieren","Anmelden",
    "Neues Konto","Neues Konto erstellen","Melde dich an","Hast du schon ein Konto?","Noch kein Konto?","Willkommen","Willkommen zurück!","Geldbörse","Spielguthaben aufladen","Spiel",
    "Spiele","Bestes Angebot","Bestellübersicht","KWD","{n} von {m}","{n} Punkte","{n} Fragen","{n} Sekunden","{n} Spiele","Neuer Spieler"
  ];

  /* ================= Italiano ================= */
  P.it = [
    "Jawabni","Home","Home","Il mio account","Accedi","Esci","Accedi","Torna alla home","Lingua","Impostazioni",
    "Credito","Punti","punto","Le mie partite","Le mie partite","Crea partita","Nuova partita","Inizia ora","Esci dalla partita","Ospite",
    "Ciao, ospite","Manuale del gioco","Stampa","Lo studio di quiz n.º 1","Come si gioca?","categorie","categorie per turno","punti max per domanda","In diretta","In diretta",
    "Due squadre si sfidano","Pannello","Scopri il gioco","Informazioni sul gioco","Come giocare","Scegli le categorie","Primo passo","Scegli le tue categorie","Categorie scelte","Nomi della partita e delle squadre",
    "Nome della partita","Squadra 1","Squadra 2","Nome della prima squadra","Nome della seconda squadra","Inizia la partita","Presto disponibile","Cerca una categoria…","Tutte le categorie","Tabellone di gioco",
    "Termina la partita","Turno in diretta","Il nostro gioco culturale","Le categorie che hai scelto","Cartellino giallo · −100","Cartellino rosso · −300","Scegli ora le categorie","Tocca a","Domanda","Risposta",
    "Categoria","secondi","Caricamento…","Chi ha risposto bene?","Nessuno","Nessun punto","Torna al tabellone","Tocca a","Squadra 1","Squadra 2",
    "Clip audio","Mostra la risposta","Immagine della domanda","Punteggio finale","Turno concluso","Vincitore","Pareggio","Cronologia partite","Il tuo archivio","Partite totali",
    "Ultima partita","Il tuo credito attuale","N.","Descrizione","Data e ora","Ancora nessuna partita","Cancella cronologia","Il tuo profilo","Informazioni personali","Nome utente",
    "E-mail","Numero di telefono","Iscritto il","Le mie statistiche","Ricarica credito","La mia cronologia","Password","Sicurezza della password","Registrati","Accedi",
    "Nuovo account","Crea un nuovo account","Accedi","Hai già un account?","Non hai un account?","Benvenuto","Bentornato!","Portafoglio","Ricarica il credito di gioco","partita",
    "partite","Miglior offerta","Riepilogo ordine","KWD","{n} di {m}","{n} punti","{n} domande","{n} secondi","{n} partite","Nuovo giocatore"
  ];

  /* ================= Nederlands ================= */
  P.nl = [
    "Jawabni","Home","Home","Mijn account","Inloggen","Uitloggen","Inloggen","Terug naar home","Taal","Instellingen",
    "Saldo","Punten","punt","Mijn spellen","Mijn spellen","Spel maken","Nieuw spel starten","Nu beginnen","Spel verlaten","Gast",
    "Hallo, gast","Spelboekje","Afdrukken","De quizstudio nr. 1","Hoe speel ik?","categorieën","categorieën per ronde","max. punten per vraag","Nu live","Live",
    "Twee teams strijden","Dashboard","Leer het spel kennen","Over het spel","Zo speel je","Categorieën kiezen","Eerste stap","Kies je categorieën","Gekozen categorieën","Spel- en teamnamen",
    "Spelnaam","Team 1","Team 2","Naam van het eerste team","Naam van het tweede team","Spel starten","Binnenkort","Zoek een categorie…","Alle categorieën","Speelbord",
    "Spel beëindigen","Live ronde","Ons cultuurspel","De categorieën die je koos","Gele kaart · −100","Rode kaart · −300","Kies nu je categorieën","Aan de beurt","Vraag","Antwoord",
    "Categorie","seconden","Laden…","Wie antwoordde juist?","Niemand","Geen punten","Terug naar bord","Beurt","Team 1","Team 2",
    "Audiofragment","Toon het antwoord","Afbeelding bij de vraag","Eindstand","Ronde voorbij","Winnaar","Gelijkspel","Spelgeschiedenis","Jouw archief","Totaal spellen",
    "Laatste spel","Je huidige saldo","Nr.","Omschrijving","Datum en tijd","Nog geen spellen","Geschiedenis wissen","Jouw profiel","Persoonlijke gegevens","Gebruikersnaam",
    "E-mail","Telefoonnummer","Lid sinds","Mijn statistieken","Saldo opwaarderen","Mijn geschiedenis","Wachtwoord","Sterkte van wachtwoord","Registreren","Inloggen",
    "Nieuw account","Maak een nieuw account","Log in","Heb je al een account?","Nog geen account?","Welkom","Welkom terug!","Portemonnee","Spelsaldo opwaarderen","spel",
    "spellen","Beste prijs","Besteloverzicht","KWD","{n} van {m}","{n} punten","{n} vragen","{n} seconden","{n} spellen","Nieuwe speler"
  ];

  /* ================= Svenska ================= */
  P.sv = [
    "Jawabni","Startsida","Start","Mitt konto","Logga in","Logga ut","Logga in","Tillbaka till start","Språk","Inställningar",
    "Saldo","Poäng","poäng","Mina spel","Mina spel","Skapa spel","Starta nytt spel","Börja nu","Lämna spelet","Gäst",
    "Hej, gäst","Spelhäfte","Skriv ut","Quizstudion nr 1","Hur spelar jag?","kategorier","kategorier per omgång","max poäng per fråga","Live nu","Live",
    "Två lag tävlar","Kontrollpanel","Lär känna spelet","Om spelet","Så spelar du","Välj kategorier","Första steget","Välj dina kategorier","Valda kategorier","Spel- och lagnamn",
    "Spelets namn","Lag 1","Lag 2","Första lagets namn","Andra lagets namn","Starta spelet","Kommer snart","Sök en kategori…","Alla kategorier","Spelplan",
    "Avsluta spelet","Liveomgång","Vårt kulturspel","Kategorierna du valde","Gult kort · −100","Rött kort · −300","Välj kategorier nu","Nu spelar","Fråga","Svar",
    "Kategori","sekunder","Laddar…","Vem svarade rätt?","Ingen","Inga poäng","Tillbaka till planen","Tur","Lag 1","Lag 2",
    "Ljudklipp","Visa svaret","Bild till frågan","Slutresultat","Omgången slut","Vinnare","Oavgjort","Spelhistorik","Ditt arkiv","Totalt antal spel",
    "Senaste spelet","Ditt nuvarande saldo","Nr","Beskrivning","Datum och tid","Inga spel än","Rensa historik","Din profil","Personuppgifter","Användarnamn",
    "E-post","Telefonnummer","Gick med","Min statistik","Fyll på saldo","Min historik","Lösenord","Lösenordsstyrka","Registrera","Logga in",
    "Nytt konto","Skapa ett nytt konto","Logga in","Har du redan ett konto?","Har du inget konto?","Välkommen","Välkommen tillbaka!","Plånbok","Fyll på spelsaldo","spel",
    "spel","Bästa värdet","Ordersammanfattning","KWD","{n} av {m}","{n} poäng","{n} frågor","{n} sekunder","{n} spel","Ny spelare"
  ];

  /* ================= Polski ================= */
  P.pl = [
    "Jawabni","Strona główna","Główna","Moje konto","Zaloguj się","Wyloguj się","Logowanie","Powrót na stronę główną","Język","Ustawienia",
    "Saldo","Punkty","punkt","Moje gry","Moje gry","Utwórz grę","Rozpocznij nową grę","Zacznij teraz","Wyjdź z gry","Gość",
    "Witaj, gościu","Podręcznik gry","Drukuj","Studio quizów nr 1","Jak grać?","kategorii","kategorii na rundę","maks. punktów za pytanie","Na żywo","Na żywo",
    "Dwie drużyny rywalizują","Panel","Poznaj grę","O grze","Jak się gra","Wybierz kategorie","Pierwszy krok","Wybierz swoje kategorie","Wybrane kategorie","Nazwy gry i drużyn",
    "Nazwa gry","Drużyna 1","Drużyna 2","Nazwa pierwszej drużyny","Nazwa drugiej drużyny","Rozpocznij grę","Wkrótce","Szukaj kategorii…","Wszystkie kategorie","Plansza gry",
    "Zakończ grę","Runda na żywo","Nasza gra kulturalna","Wybrane przez ciebie kategorie","Żółta kartka · −100","Czerwona kartka · −300","Wybierz teraz kategorie","Teraz gra","Pytanie","Odpowiedź",
    "Kategoria","sekund","Ładowanie…","Kto odpowiedział poprawnie?","Nikt","Bez punktów","Powrót do planszy","Kolej","Drużyna 1","Drużyna 2",
    "Klip audio","Pokaż odpowiedź","Zdjęcie do pytania","Wynik końcowy","Runda zakończona","Zwycięzca","Remis","Historia gier","Twoje archiwum","Łącznie gier",
    "Ostatnia gra","Twoje aktualne saldo","Nr","Opis","Data i godzina","Brak gier","Wyczyść historię","Twój profil","Dane osobowe","Nazwa użytkownika",
    "E-mail","Numer telefonu","Dołączył","Moje statystyki","Doładuj saldo","Moja historia","Hasło","Siła hasła","Zarejestruj się","Zaloguj",
    "Nowe konto","Utwórz nowe konto","Zaloguj się","Masz już konto?","Nie masz konta?","Witamy","Witaj ponownie!","Portfel","Doładuj saldo gry","gra",
    "gry","Najlepsza oferta","Podsumowanie zamówienia","KWD","{n} z {m}","{n} punktów","{n} pytań","{n} sekund","{n} gier","Nowy gracz"
  ];

  /* ================= Čeština ================= */
  P.cs = [
    "Jawabni","Domů","Domů","Můj účet","Přihlásit se","Odhlásit se","Přihlášení","Zpět na hlavní stránku","Jazyk","Nastavení",
    "Zůstatek","Body","bod","Moje hry","Moje hry","Vytvořit hru","Začít novou hru","Začít nyní","Opustit hru","Host",
    "Ahoj, hoste","Příručka hry","Tisk","Kvízové studio č. 1","Jak se hraje?","kategorií","kategorií na kolo","max. bodů za otázku","Živě","Živě",
    "Dva týmy soutěží","Přehled","Poznej hru","O hře","Jak hrát","Vybrat kategorie","První krok","Vyber si kategorie","Vybrané kategorie","Názvy hry a týmů",
    "Název hry","Tým 1","Tým 2","Název prvního týmu","Název druhého týmu","Spustit hru","Již brzy","Hledat kategorii…","Všechny kategorie","Herní deska",
    "Ukončit hru","Živé kolo","Naše kulturní hra","Kategorie, které jsi vybral","Žlutá karta · −100","Červená karta · −300","Vyber kategorie hned","Na řadě je","Otázka","Odpověď",
    "Kategorie","sekund","Načítání…","Kdo odpověděl správně?","Nikdo","Bez bodů","Zpět na desku","Na řadě","Tým 1","Tým 2",
    "Zvukový klip","Zobrazit odpověď","Obrázek k otázce","Konečné skóre","Kolo skončilo","Vítěz","Remíza","Historie her","Tvůj archiv","Celkem her",
    "Poslední hra","Tvůj aktuální zůstatek","Č.","Popis","Datum a čas","Zatím žádné hry","Vymazat historii","Tvůj profil","Osobní údaje","Uživatelské jméno",
    "E-mail","Telefonní číslo","Připojil se","Moje statistiky","Dobít zůstatek","Moje historie","Heslo","Síla hesla","Registrovat","Přihlásit",
    "Nový účet","Vytvořit nový účet","Přihlas se","Už máš účet?","Nemáš účet?","Vítej","Vítej zpět!","Peněženka","Dobít herní zůstatek","hra",
    "hry","Nejlepší nabídka","Souhrn objednávky","KWD","{n} z {m}","{n} bodů","{n} otázek","{n} sekund","{n} her","Nový hráč"
  ];

  /* ================= Română ================= */
  P.ro = [
    "Jawabni","Acasă","Acasă","Contul meu","Autentificare","Deconectare","Autentificare","Înapoi acasă","Limbă","Setări",
    "Sold","Puncte","punct","Jocurile mele","Jocurile mele","Creează joc","Începe un joc nou","Începe acum","Ieși din joc","Vizitator",
    "Salut, vizitator","Manualul jocului","Tipărește","Studioul de quiz nr. 1","Cum se joacă?","categorii","categorii pe rundă","puncte max. pe întrebare","În direct","În direct",
    "Două echipe concurează","Panou","Cunoaște jocul","Despre joc","Cum se joacă","Alege categoriile","Primul pas","Alege-ți categoriile","Categorii alese","Numele jocului și ale echipelor",
    "Numele jocului","Echipa 1","Echipa 2","Numele primei echipe","Numele celei de-a doua echipe","Începe jocul","În curând","Caută o categorie…","Toate categoriile","Tabla de joc",
    "Termină jocul","Rundă în direct","Jocul nostru cultural","Categoriile pe care le-ai ales","Cartonaș galben · −100","Cartonaș roșu · −300","Alege categoriile acum","Este rândul","Întrebare","Răspuns",
    "Categorie","secunde","Se încarcă…","Cine a răspuns corect?","Nimeni","Fără puncte","Înapoi la tablă","Rândul","Echipa 1","Echipa 2",
    "Clip audio","Arată răspunsul","Imaginea întrebării","Scor final","Runda s-a încheiat","Câștigător","Egalitate","Istoricul jocurilor","Arhiva ta","Total jocuri",
    "Ultimul joc","Soldul tău curent","Nr.","Descriere","Data și ora","Încă niciun joc","Șterge istoricul","Profilul tău","Informații personale","Nume de utilizator",
    "E-mail","Număr de telefon","S-a alăturat pe","Statisticile mele","Reîncarcă soldul","Istoricul meu","Parolă","Puterea parolei","Înregistrare","Intră",
    "Cont nou","Creează un cont nou","Autentifică-te","Ai deja un cont?","Nu ai cont?","Bun venit","Bine ai revenit!","Portofel","Reîncarcă soldul de joc","joc",
    "jocuri","Cea mai bună ofertă","Rezumatul comenzii","KWD","{n} din {m}","{n} puncte","{n} întrebări","{n} secunde","{n} jocuri","Jucător nou"
  ];

  /* ================= Magyar ================= */
  P.hu = [
    "Jawabni","Főoldal","Főoldal","Fiókom","Bejelentkezés","Kijelentkezés","Bejelentkezés","Vissza a főoldalra","Nyelv","Beállítások",
    "Egyenleg","Pontok","pont","Játékaim","Játékaim","Játék létrehozása","Új játék indítása","Kezdés most","Kilépés a játékból","Vendég",
    "Üdv, vendég","Játékfüzet","Nyomtatás","Az 1. számú kvízstúdió","Hogyan játsszak?","kategória","kategória körönként","max. pont kérdésenként","Élőben","Élő",
    "Két csapat verseng","Vezérlőpult","Ismerd meg a játékot","A játékról","Hogyan kell játszani","Kategóriák kiválasztása","Első lépés","Válaszd ki a kategóriáidat","Kiválasztott kategóriák","Játék és csapatnevek",
    "Játék neve","1. csapat","2. csapat","Az első csapat neve","A második csapat neve","Játék indítása","Hamarosan","Kategória keresése…","Minden kategória","Játéktábla",
    "Játék befejezése","Élő kör","A mi kulturális játékunk","Az általad választott kategóriák","Sárga lap · −100","Piros lap · −300","Válassz most kategóriákat","Most következik","Kérdés","Válasz",
    "Kategória","másodperc","Betöltés…","Ki válaszolt helyesen?","Senki","Nincs pont","Vissza a táblához","Soron","1. csapat","2. csapat",
    "Hangfelvétel","Válasz megjelenítése","A kérdés képe","Végeredmény","A kör véget ért","Győztes","Döntetlen","Játéknapló","Az archívumod","Összes játék",
    "Utolsó játék","Jelenlegi egyenleged","Sz.","Leírás","Dátum és idő","Még nincs játék","Napló törlése","A profilod","Személyes adatok","Felhasználónév",
    "E-mail","Telefonszám","Csatlakozott","Statisztikáim","Egyenleg feltöltése","A naplóm","Jelszó","Jelszó erőssége","Regisztráció","Belépés",
    "Új fiók","Új fiók létrehozása","Jelentkezz be","Már van fiókod?","Nincs fiókod?","Üdvözlünk","Üdv újra!","Pénztárca","Játékegyenleg feltöltése","játék",
    "játék","Legjobb ár","Rendelés összegzése","KWD","{n} / {m}","{n} pont","{n} kérdés","{n} másodperc","{n} játék","Új játékos"
  ];

  /* ================= Ελληνικά ================= */
  P.el = [
    "Jawabni","Αρχική","Αρχική","Ο λογαριασμός μου","Σύνδεση","Αποσύνδεση","Σύνδεση","Επιστροφή στην αρχική","Γλώσσα","Ρυθμίσεις",
    "Υπόλοιπο","Πόντοι","πόντος","Τα παιχνίδια μου","Τα παιχνίδια μου","Δημιουργία παιχνιδιού","Νέο παιχνίδι","Ξεκίνα τώρα","Έξοδος από το παιχνίδι","Επισκέπτης",
    "Γεια σου, επισκέπτη","Εγχειρίδιο παιχνιδιού","Εκτύπωση","Το Νο1 στούντιο κουίζ","Πώς παίζω;","κατηγορίες","κατηγορίες ανά γύρο","μέγιστοι πόντοι ανά ερώτηση","Ζωντανά τώρα","Ζωντανά",
    "Δύο ομάδες διαγωνίζονται","Πίνακας ελέγχου","Γνώρισε το παιχνίδι","Σχετικά με το παιχνίδι","Πώς παίζεται","Επιλογή κατηγοριών","Πρώτο βήμα","Διάλεξε τις κατηγορίες σου","Επιλεγμένες κατηγορίες","Ονόματα παιχνιδιού και ομάδων",
    "Όνομα παιχνιδιού","Ομάδα 1","Ομάδα 2","Όνομα πρώτης ομάδας","Όνομα δεύτερης ομάδας","Έναρξη παιχνιδιού","Σύντομα","Αναζήτηση κατηγορίας…","Όλες οι κατηγορίες","Ταμπλό παιχνιδιού",
    "Τερματισμός παιχνιδιού","Ζωντανός γύρος","Το πολιτιστικό μας παιχνίδι","Οι κατηγορίες που διάλεξες","Κίτρινη κάρτα · −100","Κόκκινη κάρτα · −300","Διάλεξε κατηγορίες τώρα","Σειρά της","Ερώτηση","Απάντηση",
    "Κατηγορία","δευτερόλεπτα","Φόρτωση…","Ποιος απάντησε σωστά;","Κανείς","Χωρίς πόντους","Πίσω στο ταμπλό","Σειρά","Ομάδα 1","Ομάδα 2",
    "Ηχητικό απόσπασμα","Εμφάνιση απάντησης","Εικόνα ερώτησης","Τελικό σκορ","Ο γύρος τελείωσε","Νικητής","Ισοπαλία","Ιστορικό παιχνιδιών","Το αρχείο σου","Σύνολο παιχνιδιών",
    "Τελευταίο παιχνίδι","Το τρέχον υπόλοιπό σου","Αρ.","Περιγραφή","Ημερομηνία και ώρα","Κανένα παιχνίδι ακόμη","Καθαρισμός ιστορικού","Το προφίλ σου","Προσωπικά στοιχεία","Όνομα χρήστη",
    "E-mail","Αριθμός τηλεφώνου","Εγγράφηκε στις","Τα στατιστικά μου","Ανανέωση υπολοίπου","Το ιστορικό μου","Κωδικός πρόσβασης","Ισχύς κωδικού","Εγγραφή","Είσοδος",
    "Νέος λογαριασμός","Δημιουργία νέου λογαριασμού","Συνδέσου","Έχεις ήδη λογαριασμό;","Δεν έχεις λογαριασμό;","Καλώς ήρθες","Καλώς ήρθες ξανά!","Πορτοφόλι","Ανανέωση υπολοίπου παιχνιδιού","παιχνίδι",
    "παιχνίδια","Καλύτερη τιμή","Σύνοψη παραγγελίας","KWD","{n} από {m}","{n} πόντοι","{n} ερωτήσεις","{n} δευτερόλεπτα","{n} παιχνίδια","Νέος παίκτης"
  ];

  /* ================= Русский ================= */
  P.ru = [
    "Jawabni","Главная","Главная","Мой аккаунт","Войти","Выйти","Вход","Вернуться на главную","Язык","Настройки",
    "Баланс","Очки","очко","Мои игры","Мои игры","Создать игру","Начать новую игру","Начать сейчас","Выйти из игры","Гость",
    "Привет, гость","Руководство игры","Печать","Викторина-студия №1","Как играть?","категорий","категорий за раунд","макс. очков за вопрос","В эфире","В эфире",
    "Две команды соревнуются","Панель","Познакомьтесь с игрой","Об игре","Как играть","Выбрать категории","Первый шаг","Выберите свои категории","Выбранные категории","Названия игры и команд",
    "Название игры","Команда 1","Команда 2","Название первой команды","Название второй команды","Начать игру","Скоро","Поиск категории…","Все категории","Игровое поле",
    "Завершить игру","Раунд в прямом эфире","Наша культурная игра","Выбранные вами категории","Жёлтая карточка · −100","Красная карточка · −300","Выберите категории сейчас","Сейчас ходит","Вопрос","Ответ",
    "Категория","секунд","Загрузка…","Кто ответил правильно?","Никто","Без очков","Назад к полю","Ход","Команда 1","Команда 2",
    "Аудиофрагмент","Показать ответ","Изображение к вопросу","Итоговый счёт","Раунд окончен","Победитель","Ничья","История игр","Ваш архив","Всего игр",
    "Последняя игра","Ваш текущий баланс","№","Описание","Дата и время","Игр пока нет","Очистить историю","Ваш профиль","Личные данные","Имя пользователя",
    "Эл. почта","Номер телефона","Дата регистрации","Моя статистика","Пополнить баланс","Моя история","Пароль","Надёжность пароля","Зарегистрироваться","Войти",
    "Новый аккаунт","Создать новый аккаунт","Войдите","Уже есть аккаунт?","Нет аккаунта?","Добро пожаловать","С возвращением!","Кошелёк","Пополнить игровой баланс","игра",
    "игр","Лучшая цена","Итог заказа","KWD","{n} из {m}","{n} очков","{n} вопросов","{n} секунд","{n} игр","Новый игрок"
  ];

  /* ================= Українська ================= */
  P.uk = [
    "Jawabni","Головна","Головна","Мій акаунт","Увійти","Вийти","Вхід","Повернутися на головну","Мова","Налаштування",
    "Баланс","Очки","очко","Мої ігри","Мої ігри","Створити гру","Почати нову гру","Почати зараз","Вийти з гри","Гість",
    "Привіт, гостю","Посібник гри","Друк","Вікторина-студія №1","Як грати?","категорій","категорій за раунд","макс. очок за питання","У прямому ефірі","Наживо",
    "Дві команди змагаються","Панель","Ознайомтеся з грою","Про гру","Як грати","Обрати категорії","Перший крок","Оберіть свої категорії","Обрані категорії","Назви гри та команд",
    "Назва гри","Команда 1","Команда 2","Назва першої команди","Назва другої команди","Почати гру","Незабаром","Пошук категорії…","Усі категорії","Ігрове поле",
    "Завершити гру","Раунд наживо","Наша культурна гра","Обрані вами категорії","Жовта картка · −100","Червона картка · −300","Оберіть категорії зараз","Зараз ходить","Питання","Відповідь",
    "Категорія","секунд","Завантаження…","Хто відповів правильно?","Ніхто","Без очок","Назад до поля","Хід","Команда 1","Команда 2",
    "Аудіофрагмент","Показати відповідь","Зображення до питання","Підсумковий рахунок","Раунд завершено","Переможець","Нічия","Історія ігор","Ваш архів","Усього ігор",
    "Остання гра","Ваш поточний баланс","№","Опис","Дата й час","Ігор ще немає","Очистити історію","Ваш профіль","Особисті дані","Ім'я користувача",
    "Ел. пошта","Номер телефону","Дата приєднання","Моя статистика","Поповнити баланс","Моя історія","Пароль","Надійність пароля","Зареєструватися","Увійти",
    "Новий акаунт","Створити новий акаунт","Увійдіть","Уже маєте акаунт?","Немає акаунта?","Ласкаво просимо","З поверненням!","Гаманець","Поповнити ігровий баланс","гра",
    "ігор","Найкраща ціна","Підсумок замовлення","KWD","{n} з {m}","{n} очок","{n} питань","{n} секунд","{n} ігор","Новий гравець"
  ];

  /* ================= Türkçe ================= */
  P.tr = [
    "Jawabni","Ana sayfa","Ana sayfa","Hesabım","Giriş yap","Çıkış yap","Giriş","Ana sayfaya dön","Dil","Ayarlar",
    "Bakiye","Puanlar","puan","Oyunlarım","Oyunlarım","Oyun oluştur","Yeni oyun başlat","Şimdi başla","Oyundan çık","Ziyaretçi",
    "Merhaba, ziyaretçi","Oyun kitapçığı","Yazdır","1 numaralı yarışma stüdyosu","Nasıl oynanır?","kategori","tur başına kategori","soru başına en yüksek puan","Şu an canlı","Canlı",
    "İki takım yarışıyor","Kontrol paneli","Oyunu tanı","Oyun hakkında","Nasıl oynanır","Kategorileri seç","İlk adım","Kategorilerini seç","Seçilen kategoriler","Oyun ve takım isimleri",
    "Oyun adı","Takım 1","Takım 2","Birinci takımın adı","İkinci takımın adı","Oyunu başlat","Yakında","Kategori ara…","Tüm kategoriler","Oyun tahtası",
    "Oyunu bitir","Canlı tur","Kültür oyunumuz","Seçtiğin kategoriler","Sarı kart · −100","Kırmızı kart · −300","Şimdi kategorileri seç","Sıra şu takımda","Soru","Cevap",
    "Kategori","saniye","Yükleniyor…","Kim doğru cevapladı?","Hiç kimse","Puan yok","Tahtaya dön","Sıra","Takım 1","Takım 2",
    "Ses kaydı","Cevabı göster","Soru görseli","Nihai skor","Tur bitti","Kazanan","Beraberlik","Oyun geçmişi","Arşivin","Toplam oyun",
    "Son oyun","Mevcut bakiyen","No","Açıklama","Tarih ve saat","Henüz oyun yok","Geçmişi temizle","Profilin","Kişisel bilgiler","Kullanıcı adı",
    "E-posta","Telefon numarası","Katılma tarihi","İstatistiklerim","Bakiye yükle","Geçmişim","Şifre","Şifre gücü","Kayıt ol","Giriş",
    "Yeni hesap","Yeni hesap oluştur","Giriş yap","Zaten hesabın var mı?","Hesabın yok mu?","Hoş geldin","Tekrar hoş geldin!","Cüzdan","Oyun bakiyesi yükle","oyun",
    "oyun","En avantajlı","Sipariş özeti","KWD","{m} üzerinden {n}","{n} puan","{n} soru","{n} saniye","{n} oyun","Yeni oyuncu"
  ];

  /* ================= Azərbaycanca ================= */
  P.az = [
    "Jawabni","Ana səhifə","Ana səhifə","Hesabım","Daxil ol","Çıxış","Giriş","Ana səhifəyə qayıt","Dil","Parametrlər",
    "Balans","Xallar","xal","Oyunlarım","Oyunlarım","Oyun yarat","Yeni oyuna başla","İndi başla","Oyundan çıx","Qonaq",
    "Salam, qonaq","Oyun kitabçası","Çap et","1 nömrəli viktorina studiyası","Necə oynayım?","kateqoriya","hər raundda kateqoriya","sual üçün maksimum xal","İndi canlı","Canlı",
    "İki komanda yarışır","İdarə paneli","Oyunla tanış ol","Oyun haqqında","Necə oynanılır","Kateqoriyaları seç","Birinci addım","Kateqoriyalarını seç","Seçilmiş kateqoriyalar","Oyun və komanda adları",
    "Oyunun adı","Komanda 1","Komanda 2","Birinci komandanın adı","İkinci komandanın adı","Oyuna başla","Tezliklə","Kateqoriya axtar…","Bütün kateqoriyalar","Oyun lövhəsi",
    "Oyunu bitir","Canlı raund","Mədəniyyət oyunumuz","Seçdiyin kateqoriyalar","Sarı vərəqə · −100","Qırmızı vərəqə · −300","İndi kateqoriyaları seç","Növbə","Sual","Cavab",
    "Kateqoriya","saniyə","Yüklənir…","Kim düzgün cavab verdi?","Heç kim","Xal yoxdur","Lövhəyə qayıt","Növbə","Komanda 1","Komanda 2",
    "Səs yazısı","Cavabı göstər","Sualın şəkli","Yekun hesab","Raund bitdi","Qalib","Heç-heçə","Oyun tarixçəsi","Arxiviniz","Ümumi oyunlar",
    "Son oyun","Cari balansınız","№","Təsvir","Tarix və saat","Hələ oyun yoxdur","Tarixçəni təmizlə","Profiliniz","Şəxsi məlumatlar","İstifadəçi adı",
    "E-poçt","Telefon nömrəsi","Qoşulma tarixi","Statistikam","Balansı artır","Tarixçəm","Şifrə","Şifrənin gücü","Qeydiyyat","Giriş",
    "Yeni hesab","Yeni hesab yarat","Daxil ol","Artıq hesabın var?","Hesabın yoxdur?","Xoş gəldin","Yenidən xoş gəldin!","Pulqabı","Oyun balansını artır","oyun",
    "oyun","Ən sərfəli","Sifariş xülasəsi","KWD","{m} -dən {n}","{n} xal","{n} sual","{n} saniyə","{n} oyun","Yeni oyunçu"
  ];

  /* ================= فارسی ================= */
  P.fa = [
    "جوابنی","صفحهٔ اصلی","خانه","حساب من","ورود","خروج","ورود به حساب","بازگشت به صفحهٔ اصلی","زبان","تنظیمات",
    "موجودی","امتیازها","امتیاز","بازی‌های من","بازی‌های من","ساخت بازی","شروع بازی جدید","اکنون شروع کن","خروج از بازی","مهمان",
    "سلام، مهمان","دفترچهٔ بازی","چاپ","استودیوی مسابقهٔ شمارهٔ یک","چطور بازی کنم؟","دسته","دسته در هر دور","بیشترین امتیاز هر پرسش","اکنون زنده","زنده",
    "دو تیم رقابت می‌کنند","پیشخوان","با بازی آشنا شو","دربارهٔ بازی","روش بازی","انتخاب دسته‌ها","گام نخست","دسته‌هایت را انتخاب کن","دسته‌های انتخاب‌شده","نام بازی و تیم‌ها",
    "نام بازی","تیم ۱","تیم ۲","نام تیم اول","نام تیم دوم","شروع بازی","به‌زودی","جست‌وجوی دسته…","همهٔ دسته‌ها","تختهٔ بازی",
    "پایان بازی","دور زنده","بازی فرهنگی ما","دسته‌هایی که انتخاب کردی","کارت زرد · −۱۰۰","کارت قرمز · −۳۰۰","همین حالا دسته‌ها را انتخاب کن","نوبت","پرسش","پاسخ",
    "دسته","ثانیه","در حال بارگذاری…","چه کسی درست پاسخ داد؟","هیچ‌کس","بدون امتیاز","بازگشت به تخته","نوبت","تیم ۱","تیم ۲",
    "قطعهٔ صوتی","نمایش پاسخ","تصویر پرسش","نتیجهٔ نهایی","دور تمام شد","برنده","مساوی","تاریخچهٔ بازی‌ها","بایگانی تو","مجموع بازی‌ها",
    "آخرین بازی","موجودی کنونی تو","شماره","توضیح","تاریخ و ساعت","هنوز بازی‌ای نیست","پاک کردن تاریخچه","نمایهٔ تو","اطلاعات شخصی","نام کاربری",
    "رایانامه","شمارهٔ تلفن","تاریخ عضویت","آمار من","افزایش موجودی","تاریخچهٔ من","گذرواژه","قدرت گذرواژه","ثبت‌نام","ورود",
    "حساب جدید","ایجاد حساب جدید","وارد شو","از قبل حساب داری؟","حساب نداری؟","خوش آمدی","بازگشتت خوش!","کیف پول","افزایش موجودی بازی","بازی",
    "بازی","به‌صرفه‌ترین","خلاصهٔ سفارش","دینار","{n} از {m}","{n} امتیاز","{n} پرسش","{n} ثانیه","{n} بازی","بازیکن تازه"
  ];

  /* ================= Kurdî ================= */
  P.ku = [
    "Jawabni","Rûpela sereke","Serrûpel","Hesabê min","Têkeve","Derkeve","Têketin","Vegere rûpela sereke","Ziman","Mîheng",
    "Balans","Xal","xal","Lîstikên min","Lîstikên min","Lîstikê çêke","Lîstikeke nû dest pê bike","Niha dest pê bike","Ji lîstikê derkeve","Mêvan",
    "Silav, mêvan","Pirtûkoka lîstikê","Çap bike","Studyoya pirsyaran a yekem","Ez çawa dilîzim?","kategorî","kategorî di her gerê de","xalên herî zêde ji bo pirsê","Niha zindî","Zindî",
    "Du tîm pêşbaziyê dikin","Panela kontrolê","Lîstikê nas bike","Derbarê lîstikê","Çawa tê lîstin","Kategoriyan hilbijêre","Gava yekem","Kategoriyên xwe hilbijêre","Kategoriyên hilbijartî","Navên lîstik û tîman",
    "Navê lîstikê","Tîm 1","Tîm 2","Navê tîma yekem","Navê tîma duyem","Lîstikê dest pê bike","Nêzîk e","Li kategoriyekê bigere…","Hemû kategorî","Textê lîstikê",
    "Lîstikê biqedîne","Gera zindî","Lîstika me ya çandî","Kategoriyên te hilbijartin","Karta zer · −100","Karta sor · −300","Niha kategoriyan hilbijêre","Dor li","Pirs","Bersiv",
    "Kategorî","çirke","Tê barkirin…","Kê rast bersiv da?","Tu kes","Bê xal","Vegere textê","Dor","Tîm 1","Tîm 2",
    "Deng","Bersivê nîşan bide","Wêneya pirsê","Encama dawî","Ger qediya","Serketî","Wekhevî","Dîroka lîstikan","Arşîva te","Hemû lîstik",
    "Lîstika dawî","Balansa te ya niha","Jm.","Rave","Dîrok û saet","Hîn lîstik tune","Dîrokê pak bike","Profîla te","Agahiyên kesane","Navê bikarhêner",
    "E-nameya","Hejmara telefonê","Roja tevlîbûnê","Statîstîkên min","Balansê zêde bike","Dîroka min","Şîfre","Hêza şîfreyê","Tomar bibe","Têkeve",
    "Hesabê nû","Hesabekî nû çêke","Têkeve","Berê hesabê te heye?","Hesabê te tune?","Bi xêr hatî","Vegera te xweş!","Berîk","Balansa lîstikê zêde bike","lîstik",
    "lîstik","Herî erzan","Kurteya siparîşê","KWD","{n} ji {m}","{n} xal","{n} pirs","{n} çirke","{n} lîstik","Lîstikvanê nû"
  ];

  /* ================= اردو ================= */
  P.ur = [
    "جوابنی","مرکزی صفحہ","ہوم","میرا اکاؤنٹ","سائن اِن","سائن آؤٹ","لاگ اِن","مرکزی صفحے پر واپس","زبان","ترتیبات",
    "بیلنس","پوائنٹس","پوائنٹ","میرے کھیل","میرے کھیل","کھیل بنائیں","نیا کھیل شروع کریں","ابھی شروع کریں","کھیل سے باہر نکلیں","مہمان",
    "خوش آمدید، مہمان","کھیل کا کتابچہ","پرنٹ","نمبر ایک کوئز اسٹوڈیو","میں کیسے کھیلوں؟","اقسام","فی راؤنڈ اقسام","فی سوال زیادہ سے زیادہ پوائنٹس","ابھی لائیو","لائیو",
    "دو ٹیمیں مقابلہ کرتی ہیں","ڈیش بورڈ","کھیل کو جانیں","کھیل کے بارے میں","کھیلنے کا طریقہ","اقسام منتخب کریں","پہلا قدم","اپنی اقسام منتخب کریں","منتخب اقسام","کھیل اور ٹیموں کے نام",
    "کھیل کا نام","ٹیم ۱","ٹیم ۲","پہلی ٹیم کا نام","دوسری ٹیم کا نام","کھیل شروع کریں","جلد آ رہا ہے","قسم تلاش کریں…","تمام اقسام","کھیل کا بورڈ",
    "کھیل ختم کریں","لائیو راؤنڈ","ہمارا ثقافتی کھیل","آپ کی منتخب کردہ اقسام","پیلا کارڈ · −۱۰۰","سرخ کارڈ · −۳۰۰","ابھی اقسام منتخب کریں","اب باری ہے","سوال","جواب",
    "قسم","سیکنڈ","لوڈ ہو رہا ہے…","کس نے درست جواب دیا؟","کوئی نہیں","کوئی پوائنٹ نہیں","بورڈ پر واپس","باری","ٹیم ۱","ٹیم ۲",
    "آڈیو کلپ","جواب دکھائیں","سوال کی تصویر","حتمی نتیجہ","راؤنڈ ختم","فاتح","برابر","کھیلوں کی تاریخ","آپ کا آرکائیو","کل کھیل",
    "آخری کھیل","آپ کا موجودہ بیلنس","نمبر","تفصیل","تاریخ اور وقت","ابھی کوئی کھیل نہیں","تاریخ صاف کریں","آپ کا پروفائل","ذاتی معلومات","صارف نام",
    "ای میل","فون نمبر","شمولیت کی تاریخ","میرے اعداد و شمار","بیلنس ری چارج کریں","میری تاریخ","پاس ورڈ","پاس ورڈ کی مضبوطی","رجسٹر کریں","داخل ہوں",
    "نیا اکاؤنٹ","نیا اکاؤنٹ بنائیں","لاگ اِن کریں","پہلے سے اکاؤنٹ ہے؟","اکاؤنٹ نہیں ہے؟","خوش آمدید","واپسی مبارک!","بٹوہ","کھیل کا بیلنس ری چارج کریں","کھیل",
    "کھیل","بہترین قیمت","آرڈر کا خلاصہ","دینار","{m} میں سے {n}","{n} پوائنٹس","{n} سوالات","{n} سیکنڈ","{n} کھیل","نیا کھلاڑی"
  ];

  /* ================= پښتو ================= */
  P.ps = [
    "جوابني","کورپاڼه","کور","زما حساب","ننوتل","وتل","ننوتنه","کورپاڼې ته بېرته","ژبه","تنظیمات",
    "بیلانس","ټکي","ټکی","زما لوبې","زما لوبې","لوبه جوړول","نوې لوبه پیل کړه","اوس پیل کړه","له لوبې وتل","میلمه",
    "سلام، میلمه","د لوبې کتابګوټی","چاپ","لومړی پوښتنیز استودیو","څنګه ولوبېږم؟","ډلې","په هر پړاو کې ډلې","د پوښتنې لپاره ډېر ټکي","اوس ژوندۍ","ژوندۍ",
    "دوه ټیمونه سیالي کوي","کنټرول پاڼه","لوبه وپېژنه","د لوبې په اړه","د لوبې طریقه","ډلې وټاکه","لومړی ګام","خپلې ډلې وټاکه","ټاکل شوې ډلې","د لوبې او ټیمونو نومونه",
    "د لوبې نوم","ټیم ۱","ټیم ۲","د لومړي ټیم نوم","د دویم ټیم نوم","لوبه پیل کړه","ژر راځي","ډله ولټوه…","ټولې ډلې","د لوبې تخته",
    "لوبه پای ته ورسوه","ژوندی پړاو","زموږ کلتوري لوبه","هغه ډلې چې تا وټاکلې","ژېړ کارت · −۱۰۰","سور کارت · −۳۰۰","اوس ډلې وټاکه","اوس وار دی د","پوښتنه","ځواب",
    "ډله","ثانیې","بارېږي…","چا سم ځواب ورکړ؟","هیڅوک","بې ټکو","تختې ته بېرته","وار","ټیم ۱","ټیم ۲",
    "غږیزه ټوټه","ځواب وښیه","د پوښتنې انځور","وروستۍ پایله","پړاو پای ته ورسېد","بریالی","برابري","د لوبو تاریخچه","ستا آرشیف","ټولې لوبې",
    "وروستۍ لوبه","ستا اوسنی بیلانس","شمېره","تشریح","نېټه او وخت","تر اوسه لوبه نشته","تاریخچه پاکه کړه","ستا پروفایل","شخصي معلومات","کارن نوم",
    "برېښنالیک","د تلیفون شمېره","د شاملېدو نېټه","زما شمېرې","بیلانس ډک کړه","زما تاریخچه","پټنوم","د پټنوم ځواک","نوم لیکنه","ننوتل",
    "نوی حساب","نوی حساب جوړ کړه","ننوځه","دمخه حساب لرې؟","حساب نه لرې؟","ښه راغلې","بېرته ښه راغلې!","کڅوړه","د لوبې بیلانس ډک کړه","لوبه",
    "لوبې","تر ټولو ښه","د سپارښتنې لنډیز","دینار","{n} له {m}","{n} ټکي","{n} پوښتنې","{n} ثانیې","{n} لوبې","نوی لوبغاړی"
  ];

  /* ================= עברית ================= */
  P.he = [
    "Jawabni","דף הבית","בית","החשבון שלי","התחברות","התנתקות","התחברות","חזרה לדף הבית","שפה","הגדרות",
    "יתרה","נקודות","נקודה","המשחקים שלי","המשחקים שלי","יצירת משחק","התחל משחק חדש","התחל עכשיו","יציאה מהמשחק","אורח",
    "שלום, אורח","חוברת המשחק","הדפסה","אולפן החידונים מספר 1","איך משחקים?","קטגוריות","קטגוריות לסבב","ניקוד מרבי לשאלה","משדר חי","חי",
    "שתי קבוצות מתחרות","לוח בקרה","הכר את המשחק","אודות המשחק","איך משחקים","בחר קטגוריות","שלב ראשון","בחר את הקטגוריות שלך","קטגוריות שנבחרו","שמות המשחק והקבוצות",
    "שם המשחק","קבוצה 1","קבוצה 2","שם הקבוצה הראשונה","שם הקבוצה השנייה","התחל את המשחק","בקרוב","חפש קטגוריה…","כל הקטגוריות","לוח המשחק",
    "סיים את המשחק","סבב חי","משחק התרבות שלנו","הקטגוריות שבחרת","כרטיס צהוב · −100","כרטיס אדום · −300","בחר קטגוריות עכשיו","התור של","שאלה","תשובה",
    "קטגוריה","שניות","טוען…","מי ענה נכון?","אף אחד","ללא נקודות","חזרה ללוח","תור","קבוצה 1","קבוצה 2",
    "קטע שמע","הצג את התשובה","תמונת השאלה","תוצאה סופית","הסבב הסתיים","המנצח","תיקו","היסטוריית משחקים","הארכיון שלך","סך המשחקים",
    "המשחק האחרון","היתרה הנוכחית שלך","מס'","תיאור","תאריך ושעה","אין עדיין משחקים","נקה היסטוריה","הפרופיל שלך","פרטים אישיים","שם משתמש",
    "דוא\"ל","מספר טלפון","הצטרף בתאריך","הסטטיסטיקה שלי","טעינת יתרה","ההיסטוריה שלי","סיסמה","חוזק הסיסמה","הרשמה","כניסה",
    "חשבון חדש","צור חשבון חדש","התחבר","כבר יש לך חשבון?","אין לך חשבון?","ברוך הבא","ברוך שובך!","ארנק","טעינת יתרת משחק","משחק",
    "משחקים","המשתלם ביותר","סיכום ההזמנה","KWD","{n} מתוך {m}","{n} נקודות","{n} שאלות","{n} שניות","{n} משחקים","שחקן חדש"
  ];

  /* ================= हिन्दी ================= */
  P.hi = [
    "जवाबनी","मुख्य पृष्ठ","होम","मेरा खाता","साइन इन","साइन आउट","लॉग इन","मुख्य पृष्ठ पर वापस","भाषा","सेटिंग्स",
    "बैलेंस","अंक","अंक","मेरे खेल","मेरे खेल","खेल बनाएँ","नया खेल शुरू करें","अभी शुरू करें","खेल से बाहर निकलें","अतिथि",
    "नमस्ते, अतिथि","खेल पुस्तिका","प्रिंट करें","नंबर 1 क्विज़ स्टूडियो","मैं कैसे खेलूँ?","श्रेणियाँ","प्रति राउंड श्रेणियाँ","प्रति प्रश्न अधिकतम अंक","अभी लाइव","लाइव",
    "दो टीमें मुकाबला करती हैं","डैशबोर्ड","खेल को जानें","खेल के बारे में","कैसे खेलें","श्रेणियाँ चुनें","पहला कदम","अपनी श्रेणियाँ चुनें","चुनी गई श्रेणियाँ","खेल और टीमों के नाम",
    "खेल का नाम","टीम 1","टीम 2","पहली टीम का नाम","दूसरी टीम का नाम","खेल शुरू करें","जल्द आ रहा है","श्रेणी खोजें…","सभी श्रेणियाँ","खेल बोर्ड",
    "खेल समाप्त करें","लाइव राउंड","हमारा सांस्कृतिक खेल","आपके द्वारा चुनी गई श्रेणियाँ","पीला कार्ड · −100","लाल कार्ड · −300","अभी श्रेणियाँ चुनें","अब बारी है","प्रश्न","उत्तर",
    "श्रेणी","सेकंड","लोड हो रहा है…","किसने सही उत्तर दिया?","कोई नहीं","कोई अंक नहीं","बोर्ड पर वापस","बारी","टीम 1","टीम 2",
    "ऑडियो क्लिप","उत्तर दिखाएँ","प्रश्न की तस्वीर","अंतिम स्कोर","राउंड समाप्त","विजेता","बराबरी","खेल इतिहास","आपका संग्रह","कुल खेल",
    "अंतिम खेल","आपका वर्तमान बैलेंस","क्रम","विवरण","दिनांक और समय","अभी कोई खेल नहीं","इतिहास साफ़ करें","आपकी प्रोफ़ाइल","व्यक्तिगत जानकारी","उपयोगकर्ता नाम",
    "ईमेल","फ़ोन नंबर","शामिल होने की तिथि","मेरे आँकड़े","बैलेंस रिचार्ज करें","मेरा इतिहास","पासवर्ड","पासवर्ड की मजबूती","रजिस्टर करें","लॉग इन",
    "नया खाता","नया खाता बनाएँ","लॉग इन करें","पहले से खाता है?","खाता नहीं है?","स्वागत है","फिर से स्वागत है!","वॉलेट","खेल बैलेंस रिचार्ज करें","खेल",
    "खेल","सर्वोत्तम मूल्य","ऑर्डर सारांश","KWD","{m} में से {n}","{n} अंक","{n} प्रश्न","{n} सेकंड","{n} खेल","नया खिलाड़ी"
  ];

  /* ================= বাংলা ================= */
  P.bn = [
    "জাওয়াবনি","প্রধান পাতা","হোম","আমার অ্যাকাউন্ট","সাইন ইন","সাইন আউট","লগ ইন","প্রধান পাতায় ফিরুন","ভাষা","সেটিংস",
    "ব্যালেন্স","পয়েন্ট","পয়েন্ট","আমার খেলা","আমার খেলা","খেলা তৈরি করুন","নতুন খেলা শুরু করুন","এখনই শুরু করুন","খেলা থেকে বেরিয়ে যান","অতিথি",
    "হ্যালো, অতিথি","খেলার পুস্তিকা","প্রিন্ট","১ নম্বর কুইজ স্টুডিও","কীভাবে খেলব?","বিভাগ","প্রতি রাউন্ডে বিভাগ","প্রতি প্রশ্নে সর্বোচ্চ পয়েন্ট","এখন লাইভ","লাইভ",
    "দুটি দল প্রতিযোগিতা করে","ড্যাশবোর্ড","খেলাটি জানুন","খেলা সম্পর্কে","কীভাবে খেলবেন","বিভাগ নির্বাচন করুন","প্রথম ধাপ","আপনার বিভাগ বেছে নিন","নির্বাচিত বিভাগ","খেলা ও দলের নাম",
    "খেলার নাম","দল ১","দল ২","প্রথম দলের নাম","দ্বিতীয় দলের নাম","খেলা শুরু করুন","শীঘ্রই আসছে","বিভাগ খুঁজুন…","সব বিভাগ","খেলার বোর্ড",
    "খেলা শেষ করুন","লাইভ রাউন্ড","আমাদের সাংস্কৃতিক খেলা","আপনি যে বিভাগগুলো বেছেছেন","হলুদ কার্ড · −১০০","লাল কার্ড · −৩০০","এখনই বিভাগ বেছে নিন","এখন পালা","প্রশ্ন","উত্তর",
    "বিভাগ","সেকেন্ড","লোড হচ্ছে…","কে সঠিক উত্তর দিল?","কেউ নয়","কোনো পয়েন্ট নেই","বোর্ডে ফিরুন","পালা","দল ১","দল ২",
    "অডিও ক্লিপ","উত্তর দেখান","প্রশ্নের ছবি","চূড়ান্ত ফলাফল","রাউন্ড শেষ","বিজয়ী","ড্র","খেলার ইতিহাস","আপনার আর্কাইভ","মোট খেলা",
    "শেষ খেলা","আপনার বর্তমান ব্যালেন্স","ক্রম","বিবরণ","তারিখ ও সময়","এখনও কোনো খেলা নেই","ইতিহাস মুছুন","আপনার প্রোফাইল","ব্যক্তিগত তথ্য","ব্যবহারকারীর নাম",
    "ইমেইল","ফোন নম্বর","যোগদানের তারিখ","আমার পরিসংখ্যান","ব্যালেন্স রিচার্জ করুন","আমার ইতিহাস","পাসওয়ার্ড","পাসওয়ার্ডের শক্তি","নিবন্ধন করুন","প্রবেশ",
    "নতুন অ্যাকাউন্ট","নতুন অ্যাকাউন্ট তৈরি করুন","লগ ইন করুন","আগে থেকেই অ্যাকাউন্ট আছে?","অ্যাকাউন্ট নেই?","স্বাগতম","আবার স্বাগতম!","ওয়ালেট","খেলার ব্যালেন্স রিচার্জ করুন","খেলা",
    "খেলা","সেরা মূল্য","অর্ডার সারাংশ","KWD","{m}-এর {n}","{n} পয়েন্ট","{n} প্রশ্ন","{n} সেকেন্ড","{n} খেলা","নতুন খেলোয়াড়"
  ];

  /* ================= தமிழ் ================= */
  P.ta = [
    "ஜவாப்னி","முகப்பு","முகப்பு","என் கணக்கு","உள்நுழை","வெளியேறு","உள்நுழைவு","முகப்புக்குத் திரும்பு","மொழி","அமைப்புகள்",
    "இருப்பு","புள்ளிகள்","புள்ளி","என் விளையாட்டுகள்","என் விளையாட்டுகள்","விளையாட்டை உருவாக்கு","புதிய விளையாட்டைத் தொடங்கு","இப்போது தொடங்கு","விளையாட்டிலிருந்து வெளியேறு","விருந்தினர்",
    "வணக்கம், விருந்தினரே","விளையாட்டு கையேடு","அச்சிடு","முதன்மையான வினாடி வினா ஸ்டூடியோ","எப்படி விளையாடுவது?","பிரிவுகள்","சுற்றுக்கு பிரிவுகள்","கேள்விக்கு அதிகபட்ச புள்ளிகள்","இப்போது நேரலை","நேரலை",
    "இரு அணிகள் போட்டியிடுகின்றன","கட்டுப்பாட்டுப் பலகை","விளையாட்டை அறிக","விளையாட்டு பற்றி","எப்படி விளையாடுவது","பிரிவுகளைத் தேர்வு செய்","முதல் படி","உங்கள் பிரிவுகளைத் தேர்வு செய்","தேர்ந்தெடுத்த பிரிவுகள்","விளையாட்டு மற்றும் அணிப் பெயர்கள்",
    "விளையாட்டின் பெயர்","அணி 1","அணி 2","முதல் அணியின் பெயர்","இரண்டாம் அணியின் பெயர்","விளையாட்டைத் தொடங்கு","விரைவில்","பிரிவைத் தேடு…","அனைத்து பிரிவுகள்","விளையாட்டுப் பலகை",
    "விளையாட்டை முடி","நேரலை சுற்று","எங்கள் கலாச்சார விளையாட்டு","நீங்கள் தேர்ந்தெடுத்த பிரிவுகள்","மஞ்சள் அட்டை · −100","சிவப்பு அட்டை · −300","இப்போது பிரிவுகளைத் தேர்வு செய்","இப்போது முறை","கேள்வி","பதில்",
    "பிரிவு","வினாடிகள்","ஏற்றுகிறது…","சரியாக பதிலளித்தது யார்?","யாருமில்லை","புள்ளிகள் இல்லை","பலகைக்குத் திரும்பு","முறை","அணி 1","அணி 2",
    "ஒலிப் பதிவு","பதிலைக் காட்டு","கேள்வியின் படம்","இறுதி மதிப்பெண்","சுற்று முடிந்தது","வெற்றியாளர்","சமநிலை","விளையாட்டு வரலாறு","உங்கள் காப்பகம்","மொத்த விளையாட்டுகள்",
    "கடைசி விளையாட்டு","உங்கள் தற்போதைய இருப்பு","எண்","விளக்கம்","தேதி மற்றும் நேரம்","இன்னும் விளையாட்டுகள் இல்லை","வரலாற்றை அழி","உங்கள் சுயவிவரம்","தனிப்பட்ட தகவல்","பயனர் பெயர்",
    "மின்னஞ்சல்","தொலைபேசி எண்","சேர்ந்த தேதி","என் புள்ளிவிவரங்கள்","இருப்பை நிரப்பு","என் வரலாறு","கடவுச்சொல்","கடவுச்சொல் வலிமை","பதிவு செய்","நுழை",
    "புதிய கணக்கு","புதிய கணக்கை உருவாக்கு","உள்நுழைக","ஏற்கனவே கணக்கு உள்ளதா?","கணக்கு இல்லையா?","வரவேற்கிறோம்","மீண்டும் வரவேற்கிறோம்!","பணப்பை","விளையாட்டு இருப்பை நிரப்பு","விளையாட்டு",
    "விளையாட்டுகள்","சிறந்த மதிப்பு","ஆர்டர் சுருக்கம்","KWD","{m} இல் {n}","{n} புள்ளிகள்","{n} கேள்விகள்","{n} வினாடிகள்","{n} விளையாட்டுகள்","புதிய வீரர்"
  ];

  /* ================= Bahasa Indonesia ================= */
  P.id = [
    "Jawabni","Beranda","Beranda","Akun saya","Masuk","Keluar","Masuk","Kembali ke beranda","Bahasa","Pengaturan",
    "Saldo","Poin","poin","Permainan saya","Permainan saya","Buat permainan","Mulai permainan baru","Mulai sekarang","Keluar dari permainan","Tamu",
    "Halo, tamu","Buku panduan permainan","Cetak","Studio kuis nomor 1","Bagaimana cara bermain?","kategori","kategori per ronde","poin maksimal per soal","Sedang langsung","Langsung",
    "Dua tim bertanding","Dasbor","Kenali permainan","Tentang permainan","Cara bermain","Pilih kategori","Langkah pertama","Pilih kategorimu","Kategori terpilih","Nama permainan dan tim",
    "Nama permainan","Tim 1","Tim 2","Nama tim pertama","Nama tim kedua","Mulai permainan","Segera hadir","Cari kategori…","Semua kategori","Papan permainan",
    "Akhiri permainan","Ronde langsung","Permainan budaya kami","Kategori yang kamu pilih","Kartu kuning · −100","Kartu merah · −300","Pilih kategori sekarang","Sekarang giliran","Pertanyaan","Jawaban",
    "Kategori","detik","Memuat…","Siapa yang menjawab benar?","Tidak ada","Tanpa poin","Kembali ke papan","Giliran","Tim 1","Tim 2",
    "Klip audio","Tampilkan jawaban","Gambar pertanyaan","Skor akhir","Ronde selesai","Pemenang","Seri","Riwayat permainan","Arsipmu","Total permainan",
    "Permainan terakhir","Saldomu saat ini","No.","Deskripsi","Tanggal dan waktu","Belum ada permainan","Hapus riwayat","Profilmu","Informasi pribadi","Nama pengguna",
    "Email","Nomor telepon","Bergabung pada","Statistik saya","Isi ulang saldo","Riwayat saya","Kata sandi","Kekuatan kata sandi","Daftar","Masuk",
    "Akun baru","Buat akun baru","Masuk","Sudah punya akun?","Belum punya akun?","Selamat datang","Selamat datang kembali!","Dompet","Isi ulang saldo permainan","permainan",
    "permainan","Nilai terbaik","Ringkasan pesanan","KWD","{n} dari {m}","{n} poin","{n} pertanyaan","{n} detik","{n} permainan","Pemain baru"
  ];

  /* ================= Bahasa Melayu ================= */
  P.ms = [
    "Jawabni","Laman utama","Utama","Akaun saya","Log masuk","Log keluar","Log masuk","Kembali ke laman utama","Bahasa","Tetapan",
    "Baki","Mata","mata","Permainan saya","Permainan saya","Cipta permainan","Mulakan permainan baharu","Mula sekarang","Keluar dari permainan","Tetamu",
    "Helo, tetamu","Buku panduan permainan","Cetak","Studio kuiz nombor 1","Bagaimana saya bermain?","kategori","kategori setiap pusingan","mata maksimum setiap soalan","Sedang langsung","Langsung",
    "Dua pasukan bersaing","Papan pemuka","Kenali permainan","Tentang permainan","Cara bermain","Pilih kategori","Langkah pertama","Pilih kategori anda","Kategori dipilih","Nama permainan dan pasukan",
    "Nama permainan","Pasukan 1","Pasukan 2","Nama pasukan pertama","Nama pasukan kedua","Mulakan permainan","Akan datang","Cari kategori…","Semua kategori","Papan permainan",
    "Tamatkan permainan","Pusingan langsung","Permainan budaya kami","Kategori yang anda pilih","Kad kuning · −100","Kad merah · −300","Pilih kategori sekarang","Kini giliran","Soalan","Jawapan",
    "Kategori","saat","Memuatkan…","Siapa menjawab dengan betul?","Tiada sesiapa","Tiada mata","Kembali ke papan","Giliran","Pasukan 1","Pasukan 2",
    "Klip audio","Tunjukkan jawapan","Gambar soalan","Skor akhir","Pusingan tamat","Pemenang","Seri","Sejarah permainan","Arkib anda","Jumlah permainan",
    "Permainan terakhir","Baki semasa anda","No.","Keterangan","Tarikh dan masa","Belum ada permainan","Kosongkan sejarah","Profil anda","Maklumat peribadi","Nama pengguna",
    "E-mel","Nombor telefon","Menyertai pada","Statistik saya","Tambah nilai baki","Sejarah saya","Kata laluan","Kekuatan kata laluan","Daftar","Masuk",
    "Akaun baharu","Cipta akaun baharu","Log masuk","Sudah ada akaun?","Belum ada akaun?","Selamat datang","Selamat kembali!","Dompet","Tambah nilai baki permainan","permainan",
    "permainan","Nilai terbaik","Ringkasan pesanan","KWD","{n} daripada {m}","{n} mata","{n} soalan","{n} saat","{n} permainan","Pemain baharu"
  ];

  /* ================= 中文 ================= */
  P.zh = [
    "Jawabni","首页","首页","我的账户","登录","退出登录","登录","返回首页","语言","设置",
    "余额","积分","分","我的游戏","我的游戏","创建游戏","开始新游戏","立即开始","退出游戏","访客",
    "你好，访客","游戏手册","打印","第一竞猜工作室","怎么玩？","个类别","每轮类别数","每题最高分","正在直播","直播",
    "两队对决","控制面板","了解游戏","关于游戏","玩法","选择类别","第一步","选择你的类别","已选类别","游戏与队伍名称",
    "游戏名称","队伍 1","队伍 2","第一队名称","第二队名称","开始游戏","即将推出","搜索类别…","全部类别","游戏面板",
    "结束游戏","直播回合","我们的文化游戏","你选择的类别","黄牌 · −100","红牌 · −300","现在选择类别","当前轮到","问题","答案",
    "类别","秒","加载中…","谁答对了？","无人","不得分","返回面板","轮到","队伍 1","队伍 2",
    "音频片段","显示答案","题目图片","最终得分","本轮结束","获胜者","平局","游戏记录","你的档案","游戏总数",
    "上一局游戏","你当前的余额","序号","描述","日期与时间","还没有游戏","清除记录","你的资料","个人信息","用户名",
    "电子邮箱","电话号码","加入日期","我的统计","充值余额","我的记录","密码","密码强度","注册","登录",
    "新账户","创建新账户","登录","已经有账户了？","还没有账户？","欢迎","欢迎回来！","钱包","充值游戏余额","局",
    "局","最超值","订单摘要","KWD","{m} 中的 {n}","{n} 分","{n} 道题","{n} 秒","{n} 局","新玩家"
  ];

  /* ================= 日本語 ================= */
  P.ja = [
    "Jawabni","ホーム","ホーム","マイアカウント","ログイン","ログアウト","ログイン","ホームに戻る","言語","設定",
    "残高","ポイント","ポイント","マイゲーム","マイゲーム","ゲームを作成","新しいゲームを開始","今すぐ開始","ゲームを終了する","ゲスト",
    "こんにちは、ゲストさん","ゲームブック","印刷","No.1 クイズスタジオ","遊び方は？","カテゴリー","1ラウンドあたりのカテゴリー","1問あたりの最高点","ライブ配信中","ライブ",
    "2チームが対戦","ダッシュボード","ゲームを知る","ゲームについて","遊び方","カテゴリーを選ぶ","最初のステップ","カテゴリーを選択","選択したカテゴリー","ゲーム名とチーム名",
    "ゲーム名","チーム1","チーム2","1つ目のチーム名","2つ目のチーム名","ゲームを開始","近日公開","カテゴリーを検索…","すべてのカテゴリー","ゲームボード",
    "ゲームを終了","ライブラウンド","私たちの教養ゲーム","選んだカテゴリー","イエローカード · −100","レッドカード · −300","今すぐカテゴリーを選ぶ","現在の手番","質問","答え",
    "カテゴリー","秒","読み込み中…","正解したのは誰？","なし","得点なし","ボードに戻る","手番","チーム1","チーム2",
    "音声クリップ","答えを表示","問題の画像","最終スコア","ラウンド終了","勝者","引き分け","ゲーム履歴","あなたのアーカイブ","ゲーム総数",
    "最後のゲーム","現在の残高","番号","説明","日付と時刻","まだゲームがありません","履歴を消去","あなたのプロフィール","個人情報","ユーザー名",
    "メールアドレス","電話番号","登録日","マイ統計","残高をチャージ","マイ履歴","パスワード","パスワードの強度","登録","ログイン",
    "新規アカウント","新しいアカウントを作成","ログイン","すでにアカウントをお持ちですか？","アカウントをお持ちでないですか？","ようこそ","おかえりなさい！","ウォレット","ゲーム残高をチャージ","ゲーム",
    "ゲーム","最もお得","注文の概要","KWD","{m} 中 {n}","{n} ポイント","{n} 問","{n} 秒","{n} ゲーム","新しいプレイヤー"
  ];

  /* ================= 한국어 ================= */
  P.ko = [
    "Jawabni","홈","홈","내 계정","로그인","로그아웃","로그인","홈으로 돌아가기","언어","설정",
    "잔액","점수","점","내 게임","내 게임","게임 만들기","새 게임 시작","지금 시작","게임 나가기","손님",
    "안녕하세요, 손님","게임 안내서","인쇄","1위 퀴즈 스튜디오","어떻게 플레이하나요?","개 카테고리","라운드당 카테고리","문제당 최고 점수","지금 라이브","라이브",
    "두 팀이 겨룹니다","대시보드","게임 알아보기","게임 소개","플레이 방법","카테고리 선택","첫 번째 단계","카테고리를 선택하세요","선택한 카테고리","게임 및 팀 이름",
    "게임 이름","팀 1","팀 2","첫 번째 팀 이름","두 번째 팀 이름","게임 시작","곧 출시","카테고리 검색…","모든 카테고리","게임 보드",
    "게임 종료","라이브 라운드","우리의 교양 게임","선택한 카테고리","옐로카드 · −100","레드카드 · −300","지금 카테고리를 선택하세요","현재 차례","질문","정답",
    "카테고리","초","불러오는 중…","누가 정답을 맞혔나요?","아무도 없음","점수 없음","보드로 돌아가기","차례","팀 1","팀 2",
    "오디오 클립","정답 보기","문제 이미지","최종 점수","라운드 종료","우승자","무승부","게임 기록","내 보관함","전체 게임 수",
    "마지막 게임","현재 잔액","번호","설명","날짜 및 시간","아직 게임이 없습니다","기록 지우기","내 프로필","개인 정보","사용자 이름",
    "이메일","전화번호","가입일","내 통계","잔액 충전","내 기록","비밀번호","비밀번호 강도","가입하기","로그인",
    "새 계정","새 계정 만들기","로그인","이미 계정이 있으신가요?","계정이 없으신가요?","환영합니다","다시 오신 것을 환영합니다!","지갑","게임 잔액 충전","게임",
    "게임","최고의 가치","주문 요약","KWD","{m} 중 {n}","{n}점","{n}문항","{n}초","{n}게임","새 플레이어"
  ];

  /* ================= ไทย ================= */
  P.th = [
    "Jawabni","หน้าแรก","หน้าแรก","บัญชีของฉัน","เข้าสู่ระบบ","ออกจากระบบ","เข้าสู่ระบบ","กลับไปหน้าแรก","ภาษา","การตั้งค่า",
    "ยอดคงเหลือ","คะแนน","คะแนน","เกมของฉัน","เกมของฉัน","สร้างเกม","เริ่มเกมใหม่","เริ่มเลย","ออกจากเกม","ผู้เยี่ยมชม",
    "สวัสดี ผู้เยี่ยมชม","คู่มือเกม","พิมพ์","สตูดิโอควิซอันดับ 1","เล่นอย่างไร?","หมวดหมู่","หมวดหมู่ต่อรอบ","คะแนนสูงสุดต่อข้อ","ถ่ายทอดสดตอนนี้","สด",
    "สองทีมแข่งขันกัน","แดชบอร์ด","รู้จักเกมนี้","เกี่ยวกับเกม","วิธีเล่น","เลือกหมวดหมู่","ขั้นแรก","เลือกหมวดหมู่ของคุณ","หมวดหมู่ที่เลือก","ชื่อเกมและทีม",
    "ชื่อเกม","ทีม 1","ทีม 2","ชื่อทีมแรก","ชื่อทีมที่สอง","เริ่มเกม","เร็ว ๆ นี้","ค้นหาหมวดหมู่…","ทุกหมวดหมู่","กระดานเกม",
    "จบเกม","รอบถ่ายทอดสด","เกมวัฒนธรรมของเรา","หมวดหมู่ที่คุณเลือก","ใบเหลือง · −100","ใบแดง · −300","เลือกหมวดหมู่ตอนนี้","ตอนนี้ถึงตา","คำถาม","คำตอบ",
    "หมวดหมู่","วินาที","กำลังโหลด…","ใครตอบถูก?","ไม่มีใคร","ไม่ได้คะแนน","กลับไปที่กระดาน","ตาของ","ทีม 1","ทีม 2",
    "คลิปเสียง","แสดงคำตอบ","ภาพประกอบคำถาม","คะแนนสุดท้าย","จบรอบแล้ว","ผู้ชนะ","เสมอ","ประวัติการเล่น","คลังของคุณ","เกมทั้งหมด",
    "เกมล่าสุด","ยอดคงเหลือปัจจุบันของคุณ","ลำดับ","คำอธิบาย","วันที่และเวลา","ยังไม่มีเกม","ล้างประวัติ","โปรไฟล์ของคุณ","ข้อมูลส่วนตัว","ชื่อผู้ใช้",
    "อีเมล","หมายเลขโทรศัพท์","เข้าร่วมเมื่อ","สถิติของฉัน","เติมยอดคงเหลือ","ประวัติของฉัน","รหัสผ่าน","ความแข็งแรงของรหัสผ่าน","สมัครสมาชิก","เข้าสู่ระบบ",
    "บัญชีใหม่","สร้างบัญชีใหม่","เข้าสู่ระบบ","มีบัญชีอยู่แล้ว?","ยังไม่มีบัญชี?","ยินดีต้อนรับ","ยินดีต้อนรับกลับมา!","กระเป๋าเงิน","เติมยอดคงเหลือเกม","เกม",
    "เกม","คุ้มค่าที่สุด","สรุปคำสั่งซื้อ","KWD","{n} จาก {m}","{n} คะแนน","{n} คำถาม","{n} วินาที","{n} เกม","ผู้เล่นใหม่"
  ];

  /* ================= Tiếng Việt ================= */
  P.vi = [
    "Jawabni","Trang chủ","Trang chủ","Tài khoản của tôi","Đăng nhập","Đăng xuất","Đăng nhập","Về trang chủ","Ngôn ngữ","Cài đặt",
    "Số dư","Điểm","điểm","Trò chơi của tôi","Trò chơi của tôi","Tạo trò chơi","Bắt đầu trò chơi mới","Bắt đầu ngay","Thoát trò chơi","Khách",
    "Xin chào, khách","Sổ tay trò chơi","In","Studio đố vui số 1","Chơi thế nào?","danh mục","danh mục mỗi vòng","điểm tối đa mỗi câu","Đang phát trực tiếp","Trực tiếp",
    "Hai đội thi đấu","Bảng điều khiển","Tìm hiểu trò chơi","Về trò chơi","Cách chơi","Chọn danh mục","Bước đầu tiên","Chọn danh mục của bạn","Danh mục đã chọn","Tên trò chơi và các đội",
    "Tên trò chơi","Đội 1","Đội 2","Tên đội thứ nhất","Tên đội thứ hai","Bắt đầu trò chơi","Sắp ra mắt","Tìm danh mục…","Tất cả danh mục","Bảng trò chơi",
    "Kết thúc trò chơi","Vòng trực tiếp","Trò chơi văn hóa của chúng tôi","Các danh mục bạn đã chọn","Thẻ vàng · −100","Thẻ đỏ · −300","Hãy chọn danh mục ngay","Đến lượt","Câu hỏi","Đáp án",
    "Danh mục","giây","Đang tải…","Ai trả lời đúng?","Không ai","Không có điểm","Quay lại bảng","Lượt","Đội 1","Đội 2",
    "Đoạn âm thanh","Hiện đáp án","Ảnh của câu hỏi","Điểm cuối cùng","Vòng đã kết thúc","Người thắng","Hòa","Lịch sử trò chơi","Kho lưu trữ của bạn","Tổng số trò chơi",
    "Trò chơi gần nhất","Số dư hiện tại của bạn","STT","Mô tả","Ngày và giờ","Chưa có trò chơi nào","Xóa lịch sử","Hồ sơ của bạn","Thông tin cá nhân","Tên người dùng",
    "Email","Số điện thoại","Tham gia ngày","Thống kê của tôi","Nạp số dư","Lịch sử của tôi","Mật khẩu","Độ mạnh mật khẩu","Đăng ký","Đăng nhập",
    "Tài khoản mới","Tạo tài khoản mới","Đăng nhập","Bạn đã có tài khoản?","Bạn chưa có tài khoản?","Chào mừng","Chào mừng trở lại!","Ví","Nạp số dư trò chơi","trò chơi",
    "trò chơi","Giá trị tốt nhất","Tóm tắt đơn hàng","KWD","{n} trên {m}","{n} điểm","{n} câu hỏi","{n} giây","{n} trò chơi","Người chơi mới"
  ];

  /* ================= Filipino ================= */
  P.tl = [
    "Jawabni","Home","Home","Aking account","Mag-sign in","Mag-sign out","Mag-log in","Bumalik sa home","Wika","Mga setting",
    "Balanse","Puntos","puntos","Aking mga laro","Aking mga laro","Gumawa ng laro","Magsimula ng bagong laro","Simulan na","Lumabas sa laro","Bisita",
    "Kumusta, bisita","Aklat ng laro","I-print","Ang #1 na quiz studio","Paano maglaro?","kategorya","kategorya kada round","pinakamataas na puntos kada tanong","Live ngayon","Live",
    "Dalawang koponan ang naglalaban","Dashboard","Kilalanin ang laro","Tungkol sa laro","Paano maglaro","Pumili ng kategorya","Unang hakbang","Piliin ang iyong mga kategorya","Mga napiling kategorya","Pangalan ng laro at mga koponan",
    "Pangalan ng laro","Koponan 1","Koponan 2","Pangalan ng unang koponan","Pangalan ng pangalawang koponan","Simulan ang laro","Malapit na","Maghanap ng kategorya…","Lahat ng kategorya","Board ng laro",
    "Tapusin ang laro","Live na round","Ang aming larong pangkultura","Ang mga kategoryang pinili mo","Yellow card · −100","Red card · −300","Pumili na ng kategorya","Turno ngayon ni","Tanong","Sagot",
    "Kategorya","segundo","Naglo-load…","Sino ang sumagot nang tama?","Wala","Walang puntos","Bumalik sa board","Turno","Koponan 1","Koponan 2",
    "Audio clip","Ipakita ang sagot","Larawan ng tanong","Panghuling puntos","Tapos na ang round","Nagwagi","Tabla","Kasaysayan ng laro","Ang iyong archive","Kabuuang laro",
    "Huling laro","Ang kasalukuyang balanse mo","Blg.","Paglalarawan","Petsa at oras","Wala pang laro","Burahin ang kasaysayan","Ang iyong profile","Personal na impormasyon","Username",
    "Email","Numero ng telepono","Sumali noong","Aking istatistika","Mag-top up ng balanse","Aking kasaysayan","Password","Lakas ng password","Mag-sign up","Mag-log in",
    "Bagong account","Gumawa ng bagong account","Mag-log in","May account ka na?","Wala ka pang account?","Maligayang pagdating","Maligayang pagbabalik!","Wallet","Mag-top up ng balanse sa laro","laro",
    "laro","Pinakasulit","Buod ng order","KWD","{n} sa {m}","{n} puntos","{n} tanong","{n} segundo","{n} laro","Bagong manlalaro"
  ];

  /* ================= Kiswahili ================= */
  P.sw = [
    "Jawabni","Ukurasa wa mwanzo","Mwanzo","Akaunti yangu","Ingia","Toka","Ingia","Rudi ukurasa wa mwanzo","Lugha","Mipangilio",
    "Salio","Pointi","pointi","Michezo yangu","Michezo yangu","Tengeneza mchezo","Anza mchezo mpya","Anza sasa","Toka kwenye mchezo","Mgeni",
    "Habari, mgeni","Kijitabu cha mchezo","Chapisha","Studio ya maswali namba 1","Ninachezaje?","kategoria","kategoria kwa raundi","pointi za juu kwa swali","Moja kwa moja sasa","Moja kwa moja",
    "Timu mbili zinashindana","Dashibodi","Fahamu mchezo","Kuhusu mchezo","Jinsi ya kucheza","Chagua kategoria","Hatua ya kwanza","Chagua kategoria zako","Kategoria zilizochaguliwa","Majina ya mchezo na timu",
    "Jina la mchezo","Timu 1","Timu 2","Jina la timu ya kwanza","Jina la timu ya pili","Anza mchezo","Inakuja hivi karibuni","Tafuta kategoria…","Kategoria zote","Ubao wa mchezo",
    "Maliza mchezo","Raundi ya moja kwa moja","Mchezo wetu wa utamaduni","Kategoria ulizochagua","Kadi ya njano · −100","Kadi nyekundu · −300","Chagua kategoria sasa","Sasa ni zamu ya","Swali","Jibu",
    "Kategoria","sekunde","Inapakia…","Nani alijibu kwa usahihi?","Hakuna","Hakuna pointi","Rudi kwenye ubao","Zamu","Timu 1","Timu 2",
    "Klipu ya sauti","Onyesha jibu","Picha ya swali","Alama za mwisho","Raundi imeisha","Mshindi","Sare","Historia ya michezo","Kumbukumbu zako","Jumla ya michezo",
    "Mchezo wa mwisho","Salio lako la sasa","Na.","Maelezo","Tarehe na saa","Bado hakuna michezo","Futa historia","Wasifu wako","Taarifa binafsi","Jina la mtumiaji",
    "Barua pepe","Namba ya simu","Alijiunga tarehe","Takwimu zangu","Ongeza salio","Historia yangu","Nenosiri","Nguvu ya nenosiri","Jisajili","Ingia",
    "Akaunti mpya","Fungua akaunti mpya","Ingia","Tayari una akaunti?","Huna akaunti?","Karibu","Karibu tena!","Pochi","Ongeza salio la mchezo","mchezo",
    "michezo","Bei bora zaidi","Muhtasari wa oda","KWD","{n} kati ya {m}","pointi {n}","maswali {n}","sekunde {n}","michezo {n}","Mchezaji mpya"
  ];

  /* ================= Hausa ================= */
  P.ha = [
    "Jawabni","Shafin farko","Gida","Asusuna","Shiga","Fita","Shiga","Koma shafin farko","Harshe","Saituna",
    "Ma'auni","Maki","maki","Wasanni na","Wasanni na","Ƙirƙiri wasa","Fara sabon wasa","Fara yanzu","Fita daga wasa","Baƙo",
    "Sannu, baƙo","Littafin wasa","Buga","Studiyo na tambayoyi na farko","Yaya nake wasa?","rukunoni","rukunoni a kowanne zagaye","mafi girman maki ga tambaya","Kai tsaye yanzu","Kai tsaye",
    "Ƙungiyoyi biyu suna gasa","Allon sarrafawa","Ka san wasan","Game da wasan","Yadda ake wasa","Zaɓi rukunoni","Mataki na farko","Zaɓi rukunonin ka","Rukunonin da aka zaɓa","Sunayen wasa da ƙungiyoyi",
    "Sunan wasa","Ƙungiya 1","Ƙungiya 2","Sunan ƙungiya ta farko","Sunan ƙungiya ta biyu","Fara wasan","Nan ba da jimawa ba","Nemi rukuni…","Dukkan rukunoni","Allon wasa",
    "Kammala wasan","Zagaye kai tsaye","Wasan al'adunmu","Rukunonin da ka zaɓa","Katin rawaya · −100","Katin ja · −300","Zaɓi rukunoni yanzu","Yanzu lokacin","Tambaya","Amsa",
    "Rukuni","daƙiƙa","Ana lodawa…","Wa ya amsa daidai?","Babu kowa","Babu maki","Koma allon","Lokaci","Ƙungiya 1","Ƙungiya 2",
    "Sautin murya","Nuna amsar","Hoton tambayar","Sakamako na ƙarshe","Zagaye ya ƙare","Wanda ya lashe","Kunnen doki","Tarihin wasanni","Ma'ajiyar ka","Jimillar wasanni",
    "Wasan ƙarshe","Ma'aunin ka na yanzu","Lamba","Bayani","Kwanan wata da lokaci","Babu wasanni tukuna","Share tarihi","Bayanan ka","Bayanan sirri","Sunan mai amfani",
    "Imel","Lambar waya","Ya shiga a","Kididdigata","Ƙara ma'auni","Tarihina","Kalmar sirri","Ƙarfin kalmar sirri","Yi rajista","Shiga",
    "Sabon asusu","Ƙirƙiri sabon asusu","Shiga","Kana da asusu tuni?","Ba ka da asusu?","Barka da zuwa","Barka da dawowa!","Jaka","Ƙara ma'aunin wasa","wasa",
    "wasanni","Mafi araha","Taƙaitaccen oda","KWD","{n} daga {m}","maki {n}","tambayoyi {n}","daƙiƙa {n}","wasanni {n}","Sabon ɗan wasa"
  ];

  /* ================= Soomaali ================= */
  P.so = [
    "Jawabni","Bogga hore","Guriga","Akoonkayga","Gal","Ka bax","Gal","Ku noqo bogga hore","Luqadda","Dejinta",
    "Haraaga","Dhibcaha","dhibic","Ciyaarahayga","Ciyaarahayga","Samee ciyaar","Bilow ciyaar cusub","Hadda bilow","Ka bax ciyaarta","Marti",
    "Salaam, marti","Buugga ciyaarta","Daabac","Istuudiyaha su'aalaha ee 1aad","Sidee baan u ciyaaraa?","qaybo","qaybo wareeg kasta","dhibcaha ugu badan su'aashii","Hadda toos","Toos",
    "Laba koox ayaa tartamaya","Dashboard","Baro ciyaarta","Ku saabsan ciyaarta","Sida loo ciyaaro","Dooro qaybaha","Tallaabada koowaad","Dooro qaybahaaga","Qaybaha la doortay","Magacyada ciyaarta iyo kooxaha",
    "Magaca ciyaarta","Kooxda 1","Kooxda 2","Magaca kooxda koowaad","Magaca kooxda labaad","Bilow ciyaarta","Dhawaan","Raadi qayb…","Dhammaan qaybaha","Looxa ciyaarta",
    "Dhammee ciyaarta","Wareeg toos ah","Ciyaarteena dhaqameed","Qaybaha aad dooratay","Kaarka jaalaha ah · −100","Kaarka cas · −300","Hadda dooro qaybaha","Hadda waa wareega","Su'aal","Jawaab",
    "Qayb","ilbiriqsi","Waa la soo raraya…","Yaa si sax ah u jawaabay?","Cidna","Dhibco ma jiro","Ku noqo looxa","Wareeg","Kooxda 1","Kooxda 2",
    "Cod duuban","Muuji jawaabta","Sawirka su'aasha","Natiijada ugu dambeysa","Wareegii wuu dhammaaday","Guuleyste","Barbaro","Taariikhda ciyaaraha","Kaydkaaga","Wadarta ciyaaraha",
    "Ciyaartii u dambeysay","Haraagaaga hadda","Lr.","Sharaxaad","Taariikhda iyo waqtiga","Weli ciyaaro ma jiraan","Tirtir taariikhda","Astaantaada","Macluumaadka shakhsiga","Magaca isticmaalaha",
    "Iimayl","Lambarka taleefanka","Ku biiray","Tirakoobkayga","Ku dar haraaga","Taariikhdayda","Furaha sirta","Xoogga furaha sirta","Isdiiwaangeli","Gal",
    "Akoon cusub","Samee akoon cusub","Gal","Horey ma u leedahay akoon?","Akoon ma lihid?","Soo dhawoow","Soo dhawoow mar kale!","Boorso","Ku dar haraaga ciyaarta","ciyaar",
    "ciyaaro","Qiimaha ugu fiican","Kooban dalabka","KWD","{n} ka mid ah {m}","{n} dhibcood","{n} su'aalood","{n} ilbiriqsi","{n} ciyaarood","Ciyaaryahan cusub"
  ];

  /* ================= አማርኛ ================= */
  P.am = [
    "Jawabni","መነሻ ገጽ","መነሻ","መለያዬ","ግባ","ውጣ","መግቢያ","ወደ መነሻ ገጽ ተመለስ","ቋንቋ","ቅንብሮች",
    "ቀሪ ሂሳብ","ነጥቦች","ነጥብ","ጨዋታዎቼ","ጨዋታዎቼ","ጨዋታ ፍጠር","አዲስ ጨዋታ ጀምር","አሁን ጀምር","ከጨዋታው ውጣ","እንግዳ",
    "ሰላም፣ እንግዳ","የጨዋታ መመሪያ","አትም","ቁጥር 1 የጥያቄ ስቱዲዮ","እንዴት እጫወታለሁ?","ምድቦች","በዙር ምድቦች","ለጥያቄ ከፍተኛ ነጥብ","አሁን በቀጥታ","በቀጥታ",
    "ሁለት ቡድኖች ይወዳደራሉ","መቆጣጠሪያ ሰሌዳ","ጨዋታውን እወቅ","ስለ ጨዋታው","እንዴት እንደሚጫወት","ምድቦችን ምረጥ","የመጀመሪያ ደረጃ","ምድቦችህን ምረጥ","የተመረጡ ምድቦች","የጨዋታና የቡድን ስሞች",
    "የጨዋታ ስም","ቡድን 1","ቡድን 2","የመጀመሪያው ቡድን ስም","የሁለተኛው ቡድን ስም","ጨዋታውን ጀምር","በቅርቡ","ምድብ ፈልግ…","ሁሉም ምድቦች","የጨዋታ ሰሌዳ",
    "ጨዋታውን ጨርስ","ቀጥታ ዙር","የባህል ጨዋታችን","የመረጥካቸው ምድቦች","ቢጫ ካርድ · −100","ቀይ ካርድ · −300","አሁን ምድቦችን ምረጥ","አሁን ተራው","ጥያቄ","መልስ",
    "ምድብ","ሰከንዶች","በመጫን ላይ…","በትክክል የመለሰው ማን ነው?","ማንም","ነጥብ የለም","ወደ ሰሌዳው ተመለስ","ተራ","ቡድን 1","ቡድን 2",
    "የድምጽ ቅንጭብ","መልሱን አሳይ","የጥያቄው ምስል","የመጨረሻ ውጤት","ዙሩ አልቋል","አሸናፊ","አቻ","የጨዋታ ታሪክ","መዝገብህ","ጠቅላላ ጨዋታዎች",
    "የመጨረሻ ጨዋታ","አሁን ያለህ ቀሪ ሂሳብ","ተራ ቁ.","መግለጫ","ቀንና ሰዓት","እስካሁን ጨዋታ የለም","ታሪኩን አጽዳ","መገለጫህ","የግል መረጃ","የተጠቃሚ ስም",
    "ኢሜይል","የስልክ ቁጥር","የተቀላቀለበት ቀን","የእኔ ስታቲስቲክስ","ቀሪ ሂሳብ ሙላ","የእኔ ታሪክ","የይለፍ ቃል","የይለፍ ቃል ጥንካሬ","ተመዝገብ","ግባ",
    "አዲስ መለያ","አዲስ መለያ ፍጠር","ግባ","አስቀድሞ መለያ አለህ?","መለያ የለህም?","እንኳን ደህና መጣህ","እንኳን በደህና ተመለስክ!","ቦርሳ","የጨዋታ ቀሪ ሂሳብ ሙላ","ጨዋታ",
    "ጨዋታዎች","የተሻለ ዋጋ","የትዕዛዝ ማጠቃለያ","KWD","{n} ከ {m}","{n} ነጥቦች","{n} ጥያቄዎች","{n} ሰከንዶች","{n} ጨዋታዎች","አዲስ ተጫዋች"
  ];

  /* ============================================================
     الدفعة الثانية — الجُمل الطويلة والعناوين التسويقية
     (منفصلة عن الأولى لتسهيل الصيانة، وتُدمج في القاموس نفسه)
     ============================================================ */
  var K2 = [
    /*  0 */ "نقاطك",
    /*  1 */ "رصيدك",
    /*  2 */ "متصفحك لا يدعم canvas.",
    /*  3 */ "أسرع إجابة…",
    /*  4 */ "أكبر رصيد",
    /*  5 */ "اختر فئاتك، سابق الوقت، واجمع النقاط في لعبة أسئلة وأجوبة مليئة بالإثارة على طريقة استوديوهات المسابقات.",
    /*  6 */ "إجابة سريعة +٥٠٠",
    /*  7 */ "كل شيء على بُعد نقرة",
    /*  8 */ "تنقّل بين رصيدك وألعابك وإعداداتك بسهولة",
    /*  9 */ "كيف تعمل جاوبني؟",
    /* 10 */ "قواعد بسيطة… ومنافسة لا تُنسى",
    /* 11 */ "اختصار اللعبة",
    /* 12 */ "اللعبة تحتوي على 6 فئات من اختيارك من ضمن قائمة الفئات، ثم تبدأ بالإجابة على الأسئلة الموجودة في الفئات المختارة.",
    /* 13 */ "ولكي تفوز في اللعبة، يجب أن تكون إجاباتك صحيحة لتجمع النقاط من كل سؤال.",
    /* 14 */ "عند اختيار الفئات، عليك الإجابة على الأسئلة لتحصل على النقاط ثم الفوز.",
    /* 15 */ "عند انتهاء الوقت تظهر الإجابة تلقائياً، لذا عليك أن تجيب قبل انتهاء الوقت.",
    /* 16 */ "© جميع الحقوق محفوظة — استعد، جاوب، اربح",
    /* 17 */ "اختر حتى ٦ فئات لتبدأ الجولة — كل فئة تحمل ٥ أسئلة بقيم مختلفة",
    /* 18 */ "كل جولة لعبتها محفوظة هنا بالتاريخ والوقت",
    /* 19 */ "كل بياناتك وإنجازاتك في مكان واحد",
    /* 20 */ "كل رصيد = جولة كاملة من ٦ فئات — اختر الباقة التي تناسبك",
    /* 21 */ "أدخل بياناتك للمتابعة إلى لوحة اللعب",
    /* 22 */ "بعد الاختيار ينتقل الدور تلقائياً للفريق الآخر وترجع للوحة اللعب.",
    /* 23 */ "لا توجد فئة بهذا الاسم"
  ];

  var P2 = {};

  P2.en = ["Your points","Your balance","Your browser does not support canvas.","Fastest answer…","Biggest balance",
    "Pick your categories, race the clock and collect points in a thrilling quiz game, game-show style.",
    "Fast answer +500","Everything one click away","Move between your balance, games and settings with ease",
    "How does Jawabni work?","Simple rules… an unforgettable contest","The game in short",
    "The game holds 6 categories of your choosing from the category list, then you start answering the questions inside them.",
    "To win the game your answers must be correct so you collect the points from every question.",
    "Once the categories are chosen, you answer the questions to earn points and win.",
    "When time runs out the answer appears automatically, so answer before the clock stops.",
    "© All rights reserved — Get ready, answer, win",
    "Pick up to 6 categories to start the round — each holds 5 questions of different values",
    "Every round you play is saved here with its date and time","All your data and achievements in one place",
    "Each credit = a full round of 6 categories — pick the pack that suits you",
    "Enter your details to continue to the game board",
    "After you choose, the turn passes automatically to the other team and you return to the board.",
    "No category by that name"];

  P2.fr = ["Vos points","Votre solde","Votre navigateur ne prend pas en charge canvas.","Réponse la plus rapide…","Plus gros solde",
    "Choisissez vos catégories, courez contre la montre et gagnez des points dans un jeu de quiz palpitant, façon plateau télé.",
    "Réponse rapide +500","Tout à un clic","Naviguez facilement entre votre solde, vos parties et vos réglages",
    "Comment fonctionne Jawabni ?","Des règles simples… une compétition inoubliable","Le jeu en bref",
    "La partie contient 6 catégories de votre choix parmi la liste, puis vous répondez aux questions qu'elles contiennent.",
    "Pour gagner, vos réponses doivent être justes afin de récolter les points de chaque question.",
    "Une fois les catégories choisies, vous répondez aux questions pour marquer des points et gagner.",
    "À la fin du temps la réponse s'affiche automatiquement, alors répondez avant la fin.",
    "© Tous droits réservés — Prêt, réponds, gagne",
    "Choisissez jusqu'à 6 catégories pour lancer la manche — chacune contient 5 questions de valeurs différentes",
    "Chaque manche jouée est enregistrée ici avec sa date et son heure","Toutes vos données et réussites au même endroit",
    "Chaque crédit = une manche complète de 6 catégories — choisissez l'offre qui vous convient",
    "Saisissez vos informations pour accéder au plateau de jeu",
    "Après le choix, le tour passe automatiquement à l'autre équipe et vous revenez au plateau.",
    "Aucune catégorie de ce nom"];

  P2.es = ["Tus puntos","Tu saldo","Tu navegador no admite canvas.","La respuesta más rápida…","El mayor saldo",
    "Elige tus categorías, corre contra el reloj y suma puntos en un juego de preguntas lleno de emoción, al estilo de los concursos.",
    "Respuesta rápida +500","Todo a un clic","Muévete con facilidad entre tu saldo, tus partidas y tus ajustes",
    "¿Cómo funciona Jawabni?","Reglas sencillas… una competición inolvidable","El juego en breve",
    "La partida tiene 6 categorías que tú eliges de la lista, y después empiezas a responder las preguntas que contienen.",
    "Para ganar, tus respuestas deben ser correctas para sumar los puntos de cada pregunta.",
    "Una vez elegidas las categorías, respondes las preguntas para ganar puntos y vencer.",
    "Cuando se acaba el tiempo la respuesta aparece automáticamente, así que responde antes.",
    "© Todos los derechos reservados — Prepárate, responde, gana",
    "Elige hasta 6 categorías para empezar la ronda — cada una trae 5 preguntas de distinto valor",
    "Cada ronda que juegas se guarda aquí con su fecha y hora","Todos tus datos y logros en un solo lugar",
    "Cada crédito = una ronda completa de 6 categorías — elige el paquete que te convenga",
    "Introduce tus datos para continuar al tablero de juego",
    "Tras elegir, el turno pasa automáticamente al otro equipo y vuelves al tablero.",
    "No hay ninguna categoría con ese nombre"];

  P2.pt = ["Os seus pontos","O seu saldo","O seu navegador não suporta canvas.","A resposta mais rápida…","O maior saldo",
    "Escolha as suas categorias, corra contra o tempo e junte pontos num jogo de perguntas cheio de emoção, ao estilo dos concursos.",
    "Resposta rápida +500","Tudo a um clique","Navegue com facilidade entre o saldo, os jogos e as definições",
    "Como funciona o Jawabni?","Regras simples… uma competição inesquecível","O jogo em resumo",
    "O jogo tem 6 categorias à sua escolha da lista, e depois começa a responder às perguntas que elas contêm.",
    "Para vencer, as suas respostas têm de estar certas para somar os pontos de cada pergunta.",
    "Escolhidas as categorias, responde às perguntas para ganhar pontos e vencer.",
    "Quando o tempo acaba a resposta aparece automaticamente, por isso responda antes.",
    "© Todos os direitos reservados — Prepare-se, responda, ganhe",
    "Escolha até 6 categorias para começar a rodada — cada uma traz 5 perguntas de valores diferentes",
    "Cada rodada que joga fica guardada aqui com a data e a hora","Todos os seus dados e conquistas num só lugar",
    "Cada crédito = uma rodada completa de 6 categorias — escolha o pacote que lhe convém",
    "Introduza os seus dados para continuar para o tabuleiro",
    "Depois da escolha, a vez passa automaticamente à outra equipa e volta ao tabuleiro.",
    "Não há nenhuma categoria com esse nome"];

  P2.de = ["Deine Punkte","Dein Guthaben","Dein Browser unterstützt canvas nicht.","Die schnellste Antwort…","Das größte Guthaben",
    "Wähle deine Kategorien, laufe gegen die Uhr und sammle Punkte in einem spannenden Quizspiel im Showstudio-Stil.",
    "Schnelle Antwort +500","Alles nur einen Klick entfernt","Wechsle mühelos zwischen Guthaben, Spielen und Einstellungen",
    "Wie funktioniert Jawabni?","Einfache Regeln… ein unvergesslicher Wettkampf","Das Spiel in Kürze",
    "Das Spiel enthält 6 Kategorien deiner Wahl aus der Liste, danach beantwortest du die darin enthaltenen Fragen.",
    "Um zu gewinnen, müssen deine Antworten richtig sein, damit du die Punkte jeder Frage sammelst.",
    "Sind die Kategorien gewählt, beantwortest du die Fragen, sammelst Punkte und gewinnst.",
    "Läuft die Zeit ab, erscheint die Antwort automatisch — antworte also vorher.",
    "© Alle Rechte vorbehalten — Bereit, antworten, gewinnen",
    "Wähle bis zu 6 Kategorien, um die Runde zu starten — jede enthält 5 Fragen mit verschiedenen Werten",
    "Jede gespielte Runde wird hier mit Datum und Uhrzeit gespeichert","Alle deine Daten und Erfolge an einem Ort",
    "Jedes Guthaben = eine volle Runde mit 6 Kategorien — wähle das passende Paket",
    "Gib deine Daten ein, um zum Spielbrett zu gelangen",
    "Nach der Wahl geht der Zug automatisch an das andere Team und du kehrst zum Brett zurück.",
    "Keine Kategorie mit diesem Namen"];

  P2.it = ["I tuoi punti","Il tuo credito","Il tuo browser non supporta canvas.","La risposta più veloce…","Il credito più grande",
    "Scegli le tue categorie, corri contro il tempo e accumula punti in un gioco a quiz pieno di emozione, in stile studio televisivo.",
    "Risposta rapida +500","Tutto a un clic","Passa con facilità tra credito, partite e impostazioni",
    "Come funziona Jawabni?","Regole semplici… una sfida indimenticabile","Il gioco in breve",
    "La partita contiene 6 categorie a tua scelta dall'elenco, poi inizi a rispondere alle domande che contengono.",
    "Per vincere le tue risposte devono essere corrette, così raccogli i punti di ogni domanda.",
    "Scelte le categorie, rispondi alle domande per guadagnare punti e vincere.",
    "Allo scadere del tempo la risposta appare automaticamente, quindi rispondi prima.",
    "© Tutti i diritti riservati — Preparati, rispondi, vinci",
    "Scegli fino a 6 categorie per iniziare il turno — ognuna contiene 5 domande di valore diverso",
    "Ogni turno giocato è salvato qui con data e ora","Tutti i tuoi dati e traguardi in un unico posto",
    "Ogni credito = un turno completo di 6 categorie — scegli il pacchetto che fa per te",
    "Inserisci i tuoi dati per continuare al tabellone",
    "Dopo la scelta il turno passa automaticamente all'altra squadra e torni al tabellone.",
    "Nessuna categoria con questo nome"];

  P2.nl = ["Jouw punten","Jouw saldo","Je browser ondersteunt canvas niet.","Het snelste antwoord…","Het grootste saldo",
    "Kies je categorieën, race tegen de klok en verzamel punten in een spannend quizspel in tv-showstijl.",
    "Snel antwoord +500","Alles op één klik afstand","Wissel moeiteloos tussen saldo, spellen en instellingen",
    "Hoe werkt Jawabni?","Eenvoudige regels… een onvergetelijke strijd","Het spel in het kort",
    "Het spel bevat 6 categorieën naar keuze uit de lijst, daarna beantwoord je de vragen die erin zitten.",
    "Om te winnen moeten je antwoorden juist zijn, zodat je de punten van elke vraag verzamelt.",
    "Zijn de categorieën gekozen, dan beantwoord je de vragen om punten te halen en te winnen.",
    "Als de tijd om is verschijnt het antwoord automatisch, dus antwoord op tijd.",
    "© Alle rechten voorbehouden — Klaarstaan, antwoorden, winnen",
    "Kies tot 6 categorieën om de ronde te starten — elke categorie heeft 5 vragen met verschillende waarden",
    "Elke gespeelde ronde wordt hier bewaard met datum en tijd","Al je gegevens en prestaties op één plek",
    "Elk tegoed = een volledige ronde van 6 categorieën — kies het pakket dat bij je past",
    "Voer je gegevens in om door te gaan naar het speelbord",
    "Na de keuze gaat de beurt automatisch naar het andere team en keer je terug naar het bord.",
    "Geen categorie met die naam"];

  P2.sv = ["Dina poäng","Ditt saldo","Din webbläsare stöder inte canvas.","Snabbaste svaret…","Största saldot",
    "Välj dina kategorier, kämpa mot klockan och samla poäng i ett spännande frågespel i tv-showstil.",
    "Snabbt svar +500","Allt ett klick bort","Växla enkelt mellan saldo, spel och inställningar",
    "Hur fungerar Jawabni?","Enkla regler… en oförglömlig tävling","Spelet i korthet",
    "Spelet innehåller 6 kategorier som du väljer ur listan, sedan börjar du svara på frågorna i dem.",
    "För att vinna måste dina svar vara rätt så att du samlar poängen från varje fråga.",
    "När kategorierna är valda svarar du på frågorna för att få poäng och vinna.",
    "När tiden är ute visas svaret automatiskt, så svara innan dess.",
    "© Alla rättigheter förbehållna — Redo, svara, vinn",
    "Välj upp till 6 kategorier för att starta omgången — varje kategori har 5 frågor med olika värden",
    "Varje omgång du spelar sparas här med datum och tid","Alla dina uppgifter och prestationer på ett ställe",
    "Varje kredit = en hel omgång med 6 kategorier — välj paketet som passar dig",
    "Ange dina uppgifter för att fortsätta till spelplanen",
    "Efter valet går turen automatiskt till det andra laget och du återvänder till planen.",
    "Ingen kategori med det namnet"];

  P2.pl = ["Twoje punkty","Twoje saldo","Twoja przeglądarka nie obsługuje canvas.","Najszybsza odpowiedź…","Największe saldo",
    "Wybierz kategorie, ścigaj się z czasem i zbieraj punkty w emocjonującym quizie w stylu teleturnieju.",
    "Szybka odpowiedź +500","Wszystko o jedno kliknięcie","Łatwo przechodź między saldem, grami i ustawieniami",
    "Jak działa Jawabni?","Proste zasady… niezapomniana rywalizacja","Gra w skrócie",
    "Gra zawiera 6 kategorii wybranych przez ciebie z listy, a potem odpowiadasz na zawarte w nich pytania.",
    "Aby wygrać, twoje odpowiedzi muszą być poprawne, byś zebrał punkty z każdego pytania.",
    "Po wyborze kategorii odpowiadasz na pytania, zdobywasz punkty i wygrywasz.",
    "Gdy czas się skończy, odpowiedź pojawia się automatycznie — odpowiadaj wcześniej.",
    "© Wszelkie prawa zastrzeżone — Gotowy, odpowiadaj, wygrywaj",
    "Wybierz do 6 kategorii, aby rozpocząć rundę — każda ma 5 pytań o różnej wartości",
    "Każda rozegrana runda jest tu zapisana z datą i godziną","Wszystkie twoje dane i osiągnięcia w jednym miejscu",
    "Każdy kredyt = pełna runda 6 kategorii — wybierz pakiet dla siebie",
    "Wprowadź swoje dane, aby przejść do planszy gry",
    "Po wyborze kolej przechodzi automatycznie na drugą drużynę i wracasz do planszy.",
    "Brak kategorii o tej nazwie"];

  P2.cs = ["Tvoje body","Tvůj zůstatek","Tvůj prohlížeč nepodporuje canvas.","Nejrychlejší odpověď…","Největší zůstatek",
    "Vyber si kategorie, závoď s časem a sbírej body v napínavé kvízové hře ve stylu televizní soutěže.",
    "Rychlá odpověď +500","Všechno na jedno kliknutí","Snadno přecházej mezi zůstatkem, hrami a nastavením",
    "Jak Jawabni funguje?","Jednoduchá pravidla… nezapomenutelný souboj","Hra ve zkratce",
    "Hra obsahuje 6 kategorií podle tvého výběru ze seznamu, pak začneš odpovídat na otázky v nich.",
    "Abys vyhrál, musí být tvé odpovědi správné, abys nasbíral body z každé otázky.",
    "Po výběru kategorií odpovídáš na otázky, získáváš body a vyhráváš.",
    "Když čas vyprší, odpověď se zobrazí automaticky — odpověz tedy dřív.",
    "© Všechna práva vyhrazena — Připrav se, odpověz, vyhraj",
    "Vyber až 6 kategorií a spusť kolo — každá má 5 otázek s různou hodnotou",
    "Každé odehrané kolo se sem ukládá s datem a časem","Všechna tvá data a úspěchy na jednom místě",
    "Každý kredit = celé kolo o 6 kategoriích — vyber balíček, který ti vyhovuje",
    "Zadej své údaje a pokračuj na herní desku",
    "Po výběru přechází tah automaticky na druhý tým a vracíš se na desku.",
    "Žádná kategorie s tímto názvem"];

  P2.ro = ["Punctele tale","Soldul tău","Browserul tău nu acceptă canvas.","Cel mai rapid răspuns…","Cel mai mare sold",
    "Alege-ți categoriile, întrece cronometrul și adună puncte într-un joc de întrebări plin de emoție, în stil de concurs TV.",
    "Răspuns rapid +500","Totul la un clic distanță","Treci ușor între sold, jocuri și setări",
    "Cum funcționează Jawabni?","Reguli simple… o competiție de neuitat","Jocul pe scurt",
    "Jocul conține 6 categorii la alegerea ta din listă, apoi începi să răspunzi la întrebările din ele.",
    "Ca să câștigi, răspunsurile tale trebuie să fie corecte pentru a aduna punctele fiecărei întrebări.",
    "După ce alegi categoriile, răspunzi la întrebări ca să obții puncte și să câștigi.",
    "Când timpul se termină răspunsul apare automat, deci răspunde înainte.",
    "© Toate drepturile rezervate — Pregătește-te, răspunde, câștigă",
    "Alege până la 6 categorii ca să începi runda — fiecare are 5 întrebări cu valori diferite",
    "Fiecare rundă jucată se salvează aici cu data și ora","Toate datele și reușitele tale într-un singur loc",
    "Fiecare credit = o rundă completă de 6 categorii — alege pachetul potrivit",
    "Introdu datele tale pentru a continua la tabla de joc",
    "După alegere, rândul trece automat la cealaltă echipă și te întorci la tablă.",
    "Nicio categorie cu acest nume"];

  P2.hu = ["A pontjaid","Az egyenleged","A böngésződ nem támogatja a canvast.","A leggyorsabb válasz…","A legnagyobb egyenleg",
    "Válaszd ki a kategóriáidat, versenyezz az idővel és gyűjts pontokat egy izgalmas kvízjátékban, tévéshow stílusban.",
    "Gyors válasz +500","Minden egy kattintásra","Válts könnyedén egyenleg, játékok és beállítások között",
    "Hogyan működik a Jawabni?","Egyszerű szabályok… felejthetetlen verseny","A játék röviden",
    "A játék 6 általad választott kategóriát tartalmaz a listából, majd elkezded megválaszolni a bennük lévő kérdéseket.",
    "A győzelemhez helyesnek kell lenniük a válaszaidnak, hogy összegyűjtsd minden kérdés pontjait.",
    "A kategóriák kiválasztása után válaszolsz a kérdésekre, pontot szerzel és nyersz.",
    "Az idő lejártakor a válasz automatikusan megjelenik, ezért válaszolj előtte.",
    "© Minden jog fenntartva — Készülj, válaszolj, nyerj",
    "Válassz legfeljebb 6 kategóriát a kör indításához — mindegyikben 5 különböző értékű kérdés van",
    "Minden lejátszott kör ide mentődik dátummal és idővel","Minden adatod és eredményed egy helyen",
    "Minden kredit = egy teljes kör 6 kategóriával — válaszd a neked megfelelő csomagot",
    "Add meg az adataidat a játéktáblához lépéshez",
    "A választás után a kör automatikusan a másik csapaté lesz, és visszatérsz a táblához.",
    "Nincs ilyen nevű kategória"];

  P2.el = ["Οι πόντοι σου","Το υπόλοιπό σου","Ο περιηγητής σου δεν υποστηρίζει canvas.","Η πιο γρήγορη απάντηση…","Το μεγαλύτερο υπόλοιπο",
    "Διάλεξε τις κατηγορίες σου, τρέξε με τον χρόνο και μάζεψε πόντους σε ένα συναρπαστικό κουίζ, σε στυλ τηλεπαιχνιδιού.",
    "Γρήγορη απάντηση +500","Όλα με ένα κλικ","Μετακινήσου εύκολα ανάμεσα σε υπόλοιπο, παιχνίδια και ρυθμίσεις",
    "Πώς λειτουργεί το Jawabni;","Απλοί κανόνες… αξέχαστη αναμέτρηση","Το παιχνίδι με λίγα λόγια",
    "Το παιχνίδι περιέχει 6 κατηγορίες της επιλογής σου από τη λίστα, και μετά αρχίζεις να απαντάς στις ερωτήσεις τους.",
    "Για να κερδίσεις, οι απαντήσεις σου πρέπει να είναι σωστές ώστε να μαζέψεις τους πόντους κάθε ερώτησης.",
    "Αφού διαλέξεις κατηγορίες, απαντάς στις ερωτήσεις για να πάρεις πόντους και να νικήσεις.",
    "Όταν τελειώσει ο χρόνος η απάντηση εμφανίζεται αυτόματα, οπότε απάντησε πριν.",
    "© Με επιφύλαξη παντός δικαιώματος — Ετοιμάσου, απάντησε, κέρδισε",
    "Διάλεξε έως 6 κατηγορίες για να ξεκινήσει ο γύρος — καθεμία έχει 5 ερωτήσεις διαφορετικής αξίας",
    "Κάθε γύρος που παίζεις αποθηκεύεται εδώ με ημερομηνία και ώρα","Όλα τα δεδομένα και τα επιτεύγματά σου σε ένα μέρος",
    "Κάθε μονάδα = ένας πλήρης γύρος 6 κατηγοριών — διάλεξε το πακέτο που σου ταιριάζει",
    "Συμπλήρωσε τα στοιχεία σου για να συνεχίσεις στο ταμπλό",
    "Μετά την επιλογή η σειρά περνά αυτόματα στην άλλη ομάδα και επιστρέφεις στο ταμπλό.",
    "Δεν υπάρχει κατηγορία με αυτό το όνομα"];

  P2.ru = ["Твои очки","Твой баланс","Твой браузер не поддерживает canvas.","Самый быстрый ответ…","Самый большой баланс",
    "Выбирай категории, соревнуйся со временем и собирай очки в захватывающей викторине в стиле телешоу.",
    "Быстрый ответ +500","Всё в одном клике","Легко переключайся между балансом, играми и настройками",
    "Как работает Jawabni?","Простые правила… незабываемое состязание","Игра вкратце",
    "В игре 6 категорий на твой выбор из списка, затем ты начинаешь отвечать на содержащиеся в них вопросы.",
    "Чтобы выиграть, ответы должны быть верными — так ты соберёшь очки за каждый вопрос.",
    "После выбора категорий ты отвечаешь на вопросы, набираешь очки и побеждаешь.",
    "Когда время выйдет, ответ появится автоматически — отвечай раньше.",
    "© Все права защищены — Готовься, отвечай, побеждай",
    "Выбери до 6 категорий, чтобы начать раунд — в каждой 5 вопросов разной стоимости",
    "Каждый сыгранный раунд сохраняется здесь с датой и временем","Все твои данные и достижения в одном месте",
    "Каждый кредит = полный раунд из 6 категорий — выбери подходящий пакет",
    "Введи свои данные, чтобы перейти к игровому полю",
    "После выбора ход автоматически переходит другой команде, и ты возвращаешься на поле.",
    "Нет категории с таким названием"];

  P2.uk = ["Твої очки","Твій баланс","Твій браузер не підтримує canvas.","Найшвидша відповідь…","Найбільший баланс",
    "Обирай категорії, змагайся з часом і збирай очки в захопливій вікторині у стилі телешоу.",
    "Швидка відповідь +500","Усе на відстані кліку","Легко переходь між балансом, іграми та налаштуваннями",
    "Як працює Jawabni?","Прості правила… незабутнє змагання","Гра стисло",
    "У грі 6 категорій на твій вибір зі списку, далі ти починаєш відповідати на питання в них.",
    "Щоб перемогти, відповіді мають бути правильними — так ти збереш очки за кожне питання.",
    "Після вибору категорій ти відповідаєш на питання, набираєш очки та перемагаєш.",
    "Коли час спливе, відповідь з'явиться автоматично — відповідай раніше.",
    "© Усі права захищено — Готуйся, відповідай, перемагай",
    "Обери до 6 категорій, щоб почати раунд — у кожній 5 питань різної вартості",
    "Кожен зіграний раунд зберігається тут із датою й часом","Усі твої дані та досягнення в одному місці",
    "Кожен кредит = повний раунд із 6 категорій — обери відповідний пакет",
    "Введи свої дані, щоб перейти до ігрового поля",
    "Після вибору хід автоматично переходить іншій команді, і ти повертаєшся на поле.",
    "Немає категорії з такою назвою"];

  P2.tr = ["Puanların","Bakiyen","Tarayıcın canvas desteklemiyor.","En hızlı cevap…","En büyük bakiye",
    "Kategorilerini seç, zamanla yarış ve yarışma stüdyosu tarzında heyecan dolu bir bilgi oyununda puan topla.",
    "Hızlı cevap +500","Her şey bir tık uzağında","Bakiyen, oyunların ve ayarların arasında kolayca geç",
    "Jawabni nasıl çalışır?","Basit kurallar… unutulmaz bir rekabet","Kısaca oyun",
    "Oyun, listeden seçtiğin 6 kategori içerir; sonra bu kategorilerdeki soruları yanıtlamaya başlarsın.",
    "Kazanmak için cevapların doğru olmalı ki her sorunun puanını toplayasın.",
    "Kategoriler seçilince soruları yanıtlar, puan kazanır ve kazanırsın.",
    "Süre bitince cevap otomatik görünür, o yüzden önce yanıtla.",
    "© Tüm hakları saklıdır — Hazırlan, cevapla, kazan",
    "Turu başlatmak için en fazla 6 kategori seç — her biri farklı değerde 5 soru taşır",
    "Oynadığın her tur burada tarih ve saatiyle saklanır","Tüm verilerin ve başarıların tek yerde",
    "Her kredi = 6 kategorilik tam bir tur — sana uygun paketi seç",
    "Oyun tahtasına geçmek için bilgilerini gir",
    "Seçimden sonra sıra otomatik olarak diğer takıma geçer ve tahtaya dönersin.",
    "Bu adda kategori yok"];

  P2.az = ["Xalların","Balansın","Brauzerin canvas dəstəkləmir.","Ən sürətli cavab…","Ən böyük balans",
    "Kateqoriyalarını seç, vaxtla yarış və şou-studiya üslubunda həyəcanlı bir viktorinada xal topla.",
    "Sürətli cavab +500","Hər şey bir kliklik məsafədə","Balans, oyunlar və parametrlər arasında rahat keç",
    "Jawabni necə işləyir?","Sadə qaydalar… unudulmaz yarış","Qısaca oyun",
    "Oyun siyahıdan seçdiyin 6 kateqoriyadan ibarətdir, sonra onların içindəki suallara cavab verməyə başlayırsan.",
    "Qalib gəlmək üçün cavabların doğru olmalıdır ki, hər sualın xalını toplayasan.",
    "Kateqoriyalar seçiləndən sonra suallara cavab verir, xal qazanır və qalib gəlirsən.",
    "Vaxt bitəndə cavab avtomatik görünür, ona görə əvvəl cavab ver.",
    "© Bütün hüquqlar qorunur — Hazırlaş, cavab ver, qazan",
    "Raundu başlatmaq üçün 6-ya qədər kateqoriya seç — hər birində fərqli dəyərdə 5 sual var",
    "Oynadığın hər raund burada tarix və saatı ilə saxlanılır","Bütün məlumatların və nailiyyətlərin bir yerdə",
    "Hər kredit = 6 kateqoriyalıq tam raund — sənə uyğun paketi seç",
    "Oyun lövhəsinə keçmək üçün məlumatlarını daxil et",
    "Seçimdən sonra növbə avtomatik digər komandaya keçir və lövhəyə qayıdırsan.",
    "Bu adda kateqoriya yoxdur"];

  P2.fa = ["امتیازهای تو","موجودی تو","مرورگر تو از canvas پشتیبانی نمی‌کند.","سریع‌ترین پاسخ…","بزرگ‌ترین موجودی",
    "دسته‌هایت را انتخاب کن، با زمان مسابقه بده و در بازی پرسش و پاسخی هیجان‌انگیز به سبک استودیوهای مسابقه امتیاز جمع کن.",
    "پاسخ سریع +۵۰۰","همه‌چیز یک کلیک دورتر","به‌آسانی میان موجودی، بازی‌ها و تنظیماتت جابه‌جا شو",
    "جوابنی چطور کار می‌کند؟","قواعد ساده… رقابتی فراموش‌نشدنی","بازی به‌اختصار",
    "بازی شامل ۶ دسته به انتخاب توست، سپس شروع می‌کنی به پاسخ دادن به پرسش‌های درون آن‌ها.",
    "برای بردن باید پاسخ‌هایت درست باشد تا امتیاز هر پرسش را جمع کنی.",
    "پس از انتخاب دسته‌ها به پرسش‌ها پاسخ می‌دهی، امتیاز می‌گیری و می‌بری.",
    "با پایان زمان، پاسخ خودکار نمایان می‌شود، پس زودتر پاسخ بده.",
    "© همهٔ حقوق محفوظ است — آماده شو، جواب بده، ببر",
    "تا ۶ دسته انتخاب کن تا دور آغاز شود — هر دسته ۵ پرسش با ارزش‌های متفاوت دارد",
    "هر دوری که بازی کنی با تاریخ و ساعتش اینجا ذخیره می‌شود","همهٔ داده‌ها و دستاوردهایت در یک جا",
    "هر اعتبار = یک دور کامل از ۶ دسته — بستهٔ مناسب خودت را انتخاب کن",
    "اطلاعاتت را وارد کن تا به تختهٔ بازی بروی",
    "پس از انتخاب، نوبت خودکار به تیم دیگر می‌رسد و به تخته بازمی‌گردی.",
    "دسته‌ای با این نام نیست"];

  P2.ku = ["Xalên te","Balansa te","Geroka te canvas piştgirî nake.","Bersiva herî bilez…","Balansa herî mezin",
    "Kategoriyên xwe hilbijêre, bi demê re bibeze û di lîstikeke pirsyaran a heyecan de xal berhev bike.",
    "Bersiva bilez +500","Her tişt bi tikandinekê","Bi hêsanî di navbera balans, lîstik û mîhengan de derbas bibe",
    "Jawabni çawa dixebite?","Rêbazên hêsan… pêşbaziyeke jibîrnekirî","Lîstik bi kurtî",
    "Lîstik ji 6 kategoriyên hilbijartina te pêk tê, paşê tu dest bi bersivdana pirsyarên wan dikî.",
    "Ji bo ku bi ser bikevî divê bersivên te rast bin da ku xalên her pirsyarê berhev bikî.",
    "Piştî hilbijartina kategoriyan tu bersiva pirsyaran didî, xal digirî û bi ser dikevî.",
    "Dema dem xilas bibe bersiv bixweber xuya dibe, ji ber vê berê bersiv bide.",
    "© Hemû maf parastî ne — Amade be, bersiv bide, bi ser bikeve",
    "Heta 6 kategoriyan hilbijêre da ku ger dest pê bike — di her yekê de 5 pirsyarên bi nirxên cuda hene",
    "Her gera ku tu dilîzî li vir bi dîrok û demê tê tomarkirin","Hemû dane û serkeftinên te li cihekî",
    "Her krediyek = gerek tevahî ji 6 kategoriyan — pakêta ku li te tê hilbijêre",
    "Agahiyên xwe binivîse da ku biçî textê lîstikê",
    "Piştî hilbijartinê dor bixweber diçe tîma din û tu vedigerî textê.",
    "Kategoriyek bi vî navî tune"];

  P2.ur = ["آپ کے پوائنٹس","آپ کا بیلنس","آپ کا براؤزر canvas کی حمایت نہیں کرتا۔","تیز ترین جواب…","سب سے بڑا بیلنس",
    "اپنی اقسام چنیں، وقت سے مقابلہ کریں اور کوئز شو کے انداز میں ایک دلچسپ کھیل میں پوائنٹس جمع کریں۔",
    "تیز جواب ‎+۵۰۰","سب کچھ ایک کلک کی دوری پر","بیلنس، کھیلوں اور ترتیبات کے درمیان آسانی سے جائیں",
    "جوابنی کیسے کام کرتا ہے؟","سادہ اصول… ناقابلِ فراموش مقابلہ","مختصراً کھیل",
    "کھیل میں آپ کی پسند کی ۶ اقسام ہوتی ہیں، پھر آپ ان میں موجود سوالات کے جواب دینا شروع کرتے ہیں۔",
    "جیتنے کے لیے آپ کے جواب درست ہونے چاہئیں تاکہ ہر سوال کے پوائنٹس جمع ہوں۔",
    "اقسام چننے کے بعد آپ سوالات کے جواب دیتے ہیں، پوائنٹس لیتے ہیں اور جیتتے ہیں۔",
    "وقت ختم ہونے پر جواب خودبخود ظاہر ہو جاتا ہے، اس لیے پہلے جواب دیں۔",
    "© جملہ حقوق محفوظ ہیں — تیار ہوں، جواب دیں، جیتیں",
    "راؤنڈ شروع کرنے کے لیے زیادہ سے زیادہ ۶ اقسام چنیں — ہر ایک میں مختلف قدر کے ۵ سوال ہیں",
    "آپ کا کھیلا ہوا ہر راؤنڈ یہاں تاریخ اور وقت کے ساتھ محفوظ ہے","آپ کا سارا ڈیٹا اور کامیابیاں ایک جگہ",
    "ہر کریڈٹ = ۶ اقسام کا مکمل راؤنڈ — اپنے لیے موزوں پیکج چنیں",
    "کھیل کے بورڈ پر جانے کے لیے اپنی تفصیلات درج کریں",
    "انتخاب کے بعد باری خودبخود دوسری ٹیم کو منتقل ہو جاتی ہے اور آپ بورڈ پر واپس آ جاتے ہیں۔",
    "اس نام کی کوئی قسم نہیں"];

  P2.ps = ["ستا ټکي","ستا بیلانس","ستا براوزر canvas نه ملاتړ کوي.","تر ټولو ګړندی ځواب…","تر ټولو لوی بیلانس",
    "خپلې ډلې وټاکه، له وخت سره سیالي وکړه او د سیالۍ سټوډیو په بڼه په یوه زړه‌راښکونکې لوبه کې ټکي راټول کړه.",
    "ګړندی ځواب ‎+۵۰۰","هر څه د یوه کلیک په واټن کې","د بیلانس، لوبو او تنظیماتو ترمنځ په اسانۍ حرکت وکړه",
    "جوابني څنګه کار کوي؟","ساده قواعد… هېرېدونکې نه سیالي","لوبه په لنډو",
    "لوبه ستا د خوښې ۶ ډلې لري، بیا د هغوی پوښتنو ته ځواب ویل پیلوې.",
    "د بریا لپاره باید ستا ځوابونه سم وي څو د هرې پوښتنې ټکي راټول کړې.",
    "د ډلو له ټاکلو وروسته پوښتنو ته ځواب وایې، ټکي ګټې او بریالی کېږې.",
    "کله چې وخت پای ته ورسېږي ځواب په اتوماتيک ډول ښکاري، نو مخکې ځواب ورکړه.",
    "© ټول حقوق خوندي دي — چمتو شه، ځواب ووایه، وګټه",
    "د پړاو پیلولو لپاره تر ۶ پورې ډلې وټاکه — هره یوه پنځه پوښتنې په بېلابېلو ارزښتونو لري",
    "هر پړاو چې لوبې کوې دلته له نېټې او وخت سره خوندي کېږي","ستا ټول معلومات او لاسته راوړنې په یوه ځای کې",
    "هر کریډټ = د ۶ ډلو بشپړ پړاو — خپل مناسب بسته وټاکه",
    "د لوبې تختې ته د تګ لپاره خپل معلومات ولیکه",
    "له ټاکلو وروسته وار په اتوماتيک ډول بلې ډلې ته ځي او ته تختې ته راګرځې.",
    "په دې نوم ډله نشته"];

  P2.he = ["הנקודות שלך","היתרה שלך","הדפדפן שלך אינו תומך ב-canvas.","התשובה המהירה ביותר…","היתרה הגדולה ביותר",
    "בחר את הקטגוריות שלך, התחרה בשעון ואסוף נקודות במשחק חידון מרגש בסגנון אולפן טלוויזיה.",
    "תשובה מהירה +500","הכול במרחק קליק","עבור בקלות בין היתרה, המשחקים וההגדרות",
    "איך Jawabni עובד?","חוקים פשוטים… תחרות בלתי נשכחת","המשחק בקצרה",
    "המשחק כולל 6 קטגוריות לבחירתך מהרשימה, ואז אתה מתחיל לענות על השאלות שבהן.",
    "כדי לנצח התשובות שלך חייבות להיות נכונות כדי לאסוף את הנקודות מכל שאלה.",
    "לאחר בחירת הקטגוריות אתה עונה על השאלות, צובר נקודות ומנצח.",
    "בתום הזמן התשובה מופיעה אוטומטית, אז ענה לפני כן.",
    "© כל הזכויות שמורות — התכונן, ענה, נצח",
    "בחר עד 6 קטגוריות כדי להתחיל את הסבב — בכל אחת 5 שאלות בערכים שונים",
    "כל סבב ששיחקת נשמר כאן עם התאריך והשעה","כל הנתונים וההישגים שלך במקום אחד",
    "כל קרדיט = סבב מלא של 6 קטגוריות — בחר את החבילה שמתאימה לך",
    "הזן את פרטיך כדי להמשיך ללוח המשחק",
    "לאחר הבחירה התור עובר אוטומטית לקבוצה השנייה ואתה חוזר ללוח.",
    "אין קטגוריה בשם הזה"];

  P2.hi = ["आपके अंक","आपका बैलेंस","आपका ब्राउज़र canvas का समर्थन नहीं करता।","सबसे तेज़ जवाब…","सबसे बड़ा बैलेंस",
    "अपनी श्रेणियाँ चुनें, घड़ी से दौड़ लगाएँ और गेम-शो अंदाज़ के रोमांचक क्विज़ में अंक बटोरें।",
    "तेज़ जवाब +500","सब कुछ एक क्लिक दूर","बैलेंस, खेलों और सेटिंग्स के बीच आसानी से जाएँ",
    "जवाबनी कैसे काम करता है?","सरल नियम… अविस्मरणीय मुकाबला","संक्षेप में खेल",
    "खेल में सूची से आपकी चुनी हुई 6 श्रेणियाँ होती हैं, फिर आप उनमें मौजूद प्रश्नों का उत्तर देना शुरू करते हैं।",
    "जीतने के लिए आपके उत्तर सही होने चाहिए ताकि आप हर प्रश्न के अंक बटोर सकें।",
    "श्रेणियाँ चुनने के बाद आप प्रश्नों का उत्तर देते हैं, अंक पाते हैं और जीतते हैं।",
    "समय समाप्त होने पर उत्तर अपने आप दिख जाता है, इसलिए पहले उत्तर दें।",
    "© सर्वाधिकार सुरक्षित — तैयार हो जाइए, जवाब दीजिए, जीतिए",
    "राउंड शुरू करने के लिए 6 तक श्रेणियाँ चुनें — हर एक में अलग-अलग मूल्य के 5 प्रश्न हैं",
    "आपका खेला हुआ हर राउंड यहाँ तारीख और समय के साथ सहेजा जाता है","आपका सारा डेटा और उपलब्धियाँ एक जगह",
    "हर क्रेडिट = 6 श्रेणियों का पूरा राउंड — अपने लिए उपयुक्त पैकेज चुनें",
    "गेम बोर्ड पर जाने के लिए अपना विवरण दर्ज करें",
    "चुनने के बाद बारी अपने आप दूसरी टीम की हो जाती है और आप बोर्ड पर लौट आते हैं।",
    "इस नाम की कोई श्रेणी नहीं"];

  P2.bn = ["আপনার পয়েন্ট","আপনার ব্যালেন্স","আপনার ব্রাউজার canvas সমর্থন করে না।","দ্রুততম উত্তর…","সবচেয়ে বড় ব্যালেন্স",
    "আপনার বিভাগ বেছে নিন, ঘড়ির সঙ্গে দৌড়ান এবং গেম-শো ধাঁচের রোমাঞ্চকর কুইজে পয়েন্ট সংগ্রহ করুন।",
    "দ্রুত উত্তর +500","সবকিছু এক ক্লিক দূরে","ব্যালেন্স, খেলা ও সেটিংসের মধ্যে সহজে চলাচল করুন",
    "জাওয়াবনি কীভাবে কাজ করে?","সহজ নিয়ম… অবিস্মরণীয় প্রতিযোগিতা","সংক্ষেপে খেলা",
    "খেলায় তালিকা থেকে আপনার বেছে নেওয়া ৬টি বিভাগ থাকে, তারপর আপনি সেগুলোর প্রশ্নের উত্তর দিতে শুরু করেন।",
    "জিততে হলে আপনার উত্তর সঠিক হতে হবে যাতে প্রতিটি প্রশ্নের পয়েন্ট জমা হয়।",
    "বিভাগ বেছে নেওয়ার পর আপনি প্রশ্নের উত্তর দেন, পয়েন্ট পান এবং জেতেন।",
    "সময় শেষ হলে উত্তর নিজে থেকেই দেখা যায়, তাই তার আগেই উত্তর দিন।",
    "© সর্বস্বত্ব সংরক্ষিত — প্রস্তুত হোন, উত্তর দিন, জিতুন",
    "রাউন্ড শুরু করতে সর্বোচ্চ ৬টি বিভাগ বেছে নিন — প্রতিটিতে ভিন্ন মানের ৫টি প্রশ্ন আছে",
    "আপনার খেলা প্রতিটি রাউন্ড এখানে তারিখ ও সময়সহ সংরক্ষিত থাকে","আপনার সব তথ্য ও অর্জন এক জায়গায়",
    "প্রতিটি ক্রেডিট = ৬ বিভাগের একটি পূর্ণ রাউন্ড — আপনার উপযোগী প্যাকেজ বেছে নিন",
    "খেলার বোর্ডে যেতে আপনার তথ্য দিন",
    "বেছে নেওয়ার পর পালা নিজে থেকেই অন্য দলে চলে যায় এবং আপনি বোর্ডে ফিরে আসেন।",
    "এই নামে কোনো বিভাগ নেই"];

  P2.ta = ["உங்கள் புள்ளிகள்","உங்கள் இருப்பு","உங்கள் உலாவி canvas ஐ ஆதரிக்கவில்லை.","வேகமான பதில்…","மிகப்பெரிய இருப்பு",
    "உங்கள் பிரிவுகளைத் தேர்வு செய்து, நேரத்துடன் போட்டியிட்டு, விளையாட்டு நிகழ்ச்சி பாணியிலான உற்சாகமான வினாடி வினாவில் புள்ளிகள் சேகரியுங்கள்.",
    "விரைவான பதில் +500","அனைத்தும் ஒரு கிளிக் தொலைவில்","இருப்பு, விளையாட்டுகள், அமைப்புகளுக்கு இடையே எளிதாக நகருங்கள்",
    "Jawabni எப்படி இயங்குகிறது?","எளிய விதிகள்… மறக்க முடியாத போட்டி","சுருக்கமாக விளையாட்டு",
    "விளையாட்டில் பட்டியலிலிருந்து நீங்கள் தேர்ந்தெடுத்த 6 பிரிவுகள் இருக்கும், பிறகு அவற்றின் கேள்விகளுக்குப் பதிலளிக்கத் தொடங்குவீர்கள்.",
    "வெல்ல உங்கள் பதில்கள் சரியாக இருக்க வேண்டும், அப்போதுதான் ஒவ்வொரு கேள்வியின் புள்ளிகளையும் பெறுவீர்கள்.",
    "பிரிவுகளைத் தேர்ந்தெடுத்த பிறகு கேள்விகளுக்குப் பதிலளித்து, புள்ளி பெற்று, வெல்கிறீர்கள்.",
    "நேரம் முடிந்ததும் பதில் தானாகவே தோன்றும், எனவே அதற்கு முன் பதிலளியுங்கள்.",
    "© அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை — தயாராகுங்கள், பதிலளியுங்கள், வெல்லுங்கள்",
    "சுற்றைத் தொடங்க 6 பிரிவுகள் வரை தேர்வு செய்யுங்கள் — ஒவ்வொன்றிலும் வெவ்வேறு மதிப்புள்ள 5 கேள்விகள்",
    "நீங்கள் விளையாடிய ஒவ்வொரு சுற்றும் தேதி நேரத்துடன் இங்கே சேமிக்கப்படுகிறது","உங்கள் தரவும் சாதனைகளும் ஒரே இடத்தில்",
    "ஒவ்வொரு கிரெடிட்டும் = 6 பிரிவுகளின் முழுச் சுற்று — உங்களுக்கேற்ற தொகுப்பைத் தேர்வு செய்யுங்கள்",
    "விளையாட்டுப் பலகைக்குச் செல்ல உங்கள் விவரங்களை உள்ளிடுங்கள்",
    "தேர்வுக்குப் பிறகு முறை தானாகவே மற்ற அணிக்குச் சென்று நீங்கள் பலகைக்குத் திரும்புவீர்கள்.",
    "அந்தப் பெயரில் பிரிவு இல்லை"];

  P2.id = ["Poinmu","Saldomu","Peramban kamu tidak mendukung canvas.","Jawaban tercepat…","Saldo terbesar",
    "Pilih kategorimu, berpacu dengan waktu, dan kumpulkan poin dalam permainan kuis penuh keseruan ala studio kuis.",
    "Jawaban cepat +500","Semua hanya sejauh satu klik","Berpindah dengan mudah antara saldo, permainan, dan pengaturan",
    "Bagaimana Jawabni bekerja?","Aturan sederhana… persaingan tak terlupakan","Permainan secara singkat",
    "Permainan berisi 6 kategori pilihanmu dari daftar, lalu kamu mulai menjawab pertanyaan di dalamnya.",
    "Untuk menang, jawabanmu harus benar agar kamu mengumpulkan poin dari setiap pertanyaan.",
    "Setelah kategori dipilih, kamu menjawab pertanyaan, meraih poin, dan menang.",
    "Saat waktu habis jawaban muncul otomatis, jadi jawablah sebelum itu.",
    "© Hak cipta dilindungi — Bersiap, jawab, menang",
    "Pilih hingga 6 kategori untuk memulai ronde — masing-masing berisi 5 pertanyaan dengan nilai berbeda",
    "Setiap ronde yang kamu mainkan tersimpan di sini beserta tanggal dan waktunya","Semua datamu dan pencapaianmu di satu tempat",
    "Setiap kredit = satu ronde penuh berisi 6 kategori — pilih paket yang cocok untukmu",
    "Masukkan datamu untuk lanjut ke papan permainan",
    "Setelah memilih, giliran otomatis berpindah ke tim lain dan kamu kembali ke papan.",
    "Tidak ada kategori dengan nama itu"];

  P2.ms = ["Mata anda","Baki anda","Pelayar anda tidak menyokong canvas.","Jawapan terpantas…","Baki terbesar",
    "Pilih kategori anda, berlumba dengan masa dan kumpulkan mata dalam permainan kuiz penuh keseronokan bergaya studio kuiz.",
    "Jawapan pantas +500","Semuanya sejauh satu klik","Bergerak dengan mudah antara baki, permainan dan tetapan",
    "Bagaimana Jawabni berfungsi?","Peraturan mudah… persaingan tak terlupakan","Permainan secara ringkas",
    "Permainan mengandungi 6 kategori pilihan anda daripada senarai, kemudian anda mula menjawab soalan di dalamnya.",
    "Untuk menang, jawapan anda mesti betul supaya anda mengumpul mata setiap soalan.",
    "Selepas kategori dipilih, anda menjawab soalan, memperoleh mata dan menang.",
    "Apabila masa tamat jawapan muncul secara automatik, jadi jawablah sebelum itu.",
    "© Hak cipta terpelihara — Bersedia, jawab, menang",
    "Pilih sehingga 6 kategori untuk memulakan pusingan — setiap satu mengandungi 5 soalan bernilai berbeza",
    "Setiap pusingan yang anda main disimpan di sini dengan tarikh dan masanya","Semua data dan pencapaian anda di satu tempat",
    "Setiap kredit = satu pusingan penuh 6 kategori — pilih pakej yang sesuai",
    "Masukkan maklumat anda untuk ke papan permainan",
    "Selepas memilih, giliran berpindah secara automatik kepada pasukan lain dan anda kembali ke papan.",
    "Tiada kategori dengan nama itu"];

  P2.zh = ["你的积分","你的余额","你的浏览器不支持 canvas。","最快的回答…","最大的余额",
    "选好你的类别，与时间赛跑，在综艺竞猜风格的刺激问答游戏中积攒分数。",
    "快速作答 +500","一切只需一次点击","在余额、游戏和设置之间轻松切换",
    "Jawabni 是怎么玩的？","规则简单…比拼难忘","游戏简介",
    "一局包含你从列表中挑选的 6 个类别，然后你开始回答其中的题目。",
    "想赢就得答对，这样才能拿到每道题的分数。",
    "选好类别后，你回答题目、获得积分、赢得比赛。",
    "时间结束时答案会自动显示，所以要在此之前作答。",
    "© 版权所有 — 准备好，作答，获胜",
    "最多选择 6 个类别开始本轮 — 每个类别有 5 道不同分值的题目",
    "你玩过的每一轮都会连同日期和时间保存在这里","你的所有数据与成就集中在一处",
    "每个点数 = 含 6 个类别的完整一轮 — 选择适合你的套餐",
    "输入你的信息以进入游戏面板",
    "选择之后轮次会自动交给另一队，你也会回到面板。",
    "没有这个名字的类别"];

  P2.ja = ["あなたのポイント","あなたの残高","お使いのブラウザーは canvas に対応していません。","いちばん速い回答…","いちばん多い残高",
    "カテゴリーを選び、時間と競い、クイズ番組さながらの熱いゲームでポイントを集めよう。",
    "早押し +500","すべてはワンクリック","残高・ゲーム・設定のあいだをかんたんに行き来",
    "Jawabni の遊び方は？","ルールはシンプル…勝負は忘れがたい","ゲームのあらまし",
    "1ゲームには一覧から選んだ6カテゴリーが入り、その中の問題に答えていきます。",
    "勝つには回答が正しくなければならず、そうして各問題の得点を集めます。",
    "カテゴリーを選んだら問題に答え、得点を重ねて勝利します。",
    "時間切れになると答えが自動で表示されるので、その前に答えましょう。",
    "© 無断転載を禁じます — 構えて、答えて、勝つ",
    "ラウンドを始めるにはカテゴリーを6つまで選択 — 各カテゴリーに配点の異なる5問",
    "プレイした各ラウンドは日時とともにここに保存されます","データも実績もひとつの場所に",
    "1クレジット = 6カテゴリーのフルラウンド — 自分に合ったパックを選ぼう",
    "ゲームボードへ進むには情報を入力してください",
    "選択後は自動的に相手チームの手番になり、ボードへ戻ります。",
    "その名前のカテゴリーはありません"];

  P2.ko = ["내 점수","내 잔액","브라우저가 canvas를 지원하지 않습니다.","가장 빠른 정답…","가장 많은 잔액",
    "카테고리를 고르고 시간과 겨루며, 퀴즈쇼 같은 짜릿한 게임에서 점수를 모으세요.",
    "빠른 정답 +500","모든 것이 한 번의 클릭","잔액과 게임, 설정 사이를 손쉽게 오가세요",
    "Jawabni는 어떻게 진행되나요?","규칙은 간단하게… 대결은 잊지 못하게","게임 요약",
    "한 게임에는 목록에서 고른 6개 카테고리가 들어가고, 그 안의 문제에 답하기 시작합니다.",
    "이기려면 답이 맞아야 하며, 그래야 문제마다 점수를 모을 수 있습니다.",
    "카테고리를 고른 뒤 문제에 답하고 점수를 얻어 승리합니다.",
    "시간이 끝나면 정답이 자동으로 나타나니 그 전에 답하세요.",
    "© 모든 권리 보유 — 준비하고, 답하고, 이기세요",
    "라운드를 시작하려면 카테고리를 최대 6개 선택 — 각 카테고리에 점수가 다른 5문항",
    "플레이한 모든 라운드가 날짜와 시간과 함께 여기에 저장됩니다","모든 데이터와 성과를 한곳에",
    "크레딧 1개 = 6개 카테고리의 온전한 한 라운드 — 맞는 패키지를 고르세요",
    "게임 보드로 이동하려면 정보를 입력하세요",
    "선택하면 차례가 자동으로 상대 팀에게 넘어가고 보드로 돌아갑니다.",
    "그런 이름의 카테고리가 없습니다"];

  P2.th = ["คะแนนของคุณ","ยอดคงเหลือของคุณ","เบราว์เซอร์ของคุณไม่รองรับ canvas","คำตอบที่เร็วที่สุด…","ยอดคงเหลือที่มากที่สุด",
    "เลือกหมวดหมู่ของคุณ แข่งกับเวลา และสะสมคะแนนในเกมตอบคำถามสุดมันส์สไตล์รายการเกมโชว์",
    "ตอบไว +500","ทุกอย่างห่างแค่คลิกเดียว","สลับระหว่างยอดคงเหลือ เกม และการตั้งค่าได้ง่าย",
    "Jawabni ทำงานอย่างไร?","กติกาเรียบง่าย… การแข่งขันที่ไม่รู้ลืม","เกมโดยสังเขป",
    "เกมมี 6 หมวดหมู่ที่คุณเลือกจากรายการ จากนั้นคุณเริ่มตอบคำถามที่อยู่ในหมวดเหล่านั้น",
    "จะชนะได้คำตอบต้องถูก คุณจึงจะเก็บคะแนนจากทุกข้อได้",
    "เมื่อเลือกหมวดหมู่แล้ว คุณตอบคำถาม เก็บคะแนน แล้วชนะ",
    "เมื่อหมดเวลาคำตอบจะปรากฏอัตโนมัติ จึงควรตอบก่อนหน้านั้น",
    "© สงวนลิขสิทธิ์ — เตรียมพร้อม ตอบ ชนะ",
    "เลือกได้สูงสุด 6 หมวดหมู่เพื่อเริ่มรอบ — แต่ละหมวดมี 5 คำถามคะแนนต่างกัน",
    "ทุกรอบที่คุณเล่นถูกบันทึกไว้ที่นี่พร้อมวันและเวลา","ข้อมูลและความสำเร็จทั้งหมดของคุณในที่เดียว",
    "แต่ละเครดิต = หนึ่งรอบเต็มจาก 6 หมวดหมู่ — เลือกแพ็กที่เหมาะกับคุณ",
    "กรอกข้อมูลของคุณเพื่อไปยังกระดานเกม",
    "หลังเลือกแล้ว ตาจะเปลี่ยนไปยังอีกทีมโดยอัตโนมัติ และคุณกลับสู่กระดาน",
    "ไม่มีหมวดหมู่ชื่อนี้"];

  P2.vi = ["Điểm của bạn","Số dư của bạn","Trình duyệt của bạn không hỗ trợ canvas.","Câu trả lời nhanh nhất…","Số dư lớn nhất",
    "Chọn danh mục của bạn, chạy đua với thời gian và gom điểm trong trò chơi đố vui đầy phấn khích theo phong cách gameshow.",
    "Trả lời nhanh +500","Mọi thứ chỉ cách một cú nhấp","Di chuyển dễ dàng giữa số dư, trò chơi và cài đặt",
    "Jawabni hoạt động thế nào?","Luật đơn giản… cuộc đua khó quên","Tóm tắt trò chơi",
    "Một ván gồm 6 danh mục bạn chọn từ danh sách, rồi bạn bắt đầu trả lời các câu hỏi trong đó.",
    "Muốn thắng thì câu trả lời phải đúng để bạn gom điểm của từng câu.",
    "Sau khi chọn danh mục, bạn trả lời câu hỏi, kiếm điểm và giành chiến thắng.",
    "Khi hết giờ đáp án hiện ra tự động, vậy nên hãy trả lời trước đó.",
    "© Bảo lưu mọi quyền — Sẵn sàng, trả lời, chiến thắng",
    "Chọn tối đa 6 danh mục để bắt đầu vòng chơi — mỗi danh mục có 5 câu hỏi giá trị khác nhau",
    "Mỗi vòng bạn chơi đều được lưu tại đây kèm ngày giờ","Toàn bộ dữ liệu và thành tích của bạn ở một nơi",
    "Mỗi lượt chơi = một vòng đầy đủ gồm 6 danh mục — chọn gói phù hợp với bạn",
    "Nhập thông tin của bạn để tiếp tục tới bảng trò chơi",
    "Sau khi chọn, lượt tự động chuyển sang đội kia và bạn quay lại bảng.",
    "Không có danh mục nào tên như vậy"];

  P2.tl = ["Ang iyong puntos","Ang iyong balanse","Hindi sinusuportahan ng browser mo ang canvas.","Ang pinakamabilis na sagot…","Ang pinakamalaking balanse",
    "Piliin ang iyong mga kategorya, makipagkarera sa oras, at mag-ipon ng puntos sa isang kapana-panabik na larong pagsusulit na parang game show.",
    "Mabilis na sagot +500","Lahat ay isang click lamang","Madaling lumipat sa pagitan ng balanse, mga laro, at mga setting",
    "Paano gumagana ang Jawabni?","Simpleng patakaran… hindi malilimutang paligsahan","Ang laro sa maikling salita",
    "Ang laro ay may 6 na kategoryang pinili mo mula sa listahan, pagkatapos ay sisimulan mong sagutin ang mga tanong dito.",
    "Para manalo, dapat tama ang iyong mga sagot upang makuha ang puntos ng bawat tanong.",
    "Kapag napili na ang mga kategorya, sasagutin mo ang mga tanong, kikita ng puntos, at mananalo.",
    "Pagkaubos ng oras ay awtomatikong lilitaw ang sagot, kaya sumagot bago iyon.",
    "© Lahat ng karapatan ay nakalaan — Maghanda, sumagot, manalo",
    "Pumili ng hanggang 6 na kategorya para simulan ang round — bawat isa ay may 5 tanong na magkakaibang halaga",
    "Bawat round na nilaro mo ay nakatago rito kasama ang petsa at oras","Lahat ng iyong datos at tagumpay sa isang lugar",
    "Bawat kredito = isang buong round ng 6 na kategorya — piliin ang pakete na bagay sa iyo",
    "Ilagay ang iyong mga detalye para magpatuloy sa board ng laro",
    "Pagkatapos pumili, awtomatikong lilipat ang turno sa kabilang koponan at babalik ka sa board.",
    "Walang kategoryang ganyan ang pangalan"];

  P2.sw = ["Pointi zako","Salio lako","Kivinjari chako hakiungi mkono canvas.","Jibu la haraka zaidi…","Salio kubwa zaidi",
    "Chagua kategoria zako, shindana na saa, na ukusanye pointi katika mchezo wa maswali wenye msisimko wa mtindo wa studio.",
    "Jibu la haraka +500","Kila kitu kwa mbofyo mmoja","Sogea kwa urahisi kati ya salio, michezo na mipangilio",
    "Jawabni hufanyaje kazi?","Kanuni rahisi… mashindano yasiyosahaulika","Mchezo kwa kifupi",
    "Mchezo una kategoria 6 unazochagua kutoka orodha, kisha unaanza kujibu maswali yaliyomo.",
    "Ili kushinda majibu yako lazima yawe sahihi ili ukusanye pointi za kila swali.",
    "Baada ya kuchagua kategoria, unajibu maswali, unapata pointi na unashinda.",
    "Muda ukiisha jibu linaonekana kiotomatiki, hivyo jibu kabla ya hapo.",
    "© Haki zote zimehifadhiwa — Jiandae, jibu, shinda",
    "Chagua hadi kategoria 6 kuanza raundi — kila moja ina maswali 5 ya thamani tofauti",
    "Kila raundi unayocheza huhifadhiwa hapa na tarehe na saa yake","Data yako yote na mafanikio mahali pamoja",
    "Kila salio = raundi kamili ya kategoria 6 — chagua kifurushi kinachokufaa",
    "Weka taarifa zako ili kuendelea kwenye ubao wa mchezo",
    "Baada ya kuchagua, zamu huhamia timu nyingine kiotomatiki na unarudi kwenye ubao.",
    "Hakuna kategoria yenye jina hilo"];

  P2.ha = ["Makin ka","Ma'aunin ka","Burauzarka ba ya goyon bayan canvas.","Amsa mafi sauri…","Ma'auni mafi girma",
    "Zaɓi rukunonin ka, yi tsere da lokaci, kuma tara maki a wasan tambayoyi mai daɗi irin na shirye-shiryen gasa.",
    "Amsa mai sauri +500","Komai yana nesa da danna guda","Yi motsi cikin sauƙi tsakanin ma'auni, wasanni da saituna",
    "Ta yaya Jawabni ke aiki?","Ka'idoji masu sauƙi… gasa da ba a mantawa","Wasan a taƙaice",
    "Wasan yana ɗauke da rukunoni 6 na zaɓinka daga jerin, sannan ka fara amsa tambayoyin da ke ciki.",
    "Domin ka yi nasara sai amsoshinka su zama daidai don ka tara makin kowace tambaya.",
    "Bayan an zaɓi rukunoni, kana amsa tambayoyi, kana samun maki, kana kuma yin nasara.",
    "Idan lokaci ya ƙare amsar tana bayyana ta atomatik, don haka ka amsa kafin nan.",
    "© Duk haƙƙoƙi na kiyaye — Ka shirya, ka amsa, ka ci nasara",
    "Zaɓi har rukunoni 6 don fara zagaye — kowanne yana da tambayoyi 5 na daban-daban darajoji",
    "Kowane zagaye da ka buga ana ajiye shi anan tare da kwanan wata da lokaci","Duk bayanan ka da nasarorin ka a wuri guda",
    "Kowane kuɗi = cikakken zagaye na rukunoni 6 — zaɓi fakitin da ya dace da kai",
    "Shigar da bayananka don ci gaba zuwa allon wasa",
    "Bayan zaɓi, lokaci yana wucewa ta atomatik zuwa ɗayan ƙungiyar kuma ka koma allon.",
    "Babu rukuni mai wannan suna"];

  P2.so = ["Dhibcahaaga","Haraagaaga","Biraawsarkaagu ma taageero canvas.","Jawaabta ugu dhaqsaha badan…","Haraaga ugu weyn",
    "Dooro qaybahaaga, la tartan wakhtiga, oo dhibco uruuri ciyaar su'aalo oo xiiso leh oo qaab istuudiyo tartan ah.",
    "Jawaab degdeg ah +500","Wax walba hal guji ayay ka fog yihiin","Si fudud ugu dhex dhaqaaq haraaga, ciyaaraha iyo dejinta",
    "Sidee Jawabni u shaqeeyaa?","Xeerar fudud… tartan aan la illoobi karin","Ciyaarta si kooban",
    "Ciyaartu waxay ka kooban tahay 6 qaybood oo aad liiska ka dooratay, kadibna waxaad bilaabaysaa inaad ka jawaabto su'aalaha ku jira.",
    "Si aad u guulaysato jawaabahaagu waa inay saxaan si aad u uruuriso dhibcaha su'aal kasta.",
    "Marka qaybaha la doorto, waxaad ka jawaabaysaa su'aalaha, dhibco baad heshaa, waanad guulaysanaysaa.",
    "Marka wakhtigu dhammaado jawaabtu si toos ah ayay u soo baxdaa, marka ka hor jawaab.",
    "© Xuquuqda oo dhan waa la dhawray — Isu diyaari, jawaab, guulayso",
    "Dooro ilaa 6 qaybood si aad u bilowdo wareegga — mid kastaa wuxuu leeyahay 5 su'aalood oo qiimo kala duwan leh",
    "Wareeg kasta oo aad ciyaartay halkan ayaa lagu keydiyaa taariikhda iyo saacadda","Dhammaan xogtaada iyo guulahaaga meel keliya",
    "Deyn kastaa = wareeg dhameystiran oo 6 qaybood ah — dooro xirmada kugu habboon",
    "Geli faahfaahintaada si aad ugu gudubto looxa ciyaarta",
    "Doorashada kadib, wareegga si toos ah ayuu ugu wareegaa kooxda kale oo waxaad ku noqonaysaa looxa.",
    "Ma jirto qayb magacaas leh"];

  P2.am = ["ነጥቦችህ","ቀሪ ሂሳብህ","አሳሽህ canvas አይደግፍም።","በጣም ፈጣኑ መልስ…","ትልቁ ቀሪ ሂሳብ",
    "ምድቦችህን ምረጥ፣ ከሰዓት ጋር ተወዳደር፣ በጨዋታ ትርኢት ዘይቤ በሚያስደስት የጥያቄ ጨዋታ ነጥብ አሰባስብ።",
    "ፈጣን መልስ +500","ሁሉም በአንድ ጠቅታ ርቀት","በቀሪ ሂሳብ፣ በጨዋታዎችና በቅንብሮች መካከል በቀላሉ ተንቀሳቀስ",
    "Jawabni እንዴት ይሠራል?","ቀላል ሕጎች… የማይረሳ ውድድር","ጨዋታው በአጭሩ",
    "ጨዋታው ከዝርዝሩ የመረጥካቸው 6 ምድቦችን ይይዛል፣ ከዚያም በውስጣቸው ያሉትን ጥያቄዎች መመለስ ትጀምራለህ።",
    "ለማሸነፍ መልሶችህ ትክክል መሆን አለባቸው፣ ስለዚህ የእያንዳንዱን ጥያቄ ነጥብ ትሰበስባለህ።",
    "ምድቦቹ ከተመረጡ በኋላ ጥያቄዎቹን ትመልሳለህ፣ ነጥብ ታገኛለህ፣ ታሸንፋለህ።",
    "ጊዜው ሲያልቅ መልሱ በራሱ ይታያል፣ ስለዚህ ከዚያ በፊት መልስ።",
    "© መብቱ በሙሉ የተጠበቀ ነው — ተዘጋጅ፣ መልስ፣ አሸንፍ",
    "ዙሩን ለመጀመር እስከ 6 ምድቦች ምረጥ — እያንዳንዱ የተለያየ ዋጋ ያላቸው 5 ጥያቄዎች አሉት",
    "የተጫወትከው እያንዳንዱ ዙር ከቀኑና ከሰዓቱ ጋር እዚህ ይቀመጣል","ሁሉም መረጃህና ስኬቶችህ በአንድ ቦታ",
    "እያንዳንዱ ክሬዲት = የ6 ምድቦች ሙሉ ዙር — ለአንተ የሚስማማውን ጥቅል ምረጥ",
    "ወደ ጨዋታ ሰሌዳው ለመቀጠል መረጃህን አስገባ",
    "ከመረጥክ በኋላ ተራው በራሱ ወደ ሌላው ቡድን ይሄዳል አንተም ወደ ሰሌዳው ትመለሳለህ።",
    "በዚህ ስም ምድብ የለም"];

  /* ============================================================
     الدفعة الثالثة — المفاجآت والمساعدات واللعب أونلاين
     ============================================================ */
  var K3 = [
    /* 0*/ "أونلاين",      /* 1*/ "العب أونلاين",   /* 2*/ "اللعب عن بُعد",
    /* 3*/ "أنشئ غرفة",    /* 4*/ "انضم لغرفة",     /* 5*/ "إنشاء غرفة",
    /* 6*/ "انضمام",       /* 7*/ "رمز الغرفة",     /* 8*/ "نسخ الرابط",
    /* 9*/ "ابدأ اللعب",   /*10*/ "المفاجآت",       /*11*/ "فخ",
    /*12*/ "حفرة",         /*13*/ "قنبلة",          /*14*/ "كنز",
    /*15*/ "دبل ×٢",       /*16*/ "دبل ×٤",         /*17*/ "تجميد الدور",
    /*18*/ "جوابين",       /*19*/ "مكالمة",         /*20*/ "اسرق الدور",
    /*21*/ "مكالمة صديق",  /*22*/ "إنهاء المكالمة", /*23*/ "إلغاء",
    /*24*/ "فئة",          /*25*/ "سؤال",           /*26*/ "الفريق الأول",
    /*27*/ "الفريق الثاني",/*28*/ "إحدى هاتين هي الإجابة الصحيحة",
    /*29*/ "مؤقّت السؤال متوقف أثناء المكالمة"
  ];

  var P3 = {};

  P3.en = ["Online","Play online","Remote play","Create a room","Join a room","Create room","Join","Room code","Copy link","Start playing","Surprises","Trap","Pit","Bomb","Treasure","Double ×2","Double ×4","Freeze turn","Two answers","Phone a friend","Steal the turn","Phone a friend","End call","Cancel","category","question","First team","Second team","One of these two is the correct answer","The question timer is paused during the call"];
  P3.fr = ["En ligne","Jouer en ligne","Jeu à distance","Créer un salon","Rejoindre un salon","Créer le salon","Rejoindre","Code du salon","Copier le lien","Commencer à jouer","Surprises","Piège","Fosse","Bombe","Trésor","Double ×2","Double ×4","Geler le tour","Deux réponses","Appel à un ami","Voler le tour","Appel à un ami","Terminer l'appel","Annuler","catégorie","question","Première équipe","Deuxième équipe","L'une de ces deux réponses est la bonne","Le chrono est en pause pendant l'appel"];
  P3.es = ["En línea","Jugar en línea","Juego a distancia","Crear una sala","Unirse a una sala","Crear sala","Unirse","Código de sala","Copiar enlace","Empezar a jugar","Sorpresas","Trampa","Foso","Bomba","Tesoro","Doble ×2","Doble ×4","Congelar turno","Dos respuestas","Llamada a un amigo","Robar el turno","Llamada a un amigo","Colgar","Cancelar","categoría","pregunta","Primer equipo","Segundo equipo","Una de estas dos es la respuesta correcta","El cronómetro está en pausa durante la llamada"];
  P3.pt = ["Online","Jogar online","Jogo à distância","Criar uma sala","Entrar numa sala","Criar sala","Entrar","Código da sala","Copiar link","Começar a jogar","Surpresas","Armadilha","Fosso","Bomba","Tesouro","Dobro ×2","Dobro ×4","Congelar a vez","Duas respostas","Ligar para um amigo","Roubar a vez","Ligar para um amigo","Terminar chamada","Cancelar","categoria","pergunta","Primeira equipa","Segunda equipa","Uma destas duas é a resposta certa","O cronómetro fica em pausa durante a chamada"];
  P3.de = ["Online","Online spielen","Fernspiel","Raum erstellen","Raum beitreten","Raum erstellen","Beitreten","Raumcode","Link kopieren","Spiel starten","Überraschungen","Falle","Grube","Bombe","Schatz","Doppelt ×2","Doppelt ×4","Zug einfrieren","Zwei Antworten","Anruf beim Freund","Zug stehlen","Anruf beim Freund","Anruf beenden","Abbrechen","Kategorie","Frage","Erstes Team","Zweites Team","Eine dieser beiden ist die richtige Antwort","Der Fragen-Timer pausiert während des Anrufs"];
  P3.it = ["Online","Gioca online","Gioco a distanza","Crea una stanza","Entra in una stanza","Crea stanza","Entra","Codice stanza","Copia link","Inizia a giocare","Sorprese","Trappola","Fossa","Bomba","Tesoro","Doppio ×2","Doppio ×4","Congela il turno","Due risposte","Telefonata a un amico","Ruba il turno","Telefonata a un amico","Termina chiamata","Annulla","categoria","domanda","Prima squadra","Seconda squadra","Una di queste due è la risposta giusta","Il timer è in pausa durante la chiamata"];
  P3.nl = ["Online","Online spelen","Spelen op afstand","Maak een kamer","Word lid van een kamer","Kamer maken","Deelnemen","Kamercode","Link kopiëren","Begin met spelen","Verrassingen","Val","Kuil","Bom","Schat","Dubbel ×2","Dubbel ×4","Beurt bevriezen","Twee antwoorden","Bel een vriend","Steel de beurt","Bel een vriend","Gesprek beëindigen","Annuleren","categorie","vraag","Eerste team","Tweede team","Een van deze twee is het juiste antwoord","De timer staat stil tijdens het gesprek"];
  P3.sv = ["Online","Spela online","Fjärrspel","Skapa ett rum","Gå med i ett rum","Skapa rum","Gå med","Rumskod","Kopiera länk","Börja spela","Överraskningar","Fälla","Grop","Bomb","Skatt","Dubbelt ×2","Dubbelt ×4","Frys turen","Två svar","Ring en vän","Stjäl turen","Ring en vän","Avsluta samtal","Avbryt","kategori","fråga","Första laget","Andra laget","Ett av dessa två är rätt svar","Frågetimern är pausad under samtalet"];
  P3.pl = ["Online","Graj online","Gra zdalna","Utwórz pokój","Dołącz do pokoju","Utwórz pokój","Dołącz","Kod pokoju","Kopiuj link","Zacznij grać","Niespodzianki","Pułapka","Dół","Bomba","Skarb","Podwójne ×2","Poczwórne ×4","Zamroź kolejkę","Dwie odpowiedzi","Telefon do przyjaciela","Ukradnij kolejkę","Telefon do przyjaciela","Zakończ rozmowę","Anuluj","kategoria","pytanie","Pierwsza drużyna","Druga drużyna","Jedna z tych dwóch jest poprawna","Czas pytania jest wstrzymany podczas rozmowy"];
  P3.cs = ["Online","Hrát online","Hra na dálku","Vytvořit místnost","Připojit se k místnosti","Vytvořit místnost","Připojit se","Kód místnosti","Kopírovat odkaz","Začít hrát","Překvapení","Past","Jáma","Bomba","Poklad","Dvojnásobek ×2","Čtyřnásobek ×4","Zmrazit tah","Dvě odpovědi","Telefonát příteli","Ukrást tah","Telefonát příteli","Ukončit hovor","Zrušit","kategorie","otázka","První tým","Druhý tým","Jedna z těchto dvou je správná odpověď","Časomíra je během hovoru pozastavena"];
  P3.ro = ["Online","Joacă online","Joc la distanță","Creează o cameră","Intră într-o cameră","Creează cameră","Intră","Codul camerei","Copiază linkul","Începe jocul","Surprize","Capcană","Groapă","Bombă","Comoară","Dublu ×2","Dublu ×4","Îngheață rândul","Două răspunsuri","Sună un prieten","Fură rândul","Sună un prieten","Încheie apelul","Anulează","categorie","întrebare","Prima echipă","A doua echipă","Unul dintre aceste două este răspunsul corect","Cronometrul este oprit în timpul apelului"];
  P3.hu = ["Online","Játék online","Távoli játék","Szoba létrehozása","Csatlakozás szobához","Szoba létrehozása","Csatlakozás","Szobakód","Link másolása","Játék indítása","Meglepetések","Csapda","Gödör","Bomba","Kincs","Dupla ×2","Négyszeres ×4","Kör befagyasztása","Két válasz","Telefonhívás","Kör ellopása","Telefonhívás","Hívás befejezése","Mégse","kategória","kérdés","Első csapat","Második csapat","E kettő közül az egyik a helyes válasz","A kérdés órája szünetel a hívás alatt"];
  P3.el = ["Σε σύνδεση","Παίξε online","Παιχνίδι εξ αποστάσεως","Δημιούργησε δωμάτιο","Μπες σε δωμάτιο","Δημιουργία δωματίου","Είσοδος","Κωδικός δωματίου","Αντιγραφή συνδέσμου","Ξεκίνα το παιχνίδι","Εκπλήξεις","Παγίδα","Λάκκος","Βόμβα","Θησαυρός","Διπλό ×2","Τετραπλό ×4","Πάγωμα σειράς","Δύο απαντήσεις","Τηλεφώνησε σε φίλο","Κλέψε τη σειρά","Τηλεφώνησε σε φίλο","Τέλος κλήσης","Άκυρο","κατηγορία","ερώτηση","Πρώτη ομάδα","Δεύτερη ομάδα","Μία από τις δύο είναι η σωστή απάντηση","Το χρονόμετρο είναι σε παύση κατά την κλήση"];
  P3.ru = ["Онлайн","Играть онлайн","Игра на расстоянии","Создать комнату","Войти в комнату","Создать комнату","Войти","Код комнаты","Копировать ссылку","Начать игру","Сюрпризы","Ловушка","Яма","Бомба","Клад","Двойные ×2","Четверные ×4","Заморозить ход","Два ответа","Звонок другу","Украсть ход","Звонок другу","Завершить звонок","Отмена","категория","вопрос","Первая команда","Вторая команда","Один из этих двух — правильный ответ","Таймер вопроса на паузе во время звонка"];
  P3.uk = ["Онлайн","Грати онлайн","Гра на відстані","Створити кімнату","Приєднатися до кімнати","Створити кімнату","Приєднатися","Код кімнати","Копіювати посилання","Почати гру","Сюрпризи","Пастка","Яма","Бомба","Скарб","Подвійні ×2","Чотирикратні ×4","Заморозити хід","Дві відповіді","Дзвінок другові","Вкрасти хід","Дзвінок другові","Завершити дзвінок","Скасувати","категорія","питання","Перша команда","Друга команда","Одна з цих двох — правильна відповідь","Таймер питання на паузі під час дзвінка"];
  P3.tr = ["Çevrimiçi","Çevrimiçi oyna","Uzaktan oyun","Oda oluştur","Odaya katıl","Oda oluştur","Katıl","Oda kodu","Bağlantıyı kopyala","Oynamaya başla","Sürprizler","Tuzak","Çukur","Bomba","Hazine","Çift ×2","Dört kat ×4","Sırayı dondur","İki cevap","Bir arkadaşı ara","Sırayı çal","Bir arkadaşı ara","Aramayı bitir","İptal","kategori","soru","Birinci takım","İkinci takım","Bu ikisinden biri doğru cevap","Arama sırasında soru sayacı duraklatılır"];
  P3.az = ["Onlayn","Onlayn oyna","Uzaqdan oyun","Otaq yarat","Otağa qoşul","Otaq yarat","Qoşul","Otaq kodu","Linki kopyala","Oynamağa başla","Sürprizlər","Tələ","Çuxur","Bomba","Xəzinə","İkiqat ×2","Dördqat ×4","Növbəni dondur","İki cavab","Dosta zəng","Növbəni oğurla","Dosta zəng","Zəngi bitir","Ləğv et","kateqoriya","sual","Birinci komanda","İkinci komanda","Bu ikisindən biri düzgün cavabdır","Zəng zamanı sual sayğacı dayanır"];
  P3.fa = ["آنلاین","بازی آنلاین","بازی از راه دور","اتاق بساز","به اتاق بپیوند","ساخت اتاق","پیوستن","کد اتاق","کپی پیوند","شروع بازی","شگفتی‌ها","تله","چاله","بمب","گنج","دوبرابر ×۲","چهاربرابر ×۴","انجماد نوبت","دو پاسخ","تماس با دوست","دزدیدن نوبت","تماس با دوست","پایان تماس","لغو","دسته","پرسش","تیم اول","تیم دوم","یکی از این دو پاسخ درست است","زمان‌سنج پرسش هنگام تماس متوقف است"];
  P3.ku = ["Serhêl","Serhêl bilîze","Lîstika ji dûr","Odeyekê çêke","Tevlî odeyê bibe","Ode çêke","Tevlî bibe","Koda odeyê","Girêdanê kopî bike","Dest bi lîstinê bike","Sûrprîz","Dav","Çal","Bombe","Xezîne","Duqat ×2","Çarqat ×4","Dor cemidandin","Du bersiv","Têlefona hevalek","Dorê bidize","Têlefona hevalek","Têlefonê biqedîne","Betal bike","kategorî","pirs","Tîma yekem","Tîma duyem","Yek ji van herdûyan bersiva rast e","Dema pirsê di têlefonê de rawestiyaye"];
  P3.ur = ["آن لائن","آن لائن کھیلیں","دور سے کھیل","کمرہ بنائیں","کمرے میں شامل ہوں","کمرہ بنائیں","شامل ہوں","کمرے کا کوڈ","لنک کاپی کریں","کھیلنا شروع کریں","سرپرائز","جال","گڑھا","بم","خزانہ","ڈبل ×۲","چوگنا ×۴","باری منجمد","دو جواب","دوست کو فون","باری چرائیں","دوست کو فون","کال ختم کریں","منسوخ","قسم","سوال","پہلی ٹیم","دوسری ٹیم","ان دونوں میں سے ایک درست جواب ہے","کال کے دوران سوال کا ٹائمر رکا رہتا ہے"];
  P3.ps = ["آنلاین","آنلاین ولوبېږه","له لرې لوبه","خونه جوړه کړه","خونې ته ننوځه","خونه جوړول","ننوتل","د خونې کوډ","لینک کاپي کړه","لوبه پیل کړه","سرپرایزونه","دام","کنده","بم","خزانه","دوه چنده ×۲","څلور چنده ×۴","د وار کنګل","دوه ځوابونه","ملګري ته زنګ","وار غلا کول","ملګري ته زنګ","زنګ پای ته ورسوه","لغوه","ډله","پوښتنه","لومړی ټیم","دویم ټیم","له دې دواړو یو سم ځواب دی","د زنګ پر مهال د پوښتنې ساعت درېږي"];
  P3.he = ["מקוון","שחק מקוון","משחק מרחוק","צור חדר","הצטרף לחדר","צור חדר","הצטרף","קוד החדר","העתק קישור","התחל לשחק","הפתעות","מלכודת","בור","פצצה","אוצר","כפול ×2","פי ארבעה ×4","הקפאת תור","שתי תשובות","טלפון לחבר","גנוב את התור","טלפון לחבר","סיים שיחה","ביטול","קטגוריה","שאלה","הקבוצה הראשונה","הקבוצה השנייה","אחת מהשתיים היא התשובה הנכונה","טיימר השאלה מושהה במהלך השיחה"];
  P3.hi = ["ऑनलाइन","ऑनलाइन खेलें","दूर से खेल","कमरा बनाएँ","कमरे में शामिल हों","कमरा बनाएँ","शामिल हों","कमरे का कोड","लिंक कॉपी करें","खेलना शुरू करें","सरप्राइज़","जाल","गड्ढा","बम","खज़ाना","डबल ×2","चौगुना ×4","बारी फ़्रीज़","दो जवाब","दोस्त को फ़ोन","बारी चुराएँ","दोस्त को फ़ोन","कॉल समाप्त करें","रद्द करें","श्रेणी","प्रश्न","पहली टीम","दूसरी टीम","इन दोनों में से एक सही उत्तर है","कॉल के दौरान प्रश्न की घड़ी रुकी रहती है"];
  P3.bn = ["অনলাইন","অনলাইনে খেলুন","দূর থেকে খেলা","রুম তৈরি করুন","রুমে যোগ দিন","রুম তৈরি","যোগ দিন","রুম কোড","লিংক কপি করুন","খেলা শুরু করুন","সারপ্রাইজ","ফাঁদ","গর্ত","বোমা","গুপ্তধন","ডাবল ×২","চারগুণ ×৪","পালা জমাট","দুটি উত্তর","বন্ধুকে ফোন","পালা চুরি","বন্ধুকে ফোন","কল শেষ করুন","বাতিল","বিভাগ","প্রশ্ন","প্রথম দল","দ্বিতীয় দল","এই দুটির একটি সঠিক উত্তর","কলের সময় প্রশ্নের ঘড়ি থেমে থাকে"];
  P3.ta = ["ஆன்லைன்","ஆன்லைனில் விளையாடு","தொலைவிலிருந்து விளையாட்டு","அறையை உருவாக்கு","அறையில் இணை","அறை உருவாக்கு","இணை","அறைக் குறியீடு","இணைப்பை நகலெடு","விளையாடத் தொடங்கு","அதிர்ச்சிகள்","பொறி","குழி","குண்டு","புதையல்","இரட்டை ×2","நான்கு மடங்கு ×4","முறையை உறைய வை","இரண்டு பதில்கள்","நண்பரை அழை","முறையைத் திருடு","நண்பரை அழை","அழைப்பை முடி","ரத்து","பிரிவு","கேள்வி","முதல் அணி","இரண்டாம் அணி","இவ்விரண்டில் ஒன்று சரியான பதில்","அழைப்பின் போது கடிகாரம் நிறுத்தப்படும்"];
  P3.id = ["Daring","Main daring","Main jarak jauh","Buat ruang","Gabung ke ruang","Buat ruang","Gabung","Kode ruang","Salin tautan","Mulai bermain","Kejutan","Jebakan","Lubang","Bom","Harta karun","Ganda ×2","Empat kali ×4","Bekukan giliran","Dua jawaban","Telepon teman","Curi giliran","Telepon teman","Akhiri panggilan","Batal","kategori","pertanyaan","Tim pertama","Tim kedua","Salah satu dari dua ini jawabannya","Pewaktu soal dijeda selama panggilan"];
  P3.ms = ["Dalam talian","Main dalam talian","Main jarak jauh","Cipta bilik","Sertai bilik","Cipta bilik","Sertai","Kod bilik","Salin pautan","Mula bermain","Kejutan","Perangkap","Lubang","Bom","Harta karun","Ganda ×2","Empat kali ×4","Bekukan giliran","Dua jawapan","Telefon rakan","Curi giliran","Telefon rakan","Tamatkan panggilan","Batal","kategori","soalan","Pasukan pertama","Pasukan kedua","Salah satu daripada dua ini betul","Pemasa soalan dijeda semasa panggilan"];
  P3.zh = ["在线","在线游玩","远程游玩","创建房间","加入房间","创建房间","加入","房间代码","复制链接","开始游戏","惊喜","陷阱","深坑","炸弹","宝藏","双倍 ×2","四倍 ×4","冻结回合","两个答案","求助朋友","抢夺回合","求助朋友","结束通话","取消","类别","题目","第一队","第二队","这两个之中有一个是正确答案","通话期间题目计时暂停"];
  P3.ja = ["オンライン","オンラインで遊ぶ","遠隔プレイ","ルームを作る","ルームに参加","ルーム作成","参加","ルームコード","リンクをコピー","プレイ開始","サプライズ","罠","落とし穴","爆弾","宝箱","ダブル ×2","クアッド ×4","手番を凍結","二択","友達に電話","手番を奪う","友達に電話","通話を終了","キャンセル","カテゴリー","問題","第1チーム","第2チーム","この2つのうち1つが正解です","通話中は問題タイマーが停止します"];
  P3.ko = ["온라인","온라인으로 플레이","원격 플레이","방 만들기","방 참가","방 만들기","참가","방 코드","링크 복사","플레이 시작","서프라이즈","함정","구덩이","폭탄","보물","더블 ×2","쿼드 ×4","차례 얼리기","두 개의 답","친구에게 전화","차례 훔치기","친구에게 전화","통화 종료","취소","카테고리","문제","첫 번째 팀","두 번째 팀","이 둘 중 하나가 정답입니다","통화 중에는 문제 타이머가 멈춥니다"];
  P3.th = ["ออนไลน์","เล่นออนไลน์","เล่นทางไกล","สร้างห้อง","เข้าร่วมห้อง","สร้างห้อง","เข้าร่วม","รหัสห้อง","คัดลอกลิงก์","เริ่มเล่น","เซอร์ไพรส์","กับดัก","หลุม","ระเบิด","สมบัติ","สองเท่า ×2","สี่เท่า ×4","แช่แข็งตา","สองคำตอบ","โทรหาเพื่อน","ขโมยตา","โทรหาเพื่อน","วางสาย","ยกเลิก","หมวดหมู่","คำถาม","ทีมแรก","ทีมที่สอง","หนึ่งในสองนี้คือคำตอบที่ถูก","ตัวจับเวลาหยุดชั่วคราวระหว่างโทร"];
  P3.vi = ["Trực tuyến","Chơi trực tuyến","Chơi từ xa","Tạo phòng","Vào phòng","Tạo phòng","Tham gia","Mã phòng","Sao chép liên kết","Bắt đầu chơi","Bất ngờ","Bẫy","Hố","Bom","Kho báu","Nhân đôi ×2","Nhân bốn ×4","Đóng băng lượt","Hai đáp án","Gọi cho người thân","Cướp lượt","Gọi cho người thân","Kết thúc cuộc gọi","Hủy","danh mục","câu hỏi","Đội thứ nhất","Đội thứ hai","Một trong hai đáp án này là đúng","Đồng hồ câu hỏi tạm dừng khi gọi"];
  P3.tl = ["Online","Maglaro online","Malayuang laro","Gumawa ng silid","Sumali sa silid","Gumawa ng silid","Sumali","Code ng silid","Kopyahin ang link","Simulan ang laro","Mga sorpresa","Bitag","Hukay","Bomba","Kayamanan","Doble ×2","Apat na beses ×4","I-freeze ang turno","Dalawang sagot","Tawagan ang kaibigan","Nakawin ang turno","Tawagan ang kaibigan","Tapusin ang tawag","Kanselahin","kategorya","tanong","Unang koponan","Pangalawang koponan","Isa sa dalawang ito ang tamang sagot","Naka-pause ang timer habang tumatawag"];
  P3.sw = ["Mtandaoni","Cheza mtandaoni","Kucheza kwa mbali","Fungua chumba","Jiunge na chumba","Fungua chumba","Jiunge","Msimbo wa chumba","Nakili kiungo","Anza kucheza","Mshangao","Mtego","Shimo","Bomu","Hazina","Mara mbili ×2","Mara nne ×4","Gandisha zamu","Majibu mawili","Mpigie rafiki","Iba zamu","Mpigie rafiki","Maliza simu","Ghairi","kategoria","swali","Timu ya kwanza","Timu ya pili","Mojawapo ya haya mawili ni jibu sahihi","Saa ya swali imesimama wakati wa simu"];
  P3.ha = ["Kan layi","Yi wasa kan layi","Wasa mai nisa","Ƙirƙiri ɗaki","Shiga ɗaki","Ƙirƙiri ɗaki","Shiga","Lambar ɗaki","Kwafi hanyar haɗi","Fara wasa","Abubuwan mamaki","Tarko","Rami","Bam","Taska","Ninki ×2","Ninki huɗu ×4","Daskare lokaci","Amsoshi biyu","Kira aboki","Sace lokaci","Kira aboki","Kammala kira","Soke","rukuni","tambaya","Ƙungiya ta farko","Ƙungiya ta biyu","Ɗaya daga cikin waɗannan biyun daidai ne","Agogon tambaya yana tsayawa lokacin kira"];
  P3.so = ["Onlayn","Ciyaar onlayn","Ciyaar fog","Samee qol","Ku biir qol","Samee qol","Ku biir","Koodhka qolka","Nuqul xiriirka","Bilow ciyaarta","Yaabab","Dabin","God","Bam","Kheyraad","Labanlaab ×2","Afarlaab ×4","Barafee wareegga","Laba jawaabood","Wac saaxiib","Xado wareegga","Wac saaxiib","Jooji wicitaanka","Jooji","qayb","su'aal","Kooxda koowaad","Kooxda labaad","Mid ka mid ah labadan waa jawaabta saxda ah","Saacadda su'aashu way joogsanaysaa inta wicitaanka socdo"];
  P3.am = ["በመስመር ላይ","በመስመር ላይ ተጫወት","የርቀት ጨዋታ","ክፍል ፍጠር","ክፍል ተቀላቀል","ክፍል ፍጠር","ተቀላቀል","የክፍል ኮድ","አገናኝ ቅዳ","መጫወት ጀምር","ድንገተኛዎች","ወጥመድ","ጉድጓድ","ቦምብ","ሀብት","እጥፍ ×2","አራት እጥፍ ×4","ተራ አቀዝቅዝ","ሁለት መልሶች","ለጓደኛ ደውል","ተራውን ስረቅ","ለጓደኛ ደውል","ጥሪውን ጨርስ","ሰርዝ","ምድብ","ጥያቄ","የመጀመሪያው ቡድን","ሁለተኛው ቡድን","ከእነዚህ ሁለት አንዱ ትክክለኛው መልስ ነው","በጥሪ ጊዜ የጥያቄው ሰዓት ቆሟል"];

  /* ---------- الدفعة الرابعة — متجر المساعدات ---------- */
  var K4 = ["متجر المساعدات", "اشترِ بنقاطك"];
  var P4 = {
    en: ["Lifelines shop", "Buy with your points"],
    fr: ["Boutique des aides", "Achetez avec vos points"],
    es: ["Tienda de ayudas", "Compra con tus puntos"],
    pt: ["Loja de ajudas", "Compre com os seus pontos"],
    de: ["Joker-Shop", "Kaufe mit deinen Punkten"],
    it: ["Negozio degli aiuti", "Acquista con i tuoi punti"],
    nl: ["Hulplijnenwinkel", "Koop met je punten"],
    sv: ["Livlinebutik", "Köp med dina poäng"],
    pl: ["Sklep z kołami ratunkowymi", "Kup za swoje punkty"],
    cs: ["Obchod s nápovědami", "Kup za své body"],
    ro: ["Magazin de ajutoare", "Cumpără cu punctele tale"],
    hu: ["Segítségbolt", "Vásárolj a pontjaidból"],
    el: ["Κατάστημα βοηθειών", "Αγόρασε με τους πόντους σου"],
    ru: ["Магазин подсказок", "Купите за свои очки"],
    uk: ["Магазин підказок", "Купіть за свої очки"],
    tr: ["Joker mağazası", "Puanlarınla satın al"],
    az: ["Kömək mağazası", "Xallarınla al"],
    fa: ["فروشگاه کمک‌ها", "با امتیازهایت بخر"],
    ku: ["Firoşgeha alîkariyan", "Bi xalên xwe bikire"],
    ur: ["مدد کی دکان", "اپنے پوائنٹس سے خریدیں"],
    ps: ["د مرستو پلورنځی", "په خپلو ټکو یې واخله"],
    he: ["חנות העזרים", "קנה עם הנקודות שלך"],
    hi: ["सहायता की दुकान", "अपने अंकों से खरीदें"],
    bn: ["সহায়তার দোকান", "আপনার পয়েন্ট দিয়ে কিনুন"],
    ta: ["உதவிக் கடை", "உங்கள் புள்ளிகளால் வாங்குங்கள்"],
    id: ["Toko bantuan", "Beli dengan poinmu"],
    ms: ["Kedai bantuan", "Beli dengan mata anda"],
    zh: ["求助商店", "用你的积分购买"],
    ja: ["ヘルプショップ", "ポイントで購入"],
    ko: ["찬스 상점", "포인트로 구매하기"],
    th: ["ร้านตัวช่วย", "ซื้อด้วยคะแนนของคุณ"],
    vi: ["Cửa hàng trợ giúp", "Mua bằng điểm của bạn"],
    tl: ["Tindahan ng tulong", "Bumili gamit ang iyong puntos"],
    sw: ["Duka la misaada", "Nunua kwa pointi zako"],
    ha: ["Kantin taimako", "Saya da makin ka"],
    so: ["Dukaanka caawimaadda", "Ku iibso dhibcahaaga"],
    am: ["የእገዛ መደብር", "በነጥቦችህ ግዛ"]
  };

  /* ---------- أسماء مجموعات الفئات (شريط التنقّل وعناوين المجموعات) ---------- */
  var K5 = ["إسلاميات", "العالم", "طبيعة وحياة", "ثقافة وفنون", "ترفيه", "الخليج", "الكويت"];
  var P5 = {
    en: ["Islamic","World","Nature & Life","Culture & Arts","Entertainment","The Gulf","Kuwait"],
    fr: ["Islam","Monde","Nature et vie","Culture et arts","Divertissement","Le Golfe","Koweït"],
    es: ["Islam","Mundo","Naturaleza y vida","Cultura y artes","Entretenimiento","El Golfo","Kuwait"],
    pt: ["Islão","Mundo","Natureza e vida","Cultura e artes","Entretenimento","O Golfo","Kuwait"],
    de: ["Islam","Welt","Natur & Leben","Kultur & Kunst","Unterhaltung","Der Golf","Kuwait"],
    it: ["Islam","Mondo","Natura e vita","Cultura e arti","Intrattenimento","Il Golfo","Kuwait"],
    nl: ["Islam","Wereld","Natuur & leven","Cultuur & kunst","Entertainment","De Golf","Koeweit"],
    sv: ["Islam","Världen","Natur & liv","Kultur & konst","Underhållning","Gulfen","Kuwait"],
    pl: ["Islam","Świat","Natura i życie","Kultura i sztuka","Rozrywka","Zatoka","Kuwejt"],
    cs: ["Islám","Svět","Příroda a život","Kultura a umění","Zábava","Záliv","Kuvajt"],
    ro: ["Islam","Lumea","Natură și viață","Cultură și arte","Divertisment","Golful","Kuwait"],
    hu: ["Iszlám","Világ","Természet és élet","Kultúra és művészet","Szórakozás","Az Öböl","Kuvait"],
    el: ["Ισλάμ","Κόσμος","Φύση & ζωή","Πολιτισμός & τέχνες","Ψυχαγωγία","Ο Κόλπος","Κουβέιτ"],
    ru: ["Ислам","Мир","Природа и жизнь","Культура и искусство","Развлечения","Залив","Кувейт"],
    uk: ["Іслам","Світ","Природа й життя","Культура й мистецтво","Розваги","Затока","Кувейт"],
    tr: ["İslam","Dünya","Doğa ve yaşam","Kültür ve sanat","Eğlence","Körfez","Kuveyt"],
    az: ["İslam","Dünya","Təbiət və həyat","Mədəniyyət və incəsənət","Əyləncə","Körfəz","Küveyt"],
    fa: ["اسلامی","جهان","طبیعت و زندگی","فرهنگ و هنر","سرگرمی","خلیج","کویت"],
    ku: ["Îslamî","Cîhan","Xweza û jiyan","Çand û huner","Şahî","Kendav","Kuweyt"],
    ur: ["اسلامی","دنیا","فطرت اور زندگی","ثقافت و فنون","تفریح","خلیج","کویت"],
    ps: ["اسلامي","نړۍ","طبیعت او ژوند","کلتور او هنر","تفریح","خلیج","کویت"],
    he: ["איסלאם","העולם","טבע וחיים","תרבות ואמנות","בידור","המפרץ","כווית"],
    hi: ["इस्लामी","दुनिया","प्रकृति और जीवन","संस्कृति और कला","मनोरंजन","खाड़ी","कुवैत"],
    bn: ["ইসলামিক","বিশ্ব","প্রকৃতি ও জীবন","সংস্কৃতি ও শিল্প","বিনোদন","উপসাগর","কুয়েত"],
    ta: ["இஸ்லாமிய","உலகம்","இயற்கை & வாழ்க்கை","கலை & பண்பாடு","பொழுதுபோக்கு","வளைகுடா","குவைத்"],
    id: ["Islami","Dunia","Alam & kehidupan","Budaya & seni","Hiburan","Teluk","Kuwait"],
    ms: ["Islami","Dunia","Alam & kehidupan","Budaya & seni","Hiburan","Teluk","Kuwait"],
    zh: ["伊斯兰","世界","自然与生活","文化与艺术","娱乐","海湾","科威特"],
    ja: ["イスラム","世界","自然と生命","文化と芸術","エンタメ","湾岸","クウェート"],
    ko: ["이슬람","세계","자연과 생명","문화와 예술","엔터테인먼트","걸프","쿠웨이트"],
    th: ["อิสลาม","โลก","ธรรมชาติและชีวิต","วัฒนธรรมและศิลปะ","บันเทิง","อ่าวอาหรับ","คูเวต"],
    vi: ["Hồi giáo","Thế giới","Thiên nhiên & đời sống","Văn hóa & nghệ thuật","Giải trí","Vùng Vịnh","Kuwait"],
    tl: ["Islamiko","Mundo","Kalikasan at buhay","Kultura at sining","Aliwan","Ang Golpo","Kuwait"],
    sw: ["Kiislamu","Dunia","Asili na maisha","Utamaduni na sanaa","Burudani","Ghuba","Kuwait"],
    ha: ["Musulunci","Duniya","Yanayi da rayuwa","Al'ada da fasaha","Nishaɗi","Tekun Gulf","Kuwait"],
    so: ["Islaami","Adduunka","Dabeecadda iyo nolosha","Dhaqanka iyo farshaxanka","Madadaalo","Gacanka","Kuwayt"],
    am: ["እስላማዊ","ዓለም","ተፈጥሮ እና ሕይወት","ባህልና ጥበብ","መዝናኛ","ባሕረ ሰላጤ","ኩዌት"]
  };

  window.I18N_KEYS5 = K5;
  window.I18N_PACKED5 = P5;

  /* ---------- زر المكافأة بجانب البطاقتين الصفراء والحمراء ---------- */
  var K6 = ["زيادة 50"];
  var P6 = {
    en: ["Bonus +50"], fr: ["Bonus +50"], es: ["Bono +50"], pt: ["Bónus +50"],
    de: ["Bonus +50"], it: ["Bonus +50"], nl: ["Bonus +50"], sv: ["Bonus +50"],
    pl: ["Premia +50"], cs: ["Bonus +50"], ro: ["Bonus +50"], hu: ["Bónusz +50"],
    el: ["Μπόνους +50"], ru: ["Бонус +50"], uk: ["Бонус +50"], tr: ["Bonus +50"],
    az: ["Bonus +50"], fa: ["پاداش +50"], ku: ["Bonus +50"], ur: ["بونس +50"],
    ps: ["انعام +50"], he: ["בונוס +50"], hi: ["बोनस +50"], bn: ["বোনাস +50"],
    ta: ["போனஸ் +50"], id: ["Bonus +50"], ms: ["Bonus +50"], zh: ["奖励 +50"],
    ja: ["ボーナス +50"], ko: ["보너스 +50"], th: ["โบนัส +50"], vi: ["Thưởng +50"],
    tl: ["Bonus +50"], sw: ["Bonasi +50"], ha: ["Kyauta +50"], so: ["Abaalmarin +50"],
    am: ["ጉርሻ +50"]
  };

  window.I18N_KEYS6 = K6;
  window.I18N_PACKED6 = P6;

  /* ---------- أسماء مساعدات المتجر ---------- */
  var K7 = ["اسرق النقاط", "جمّد دور الخصم", "امنع الخصم", "البحث", "خفّض نقاط الخصم"];
  var P7 = {
    en: ["Steal points","Freeze opponent","Block opponent","Search","Cut opponent's points"],
    fr: ["Voler des points","Geler l'adversaire","Bloquer l'adversaire","Recherche","Réduire ses points"],
    es: ["Robar puntos","Congelar al rival","Bloquear al rival","Búsqueda","Restar puntos al rival"],
    pt: ["Roubar pontos","Congelar o rival","Bloquear o rival","Pesquisa","Tirar pontos ao rival"],
    de: ["Punkte stehlen","Gegner einfrieren","Gegner sperren","Suche","Gegnerpunkte kürzen"],
    it: ["Ruba punti","Congela l'avversario","Blocca l'avversario","Ricerca","Togli punti all'avversario"],
    nl: ["Punten stelen","Tegenstander bevriezen","Tegenstander blokkeren","Zoeken","Punten tegenstander verlagen"],
    sv: ["Stjäl poäng","Frys motståndaren","Blockera motståndaren","Sök","Sänk motståndarens poäng"],
    pl: ["Kradnij punkty","Zamroź rywala","Zablokuj rywala","Szukaj","Obniż punkty rywala"],
    cs: ["Ukradni body","Zmraz soupeře","Zablokuj soupeře","Hledání","Sniž body soupeře"],
    ro: ["Fură puncte","Îngheață adversarul","Blochează adversarul","Căutare","Scade punctele adversarului"],
    hu: ["Pontlopás","Ellenfél befagyasztása","Ellenfél letiltása","Keresés","Ellenfél pontjainak csökkentése"],
    el: ["Κλέψε πόντους","Πάγωσε τον αντίπαλο","Μπλόκαρε τον αντίπαλο","Αναζήτηση","Μείωσε τους πόντους του αντιπάλου"],
    ru: ["Украсть очки","Заморозить соперника","Заблокировать соперника","Поиск","Снизить очки соперника"],
    uk: ["Вкрасти очки","Заморозити суперника","Заблокувати суперника","Пошук","Зменшити очки суперника"],
    tr: ["Puan çal","Rakibi dondur","Rakibi engelle","Arama","Rakibin puanını düşür"],
    az: ["Xal oğurla","Rəqibi dondur","Rəqibi blokla","Axtarış","Rəqibin xalını azalt"],
    fa: ["دزدیدن امتیاز","فریز کردن حریف","مسدود کردن حریف","جستجو","کاهش امتیاز حریف"],
    ku: ["Xalan bidize","Hevrikê bicemidîne","Hevrikê asteng bike","Lêgerîn","Xalên hevrikê kêm bike"],
    ur: ["پوائنٹس چرائیں","حریف کو منجمد کریں","حریف کو روکیں","تلاش","حریف کے پوائنٹس کم کریں"],
    ps: ["امتیاز غلا کړه","سیال کنګل کړه","سیال بند کړه","لټون","د سیال امتیاز کم کړه"],
    he: ["גנוב נקודות","הקפא את היריב","חסום את היריב","חיפוש","הורד ליריב נקודות"],
    hi: ["अंक चुराएँ","विरोधी को फ़्रीज़ करें","विरोधी को रोकें","खोज","विरोधी के अंक घटाएँ"],
    bn: ["পয়েন্ট চুরি","প্রতিপক্ষকে জমাট","প্রতিপক্ষকে আটকাও","অনুসন্ধান","প্রতিপক্ষের পয়েন্ট কমাও"],
    ta: ["புள்ளிகளைத் திருடு","எதிரணியை உறைய வை","எதிரணியைத் தடு","தேடல்","எதிரணியின் புள்ளிகளைக் குறை"],
    id: ["Curi poin","Bekukan lawan","Blokir lawan","Pencarian","Kurangi poin lawan"],
    ms: ["Curi mata","Bekukan lawan","Sekat lawan","Carian","Kurangkan mata lawan"],
    zh: ["偷取分数","冻结对手","阻止对手","搜索","扣除对手分数"],
    ja: ["ポイントを奪う","相手を凍結","相手をブロック","検索","相手のポイントを減らす"],
    ko: ["점수 훔치기","상대 얼리기","상대 차단","검색","상대 점수 깎기"],
    th: ["ขโมยคะแนน","แช่แข็งคู่แข่ง","บล็อกคู่แข่ง","ค้นหา","ลดคะแนนคู่แข่ง"],
    vi: ["Cướp điểm","Đóng băng đối thủ","Chặn đối thủ","Tìm kiếm","Trừ điểm đối thủ"],
    tl: ["Nakawin ang puntos","I-freeze ang kalaban","Harangin ang kalaban","Paghahanap","Bawasan ang puntos ng kalaban"],
    sw: ["Iba pointi","Gandisha mpinzani","Zuia mpinzani","Tafuta","Punguza pointi za mpinzani"],
    ha: ["Sace maki","Daskare abokin hamayya","Toshe abokin hamayya","Bincike","Rage makin abokin hamayya"],
    so: ["Xado dhibcaha","Barafee ka soo horjeeda","Xir ka soo horjeeda","Raadin","Dhim dhibcaha ka soo horjeeda"],
    am: ["ነጥብ ስረቅ","ተፎካካሪውን አቀዝቅዝ","ተፎካካሪውን አግድ","ፍለጋ","የተፎካካሪውን ነጥብ ቀንስ"]
  };

  window.I18N_KEYS7 = K7;
  window.I18N_PACKED7 = P7;

  /* ---------- زر وقت الفريق الآخر في شاشة السؤال ---------- */
  /* الرقم والوحدة «ثانية» خارج المفتاح — الرقم من الإعدادات، و«ثانية» مترجمة أصلاً */
  var K8 = ["للفريق الآخر"];
  var P8 = {
    en: ["To the other team"], fr: ["À l'autre équipe"], es: ["Al otro equipo"],
    pt: ["Para a outra equipa"], de: ["An das andere Team"], it: ["All'altra squadra"],
    nl: ["Naar het andere team"], sv: ["Till andra laget"], pl: ["Dla drugiej drużyny"],
    cs: ["Druhému týmu"], ro: ["Celeilalte echipe"], hu: ["A másik csapatnak"],
    el: ["Στην άλλη ομάδα"], ru: ["Другой команде"], uk: ["Іншій команді"],
    tr: ["Diğer takıma"], az: ["Digər komandaya"], fa: ["به تیم دیگر"],
    ku: ["Ji tîma din re"], ur: ["دوسری ٹیم کو"], ps: ["بلې ډلې ته"],
    he: ["לקבוצה השנייה"], hi: ["दूसरी टीम को"], bn: ["অন্য দলকে"],
    ta: ["மற்ற அணிக்கு"], id: ["Ke tim lain"], ms: ["Kepada pasukan lain"],
    zh: ["交给另一队"], ja: ["相手チームへ"], ko: ["상대 팀에게"],
    th: ["ให้อีกทีม"], vi: ["Cho đội kia"], tl: ["Sa kabilang koponan"],
    sw: ["Kwa timu nyingine"], ha: ["Ga ɗayan ƙungiya"],
    so: ["Kooxda kale"], am: ["ለሌላው ቡድን"]
  };

  window.I18N_KEYS8 = K8;
  window.I18N_PACKED8 = P8;

  /* ---------- عجلة السؤال الإضافي (wheel.js) وسؤالها في شاشة السؤال ----------
     القوالب {team} {n} {p} {m} {a} {b} يملؤها الكود بعد الترجمة */
  var K9 = [
    "أدر العجلة",
    "ابدأ السؤال",
    "تخطَّ السؤال الإضافي",
    "تعادل! سؤال فاصل من العجلة",
    "{team} بلغ {n} نقطة!",
    "سؤال من فئة خارج الجولة للفريقين — من يجب صحيحاً أولاً يأخذ النقاط",
    "سؤال إضافي من فئة خارج الجولة — العجلة تحدد المضاعف: دبل ×1 أو ×2 أو ×3",
    "{team} كسب {n} نقطة ({p} × {m})",
    "لم يجب أحد — ما زال التعادل، تدور العجلة من جديد",
    "لم يجب أحد على السؤال الإضافي",
    "{a} و {b}"
  ];
  var P9 = {
    en: ["Spin the wheel","Start the question","Skip the bonus question","Tie! A tiebreaker question from the wheel","{team} reached {n} points!","A question from a category outside the round for both teams — the first correct answer takes the points","A bonus question from a category outside the round — the wheel sets the multiplier: ×1, ×2 or ×3","{team} won {n} points ({p} × {m})","No one answered — still a tie, the wheel spins again","No one answered the bonus question","{a} & {b}"],
    fr: ["Tourner la roue","Commencer la question","Passer la question bonus","Égalité ! Question décisive de la roue","{team} a atteint {n} points !","Une question d'une catégorie hors de la partie pour les deux équipes — la première bonne réponse remporte les points","Question bonus d'une catégorie hors de la partie — la roue fixe le multiplicateur : ×1, ×2 ou ×3","{team} a gagné {n} points ({p} × {m})","Personne n'a répondu — toujours égalité, la roue tourne à nouveau","Personne n'a répondu à la question bonus","{a} et {b}"],
    es: ["Girar la ruleta","Empezar la pregunta","Saltar la pregunta extra","¡Empate! Pregunta de desempate de la ruleta","¡{team} alcanzó {n} puntos!","Una pregunta de una categoría fuera de la partida para ambos equipos: la primera respuesta correcta se lleva los puntos","Pregunta extra de una categoría fuera de la partida: la ruleta fija el multiplicador: ×1, ×2 o ×3","{team} ganó {n} puntos ({p} × {m})","Nadie respondió: sigue el empate, la ruleta gira de nuevo","Nadie respondió la pregunta extra","{a} y {b}"],
    pt: ["Girar a roda","Começar a pergunta","Saltar a pergunta bónus","Empate! Pergunta de desempate da roda","{team} chegou a {n} pontos!","Uma pergunta de uma categoria fora da partida para as duas equipas — a primeira resposta certa leva os pontos","Pergunta bónus de uma categoria fora da partida — a roda define o multiplicador: ×1, ×2 ou ×3","{team} ganhou {n} pontos ({p} × {m})","Ninguém respondeu — continua o empate, a roda gira de novo","Ninguém respondeu à pergunta bónus","{a} e {b}"],
    de: ["Rad drehen","Frage starten","Bonusfrage überspringen","Unentschieden! Entscheidungsfrage vom Rad","{team} hat {n} Punkte erreicht!","Eine Frage aus einer Kategorie außerhalb der Runde für beide Teams – die erste richtige Antwort holt die Punkte","Bonusfrage aus einer Kategorie außerhalb der Runde – das Rad bestimmt den Multiplikator: ×1, ×2 oder ×3","{team} gewinnt {n} Punkte ({p} × {m})","Niemand hat geantwortet – weiter unentschieden, das Rad dreht sich erneut","Niemand hat die Bonusfrage beantwortet","{a} und {b}"],
    it: ["Gira la ruota","Inizia la domanda","Salta la domanda bonus","Pareggio! Domanda di spareggio dalla ruota","{team} ha raggiunto {n} punti!","Una domanda da una categoria fuori dalla partita per entrambe le squadre: la prima risposta giusta prende i punti","Domanda bonus da una categoria fuori dalla partita: la ruota decide il moltiplicatore: ×1, ×2 o ×3","{team} ha vinto {n} punti ({p} × {m})","Nessuno ha risposto: ancora pareggio, la ruota gira di nuovo","Nessuno ha risposto alla domanda bonus","{a} e {b}"],
    nl: ["Draai aan het rad","Start de vraag","Bonusvraag overslaan","Gelijkspel! Beslissende vraag van het rad","{team} heeft {n} punten bereikt!","Een vraag uit een categorie buiten de ronde voor beide teams — het eerste goede antwoord krijgt de punten","Bonusvraag uit een categorie buiten de ronde — het rad bepaalt de vermenigvuldiger: ×1, ×2 of ×3","{team} wint {n} punten ({p} × {m})","Niemand antwoordde — nog steeds gelijk, het rad draait opnieuw","Niemand beantwoordde de bonusvraag","{a} en {b}"],
    sv: ["Snurra hjulet","Starta frågan","Hoppa över bonusfrågan","Oavgjort! Utslagsfråga från hjulet","{team} nådde {n} poäng!","En fråga från en kategori utanför omgången för båda lagen — första rätta svar tar poängen","Bonusfråga från en kategori utanför omgången — hjulet bestämmer multiplikatorn: ×1, ×2 eller ×3","{team} vann {n} poäng ({p} × {m})","Ingen svarade — fortfarande oavgjort, hjulet snurrar igen","Ingen svarade på bonusfrågan","{a} och {b}"],
    pl: ["Zakręć kołem","Rozpocznij pytanie","Pomiń pytanie bonusowe","Remis! Pytanie rozstrzygające z koła","{team} osiągnęła {n} punktów!","Pytanie z kategorii spoza rundy dla obu drużyn — pierwsza poprawna odpowiedź zdobywa punkty","Pytanie bonusowe z kategorii spoza rundy — koło ustala mnożnik: ×1, ×2 lub ×3","{team} zdobywa {n} punktów ({p} × {m})","Nikt nie odpowiedział — nadal remis, koło kręci się ponownie","Nikt nie odpowiedział na pytanie bonusowe","{a} i {b}"],
    cs: ["Zatoč kolem","Spustit otázku","Přeskočit bonusovou otázku","Remíza! Rozhodující otázka z kola","{team} dosáhl {n} bodů!","Otázka z kategorie mimo kolo pro oba týmy — první správná odpověď bere body","Bonusová otázka z kategorie mimo kolo — kolo určí násobitel: ×1, ×2 nebo ×3","{team} získal {n} bodů ({p} × {m})","Nikdo neodpověděl — stále remíza, kolo se točí znovu","Nikdo neodpověděl na bonusovou otázku","{a} a {b}"],
    ro: ["Învârte roata","Începe întrebarea","Sari peste întrebarea bonus","Egalitate! Întrebare de departajare de la roată","{team} a ajuns la {n} puncte!","O întrebare dintr-o categorie din afara rundei pentru ambele echipe — primul răspuns corect ia punctele","Întrebare bonus dintr-o categorie din afara rundei — roata stabilește multiplicatorul: ×1, ×2 sau ×3","{team} a câștigat {n} puncte ({p} × {m})","Nimeni nu a răspuns — tot egalitate, roata se învârte din nou","Nimeni nu a răspuns la întrebarea bonus","{a} și {b}"],
    hu: ["Pörgesd meg a kereket","Kérdés indítása","Bónuszkérdés kihagyása","Döntetlen! Döntő kérdés a keréktől","{team} elérte a(z) {n} pontot!","Kérdés egy körön kívüli kategóriából mindkét csapatnak — az első helyes válasz viszi a pontokat","Bónuszkérdés egy körön kívüli kategóriából — a kerék dönti el a szorzót: ×1, ×2 vagy ×3","{team} {n} pontot nyert ({p} × {m})","Senki sem válaszolt — továbbra is döntetlen, a kerék újra pörög","Senki sem válaszolt a bónuszkérdésre","{a} és {b}"],
    el: ["Γύρνα τον τροχό","Ξεκίνα την ερώτηση","Παράλειψη ερώτησης μπόνους","Ισοπαλία! Ερώτηση ισοβαθμίας από τον τροχό","Η ομάδα {team} έφτασε τους {n} πόντους!","Ερώτηση από κατηγορία εκτός γύρου και για τις δύο ομάδες — η πρώτη σωστή απάντηση παίρνει τους πόντους","Ερώτηση μπόνους από κατηγορία εκτός γύρου — ο τροχός ορίζει τον πολλαπλασιαστή: ×1, ×2 ή ×3","Η ομάδα {team} κέρδισε {n} πόντους ({p} × {m})","Κανείς δεν απάντησε — ακόμα ισοπαλία, ο τροχός γυρίζει ξανά","Κανείς δεν απάντησε στην ερώτηση μπόνους","{a} και {b}"],
    ru: ["Крутить колесо","Начать вопрос","Пропустить бонусный вопрос","Ничья! Решающий вопрос с колеса","{team} набрала {n} очков!","Вопрос из категории вне раунда для обеих команд — первый правильный ответ забирает очки","Бонусный вопрос из категории вне раунда — колесо определяет множитель: ×1, ×2 или ×3","{team} получает {n} очков ({p} × {m})","Никто не ответил — снова ничья, колесо крутится ещё раз","Никто не ответил на бонусный вопрос","{a} и {b}"],
    uk: ["Крутити колесо","Почати питання","Пропустити бонусне питання","Нічия! Вирішальне питання з колеса","{team} набрала {n} очок!","Питання з категорії поза раундом для обох команд — перша правильна відповідь забирає очки","Бонусне питання з категорії поза раундом — колесо визначає множник: ×1, ×2 або ×3","{team} отримує {n} очок ({p} × {m})","Ніхто не відповів — знову нічия, колесо крутиться ще раз","Ніхто не відповів на бонусне питання","{a} і {b}"],
    tr: ["Çarkı çevir","Soruyu başlat","Bonus soruyu atla","Beraberlik! Çarktan eşitlik bozan soru","{team} {n} puana ulaştı!","Tur dışındaki bir kategoriden iki takıma soru — ilk doğru cevap puanları alır","Tur dışındaki bir kategoriden bonus soru — çark çarpanı belirler: ×1, ×2 veya ×3","{team} {n} puan kazandı ({p} × {m})","Kimse cevaplamadı — hâlâ berabere, çark yeniden dönüyor","Bonus soruyu kimse cevaplamadı","{a} ve {b}"],
    az: ["Çarxı fırlat","Suala başla","Bonus sualı ötür","Bərabərlik! Çarxdan həlledici sual","{team} {n} xala çatdı!","Hər iki komanda üçün raunddan kənar kateqoriyadan sual — ilk düzgün cavab xalları alır","Raunddan kənar kateqoriyadan bonus sual — çarx əmsalı təyin edir: ×1, ×2 və ya ×3","{team} {n} xal qazandı ({p} × {m})","Heç kim cavab vermədi — hələ bərabərlik, çarx yenidən fırlanır","Bonus suala heç kim cavab vermədi","{a} və {b}"],
    fa: ["چرخ را بچرخان","شروع سؤال","رد کردن سؤال اضافی","مساوی! سؤال تعیین‌کننده از چرخ","{team} به {n} امتیاز رسید!","سؤالی از دسته‌ای خارج از دور برای هر دو تیم — اولین پاسخ درست امتیاز را می‌برد","سؤال اضافی از دسته‌ای خارج از دور — چرخ ضریب را تعیین می‌کند: ×1، ×2 یا ×3","{team} {n} امتیاز گرفت ({p} × {m})","کسی پاسخ نداد — هنوز مساوی است، چرخ دوباره می‌چرخد","کسی به سؤال اضافی پاسخ نداد","{a} و {b}"],
    ku: ["Çerxê bizivirîne","Pirsê dest pê bike","Pirsa bonusê derbas bike","Wekhevî! Pirsa biryardar ji çerxê","{team} gihîşt {n} xalan!","Pirsek ji kategoriyek derveyî gerê ji bo her du tîman — bersiva rast a yekem xalan distîne","Pirsa bonusê ji kategoriyek derveyî gerê — çerx pirjimarê diyar dike: ×1, ×2 an ×3","{team} {n} xal qezenc kir ({p} × {m})","Kesî bersiv neda — hîn wekhev e, çerx dîsa dizivire","Kesî bersiva pirsa bonusê neda","{a} û {b}"],
    ur: ["پہیہ گھمائیں","سوال شروع کریں","اضافی سوال چھوڑیں","برابری! پہیے سے فیصلہ کن سوال","{team} نے {n} پوائنٹس حاصل کر لیے!","دونوں ٹیموں کے لیے راؤنڈ سے باہر کی قسم کا سوال — پہلا درست جواب پوائنٹس لے جائے گا","راؤنڈ سے باہر کی قسم سے اضافی سوال — پہیہ ضرب طے کرتا ہے: ×1، ×2 یا ×3","{team} نے {n} پوائنٹس جیتے ({p} × {m})","کسی نے جواب نہیں دیا — ابھی بھی برابری، پہیہ دوبارہ گھومے گا","کسی نے اضافی سوال کا جواب نہیں دیا","{a} اور {b}"],
    ps: ["څرخ وګرځوه","پوښتنه پیل کړه","اضافي پوښتنه پرېږده","مساوي! له څرخ څخه پرېکنده پوښتنه","{team} {n} امتیازونو ته ورسېد!","د دواړو ډلو لپاره له لوبې بهر ډلې څخه پوښتنه — لومړی سم ځواب امتیاز وړي","له لوبې بهر ډلې څخه اضافي پوښتنه — څرخ ضرب ټاکي: ×1، ×2 یا ×3","{team} {n} امتیازه وګټل ({p} × {m})","هیچا ځواب ورنکړ — لا هم مساوي، څرخ بیا ګرځي","هیچا اضافي پوښتنې ته ځواب ورنکړ","{a} او {b}"],
    he: ["סובב את הגלגל","התחל את השאלה","דלג על שאלת הבונוס","תיקו! שאלת הכרעה מהגלגל","{team} הגיעה ל-{n} נקודות!","שאלה מקטגוריה מחוץ לסבב לשתי הקבוצות — התשובה הנכונה הראשונה לוקחת את הנקודות","שאלת בונוס מקטגוריה מחוץ לסבב — הגלגל קובע את המכפיל: ×1, ×2 או ×3","{team} זכתה ב-{n} נקודות ({p} × {m})","אף אחד לא ענה — עדיין תיקו, הגלגל מסתובב שוב","אף אחד לא ענה על שאלת הבונוס","{a} ו{b}"],
    hi: ["पहिया घुमाएँ","प्रश्न शुरू करें","बोनस प्रश्न छोड़ें","बराबरी! पहिये से टाईब्रेकर प्रश्न","{team} {n} अंकों तक पहुँची!","दोनों टीमों के लिए राउंड से बाहर की श्रेणी का प्रश्न — पहला सही उत्तर अंक ले जाएगा","राउंड से बाहर की श्रेणी से बोनस प्रश्न — पहिया गुणक तय करता है: ×1, ×2 या ×3","{team} ने {n} अंक जीते ({p} × {m})","किसी ने उत्तर नहीं दिया — अब भी बराबरी, पहिया फिर घूमेगा","बोनस प्रश्न का किसी ने उत्तर नहीं दिया","{a} और {b}"],
    bn: ["চাকা ঘোরাও","প্রশ্ন শুরু করো","বোনাস প্রশ্ন বাদ দাও","ড্র! চাকা থেকে টাইব্রেকার প্রশ্ন","{team} {n} পয়েন্টে পৌঁছেছে!","দুই দলের জন্য রাউন্ডের বাইরের বিভাগ থেকে প্রশ্ন — প্রথম সঠিক উত্তর পয়েন্ট পাবে","রাউন্ডের বাইরের বিভাগ থেকে বোনাস প্রশ্ন — চাকা গুণক ঠিক করে: ×1, ×2 বা ×3","{team} {n} পয়েন্ট জিতেছে ({p} × {m})","কেউ উত্তর দেয়নি — এখনও ড্র, চাকা আবার ঘুরবে","বোনাস প্রশ্নের কেউ উত্তর দেয়নি","{a} ও {b}"],
    ta: ["சக்கரத்தைச் சுழற்று","கேள்வியைத் தொடங்கு","போனஸ் கேள்வியைத் தவிர்","சமநிலை! சக்கரத்திலிருந்து தீர்மானக் கேள்வி","{team} {n} புள்ளிகளை எட்டியது!","இரு அணிகளுக்கும் சுற்றுக்கு வெளியே உள்ள பிரிவிலிருந்து கேள்வி — முதல் சரியான பதில் புள்ளிகளைப் பெறும்","சுற்றுக்கு வெளியே உள்ள பிரிவிலிருந்து போனஸ் கேள்வி — பெருக்கியைச் சக்கரம் தீர்மானிக்கும்: ×1, ×2 அல்லது ×3","{team} {n} புள்ளிகள் வென்றது ({p} × {m})","யாரும் பதிலளிக்கவில்லை — இன்னும் சமநிலை, சக்கரம் மீண்டும் சுழலும்","போனஸ் கேள்விக்கு யாரும் பதிலளிக்கவில்லை","{a} மற்றும் {b}"],
    id: ["Putar roda","Mulai pertanyaan","Lewati pertanyaan bonus","Seri! Pertanyaan penentu dari roda","{team} mencapai {n} poin!","Pertanyaan dari kategori di luar ronde untuk kedua tim — jawaban benar pertama mendapat poin","Pertanyaan bonus dari kategori di luar ronde — roda menentukan pengali: ×1, ×2 atau ×3","{team} mendapat {n} poin ({p} × {m})","Tidak ada yang menjawab — masih seri, roda berputar lagi","Tidak ada yang menjawab pertanyaan bonus","{a} & {b}"],
    ms: ["Putar roda","Mula soalan","Langkau soalan bonus","Seri! Soalan penentu daripada roda","{team} mencapai {n} mata!","Soalan daripada kategori di luar pusingan untuk kedua-dua pasukan — jawapan betul pertama mendapat mata","Soalan bonus daripada kategori di luar pusingan — roda menentukan pendarab: ×1, ×2 atau ×3","{team} memenangi {n} mata ({p} × {m})","Tiada siapa menjawab — masih seri, roda berputar semula","Tiada siapa menjawab soalan bonus","{a} & {b}"],
    zh: ["转动转盘","开始答题","跳过额外题","平局！转盘决胜题","{team} 达到 {n} 分！","来自本轮以外类别的题目，两队共答——第一个答对者得分","来自本轮以外类别的额外题——转盘决定倍数：×1、×2 或 ×3","{team} 获得 {n} 分（{p} × {m}）","无人答对——仍是平局，转盘再次转动","无人回答额外题","{a} 和 {b}"],
    ja: ["ルーレットを回す","問題を始める","ボーナス問題をスキップ","同点！ルーレットの決勝問題","{team}が{n}点に到達！","このラウンド以外のカテゴリーから両チームへの問題——最初に正解したチームが得点","このラウンド以外のカテゴリーからのボーナス問題——ルーレットが倍率を決定：×1、×2、×3","{team}が{n}点を獲得（{p} × {m}）","誰も答えられず——まだ同点、ルーレットをもう一度","ボーナス問題に誰も答えませんでした","{a}と{b}"],
    ko: ["룰렛 돌리기","문제 시작","보너스 문제 건너뛰기","동점! 룰렛 결승 문제","{team} 팀이 {n}점에 도달!","이번 라운드 밖 카테고리의 문제를 두 팀 모두에게 — 먼저 맞힌 팀이 점수를 가져감","이번 라운드 밖 카테고리의 보너스 문제 — 룰렛이 배수를 정함: ×1, ×2, ×3","{team} 팀이 {n}점 획득 ({p} × {m})","아무도 답하지 않음 — 여전히 동점, 룰렛을 다시 돌림","보너스 문제에 아무도 답하지 않음","{a}와 {b}"],
    th: ["หมุนวงล้อ","เริ่มคำถาม","ข้ามคำถามโบนัส","เสมอ! คำถามตัดสินจากวงล้อ","{team} ทำได้ถึง {n} คะแนน!","คำถามจากหมวดนอกรอบสำหรับทั้งสองทีม — ตอบถูกคนแรกได้คะแนน","คำถามโบนัสจากหมวดนอกรอบ — วงล้อกำหนดตัวคูณ: ×1, ×2 หรือ ×3","{team} ได้ {n} คะแนน ({p} × {m})","ไม่มีใครตอบ — ยังเสมอ วงล้อหมุนอีกครั้ง","ไม่มีใครตอบคำถามโบนัส","{a} และ {b}"],
    vi: ["Quay vòng quay","Bắt đầu câu hỏi","Bỏ qua câu hỏi thưởng","Hòa! Câu hỏi phân định từ vòng quay","{team} đạt {n} điểm!","Câu hỏi từ danh mục ngoài vòng chơi cho cả hai đội — câu trả lời đúng đầu tiên giành điểm","Câu hỏi thưởng từ danh mục ngoài vòng chơi — vòng quay quyết định hệ số: ×1, ×2 hoặc ×3","{team} giành {n} điểm ({p} × {m})","Không ai trả lời — vẫn hòa, vòng quay quay lại","Không ai trả lời câu hỏi thưởng","{a} và {b}"],
    tl: ["Paikutin ang gulong","Simulan ang tanong","Laktawan ang bonus na tanong","Tabla! Tanong na pampasya mula sa gulong","Umabot ang {team} sa {n} puntos!","Tanong mula sa kategoryang wala sa round para sa dalawang koponan — ang unang tamang sagot ang kukuha ng puntos","Bonus na tanong mula sa kategoryang wala sa round — ang gulong ang magtatakda ng multiplier: ×1, ×2 o ×3","Nanalo ang {team} ng {n} puntos ({p} × {m})","Walang sumagot — tabla pa rin, iikot muli ang gulong","Walang sumagot sa bonus na tanong","{a} at {b}"],
    sw: ["Zungusha gurudumu","Anza swali","Ruka swali la ziada","Sare! Swali la mwisho kutoka gurudumu","{team} imefikia pointi {n}!","Swali kutoka kategoria nje ya mzunguko kwa timu zote mbili — jibu sahihi la kwanza linachukua pointi","Swali la ziada kutoka kategoria nje ya mzunguko — gurudumu linaamua kizidishi: ×1, ×2 au ×3","{team} imeshinda pointi {n} ({p} × {m})","Hakuna aliyejibu — bado sare, gurudumu linazunguka tena","Hakuna aliyejibu swali la ziada","{a} na {b}"],
    ha: ["Juya dabaran","Fara tambaya","Tsallake ƙarin tambaya","Kunnen doki! Tambayar yanke hukunci daga dabaran","{team} ta kai maki {n}!","Tambaya daga rukuni a wajen zagaye ga ƙungiyoyin biyu — amsa ta farko daidai ta ɗauki makin","Ƙarin tambaya daga rukuni a wajen zagaye — dabaran ta ƙayyade ninki: ×1, ×2 ko ×3","{team} ta ci maki {n} ({p} × {m})","Babu wanda ya amsa — har yanzu kunnen doki, dabaran za ta sake juyawa","Babu wanda ya amsa ƙarin tambayar","{a} da {b}"],
    so: ["Wareeji giraangiraha","Bilow su'aasha","Ka bood su'aasha dheeriga ah","Barbarro! Su'aal go'aamin ah oo giraangiraha ka timid","{team} waxay gaartay {n} dhibcood!","Su'aal ka timid qayb ka baxsan wareegga labada kooxood — jawaabta saxda ah ee ugu horreysa ayaa qaadata dhibcaha","Su'aal dheeri ah oo ka timid qayb ka baxsan wareegga — giraangiraha ayaa go'aamiya isku dhufashada: ×1, ×2 ama ×3","{team} waxay heshay {n} dhibcood ({p} × {m})","Cidna ma jawaabin — weli waa barbarro, giraangiraha ayaa mar kale wareegaya","Cidna ma ka jawaabin su'aasha dheeriga ah","{a} iyo {b}"],
    am: ["መንኮራኩሩን አሽከርክር","ጥያቄውን ጀምር","የጉርሻ ጥያቄውን ዝለል","እኩል! ከመንኮራኩሩ የመለያ ጥያቄ","{team} {n} ነጥብ ደረሰ!","ከዙሩ ውጭ ካለ ምድብ ለሁለቱም ቡድኖች የቀረበ ጥያቄ — መጀመሪያ በትክክል የመለሰ ነጥቡን ይወስዳል","ከዙሩ ውጭ ካለ ምድብ የጉርሻ ጥያቄ — መንኮራኩሩ ማባዣውን ይወስናል፦ ×1፣ ×2 ወይም ×3","{team} {n} ነጥብ አሸነፈ ({p} × {m})","ማንም አልመለሰም — አሁንም እኩል ነው፣ መንኮራኩሩ እንደገና ይሽከረከራል","ማንም የጉርሻ ጥያቄውን አልመለሰም","{a} እና {b}"]
  };

  window.I18N_KEYS9 = K9;
  window.I18N_PACKED9 = P9;

  window.I18N_KEYS4 = K4;
  window.I18N_PACKED4 = P4;

  window.I18N_KEYS = K;
  window.I18N_PACKED = P;
  window.I18N_KEYS2 = K2;
  window.I18N_PACKED2 = P2;
  window.I18N_KEYS3 = K3;
  window.I18N_PACKED3 = P3;
  if (window.I18N && window.I18N.loadPacked) {
    window.I18N.loadPacked(K, P);
    window.I18N.loadPacked(K2, P2);
    window.I18N.loadPacked(K3, P3);
    window.I18N.loadPacked(K4, P4);
    window.I18N.loadPacked(K5, P5);
    window.I18N.loadPacked(K6, P6);
    window.I18N.loadPacked(K7, P7);
    window.I18N.loadPacked(K8, P8);
    window.I18N.loadPacked(K9, P9);
  }
})();
