"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/images/m_logo.png";
import lionLogo from "../../assets/images/m_lion.png";
import dash from "../../assets/images/m_dash.png";

function MobileNavLabel({ name, path, onClick }) {
    const pathname = usePathname();

    const isActive =
        path === "/"
            ? pathname === "/"
            : pathname.startsWith(path);

    return (
        <a
            href={path}
            onClick={onClick}
            className={`text-lg py-3 border-b border-gray-100 ${
                isActive
                    ? "text-green font-semibold"
                    : "text-[#0F0F0F]"
            }`}
        >
            {name}
        </a>
    );
}

function MobileHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="lg:hidden w-full">
            {/* ================= HEADER ================= */}
       <header className=" relative flex items-center justify-between w-full h-[44px] px-4 py-[2px] bg-white shadow-[0px_2px_6px_rgba(1,138,6,0.2)] " >
                {/* Menu */}
              <button type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu" className=" flex items-center justify-center w-6 h-6 shrink-0 " >
                    <Menu
                        size={24}
                        strokeWidth={2}
                        color="#33363F"
                    />
                </button>

                {/* Center Logo */}
                <Link href="/" className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-end justify-center w-[48px] h-[48px] " > 
                <Image
                        src="/logo.jpg"
                        alt="Clover Carte Logo"
                        width={46}
                        height={46}
                        className="
                            w-[46px]
                            h-[46px]
                            rounded-full
                            object-cover mr-7
                        "
                    />
                </Link>

                {/* Lion */}
               <div className=" flex items-center justify-center w-[50px] h-[46px] shrink-0 " >
                    <Image
                        src={lionLogo}
                        alt="Lion"
                        width={50}
                        height={46}
                        className="
                            w-[50px]
                            h-[46px]
                            object-contain
                        "
                    />
                </div>
            </header>

            {/* ================= DIVIDER ================= */}
            <div className="w-full overflow-hidden">
                <Image
                    src={dash}
                    alt="divider"
                    width={393}
                    height={1}
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* ================= MOBILE DRAWER ================= */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/40"
                    onClick={closeMenu}
                >
                   <div className=" absolute left-0 top-0 h-full w-[280px] bg-white shadow-xl p-6 "
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Drawer Header */}
                        <div className="flex items-center justify-between mb-8">
                            <Link
                                href="/"
                                onClick={closeMenu}
                            >
                                <Image
                                    src={logo}
                                    alt="Clover Carte Logo"
                                    width={56}
                                    height={56}
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                            </Link>

                            <button
                                type="button"
                                onClick={closeMenu}
                                aria-label="Close menu"
                            >
                                <X
                                    size={24}
                                    color="#33363F"
                                />
                            </button>
                        </div>

                        {/* Navigation */}
                        <nav className="flex flex-col">
                            <MobileNavLabel
                                name="Home"
                                path="/"
                                onClick={closeMenu}
                            />

                            <MobileNavLabel
                                name="About"
                                path="/about-us"
                                onClick={closeMenu}
                            />

                            <MobileNavLabel
                                name="Products"
                                path="/products"
                                onClick={closeMenu}
                            />

                            <MobileNavLabel
                                name="Solutions"
                                path="/solutions"
                                onClick={closeMenu}
                            />

                            <MobileNavLabel
                                name="Contact"
                                path="/contact-us"
                                onClick={closeMenu}
                            />

                            <MobileNavLabel
                                name="Blog"
                                path="/blog"
                                onClick={closeMenu}
                            />
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MobileHeader;

