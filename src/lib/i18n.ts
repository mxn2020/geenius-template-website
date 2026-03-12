const translations: Record<string, Record<string, string>> = {
  en: {
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong',
    'common.retry': 'Try Again',
    'common.save': 'Save Changes',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.create': 'Create',
    'common.search': 'Search',
    'common.noResults': 'No results found',
    'common.signIn': 'Sign In',
    'common.signOut': 'Sign Out',
    'common.signUp': 'Sign Up',
    'common.getStarted': 'Get Started',
    'common.viewOnGithub': 'View on GitHub',
    'common.allRightsReserved': 'All rights reserved.',

    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.links': 'Links',
    'nav.contact': 'Contact',

    // Home page
    'home.badge': 'Powered by Geenius UI',
    'home.title.prefix': 'Build Beautiful',
    'home.title.highlight': ' Websites ',
    'home.title.suffix': 'Faster',
    'home.subtitle': 'Start with this template and customize it to match your brand.',
    'home.features.title': 'Everything You Need',
    'home.features.subtitle': 'A production-ready template with all the tools and patterns you need to build amazing websites.',
    'home.feature.fast.title': 'Blazing Fast',
    'home.feature.fast.desc': 'Built with Vite and React for instant HMR and optimized production builds.',
    'home.feature.safe.title': 'Type Safe',
    'home.feature.safe.desc': 'Full TypeScript support with strict mode for reliable, maintainable code.',
    'home.feature.i18n.title': 'i18n Ready',
    'home.feature.i18n.desc': 'Built-in internationalization support with lightweight translation utilities.',

    // About page
    'about.title': 'About',
    'about.intro': 'This is a starter template built with React, Tailwind CSS 4, and Geenius UI. It includes everything you need to build a beautiful marketing website.',
    'about.techStack': 'Tech Stack',
  },
  de: {
    'common.loading': 'Wird geladen...',
    'common.error': 'Etwas ist schiefgelaufen',
    'common.retry': 'Erneut versuchen',
    'common.save': 'Änderungen speichern',
    'common.cancel': 'Abbrechen',
    'common.delete': 'Löschen',
    'common.edit': 'Bearbeiten',
    'common.create': 'Erstellen',
    'common.search': 'Suchen',
    'common.noResults': 'Keine Ergebnisse gefunden',
    'common.signIn': 'Anmelden',
    'common.signOut': 'Abmelden',
    'common.signUp': 'Registrieren',
    'common.getStarted': 'Loslegen',
    'common.viewOnGithub': 'Auf GitHub ansehen',
    'common.allRightsReserved': 'Alle Rechte vorbehalten.',

    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.links': 'Links',
    'nav.contact': 'Kontakt',

    'home.badge': 'Powered by Geenius UI',
    'home.title.prefix': 'Erstelle schöne',
    'home.title.highlight': ' Webseiten ',
    'home.title.suffix': 'schneller',
    'home.subtitle': 'Starte mit diesem Template und passe es an deine Marke an.',
    'home.features.title': 'Alles was du brauchst',
    'home.features.subtitle': 'Ein produktionsreifes Template mit allen Tools und Patterns, die du brauchst.',
    'home.feature.fast.title': 'Blitzschnell',
    'home.feature.fast.desc': 'Gebaut mit Vite und React für sofortiges HMR und optimierte Builds.',
    'home.feature.safe.title': 'Typsicher',
    'home.feature.safe.desc': 'Volle TypeScript-Unterstützung mit Strict Mode.',
    'home.feature.i18n.title': 'i18n-fähig',
    'home.feature.i18n.desc': 'Eingebaute Internationalisierungs-Unterstützung.',

    'about.title': 'Über uns',
    'about.intro': 'Dies ist ein Starter-Template, gebaut mit React, Tailwind CSS 4 und Geenius UI.',
    'about.techStack': 'Tech Stack',
  },
};

let currentLocale = 'en';

export function setLocale(locale: string): void {
  if (translations[locale]) {
    currentLocale = locale;
  }
}

export function getLocale(): string {
  return currentLocale;
}

export function t(key: string): string {
  return translations[currentLocale]?.[key] ?? translations['en']?.[key] ?? key;
}

export function getSupportedLocales(): string[] {
  return Object.keys(translations);
}
