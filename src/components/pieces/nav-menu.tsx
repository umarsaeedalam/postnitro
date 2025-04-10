"use client"

import * as React from "react"
import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/shadcn/navigation-menu"

function NavMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* Item 1 */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-semibold text-md hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5">Getting Started</NavigationMenuTrigger>
                    
                    <NavigationMenuContent className="font-semibold">
                        <ul>
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/docs">Docs</Link>
                                </NavigationMenuLink>
                            </li>
                            
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/blog">Blogs</Link>
                                </NavigationMenuLink>
                            </li>

                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://ls.postnitro.ai/affiliates">Affiliates</Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Item 2 */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-semibold hover:cursor-pointer  tracking-tight text-md transition-all duration-150 transform active:translate-y-0.5">Products</NavigationMenuTrigger>
                    
                    <NavigationMenuContent className="font-semibold">
                        <ul>
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/carousels/linkedin" className="pr-10 whitespace-nowrap">LinkedIn Carousel</Link>
                                </NavigationMenuLink>

                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/carousels/instagram" className="whitespace-nowrap">Instagram Carousel</Link>
                                </NavigationMenuLink>

                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/carousels/tiktok">TikTok Carousel</Link>
                                </NavigationMenuLink>

                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/carousels/x-twitter">Twitter Carousel</Link>
                                </NavigationMenuLink>

                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/products/embed">Embed</Link>
                                </NavigationMenuLink>

                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/products/extension">Extension</Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Item 3 */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-semibold hover:cursor-pointer tracking-tight text-md transition-all duration-150 transform active:translate-y-0.5">Free Tools</NavigationMenuTrigger>
                    
                    <NavigationMenuContent>
                        <ul className="font-semibold">
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/free-ai-tools/twitter-free-banner-header-image-maker" className="whitespace-nowrap !pr-10">Twitter Banner Maker</Link>
                                </NavigationMenuLink>
                            </li>

                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/free-ai-tools/linkedin-free-banner-header-image-maker" className="">LinkedIn Banner Maker</Link>
                                </NavigationMenuLink>
                            </li>

                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/free-ai-tools/instagram-free-image-splitter-grid-maker">Instagram Grid Maker</Link>
                                </NavigationMenuLink>
                            </li>

                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/free-ai-tools/linkedin-free-text-formatter">LinkedIn Text Formatter</Link>
                                </NavigationMenuLink>
                            </li>

                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://postnitro.ai/free-ai-tools/linkedin-free-post-generator">LinkedIn Post Generator</Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Item 4 */}
                <NavigationMenuItem>
                        <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} hover:cursor-pointer font-semibold text-md tracking-tight transition-all duration-150 transform active:translate-y-0.5`}>
                            <Link href="https://postnitro.ai/plans" passHref>
                                Plans
                            </Link>
                        </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default NavMenu;
