import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/logo-full.svg'
import { Sparkles } from "lucide-react";
import { Badge } from "../shadcn/badge";
import NavMenu from "../pieces/nav-menu";
import SelectLanguage from "@/components/bits/select-language";
import { getLocale,  getTranslations } from "next-intl/server";
import MobileMenu from "./mobile-menu";

export const dynamic = 'force-dynamic';

async function Header() {
    const locale = await getLocale();

    console.log(`Header: ${locale}`)

    const t = await getTranslations({
        locale: locale,
        namespace: 'Header'
    });

    return (
        <header className="flex justify-center w-full">
            <nav className="flex justify-between max-w-11/12 w-full py-2.5 max-[1145px]:max-w-full max-[1145px]:px-4">
                <div className="flex items-center gap-8 max-[1145px]:hidden">
                    <Link href="/" className="focus-visible:outline-jade-600 rounded-md max-w-[135px] max-[1290px]:max-w-[125px]">
                        <Image src={logo} alt="PostNitro Logo" />
                    </Link>

                    <NavMenu />
                </div>

                <div className="min-[1145px]:hidden">
                    <MobileMenu />
                </div>
                
                <div className="flex items-center gap-4">
                    <SelectLanguage />

                    <button type="button" className="px-2.5 py-1.5 pr-4.5 max-[1290px]:pr-2.5 max-[500px]:hidden border border-jade-500 rounded-md hover:bg-jade-500/5 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5 focus-visible:outline-jade-600">
                        <Link href='https://postnitro.ai/app/carousel-maker'>
                            <div className="flex items-center gap-3 max-[1290px]:gap-2 text-jade-500">
                                <Sparkles size={18} className="max-[1290px]:hidden" />

                                <span className="text-sm max-[1145px]:text-[13px] font-semibold">{t('buttons.createImagePost')}</span>

                                <Badge className="max-[1145px]:hidden text-[9px] font-semibold tracking-wide px-2.5 bg-gradient-to-r from-mintlime-100 to-mintlime-900 rounded-full">BETA</Badge>
                            </div>
                        </Link>
                    </button>

                    <button type="button" className="px-2.5 py-1.5 pr-5 max-[1290px]:pr-3 border border-jade-500 bg-jade-500 rounded-md hover:bg-jade-600 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5 focus-visible:outline-jade-600">
                        <Link href='https://postnitro.ai/app/carousel-maker'>
                            <div className="flex items-center gap-3 text-white">
                                <Sparkles size={18} className="max-[1290px]:hidden" />

                                <span className="text-sm max-[1145px]:text-[13px] font-semibold">{t('buttons.createCarousel')}</span>
                            </div>
                        </Link>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;