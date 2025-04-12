import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

// Configure server-side internationalization for incoming requests
export default getRequestConfig(async ({requestLocale}) => {
    const requested = await requestLocale;

    //Fallback to default locale if requested locale isn't supported
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;
    
    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});