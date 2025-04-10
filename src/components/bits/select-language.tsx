import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shadcn/select"

function SelectLanguage() {
    return (
        <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="art">Argentina Time (ART)</SelectItem>
                <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default SelectLanguage;
