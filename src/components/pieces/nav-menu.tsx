"use client"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/shadcn/navigation-menu"
import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/navigation";

function NavMenu() {
    const t = useTranslations('Header');

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* Item 1 */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-semibold text-base max-[1290px]:text-[15px] hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5">{t('navigation.gettingStarted')}</NavigationMenuTrigger>
                    
                    <NavigationMenuContent className="font-semibold z-50 bg-white">
                        <ul>
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/docs" className="max-[1290px]:text-[13px]">{t('dropdowns.gettingStarted.docs')}</Link>
                                </NavigationMenuLink>
                            </li>
                            
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/blog" className="max-[1290px]:text-[13px]">{t('dropdowns.gettingStarted.blog')}</Link>
                                </NavigationMenuLink>
                            </li>

                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://ls.postnitro.ai/affiliates" className="max-[1290px]:text-[13px]">{t('dropdowns.gettingStarted.affiliates')}</Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Item 2 */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-semibold hover:cursor-pointer tracking-tight text-base max-[1290px]:text-[15px] transition-all duration-150 transform active:translate-y-0.5">{t('navigation.products')}</NavigationMenuTrigger>
                    
                    <NavigationMenuContent className="font-semibold z-50 bg-white">
                        <ul>
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/carousels/linkedin" className="pr-10 whitespace-nowrap max-[1290px]:text-[13px]">{t('dropdowns.products.linkedinCarousel')}</Link>
                                </NavigationMenuLink>

                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/carousels/instagram" className="whitespace-nowrap max-[1290px]:text-[13px]">{t('dropdowns.products.instagramCarousel')}</Link>
                                </NavigationMenuLink>

                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/carousels/tiktok" className="max-[1290px]:text-[13px]">{t('dropdowns.products.tiktokCarousel')}</Link>
                                </NavigationMenuLink>

                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/carousels/x-twitter" className="max-[1290px]:text-[13px]">{t('dropdowns.products.twitterCarousel')}</Link>
                                </NavigationMenuLink>

                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/products/embed" className="max-[1290px]:text-[13px]">{t('dropdowns.products.embed')}</Link>
                                </NavigationMenuLink>

                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/products/extension" className="max-[1290px]:text-[13px]">{t('dropdowns.products.extension')}</Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Item 3 */}
                <NavigationMenuItem className="z-50 bg-white">
                    <NavigationMenuTrigger className="font-semibold hover:cursor-pointer tracking-tight text-base max-[1290px]:text-[15px] transition-all duration-150 transform active:translate-y-0.5">{t('navigation.freeTools')}</NavigationMenuTrigger>
                    
                    <NavigationMenuContent>
                        <ul className="font-semibold">
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/free-ai-tools/twitter-free-banner-header-image-maker" className="whitespace-nowrap !pr-10 max-[1290px]:text-[13px]">{t('dropdowns.freeTools.twitterBannerMaker')}</Link>
                                </NavigationMenuLink>
                            </li>

                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/free-ai-tools/linkedin-free-banner-header-image-maker" className="max-[1290px]:text-[13px]">{t('dropdowns.freeTools.linkedinBannerMaker')}</Link>
                                </NavigationMenuLink>
                            </li>

                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/free-ai-tools/instagram-free-image-splitter-grid-maker" className="max-[1290px]:text-[13px]">{t('dropdowns.freeTools.instagramGridMaker')}</Link>
                                </NavigationMenuLink>
                            </li>

                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/free-ai-tools/linkedin-free-text-formatter" className="max-[1290px]:text-[13px]">{t('dropdowns.freeTools.linkedinTextFormatter')}</Link>
                                </NavigationMenuLink>
                            </li>

                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/free-ai-tools/linkedin-free-post-generator" className="max-[1290px]:text-[13px]">{t('dropdowns.freeTools.linkedinPostGenerator')}</Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Item 4 */}
                <NavigationMenuItem>
                        <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} hover:cursor-pointer font-semibold text-base max-[1290px]:text-[15px] tracking-tight transition-all duration-150 transform active:translate-y-0.5`}>
                            <Link href="/plans" passHref>
                                {t('navigation.plans')}
                            </Link>
                        </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default NavMenu;
