
import { Clock3, LucideSquareMousePointer, LucideShieldPlus } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import {
     Building2, Briefcase, Hospital, GraduationCap, Plane, Dumbbell, Building, Hotel, Factory, Store,  Settings, 
} from "lucide-react";
import Image from "next/image";
import { BiQrScan } from "react-icons/bi";
import { FaArrowRight, FaRegSmile, FaRegThumbsUp, FaSearchengin } from "react-icons/fa";
import { FiMenu, FiRefreshCcw, FiUserMinus } from "react-icons/fi";
import { IoMdCard, IoMdCash } from "react-icons/io";
import { IoBagOutline, IoDocumentTextOutline, IoLocationOutline, IoSearch, IoShieldCheckmarkOutline, IoTrendingUpOutline } from "react-icons/io5";
import { MdLockOutline, MdOutline24Mp, MdOutlineAspectRatio, MdOutlineDesignServices, MdOutlineEnergySavingsLeaf, MdOutlineLayers, MdOutlineSettingsSuggest, MdOutlineTouchApp, MdSecurity } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";
import { ImWrench } from "react-icons/im";
import { PiBoxArrowUpLight } from "react-icons/pi";
import { FaGlassWaterDroplet, FaScrewdriverWrench } from "react-icons/fa6";
import {  TbRouter } from "react-icons/tb";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { BsMoonStars } from "react-icons/bs";
import { GoPencil } from "react-icons/go";
import Link from "next/link";

const maintenanceTips = [
    "Regular cleaning of the machine exterior and touchscreens.",
    "Timely refilling of products to ensure availability.",
    "Checking the payment system for any issues.",
    "Monitoring inventory levels through the smart dashboard.",
    "Scheduling periodic technical inspections.",
];

const benefits = [
    { icon: MdOutline24Mp, label: "24/7 availability for customers", },
    { icon: FiUserMinus, label: "Reduced labor costs", },
    { icon: IoTrendingUpOutline, label: "Increased sales and revenue", },
    { icon: FaSearchengin, label: "Real-time inventory tracking", },
    { icon: MdSecurity, label: "Secure and reliable transactions", },
    { icon: MdOutlineAspectRatio, label: "Minimal space requirement", },
    { icon: FaRegSmile, label: "Enhanced customer experience", },
];

const locations = [
    { icon: Briefcase, label: "Offices & Coworking" },
    { icon: Building2, label: "Shopping Malls" },
    { icon: Hospital, label: "Hospitals & Clinics" },
    { icon: GraduationCap, label: "Schools & Colleges" },
    { icon: Plane, label: "Airports & Stations" },
    { icon: Dumbbell, label: "Gyms & Sports Clubs" },
    { icon: Building, label: "Residential Complexes" },
    { icon: Hotel, label: "Hotels & Resorts" },
    { icon: Factory, label: "Factories & Warehouses" },
    { icon: Store, label: "Retail Stores" },
];

const steps = [
    {
        icon: IoSearch,
        title: "Browse available products",
        step: "Step 1",
    },
    {
        icon: LucideSquareMousePointer,
        title: "Select desired item",
        step: "Step 2",
    },
    {
        icon: IoMdCash,
        title: "Make payment (Cashless/UPI)",
        step: "Step 3",
    },
    {
        icon: IoBagOutline,
        title: "Collect your product",
        step: "Step 4",
    },
];


const features = [
    { icon: MdOutlineLayers, label: "LARGE PRODUCT STORAGE CAPACITY", },
    { icon: MdOutlineTouchApp, label: "USER-FRIENDLY INTERFACE", },
    { icon: IoMdCard, label: "CASHLESS PAYMENT SUPPORT", },
    { icon: BiQrScan, label: "QR CODE & UPI", },
    { icon: MdOutlineEnergySavingsLeaf, label: "ENERGY-EFFICIENT OPERATION", },
    { icon: FiMenu, label: "ADJUSTABLE SHELVES", },
    { icon: TfiStatsUp, label: "SMART INVENTORY MONITORING", },
    { icon: ImWrench, label: "DURABLE CONSTRUCTION", },
    { icon: PiBoxArrowUpLight, label: "EASY REFILLING", },
    { icon: MdLockOutline, label: "SECURE DISPENSING", },
    { icon: FaScrewdriverWrench, label: "LOW MAINTENANCE", },
    { icon: MdOutlineDesignServices, label: "MODERN DESIGN", },
    { icon: TbRouter, label: "IOT MONITORING", },
    { icon: HiOutlineCheckBadge, label: "RELIABLE PERFORMANCE", }
];

const products = [
    {
        icon: BsMoonStars,
        title: "Snacks",
        description: "Chips, biscuits, chocolates, and healthy bars.",
    },
    {
        icon: FaGlassWaterDroplet,
        title: "Beverages",
        description: "Cold drinks, juices, water, and energy drinks.",
    },
    {
        icon: LucideShieldPlus,
        title: "Personal Care",
        description: "Sanitizers, masks, and hygiene products.",
    },
    {
        icon: GoPencil,
        title: "Stationery",
        description: "Pens, notebooks, and office supplies.",
    },
];

export default function Layout2blog() {
    return (
        <>

            <section className="max-w-[1248px] mx-auto px-5 lg:px-0 pt-10">
                <div
                    className="relative h-[570px] rounded overflow-hidden bg-cover bg-center"
                    style={{
                        backgroundImage: `
                    linear-gradient(
                        270deg,
                        rgba(102,102,102,0) 0%,
                        rgba(0,0,0,.65) 100%
                    ),
                    url("/images/vendshopblog.jpg")
                `,
                    }}
                >
                    <div className="absolute inset-0 flex items-end">
                        <div className="px-8 md:px-12 lg:px-[61px] pb-10 lg:pb-[71px] max-w-full">
                            
                            <Link href={"/products/vendshop"}>
                                <h1 className="mt-2 text-[#00BC07] text-4xl lg:text-5xl font-bold leading-tight">
                                    Vendshop Vending
                                    <br />
                                    Machine
                                </h1>
                            </Link>

                            <h2 className="mt-3 text-white text-[16px] lg:text-2xl font-bold">
                                Features, Benefits & Guide
                            </h2>
                            
                            <p className="mt-6 hidden lg:block text-white/90 leading-6 max-w-[530px]">
                                Discover how the Vendshop Smart Vending Machine helps
                                businesses automate retail with intelligent
                                dispensing, cashless payments, IoT connectivity,
                                and real-time inventory management.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-8 text-white text-sm">

                                <div className="flex items-center gap-2">
                                    <Clock3 size={18} />
                                    <span className="text-[12px]" >7 Min Read</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <IoDocumentTextOutline size={18} />
                                    <span className="text-[12px]" >Product Guide</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <FiRefreshCcw size={18} />
                                    <span className="text-[12px]" >Updated July 2026</span>
                                </div>

                            </div>
                            <a href="/products/vendsop">
                                <button className="mt-10 lg:w-auto w-full bg-[#018A06] hover:bg-[#017205] transition px-8 py-4 rounded-lg flex items-center justify-center gap-3 text-white text-[15px] lg:text-xl  font-semibold">
                                    Explore Vendshop
                                    <FaArrowRight size={22} />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Category + Date */}
                <div className="flex items-center gap-3 my-12">

                    <div className="px-[9px] py-1 rounded border border-[#C1E2C2] bg-[#F1F9F1]">
                        <span className="text-[#018A06] text-xs font-bold uppercase tracking-[1px]">
                            Strategy
                        </span>
                    </div>

                    <span className="text-base text-[#5F5F5F]">
                        Oct 24, 2024
                    </span>

                </div>

                {/* Content */}
                <div className="mt-6 space-y-4">

                    <h2 className="text-[24px] lg:text-[36px] leading-[30px] lg:leading-[45px]  font-semibold text-[#0F0F0F]">
                        Vendshop Vending Machine | Features, Benefits & Guide
                    </h2>

                    <p className="text-base leading-[25px] text-[#0F0F0F] lg:text-justify">
                        The demand for smart vending machines is growing rapidly as
                        businesses look for automated ways to serve customers and
                        employees. <a className="font-bold" href="/products/vendshop">Vendshop Vending Machine offers</a>    a convenient,
                        secure, and efficient solution for selling snacks,
                        beverages, and other packaged products without requiring
                        full-time staff. Whether you operate an office, shopping
                        mall, hospital, educational institution, factory, or retail
                        store, a Vendshop machine can enhance customer convenience
                        while generating additional revenue. Designed with modern
                        technology and user-friendly features, it helps businesses
                        deliver a seamless self-service shopping experience.
                    </p>

                </div>
            </section>
            <section className="max-w-[1248px] mx-auto px-5 lg:px-0 py-10">

                <div className="grid lg:grid-cols-[469px_1fr] gap-12 items-start">

                    {/* Left Image */}

                    <div className="relative overflow-hidden rounded-[4px] w-full h-[475px]">
                        <Image
                            src="/images/machine/m2.jpeg"
                            alt="Vendshop Vending Machine"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 469px"
                            priority
                        />
                    </div>

                    {/* Right Content */}

                    <div className="flex flex-col gap-8">

                        <h2 className="text-[24px] font-semibold lg:leading-[45px] leading-[30px] text-[#0F0F0F]">
                            What is a Vendshop Vending Machine?
                        </h2>

                        {/* Highlight */}

                        <div className="border-l-2 border-[#018A06] pl-4">

                            <p className="text-[15px] lg:text-[18px] leading-[25px] lg:text-justify text-[#0F0F0F]">
                                A Vendshop Vending Machine is an advanced automated
                                retail machine designed to dispense a wide range of
                                packaged products. It allows customers to purchase
                                items quickly through a simple selection process and
                                secure payment system. These machines are built with
                                cutting-edge technology to ensure reliability and
                                ease of use for both operators and consumers.
                            </p>

                        </div>

                        <div className="space-y-5">

                            <h3 className="text-2xl font-semibold text-[#0F0F0F]">
                                Key Features
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-6">

                                {features.map((feature) => (
                                    <div
                                        key={feature.label}
                                        className="flex items-start gap-2"
                                    >
                                        <feature.icon
                                            size={20}
                                            className="text-[#018A06] mt-[2px] flex-shrink-0"
                                        />

                                        <span className="text-[12px] leading-[15px] font-medium lg:uppercase text-[#5F5F5F]">
                                            {feature.label}
                                        </span>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            <section className="max-w-[1248px] mx-auto px-5 lg:px-0 py-10">

                {/* Heading */}

                <div className="max-w-[860px] mx-auto text-center">

                    <div className="flex justify-center items-center gap-3">

                        <MdOutlineSettingsSuggest
                            size={30}
                            className="text-[#018A06] flex-shrink-0"
                        />

                        <h2 className="text-[20px] sm:text-[32px] leading-[40px] font-bold text-[#0F0F0F]">
                            How Does a Vendshop Vending Machine Work?
                        </h2>

                    </div>

                    <p className="mt-5 text-base leading-7 text-[#4B5563]">
                        Operating a Vendshop Vending Machine is simple and requires
                        minimal user effort.
                    </p>

                </div>

                {/* Divider */}

                <div className="mt-10 border-t border-[#D1D5DB]" />

                {/* Steps */}

                <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-5">

                    {steps.map(({ icon: Icon, title, step }) => (
                        <div
                            key={step}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5">
                                <Icon
                                    size={30}
                                    className="text-[#2E7D32]"
                                />
                            </div>

                            <h3 className="text-base font-semibold text-[#1F2937] leading-6">
                                {title}
                            </h3>

                            <p className="mt-3 text-xs text-[#5F5F5F]">
                                {step}
                            </p>
                        </div>
                    ))}

                </div>

            </section>

            <section className="max-w-[1248px] mx-auto px-5 lg:px-0 py-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-32">

                    {/* Left */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <FaRegThumbsUp className="w-6 h-6 text-[#2E7D32]" />

                            <h2 className="text-[26px] font-bold text-[#333333]">
                                Benefits of Vendshop Vending Machines
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
                            {benefits.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center gap-3"
                                >
                                    <item.icon
                                        className="w-5 h-5 text-[#018A06] shrink-0"
                                        fill="#018A06"
                                    />

                                    <span className="text-[12px] lg:text-[16px] text-[#5F5F5F] font-medium leading-5">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <IoLocationOutline className="w-6 h-6 text-[#2E7D32]" />

                            <h2 className="text-[26px] font-bold text-[#333333]">
                                Where Can You Install It?
                            </h2>
                        </div>

                        <p className="text-[20px] text-[#0F0F0F] mb-8">
                            Our machines are perfect for 20+ locations including:
                        </p>

                        <div className="grid grid-cols-2 gap-y-6 gap-x-10">
                            {locations.map(({ icon: Icon, label }) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-3"
                                >
                                    <Icon className="w-4 h-4 text-[#2E7D32] shrink-0" />

                                    <span className="text-[12px] lg:text-[16px] text-[#5F5F5F]">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <section className="max-w-[1248px] mx-auto px-5 lg:px-0 lg:py-10">
                <h2 className="text-[32px] font-bold text-[#333333] text-center lg:mb-14 mb-5">
                    Products You Can Sell
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
                    {products.map(({ icon: Icon, title, description }) => (
                        <div
                            key={title}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5">
                                <Icon className="w-9 h-9 text-[#018A06]" />
                            </div>

                            <h3 className="text-[20px] font-bold text-[#333333] mb-3">
                                {title}
                            </h3>

                            <p className="text-[16px] leading-6 text-[#4B5563]">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-full py-10">
                <div className="max-w-[1248px] mx-auto px-5 flex flex-col gap-15">
                    {/* Heading */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-3">
                            <IoShieldCheckmarkOutline className="w-9 h-9 text-[#018A06]" />

                            <h2 className="text-[36px] leading-[40px] font-bold text-[#333333] text-center">
                                Why Choose Clover Carte?
                            </h2>
                        </div>
                        <div>
                            <p className="text-base leading-[25px] text-[#0F0F0F] lg:text-justify">
                                When selecting a vending machine partner, quality, technology, and
                                service are equally important. Clover Carte is committed to
                                delivering reliable vending solutions that help businesses automate
                                retail operations with confidence.
                            </p>
                            <p className="text-base leading-[25px] text-[#0F0F0F] lg:text-justify">
                                <a href="/" className="font-bold" >Clover Carte offers</a> modern vending machines built with advanced technology, durable components, and user-friendly functionality. Whether you need a vending machine for offices, factories, hospitals, educational institutions, or retail spaces, the company provides customized solutions to suit different business requirements.
                                Customers benefit from professional installation support, product customization, technical assistance, maintenance services, and dependable after-sales support. By combining innovation with practical design, Clover Carte helps organizations create a smarter and more convenient self-service experience.
                            </p>
                        </div>
                    </div>

                    {/* Maintenance Tips */}
                    <div className="relative border-2 border-[#018A06] rounded-lg px-5 pt-10 pb-8">
                        {/* Floating Heading */}
                        <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-white px-6">
                            <div className="flex items-center gap-2">
                                <Settings className="w-6 h-6 text-[#018A06]" />

                                <h3 className="text-2xl font-bold text-[#0F0F0F]">
                                    Maintenance Tips
                                </h3>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            {maintenanceTips.map((tip, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center gap-5 py-4 ${index !== maintenanceTips.length - 1
                                        ? "border-b border-gray-100"
                                        : ""
                                        }`}
                                >
                                    <span className="text-xl font-bold text-[#018A06] min-w-[36px]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <p className="text-base text-[#5F5F5F]">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Conclusion */}
                    <div className="flex flex-col items-center gap-6">
                        <h2 className="text-[36px] leading-[40px] font-bold text-[#333333] text-center">
                            Conclusion
                        </h2>

                        <p className="text-base leading-[25px] text-[#0F0F0F] lg:text-justify">
                            A <a href="/products/vendshop" className="font-bold" > Vendshop Vending Machine</a> is an excellent investment for businesses
                            looking to improve customer convenience while embracing smart
                            automation. Its advanced technology, secure payment options, easy
                            operation, and low maintenance make it ideal for offices,
                            hospitals, factories, educational institutions, shopping malls,
                            hotels, and other commercial environments. If you're looking for a
                            dependable Vendshop Vending Machine, Snack Vending Machine, or Smart
                            Vending Machine in India, Clover Carte provides innovative,
                            high-quality vending solutions tailored to your business needs. With
                            reliable products, customization options, and dedicated support, we
                            help organizations deliver a seamless and modern vending experience.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}