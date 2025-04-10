'use client'

import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/logo-full.svg'
import { Sparkle } from "phosphor-react";
import { Badge } from "../shadcn/badge";
import NavMenu from "../pieces/nav-menu";

function NavBar() {
    return (
        <header className="flex justify-center w-full">
            <nav className="flex justify-between max-w-11/12 w-full py-2.5">
                <div className="flex items-center gap-8">
                    <Link href="/" className="focus-visible:outline-jade-600 rounded-md">
                        <Image src={logo} alt="PostNitro Logo" width={135} />
                    </Link>

                    {/* <ul>
                        <li>
                            <button type="button" aria-expanded="false" aria-controls="dropdown-products">
                                <span>Getting Started</span>
                                <CaretDown size={20} />
                            </button>
                        </li>

                        <li>
                            <button type="button" aria-expanded="false" aria-controls="dropdown-solutions">
                                <span>Products</span>
                                <CaretDown size={20} />
                            </button>
                        </li>

                        <li>
                            <button type="button" aria-expanded="false" aria-controls="dropdown-resources">
                                <span>Free Tools</span>
                                <CaretDown size={20} />
                            </button>
                        </li>

                        <li>
                            <button type="button" aria-expanded="false" aria-controls="dropdown-pricing">
                                <span>Plans</span>
                                <CaretDown size={20} />
                            </button>
                        </li>
                    </ul> */}

                    <NavMenu />
                </div>
                
                <div className="flex items-center gap-4">
                    <button type="button">L</button>

                    <button type="button" className="px-2.5 py-1.5 pr-5 border border-jade-500 rounded-md hover:bg-jade-500/5 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5 focus-visible:outline-jade-600">
                        <div className="flex items-center gap-3 text-jade-500">
                            <Sparkle size={18} className="font-bold" />

                            <span className="text-sm font-semibold">Create Image Post</span>

                            <Badge className="text-[9px] font-semibold tracking-wide px-2.5 bg-gradient-to-r from-mintlime-100 to-mintlime-900 rounded-full">BETA</Badge>
                        </div>
                    </button>

                    <button type="button" className="px-2.5 py-1.5 pr-5 border border-jade-500 bg-jade-500 rounded-md hover:bg-jade-600 hover:cursor-pointer transition-all duration-150 transform active:translate-y-0.5 focus-visible:outline-jade-600">
                        <div className="flex items-center gap-3 text-white">
                            <Sparkle size={18} className="font-bold" />

                            <span className="text-sm font-semibold">Create Carousel</span>
                        </div>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;