'use client'

// Libraries Imports
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";

// Local Imports
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/shadcn/select";


function SelectLanguage() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    
    // Navigate to the same page with different locale
    const handleLanguageChange = (value: string) => {
        const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
        router.push(`/${value}${pathnameWithoutLocale}`);
    };
    
    return (
        <Select defaultValue={locale} onValueChange={handleLanguageChange}>
            {/* Language selector dropdown trigger */}
            <SelectTrigger className="bg-slate-100 py-1 px-1.5 hover:bg-slate-200 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5">
                <SelectValue placeholder="Select language" />
            </SelectTrigger>

            {/* Dropdown content with flag options */}
            <SelectContent className="!w-0">
                <SelectGroup>
                    {/* English option */}
                    <SelectItem value="en" className="py-1 px-1.5 hover:!bg-slate-100 hover:cursor-pointer transition-all duration-150">
                        {/* Larger flag for desktop viewports */}
                        <Image 
                            src='/flags/GB-UKM - United Kingdom.svg' 
                            alt="English Flag" 
                            width={30} 
                            height={10} 
                            className="max-[1145px]:hidden"
                        />
                        {/* Smaller flag for mobile viewports */}
                        <Image 
                            src='/flags/GB-UKM - United Kingdom.svg' 
                            alt="English Flag" 
                            width={25} 
                            height={10}
                            className="min-[1145px]:hidden" 
                        />
                    </SelectItem>

                    {/* Spanish option */}
                    <SelectItem value="es" className="py-1 px-1.5 hover:!bg-slate-100 hover:cursor-pointer transition-all duration-150">
                        {/* Larger flag for desktop viewports */}
                        <Image 
                            src='/flags/ES - Spain.svg' 
                            alt="Spanish Flag" 
                            width={30} 
                            height={10}
                            className="max-[1145px]:hidden" 
                        />
                        {/* Smaller flag for mobile viewports */}
                        <Image 
                            src='/flags/ES - Spain.svg' 
                            alt="Spanish Flag" 
                            width={25} 
                            height={10}
                            className="min-[1145px]:hidden"  
                        />
                    </SelectItem>

                    {/* French option */}
                    <SelectItem value="fr" className="py-1 px-1.5 hover:!bg-slate-100 hover:cursor-pointer transition-all duration-150">
                        {/* Larger flag for desktop viewports */}
                        <Image 
                            src='/flags/FR - France.svg' 
                            alt="French Flag" 
                            width={30} 
                            height={10}
                            className="max-[1145px]:hidden" 
                        />
                        {/* Smaller flag for mobile viewports */}
                        <Image 
                            src='/flags/FR - France.svg' 
                            alt="French Flag" 
                            width={25} 
                            height={10}
                            className="min-[1145px]:hidden" 
                        />
                    </SelectItem>

                    {/* Chinese option */}
                    <SelectItem value="zh" className="py-1 px-1.5 hover:!bg-slate-100 hover:cursor-pointer transition-all duration-150">
                        {/* Larger flag for desktop viewports */}
                        <Image 
                            src='/flags/CN - China.svg' 
                            alt="Chinese Flag" 
                            width={30} 
                            height={10}
                            className="max-[1145px]:hidden" 
                        />
                        {/* Smaller flag for mobile viewports */}
                        <Image 
                            src='/flags/CN - China.svg' 
                            alt="Chinese Flag" 
                            width={25} 
                            height={10}
                            className="min-[1145px]:hidden" 
                        />
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}

export default SelectLanguage;