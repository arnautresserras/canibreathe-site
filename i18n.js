const TRANSLATIONS = {
  ca: {
    // ── Shared ──────────────────────────────────────────────────
    'nav.home':    'Inici',
    'nav.privacy': 'Política de privacitat',
    'footer.privacy': 'Política de privacitat',
    'footer.contact': 'Contacte',
    'footer.copy': '&copy; 2025 Arnau Tresserras',

    // ── index.html ───────────────────────────────────────────────
    'page.title.index': 'canIbreathe — Previsió de pol·len i al·lèrgens',
    'hero.subtitle': 'Previsions diàries de pol·len i al·lèrgens adaptades a les plantes que t\'afecten — per planificar el teu dia amb confiança.',
    'badge.get-on': 'Disponible a',
    'features.title': 'Què fa',
    'feat1.title': 'Els teus al·lèrgens',
    'feat1.desc':  'Tria els pol·lens i espores que t\'afecten. L\'app mostra només el que t\'importa, no tot alhora.',
    'feat2.title': 'Previsions locals',
    'feat2.desc':  'Dades detallades d\'estació per a Catalunya i les Illes Balears, amb cobertura global gràcies a Open-Meteo.',
    'feat3.title': 'Alertes diàries',
    'feat3.desc':  'Rep una notificació al matí quan els teus al·lèrgens arribin al nivell que tries. Sense soroll, just el que necessites.',
    'feat4.title': 'Tres idiomes',
    'feat4.desc':  'Disponible en anglès, català i castellà. L\'app segueix l\'idioma del dispositiu automàticament.',

    // ── privacy.html ─────────────────────────────────────────────
    'page.title.privacy': 'Política de privacitat — canIbreathe',
    'policy.title': 'Política de privacitat',
    'policy.date':  'Data d\'efecte: 1 d\'abril de 2025 &nbsp;·&nbsp; Darrera actualització: 1 d\'abril de 2025',
    'policy.highlight': '<strong>Resum breu:</strong> canIbreathe no recull, emmagatzema ni comparteix cap informació personal als nostres servidors. El teu perfil de localització i al·lèrgies es desa únicament al teu dispositiu.',
    's1.h': '1. Qui som',
    's1.body': 'canIbreathe és un projecte personal desenvolupat per Arnau Tresserras. Si tens alguna pregunta sobre aquesta política, posa\'t en contacte a <a href="mailto:arnau@tresserras.dev">arnau@tresserras.dev</a>.',
    's2.h': '2. Quines dades utilitza l\'app',
    's2.body': `
      <p>canIbreathe desa la informació següent <strong>únicament al teu dispositiu</strong>, usant l'emmagatzematge privat del dispositiu. Aquestes dades mai no surten del dispositiu ni es transmeten als nostres servidors:</p>
      <ul>
        <li><strong>Localització</strong> — la ciutat o estació de seguiment de pol·len que tries manualment dins l'app. L'app no accedeix al GPS ni a la ubicació precisa del dispositiu.</li>
        <li><strong>Preferències d'al·lèrgens</strong> — la llista de tipus de pol·len i al·lèrgens que selecciones.</li>
        <li><strong>Configuració de notificacions</strong> — si les alertes diàries estan activades, l'hora d'alerta i el llindar d'alerta.</li>
        <li><strong>Preferència d'idioma</strong> — l'idioma de visualització que tries a Configuració.</li>
      </ul>
      <p>Pots restablir totes aquestes dades en qualsevol moment des de <em>Configuració → Restablir incorporació</em>.</p>`,
    's3.h': '3. Serveis de tercers',
    's3.intro': 'Per oferir previsions de pol·len, l\'app es comunica amb els serveis externs següents. Cada petició es fa directament des del teu dispositiu.',
    's3.openmeteo': `<strong>Open-Meteo</strong> (<a href="https://open-meteo.com" target="_blank" rel="noopener">open-meteo.com</a>)<br>
      S'utilitza per obtenir previsions de pol·len per a localitzacions fora de la xarxa PIA. Les coordenades seleccionades (latitud i longitud) s'envien com a part de la petició a l'API. Open-Meteo no requereix compte i no fa seguiment dels usuaris individuals. Vegeu els seus <a href="https://open-meteo.com/en/terms" target="_blank" rel="noopener">termes</a>.`,
    's3.pia': `<strong>PIA — Programa d'Informació Aerobiològica</strong> (<a href="https://aerobiologia.cat" target="_blank" rel="noopener">aerobiologia.cat</a>)<br>
      S'utilitza per obtenir dades detallades d'estació de pol·len per a Catalunya i les Illes Balears. Les peticions es fan a través d'un proxy de Cloudflare Worker per evitar restriccions CORS; el proxy remet la petició i no registra informació personal. Dades proporcionades sota <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>.`,
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
    's7.h': '7. Contacte',
    's7.body': 'Les preguntes o sol·licituds sobre les teves dades es poden enviar a <a href="mailto:arnau@tresserras.dev">arnau@tresserras.dev</a>.',
  },

  en: {
    // ── Shared ──────────────────────────────────────────────────
    'nav.home':    'Home',
    'nav.privacy': 'Privacy policy',
    'footer.privacy': 'Privacy policy',
    'footer.contact': 'Contact',
    'footer.copy': '&copy; 2025 Arnau Tresserras',

    // ── index.html ───────────────────────────────────────────────
    'page.title.index': 'canIbreathe — Pollen & Allergen Forecast',
    'hero.subtitle': 'Daily pollen and allergen forecasts tailored to the plants that affect you — so you can plan your day with confidence.',
    'badge.get-on': 'Get it on',
    'features.title': 'What it does',
    'feat1.title': 'Your allergens only',
    'feat1.desc':  'Pick the pollens and spores that affect you. The app shows only what matters to you, not everything at once.',
    'feat2.title': 'Local forecasts',
    'feat2.desc':  'Detailed station data for Catalonia and the Balearic Islands, plus global coverage powered by Open-Meteo.',
    'feat3.title': 'Daily alerts',
    'feat3.desc':  'Get a morning notification when your tracked allergens reach the level you choose. No noise, just what you need.',
    'feat4.title': 'Three languages',
    'feat4.desc':  'Available in English, Català, and Español. The app follows your device language automatically.',

    // ── privacy.html ─────────────────────────────────────────────
    'page.title.privacy': 'Privacy Policy — canIbreathe',
    'policy.title': 'Privacy Policy',
    'policy.date':  'Effective date: 1 April 2025 &nbsp;·&nbsp; Last updated: 1 April 2025',
    'policy.highlight': '<strong>Short version:</strong> canIbreathe does not collect, store, or share any personal information on our servers. Your location and allergy profile are stored only on your device.',
    's1.h': '1. Who we are',
    's1.body': 'canIbreathe is a personal project developed by Arnau Tresserras. If you have any questions about this policy, please contact <a href="mailto:arnau@tresserras.dev">arnau@tresserras.dev</a>.',
    's2.h': '2. What data the app uses',
    's2.body': `
      <p>canIbreathe stores the following information <strong>locally on your device only</strong>, using your device's private storage. This data never leaves your device and is never transmitted to our servers:</p>
      <ul>
        <li><strong>Location</strong> — the city or pollen monitoring station you choose manually within the app. The app does not access your device's GPS or precise location.</li>
        <li><strong>Allergen preferences</strong> — the list of pollen types and allergens you select.</li>
        <li><strong>Notification settings</strong> — whether daily alerts are enabled, the alert time, and the alert threshold.</li>
        <li><strong>Language preference</strong> — the display language you choose in Settings.</li>
      </ul>
      <p>You can reset all of this data at any time via <em>Settings → Reset onboarding</em>.</p>`,
    's3.h': '3. Third-party services',
    's3.intro': 'To provide pollen forecasts the app communicates with the following external services. Each request is made directly from your device.',
    's3.openmeteo': `<strong>Open-Meteo</strong> (<a href="https://open-meteo.com" target="_blank" rel="noopener">open-meteo.com</a>)<br>
      Used to fetch pollen forecasts for locations outside the PIA network. Your selected coordinates (latitude and longitude) are sent as part of the API request. Open-Meteo does not require an account and does not track individual users. See their <a href="https://open-meteo.com/en/terms" target="_blank" rel="noopener">terms</a>.`,
    's3.pia': `<strong>PIA — Aerobiological Information Programme</strong> (<a href="https://aerobiologia.cat" target="_blank" rel="noopener">aerobiologia.cat</a>)<br>
      Used to fetch detailed station-based pollen data for Catalonia and the Balearic Islands. Requests are routed through a Cloudflare Worker proxy to work around CORS restrictions; the proxy forwards the request and does not log personal information. Data is provided under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>.`,
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
    's7.h': '7. Contact',
    's7.body': 'Questions or requests regarding your data can be sent to <a href="mailto:arnau@tresserras.dev">arnau@tresserras.dev</a>.',
  },

  es: {
    // ── Shared ──────────────────────────────────────────────────
    'nav.home':    'Inicio',
    'nav.privacy': 'Política de privacidad',
    'footer.privacy': 'Política de privacidad',
    'footer.contact': 'Contacto',
    'footer.copy': '&copy; 2025 Arnau Tresserras',

    // ── index.html ───────────────────────────────────────────────
    'page.title.index': 'canIbreathe — Previsión de polen y alérgenos',
    'hero.subtitle': 'Previsiones diarias de polen y alérgenos adaptadas a las plantas que te afectan — para planificar tu día con confianza.',
    'badge.get-on': 'Disponible en',
    'features.title': 'Qué hace',
    'feat1.title': 'Tus alérgenos',
    'feat1.desc':  'Elige los pólenes y esporas que te afectan. La app muestra solo lo que te importa, no todo a la vez.',
    'feat2.title': 'Previsiones locales',
    'feat2.desc':  'Datos detallados de estación para Cataluña y las Islas Baleares, con cobertura global gracias a Open-Meteo.',
    'feat3.title': 'Alertas diarias',
    'feat3.desc':  'Recibe una notificación por la mañana cuando tus alérgenos alcancen el nivel que eliges. Sin ruido, solo lo que necesitas.',
    'feat4.title': 'Tres idiomas',
    'feat4.desc':  'Disponible en inglés, catalán y español. La app sigue el idioma del dispositivo automáticamente.',

    // ── privacy.html ─────────────────────────────────────────────
    'page.title.privacy': 'Política de privacidad — canIbreathe',
    'policy.title': 'Política de privacidad',
    'policy.date':  'Fecha de entrada en vigor: 1 de abril de 2025 &nbsp;·&nbsp; Última actualización: 1 de abril de 2025',
    'policy.highlight': '<strong>Resumen breve:</strong> canIbreathe no recopila, almacena ni comparte ningún dato personal en nuestros servidores. Tu perfil de localización y alergias se guarda únicamente en tu dispositivo.',
    's1.h': '1. Quiénes somos',
    's1.body': 'canIbreathe es un proyecto personal desarrollado por Arnau Tresserras. Si tienes alguna pregunta sobre esta política, ponte en contacto en <a href="mailto:arnau@tresserras.dev">arnau@tresserras.dev</a>.',
    's2.h': '2. Qué datos utiliza la app',
    's2.body': `
      <p>canIbreathe guarda la siguiente información <strong>únicamente en tu dispositivo</strong>, usando el almacenamiento privado del dispositivo. Estos datos nunca abandonan el dispositivo ni se transmiten a nuestros servidores:</p>
      <ul>
        <li><strong>Localización</strong> — la ciudad o estación de seguimiento de polen que eliges manualmente dentro de la app. La app no accede al GPS ni a la ubicación precisa del dispositivo.</li>
        <li><strong>Preferencias de alérgenos</strong> — la lista de tipos de polen y alérgenos que seleccionas.</li>
        <li><strong>Configuración de notificaciones</strong> — si las alertas diarias están activadas, la hora de alerta y el umbral de alerta.</li>
        <li><strong>Preferencia de idioma</strong> — el idioma de visualización que eliges en Configuración.</li>
      </ul>
      <p>Puedes restablecer todos estos datos en cualquier momento desde <em>Configuración → Restablecer incorporación</em>.</p>`,
    's3.h': '3. Servicios de terceros',
    's3.intro': 'Para ofrecer previsiones de polen, la app se comunica con los siguientes servicios externos. Cada solicitud se realiza directamente desde tu dispositivo.',
    's3.openmeteo': `<strong>Open-Meteo</strong> (<a href="https://open-meteo.com" target="_blank" rel="noopener">open-meteo.com</a>)<br>
      Se utiliza para obtener previsiones de polen para ubicaciones fuera de la red PIA. Las coordenadas seleccionadas (latitud y longitud) se envían como parte de la solicitud a la API. Open-Meteo no requiere cuenta y no realiza seguimiento de usuarios individuales. Consulta sus <a href="https://open-meteo.com/en/terms" target="_blank" rel="noopener">términos</a>.`,
    's3.pia': `<strong>PIA — Programa de Información Aerobiológica</strong> (<a href="https://aerobiologia.cat" target="_blank" rel="noopener">aerobiologia.cat</a>)<br>
      Se utiliza para obtener datos detallados de estación de polen para Cataluña y las Islas Baleares. Las solicitudes se enrutan a través de un proxy de Cloudflare Worker para evitar restricciones CORS; el proxy reenvía la solicitud y no registra información personal. Datos proporcionados bajo <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>.`,
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
    's7.h': '7. Contacto',
    's7.body': 'Las preguntas o solicitudes sobre tus datos pueden enviarse a <a href="mailto:arnau@tresserras.dev">arnau@tresserras.dev</a>.',
  },
};

const LANGS = ['ca', 'en', 'es'];

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

  // Update active state on lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Wire up lang switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  applyLang(detectLang());
});
