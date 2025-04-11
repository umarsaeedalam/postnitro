import Image from "next/image";
import { Star, ArrowRightIcon, CheckIcon, DotIcon } from "lucide-react";
import backgroundPicture from '../../../../public/grid-box.svg'
import usersCollectedPicture from '../../../../public/user-collected.webp'
import platformIconsPicture from '../../../../public/embed-collected.png'
import { getTranslations } from 'next-intl/server';


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

    const t = await getTranslations({
        locale: locale,
        namespace: 'HomePage'
    });

    return (
        <main className="min-h-screen-minus-header flex items-center justify-center overflow-clip relative">
            <Image src={backgroundPicture} fill alt="Background" className="-z-50" />

            <section className="flex flex-col justify-center items-center max-w-5xl w-full -translate-y-7">
                <div className="flex items-center rounded-md border border-slate-200 w-fit pr-3 mb-7">
                    <DotIcon size={50} className="text-jade-500 -m-2.5" />

                    <p className="font-semibold text-sm">{t('tagline')}</p>
                </div>

                <h1 className="text-5xl font-semibold text-center leading-14 mb-4">{t('headline')}</h1>
                
                <p className="text-slate-400 text-center leading-6 mb-4">{t('description')}</p>
                
                <div className="flex items-center gap-3">
                    {/* Item 1 */}
                    <div className="flex gap-4">
                        <Image src={usersCollectedPicture} alt="users icons" className="self-center" />
                        
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-2.5">
                                <div className="flex gap-0.5">
                                    <Star fill="orange" color="orange" size={18} />
                                    <Star fill="orange" color="orange" size={18} />
                                    <Star fill="orange" color="orange" size={18} />
                                    <Star fill="orange" color="orange" size={18} />
                                    <Star fill="orange" color="orange" size={18} />
                                </div>

                                <p className="text-sm font-semibold">{t('stats.rating')}</p>
                            </div>

                            <p className="text-xs text-slate-400">{t('stats.users')}</p>
                        </div>
                    </div>
                    
                    {/* Line */}
                    <div className="w-1 h-10 bg-slate-200/75 mx-2" />

                    {/* Item 2 */}
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-semibold">{t('stats.platforms.title')}</p>
                            <p className="text-xs text-slate-400">{t('stats.platforms.count')}</p>
                        </div>

                        <Image src={platformIconsPicture} alt="users icons" className="self-center" />
                    </div>
                </div>
                
                <button className="mt-8 flex gap-2 bg-jade-500 text-white font-semibold py-[9px] px-5 rounded-md hover:bg-jade-600 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5 focus-visible:outline-jade-600">
                    <a href="#" role="button">{t('cta.button')}</a>
                    <ArrowRightIcon className="text-slate-200" />
                </button>
                
                <p className="mt-3 flex gap-2.5 text-sm items-center text-slate-500">
                    <CheckIcon size={15} className="mt-1" />
                    <span>{t('cta.noCreditCard')}</span>
                </p>
            </section>
        </main>
    );
}

export default Home;
