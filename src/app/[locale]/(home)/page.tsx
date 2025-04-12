// Libraries Imports
import Image from "next/image";
import { Star, ArrowRightIcon, CheckIcon, DotIcon } from "lucide-react";
import { getTranslations } from 'next-intl/server';

// Assets Imports
import backgroundPicture from '../../../../public/grid-box.svg'
import usersCollectedPicture from '../../../../public/user-collected.webp'
import platformIconsPicture from '../../../../public/embed-collected.png'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }>;}) {
    const { locale } = await params;

    const t = await getTranslations({
        locale: locale,
        namespace: 'HomePage'
    });
    
    return {
        title: t('metadata.title')
    };
}

async function Home({ params }: { params: Promise<{ locale: string }>;}) {
    const { locale } = await params;

    // Fetch translations for the current locale
    const t = await getTranslations({
        locale: locale,
        namespace: 'HomePage'
    });

    return (
        <main className="min-h-screen-minus-header max-[1145px]:px-10 max-[790px]:px-8 flex items-center justify-center overflow-clip relative">
            {/* Background grid pattern */}
            <Image src={backgroundPicture} fill alt="Background" className="-z-50" />

            {/* Hero section container */}
            <section className="flex flex-col justify-center items-center max-w-5xl w-full -translate-y-7">
                {/* Tagline with green dot indicator */}
                <div className="flex items-center rounded-md border border-slate-200 w-fit pr-3 mb-7 max-[790px]:py-0.5">
                    <DotIcon className="text-jade-500 size-12 max-[1290px]:size-[44px] max-[790px]:size-10 -m-2.5" />
                    <p className="font-semibold text-sm max-[1290px]:text-[13px] max-[790px]:text-xs">{t('tagline')}</p>
                </div>

                {/* Main headline - responsive text sizing */}
                <h1 className="text-5xl max-[1290px]:text-[46px] max-[790px]:text-4xl max-[500px]:text-2xl font-semibold text-center leading-14 max-[790px]:leading-11 max-[500px]:leading-9 mb-4">{t('headline')}</h1>
                
                {/* Subheading description */}
                <p className="text-slate-400 text-center leading-6 mb-4 max-[1290px]:text-[15px] max-[790px]:text-sm max-[500px]:text-[13px]">{t('description')}</p>
                
                {/* Stats section - users and platforms */}
                <div className="flex max-[1145px]:flex-col items-center gap-3 max-[1145px]:gap-5">
                    {/* User stats with rating */}
                    <div className="flex gap-4 max-[500px]:flex-col max-[500px]:items-center">
                        <Image src={usersCollectedPicture} alt="users icons" className="self-center object-cover" />
                        
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-2.5">
                                {/* 5-star rating display */}
                                <div className="flex gap-0.5 items-center">
                                    <Star fill="orange" color="orange" className="size-5" />
                                    <Star fill="orange" color="orange" className="size-5" />
                                    <Star fill="orange" color="orange" className="size-5" />
                                    <Star fill="orange" color="orange" className="size-5" />
                                    <Star fill="orange" color="orange" className="size-5" />
                                </div>
                                {/* Rating text */}
                                <p className="text-sm max-[1290px]:text-[13px] max-[500px]:text-xs font-semibold">{t('stats.rating')}</p>
                            </div>

                            {/* User count text */}
                            <p className="text-xs text-slate-400 max-[500px]:text-[11px]">{t('stats.users')}</p>
                        </div>
                    </div>
                    
                    {/* Vertical divider - hidden on mobile */}
                    <div className="w-1 h-10 bg-slate-200/75 mx-2 max-[1145px]:hidden" />

                    {/* Platform stats */}
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm max-[1290px]:text-[13px] max-[500px]:text-xs font-semibold">{t('stats.platforms.title')}</p>
                            <p className="text-xs max-[500px]:text-[11px] text-slate-400">{t('stats.platforms.count')}</p>
                        </div>

                        <Image src={platformIconsPicture} alt="platform icons" className="self-center" />
                    </div>
                </div>
                
                {/* CTA button with arrow icon */}
                <button className="mt-8 flex items-center gap-2 bg-jade-500 text-white max-[1290px]:text-[15px] max-[790px]:text-sm max-[500px]:text-[13px] font-semibold py-[9px] px-5 rounded-md hover:bg-jade-600 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5 focus-visible:outline-jade-600">
                    <a href="#" role="button">{t('cta.button')}</a>
                    <ArrowRightIcon className="text-slate-200 max-[500px]:size-4" />
                </button>
                
                {/* No credit card required message */}
                <p className="mt-3 flex gap-2.5 text-sm max-[1290px]:text-[13px] max-[790px]:text-xs max-[500px]:text-[11px] items-center text-slate-500">
                    <CheckIcon size={15} className="mt-1" />
                    <span>{t('cta.noCreditCard')}</span>
                </p>
            </section>
        </main>
    );
}

export default Home;