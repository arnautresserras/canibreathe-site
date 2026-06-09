const TRANSLATIONS = {
  ca: {
    // ── Shared ──────────────────────────────────────────────────
    'nav.home':    'Inici',
    'nav.privacy': 'Política de privacitat',
    'lang-switcher.label': 'Canvia l\'idioma',
    'meta.description.index': 'Previsions diàries de pol·len i al·lèrgens adaptades als que t\'afecten. Disponible per a iOS i Android.',
    'meta.description.privacy': 'Política de privacitat de l\'app canIbreathe de previsió de pol·len i al·lèrgens.',
    'footer.privacy': 'Política de privacitat',
    'footer.contact': 'Contacte',
    'footer.copy': '&copy; 2026 Arnau Tresserras',

    // ── index.html ───────────────────────────────────────────────
    'page.title.index': 'canIbreathe — Previsió de pol·len i al·lèrgens',
    'hero.subtitle': 'Previsions diàries de pol·len i al·lèrgens adaptades a les plantes que t\'afecten — per planificar el teu dia amb confiança.',
    'android.label': 'Disponible · Android',
    'android.step.title': 'Descarrega a Google Play',
    'android.step.desc': 'Per a Android',
    'install.title': 'Com instal·lar',
    'ios.label': 'Disponible · iOS',
    'ios.step.title': 'Descarrega a l\'App Store',
    'ios.step.desc': 'Per a iPhone i iPad',
    'features.title': 'Què fa',
    'feat1.title': 'Els teus al·lèrgens',
    'feat1.desc':  'Tria entre 27 pol·lens i espores els que t\'afecten. L\'app mostra només el que t\'importa, no tot alhora.',
    'feat2.title': 'Previsions locals',
    'feat2.desc':  'Dades reals d\'estació per a Catalunya i les Illes Balears, amb cobertura global gràcies a Open-Meteo. Fes seguiment de diverses ciutats alhora.',
    'feat3.title': 'Alertes diàries',
    'feat3.desc':  'Rep una notificació quan els teus al·lèrgens arribin al nivell que tries. Sense soroll, just el que necessites.',
    'feat4.title': 'Set idiomes',
    'feat4.desc':  'Disponible en anglès, català, castellà, francès, portuguès, italià i alemany. L\'app segueix l\'idioma del dispositiu automàticament.',
    'feat5.title': 'Calendari de temporada de pol·len',
    'feat5.desc':  'Consulta les finestres de temporada típiques i els mesos de pic per a cada al·lergen a la Guia integrada — per saber què esperar abans que comenci la temporada.',
    'feat6.title': 'Comparteix la previsió',
    'feat6.desc':  'Envia els nivells de pol·len d\'avui a amics o familiars com a imatge o text — molt pràctic per coordinar plans a l\'aire lliure.',

    // ── privacy.html ─────────────────────────────────────────────
    'page.title.privacy': 'Política de privacitat — canIbreathe',
    'policy.title': 'Política de privacitat',
    'policy.date':  'Data d\'efecte: 1 d\'abril de 2025 &nbsp;·&nbsp; Darrera actualització: 9 de maig de 2026',
    'policy.highlight': '<strong>Resum breu:</strong> canIbreathe no recull, emmagatzema ni comparteix cap informació personal als nostres servidors. El teu perfil de localització i al·lèrgies es desa únicament al teu dispositiu.',
    's1.h': '1. Qui som',
    's1.body': 'canIbreathe és un projecte personal desenvolupat per Arnau Tresserras. Si tens alguna pregunta sobre aquesta política, posa\'t en contacte a <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.',
    's2.h': '2. Quines dades utilitza l\'app',
    's2.body': `
      <p>canIbreathe desa la informació següent <strong>únicament al teu dispositiu</strong>, usant l'emmagatzematge privat del dispositiu. Aquestes dades mai no surten del dispositiu ni es transmeten als nostres servidors:</p>
      <ul>
        <li><strong>Localització</strong> — la ciutat o estació de seguiment de pol·len que tries manualment dins l'app. L'app no accedeix al GPS ni a la ubicació precisa del dispositiu.</li>
        <li><strong>Preferències d'al·lèrgens</strong> — la llista de tipus de pol·len i al·lèrgens que selecciones.</li>
        <li><strong>Configuració de notificacions</strong> — si les alertes diàries estan activades, l'hora d'alerta i el llindar d'alerta.</li>
        <li><strong>Preferència d'idioma</strong> — l'idioma de visualització que tries a Configuració.</li>
        <li><strong>Preferència de tema</strong> — el tema de visualització (clar, fosc o del sistema) que tries a Configuració.</li>
      </ul>
      <p>Pots restablir totes aquestes dades en qualsevol moment des de <em>Configuració → Restablir incorporació</em>.</p>`,
    's3.h': '3. Serveis de tercers',
    's3.intro': 'Per oferir previsions de pol·len, l\'app es comunica amb els serveis externs següents. Cada petició es fa directament des del teu dispositiu.',
    's3.openmeteo': `<strong>Open-Meteo</strong> (<a href="https://open-meteo.com" target="_blank" rel="noopener">open-meteo.com</a>)<br>
      S'utilitza per obtenir previsions de pol·len per a localitzacions fora de la xarxa PIA. Les coordenades seleccionades (latitud i longitud) s'envien com a part de la petició a l'API. Open-Meteo no requereix compte i no fa seguiment dels usuaris individuals. Vegeu els seus <a href="https://open-meteo.com/en/terms" target="_blank" rel="noopener">termes</a>.`,
    's3.pia': `<strong>PIA — Programa d'Informació Aerobiològica</strong> (<a href="https://aerobiologia.cat" target="_blank" rel="noopener">aerobiologia.cat</a>)<br>
      S'utilitza per obtenir dades detallades d'estació de pol·len per a Catalunya i les Illes Balears. Dades proporcionades sota <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>.`,
    's3.nominatim': `<strong>Nominatim / OpenStreetMap</strong> (<a href="https://nominatim.org" target="_blank" rel="noopener">nominatim.org</a>)<br>
      S'utilitza per a la cerca de ciutats quan configures la teva localització. El text que escrius al camp de cerca de localització s'envia a Nominatim. Vegeu la <a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener">política de privacitat de la Fundació OpenStreetMap</a>.`,
    's3.sentry': `<strong>Sentry</strong> (<a href="https://sentry.io" target="_blank" rel="noopener">sentry.io</a>)<br>
      S'utilitza per a l'informe de fallades en les versions de producció. Si l'app cau, s'envia automàticament un informe d'error anonimitzat. Els informes poden incloure el model del dispositiu, la versió del sistema operatiu i una traça de la pila. No s'inclouen noms, adreces de correu electrònic ni dades de compte. Vegeu la <a href="https://sentry.io/privacy/" target="_blank" rel="noopener">política de privacitat de Sentry</a>.`,
    's3.posthog': `<strong>PostHog</strong> (<a href="https://posthog.com" target="_blank" rel="noopener">posthog.com</a>)<br>
      S'utilitza per a analítica d'ús anònima (p. ex. quines funcions s'utilitzen, quins idiomes es seleccionen). Els esdeveniments es capturen automàticament i no inclouen cap informació d'identificació personal. Les dades s'allotgen als servidors europeus de PostHog. Vegeu la <a href="https://posthog.com/privacy" target="_blank" rel="noopener">política de privacitat de PostHog</a>.`,
    's4.h': '4. Notificacions',
    's4.body': 'Si actives les alertes diàries, l\'app programa una notificació local al teu dispositiu a l\'hora que tries. Les notificacions es generen localment — no s\'utilitza cap servidor de notificacions ni servei de missatgeria. Pots desactivar les notificacions en qualsevol moment des de la Configuració de l\'app o des de la configuració del sistema del dispositiu.',
    's5.h': '5. Privacitat dels menors',
    's5.body': 'canIbreathe no està adreçada a menors de 13 anys. No recollim conscientment cap informació de menors.',
    's6.h': '6. Canvis en aquesta política',
    's6.body': 'Si fem canvis importants en aquesta política, actualitzarem la data de "Darrera actualització" a la part superior d\'aquesta pàgina. L\'ús continuat de l\'app després d\'un canvi implica l\'acceptació de la política actualitzada.',
    's7.h': '7. Retenció i eliminació de dades',
    's7.body': `<ul>
      <li><strong>Dades al dispositiu:</strong> Es conserven al teu dispositiu fins que uses <em>Configuració → Restablir dades</em> o desinstal·les l'app. No en tenim còpia als servidors.</li>
      <li><strong>Analítica (PostHog):</strong> Els esdeveniments d'ús anònims es conserven als servidors de PostHog (UE) d'acord amb la seva política de retenció (normalment 1 any). Per sol·licitar-ne l'eliminació, contacta <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
      <li><strong>Informes d'error (Sentry):</strong> Els informes de fallades anonimitzats es conserven als servidors de Sentry fins a 90 dies. Per sol·licitar-ne l'eliminació, contacta <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
      <li><strong>Com eliminar les teves dades:</strong> Vés a <em>Configuració → Restablir dades</em> per esborrar immediatament totes les dades locals de l'app. Per sol·licituds d'eliminació de dades de tercers, contacta <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
    </ul>`,
    's8.h': '8. Contacte',
    's8.body': 'Les preguntes o sol·licituds sobre les teves dades es poden enviar a <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.',
  },

  en: {
    // ── Shared ──────────────────────────────────────────────────
    'nav.home':    'Home',
    'nav.privacy': 'Privacy policy',
    'lang-switcher.label': 'Change language',
    'meta.description.index': 'Daily pollen and allergen forecasts tailored to the plants that affect you. Available on iOS and Android.',
    'meta.description.privacy': 'Privacy policy for the canIbreathe pollen and allergen forecast app.',
    'footer.privacy': 'Privacy policy',
    'footer.contact': 'Contact',
    'footer.copy': '&copy; 2026 Arnau Tresserras',

    // ── index.html ───────────────────────────────────────────────
    'page.title.index': 'canIbreathe — Pollen & Allergen Forecast',
    'hero.subtitle': 'Daily pollen and allergen forecasts tailored to the plants that affect you — so you can plan your day with confidence.',
    'android.label': 'Available · Android',
    'android.step.title': 'Download on Google Play',
    'android.step.desc': 'For Android',
    'install.title': 'How to install',
    'ios.label': 'Available · iOS',
    'ios.step.title': 'Download on the App Store',
    'ios.step.desc': 'For iPhone and iPad',
    'features.title': 'What it does',
    'feat1.title': 'Your allergens only',
    'feat1.desc':  'Pick from 27 pollens and spores the ones that affect you. The app shows only what matters to you, not everything at once.',
    'feat2.title': 'Local forecasts',
    'feat2.desc':  'Real station data for Catalonia and the Balearic Islands, plus global coverage powered by Open-Meteo. Track multiple cities at once.',
    'feat3.title': 'Daily alerts',
    'feat3.desc':  'Get a notification when your tracked allergens reach the level you choose. No noise, just what you need.',
    'feat4.title': 'Seven languages',
    'feat4.desc':  'Available in English, Català, Español, Français, Português, Italiano, and Deutsch. The app follows your device language automatically.',
    'feat5.title': 'Pollen season calendar',
    'feat5.desc':  'Browse typical season windows and peak months for each allergen in the built-in Guide — so you know what to expect before the season starts.',
    'feat6.title': 'Share your forecast',
    'feat6.desc':  'Send today\'s pollen levels to friends or family as an image or text — handy for coordinating outdoor plans.',

    // ── privacy.html ─────────────────────────────────────────────
    'page.title.privacy': 'Privacy Policy — canIbreathe',
    'policy.title': 'Privacy Policy',
    'policy.date':  'Effective date: 1 April 2025 &nbsp;·&nbsp; Last updated: 9 May 2026',
    'policy.highlight': '<strong>Short version:</strong> canIbreathe does not collect, store, or share any personal information on our servers. Your location and allergy profile are stored only on your device.',
    's1.h': '1. Who we are',
    's1.body': 'canIbreathe is a personal project developed by Arnau Tresserras. If you have any questions about this policy, please contact <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.',
    's2.h': '2. What data the app uses',
    's2.body': `
      <p>canIbreathe stores the following information <strong>locally on your device only</strong>, using your device's private storage. This data never leaves your device and is never transmitted to our servers:</p>
      <ul>
        <li><strong>Location</strong> — the city or pollen monitoring station you choose manually within the app. The app does not access your device's GPS or precise location.</li>
        <li><strong>Allergen preferences</strong> — the list of pollen types and allergens you select.</li>
        <li><strong>Notification settings</strong> — whether daily alerts are enabled, the alert time, and the alert threshold.</li>
        <li><strong>Language preference</strong> — the display language you choose in Settings.</li>
        <li><strong>Theme preference</strong> — the display theme (light, dark, or system) you choose in Settings.</li>
      </ul>
      <p>You can reset all of this data at any time via <em>Settings → Reset onboarding</em>.</p>`,
    's3.h': '3. Third-party services',
    's3.intro': 'To provide pollen forecasts the app communicates with the following external services. Each request is made directly from your device.',
    's3.openmeteo': `<strong>Open-Meteo</strong> (<a href="https://open-meteo.com" target="_blank" rel="noopener">open-meteo.com</a>)<br>
      Used to fetch pollen forecasts for locations outside the PIA network. Your selected coordinates (latitude and longitude) are sent as part of the API request. Open-Meteo does not require an account and does not track individual users. See their <a href="https://open-meteo.com/en/terms" target="_blank" rel="noopener">terms</a>.`,
    's3.pia': `<strong>PIA — Aerobiological Information Programme</strong> (<a href="https://aerobiologia.cat" target="_blank" rel="noopener">aerobiologia.cat</a>)<br>
      Used to fetch detailed station-based pollen data for Catalonia and the Balearic Islands. Data is provided under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>.`,
    's3.nominatim': `<strong>Nominatim / OpenStreetMap</strong> (<a href="https://nominatim.org" target="_blank" rel="noopener">nominatim.org</a>)<br>
      Used for city search when setting your location. The text you type in the location search box is sent to Nominatim. See the <a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener">OpenStreetMap Foundation privacy policy</a>.`,
    's3.sentry': `<strong>Sentry</strong> (<a href="https://sentry.io" target="_blank" rel="noopener">sentry.io</a>)<br>
      Used for crash reporting in production builds. If the app crashes, an anonymised error report is sent automatically. Reports may include the device model, OS version, and a stack trace. No names, email addresses, or account details are included. See <a href="https://sentry.io/privacy/" target="_blank" rel="noopener">Sentry's privacy policy</a>.`,
    's3.posthog': `<strong>PostHog</strong> (<a href="https://posthog.com" target="_blank" rel="noopener">posthog.com</a>)<br>
      Used for anonymous usage analytics (e.g. which features are used, which languages are selected). Events are captured automatically and do not include any personally identifiable information. Data is hosted on PostHog's EU servers. See <a href="https://posthog.com/privacy" target="_blank" rel="noopener">PostHog's privacy policy</a>.`,
    's4.h': '4. Notifications',
    's4.body': 'If you enable daily alerts, the app schedules a local notification on your device at the time you choose. Notifications are generated locally — no notification server or push service is used. You can disable notifications at any time in the app\'s Settings or in your device\'s system settings.',
    's5.h': '5. Children\'s privacy',
    's5.body': 'canIbreathe is not directed at children under 13. We do not knowingly collect any information from children.',
    's6.h': '6. Changes to this policy',
    's6.body': 'If we make material changes to this policy, we will update the "Last updated" date at the top of this page. Continued use of the app after a change constitutes acceptance of the updated policy.',
    's7.h': '7. Data Retention & Deletion',
    's7.body': `<ul>
      <li><strong>On-device data:</strong> Retained on your device until you use <em>Settings → Reset Data</em>, or uninstall the app. We have no server-side copy.</li>
      <li><strong>Analytics (PostHog):</strong> Anonymous usage events are retained on PostHog's EU servers per their retention policy (typically 1 year). To request deletion, contact <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
      <li><strong>Error reports (Sentry):</strong> Anonymized crash reports are retained on Sentry's servers for up to 90 days. To request deletion, contact <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
      <li><strong>How to delete your data:</strong> Go to <em>Settings → Reset Data</em> to clear all local app data immediately. For third-party data deletion requests, contact <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
    </ul>`,
    's8.h': '8. Contact',
    's8.body': 'Questions or requests regarding your data can be sent to <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.',
  },

  es: {
    // ── Shared ──────────────────────────────────────────────────
    'nav.home':    'Inicio',
    'nav.privacy': 'Política de privacidad',
    'lang-switcher.label': 'Cambia el idioma',
    'meta.description.index': 'Previsiones diarias de polen y alérgenos adaptadas a las plantas que te afectan. Disponible en iOS y Android.',
    'meta.description.privacy': 'Política de privacidad de la app canIbreathe de previsión de polen y alérgenos.',
    'footer.privacy': 'Política de privacidad',
    'footer.contact': 'Contacto',
    'footer.copy': '&copy; 2026 Arnau Tresserras',

    // ── index.html ───────────────────────────────────────────────
    'page.title.index': 'canIbreathe — Previsión de polen y alérgenos',
    'hero.subtitle': 'Previsiones diarias de polen y alérgenos adaptadas a las plantas que te afectan — para planificar tu día con confianza.',
    'android.label': 'Disponible · Android',
    'android.step.title': 'Descargar en Google Play',
    'android.step.desc': 'Para Android',
    'install.title': 'Cómo instalar',
    'ios.label': 'Disponible · iOS',
    'ios.step.title': 'Descargar en el App Store',
    'ios.step.desc': 'Para iPhone y iPad',
    'features.title': 'Qué hace',
    'feat1.title': 'Tus alérgenos',
    'feat1.desc':  'Elige entre 27 pólenes y esporas los que te afectan. La app muestra solo lo que te importa, no todo a la vez.',
    'feat2.title': 'Previsiones locales',
    'feat2.desc':  'Datos reales de estación para Cataluña y las Islas Baleares, con cobertura global gracias a Open-Meteo. Sigue varias ciudades a la vez.',
    'feat3.title': 'Alertas diarias',
    'feat3.desc':  'Recibe una notificación cuando tus alérgenos alcancen el nivel que eliges. Sin ruido, solo lo que necesitas.',
    'feat4.title': 'Siete idiomas',
    'feat4.desc':  'Disponible en inglés, catalán, español, francés, portugués, italiano y alemán. La app sigue el idioma del dispositivo automáticamente.',
    'feat5.title': 'Calendario de temporada de polen',
    'feat5.desc':  'Consulta las ventanas de temporada típicas y los meses pico para cada alérgeno en la Guía integrada — para saber qué esperar antes de que empiece la temporada.',
    'feat6.title': 'Comparte tu previsión',
    'feat6.desc':  'Envía los niveles de polen de hoy a amigos o familiares como imagen o texto — muy útil para coordinar planes al aire libre.',

    // ── privacy.html ─────────────────────────────────────────────
    'page.title.privacy': 'Política de privacidad — canIbreathe',
    'policy.title': 'Política de privacidad',
    'policy.date':  'Fecha de entrada en vigor: 1 de abril de 2025 &nbsp;·&nbsp; Última actualización: 9 de mayo de 2026',
    'policy.highlight': '<strong>Resumen breve:</strong> canIbreathe no recopila, almacena ni comparte ningún dato personal en nuestros servidores. Tu perfil de localización y alergias se guarda únicamente en tu dispositivo.',
    's1.h': '1. Quiénes somos',
    's1.body': 'canIbreathe es un proyecto personal desarrollado por Arnau Tresserras. Si tienes alguna pregunta sobre esta política, ponte en contacto en <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.',
    's2.h': '2. Qué datos utiliza la app',
    's2.body': `
      <p>canIbreathe guarda la siguiente información <strong>únicamente en tu dispositivo</strong>, usando el almacenamiento privado del dispositivo. Estos datos nunca abandonan el dispositivo ni se transmiten a nuestros servidores:</p>
      <ul>
        <li><strong>Localización</strong> — la ciudad o estación de seguimiento de polen que eliges manualmente dentro de la app. La app no accede al GPS ni a la ubicación precisa del dispositivo.</li>
        <li><strong>Preferencias de alérgenos</strong> — la lista de tipos de polen y alérgenos que seleccionas.</li>
        <li><strong>Configuración de notificaciones</strong> — si las alertas diarias están activadas, la hora de alerta y el umbral de alerta.</li>
        <li><strong>Preferencia de idioma</strong> — el idioma de visualización que eliges en Configuración.</li>
        <li><strong>Preferencia de tema</strong> — el tema de visualización (claro, oscuro o del sistema) que eliges en Configuración.</li>
      </ul>
      <p>Puedes restablecer todos estos datos en cualquier momento desde <em>Configuración → Restablecer incorporación</em>.</p>`,
    's3.h': '3. Servicios de terceros',
    's3.intro': 'Para ofrecer previsiones de polen, la app se comunica con los siguientes servicios externos. Cada solicitud se realiza directamente desde tu dispositivo.',
    's3.openmeteo': `<strong>Open-Meteo</strong> (<a href="https://open-meteo.com" target="_blank" rel="noopener">open-meteo.com</a>)<br>
      Se utiliza para obtener previsiones de polen para ubicaciones fuera de la red PIA. Las coordenadas seleccionadas (latitud y longitud) se envían como parte de la solicitud a la API. Open-Meteo no requiere cuenta y no realiza seguimiento de usuarios individuales. Consulta sus <a href="https://open-meteo.com/en/terms" target="_blank" rel="noopener">términos</a>.`,
    's3.pia': `<strong>PIA — Programa de Información Aerobiológica</strong> (<a href="https://aerobiologia.cat" target="_blank" rel="noopener">aerobiologia.cat</a>)<br>
      Se utiliza para obtener datos detallados de estación de polen para Cataluña y las Islas Baleares. Datos proporcionados bajo <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>.`,
    's3.nominatim': `<strong>Nominatim / OpenStreetMap</strong> (<a href="https://nominatim.org" target="_blank" rel="noopener">nominatim.org</a>)<br>
      Se utiliza para la búsqueda de ciudades al configurar tu localización. El texto que escribes en el campo de búsqueda de localización se envía a Nominatim. Consulta la <a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener">política de privacidad de la Fundación OpenStreetMap</a>.`,
    's3.sentry': `<strong>Sentry</strong> (<a href="https://sentry.io" target="_blank" rel="noopener">sentry.io</a>)<br>
      Se utiliza para informes de errores en las versiones de producción. Si la app falla, se envía automáticamente un informe de error anonimizado. Los informes pueden incluir el modelo del dispositivo, la versión del sistema operativo y un seguimiento de la pila. No se incluyen nombres, direcciones de correo electrónico ni datos de cuenta. Consulta la <a href="https://sentry.io/privacy/" target="_blank" rel="noopener">política de privacidad de Sentry</a>.`,
    's3.posthog': `<strong>PostHog</strong> (<a href="https://posthog.com" target="_blank" rel="noopener">posthog.com</a>)<br>
      Se utiliza para analítica de uso anónima (p. ej. qué funciones se usan, qué idiomas se seleccionan). Los eventos se capturan automáticamente y no incluyen ningún dato de identificación personal. Los datos se alojan en los servidores europeos de PostHog. Consulta la <a href="https://posthog.com/privacy" target="_blank" rel="noopener">política de privacidad de PostHog</a>.`,
    's4.h': '4. Notificaciones',
    's4.body': 'Si activas las alertas diarias, la app programa una notificación local en tu dispositivo a la hora que eliges. Las notificaciones se generan localmente — no se utiliza ningún servidor de notificaciones ni servicio de mensajería push. Puedes desactivar las notificaciones en cualquier momento desde la Configuración de la app o desde la configuración del sistema del dispositivo.',
    's5.h': '5. Privacidad de los menores',
    's5.body': 'canIbreathe no está dirigida a menores de 13 años. No recopilamos conscientemente ningún dato de menores.',
    's6.h': '6. Cambios en esta política',
    's6.body': 'Si realizamos cambios importantes en esta política, actualizaremos la fecha de "Última actualización" en la parte superior de esta página. El uso continuado de la app tras un cambio implica la aceptación de la política actualizada.',
    's7.h': '7. Retención y eliminación de datos',
    's7.body': `<ul>
      <li><strong>Datos en el dispositivo:</strong> Se conservan en tu dispositivo hasta que uses <em>Configuración → Restablecer datos</em> o desinstales la app. No tenemos ninguna copia en nuestros servidores.</li>
      <li><strong>Analítica (PostHog):</strong> Los eventos de uso anónimos se conservan en los servidores UE de PostHog según su política de retención (normalmente 1 año). Para solicitar su eliminación, contacta <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
      <li><strong>Informes de errores (Sentry):</strong> Los informes de fallos anonimizados se conservan en los servidores de Sentry hasta 90 días. Para solicitar su eliminación, contacta <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
      <li><strong>Cómo eliminar tus datos:</strong> Ve a <em>Configuración → Restablecer datos</em> para borrar inmediatamente todos los datos locales de la app. Para solicitudes de eliminación de datos de terceros, contacta <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
    </ul>`,
    's8.h': '8. Contacto',
    's8.body': 'Las preguntas o solicitudes sobre tus datos pueden enviarse a <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.',
  },

  fr: {
    // ── Shared ─────────────────────────────────────────────────────
    'nav.home':    'Accueil',
    'nav.privacy': 'Politique de confidentialité',
    'lang-switcher.label': 'Changer de langue',
    'meta.description.index': 'Prévisions quotidiennes de pollen et allergènes adaptées à ce qui vous affecte. Disponible sur iOS et Android.',
    'meta.description.privacy': 'Politique de confidentialité de l\'app canIbreathe de prévision de pollen et allergènes.',
    'footer.privacy': 'Politique de confidentialité',
    'footer.contact': 'Contact',
    'footer.copy': '&copy; 2026 Arnau Tresserras',

    // ── index.html ──────────────────────────────────────────────────
    'page.title.index': 'canIbreathe — Prévisions Pollen & Allergènes',
    'hero.subtitle': 'Prévisions quotidiennes de pollen et allergènes adaptées aux plantes qui vous affectent — pour planifier votre journée en toute confiance.',
    'android.label': 'Disponible · Android',
    'android.step.title': 'Télécharger sur Google Play',
    'android.step.desc':  'Pour Android',
    'install.title':   'Comment installer',
    'ios.label':       'Disponible · iOS',
    'ios.step.title':  'Télécharger sur l\'App Store',
    'ios.step.desc':   'Pour iPhone et iPad',
    'features.title':  'Ce que fait l\'app',
    'feat1.title': 'Vos allergènes uniquement',
    'feat1.desc':  'Choisissez parmi 27 pollens et spores ceux qui vous affectent. L\'app affiche uniquement ce qui vous concerne, pas tout à la fois.',
    'feat2.title': 'Prévisions locales',
    'feat2.desc':  'Données de stations réelles pour la Catalogne et les Îles Baléares, plus une couverture mondiale via Open-Meteo. Suivez plusieurs villes à la fois.',
    'feat3.title': 'Alertes quotidiennes',
    'feat3.desc':  'Recevez une notification quand vos allergènes atteignent le niveau que vous choisissez. Sans bruit, juste ce qu\'il faut.',
    'feat4.title': 'Sept langues',
    'feat4.desc':  'Disponible en anglais, catalan, espagnol, français, portugais, italien et allemand. L\'app suit automatiquement la langue de l\'appareil.',
    'feat5.title': 'Calendrier des saisons polliniques',
    'feat5.desc':  'Consultez les fenêtres de saison typiques et les mois de pic pour chaque allergène dans le Guide intégré — pour anticiper avant le début de la saison.',
    'feat6.title': 'Partager la prévision',
    'feat6.desc':  'Envoyez les niveaux de pollen du jour à vos proches en image ou en texte — pratique pour coordonner des activités en plein air.',

    // ── privacy.html ────────────────────────────────────────────────
    'page.title.privacy': 'Politique de confidentialité — canIbreathe',
    'policy.title': 'Politique de confidentialité',
    'policy.date':  'Date d\'entrée en vigueur : 1 avril 2025 &nbsp;·&nbsp; Dernière mise à jour : 9 mai 2026',
    'policy.highlight': '<strong>En bref :</strong> canIbreathe ne collecte, ne stocke ni ne partage aucune information personnelle sur nos serveurs. Votre profil de localisation et d\'allergies est stocké uniquement sur votre appareil.',
    's1.h':    '1. Qui nous sommes',
    's1.body': 'canIbreathe est un projet personnel développé par Arnau Tresserras. Pour toute question sur cette politique, contactez <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.',
    's2.h':    '2. Quelles données l\'app utilise',
    's2.body': `
    <p>canIbreathe stocke les informations suivantes <strong>uniquement sur votre appareil</strong>, en utilisant le stockage privé de l'appareil. Ces données ne quittent jamais votre appareil et ne sont jamais transmises à nos serveurs :</p>
    <ul>
      <li><strong>Localisation</strong> — la ville ou la station de surveillance du pollen que vous choisissez manuellement dans l'app. L'app n'accède pas au GPS ni à votre localisation précise.</li>
      <li><strong>Préférences d'allergènes</strong> — la liste des types de pollen et allergènes que vous sélectionnez.</li>
      <li><strong>Paramètres de notification</strong> — si les alertes quotidiennes sont activées, l'heure et le seuil d'alerte.</li>
      <li><strong>Préférence de thème</strong> — le thème d'affichage (clair, sombre ou système) que vous choisissez dans Paramètres.</li>
      <li><strong>Préférence de langue</strong> — la langue d'affichage que vous choisissez dans Paramètres.</li>
    </ul>
    <p>Vous pouvez réinitialiser toutes ces données à tout moment via <em>Paramètres → Réinitialiser l'intégration</em>.</p>`,
    's3.h':    '3. Services tiers',
    's3.intro': 'Pour fournir des prévisions de pollen, l\'app communique avec les services externes suivants. Chaque requête est effectuée directement depuis votre appareil.',
    's3.openmeteo': `<strong>Open-Meteo</strong> (<a href="https://open-meteo.com" target="_blank" rel="noopener">open-meteo.com</a>)<br>
    Utilisé pour obtenir des prévisions de pollen pour les localités hors du réseau PIA. Vos coordonnées sélectionnées (latitude et longitude) sont envoyées dans la requête API. Open-Meteo ne nécessite pas de compte et ne suit pas les utilisateurs individuels. Voir leurs <a href="https://open-meteo.com/en/terms" target="_blank" rel="noopener">conditions</a>.`,
    's3.pia': `<strong>PIA — Programme d'Information Aérobiologique</strong> (<a href="https://aerobiologia.cat" target="_blank" rel="noopener">aerobiologia.cat</a>)<br>
    Utilisé pour obtenir des données détaillées de stations de pollen pour la Catalogne et les Îles Baléares. Données sous licence <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>.`,
    's3.nominatim': `<strong>Nominatim / OpenStreetMap</strong> (<a href="https://nominatim.org" target="_blank" rel="noopener">nominatim.org</a>)<br>
    Utilisé pour la recherche de villes lors de la configuration de votre localisation. Le texte saisi dans le champ de recherche est envoyé à Nominatim. Voir la <a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener">politique de confidentialité de la Fondation OpenStreetMap</a>.`,
    's3.sentry': `<strong>Sentry</strong> (<a href="https://sentry.io" target="_blank" rel="noopener">sentry.io</a>)<br>
    Utilisé pour le rapport de plantages dans les versions de production. En cas de plantage, un rapport d'erreur anonymisé est envoyé automatiquement. Les rapports peuvent inclure le modèle de l'appareil, la version du système d'exploitation et une trace de la pile. Aucun nom, adresse e-mail ni détail de compte n'est inclus. Voir la <a href="https://sentry.io/privacy/" target="_blank" rel="noopener">politique de confidentialité de Sentry</a>.`,
    's3.posthog': `<strong>PostHog</strong> (<a href="https://posthog.com" target="_blank" rel="noopener">posthog.com</a>)<br>
    Utilisé pour des analyses d'utilisation anonymes (ex. quelles fonctionnalités sont utilisées, quelles langues sont sélectionnées). Les événements sont capturés automatiquement et n'incluent aucune information d'identification personnelle. Les données sont hébergées sur les serveurs européens de PostHog. Voir la <a href="https://posthog.com/privacy" target="_blank" rel="noopener">politique de confidentialité de PostHog</a>.`,
    's4.h':    '4. Notifications',
    's4.body': 'Si vous activez les alertes quotidiennes, l\'app programme une notification locale sur votre appareil à l\'heure choisie. Les notifications sont générées localement — aucun serveur de notifications ni service push n\'est utilisé. Vous pouvez désactiver les notifications à tout moment dans les Paramètres de l\'app ou dans les paramètres système de votre appareil.',
    's5.h':    '5. Vie privée des enfants',
    's5.body': 'canIbreathe n\'est pas destinée aux enfants de moins de 13 ans. Nous ne collectons sciemment aucune information auprès d\'enfants.',
    's6.h':    '6. Modifications de cette politique',
    's6.body': 'Si nous apportons des modifications importantes à cette politique, nous mettrons à jour la date de « Dernière mise à jour » en haut de cette page. L\'utilisation continue de l\'app après une modification constitue une acceptation de la politique mise à jour.',
    's7.h':    '7. Conservation et suppression des données',
    's7.body': `<ul>
      <li><strong>Données sur l'appareil :</strong> Conservées sur votre appareil jusqu'à ce que vous utilisiez <em>Paramètres → Réinitialiser les données</em>, ou que vous désinstalliez l'app. Nous n'en avons aucune copie sur nos serveurs.</li>
      <li><strong>Analytique (PostHog) :</strong> Les événements d'utilisation anonymes sont conservés sur les serveurs UE de PostHog selon leur politique de rétention (généralement 1 an). Pour demander leur suppression, contactez <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
      <li><strong>Rapports d'erreurs (Sentry) :</strong> Les rapports de plantages anonymisés sont conservés sur les serveurs de Sentry pendant 90 jours maximum. Pour demander leur suppression, contactez <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
      <li><strong>Comment supprimer vos données :</strong> Allez dans <em>Paramètres → Réinitialiser les données</em> pour effacer immédiatement toutes les données locales de l'app. Pour les demandes de suppression de données tierces, contactez <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
    </ul>`,
    's8.h':    '8. Contact',
    's8.body': 'Les questions ou demandes concernant vos données peuvent être envoyées à <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.',
  },

  pt: {
    // ── Shared ─────────────────────────────────────────────────────
    'nav.home':    'Início',
    'nav.privacy': 'Política de privacidade',
    'lang-switcher.label': 'Mudar idioma',
    'meta.description.index': 'Previsões diárias de pólen e alergénios adaptadas ao que te afeta. Disponível para iOS e Android.',
    'meta.description.privacy': 'Política de privacidade da app canIbreathe de previsão de pólen e alergénios.',
    'footer.privacy': 'Política de privacidade',
    'footer.contact': 'Contacto',
    'footer.copy': '&copy; 2026 Arnau Tresserras',

    // ── index.html ──────────────────────────────────────────────────
    'page.title.index': 'canIbreathe — Previsão de Pólen e Alergénios',
    'hero.subtitle': 'Previsões diárias de pólen e alergénios adaptadas às plantas que te afetam — para planear o teu dia com confiança.',
    'android.label': 'Disponível · Android',
    'android.step.title': 'Descarregar no Google Play',
    'android.step.desc':  'Para Android',
    'install.title':   'Como instalar',
    'ios.label':       'Disponível · iOS',
    'ios.step.title':  'Descarregar na App Store',
    'ios.step.desc':   'Para iPhone e iPad',
    'features.title':  'O que faz',
    'feat1.title': 'Os teus alergénios apenas',
    'feat1.desc':  'Escolhe entre 27 pólenes e esporos os que te afetam. A app mostra apenas o que importa, não tudo ao mesmo tempo.',
    'feat2.title': 'Previsões locais',
    'feat2.desc':  'Dados reais de estações para a Catalunha e as Ilhas Baleares, mais cobertura global via Open-Meteo. Segue várias cidades ao mesmo tempo.',
    'feat3.title': 'Alertas diários',
    'feat3.desc':  'Recebe uma notificação quando os teus alergénios atingirem o nível que escolhes. Sem ruído, apenas o necessário.',
    'feat4.title': 'Sete idiomas',
    'feat4.desc':  'Disponível em inglês, catalão, espanhol, francês, português, italiano e alemão. A app segue automaticamente o idioma do dispositivo.',
    'feat5.title': 'Calendário de época do pólen',
    'feat5.desc':  'Consulta as janelas de época típicas e os meses de pico para cada alergénio no Guia integrado — para saberes o que esperar antes do início da época.',
    'feat6.title': 'Partilha a previsão',
    'feat6.desc':  'Envia os níveis de pólen de hoje a amigos ou familiares como imagem ou texto — útil para coordenar planos ao ar livre.',

    // ── privacy.html ────────────────────────────────────────────────
    'page.title.privacy': 'Política de Privacidade — canIbreathe',
    'policy.title': 'Política de Privacidade',
    'policy.date':  'Data de entrada em vigor: 1 de abril de 2025 &nbsp;·&nbsp; Última atualização: 9 de maio de 2026',
    'policy.highlight': '<strong>Resumo:</strong> canIbreathe não recolhe, armazena nem partilha informações pessoais nos nossos servidores. O teu perfil de localização e alergias é guardado apenas no teu dispositivo.',
    's1.h':    '1. Quem somos',
    's1.body': 'canIbreathe é um projeto pessoal desenvolvido por Arnau Tresserras. Se tiveres alguma dúvida sobre esta política, contacta <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.',
    's2.h':    '2. Que dados a app utiliza',
    's2.body': `
    <p>canIbreathe guarda as seguintes informações <strong>apenas no teu dispositivo</strong>, utilizando o armazenamento privado do dispositivo. Estes dados nunca saem do dispositivo nem são transmitidos aos nossos servidores:</p>
    <ul>
      <li><strong>Localização</strong> — a cidade ou estação de monitorização de pólen que escolhes manualmente na app. A app não acede ao GPS nem à localização precisa do dispositivo.</li>
      <li><strong>Preferências de alergénios</strong> — a lista de tipos de pólen e alergénios que selecionas.</li>
      <li><strong>Configurações de notificações</strong> — se os alertas diários estão ativados, a hora do alerta e o limiar do alerta.</li>
      <li><strong>Preferência de tema</strong> — o tema de visualização (claro, escuro ou sistema) que escolhes nas Definições.</li>
      <li><strong>Preferência de idioma</strong> — o idioma de visualização que escolhes nas Definições.</li>
    </ul>
    <p>Podes repor todos estes dados a qualquer momento em <em>Definições → Repor integração</em>.</p>`,
    's3.h':    '3. Serviços de terceiros',
    's3.intro': 'Para fornecer previsões de pólen, a app comunica com os seguintes serviços externos. Cada pedido é feito diretamente a partir do teu dispositivo.',
    's3.openmeteo': `<strong>Open-Meteo</strong> (<a href="https://open-meteo.com" target="_blank" rel="noopener">open-meteo.com</a>)<br>
    Utilizado para obter previsões de pólen para localizações fora da rede PIA. As coordenadas selecionadas (latitude e longitude) são enviadas como parte do pedido à API. Open-Meteo não requer conta e não rastreia utilizadores individuais. Consulta os seus <a href="https://open-meteo.com/en/terms" target="_blank" rel="noopener">termos</a>.`,
    's3.pia': `<strong>PIA — Programa de Informação Aerobiológica</strong> (<a href="https://aerobiologia.cat" target="_blank" rel="noopener">aerobiologia.cat</a>)<br>
    Utilizado para obter dados detalhados de estações de pólen para a Catalunha e as Ilhas Baleares. Dados sob licença <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>.`,
    's3.nominatim': `<strong>Nominatim / OpenStreetMap</strong> (<a href="https://nominatim.org" target="_blank" rel="noopener">nominatim.org</a>)<br>
    Utilizado para a pesquisa de cidades ao configurar a tua localização. O texto que escreves no campo de pesquisa de localização é enviado para o Nominatim. Consulta a <a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener">política de privacidade da Fundação OpenStreetMap</a>.`,
    's3.sentry': `<strong>Sentry</strong> (<a href="https://sentry.io" target="_blank" rel="noopener">sentry.io</a>)<br>
    Utilizado para relatórios de falhas em versões de produção. Se a app falhar, um relatório de erro anonimizado é enviado automaticamente. Os relatórios podem incluir o modelo do dispositivo, a versão do sistema operativo e um rastreamento de pilha. Não são incluídos nomes, endereços de e-mail ou detalhes de conta. Consulta a <a href="https://sentry.io/privacy/" target="_blank" rel="noopener">política de privacidade do Sentry</a>.`,
    's3.posthog': `<strong>PostHog</strong> (<a href="https://posthog.com" target="_blank" rel="noopener">posthog.com</a>)<br>
    Utilizado para análise anónima de utilização (ex. quais funcionalidades são usadas, quais idiomas são selecionados). Os eventos são capturados automaticamente e não incluem informações de identificação pessoal. Os dados são alojados nos servidores europeus do PostHog. Consulta a <a href="https://posthog.com/privacy" target="_blank" rel="noopener">política de privacidade do PostHog</a>.`,
    's4.h':    '4. Notificações',
    's4.body': 'Se ativares os alertas diários, a app agenda uma notificação local no teu dispositivo à hora que escolhes. As notificações são geradas localmente — não é utilizado nenhum servidor de notificações nem serviço push. Podes desativar as notificações a qualquer momento nas Definições da app ou nas definições de sistema do dispositivo.',
    's5.h':    '5. Privacidade das crianças',
    's5.body': 'canIbreathe não se destina a crianças com menos de 13 anos. Não recolhemos conscientemente qualquer informação de crianças.',
    's6.h':    '6. Alterações a esta política',
    's6.body': 'Se fizermos alterações materiais a esta política, atualizaremos a data de "Última atualização" no topo desta página. A utilização continuada da app após uma alteração constitui aceitação da política atualizada.',
    's7.h':    '7. Retenção e eliminação de dados',
    's7.body': `<ul>
      <li><strong>Dados no dispositivo:</strong> Conservados no teu dispositivo até usares <em>Definições → Repor dados</em> ou desinstalares a app. Não temos nenhuma cópia nos nossos servidores.</li>
      <li><strong>Análise (PostHog):</strong> Os eventos de utilização anónimos são conservados nos servidores UE do PostHog de acordo com a sua política de retenção (normalmente 1 ano). Para solicitar a eliminação, contacta <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
      <li><strong>Relatórios de erros (Sentry):</strong> Os relatórios de falhas anonimizados são conservados nos servidores do Sentry durante até 90 dias. Para solicitar a eliminação, contacta <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
      <li><strong>Como eliminar os teus dados:</strong> Vai a <em>Definições → Repor dados</em> para apagar imediatamente todos os dados locais da app. Para pedidos de eliminação de dados de terceiros, contacta <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
    </ul>`,
    's8.h':    '8. Contacto',
    's8.body': 'Questões ou pedidos sobre os teus dados podem ser enviados para <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.',
  },

  it: {
    // ── Shared ─────────────────────────────────────────────────────
    'nav.home':    'Home',
    'nav.privacy': 'Informativa sulla privacy',
    'lang-switcher.label': 'Cambia lingua',
    'meta.description.index': 'Previsioni quotidiane di pollini e allergeni adattate a ciò che ti colpisce. Disponibile su iOS e Android.',
    'meta.description.privacy': 'Informativa sulla privacy dell\'app canIbreathe per le previsioni di pollini e allergeni.',
    'footer.privacy': 'Informativa sulla privacy',
    'footer.contact': 'Contatto',
    'footer.copy': '&copy; 2026 Arnau Tresserras',

    // ── index.html ──────────────────────────────────────────────────
    'page.title.index': 'canIbreathe — Previsioni Pollini & Allergeni',
    'hero.subtitle': 'Previsioni quotidiane di pollini e allergeni adattate alle piante che ti colpiscono — per pianificare la tua giornata con fiducia.',
    'android.label': 'Disponibile · Android',
    'android.step.title': 'Scarica su Google Play',
    'android.step.desc':  'Per Android',
    'install.title':   'Come installare',
    'ios.label':       'Disponibile · iOS',
    'ios.step.title':  'Scarica sull\'App Store',
    'ios.step.desc':   'Per iPhone e iPad',
    'features.title':  'Cosa fa',
    'feat1.title': 'Solo i tuoi allergeni',
    'feat1.desc':  'Scegli tra 27 pollini e spore quelli che ti colpiscono. L\'app mostra solo ciò che ti riguarda, non tutto in una volta.',
    'feat2.title': 'Previsioni locali',
    'feat2.desc':  'Dati da stazioni reali per la Catalogna e le Isole Baleari, più copertura globale tramite Open-Meteo. Monitora più città contemporaneamente.',
    'feat3.title': 'Avvisi quotidiani',
    'feat3.desc':  'Ricevi una notifica quando i tuoi allergeni raggiungono il livello che scegli. Senza rumore, solo l\'essenziale.',
    'feat4.title': 'Sette lingue',
    'feat4.desc':  'Disponibile in inglese, catalano, spagnolo, francese, portoghese, italiano e tedesco. L\'app segue automaticamente la lingua del dispositivo.',
    'feat5.title': 'Calendario delle stagioni polliniche',
    'feat5.desc':  'Sfoglia le finestre di stagione tipiche e i mesi di picco per ogni allergene nella Guida integrata — per sapere cosa aspettarsi prima dell\'inizio della stagione.',
    'feat6.title': 'Condividi la previsione',
    'feat6.desc':  'Invia i livelli di polline di oggi ad amici o familiari come immagine o testo — comodo per coordinare attività all\'aria aperta.',

    // ── privacy.html ────────────────────────────────────────────────
    'page.title.privacy': 'Informativa sulla Privacy — canIbreathe',
    'policy.title': 'Informativa sulla Privacy',
    'policy.date':  'Data di entrata in vigore: 1 aprile 2025 &nbsp;·&nbsp; Ultimo aggiornamento: 9 maggio 2026',
    'policy.highlight': '<strong>In breve:</strong> canIbreathe non raccoglie, archivia né condivide informazioni personali sui nostri server. Il tuo profilo di posizione e allergie è memorizzato solo sul tuo dispositivo.',
    's1.h':    '1. Chi siamo',
    's1.body': 'canIbreathe è un progetto personale sviluppato da Arnau Tresserras. Per domande su questa informativa, contatta <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.',
    's2.h':    '2. Quali dati utilizza l\'app',
    's2.body': `
    <p>canIbreathe memorizza le seguenti informazioni <strong>solo sul tuo dispositivo</strong>, utilizzando lo spazio di archiviazione privato del dispositivo. Questi dati non lasciano mai il dispositivo e non vengono mai trasmessi ai nostri server:</p>
    <ul>
      <li><strong>Posizione</strong> — la città o la stazione di monitoraggio del polline che scegli manualmente nell'app. L'app non accede al GPS né alla posizione precisa del dispositivo.</li>
      <li><strong>Preferenze allergeni</strong> — l'elenco dei tipi di polline e allergeni che selezioni.</li>
      <li><strong>Impostazioni notifiche</strong> — se gli avvisi quotidiani sono attivi, l'orario e la soglia di avviso.</li>
      <li><strong>Preferenza tema</strong> — il tema di visualizzazione (chiaro, scuro o di sistema) che scegli nelle Impostazioni.</li>
      <li><strong>Preferenza lingua</strong> — la lingua di visualizzazione che scegli nelle Impostazioni.</li>
    </ul>
    <p>Puoi ripristinare tutti questi dati in qualsiasi momento tramite <em>Impostazioni → Ripristina configurazione</em>.</p>`,
    's3.h':    '3. Servizi di terze parti',
    's3.intro': 'Per fornire previsioni sul polline, l\'app comunica con i seguenti servizi esterni. Ogni richiesta viene effettuata direttamente dal tuo dispositivo.',
    's3.openmeteo': `<strong>Open-Meteo</strong> (<a href="https://open-meteo.com" target="_blank" rel="noopener">open-meteo.com</a>)<br>
    Utilizzato per ottenere previsioni sul polline per posizioni al di fuori della rete PIA. Le coordinate selezionate (latitudine e longitudine) vengono inviate come parte della richiesta API. Open-Meteo non richiede account e non traccia gli utenti singoli. Vedi i loro <a href="https://open-meteo.com/en/terms" target="_blank" rel="noopener">termini</a>.`,
    's3.pia': `<strong>PIA — Programma di Informazione Aerobiologica</strong> (<a href="https://aerobiologia.cat" target="_blank" rel="noopener">aerobiologia.cat</a>)<br>
    Utilizzato per ottenere dati dettagliati di stazioni di polline per la Catalogna e le Isole Baleari. Dati sotto licenza <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>.`,
    's3.nominatim': `<strong>Nominatim / OpenStreetMap</strong> (<a href="https://nominatim.org" target="_blank" rel="noopener">nominatim.org</a>)<br>
    Utilizzato per la ricerca di città durante la configurazione della posizione. Il testo digitato nel campo di ricerca della posizione viene inviato a Nominatim. Vedi la <a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener">informativa sulla privacy della Fondazione OpenStreetMap</a>.`,
    's3.sentry': `<strong>Sentry</strong> (<a href="https://sentry.io" target="_blank" rel="noopener">sentry.io</a>)<br>
    Utilizzato per la segnalazione di crash nelle versioni di produzione. In caso di crash, viene inviato automaticamente un rapporto di errore anonimizzato. I rapporti possono includere il modello del dispositivo, la versione del sistema operativo e uno stack trace. Nessun nome, indirizzo email o dettaglio account è incluso. Vedi la <a href="https://sentry.io/privacy/" target="_blank" rel="noopener">informativa sulla privacy di Sentry</a>.`,
    's3.posthog': `<strong>PostHog</strong> (<a href="https://posthog.com" target="_blank" rel="noopener">posthog.com</a>)<br>
    Utilizzato per analisi d'uso anonime (es. quali funzionalità vengono usate, quali lingue vengono selezionate). Gli eventi vengono acquisiti automaticamente e non includono informazioni identificative. I dati sono ospitati sui server europei di PostHog. Vedi la <a href="https://posthog.com/privacy" target="_blank" rel="noopener">informativa sulla privacy di PostHog</a>.`,
    's4.h':    '4. Notifiche',
    's4.body': 'Se attivi gli avvisi quotidiani, l\'app pianifica una notifica locale sul tuo dispositivo all\'orario che scegli. Le notifiche vengono generate localmente — non viene utilizzato alcun server di notifiche né servizio push. Puoi disattivare le notifiche in qualsiasi momento nelle Impostazioni dell\'app o nelle impostazioni di sistema del dispositivo.',
    's5.h':    '5. Privacy dei minori',
    's5.body': 'canIbreathe non è destinata a bambini di età inferiore ai 13 anni. Non raccogliamo consapevolmente informazioni da bambini.',
    's6.h':    '6. Modifiche a questa informativa',
    's6.body': 'Se apportiamo modifiche significative a questa informativa, aggiorneremo la data di "Ultimo aggiornamento" in cima a questa pagina. L\'uso continuato dell\'app dopo una modifica costituisce accettazione dell\'informativa aggiornata.',
    's7.h':    '7. Conservazione ed eliminazione dei dati',
    's7.body': `<ul>
      <li><strong>Dati sul dispositivo:</strong> Conservati sul tuo dispositivo finché non usi <em>Impostazioni → Ripristina dati</em> o disinstalli l'app. Non ne abbiamo alcuna copia sui nostri server.</li>
      <li><strong>Analisi (PostHog):</strong> Gli eventi di utilizzo anonimi sono conservati sui server europei di PostHog secondo la loro politica di conservazione (in genere 1 anno). Per richiederne l'eliminazione, contatta <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
      <li><strong>Rapporti di errore (Sentry):</strong> I rapporti di crash anonimizzati sono conservati sui server di Sentry per un massimo di 90 giorni. Per richiederne l'eliminazione, contatta <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
      <li><strong>Come eliminare i tuoi dati:</strong> Vai su <em>Impostazioni → Ripristina dati</em> per cancellare immediatamente tutti i dati locali dell'app. Per richieste di eliminazione di dati di terze parti, contatta <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
    </ul>`,
    's8.h':    '8. Contatto',
    's8.body': 'Domande o richieste riguardanti i tuoi dati possono essere inviate a <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.',
  },

  de: {
    // ── Shared ─────────────────────────────────────────────────────
    'nav.home':    'Startseite',
    'nav.privacy': 'Datenschutzerklärung',
    'lang-switcher.label': 'Sprache wechseln',
    'meta.description.index': 'Tägliche Pollen- und Allergenvorhersagen, zugeschnitten auf das, was dich betrifft. Verfügbar für iOS und Android.',
    'meta.description.privacy': 'Datenschutzerklärung der canIbreathe Pollen- und Allergenvorhersage-App.',
    'footer.privacy': 'Datenschutzerklärung',
    'footer.contact': 'Kontakt',
    'footer.copy': '&copy; 2026 Arnau Tresserras',

    // ── index.html ──────────────────────────────────────────────────
    'page.title.index': 'canIbreathe — Pollen- & Allergenvorhersage',
    'hero.subtitle': 'Tägliche Pollen- und Allergenvorhersagen, zugeschnitten auf die Pflanzen, die dich betreffen — um deinen Tag mit Zuversicht zu planen.',
    'android.label': 'Verfügbar · Android',
    'android.step.title': 'Bei Google Play laden',
    'android.step.desc':  'Für Android',
    'install.title':   'So installierst du die App',
    'ios.label':       'Verfügbar · iOS',
    'ios.step.title':  'Im App Store laden',
    'ios.step.desc':   'Für iPhone und iPad',
    'features.title':  'Was die App macht',
    'feat1.title': 'Nur deine Allergene',
    'feat1.desc':  'Wähle aus 27 Pollen und Sporen die aus, die dich betreffen. Die App zeigt nur das, was für dich relevant ist.',
    'feat2.title': 'Lokale Vorhersagen',
    'feat2.desc':  'Echte Stationsdaten für Katalonien und die Balearischen Inseln, plus globale Abdeckung über Open-Meteo. Verfolge mehrere Städte gleichzeitig.',
    'feat3.title': 'Tägliche Warnungen',
    'feat3.desc':  'Erhalte eine Benachrichtigung, wenn deine Allergene den gewählten Schwellenwert erreichen. Kein Lärm, nur das Nötigste.',
    'feat4.title': 'Sieben Sprachen',
    'feat4.desc':  'Verfügbar auf Englisch, Katalanisch, Spanisch, Französisch, Portugiesisch, Italienisch und Deutsch. Die App folgt automatisch der Gerätesprache.',
    'feat5.title': 'Pollensaison-Kalender',
    'feat5.desc':  'Sieh dir typische Saisonfenster und Spitzenmonate für jeden Allergen im integrierten Leitfaden an — damit du weißt, was auf dich zukommt, bevor die Saison beginnt.',
    'feat6.title': 'Vorhersage teilen',
    'feat6.desc':  'Sende die heutigen Pollenwerte als Bild oder Text an Freunde oder Familie — praktisch, um Outdoor-Aktivitäten zu koordinieren.',

    // ── privacy.html ────────────────────────────────────────────────
    'page.title.privacy': 'Datenschutzerklärung — canIbreathe',
    'policy.title': 'Datenschutzerklärung',
    'policy.date':  'Gültig ab: 1. April 2025 &nbsp;·&nbsp; Zuletzt aktualisiert: 9. Mai 2026',
    'policy.highlight': '<strong>Kurzfassung:</strong> canIbreathe erfasst, speichert oder teilt keine personenbezogenen Daten auf unseren Servern. Dein Standort- und Allergieprofil wird nur auf deinem Gerät gespeichert.',
    's1.h':    '1. Wer wir sind',
    's1.body': 'canIbreathe ist ein persönliches Projekt, entwickelt von Arnau Tresserras. Bei Fragen zu dieser Erklärung wende dich an <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.',
    's2.h':    '2. Welche Daten die App verwendet',
    's2.body': `
    <p>canIbreathe speichert folgende Informationen <strong>ausschließlich auf deinem Gerät</strong> im privaten Gerätespeicher. Diese Daten verlassen niemals dein Gerät und werden niemals an unsere Server übertragen:</p>
    <ul>
      <li><strong>Standort</strong> — die Stadt oder Pollenüberwachungsstation, die du manuell in der App auswählst. Die App greift weder auf GPS noch auf den genauen Standort des Geräts zu.</li>
      <li><strong>Allergeneinstellungen</strong> — die Liste der Pollenarten und Allergene, die du auswählst.</li>
      <li><strong>Benachrichtigungseinstellungen</strong> — ob tägliche Warnungen aktiviert sind, die Warnzeit und der Warnschwellenwert.</li>
      <li><strong>Thema-Einstellung</strong> — das Anzeigedesign (hell, dunkel oder System), das du in den Einstellungen wählst.</li>
      <li><strong>Spracheinstellung</strong> — die Anzeigesprache, die du in den Einstellungen wählst.</li>
    </ul>
    <p>Du kannst alle diese Daten jederzeit über <em>Einstellungen → Einführung zurücksetzen</em> zurücksetzen.</p>`,
    's3.h':    '3. Drittanbieterdienste',
    's3.intro': 'Um Pollenvorhersagen zu liefern, kommuniziert die App mit folgenden externen Diensten. Jede Anfrage wird direkt von deinem Gerät aus gestellt.',
    's3.openmeteo': `<strong>Open-Meteo</strong> (<a href="https://open-meteo.com" target="_blank" rel="noopener">open-meteo.com</a>)<br>
    Wird verwendet, um Pollenvorhersagen für Standorte außerhalb des PIA-Netzwerks abzurufen. Die ausgewählten Koordinaten (Breitengrad und Längengrad) werden als Teil der API-Anfrage gesendet. Open-Meteo erfordert kein Konto und verfolgt keine einzelnen Nutzer. Siehe deren <a href="https://open-meteo.com/en/terms" target="_blank" rel="noopener">Nutzungsbedingungen</a>.`,
    's3.pia': `<strong>PIA — Aerobiologisches Informationsprogramm</strong> (<a href="https://aerobiologia.cat" target="_blank" rel="noopener">aerobiologia.cat</a>)<br>
    Wird verwendet, um detaillierte stationsbasierte Pollendaten für Katalonien und die Balearischen Inseln abzurufen. Daten unter der Lizenz <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>.`,
    's3.nominatim': `<strong>Nominatim / OpenStreetMap</strong> (<a href="https://nominatim.org" target="_blank" rel="noopener">nominatim.org</a>)<br>
    Wird für die Städtesuche bei der Standortkonfiguration verwendet. Der Text, den du in das Standortsuchfeld eingibst, wird an Nominatim gesendet. Siehe die <a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener">Datenschutzerklärung der OpenStreetMap-Stiftung</a>.`,
    's3.sentry': `<strong>Sentry</strong> (<a href="https://sentry.io" target="_blank" rel="noopener">sentry.io</a>)<br>
    Wird für Absturzberichte in Produktions-Builds verwendet. Bei einem Absturz wird automatisch ein anonymisierter Fehlerbericht gesendet. Berichte können das Gerätemodell, die Betriebssystemversion und einen Stack-Trace enthalten. Keine Namen, E-Mail-Adressen oder Kontodaten sind enthalten. Siehe <a href="https://sentry.io/privacy/" target="_blank" rel="noopener">Sentrys Datenschutzerklärung</a>.`,
    's3.posthog': `<strong>PostHog</strong> (<a href="https://posthog.com" target="_blank" rel="noopener">posthog.com</a>)<br>
    Wird für anonyme Nutzungsanalysen verwendet (z. B. welche Funktionen genutzt werden, welche Sprachen ausgewählt werden). Ereignisse werden automatisch erfasst und enthalten keine personenbezogenen Daten. Die Daten werden auf PostHogs europäischen Servern gehostet. Siehe <a href="https://posthog.com/privacy" target="_blank" rel="noopener">PostHogs Datenschutzerklärung</a>.`,
    's4.h':    '4. Benachrichtigungen',
    's4.body': 'Wenn du tägliche Warnungen aktivierst, plant die App eine lokale Benachrichtigung auf deinem Gerät zur gewählten Zeit. Benachrichtigungen werden lokal generiert — es wird kein Benachrichtigungsserver oder Push-Dienst verwendet. Du kannst Benachrichtigungen jederzeit in den App-Einstellungen oder in den Systemeinstellungen deines Geräts deaktivieren.',
    's5.h':    '5. Datenschutz für Kinder',
    's5.body': 'canIbreathe richtet sich nicht an Kinder unter 13 Jahren. Wir erfassen wissentlich keine Informationen von Kindern.',
    's6.h':    '6. Änderungen dieser Erklärung',
    's6.body': 'Bei wesentlichen Änderungen dieser Erklärung werden wir das Datum "Zuletzt aktualisiert" oben auf dieser Seite aktualisieren. Die weitere Nutzung der App nach einer Änderung gilt als Zustimmung zur aktualisierten Erklärung.',
    's7.h':    '7. Datenspeicherung und -löschung',
    's7.body': `<ul>
      <li><strong>Gerätedaten:</strong> Werden auf deinem Gerät gespeichert, bis du <em>Einstellungen → Daten zurücksetzen</em> verwendest oder die App deinstallierst. Wir haben keine serverseitige Kopie.</li>
      <li><strong>Analyse (PostHog):</strong> Anonyme Nutzungsereignisse werden gemäß der Aufbewahrungsrichtlinie von PostHog auf deren EU-Servern gespeichert (in der Regel 1 Jahr). Um die Löschung zu beantragen, wende dich an <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
      <li><strong>Fehlerberichte (Sentry):</strong> Anonymisierte Absturzberichte werden bis zu 90 Tage auf den Servern von Sentry gespeichert. Um die Löschung zu beantragen, wende dich an <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
      <li><strong>So löschst du deine Daten:</strong> Gehe zu <em>Einstellungen → Daten zurücksetzen</em>, um alle lokalen App-Daten sofort zu löschen. Für Löschanfragen zu Drittanbieterdaten wende dich an <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a>.</li>
    </ul>`,
    's8.h':    '8. Kontakt',
    's8.body': 'Fragen oder Anfragen zu deinen Daten können an <a href="mailto:arnautresserras@gmail.com">arnautresserras@gmail.com</a> gesendet werden.',
  },
};

const LANGS = ['ca', 'en', 'es', 'fr', 'pt', 'it', 'de'];

function detectLang() {
  const saved = localStorage.getItem('cib-lang');
  if (saved && LANGS.includes(saved)) return saved;
  const browser = (navigator.language || '').slice(0, 2).toLowerCase();
  if (LANGS.includes(browser)) return browser;
  return 'ca';
}

function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  localStorage.setItem('cib-lang', lang);
  document.documentElement.lang = lang;

  // Update page title if a key is specified
  const titleKey = document.body.dataset.titleKey;
  if (titleKey && t[titleKey]) document.title = t[titleKey].replace(/&copy;/g, '©');

  // Apply all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.dataset.i18nAriaLabel;
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  document.querySelectorAll('[data-i18n-content]').forEach(el => {
    const key = el.dataset.i18nContent;
    if (t[key] !== undefined) el.setAttribute('content', t[key]);
  });

  // Update toggle display and active state on lang buttons
  const current = document.querySelector('.lang-current');
  if (current) current.textContent = lang.toUpperCase();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const switcher = document.querySelector('.lang-switcher');
  const toggle = document.querySelector('.lang-toggle');

  function closeMenu() {
    if (!switcher) return;
    switcher.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && switcher) {
    toggle.addEventListener('click', e => {
      e.stopPropagation();
      const open = switcher.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });

    document.addEventListener('click', closeMenu);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.dataset.lang);
      closeMenu();
    });
  });

  applyLang(detectLang());
});
