import contatct_img from "../../assets/images/cnct_1.webp"

import Image from "next/image";
import FAQAccordion from "@/components/common/FAQAccordion";
import Link from "next/link";
import {
    FiArrowRight, FiFlag, FiMail, FiMapPin, FiPhone,
} from "react-icons/fi";
import { LucideClock5 } from "lucide-react";
import { FaRegCheckCircle, FaWifi } from "react-icons/fa";
import { IoLocationOutline, IoSettingsOutline } from "react-icons/io5";
import RequestQuoteButton from "@/components/common/RequestQuoteButton";
import ContactForm from "./ContactForm";

const faqs = [
    {
        question: "Do You Provide Customized Vending Machine Manufacturing?",
        answer: "Yes, Clover Carte provides customized vending machine manufacturing solutions based on your business requirements. We can customize machine design, size, capacity, product configuration, branding, payment options, and smart features to meet your specific needs."
    },
    {
        question: "Do You Provide After-Sales Support for Vending Machines?",
        answer: "Yes, Clover Carte provides after-sales support to ensure smooth and reliable vending machine operations. Our support includes technical assistance, troubleshooting, maintenance guidance, and assistance with machine-related issues."
    },
    {
        question: "Can I Request a Product Demonstration?",
        answer: "Yes, you can request a product demonstration to understand the machine’s features, functionality, and operation. Contact our team with your requirements, and we will guide you through the available demonstration options."
    },
    {
        question: "How Can I Choose the Right Vending Machine for My Business?",
        answer: "Choosing the right vending machine depends on your product type, location, customer requirements, capacity, and expected usage. Our team can understand your requirements and recommend a suitable smart vending solution for your business."
    },
    {
        question: "Do You Provide OEM/ODM Vending Machine Manufacturing?",
        answer: "Yes, Clover Carte offers OEM and ODM vending machine manufacturing solutions for businesses and brands. We work with clients to develop customized vending machines according to their product, design, branding, and technical requirements."
    },
    {
        question: "How Can I Get a Quotation for a Vending Machine?",
        answer: "You can contact Clover Carte with details about your required vending machine, quantity, customization needs, and intended application. Our team will review your requirements and provide a suitable quotation based on your project specifications"
    },

]

const contactCards = [
    {
        icon: FaWifi,
        title: "IoT Enabled",
        value: "Smart Technology",
        iconBg: "bg-[#F1F9F1]",
        iconColor: "text-[#018A06]",
    },
    {
        icon: FiFlag,
        title: "Made in India",
        value: "Premium Quality",
        iconBg: "bg-[#FFF7ED]",
        iconColor: "text-[#F58E05]",
    },
    {
        icon: IoSettingsOutline,
        title: "OEM / ODM",
        value: "Customization",
        iconBg: "bg-[#F1F9F1]",
        iconColor: "text-[#018A06]",
    },
    {
        icon: IoLocationOutline,
        title: "PAN India",
        value: "Installation & Service",
        iconBg: "bg-[#FFF7ED]",
        iconColor: "text-[#F58E05]",
    },
];

const Contact = () => {
    return (
        <main className="w-full overflow-hidden bg-white space-y-12">
            <section className="relative w-full pt-12">
                <div className=" pointer-events-none absolute left-1/2 top-0 hidden h-[404px] w-[470px] -translate-x-[20%] rounded-[50%] bg-[rgba(5,150,10,0.10)] blur-[25px] lg:block " />

                <div
                    className=" relative mx-auto flex w-full max-w-[1248px] flex-col gap-12 px-6 py-16 sm:px-8 md:px-12 lg:flex-row lg:items-start lg:gap-[90px] lg:px-0 lg:py-0 
                    "
                >
                    {/* LEFT CONTENT */}
                    <div
                        className=" flex w-full flex-col items-start gap-2 lg:w-[647px] lg:flex-none
                        "
                    >
                        {/* Heading + Description */}
                        <div className=" flex w-full flex-col items-start gap-3 " >
                            <h1 className=" w-full text-[38px] font-bold leading-[1.2] tracking-[-1px] text-[#0F0F0F] sm:text-[44px] lg:h-[180px] lg:text-[48px] lg:leading-[60px] lg:tracking-[-1.2px] " >
                                Let’s build your <span className="text-green" >Smart Vending</span> Solution <br />Together!!
                            </h1>

                            <p
                                className=" max-w-[530px]  text-[17px] font-normal leading-[4] text-[#0F0F0F] lg:h-[84px] lg:text-[20px] lg:leading-[26px]
                                "
                            >
                                Get expert consultation, customized vending machines,
                                and PAN India installation support for your B2B
                                operational scaling.
                            </p>
                        </div>

                        {/* Buttons + Response text */}
                        <div
                            className=" flex w-full flex-col items-start gap-5
                            "
                        >
                            <div
                                className=" flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:gap-[18px]
                                "
                            >
                                {/* Primary button */}
                                <Link
                                    href="/"
                                    className=" group flex h-[69px] w-full items-center justify-center rounded-lg border-2 border-[#018A06] bg-[#018A06] px-8 transition-all duration-300 hover:bg-[#017305] sm:w-[253px]
                                    "
                                >
                                    <span
                                        className=" flex items-center justify-center gap-1 text-[20px] font-semibold leading-[27px] text-white
                                        "
                                    >
                                        View Details
                                        <FiArrowRight
                                            size={22}
                                            strokeWidth={1.8}
                                            className="
                                                transition-transform
                                                duration-300
                                                group-hover:translate-x-1
                                            "
                                        />
                                    </span>
                                </Link>

                                <RequestQuoteButton label="Request a Quote →" model="second"
                                    labelClass={`flex items-center justify-center gap-1 text-[20px] font-semibold leading-[27px] text-[#0F0F0F]`}
                                    className={`group flex h-[69px] w-full items-center justify-center rounded-lg border-2 border-[#018A06] bg-white px-8 transition-all duration-300 hover:bg-[#F1F9F1] sm:w-[259px]`} />

                            </div>

                            {/* Response message */}
                            <div className="flex items-center gap-4">
                                <div
                                    className=" flex h-6 w-6 shrink-0 items-center justify-center rounded-full
                                    "
                                >
                                    <LucideClock5
                                        size={15}
                                        className="text-green"
                                        strokeWidth={3}
                                    />
                                </div>

                                <span
                                    className="text-[16px] font-normal leading-6 text-[#0F0F0F]
                                    "
                                >
                                    We respond within 24 hours!
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div
                        className=" relative hidden h-[415px] w-[511px] shrink-0 lg:block
                        "
                    >
                        <div className=" absolute left-0 top-0 h-[404px] w-[470px] rounded-[50%] bg-[rgba(5,150,10,0.10)] blur-[25px] " />

                        {/* Machine / product image */}
                        <div
                            className=" absolute left-0 top-[15px] h-[400px] w-[267px]
                            "
                        >
                            <Image
                                src="/images/contact_image.webp"
                                alt="Smart vending machine"
                                fill
                                priority
                                className="object-contain object-bottom"
                            />
                        </div>

                        {/* Contact cards */}
                        <div
                            className=" absolute right-0 top-[66px] flex w-[224px] flex-col gap-2
                            "
                        >
                            {contactCards.map((card) => {
                                const Icon = card.icon;

                                return (
                                    <div
                                        key={card.title}
                                        className=" flex h-[65px] w-[224px] items-center gap-3 rounded-lg border border-[#C1E2C2] bg-white p-3 shadow-[0_4px_16px_rgba(0,0,0,0.03)]
                                        "
                                    >
                                        {/* Icon */}
                                        <div
                                            className={` flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${card.iconBg}
                                            `}
                                        >
                                            <Icon
                                                size={20}
                                                strokeWidth={1.7}
                                                className={card.iconColor}
                                            />
                                        </div>

                                        {/* Text */}
                                        <div className="flex min-w-0 flex-col">
                                            <span
                                                className="text-[14px] font-bold leading-5 text-[#0F0F0F]
                                                "
                                            >
                                                {card.title}
                                            </span>

                                            <span
                                                className=" truncate text-[12px] font-normal leading-4 text-[#5F5F5F]
                                                "
                                            >
                                                {card.value}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full px-6 sm:px-8 md:px-12 lg:px-0">
                <div
                    className=" mx-auto flex w-full max-w-[1244px] flex-col gap-5 lg:flex-row lg:items-center lg:gap-6 xl:gap-[96px]
        "
                >
                    {/* Address Card */}
                    <div
                        className=" box-border flex w-full flex-col items-start gap-[19px] rounded-xl border border-[#C1E2C2] p-4 lg:h-[149px] lg:w-[473px] lg:flex-none"
                    >
                        {/* Heading */}
                        <div
                            className=" flex h-12 w-full items-center justify-center gap-2.5
                "
                        >
                            {/* Icon */}
                            <div
                                className=" flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F1F9F1]
                    "
                            >
                                <FiMapPin
                                    size={24}
                                    strokeWidth={2}
                                    className="text-[#018A06]"
                                />
                            </div>

                            {/* Title */}
                            <h3
                                className=" flex-1  text-[20px] font-bold leading-8 text-[#018A06] sm:text-[24px]
                    "
                            >
                                Factory Address
                            </h3>
                        </div>

                        {/* Address */}
                        <p
                            className=" w-full text-[15px] font-normal leading-[25px] text-[#0F0F0F] sm:text-[16px]
                "
                        >
                            Shree Padmavati Techsolution Pvt. Ltd., A-27 MIDC,
                            Bhagi Mahari, Savner, Nagpur – 441107
                        </p>
                    </div>

                    {/* Phone Card */}
                    <div
                        className=" box-border flex w-full flex-col items-start gap-[19px] rounded-xl border border-[#C1E2C2] p-4 lg:h-[149px] lg:w-[332px] lg:flex-none"
                    >
                        {/* Heading */}
                        <div
                            className=" flex h-12 w-full items-center justify-center gap-2.5
                "
                        >
                            {/* Icon */}
                            <div
                                className=" flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F1F9F1]
                    "
                            >
                                <FiPhone
                                    size={24}
                                    strokeWidth={2}
                                    className="text-[#018A06]"
                                />
                            </div>

                            {/* Title */}
                            <h3
                                className=" flex-1 text-[20px] font-bold leading-8 text-[#018A06] sm:text-[24px]
                    "
                            >
                                Call Us
                            </h3>
                        </div>
                        <div className="flex flex-col mx-14">
                            <a
                                href="tel:+917499645927"
                                className=" w-full text-[15px] font-normal leading-[25px] text-[#0F0F0F] transition-colors hover:text-[#018A06] sm:text-[16px]
                "
                            >
                                +91-8839153737
                            </a>
                            <a
                                href="tel:+917499645927"
                                className=" w-full text-[15px] font-normal leading-[25px] text-[#0F0F0F] transition-colors hover:text-[#018A06] sm:text-[16px]
                "
                            >
                                +91-7499645927
                            </a>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div
                        className=" box-border flex w-full flex-col items-start gap-[19px] rounded-xl border border-[#C1E2C2] p-4 lg:h-[149px] lg:w-[247px] lg:flex-none"
                    >
                        {/* Heading */}
                        <div
                            className="  flex  h-12  w-full  items-center  justify-center  gap-2.5
                "
                        >
                            {/* Icon */}
                            <div
                                className=" flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F1F9F1]
                    "
                            >
                                <FiMail
                                    size={24}
                                    strokeWidth={2}
                                    className="text-[#018A06]"
                                />
                            </div>

                            {/* Title */}
                            <h3
                                className=" flex-1  text-[20px] font-bold leading-8 text-[#018A06] sm:text-[24px]
                    "
                            >
                                Email
                            </h3>
                        </div>

                        {/* Email */}
                        <a
                            href="mailto:contact@clovercarte.com"
                            className=" w-full truncate  text-[15px] font-normal leading-[25px] text-[#0F0F0F] transition-colors hover:text-[#018A06] sm:text-[16px]
                "
                        >
                            contact@clovercarte.com
                        </a>
                    </div>
                </div>
            </section>
            <section id="book-demo" className="w-full px-6 md:px-16 lg:px-12 scroll-mt-28">
                <div className="max-w-[1248px] mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-6">

                        {/* LEFT: SMART VENDING SOLUTIONS */}
                        <div
                            className="w-full lg:w-[601px] h-auto lg:h-[530px] rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat p-3 lg:px-[10px] lg:py-3 lg:pb-6"
                            style={{ backgroundImage: `url(https://res.cloudinary.com/ds4hqamlq/image/upload/v1789387903/d79e7644eaf586a2abe5041ec0d336caf0ebc285_ltj8oa.jpg)` }}
                        >

                        </div>

                        {/* RIGHT: CONTACT FORM */}
                        <div className="w-full lg:w-[624px] flex flex-col gap-2">
                            <div className="flex flex-col gap-3 w-full lg:w-[556px]">

                                <h3 className="text-[#018A06]  font-semibold text-[24px] leading-[30px]">
                                    Smart Vending Solutions
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-x-3 w-full">

                                    <div className="flex items-center gap-3 h-6">
                                        <FaRegCheckCircle className="text-green" />
                                        <span className="text-[#0F0F0F] text-[16px] leading-6 font-normal ">
                                            Customized Vending Machines
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 h-6">
                                        <FaRegCheckCircle className="text-green" />
                                        <span className="text-[#0F0F0F] text-[16px] leading-6 font-normal ">
                                            Cashless Payment Integration
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 h-6">
                                        <FaRegCheckCircle className="text-green" />
                                        <span className="text-[#0F0F0F] text-[16px] leading-6 font-normal ">
                                            Smart & IoT Enabled Technology
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 h-6">
                                        <FaRegCheckCircle className="text-green" />
                                        <span className="text-[#0F0F0F] text-[16px] leading-6 font-normal ">
                                            PAN India Installation & Support
                                        </span>
                                    </div>

                                </div>
                            </div>

                            <h2 className="text-[#0F0F0F]  font-semibold text-[30px] md:text-[36px] leading-[1.7] tracking-[0.005em]">
                                We’re here for you
                            </h2>

                            <ContactForm />
                        </div>

                    </div>
                </div>
            </section>

            <section className=" box-border w-full border-y border-[#C1E2C2] bg-[#F1F9F1] px-6 py-8 sm:px-8 md:px-12 lg:px-24 lg:py-6 " >
                <div className=" mx-auto flex w-full max-w-[1248px] flex-col items-center justify-center gap-10 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:items-start lg:justify-center lg:gap-[36px] " >
                    {/* Item 1 - Custom Built */}
                    <div className=" flex w-full flex-col items-center gap-1 text-center md:w-auto lg:h-[136px] lg:w-[217.59px] lg:flex-none" >
                        {/* Icon */}
                        <div className="flex h-16 w-16 items-center justify-center">
                            <div className=" flex h-16 w-16 items-center justify-center " >
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="24"
                                        cy="24"
                                        r="20"
                                        stroke="#008A00"
                                        strokeWidth="3"
                                    />
                                    <circle
                                        cx="24"
                                        cy="24"
                                        r="7"
                                        stroke="#008A00"
                                        strokeWidth="3"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className=" text-[16px] font-bold leading-6 text-[#0F0F0F] " > Custom Built </h3>

                        {/* Description */}
                        <p className=" max-w-[194px] text-[16px] font-normal leading-5 text-[#5F5F5F] " > Machines built as per your business needs </p>
                    </div>

                    {/* Item 2 - PAN India Service */}
                    <div className=" flex w-full flex-col items-center gap-1 text-center md:w-auto lg:h-[136px] lg:w-[217.59px] lg:flex-none" >
                        {/* Icon */}
                        <div className="flex h-16 w-16 items-center justify-center">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 12H30V36H5V12Z"
                                    stroke="#008A00"
                                    strokeWidth="3"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M30 20H38L43 26V36H30V20Z"
                                    stroke="#008A00"
                                    strokeWidth="3"
                                    strokeLinejoin="round"
                                />
                                <circle
                                    cx="13"
                                    cy="36"
                                    r="4"
                                    stroke="#008A00"
                                    strokeWidth="3"
                                />
                                <circle
                                    cx="37"
                                    cy="36"
                                    r="4"
                                    stroke="#008A00"
                                    strokeWidth="3"
                                />
                            </svg>
                        </div>

                        {/* Title */}
                        <h3 className=" text-[16px] font-bold leading-6 text-[#0F0F0F] " > PAN India Service </h3>

                        <p className=" max-w-[209px] text-[16px] font-normal leading-5 text-[#5F5F5F] " > Installation & service across India </p>
                    </div>

                    {/* Item 3 - Quality Assured */}
                    <div className=" flex w-full flex-col items-center gap-1 text-center md:w-auto lg:h-[136px] lg:w-[217.61px] lg:flex-none" >
                        {/* Icon */}
                        <div className="flex h-16 w-16 items-center justify-center">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M24 5L39 11V22C39 31.5 32.8 39.3 24 43C15.2 39.3 9 31.5 9 22V11L24 5Z"
                                    stroke="#008A00"
                                    strokeWidth="3"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M16 24L21 29L32 18"
                                    stroke="#008A00"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        {/* Title */}
                        <h3 className=" text-[16px] font-bold leading-6 text-[#0F0F0F] " > Quality Assured </h3>

                        {/* Description */}
                        <p className=" max-w-[196px] text-[16px] font-normal leading-5 text-[#5F5F5F] " > ISO Compliant & Premium Quality </p>
                    </div>

                    {/* Item 4 - After Sales Support */}
                    <div className=" flex w-full flex-col items-center gap-1 text-center md:w-auto lg:h-[136px] lg:w-[217.59px] lg:flex-none" >
                        {/* Icon */}
                        <div className="flex h-16 w-16 items-center justify-center">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="24"
                                    cy="18"
                                    r="7"
                                    stroke="#008A00"
                                    strokeWidth="3"
                                />
                                <path
                                    d="M11 42C11 34.82 16.82 29 24 29C31.18 29 37 34.82 37 42"
                                    stroke="#008A00"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>

                        {/* Title */}
                        <h3 className=" text-[16px] font-bold leading-6 text-[#0F0F0F] " > After Sales Support </h3>

                        {/* Description */}
                        <p className=" max-w-[222px] text-[16px] font-normal leading-5 text-[#5F5F5F] " > Dedicated support whenever you need </p>
                    </div>

                    {/* Item 5 - Trusted by Businesses */}
                    <div className=" flex w-full flex-col items-center gap-1 text-center md:col-span-2 md:w-auto lg:col-span-1 lg:h-[136px] lg:w-[226px] lg:flex-none" >
                        {/* Icon */}
                        <div className="flex h-16 w-16 items-center justify-center">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 31L16 20L27 31L38 20"
                                    stroke="#008A00"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M5 40H27"
                                    stroke="#008A00"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M32 31L39 24L44 29"
                                    stroke="#008A00"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M32 15L39 8L44 13"
                                    stroke="#008A00"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        {/* Title */}
                        <h3 className=" text-[16px] font-bold leading-6 text-[#0F0F0F] " > Trusted by Businesses </h3>

                        {/* Description */}
                        <p className=" max-w-[214px] text-[16px] font-normal leading-5 text-[#5F5F5F] " > 100+ satisfied clients across industries </p>
                    </div>
                </div>
            </section>
            <section className="px-6">
                <FAQAccordion faqs={faqs} />
            </section>


        </main>
    );
};

export default Contact;