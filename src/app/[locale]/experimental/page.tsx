import { Sheet, SheetContent, SheetTrigger } from "@/components/shadcn/sheet"
import { Link } from "@/i18n/navigation";
import { MenuIcon } from "lucide-react";

function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger className="p-2 rounded-md hover:bg-jade-500/10 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5">
                <MenuIcon />
            </SheetTrigger>

            <SheetContent side='top' className="w-full h-full flex items-center">
                <header className="mt-15">
                    <nav>
                        <ul className="flex flex-col gap-10 items-center">
                            <li><Link href="/" className="text-lg text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">Home</Link></li>
                            
                            <li>
                                <p className="font-semibold text-slate-500 text-xl">Getting Started</p>
                                <ul className="flex flex-col gap-2 mt-3 items-center">
                                    <li><Link href="https://postnitro.ai/docs" className="text-lg text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">Docs</Link></li>
                                    <li><Link href="https://postnitro.ai/blog" className="text-lg text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">Blog</Link></li>
                                    <li><Link href="https://ls.postnitro.ai/affiliates" className="text-lg text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">Affiliates</Link></li>
                                </ul>
                            </li>
                            
                            <li>
                                <p className="font-semibold text-slate-500 text-xl text-center">Products</p>
                                <ul className="flex flex-col gap-2 mt-3 items-center">
                                    <li><Link href="https://postnitro.ai/carousels/linkedin" className="text-lg text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">LinkedIn Carousel</Link></li>
                                    <li><Link href="https://postnitro.ai/carousels/instagram" className="text-lg text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">Instagram Carousel</Link></li>
                                    <li><Link href="https://postnitro.ai/carousels/tiktok" className="text-lg text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">TikTok Carousel</Link></li>
                                    <li><Link href="https://postnitro.ai/carousels/x-twitter" className="text-lg text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">Twitter Carousel</Link></li>
                                    <li><Link href="https://postnitro.ai/products/embed" className="text-lg text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">Embed</Link></li>
                                    <li><Link href="https://postnitro.ai/products/extension" className="text-lg text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">Extension</Link></li>
                                </ul>
                            </li>
                        
                            <li>
                                <p className="font-semibold text-slate-500 text-xl text-center">Free Tools</p>
                                <ul className="flex flex-col gap-2 mt-3 items-center">
                                    <li><Link href="https://postnitro.ai/free-ai-tools/twitter-free-banner-header-image-maker" className="text-lg text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">Twitter Banner Maker</Link></li>
                                    <li><Link href="https://postnitro.ai/free-ai-tools/linkedin-free-banner-header-image-maker" className="text-lg text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">LinkedIn Banner Maker</Link></li>
                                    <li><Link href="https://postnitro.ai/free-ai-tools/instagram-free-image-splitter-grid-maker" className="text-lg text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">Instagram Grid Maker</Link></li>
                                    <li><Link href="https://postnitro.ai/free-ai-tools/linkedin-free-text-formatter" className="text-lg text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">LinkedIn Text Formatter</Link></li>
                                    <li><Link href="https://postnitro.ai/free-ai-tools/linkedin-free-post-generator" className="text-lg text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">LinkedIn Post Generator</Link></li>
                                </ul>
                            </li>
                        
                            <li><Link href="/plans" className="text-lg text-jade-500 font-semibold hover:text-jade-700 underline underline-offset-4 transition-all duration-150">Plans</Link></li>
                        </ul>
                    </nav>
                </header>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu;
