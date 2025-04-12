// Library Imports
import { CircleCheckBigIcon, ZapIcon } from "lucide-react";

type Props = {
    price: number;              
    preDiscountPrice?: number;  
}

function TeamPlanCard({ price, preDiscountPrice }: Props) {
    return (
        <div className="relative flex-1 rounded-md border border-slate-100 py-4 px-5 bg-white mt-7 self-center max-[850px]:max-w-80 max-[850px]:w-full">
            {/* Shadow effect created with absolute positioning */}
            <div className="absolute inset-0 rounded-md bg-slate-100 -z-50 translate-x-1.5 translate-y-1.5"></div>

            {/* Plan title */}
            <h2 className="uppercase text-jade-500 font-semibold text-lg max-[1290px]:text-[17px] max-[1000px]:text-base">Team Plan</h2>

            {/* Original price shown with strikethrough if discount available */}
            { preDiscountPrice && <p className="text-sm max-[1000px]:text-[13px] text-red-500 font-semibold line-through mt-1.5">{`Previously: $${preDiscountPrice}/month`}</p> }

            {/* Current price display */}
            <p className="text-2xl max-[1290px]:text-[22px] max-[1000px]:text-xl font-bold mt-2">{`$${price}/month`}</p>

            {/* Annual savings calculation - only shown if discount available */}
            { preDiscountPrice && <p className="mt-2 text-jade-500 font-semibold underline max-[1000px]:text-[15px]">{`Saves you $${(preDiscountPrice - price) * 12} per year.`}</p> }

            {/* Plan description */}
            <p className="text-slate-300 text-sm max-[1000px]:text-[13px] mt-2.5">Perfect for small teams.</p>

            {/* Feature list */}
            <ul className="flex flex-col gap-2 mt-3">
                <li className="flex items-center gap-3">
                    <CircleCheckBigIcon className="text-jade-500 size-[18px] max-[1000px]:size-[15px]" />
                    <p className="text-[15px] max-[1000px]:text-sm">100 AI generated images per month</p>
                </li>

                <li className="flex items-center gap-3">
                    <CircleCheckBigIcon className="text-jade-500 size-[18px] max-[1000px]:size-[15px]" />
                    <p className="text-[15px] max-[1000px]:text-sm">Up to 5 workspaces</p>
                </li>

                <li className="flex items-center gap-3">
                    <CircleCheckBigIcon className="text-jade-500 size-[18px] max-[1000px]:size-[15px]" />
                    <p className="text-[15px] max-[1000px]:text-sm">Up to 20 slides per carousel</p>
                </li>

                <li className="flex items-center gap-3">
                    <CircleCheckBigIcon className="text-jade-500 size-[18px] max-[1000px]:size-[15px]" />
                    <p className="text-[15px] max-[1000px]:text-sm">15 custom templates</p>
                </li>
            </ul>

            {/* CTA button with icon */}
            <button className="flex gap-3 py-2 mt-7 text-sm w-full rounded-md justify-center items-center text-jade-500 border border-jade-500 hover:bg-jade-500/5 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5 focus-visible:outline-jade-600">
                <ZapIcon size={18} />
                <span className="font-semibold">Get Started</span>
            </button>

            {/* Legal disclaimer */}
            <p className="italic text-xs text-slate-400 mt-4">* All prices are subject to applicable taxes.</p>
        </div>
    );
}

export default TeamPlanCard;