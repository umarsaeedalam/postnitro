// Library Imports
import { CircleCheckBigIcon, ZapIcon } from "lucide-react";


type Props = {
    price: number;   
}

function StarterPlanCard({ price }: Props) {
    return (
        <div className="relative flex-1 rounded-md border border-slate-100 py-4 px-5 bg-white mt-7 self-center max-[850px]:max-w-80 max-[850px]:w-full">
            {/* Subtle slate shadow effect */}
            <div className="absolute inset-0 rounded-md bg-slate-100 -z-50 translate-x-1.5 translate-y-1.5"></div>

            {/* Plan title */}
            <h2 className="uppercase text-jade-500 font-semibold text-lg max-[1290px]:text-[17px] max-[1000px]:text-base">Starter Plan</h2>

            {/* Fixed price display */}
            <p className="text-2xl max-[1290px]:text-[22px] max-[1000px]:text-xl font-bold mt-2">{`$${price}/month`}</p>

            {/* Plan description */}
            <p className="text-slate-300 text-sm max-[1000px]:text-[13px] mt-2.5">Perfect for getting started.</p>

            {/* Feature list */}
            <ul className="flex flex-col gap-2 mt-3">
                <li className="flex items-center gap-3">
                    <CircleCheckBigIcon className="text-jade-500 size-[18px] max-[1000px]:size-[15px]" />
                    <p className="text-[15px] max-[1000px]:text-sm">Watermark-free exports</p>
                </li>

                <li className="flex items-center gap-3">
                    <CircleCheckBigIcon className="text-jade-500 size-[25px] max-[1000px]:size-[19.5px]" />
                    <p className="text-[15px] max-[1000px]:text-sm">Access to basic AI models (GPT-4o, Claude Haiku)</p>
                </li>

                <li className="flex items-center gap-3">
                    <CircleCheckBigIcon className="text-jade-500 size-[18px] max-[1000px]:size-[15px]" />
                    <p className="text-[15px] max-[1000px]:text-sm">30 downloads/month</p>
                </li>

                <li className="flex items-center gap-3">
                    <CircleCheckBigIcon className="text-jade-500 size-[18px] max-[1000px]:size-[15px]" />
                    <p className="text-[15px] max-[1000px]:text-sm">8 AI Generated Slides per Carousel</p>
                </li>
            </ul>

            {/* CTA button - outline variant for standard plan */}
            <button className="flex gap-3 py-2 mt-7 text-sm w-full rounded-md justify-center items-center text-jade-500 border border-jade-500 hover:bg-jade-500/5 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5 focus-visible:outline-jade-600">
                <ZapIcon size={18} />
                <span className="font-semibold">Get Started</span>
            </button>

            {/* Legal disclaimer */}
            <p className="italic text-xs text-slate-400 mt-4">* All prices are subject to applicable taxes.</p>
        </div>
    );
}

export default StarterPlanCard;