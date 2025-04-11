import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter } from "next/font/google";
import Header from '@/components/blocks/header';
import '@/app/globals.css'
import { getTranslations, getMessages } from 'next-intl/server';


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

const inter = Inter({
    subsets: ["latin"]
})

 
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }>;}) {
    const { locale } = await params;

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