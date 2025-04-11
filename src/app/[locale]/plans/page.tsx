// import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import backgroundPicture from '../../../../public/grid-box.svg'
import { CircleCheckBigIcon, ZapIcon } from "lucide-react";

export async function generateMetadata() {
    // const locale = await getLocale();

    // const t = await getTranslations({
    //     locale: locale,
    //     namespace: 'HomePage'
    // });
    
    return {
        title: 'Plans'
    };
}

function Plans() {
    return (
        <main className="min-h-screen-minus-header flex justify-center overflow-clip relative">
            <section className="max-w-5xl w-full flex flex-col items-center">
                <Image src={backgroundPicture} fill alt="Background" className="-z-50" />
                
                <h1 className="text-5xl font-semibold text-center mt-7">Plans for Your Carousel Creation Needs</h1>

                <p className="text-slate-400 text-center mt-8">From solo creators to agencies, we have a plan that fits your requirements.</p>

                <p className="bg-slate-100 w-fit p-2 text-sm text-center rounded-md mt-9">Monthly | Yearly</p>

                <p className="uppercase bg-jade-500 text-white rounded-full py-[3px] px-3 w-fit font-semibold text-[13px] mt-4">40% Off On Yearly Subscription! - ANNUAL40OFF</p>

                <div className="flex gap-4">
                    {/* Item 1 */}
                    <div className="relative flex-1 rounded-md border border-slate-100 py-4 px-4 bg-white mt-7 self-center">
                        <div className="absolute inset-0 rounded-md bg-slate-100 -z-50 translate-x-1.5 translate-y-1.5"></div>

                        <h2 className="uppercase text-jade-500 font-semibold text-lg">Starter Plan</h2>
                        <p className="text-2xl font-bold mt-2">$12/month</p>
                        <p className="text-slate-300 text-sm mt-2.5">Perfect for getting started.</p>

                        <ul className="flex flex-col gap-2 mt-3">
                            <li className="flex items-center gap-3">
                                <CircleCheckBigIcon size={18} className="text-jade-500" />
                                <p className="text-[15px]">Watermark-free exports</p>
                            </li>

                            <li className="flex items-center gap-3">
                                <CircleCheckBigIcon className="text-jade-500 size-[26px]" />
                                <p className="text-[15px]">Access to basic AI models (GPT-4o, Claude Haiku)</p>
                            </li>

                            <li className="flex items-center gap-3">
                                <CircleCheckBigIcon size={18} className="text-jade-500" />
                                <p className="text-[15px]">30 downloads/month</p>
                            </li>

                            <li className="flex items-center gap-3">
                                <CircleCheckBigIcon size={18} className="text-jade-500" />
                                <p className="text-[15px]">8 AI Generated Slides per Carousel</p>
                            </li>
                        </ul>

                        <button className="flex gap-3 py-2 mt-7 text-sm w-full rounded-md justify-center items-center text-jade-500 border border-jade-500 hover:bg-jade-500/5 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5 focus-visible:outline-jade-600">
                            <ZapIcon size={18} />
                            <span className="font-semibold">Get Started</span>
                        </button>

                        <p className="italic text-xs text-slate-400 mt-4">* All prices are subject to applicable taxes.</p>
                    </div>

                    {/* Item 2 */}
                    <div className="relative flex-1 rounded-md border-2 border-jade-500 py-4 px-4 bg-white mt-7">
                        <div className="absolute inset-0 rounded-md bg-jade-500 -z-50 translate-x-2.5 translate-y-2.5"></div>

                        <h2 className="uppercase text-jade-500 font-semibold text-lg">Solopreneur Plan</h2>
                        <p className="text-sm text-red-500 font-semibold line-through mt-1.5">Previously: $20/month</p>
                        <p className="text-2xl font-bold mt-2">$12/month</p>
                        <p className="mt-2 text-jade-500 font-semibold underline">Saves you $96 per year.</p>
                        <p className="text-slate-300 text-sm mt-1.5">Perfect for solo creators.</p>

                        <ul className="flex flex-col gap-2 mt-3">
                            <li className="flex items-center gap-3">
                                <CircleCheckBigIcon size={18} className="text-jade-500" />
                                <p className="text-[15px]">Watermark-free exports</p>
                            </li>

                            <li className="flex items-center gap-3">
                                <CircleCheckBigIcon className="text-jade-500 size-[27px]" />
                                <p className="text-[15px]">Access to advanced AI models (GPT-4, Claude Sonnet)</p>
                            </li>

                            <li className="flex items-center gap-3">
                                <CircleCheckBigIcon size={18} className="text-jade-500" />
                                <p className="text-[15px]">15 AI Generated Slides per Carousel</p>
                            </li>

                            <li className="flex items-center gap-3">
                                <CircleCheckBigIcon size={18} className="text-jade-500" />
                                <p className="text-[15px]">Upto 5 Brands</p>
                            </li>

                            <li className="flex items-center gap-3">
                                <CircleCheckBigIcon size={18} className="text-jade-500" />
                                <p className="text-[15px]">Access to all templates</p>
                            </li>

                            <li className="flex items-center gap-3">
                                <CircleCheckBigIcon size={18} className="text-jade-500" />
                                <p className="text-[15px]">Custom color palettes</p>
                            </li>

                            <li className="flex items-center gap-3">
                                <CircleCheckBigIcon size={18} className="text-jade-500" />
                                <p className="text-[15px]">Create custom templates</p>
                            </li>
                        </ul>

                        <button className="flex gap-3 py-2 mt-7 text-white text-sm bg-jade-500 w-full rounded-md justify-center items-center hover:bg-jade-600 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5 focus-visible:outline-jade-600">
                            <ZapIcon size={18} />
                            <span className="font-semibold">Get Started</span>
                        </button>

                        <p className="italic text-xs text-slate-400 mt-4">* All prices are subject to applicable taxes.</p>
                    </div>

                    {/* Item 3 */}
                    <div className="relative flex-1 rounded-md border border-slate-100 py-4 px-4 bg-white mt-7 self-center">
                        <div className="absolute inset-0 rounded-md bg-slate-100 -z-50 translate-x-1.5 translate-y-1.5"></div>

                        <h2 className="uppercase text-jade-500 font-semibold text-lg">Team Plan</h2>
                        <p className="text-sm text-red-500 font-semibold line-through mt-1.5">Previously: $50/month</p>
                        <p className="text-2xl font-bold mt-2">$30/month</p>
                        <p className="mt-2 text-jade-500 font-semibold underline">Saves you $96 per year.</p>
                        <p className="text-slate-300 text-sm mt-2.5">Perfect for small teams.</p>

                        <ul className="flex flex-col gap-2 mt-3">
                            <li className="flex items-center gap-3">
                                <CircleCheckBigIcon size={18} className="text-jade-500" />
                                <p className="text-[15px]">100 AI generated images per month</p>
                            </li>

                            <li className="flex items-center gap-3">
                                <CircleCheckBigIcon size={18} className="text-jade-500" />
                                <p className="text-[15px]">Up to 5 workspaces</p>
                            </li>

                            <li className="flex items-center gap-3">
                                <CircleCheckBigIcon size={18} className="text-jade-500" />
                                <p className="text-[15px]">Up to 20 slides per carousel</p>
                            </li>

                            <li className="flex items-center gap-3">
                                <CircleCheckBigIcon size={18} className="text-jade-500" />
                                <p className="text-[15px]">15 custom templates</p>
                            </li>
                        </ul>

                        <button className="flex gap-3 py-2 mt-7 text-sm w-full rounded-md justify-center items-center text-jade-500 border border-jade-500 hover:bg-jade-500/5 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5 focus-visible:outline-jade-600">
                            <ZapIcon size={18} />
                            <span className="font-semibold">Get Started</span>
                        </button>

                        <p className="italic text-xs text-slate-400 mt-4">* All prices are subject to applicable taxes.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Plans;