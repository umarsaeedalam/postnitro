// Local Imports
import NavMenu from "@/components/pieces/nav-menu";
import MobileMenu from "@/components/pieces/mobile-menu";
import SelectLanguage from "@/components/bits/select-language";
import Logo from "../bits/logo";
import CtaButtons from "@/components/bits/cta-buttons";


function Header() {
    return (
        <header className="flex justify-center w-full">
            <nav className="flex justify-between max-w-11/12 w-full py-2.5 max-[1145px]:max-w-full max-[1145px]:px-4">
                {/* Desktop navigation - hidden on mobile */}
                <div className="flex items-center gap-8 max-[1145px]:hidden">
                    <Logo />
                    <NavMenu />
                </div>

                {/* Mobile menu - shown only on smaller screens */}
                <div className="min-[1145px]:hidden">
                    <MobileMenu />
                </div>
                
                {/* Language selector and CTA buttons */}
                <div className="flex items-center gap-4">
                    <SelectLanguage />
                    <CtaButtons />
                </div>
            </nav>
        </header>
    );
}

export default Header;