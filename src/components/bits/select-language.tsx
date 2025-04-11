'use client'

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/shadcn/select";
import Image from "next/image";

function SelectLanguage() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    
    // Function to handle language change
    const handleLanguageChange = (value: string) => {
        // Get the path without the locale prefix
        const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
        router.push(`/${value}${pathnameWithoutLocale}`);
    };
    
    return (
        <Select defaultValue={locale} onValueChange={handleLanguageChange}>
            <SelectTrigger className="bg-slate-100 py-1 px-1.5 hover:bg-slate-200 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5">
                <SelectValue placeholder="Select language" />
            </SelectTrigger>

            <SelectContent className="!w-0">
                <SelectGroup>
                    <SelectItem value="en" className="py-1 px-1.5 hover:!bg-slate-100 hover:cursor-pointer transition-all duration-150">
                        <Image 
                            src='/flags/GB-UKM - United Kingdom.svg' 
                            alt="English Flag" 
                            width={30} 
                            height={10} 
                        />
                    </SelectItem>

                    <SelectItem value="es" className="py-1 px-1.5 hover:!bg-slate-100 hover:cursor-pointer transition-all duration-150">
                        <Image 
                            src='/flags/ES - Spain.svg' 
                            alt="Spanish Flag" 
                            width={30} 
                            height={10} 
                        />
                    </SelectItem>

                    <SelectItem value="fr" className="py-1 px-1.5 hover:!bg-slate-100 hover:cursor-pointer transition-all duration-150">
                        <Image 
                            src='/flags/FR - France.svg' 
                            alt="French Flag" 
                            width={30} 
                            height={10} 
                        />
                    </SelectItem>

                    <SelectItem value="zh" className="py-1 px-1.5 hover:!bg-slate-100 hover:cursor-pointer transition-all duration-150">
                        <Image 
                            src='/flags/CN - China.svg' 
                            alt="Chineese Flag" 
                            width={30} 
                            height={10} 
                        />
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}

export default SelectLanguage;