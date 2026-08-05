// Version history content, mirrors the app's in-app "What's new" release notes
// (src/data/releaseNotes.ts + whatsNew i18n keys in the canIbreathe app repo).
const CHANGELOG = {
  en: [
    { version: '1.5.0', items: [
      { emoji: '🌍', title: 'Worldwide coverage', body: 'Pollen data now reaches locations outside Europe too, powered by Google Pollen.' },
      { emoji: '🫁', title: '"Can I breathe today?"', body: 'A single verdict line, plus a rising/easing trend arrow, now sums up your day at a glance.' },
      { emoji: '🔎', title: 'Preview before you add', body: 'Search a city and preview its forecast before adding it, handy for checking somewhere you\'re about to travel to.' },
      { emoji: '📱', title: 'Home-screen widget', body: "Add canIbreathe to your home screen for today's verdict and top allergen at a glance, no need to open the app." },
      { emoji: '🔔', title: 'Fresher alerts', body: 'Daily notifications and the home-screen widget now stay in sync and refresh automatically in the background.' },
    ]},
    { version: '1.4.0', items: [
      { emoji: '📔', title: 'Allergy diary', body: 'Log your symptoms, severity, and notes each day, kept entirely on your device.' },
      { emoji: '📈', title: 'Spot your triggers', body: "The diary correlates your symptoms with pollen levels and can reveal allergens you aren't tracking yet." },
      { emoji: '💊', title: 'Log your medication', body: "Note which types of allergy medication you took, categories only, never names or doses, so your diary and PDF report show what's helping." },
      { emoji: '📄', title: 'Export a PDF report', body: 'Share a printable summary of your diary, in the language you choose, with your doctor.' },
      { emoji: '🎯', title: 'Clearer best-time heads-up', body: "The best-time-to-go-out highlight now takes its colour from the day's steadiest pollen level." },
    ]},
    { version: '1.3.0', items: [
      { emoji: '📅', title: 'New Plan tab', body: 'A new Plan tab brings your forward-looking tools together: the best time to go out each day and the full pollen season calendar, for every location.' },
      { emoji: '⏰', title: 'Best time to go out', body: "A new card pinpoints today's calmest window for your allergens, with an hour-by-hour chart and weather icons so you can time outings around the clearest air." },
      { emoji: '🏷️', title: 'Clearer calendar sources', body: 'The season calendar now labels each allergen with its data source (PIA or EAN) and fills in allergens a station doesn\'t report from regional data.' },
      { emoji: '💡', title: 'Why is it high?', body: 'See what\'s driving today\'s level, and a new Guide section explains why the same allergen can show different levels on the Today, forecast and calendar views.' },
      { emoji: '📍', title: 'Nearest station distance', body: 'Location details now show how far away the monitoring station is.' },
      { emoji: '🔔', title: 'Localized alert times & accessibility', body: 'Daily alert times now follow your language\'s clock format, plus screen-reader improvements throughout.' },
    ]},
    { version: '1.2.0', items: [
      { emoji: '🌤️', title: 'Conditions card', body: "A new collapsible card on the main screen shows today's weather and EU Air Quality Index side-by-side at a glance." },
      { emoji: '🍃', title: 'EU Air Quality Index', body: 'A 6-band colour-coded bar shows the current AQI, from Good to Extremely Poor, with a real-time dot marker.' },
      { emoji: '📊', title: 'Allergens sorted by severity', body: 'Your allergens now appear ordered by current level, highest first.' },
    ]},
    { version: '1.1.0', items: [
      { emoji: '📅', title: 'Pollen season calendar', body: 'Browse typical season windows and peak months for each allergen in the Guide.' },
      { emoji: '📤', title: 'Share forecast', body: "Share today's pollen forecast as an image or text." },
      { emoji: '📡', title: 'Offline support', body: 'The app now shows cached data with a timestamp when you lose connectivity, instead of an error.' },
      { emoji: '🌸', title: "What's new screen", body: 'A summary of new features now appears once after each update.' },
    ]},
    { version: '1.0.2', items: [
      { emoji: '🎨', title: 'Dark & light theme', body: 'Choose your preferred appearance, dark, light, or follow the system, in Settings.' },
      { emoji: '🌿', title: '2 new allergens', body: 'Beech and Palm added to the allergen list.' },
      { emoji: '📍', title: 'Smarter station matching', body: 'The app now automatically connects your location to the nearest PIA monitoring station.' },
    ]},
  ],

  ca: [
    { version: '1.5.0', items: [
      { emoji: '🌍', title: 'Cobertura mundial', body: 'Les dades de pol·len ara també arriben a ubicacions fora d\'Europa, gràcies a Google Pollen.' },
      { emoji: '🫁', title: 'Puc respirar avui?', body: 'Una única frase de veredicte, amb una fletxa de tendència a l\'alça o a la baixa, resumeix el teu dia d\'un cop d\'ull.' },
      { emoji: '🔎', title: 'Previsualitza abans d\'afegir', body: 'Cerca una ciutat i previsualitza\'n la previsió abans d\'afegir-la, útil per comprovar un lloc on estàs a punt de viatjar.' },
      { emoji: '📱', title: 'Widget a la pantalla d\'inici', body: 'Afegeix canIbreathe a la pantalla d\'inici per veure el veredicte d\'avui i el principal al·lergen d\'un cop d\'ull, sense obrir l\'app.' },
      { emoji: '🔔', title: 'Alertes més actualitzades', body: 'Les notificacions diàries i el widget de la pantalla d\'inici ara es mantenen sincronitzats i s\'actualitzen automàticament en segon pla.' },
    ]},
    { version: '1.4.0', items: [
      { emoji: '📔', title: "Diari d'al·lèrgies", body: 'Registra cada dia els teus símptomes, la gravetat i les notes, tot es guarda només al teu dispositiu.' },
      { emoji: '📈', title: 'Descobreix els teus desencadenants', body: 'El diari correlaciona els teus símptomes amb els nivells de pol·len i pot revelar al·lèrgens que encara no segueixes.' },
      { emoji: '💊', title: 'Registra la medicació', body: "Anota quins tipus de medicació per a l'al·lèrgia has pres, només categories, mai noms ni dosis, perquè el diari i l'informe PDF mostrin què t'ajuda." },
      { emoji: '📄', title: 'Exporta un informe PDF', body: "Comparteix amb el teu metge un resum imprimible del diari, en l'idioma que triïs." },
      { emoji: '🎯', title: 'Millor hora per sortir més clara', body: 'El destacat de la millor hora per sortir ara pren el color del nivell de pol·len més estable del dia.' },
    ]},
    { version: '1.3.0', items: [
      { emoji: '📅', title: 'Nova pestanya Planificar', body: "Una nova pestanya Planificar reuneix les teves eines de futur: la millor hora per sortir cada dia i el calendari complet de la temporada de pol·len, per a cada ubicació." },
      { emoji: '⏰', title: 'Millor moment per sortir', body: "Una targeta nova assenyala l'estona més tranquil·la del dia per als teus al·lèrgens, amb un gràfic hora a hora i icones del temps perquè planifiquis les sortides quan l'aire és més net." },
      { emoji: '🏷️', title: 'Fonts del calendari més clares', body: "El calendari de temporada ara etiqueta cada al·lergen amb la seva font de dades (PIA o EAN) i completa amb dades regionals els al·lergens que una estació no reporta." },
      { emoji: '💡', title: 'Per què és alt?', body: "Mira què està provocant el nivell d'avui, i una nova secció de la Guia explica per què un mateix al·lergen pot mostrar nivells diferents a les vistes d'Avui, previsió i calendari." },
      { emoji: '📍', title: "Distància de l'estació més propera", body: "Els detalls de la ubicació ara mostren a quina distància es troba l'estació de mesurament." },
      { emoji: '🔔', title: "Hores d'avís localitzades i accessibilitat", body: "Les hores dels avisos diaris ara segueixen el format horari del teu idioma, a més de millores per a lectors de pantalla." },
    ]},
    { version: '1.2.0', items: [
      { emoji: '🌤️', title: 'Targeta de condicions', body: "Una nova targeta plegable a la pantalla principal mostra el temps d'avui i l'Índex de Qualitat de l'Aire europeu un al costat de l'altre." },
      { emoji: '🍃', title: "Índex de Qualitat de l'Aire europeu", body: "Una barra de 6 bandes amb codificació de colors mostra l'IQA actual, de Bo a Molt dolent, amb un marcador en temps real." },
      { emoji: '📊', title: 'Al·lèrgens ordenats per gravetat', body: 'Els teus al·lèrgens ara apareixen ordenats per nivell actual, del més alt al més baix.' },
    ]},
    { version: '1.1.0', items: [
      { emoji: '📅', title: 'Calendari de temporades de pol·len', body: "Consulta les finestres de temporada típiques i els mesos de màxima concentració de cada al·lergen a la Guia." },
      { emoji: '📤', title: 'Compartir la previsió', body: "Comparteix la previsió de pol·len d'avui com a imatge o text." },
      { emoji: '📡', title: 'Suport sense connexió', body: "L'aplicació ara mostra dades en memòria cau amb la seva antiguitat quan perds la connexió, en comptes d'un error." },
      { emoji: '🌸', title: 'Pantalla de novetats', body: "Un resum de les novetats apareix ara una vegada després de cada actualització." },
    ]},
    { version: '1.0.2', items: [
      { emoji: '🎨', title: 'Tema fosc i clar', body: "Tria l'aparença que prefereixes, fosca, clara o la del sistema, des de la Configuració." },
      { emoji: '🌿', title: '2 al·lèrgens nous', body: 'Faig i Palmàcies afegits a la llista d\'al·lèrgens.' },
      { emoji: '📍', title: 'Assignació d\'estació més intel·ligent', body: "L'aplicació ara connecta automàticament la teva ubicació a l'estació de monitoratge PIA més propera." },
    ]},
  ],

  es: [
    { version: '1.5.0', items: [
      { emoji: '🌍', title: 'Cobertura mundial', body: 'Los datos de polen ahora también llegan a ubicaciones fuera de Europa, gracias a Google Pollen.' },
      { emoji: '🫁', title: '¿Puedo respirar hoy?', body: 'Una única frase de veredicto, con una flecha de tendencia al alza o a la baja, resume tu día de un vistazo.' },
      { emoji: '🔎', title: 'Previsualiza antes de añadir', body: 'Busca una ciudad y previsualiza su pronóstico antes de añadirla, útil para comprobar un lugar al que estás a punto de viajar.' },
      { emoji: '📱', title: 'Widget en la pantalla de inicio', body: 'Añade canIbreathe a la pantalla de inicio para ver el veredicto de hoy y el principal alérgeno de un vistazo, sin abrir la app.' },
      { emoji: '🔔', title: 'Alertas más actualizadas', body: 'Las notificaciones diarias y el widget de la pantalla de inicio ahora se mantienen sincronizados y se actualizan automáticamente en segundo plano.' },
    ]},
    { version: '1.4.0', items: [
      { emoji: '📔', title: 'Diario de alergias', body: 'Registra cada día tus síntomas, la gravedad y las notas, todo se guarda solo en tu dispositivo.' },
      { emoji: '📈', title: 'Descubre tus desencadenantes', body: 'El diario correlaciona tus síntomas con los niveles de polen y puede revelar alérgenos que aún no sigues.' },
      { emoji: '💊', title: 'Registra tu medicación', body: 'Anota qué tipos de medicación para la alergia tomaste, solo categorías, nunca nombres ni dosis, para que tu diario y tu informe PDF muestren qué te ayuda.' },
      { emoji: '📄', title: 'Exporta un informe PDF', body: 'Comparte con tu médico un resumen imprimible del diario, en el idioma que elijas.' },
      { emoji: '🎯', title: 'Mejor hora para salir más clara', body: 'El destacado de la mejor hora para salir ahora toma el color del nivel de polen más estable del día.' },
    ]},
    { version: '1.3.0', items: [
      { emoji: '📅', title: 'Nueva pestaña Planificar', body: 'Una nueva pestaña Planificar reúne tus herramientas de futuro: la mejor hora para salir cada día y el calendario completo de la temporada de polen, para cada ubicación.' },
      { emoji: '⏰', title: 'Mejor momento para salir', body: 'Una nueva tarjeta señala el rato más tranquilo del día para tus alérgenos, con un gráfico hora a hora e iconos del tiempo para que planifiques tus salidas cuando el aire está más limpio.' },
      { emoji: '🏷️', title: 'Fuentes del calendario más claras', body: 'El calendario de temporada ahora etiqueta cada alérgeno con su fuente de datos (PIA o EAN) y completa con datos regionales los alérgenos que una estación no reporta.' },
      { emoji: '💡', title: '¿Por qué está alto?', body: 'Descubre qué está provocando el nivel de hoy, y una nueva sección de la Guía explica por qué un mismo alérgeno puede mostrar niveles distintos en las vistas de Hoy, previsión y calendario.' },
      { emoji: '📍', title: 'Distancia de la estación más cercana', body: 'Los detalles de la ubicación ahora muestran a qué distancia está la estación de medición.' },
      { emoji: '🔔', title: 'Horas de aviso localizadas y accesibilidad', body: 'Las horas de los avisos diarios ahora siguen el formato horario de tu idioma, además de mejoras para lectores de pantalla.' },
    ]},
    { version: '1.2.0', items: [
      { emoji: '🌤️', title: 'Tarjeta de condiciones', body: 'Una nueva tarjeta plegable en la pantalla principal muestra el tiempo de hoy y el Índice de Calidad del Aire europeo uno al lado del otro.' },
      { emoji: '🍃', title: 'Índice de Calidad del Aire europeo', body: 'Una barra de 6 bandas con código de colores muestra el ICA actual, de Bueno a Muy malo, con un marcador en tiempo real.' },
      { emoji: '📊', title: 'Alérgenos ordenados por gravedad', body: 'Tus alérgenos ahora aparecen ordenados por nivel actual, del más alto al más bajo.' },
    ]},
    { version: '1.1.0', items: [
      { emoji: '📅', title: 'Calendario de temporadas de polen', body: 'Consulta las ventanas de temporada típicas y los meses de mayor concentración de cada alérgeno en la Guía.' },
      { emoji: '📤', title: 'Compartir la previsión', body: 'Comparte la previsión de polen de hoy como imagen o texto.' },
      { emoji: '📡', title: 'Soporte sin conexión', body: 'La aplicación ahora muestra datos en caché con su antigüedad cuando pierdes la conexión, en vez de un error.' },
      { emoji: '🌸', title: 'Pantalla de novedades', body: 'Un resumen de las novedades aparece ahora una vez después de cada actualización.' },
    ]},
    { version: '1.0.2', items: [
      { emoji: '🎨', title: 'Tema oscuro y claro', body: 'Elige tu apariencia preferida, oscura, clara o la del sistema, desde Configuración.' },
      { emoji: '🌿', title: '2 nuevos alérgenos', body: 'Haya y Palmáceas añadidos a la lista de alérgenos.' },
      { emoji: '📍', title: 'Asignación de estación más inteligente', body: 'La aplicación ahora conecta automáticamente tu ubicación con la estación de monitoreo PIA más cercana.' },
    ]},
  ],

  fr: [
    { version: '1.5.0', items: [
      { emoji: '🌍', title: 'Couverture mondiale', body: 'Les données de pollen couvrent désormais aussi des lieux hors d\'Europe, grâce à Google Pollen.' },
      { emoji: '🫁', title: 'Puis-je respirer aujourd\'hui ?', body: 'Une seule phrase de verdict, avec une flèche de tendance à la hausse ou à la baisse, résume votre journée en un coup d\'œil.' },
      { emoji: '🔎', title: 'Aperçu avant d\'ajouter', body: 'Recherchez une ville et prévisualisez ses prévisions avant de l\'ajouter, pratique pour vérifier une destination de voyage.' },
      { emoji: '📱', title: 'Widget sur l\'écran d\'accueil', body: 'Ajoutez canIbreathe à votre écran d\'accueil pour voir le verdict du jour et l\'allergène principal en un coup d\'œil, sans ouvrir l\'application.' },
      { emoji: '🔔', title: 'Alertes plus à jour', body: 'Les notifications quotidiennes et le widget de l\'écran d\'accueil restent désormais synchronisés et se rafraîchissent automatiquement en arrière-plan.' },
    ]},
    { version: '1.4.0', items: [
      { emoji: '📔', title: 'Journal des allergies', body: 'Notez chaque jour vos symptômes, leur intensité et vos remarques, tout reste uniquement sur votre appareil.' },
      { emoji: '📈', title: 'Repérez vos déclencheurs', body: 'Le journal met en relation vos symptômes avec les niveaux de pollen et peut révéler des allergènes que vous ne suivez pas encore.' },
      { emoji: '💊', title: 'Notez vos médicaments', body: "Indiquez quels types de médicaments contre l'allergie vous avez pris, catégories uniquement, jamais de noms ni de doses, pour que votre journal et votre rapport PDF montrent ce qui vous aide." },
      { emoji: '📄', title: 'Exporter un rapport PDF', body: 'Partagez avec votre médecin un résumé imprimable de votre journal, dans la langue de votre choix.' },
      { emoji: '🎯', title: 'Meilleur moment plus lisible', body: "La mise en avant du meilleur moment pour sortir adopte désormais la couleur du niveau de pollen le plus stable de la journée." },
    ]},
    { version: '1.3.0', items: [
      { emoji: '📅', title: 'Nouvel onglet Planifier', body: "Un nouvel onglet Planifier réunit vos outils de planification : le meilleur moment pour sortir chaque jour et le calendrier complet de la saison pollinique, pour chaque lieu." },
      { emoji: '⏰', title: 'Meilleur moment pour sortir', body: "Une nouvelle carte repère le créneau le plus calme de la journée pour vos allergènes, avec un graphique heure par heure et des icônes météo pour planifier vos sorties quand l'air est le plus pur." },
      { emoji: '🏷️', title: 'Sources du calendrier plus claires', body: "Le calendrier saisonnier étiquette désormais chaque allergène avec sa source de données (PIA ou EAN) et complète avec des données régionales les allergènes qu'une station ne rapporte pas." },
      { emoji: '💡', title: "Pourquoi est-ce élevé ?", body: "Découvrez ce qui détermine le niveau du jour, et une nouvelle section du Guide explique pourquoi un même allergène peut afficher des niveaux différents dans les vues Aujourd'hui, prévisions et calendrier." },
      { emoji: '📍', title: 'Distance de la station la plus proche', body: "Les détails du lieu indiquent désormais à quelle distance se trouve la station de mesure." },
      { emoji: '🔔', title: "Heures d'alerte localisées et accessibilité", body: "Les heures des alertes quotidiennes suivent désormais le format horaire de votre langue, avec des améliorations pour les lecteurs d'écran." },
    ]},
    { version: '1.2.0', items: [
      { emoji: '🌤️', title: 'Carte des conditions', body: "Une nouvelle carte repliable sur l'écran principal affiche la météo du jour et l'indice de qualité de l'air européen côte à côte." },
      { emoji: '🍃', title: "Indice de qualité de l'air européen", body: "Une barre à 6 niveaux codés par couleur indique l'IQA actuel, de Bon à Très mauvais, avec un marqueur en temps réel." },
      { emoji: '📊', title: 'Allergènes triés par gravité', body: 'Vos allergènes sont désormais affichés par niveau actuel, du plus élevé au plus bas.' },
    ]},
    { version: '1.1.0', items: [
      { emoji: '📅', title: 'Calendrier des saisons polliniques', body: 'Consultez les fenêtres de saison typiques et les mois de pic pour chaque allergène dans le Guide.' },
      { emoji: '📤', title: 'Partager les prévisions', body: "Partagez les prévisions polliniques du jour sous forme d'image ou de texte." },
      { emoji: '📡', title: 'Mode hors connexion', body: "L'application affiche maintenant les données en cache avec leur ancienneté en cas de perte de connexion, au lieu d'une erreur." },
      { emoji: '🌸', title: 'Écran des nouveautés', body: 'Un résumé des nouvelles fonctionnalités apparaît désormais une fois après chaque mise à jour.' },
    ]},
    { version: '1.0.2', items: [
      { emoji: '🎨', title: 'Thème sombre et clair', body: 'Choisissez votre apparence préférée, sombre, claire ou celle du système, dans Paramètres.' },
      { emoji: '🌿', title: '2 nouveaux allergènes', body: 'Hêtre et Palmier ajoutés à la liste des allergènes.' },
      { emoji: '📍', title: 'Correspondance de station améliorée', body: "L'application connecte maintenant automatiquement votre position à la station de surveillance PIA la plus proche." },
    ]},
  ],

  pt: [
    { version: '1.5.0', items: [
      { emoji: '🌍', title: 'Cobertura mundial', body: 'Os dados de pólen agora também chegam a localizações fora da Europa, graças ao Google Pollen.' },
      { emoji: '🫁', title: 'Posso respirar hoje?', body: 'Uma única frase de veredito, com uma seta de tendência a subir ou a descer, resume o teu dia num relance.' },
      { emoji: '🔎', title: 'Pré-visualiza antes de adicionar', body: 'Procura uma cidade e pré-visualiza a sua previsão antes de a adicionar, útil para verificar um destino de viagem.' },
      { emoji: '📱', title: 'Widget no ecrã principal', body: 'Adiciona o canIbreathe ao ecrã principal para ver o veredito de hoje e o principal alergénio num relance, sem abrir a app.' },
      { emoji: '🔔', title: 'Alertas mais atualizados', body: 'As notificações diárias e o widget do ecrã principal mantêm-se agora sincronizados e atualizam-se automaticamente em segundo plano.' },
    ]},
    { version: '1.4.0', items: [
      { emoji: '📔', title: 'Diário de alergias', body: 'Regista todos os dias os teus sintomas, a gravidade e as notas, tudo fica guardado apenas no teu dispositivo.' },
      { emoji: '📈', title: 'Descobre os teus desencadeadores', body: 'O diário correlaciona os teus sintomas com os níveis de pólen e pode revelar alergénios que ainda não acompanhas.' },
      { emoji: '💊', title: 'Regista a tua medicação', body: 'Anota que tipos de medicação para a alergia tomaste, apenas categorias, nunca nomes nem doses, para que o teu diário e o relatório PDF mostrem o que te ajuda.' },
      { emoji: '📄', title: 'Exporta um relatório PDF', body: 'Partilha com o teu médico um resumo imprimível do diário, no idioma que escolheres.' },
      { emoji: '🎯', title: 'Melhor hora para sair mais clara', body: 'O destaque da melhor hora para sair passa a usar a cor do nível de pólen mais estável do dia.' },
    ]},
    { version: '1.3.0', items: [
      { emoji: '📅', title: 'Novo separador Planear', body: 'Um novo separador Planear reúne as tuas ferramentas de planeamento: a melhor hora para sair cada dia e o calendário completo da época do pólen, para cada localização.' },
      { emoji: '⏰', title: 'Melhor altura para sair', body: 'Um novo cartão indica o período mais calmo do dia para os teus alergénios, com um gráfico hora a hora e ícones do tempo para planeares as saídas quando o ar está mais limpo.' },
      { emoji: '🏷️', title: 'Fontes do calendário mais claras', body: 'O calendário de época etiqueta agora cada alérgeno com a sua fonte de dados (PIA ou EAN) e preenche com dados regionais os alergénios que uma estação não reporta.' },
      { emoji: '💡', title: 'Porque está alto?', body: 'Vê o que está a determinar o nível de hoje, e uma nova secção do Guia explica porque o mesmo alérgeno pode mostrar níveis diferentes nas vistas de Hoje, previsão e calendário.' },
      { emoji: '📍', title: 'Distância da estação mais próxima', body: 'Os detalhes da localização mostram agora a que distância está a estação de medição.' },
      { emoji: '🔔', title: 'Horas de alerta localizadas e acessibilidade', body: 'As horas dos alertas diários seguem agora o formato horário do teu idioma, além de melhorias para leitores de ecrã.' },
    ]},
    { version: '1.2.0', items: [
      { emoji: '🌤️', title: 'Cartão de condições', body: 'Um novo cartão recolhível no ecrã principal mostra o tempo de hoje e o Índice de Qualidade do Ar europeu lado a lado.' },
      { emoji: '🍃', title: 'Índice de Qualidade do Ar europeu', body: 'Uma barra de 6 bandas com código de cores mostra o IQA atual, de Bom a Muito mau, com um marcador em tempo real.' },
      { emoji: '📊', title: 'Alergénios ordenados por gravidade', body: 'Os teus alergénios agora aparecem ordenados pelo nível atual, do mais alto para o mais baixo.' },
    ]},
    { version: '1.1.0', items: [
      { emoji: '📅', title: 'Calendário de estações polínicas', body: 'Consulta as janelas de estação típicas e os meses de pico para cada alergénio no Guia.' },
      { emoji: '📤', title: 'Partilhar previsão', body: 'Partilha a previsão polínica de hoje como imagem ou texto.' },
      { emoji: '📡', title: 'Suporte offline', body: 'O app agora mostra dados em cache com a sua antiguidade quando perdes a ligação, em vez de um erro.' },
      { emoji: '🌸', title: 'Ecrã de novidades', body: 'Um resumo das novas funcionalidades aparece agora uma vez após cada atualização.' },
    ]},
    { version: '1.0.2', items: [
      { emoji: '🎨', title: 'Tema escuro e claro', body: 'Escolhe a aparência preferida, escura, clara ou do sistema, nas Definições.' },
      { emoji: '🌿', title: '2 novos alergénios', body: 'Faia e Palmeira adicionados à lista de alergénios.' },
      { emoji: '📍', title: 'Correspondência de estação mais inteligente', body: 'O app agora liga automaticamente a tua localização à estação de monitorização PIA mais próxima.' },
    ]},
  ],

  it: [
    { version: '1.5.0', items: [
      { emoji: '🌍', title: 'Copertura mondiale', body: 'I dati sui pollini ora raggiungono anche località fuori dall\'Europa, grazie a Google Pollen.' },
      { emoji: '🫁', title: 'Posso respirare oggi?', body: 'Una singola frase di verdetto, con una freccia di tendenza in aumento o in calo, riassume la tua giornata a colpo d\'occhio.' },
      { emoji: '🔎', title: 'Anteprima prima di aggiungere', body: 'Cerca una città e visualizza in anteprima le previsioni prima di aggiungerla, utile per controllare una meta di viaggio.' },
      { emoji: '📱', title: 'Widget nella schermata home', body: 'Aggiungi canIbreathe alla schermata home per vedere il verdetto di oggi e il principale allergene a colpo d\'occhio, senza aprire l\'app.' },
      { emoji: '🔔', title: 'Avvisi più aggiornati', body: 'Le notifiche giornaliere e il widget della schermata home ora restano sincronizzati e si aggiornano automaticamente in background.' },
    ]},
    { version: '1.4.0', items: [
      { emoji: '📔', title: 'Diario delle allergie', body: 'Registra ogni giorno i tuoi sintomi, la gravità e le note, tutto resta solo sul tuo dispositivo.' },
      { emoji: '📈', title: 'Scopri i tuoi fattori scatenanti', body: 'Il diario mette in relazione i tuoi sintomi con i livelli di polline e può rivelare allergeni che non stai ancora monitorando.' },
      { emoji: '💊', title: 'Registra i tuoi farmaci', body: "Annota quali tipi di farmaci per l'allergia hai preso, solo categorie, mai nomi né dosi, così il diario e il report PDF mostrano cosa ti aiuta." },
      { emoji: '📄', title: 'Esporta un report PDF', body: 'Condividi con il tuo medico un riepilogo stampabile del diario, nella lingua che preferisci.' },
      { emoji: '🎯', title: 'Momento migliore più chiaro', body: "L'indicazione del momento migliore per uscire ora prende il colore dal livello di polline più stabile della giornata." },
    ]},
    { version: '1.3.0', items: [
      { emoji: '📅', title: 'Nuova scheda Pianifica', body: 'Una nuova scheda Pianifica riunisce i tuoi strumenti di pianificazione: il momento migliore per uscire ogni giorno e il calendario completo della stagione dei pollini, per ogni località.' },
      { emoji: '⏰', title: 'Il momento migliore per uscire', body: "Una nuova scheda individua la fascia più tranquilla della giornata per i tuoi allergeni, con un grafico ora per ora e le icone del meteo per programmare le uscite quando l'aria è più pulita." },
      { emoji: '🏷️', title: 'Fonti del calendario più chiare', body: 'Il calendario stagionale ora etichetta ogni allergene con la sua fonte dati (PIA o EAN) e completa con dati regionali gli allergeni che una stazione non riporta.' },
      { emoji: '💡', title: 'Perché è alto?', body: "Scopri cosa determina il livello di oggi, e una nuova sezione della Guida spiega perché lo stesso allergene può mostrare livelli diversi nelle viste Oggi, previsioni e calendario." },
      { emoji: '📍', title: 'Distanza della stazione più vicina', body: 'I dettagli della località ora mostrano a che distanza si trova la stazione di misurazione.' },
      { emoji: '🔔', title: 'Orari degli avvisi localizzati e accessibilità', body: 'Gli orari degli avvisi giornalieri ora seguono il formato orario della tua lingua, oltre a miglioramenti per i lettori di schermo.' },
    ]},
    { version: '1.2.0', items: [
      { emoji: '🌤️', title: 'Scheda condizioni', body: "Una nuova scheda comprimibile nella schermata principale mostra il meteo di oggi e l'Indice di Qualità dell'Aria europeo affiancati." },
      { emoji: '🍃', title: "Indice di Qualità dell'Aria europeo", body: "Una barra a 6 fasce con codice colore mostra l'IQA attuale, da Buono a Molto scarso, con un indicatore in tempo reale." },
      { emoji: '📊', title: 'Allergeni ordinati per gravità', body: 'I tuoi allergeni ora vengono visualizzati in ordine di livello attuale, dal più alto al più basso.' },
    ]},
    { version: '1.1.0', items: [
      { emoji: '📅', title: 'Calendario delle stagioni polliniche', body: 'Consulta le finestre stagionali tipiche e i mesi di picco per ogni allergene nella Guida.' },
      { emoji: '📤', title: 'Condividi le previsioni', body: 'Condividi le previsioni polliniche di oggi come immagine o testo.' },
      { emoji: '📡', title: 'Supporto offline', body: "L'app ora mostra i dati memorizzati con la loro età quando perdi la connessione, invece di un errore." },
      { emoji: '🌸', title: 'Schermata delle novità', body: 'Un riepilogo delle nuove funzionalità appare ora una volta dopo ogni aggiornamento.' },
    ]},
    { version: '1.0.2', items: [
      { emoji: '🎨', title: 'Tema scuro e chiaro', body: 'Scegli la tua modalità preferita, scura, chiara o di sistema, nelle Impostazioni.' },
      { emoji: '🌿', title: '2 nuovi allergeni', body: 'Faggio e Palma aggiunti alla lista degli allergeni.' },
      { emoji: '📍', title: 'Abbinamento stazione migliorato', body: "L'app ora collega automaticamente la tua posizione alla stazione di monitoraggio PIA più vicina." },
    ]},
  ],

  de: [
    { version: '1.5.0', items: [
      { emoji: '🌍', title: 'Weltweite Abdeckung', body: 'Pollendaten sind dank Google Pollen jetzt auch für Orte außerhalb Europas verfügbar.' },
      { emoji: '🫁', title: 'Kann ich heute durchatmen?', body: 'Ein einziger Urteilssatz mit einem Trendpfeil (steigend/fallend) fasst deinen Tag auf einen Blick zusammen.' },
      { emoji: '🔎', title: 'Vorschau vor dem Hinzufügen', body: 'Suche eine Stadt und sieh dir die Vorhersage an, bevor du sie hinzufügst, praktisch, um ein Reiseziel zu checken.' },
      { emoji: '📱', title: 'Homescreen-Widget', body: 'Füge canIbreathe deinem Homescreen hinzu, um das heutige Urteil und den wichtigsten Pollen auf einen Blick zu sehen, ganz ohne die App zu öffnen.' },
      { emoji: '🔔', title: 'Aktuellere Benachrichtigungen', body: 'Tägliche Benachrichtigungen und das Homescreen-Widget bleiben jetzt synchron und aktualisieren sich automatisch im Hintergrund.' },
    ]},
    { version: '1.4.0', items: [
      { emoji: '📔', title: 'Allergie-Tagebuch', body: 'Erfasse täglich deine Symptome, deren Schwere und Notizen, alles bleibt ausschließlich auf deinem Gerät.' },
      { emoji: '📈', title: 'Erkenne deine Auslöser', body: 'Das Tagebuch verknüpft deine Symptome mit den Pollenwerten und kann Allergene aufzeigen, die du noch nicht verfolgst.' },
      { emoji: '💊', title: 'Medikamente erfassen', body: 'Halte fest, welche Arten von Allergiemedikamenten du genommen hast, nur Kategorien, keine Namen oder Dosierungen, damit Tagebuch und PDF-Bericht zeigen, was hilft.' },
      { emoji: '📄', title: 'PDF-Bericht exportieren', body: 'Teile eine druckbare Zusammenfassung deines Tagebuchs, in der Sprache deiner Wahl, mit deinem Arzt.' },
      { emoji: '🎯', title: 'Klarerer Hinweis zur besten Zeit', body: 'Der Hinweis zur besten Zeit zum Rausgehen übernimmt jetzt die Farbe des stabilsten Pollenwerts des Tages.' },
    ]},
    { version: '1.3.0', items: [
      { emoji: '📅', title: 'Neuer Tab „Planen“', body: 'Ein neuer Tab „Planen“ bündelt deine vorausschauenden Werkzeuge: die beste Zeit zum Rausgehen pro Tag und den vollständigen Pollensaison-Kalender, für jeden Ort.' },
      { emoji: '⏰', title: 'Beste Zeit für draußen', body: 'Eine neue Karte zeigt das ruhigste Zeitfenster des Tages für deine Allergene – mit einem Stundendiagramm und Wettersymbolen, damit du Ausflüge bei der saubersten Luft planen kannst.' },
      { emoji: '🏷️', title: 'Klarere Kalenderquellen', body: 'Der Saisonkalender kennzeichnet jetzt jedes Allergen mit seiner Datenquelle (PIA oder EAN) und ergänzt Allergene, die eine Station nicht meldet, mit regionalen Daten.' },
      { emoji: '💡', title: 'Warum ist es hoch?', body: 'Sieh, was den heutigen Wert bestimmt, und ein neuer Guide-Abschnitt erklärt, warum dasselbe Allergen in den Ansichten Heute, Vorhersage und Kalender unterschiedliche Stufen zeigen kann.' },
      { emoji: '📍', title: 'Entfernung der nächsten Station', body: 'Die Ortsdetails zeigen jetzt, wie weit die Messstation entfernt ist.' },
      { emoji: '🔔', title: 'Lokalisierte Alarmzeiten & Barrierefreiheit', body: 'Die täglichen Alarmzeiten folgen jetzt dem Uhrzeitformat deiner Sprache, dazu Verbesserungen für Screenreader.' },
    ]},
    { version: '1.2.0', items: [
      { emoji: '🌤️', title: 'Bedingungskarte', body: 'Eine neue ausklappbare Karte auf dem Hauptbildschirm zeigt das heutige Wetter und den EU-Luftqualitätsindex nebeneinander.' },
      { emoji: '🍃', title: 'EU-Luftqualitätsindex', body: 'Ein 6-Band-Farbbalken zeigt den aktuellen LQI, von Gut bis Sehr schlecht, mit einer Echtzeit-Markierung.' },
      { emoji: '📊', title: 'Allergene nach Schweregrad sortiert', body: 'Deine Allergene werden jetzt nach aktuellem Niveau sortiert angezeigt, das höchste zuerst.' },
    ]},
    { version: '1.1.0', items: [
      { emoji: '📅', title: 'Pollenkalender', body: 'Sieh typische Saisonfenster und Spitzenmonate für jeden Allergen in der Anleitung.' },
      { emoji: '📤', title: 'Prognose teilen', body: 'Teile die heutige Pollenprognose als Bild oder Text.' },
      { emoji: '📡', title: 'Offline-Unterstützung', body: 'Die App zeigt jetzt zwischengespeicherte Daten mit ihrem Alter an, wenn du die Verbindung verlierst, anstatt eines Fehlers.' },
      { emoji: '🌸', title: 'Was-ist-neu-Bildschirm', body: 'Eine Zusammenfassung der neuen Funktionen erscheint jetzt einmal nach jedem Update.' },
    ]},
    { version: '1.0.2', items: [
      { emoji: '🎨', title: 'Dunkles & helles Design', body: 'Wähle dein bevorzugtes Erscheinungsbild, dunkel, hell oder Systemdesign, in den Einstellungen.' },
      { emoji: '🌿', title: '2 neue Allergene', body: 'Buche und Palme zur Allergenliste hinzugefügt.' },
      { emoji: '📍', title: 'Intelligentere Stationszuordnung', body: 'Die App verbindet deinen Standort jetzt automatisch mit der nächstgelegenen PIA-Messstation.' },
    ]},
  ],
};
