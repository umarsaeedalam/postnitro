"use client";

// Libraries Impports
import { useTranslations } from 'next-intl';

// Local Imports
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/shadcn/navigation-menu";
import { Link } from "@/i18n/navigation";


function NavMenu() {
    // // Get translations for the header
    const t = useTranslations('Header');

    // Extract common classes for reuse
    const triggerClasses = "font-semibold text-base max-[1290px]:text-[15px] hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5";
    const linkClasses = "max-[1290px]:text-[13px]";

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* Getting Started Section */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={triggerClasses}>
                        {t('navigation.gettingStarted')}
                    </NavigationMenuTrigger>
                    
                    {/* Dropdown panel */}
                    <NavigationMenuContent className="font-semibold z-50 bg-white">
                        <ul>
                            {/* Documentation */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/docs" className={linkClasses}>
                                        {t('dropdowns.gettingStarted.docs')}
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            
                            {/* Blog */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/blog" className={linkClasses}>
                                        {t('dropdowns.gettingStarted.blog')}
                                    </Link>
                                </NavigationMenuLink>
                            </li>

                            {/* Affiliates */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://ls.postnitro.ai/affiliates" className={linkClasses}>
                                        {t('dropdowns.gettingStarted.affiliates')}
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Products Section */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={`${triggerClasses} tracking-tight`}>
                        {t('navigation.products')}
                    </NavigationMenuTrigger>
                    
                    {/* White dropdown panel */}
                    <NavigationMenuContent className="font-semibold z-50 bg-white">
                        <ul>
                            {/* LinkedIn carousel*/}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="/carousels/linkedin" className={`pr-10 whitespace-nowrap ${linkClasses}`}>
                                        {t('dropdowns.products.linkedinCarousel')}
                                    </Link>
                                </NavigationMenuLink>
                            </li>

                            {/* Instagram carousel*/}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="/carousels/instagram" className={`whitespace-nowrap ${linkClasses}`}>
                                        {t('dropdowns.products.instagramCarousel')}
                                    </Link>
                                </NavigationMenuLink>
                            </li>

                            {/* TikTok carousel */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="/carousels/tiktok" className={linkClasses}>
                                        {t('dropdowns.products.tiktokCarousel')}
                                    </Link>
                                </NavigationMenuLink>
                            </li>

                            {/* Twitter/X carousel */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="/carousels/x-twitter" className={linkClasses}>
                                        {t('dropdowns.products.twitterCarousel')}
                                    </Link>
                                </NavigationMenuLink>
                            </li>

                            {/* Embed product */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="/products/embed" className={linkClasses}>
                                        {t('dropdowns.products.embed')}
                                    </Link>
                                </NavigationMenuLink>
                            </li>

                            {/* Extension product */}
                            <li>
                                <NavigationMenuLink asChild>
                                        <Link href="/products/extension" className={linkClasses}>
                                            {t('dropdowns.products.extension')}
                                        </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Free Tools Section*/}
                <NavigationMenuItem className="z-50 bg-white">
                    <NavigationMenuTrigger className={`${triggerClasses} tracking-tight`}>
                        {t('navigation.freeTools')}
                    </NavigationMenuTrigger>
                    
                    {/* Free tools dropdown  */}
                    <NavigationMenuContent>
                        <ul className="font-semibold">
                            {/* Twitter banner maker */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="/free-ai-tools/twitter-free-banner-header-image-maker" className={`whitespace-nowrap !pr-10 ${linkClasses}`}>
                                        {t('dropdowns.freeTools.twitterBannerMaker')}
                                    </Link>
                                </NavigationMenuLink>
                            </li>

                            {/* LinkedIn banner maker */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="/free-ai-tools/linkedin-free-banner-header-image-maker" className={linkClasses}>
                                        {t('dropdowns.freeTools.linkedinBannerMaker')}
                                    </Link>
                                </NavigationMenuLink>
                            </li>

                            {/* Instagram grid maker */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="/free-ai-tools/instagram-free-image-splitter-grid-maker" className={linkClasses}>
                                        {t('dropdowns.freeTools.instagramGridMaker')}
                                    </Link>
                                </NavigationMenuLink>
                            </li>

                            {/* LinkedIn text formatter */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="/free-ai-tools/linkedin-free-text-formatter" className={linkClasses}>
                                        {t('dropdowns.freeTools.linkedinTextFormatter')}
                                    </Link>
                                </NavigationMenuLink>
                            </li>

                            {/* LinkedIn post generator */}
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="/free-ai-tools/linkedin-free-post-generator" className={linkClasses}>
                                        {t('dropdowns.freeTools.linkedinPostGenerator')}
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Plans - Direct link with no dropdown */}
                <NavigationMenuItem>
                    <NavigationMenuLink 
                        asChild 
                        className={`${navigationMenuTriggerStyle()} hover:cursor-pointer font-semibold text-base max-[1290px]:text-[15px] tracking-tight transition-all duration-150 transform active:translate-y-0.5`}
                    >
                        <Link href="/plans" passHref>
                            {t('navigation.plans')}
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default NavMenu;