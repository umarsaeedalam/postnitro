// Library imports
import { CircleCheckBigIcon, ZapIcon } from "lucide-react";


function FreePlanCard() {
    return (
        <div className="relative bg-white flex gap-7 border py-3 px-5 border-slate-100 rounded-md mt-10">
            {/* Subtle slate shadow effect */}
            <div className="absolute inset-0 rounded-md bg-slate-100 -z-50 translate-x-1.5 translate-y-1.5"></div>

            {/* Plan title and description */}
            <div className="flex flex-col items-center justify-center gap-2">
                <p className="uppercase text-jade-500 font-semibold text-lg max-[1290px]:text-[17px] max-[1000px]:text-base">Free Plan</p>
                <p className="text-2xl max-[1290px]:text-[22px] font-bold max-[1000px]:text-xl">$0/month</p>
                <p className="text-slate-300 text-sm max-[1000px]:text-[13px]">To help you get started.</p>
            </div>

            {/* Feature list */}
            <ul className="flex flex-col gap-2 justify-center">
                <li className="flex items-center gap-2">
                    <CircleCheckBigIcon className="text-jade-500 size-[18px] max-[1000px]:size-[15px]" />
                    <p className="text-sm max-[1000px]:text-[13px]">Access to GPT 4o-Mini</p>
                </li>

                <li className="flex items-center gap-2">
                    <CircleCheckBigIcon className="text-jade-500 size-[18px] max-[1000px]:size-[15px]" />
                    <p className="text-sm max-[1000px]:text-[13px]">5 downloads per month</p>
                </li>

                <li className="flex items-center gap-2">
                    <CircleCheckBigIcon className="text-jade-500 size-[18px] max-[1000px]:size-[15px]" />
                    <p className="text-sm max-[1000px]:text-[13px]">Access to basic templates</p>
                </li>
            </ul>

            {/* CTA button */}
            <button className="flex gap-2 items-center justify-center border rounded-md border-jade-500 self-center py-2 px-3 hover:bg-jade-500/5 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5 focus-visible:outline-jade-600">
                <ZapIcon className="text-jade-500 size-[18px]" />
                <span className="text-sm text-jade-500 font-semibold">Get Started</span>
            </button>
        </div>
    );
}

export default FreePlanCard;