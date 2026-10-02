import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/images/logo.webp";
import lionLogo from "../../assets/images/lion.webp";
import dash from "../../assets/images/Vector.webp";

import NavLabel from "./Navlabel";
import { m_products } from "@/data/m_product";

function DesktopHeader() {
    const products = m_products

    return (
        <div className="hidden lg:block w-full">
            <header className="w-full h-[80px] bg-white shadow-[0_2px_6px_rgba(5,150,10,0.1)]">
                <div className="relative w-full h-full flex items-center justify-center">

                    <div className="h-[66px] flex items-center justify-center gap-[22px]">

                        {/* Left Navigation */}
                        <nav className="w-[250px] h-[32px] flex items-center ml-17">
                            <div className="flex items-center gap-[31px]">

                                <NavLabel
                                    name="Home"
                                    path="/"
                                />

                                <NavLabel
                                    name="About"
                                    path="/about-us"
                                />

                                {/* Products Dropdown */}
                                <div className="relative group h-full flex items-center">

                                    <NavLabel
                                        name="Products"
                                        path="/products"
                                        arrow
                                    />

                                    {/* Dropdown */}
                                    <div
                                        className="
                                            absolute
                                            top-[32px]
                                            left-1/2
                                            -translate-x-1/2
                                            pt-4
                                            opacity-0
                                            invisible
                                            translate-y-2
                                            group-hover:opacity-100
                                            group-hover:visible
                                            group-hover:translate-y-0
                                            transition-all
                                            duration-200
                                            z-50
                                        "
                                    >
                                        <div className="w-full bg-white rounded-md shadow-[0_4px_15px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden">

                                            {products.map((product) => (
                                                <Link
                                                    key={product.slug}
                                                    href={`/products/${product.slug}`}
                                                    className="
                                                        block
                                                        px-5
                                                        py-1.5
                                                        text-[14px]
                                                        font-medium
                                                        text-gray-700
                                                        hover:bg-[#F1F9F1]
                                                        hover:text-[#018A06]
                                                        transition-colors
                                                        text-nowrap

                                                    "
                                                >
                                                    {product.name}
                                                </Link>
                                            ))}

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </nav>

                        {/* Logo */}
                        <Link
                            href="/"
                            aria-label="Clover Carte Home"
                            className="w-[90px] h-[90px] flex-shrink-0 rounded-full bg-white flex items-center justify-center mt-3"
                        >
                            <Image
                                src="/logo.webp"
                                alt="Clover Carte Logo"
                                width={90}
                                height={90}
                                className="w-[90px] h-[90px] rounded-full object-contain"
                            />
                        </Link>

                        {/* Right Navigation */}
                        <nav className="w-[334px] h-[32px] flex items-center">
                            <div className="flex items-center gap-[31px]">

                                <NavLabel
                                    name="Solutions"
                                    path="/solutions"
                                />

                                <NavLabel
                                    name="Contact"
                                    path="/contact-us"
                                />

                                <NavLabel
                                    name="Blog"
                                    path="/blog"
                                />

                            </div>
                        </nav>

                    </div>

                    {/* Lion */}
                    <div className="absolute right-[96px] top-[6.5px] w-[73px] h-[67px]">
                        <Image
                            src={lionLogo}
                            alt="Made in India"
                            width={73}
                            height={67}
                            className="w-[73px] h-[67px] object-contain"
                        />
                    </div>

                </div>
            </header>

            {/* Dashed Bottom */}
            <div className="w-full flex items-start overflow-hidden">
                <Image
                    src={dash}
                    alt=""
                    width={1440}
                    height={33}
                    className="w-full object-contain"
                />
            </div>
        </div>
    );
}

export default DesktopHeader;