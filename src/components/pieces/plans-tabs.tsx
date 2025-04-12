// Local Imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shadcn/tabs"
import TeamPlanCard from "@/components/bits/team-plan-card";
import StarterPlanCard from "../bits/starter-plan-card";
import SolopreneurPlanCard from "../bits/solopreneur-plan-card";


function PlansTabs() {
    return (
        <Tabs defaultValue="monthly" className="w-full">
            {/* Pricing toggle between monthly and yearly billing */}
            <div className="w-full flex justify-center">
                <TabsList className="grid w-full grid-cols-2 max-w-2xs items-center">
                    <TabsTrigger value="monthly" className="data-[state=active]:text-slate-500 text-slate-300 max-[1000px]:text-[13px]">Monthly</TabsTrigger>
                    <TabsTrigger value="yearly" className="data-[state=active]:text-slate-500 text-slate-300 max-[1000px]:text-[13px]">Yearly</TabsTrigger>
                </TabsList>
            </div>

            {/* Monthly pricing configuration */}
            <TabsContent value="monthly">
                <div className="flex flex-col items-center">
                    <div className="flex max-[850px]:flex-col gap-4">
                        <StarterPlanCard price={10} />

                        <SolopreneurPlanCard price={20} />

                        <TeamPlanCard price={50} />
                    </div>
                </div>   
            </TabsContent>
            
            {/* Yearly pricing configuration */}
            <TabsContent value="yearly">
                <div className="flex flex-col items-center">
                    {/* Promotional banner highlighting yearly discount */}
                    <p className="uppercase bg-jade-500 text-white rounded-full py-[3px] px-3 w-fit font-semibold text-[13px] max-[1000px]:text-xs mt-3">40% Off On Yearly Subscription! - ANNUAL40OFF</p>
                    
                    <div className="flex max-[850px]:flex-col gap-4">
                        <StarterPlanCard price={10} />

                        <SolopreneurPlanCard price={12} preDiscountPrice={20} />

                        <TeamPlanCard price={30} preDiscountPrice={50} />
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    );
}

export default PlansTabs;