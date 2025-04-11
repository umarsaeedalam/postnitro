import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
    title: {
        template: 'PostNitro: %s',
        default: 'PostNitro'
    },
    description: 'AI-Powered Carousel Generator for Instagram, LinkedIn & More',
};

const inter = Inter({
    subsets: ["latin"]
})
 
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{locale: string}>;}) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    
    return (
        <html lang={locale}>
            <body className={`${inter.className} antialiased`}>
                <NextIntlClientProvider>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}