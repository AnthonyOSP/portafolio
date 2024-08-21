"use client";

import Link from "next/link"
import { usePathname } from 'next/navigation';

export default function navbar() {

    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;

    return (
        <>
            <nav className="navbar fixed bottom-0 left-0 w-full bg-[#2b2b2cbf] backdrop-blur-md border border-solid border-[#383838] rounded-t-xl shadow-xl z-10 sm:rounded-3xl lg:absolute lg:bottom-auto lg:top-0 lg:left-auto lg:right-0 lg:w-max lg:rounded-tr-[20px] lg:rounded-bl-[20px] lg:rounded-tl-[0px] lg:rounded-br-[0px] lg:px-5 lg:shadow-none">
                <ul className="navbar-list flex flex-wrap justify-center items-center px-2.5 sm:gap-5 lg:gap-8 lg:px-5">
                    <li className="navbar-item">
                        <button><Link href="/" className={`navbar-link ${isActive('/') ? 'active' : ''}`} data-nav-link>Sobre mi</Link></button>
                    </li>

                    <li className="navbar-item">
                        <button><Link href="/resume" className={`navbar-link ${isActive('/resume') ? 'active' : ''}`} data-nav-link>Resumen</Link></button>
                    </li>

                    <li className="navbar-item">
                        <button><Link href="/portfolio" className={`navbar-link ${isActive('/portfolio') ? 'active' : ''}`} data-nav-link>Portfolio</Link></button>
                    </li>

                    <li className="navbar-item">
                        <button><Link href="/contact" className={`navbar-link ${isActive('/contact') ? 'active' : ''}`} data-nav-link>Contacto</Link></button>
                    </li>
                </ul>
            </nav>
        </>
    )
}
