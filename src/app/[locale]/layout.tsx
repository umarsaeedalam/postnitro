// External libraries
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations, getMessages } from 'next-intl/server';
import { Inter } from "next/font/google";
import { notFound } from 'next/navigation';

// Local imports
import { routing } from '@/i18n/routing';
import Header from '@/components/blocks/header';

// Styles
import '@/app/globals.css'


// Generate metadata for SEO with localized description
export async function generateMetadata({ params }: { params: Promise<{ locale: string }>;}) {
    const { locale } = await params;

    const t = await getTranslations({
        locale: locale,
        namespace: 'Layout'
    });
    
    return {
        title: {
            template: 'PostNitro: %s',
            default: 'PostNitro'
        },
        description: t('description'),
    };
}

// Configure font for the application
const inter = Inter({
    subsets: ["latin"]
})

 
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }>;}) {
    const { locale } = await params;

    // Redirect to 404 if locale isn't supported
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = await getMessages();
    
    return (
        <html lang={locale}>
            <body className={`${inter.className} antialiased`}>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <Header />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}