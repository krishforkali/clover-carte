"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import logo from "../../assets/images/m_logo.webp";
import lionLogo from "../../assets/images/m_lion.webp";
import RequestQuoteButton from "./RequestQuoteButton";

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

    const whatsappPhone = "917499645927";
    const whatsappMessage = encodeURIComponent(
        "Hello Clover Carte, I'm interested in your vending machines solutions. Please share more details about your products and pricing. Thank you!"
    );

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
                <Link
                    href="/"
                    aria-label="Clover Carte Home"
                    className="absolute left-1/2 top-[24px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[48px] h-[48px] rounded-full bg-white z-10"
                >
                    <Image
                        src="/logo.webp"
                        alt="Clover Carte Logo"
                        width={46}
                        height={46}
                        priority
                        className="w-[46px] h-[46px] rounded-full object-contain"
                    />
                </Link>

                {/* Lion */}
                <div className="flex items-center justify-center w-[50px] h-[46px] shrink-0">
                    <Image
                        src={lionLogo}
                        alt="Lion"
                        width={50}
                        height={46}
                        className="w-[50px] h-[46px] object-contain"
                    />
                </div>
            </header>

            {/* ================= DIVIDER ================= */}
            <div className="w-full flex items-start overflow-hidden pointer-events-none -mt-[0.5px]">
                {/* Left dashed line */}
                <svg className="flex-1 h-[14px]" preserveAspectRatio="none">
                    <line
                        x1="0"
                        y1="1"
                        x2="100%"
                        y2="1"
                        stroke="#0F0F0F"
                        strokeOpacity="0.45"
                        strokeWidth="1.2"
                        strokeDasharray="4 4"
                    />
                </svg>

                {/* Center cradle curve - exactly centered and proportional to logo */}
                <svg
                    width="64"
                    height="14"
                    viewBox="0 0 64 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                >
                    <path
                        d="M0 0 L0 1 C14 1 17 12 32 12 C47 12 50 1 64 1 L64 0 Z"
                        fill="white"
                    />
                    <path
                        d="M0 1 C14 1 17 12 32 12 C47 12 50 1 64 1"
                        stroke="#0F0F0F"
                        strokeOpacity="0.45"
                        strokeWidth="1.2"
                        strokeDasharray="4 4"
                    />
                </svg>

                {/* Right dashed line */}
                <svg className="flex-1 h-[14px]" preserveAspectRatio="none">
                    <line
                        x1="0"
                        y1="1"
                        x2="100%"
                        y2="1"
                        stroke="#0F0F0F"
                        strokeOpacity="0.45"
                        strokeWidth="1.2"
                        strokeDasharray="4 4"
                    />
                </svg>
            </div>

            {/* ================= MOBILE DRAWER ================= */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/40"
                    onClick={closeMenu}
                >
                   <div className=" absolute left-0 top-0 h-full w-[280px] bg-white shadow-xl flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Drawer Header */}
                        <div className="flex items-center justify-between px-6 pt-6 mb-8">
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
                        <nav className="flex flex-col px-6">
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

                        {/* ===== Bottom Brand Section ===== */}
                        <div className="mt-auto px-6 pb-6">
                            {/* Logo Circle + Brand Name */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-[48px] h-[48px] rounded-full border-2 border-[#018A06] flex items-center justify-center shrink-0 overflow-hidden bg-white">
                                    <Image
                                        src="/logo.webp"
                                        alt="Clover Carte Logo"
                                        width={42}
                                        height={42}
                                        className="w-[42px] h-[42px] rounded-full object-contain"
                                    />
                                </div>
                                <h3 className="text-[22px] font-semibold leading-[28px] text-[#018A06]">
                                    CLOVER CARTE
                                </h3>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex items-center gap-3 mb-5">
                                {/* WhatsApp Button */}
                                <a
                                    href={`https://wa.me/${whatsappPhone}?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 h-[40px] rounded-lg bg-[#25D366] text-white text-[14px] font-medium transition-colors hover:bg-[#20ba5a]"
                                >
                                    <FaWhatsapp size={18} />
                                    WhatsApp
                                </a>

                                {/* Request Quote Button */}
                                <RequestQuoteButton
                                    className="flex-1 flex items-center justify-center h-[40px] rounded-lg bg-[#018A06] text-white text-[14px] font-medium transition-colors hover:bg-[#016d05]"
                                    label="Get a Quote"
                                    labelClass="text-[14px] font-medium"
                                />
                            </div>

                            {/* Dashed Divider */}
                            <div className="w-full border-t border-dashed border-[#018A06]/50 mb-4" />

                            {/* Tagline */}
                            <p className="text-[13px] font-normal leading-[18px] text-[#555555]">
                                India&apos;s custom smart vending machine manufacturer,
                                delivering intelligent automation, OEM/ODM manufacturing,
                                and connected retail solutions.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MobileHeader;

