// External imports
import Image from "next/image";

// Local imports
import { Link } from "@/i18n/navigation";
import logo from '../../../public/logo-full.svg';

function Logo() {
    return (
        <Link 
            href="/" 
            className="focus-visible:outline-jade-600 rounded-md max-w-[135px] max-[1290px]:max-w-[125px]"
        >
            <Image 
                src={logo} 
                alt="PostNitro Logo" 
            />
        </Link>
    );
}

export default Logo;