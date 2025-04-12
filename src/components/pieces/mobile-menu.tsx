"use client"

// Library Imports
import { useState } from "react";
import { useTranslations } from 'next-intl';
import { MenuIcon } from "lucide-react";

// Local Imports
import { Link } from "@/i18n/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/shadcn/sheet"


function MobileMenu() {
    // Control sheet open/close state
    const [open, setOpen] = useState(false)

    // Get translations for the header
    const t = useTranslations('Header');

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            {/* Hamburger menu trigger button */}
            <SheetTrigger className="p-2 rounded-md hover:bg-jade-500/10 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5">
                <MenuIcon />
            </SheetTrigger>

            {/* Mobile navigation overlay */}
            <SheetContent side='top' className="w-full h-full flex items-center">
                <header className="mt-10">
                    <nav>
                        <ul className="flex flex-col gap-8 items-center">
                            {/* Home link */}
                            <li><Link href="/" onClick={() => setOpen(false)} className="text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">{t('home')}</Link></li>
                            
                            {/* Getting Started Section */}
                            <li>
                                <p className="font-semibold text-slate-500 text-lg">{t('navigation.gettingStarted')}</p>
                                <ul className="flex flex-col gap-2 mt-3 items-center">
                                    {/* Documentation */}
                                    <li><Link href="https://postnitro.ai/docs" className="text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">{t('dropdowns.gettingStarted.docs')}</Link></li>
                                    {/* Blog */}
                                    <li><Link href="https://postnitro.ai/blog" className="text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">{t('dropdowns.gettingStarted.blog')}</Link></li>
                                    {/* Affiliates */}
                                    <li><Link href="https://ls.postnitro.ai/affiliates" className="text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">{t('dropdowns.gettingStarted.affiliates')}</Link></li>
                                </ul>
                            </li>
                            
                            {/* Products Section */}
                            <li>
                                <p className="font-semibold text-slate-500 text-lg text-center">{t('navigation.products')}</p>
                                <ul className="flex flex-col gap-2 mt-3 items-center">
                                    {/* LinkedIn carousel */}
                                    <li><Link href="/carousels/linkedin" className="text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">{t('dropdowns.products.linkedinCarousel')}</Link></li>
                                    {/* Instagram carousel */}
                                    <li><Link href="/carousels/instagram" className="text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">{t('dropdowns.products.instagramCarousel')}</Link></li>
                                    {/* TikTok carousel */}
                                    <li><Link href="/carousels/tiktok" className="text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">{t('dropdowns.products.tiktokCarousel')}</Link></li>
                                    {/* Twitter/X carousel */}
                                    <li><Link href="/carousels/x-twitter" className="text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">{t('dropdowns.products.twitterCarousel')}</Link></li>
                                    {/* Embed product */}
                                    <li><Link href="/products/embed" className="text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">{t('dropdowns.products.embed')}</Link></li>
                                    {/* Extension product */}
                                    <li><Link href="/products/extension" className="text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">{t('dropdowns.products.extension')}</Link></li>
                                </ul>
                            </li>
                        
                            {/* Free Tools Section */}
                            <li>
                                <p className="font-semibold text-slate-500 text-lg text-center">{t('navigation.freeTools')}</p>
                                <ul className="flex flex-col gap-2 mt-3 items-center">
                                    {/* Twitter banner maker */}
                                    <li><Link href="/free-ai-tools/twitter-free-banner-header-image-maker" className="text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">{t('dropdowns.freeTools.twitterBannerMaker')}</Link></li>
                                    {/* LinkedIn banner maker */}
                                    <li><Link href="/free-ai-tools/linkedin-free-banner-header-image-maker" className="text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">{t('dropdowns.freeTools.linkedinBannerMaker')}</Link></li>
                                    {/* Instagram grid maker */}
                                    <li><Link href="/free-ai-tools/instagram-free-image-splitter-grid-maker" className="text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">{t('dropdowns.freeTools.instagramGridMaker')}</Link></li>
                                    {/* LinkedIn text formatter */}
                                    <li><Link href="/free-ai-tools/linkedin-free-text-formatter" className="text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">{t('dropdowns.freeTools.linkedinTextFormatter')}</Link></li>
                                    {/* LinkedIn post generator */}
                                    <li><Link href="/free-ai-tools/linkedin-free-post-generator" className="text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">{t('dropdowns.freeTools.linkedinPostGenerator')}</Link></li>
                                </ul>
                            </li>
                        
                            {/* Plans link */}
                            <li><Link href="/plans" onClick={() => setOpen(false)} className="text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">{t('navigation.plans')}</Link></li>
                        </ul>
                    </nav>
                </header>
            </SheetContent>
        </Sheet>
    );
}

export default MobileMenu;