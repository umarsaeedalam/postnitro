// Library Imports
import { CircleCheckBigIcon, ZapIcon } from "lucide-react";


type Props = {
    price: number;       
    preDiscountPrice?: number;  
}

function SolopreneurPlanCard({ price, preDiscountPrice }: Props) {
    return (
        <div className="relative flex-1 rounded-md border-2 border-jade-500 py-4 px-5 bg-white mt-7 max-[850px]:max-w-80 max-[850px]:w-full">
            {/* Jade-colored shadow effect for featured plan highlighting */}
            <div className="absolute inset-0 rounded-md bg-jade-500 -z-50 translate-x-2.5 translate-y-2.5"></div>

            {/* Plan title */}
            <h2 className="uppercase text-jade-500 font-semibold text-lg max-[1290px]:text-[17px] max-[1000px]:text-base">Solopeneur Plan</h2>

            {/* Original price shown with strikethrough if discount available */}
            { preDiscountPrice && <p className="text-sm max-[1000px]:text-[13px] text-red-500 font-semibold line-through mt-1.5">{`Previously: $${preDiscountPrice}/month`}</p> }

            {/* Current price display */}
            <p className="text-2xl max-[1290px]:text-[22px] max-[1000px]:text-xl font-bold mt-2">{`$${price}/month`}</p>

            {/* Annual savings calculation - only shown if discount available */}
            { preDiscountPrice && <p className="mt-2 text-jade-500 font-semibold underline max-[1000px]:text-[15px]">{`Saves you $${(preDiscountPrice - price) * 12} per year.`}</p> }

            {/* Plan description */}
            <p className="text-slate-300 text-sm max-[1000px]:text-[13px] mt-1.5">Perfect for solo creators.</p>

            {/* Feature list  */}
            <ul className="flex flex-col gap-2 mt-3">
                <li className="flex items-center gap-3">
                    <CircleCheckBigIcon className="text-jade-500 size-[18px] max-[1000px]:size-[15px]" />
                    <p className="text-[15px]">Watermark-free exports</p>
                </li>

                <li className="flex items-center gap-3">
                    <CircleCheckBigIcon className="text-jade-500 size-[27px] max-[1000px]:size-[25px] max-[850px]:size-[22px]" />
                    <p className="text-[15px] max-[1000px]:text-sm">Access to advanced AI models (GPT-4, Claude Sonnet)</p>
                </li>

                <li className="flex items-center gap-3">
                    <CircleCheckBigIcon className="text-jade-500 size-[18px] max-[1000px]:size-[15px]" />
                    <p className="text-[15px] max-[1000px]:text-sm">15 AI Generated Slides per Carousel</p>
                </li>

                <li className="flex items-center gap-3">
                    <CircleCheckBigIcon className="text-jade-500 size-[18px] max-[1000px]:size-[15px]" />
                    <p className="text-[15px] max-[1000px]:text-sm">Upto 5 Brands</p>
                </li>

                <li className="flex items-center gap-3">
                    <CircleCheckBigIcon className="text-jade-500 size-[18px] max-[1000px]:size-[15px]" />
                    <p className="text-[15px] max-[1000px]:text-sm">Access to all templates</p>
                </li>

                <li className="flex items-center gap-3">
                    <CircleCheckBigIcon className="text-jade-500 size-[18px] max-[1000px]:size-[15px]" />
                    <p className="text-[15px] max-[1000px]:text-sm">Custom color palettes</p>
                </li>

                <li className="flex items-center gap-3">
                    <CircleCheckBigIcon className="text-jade-500 size-[18px] max-[1000px]:size-[15px]" />
                    <p className="text-[15px] max-[1000px]:text-sm">Create custom templates</p>
                </li>
            </ul>

            {/* CTA button - filled variant for prominent plan */}
            <button className="flex gap-3 py-2 mt-7 text-white text-sm bg-jade-500 w-full rounded-md justify-center items-center hover:bg-jade-600 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5 focus-visible:outline-jade-600">
                <ZapIcon size={18} />
                <span className="font-semibold">Get Started</span>
            </button>

            {/* Legal disclaimer */}
            <p className="italic text-xs text-slate-400 mt-4">* All prices are subject to applicable taxes.</p>
        </div>
    );
}

export default SolopreneurPlanCard;