"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import {
    footerProductsLink,
    footerQuickLinks,
} from "@/utils/helper";

export default function MobileFooterAccordion() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection((prev) =>
            prev === section ? null : section
        );
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2">

            {/* Quick Links */}
            <div className="border-b border-white/10">

                <button
                    type="button"
                    onClick={() => toggleSection("quick")}
                    className="flex w-full items-center justify-between py-4 text-left"
                    aria-expanded={openSection === "quick"}
                >
                    <span className="text-[16px] font-medium leading-[30px] tracking-[0.8px] text-white">
                        QUICK LINKS
                    </span>

                    <IoIosArrowForward
                        size={22}
                        className={`text-white transition-transform duration-300 ${
                            openSection === "quick"
                                ? "rotate-90"
                                : ""
                        }`}
                    />
                </button>

                <div
                    className={`grid transition-all duration-300 ease-in-out ${
                        openSection === "quick"
                            ? "grid-rows-[1fr] opacity-100 pb-4"
                            : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                    <div className="overflow-hidden">
                        <div className="flex flex-col gap-2">

                            {footerQuickLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.path}
                                    className="group flex items-center gap-2"
                                >
                                    <IoIosArrowForward
                                        size={15}
                                        className="shrink-0 text-white transition-transform duration-200 group-hover:translate-x-1"
                                    />

                                    <span className="text-[12px] font-medium leading-[20px] text-white transition-colors group-hover:text-[#018A06]">
                                        {item.label}
                                    </span>
                                </a>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

            {/* Products */}
            <div className="border-b border-white/10">

                <button
                    type="button"
                    onClick={() => toggleSection("products")}
                    className="flex w-full items-center justify-between py-4 text-left"
                    aria-expanded={openSection === "products"}
                >
                    <span className="text-[20px] font-medium leading-[30px] tracking-[0.8px] text-white">
                        Products
                    </span>

                    <IoIosArrowForward
                        size={22}
                        className={`text-white transition-transform duration-300 ${
                            openSection === "products"
                                ? "rotate-90"
                                : ""
                        }`}
                    />
                </button>

                <div
                    className={`grid transition-all duration-300 ease-in-out ${
                        openSection === "products"
                            ? "grid-rows-[1fr] opacity-100 pb-4"
                            : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                    <div className="overflow-hidden">
                        <div className="flex flex-col gap-3">

                            {footerProductsLink.map((product) => (
                                <a
                                    key={product.label}
                                    href={product.path}
                                    className="group flex items-center gap-2"
                                >
                                    <IoIosArrowForward
                                        size={15}
                                        className="shrink-0 text-white transition-transform duration-200 group-hover:translate-x-1"
                                    />

                                    <span className="text-[12px] font-normal leading-[20px] text-white transition-colors group-hover:text-[#018A06]">
                                        {product.label}
                                    </span>
                                </a>
                            ))}

                            <a
                                href="https://app.vendicarte.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 text-[16px] font-medium leading-[24px] text-[#018A06] transition-opacity hover:opacity-80"
                            >
                                VendiCarte Software
                            </a>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}