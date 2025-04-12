import { defineRouting } from 'next-intl/routing';

// Define supported languages and default locale for the application
export const routing = defineRouting({
    locales: ['en', 'zh', 'es', 'fr'],
    defaultLocale: 'en'
});