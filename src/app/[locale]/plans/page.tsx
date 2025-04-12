// Library Imports
import Image from "next/image";
import type { Metadata } from 'next'

// Asset Imports
import backgroundPicture from '../../../../public/grid-box.svg'

// Component Imports
import PlansTabs from "@/components/pieces/plans-tabs";
import FreePlanCard from "@/components/bits/free-plan-card";

 
export const metadata: Metadata = {
    title: 'Plans',
}

function Plans() {
    return (
        <main className="min-h-screen-minus-header flex justify-center overflow-clip relative pb-20 max-[1145px]:px-10">
            <section className="max-w-5xl w-full flex flex-col items-center">
                {/* Background grid pattern */}
                <Image src={backgroundPicture} fill alt="Background" className="-z-50" />
                
                {/* Page heading */}
                <h1 className="text-5xl max-[1290px]:text-[46px] max-[1000px]:text-4xl font-semibold text-center mt-7">Plans for Your Carousel Creation Needs</h1>

                {/* Page description */}
                <p className="text-slate-400 max-[1000px]:text-[15px] text-center mt-8 max-[1000px]:mt-6 mb-8 max-[1000px]:mb-6">From solo creators to agencies, we have a plan that fits your requirements.</p>

                {/* Pricing tabs component for monthly/yearly toggle */}
                <PlansTabs />

                {/* Additional information about plan limits and add-ons */}
                <p className="mt-10 italic text-slate-500 max-[1000px]:text-[15px]">
                    If you require additional limits, you can <a className="text-jade-500 font-semibold underline" href="https://postnitro.ai/docs/how-to/manage-subscription/additional-limits">add them as Add-Ons</a> to your subscription.
                </p>

                {/* Free plan option displayed at the bottom */}
                <FreePlanCard />
            </section>
        </main>
    );
}

export default Plans;