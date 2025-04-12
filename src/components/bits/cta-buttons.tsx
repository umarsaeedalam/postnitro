// Libraries Imports
import { Sparkles } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

// Local Imports
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/shadcn/badge";


async function CtaButtons() {
    // Get the current locale from the server
    const locale = await getLocale();

    // Fetch translations for the current locale and namespace
    const t = await getTranslations({
        locale: locale,
        namespace: 'Header'
    });

    return (
        <>
            {/* Create Image Post button */}
            <button type="button" className="px-2.5 py-1.5 pr-4.5 max-[1290px]:pr-2.5 max-[500px]:hidden border border-jade-500 rounded-md hover:bg-jade-500/5 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5 focus-visible:outline-jade-600">
                <Link href='/app/post-maker'>
                    <div className="flex items-center gap-3 max-[1290px]:gap-2 text-jade-500">
                        {/* Sparkles icon - hidden on smaller screens */}
                        <Sparkles size={18} className="max-[1290px]:hidden" />

                        {/* Button text */}
                        <span className="text-sm max-[1145px]:text-[13px] font-semibold">{t('buttons.createImagePost')}</span>

                        {/* BETA badge - hidden on smaller screens */}
                        <Badge className="max-[1145px]:hidden text-[9px] font-semibold tracking-wide px-2.5 bg-gradient-to-r from-mintlime-100 to-mintlime-900 rounded-full">BETA</Badge>
                    </div>
                </Link>
            </button>

            {/* Create Carousel button */}
            <button type="button" className="px-2.5 py-1.5 pr-5 max-[1290px]:pr-3 border border-jade-500 bg-jade-500 rounded-md hover:bg-jade-600 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5 focus-visible:outline-jade-600">
                <Link href='/app/carousel-maker'>
                    <div className="flex items-center gap-3 text-white">
                        {/* Sparkles icon - hidden on smaller screens */}
                        <Sparkles size={18} className="max-[1290px]:hidden" />

                        {/* Button text */}
                        <span className="text-sm max-[1145px]:text-[13px] font-semibold">{t('buttons.createCarousel')}</span>
                    </div>
                </Link>
            </button>
        </>
    );
}

export default CtaButtons;