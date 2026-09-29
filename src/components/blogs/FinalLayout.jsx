import Image from "next/image";
import Link from "next/link";
import {
    FiArrowRight,
    FiHeart,
    FiShield,
    FiUser,
} from "react-icons/fi";
import { GiFemale } from "react-icons/gi";
import FAQAccordion from "../common/FAQAccordion";
import BlogSidebar from "./BlogSidebar";

const benefits = [
    {
        title: "Easy Access",
        description: "Essential care in under 10 seconds.",
        icon: FiShield,
    },
    {
        title: "Hygiene & Dignity",
        description: "Private, secure, contactless vending.",
        icon: FiHeart,
    },
    {
        title: "Empowered Future",
        description: "Inclusive, stigma-free workplaces.",
        icon: GiFemale,
    },
];

const productIcons = [
    "/images/blog/vendelle-icon-1.png",
    "/images/blog/vendelle-icon-2.png",
    "/images/blog/vendelle-icon-3.png",
    "/images/blog/vendelle-icon-4.png",
];

const articleSections = [
    "What Is a Vendelle Vending Machine?",
    "Beauty & Cosmetics - A Primary Use",
    "Menstrual Hygiene Products",
    "Personal Care Products",
    "Healthcare & Wellness Essentials",
    "Travel & Emergency Essentials",
    "Fitness & Wellness",
    "Why Choose a Vendelle Vending Machine?",
    "Where Can Vendelle Be Installed?",
    "Frequently Asked Questions (FAQs)",
];

const leftSections = articleSections.slice(0, 5);
const rightSections = articleSections.slice(5);
export default function FinalLayout() {
    const faqs = [
        { question: "What is a Vendelle Vending Machine?", answer: "Vendelle Vending Machine is a smart automated retail solution designed to dispense compact products such as beauty items, cosmetics, menstrual hygiene products, personal-care essentials, wellness products, and travel kits." },
        { question: "What products can be sold through a Vendelle Vending Machine?", answer: "Vendelle can be used for products such as lipstick, lip balm, mascara, kajal, skincare products, sanitary napkins, tampons, wet wipes, tissues, hand sanitizer, travel kits, grooming products, and selected wellness essentials." },
        { question: "Is Vendelle suitable for offices and corporate spaces?", answer: "Yes. Offices can use Vendelle to provide employees with personal-care, hygiene, wellness, and emergency essentials in a convenient location." },
        { question: "What are the benefits of a Vendelle Vending Machine?", answer: "Key benefits include convenient product access, efficient use of space, automated purchasing, flexible product categories, and the ability to place essential products closer to customers." },
        { question: "Can the product selection be customized?", answer: "The product assortment can be planned according to the location, target customers, available machine configuration, and product dimensions." },
        { question: "Why is Vendelle useful for modern automated retail?", answer: "Vendelle helps businesses create compact retail points for everyday essentials, making beauty, hygiene, personal-care, travel, and wellness products more accessible in convenient locations." },
    ]
    return (
        <main className="w-full px-10 space-y-12" >
            <section className="relative isolate w-full overflow-hidden bg-white">
                {/* Ambient background glows */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
                >
                    {/* Top-left glow */}
                    <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#FFEFF4] blur-[32px]" />

                    {/* Bottom-right glow */}
                    <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#FFEFF4] blur-[32px]" />

                    {/* Center glow */}
                    <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(255,228,236,0.6)] blur-[32px]" />
                </div>

                <div className="mx-auto flex min-h-[560px] w-full max-w-[1248px] flex-col justify-center px-6 py-10 sm:px-8 lg:px-[72px]">
                    <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-[70px] xl:gap-[126px]">

                        {/* =========================
                        LEFT CONTENT
                    ========================== */}
                        <div className="flex w-full max-w-[659px] flex-col items-start gap-8">

                            {/* Title + Product Icons */}
                            <div className="flex w-full flex-col items-start gap-7 sm:gap-9">

                                <h1 className="w-full  text-[32px] font-extrabold leading-[1.2] tracking-[-0.8px] text-[#0F0F0F] sm:text-[40px] sm:leading-[1.2] lg:text-[48px] lg:leading-[60px] lg:tracking-[-1px]">
                                    Vendelle Vending Machine: A Smart Solution for{" "}
                                    <span className="text-[#D81B60]">
                                        Beauty, Personal Care & Hygiene Products
                                    </span>
                                </h1>

                                {/* Product icons */}
                                <div className="flex items-center gap-4 sm:gap-6">
                                    {productIcons.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#D81B60] bg-[#D81B60] p-[6px] sm:h-[61px] sm:w-[61px]"
                                        >
                                            <div className="relative h-full w-full overflow-hidden rounded-full">
                                                <Image
                                                    src={icon}
                                                    alt=""
                                                    fill
                                                    sizes="61px"
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* =========================
                            BENEFITS
                        ========================== */}
                            <div className="flex w-full flex-col gap-6">

                                {/* Divider */}
                                <div className="h-px w-full bg-[#FCCDDB]" />

                                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-2 lg:gap-0">
                                    {benefits.map((benefit, index) => {
                                        const Icon = benefit.icon;

                                        return (
                                            <div
                                                key={index}
                                                className="flex min-h-[114px] flex-col items-start px-2"
                                            >
                                                {/* Icon */}
                                                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE4EC]">
                                                    <Icon
                                                        size={20}
                                                        strokeWidth={1.8}
                                                        className="text-[#D81B60]"
                                                    />
                                                </div>

                                                {/* Title */}
                                                <h2 className=" text-[14px] font-bold leading-5 text-[#0F0F0F] sm:text-[16px]">
                                                    {benefit.title}
                                                </h2>

                                                {/* Description */}
                                                <p className="mt-1 max-w-[168px]  text-[11px] font-normal leading-[15px] text-[#5F5F5F] sm:text-[12px]">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* =========================
                                BUTTONS
                            ========================== */}
                                <div className="flex w-full flex-wrap items-center gap-3">
                                    <Link
                                        href="#vendelle"
                                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#D81B60] px-5 py-3  text-[13px] font-bold leading-5 text-white transition hover:bg-[#c21856] sm:px-7 sm:text-[14px]"
                                    >
                                        Explore VENDELLE
                                        <FiArrowRight size={16} strokeWidth={1.5} />
                                    </Link>

                                    <Link
                                        href="/contact-us"
                                        className="inline-flex h-11 items-center justify-center rounded-full border border-[#FCCDDB] bg-white px-5 py-3  text-[13px] font-semibold leading-5 text-[#D81B60] transition hover:bg-[#FFF5F8] sm:px-6 sm:text-[14px]"
                                    >
                                        Get in Touch
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* =========================
                        RIGHT PRODUCT IMAGE
                    ========================== */}
                        <div className="relative flex w-full shrink-0 justify-center lg:w-[320px]">
                            <div className="relative h-[360px] w-[250px] sm:h-[410px] sm:w-[285px] lg:h-[460px] lg:w-[320px]">
                                <Image
                                    src="/images/blog/vendelle-machine.png"
                                    alt="Vendelle Vending Machine"
                                    fill
                                    priority
                                    sizes="(max-width: 640px) 250px, (max-width: 1024px) 285px, 320px"
                                    className="object-contain drop-shadow-[3px_6px_20px_rgba(216,27,96,0.4)]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex gap-12">
                <div className="space-y-12">
            <section className="w-full bg-white">
                <div className=" w-full ">
                    <div className="flex w-full flex-col gap-2">
                        {/* Paragraph 1 */}
                        <p className="w-full  text-[14px] font-normal leading-[21px] text-[#0F0F0F] sm:text-[15px] sm:leading-[23px] lg:text-[16px] lg:leading-6 lg:text-justify">
                            Convenience is becoming an important part of modern
                            retail. People want to purchase everyday essentials
                            quickly, easily, and without waiting in long queues.
                            This is where smart vending solutions are creating new
                            opportunities for businesses, offices, hotels,
                            hospitals, colleges, malls, airports, gyms, and other
                            high-traffic locations.
                        </p>

                        {/* Paragraph 2 */}
                        <p className="w-full  text-[14px] font-normal leading-[21px] text-[#0F0F0F] sm:text-[15px] sm:leading-[23px] lg:text-[16px] lg:leading-6 lg:text-justify">
                            The Vendelle Vending Machine is designed as a convenient
                            automated retail solution for dispensing a wide range
                            of small, essential products. From beauty and cosmetics
                            to menstrual hygiene, personal care, healthcare,
                            travel, and wellness products, Vendelle can help
                            businesses make important everyday items available
                            exactly where customers need them.
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full">
              <div className=" box-border flex w-full flex-col items-start gap-4 rounded-xl border border-[#FCCDDB] bg-[#FFEFF4] p-6 " >
                    {/* Heading */}
                    <div className="flex h-8 w-full items-center justify-center gap-2">
                      <h2 className=" flex-1 text-[24px] font-bold leading-8 text-[#0F0F0F] " >
                            In This Article
                        </h2>
                    </div>

                    {/* Article Links */}
                    <div className="flex w-full flex-col gap-4 md:flex-row md:items-center">
                        {/* Left List */}
                        <div className="flex w-full flex-col gap-4 md:w-[359px]">
                            {leftSections.map((title, index) => (
                                <a
                                    key={title}
                                    href={`#section-${index + 1}`}
                                    className="flex min-h-6 w-full items-start no-underline"
                                >
                                    <span className=" flex h-6 w-6 shrink-0 items-center justify-center text-[16px] font-semibold leading-5 tracking-[0.7px] text-[#D81B60] " >
                                        {index === 0 ? "•" : `0${index}`}
                                    </span>

                                  <span className=" text-[16px] font-normal leading-6 text-[#5F5F5F] " >
                                        {title}
                                    </span>
                                </a>
                            ))}
                        </div>

                        {/* Right List */}
                        <div className="flex w-full flex-col gap-4 md:w-[406px]">
                            {rightSections.map((title, index) => {
                                const number = index + 5;

                                return (
                                    <a
                                        key={title}
                                        href={`#section-${number + 1}`}
                                        className="flex min-h-6 w-full items-start no-underline"
                                    >
                                       <span className=" flex h-6 w-6 shrink-0 items-center justify-center text-[16px] font-semibold leading-5 tracking-[0.7px] text-[#D81B60] " >
                                            {number <= 6 ? `0${number}` : "•"}
                                        </span>

                                        <span className=" text-[16px] font-normal leading-6 text-[#5F5F5F] " >
                                            {title}
                                        </span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="section-1"
                className="flex w-full flex-col items-start gap-4"
            >
              <h2 className=" w-full text-[26px] font-semibold leading-[34px] text-[#0F0F0F] md:text-[32px] md:leading-[40px] " >
                    What Is a Vendelle Vending Machine?
                </h2>

                <div className="flex w-full flex-col gap-3">
                  <p className=" w-full text-[16px] font-normal leading-[23px] text-justify text-[#0F0F0F] " >
                        A Vendelle Vending Machine is a smart automated dispensing machine
                        designed to provide convenient access to compact products. Instead of
                        visiting a traditional store, customers can select a product from the
                        machine and complete their purchase through the available payment
                        option.
                    </p>

                    <p className=" w-full text-[16px] font-normal leading-[23px] text-justify text-[#0F0F0F] " >
                        Its flexible product capacity makes it suitable for different categories
                        of items. Businesses can customize the product mix according to the
                        location and the needs of their target customers.
                    </p>

                  <p className=" w-full text-[16px] font-normal leading-[23px] text-justify text-[#0F0F0F] " >
                        For example, a hotel may stock travel-size personal-care products, while
                        a college campus may focus on menstrual hygiene products. A gym can offer
                        hygiene wipes and grooming essentials, whereas a shopping mall can use
                        the machine for beauty and cosmetic products.
                    </p>
                </div>
            </section>
            {/* 1. Beauty & Cosmetics - A Primary Use */}
            <section
                id="section-2"
                className="flex w-full flex-col items-start gap-4"
            >
                {/* Heading */}
                <h2 className=" w-full text-[24px] font-semibold leading-8 text-[#0F0F0F] " >
                    1. Beauty & Cosmetics - A Primary Use
                </h2>

                {/* Content */}
                <div className="flex w-full flex-col items-start gap-3">
                  <p className=" w-full text-[16px] font-normal leading-[23px] text-justify text-[#0F0F0F] " >
                        Beauty and cosmetic products are one of the strongest applications for
                        the Vendelle Vending Machine. Consumers often need small beauty
                        essentials while travelling, working, attending events, or shopping.
                    </p>
<p className=" w-full text-[16px] font-normal leading-[23px] text-[#0F0F0F] " >
                        The machine can be used to offer products such as:
                    </p>
                    <div className=" grid w-full max-w-[522px] grid-cols-1 gap-y-2 md:grid-cols-2 " >
                        <p className=" text-[16px] font-normal leading-6 text-[#0F0F0F]">
                            Lipstick
                        </p>

                        <p className=" text-[16px] font-normal leading-6 text-[#0F0F0F]">
                            Lip balm
                        </p>

                        <p className=" text-[16px] font-normal leading-6 text-[#0F0F0F]">
                            Mascara
                        </p>

                        <p className=" text-[16px] font-normal leading-6 text-[#0F0F0F]">
                            Kajal and eyeliner
                        </p>

                        <p className=" text-[16px] font-normal leading-6 text-[#0F0F0F]">
                            Compact powder
                        </p>

                        <p className=" text-[16px] font-normal leading-6 text-[#0F0F0F]">
                            Face masks
                        </p>

                        <p className=" text-[16px] font-normal leading-6 text-[#0F0F0F]">
                            Mini skincare products
                        </p>

                        <p className=" text-[16px] font-normal leading-6 text-[#0F0F0F]">
                            Makeup kits
                        </p>

                        <p className=" text-[16px] font-normal leading-6 text-[#0F0F0F]">
                            Beauty accessories
                        </p>
                    </div>

                    {/* Additional Content */}
                  <p className=" w-full text-[16px] font-normal leading-[23px] text-justify text-[#0F0F0F] " >
                        A strategically placed Vendelle Vending Machine can provide customers
                        with quick access to frequently needed beauty products without requiring
                        a full-size retail store.
                    </p>

                  <p className=" w-full text-[16px] font-normal leading-[23px] text-justify text-[#0F0F0F] " >
                        Beauty vending can be particularly useful in shopping malls, hotels,
                        airports, salons, colleges, corporate offices, and entertainment
                        venues.
                    </p>
                </div>
            </section>
            {/* 2. Menstrual Hygiene Products */}
            <section
                id="section-3"
                className="flex w-full flex-col items-start gap-4"
            >
                {/* Heading */}
               <h2 className=" w-full text-[24px] font-semibold leading-8 text-[#0F0F0F] " >
                    2. Menstrual Hygiene Products
                </h2>

                {/* Content */}
                <div className="flex w-full flex-col items-start gap-3">
                  <p className=" w-full text-[16px] font-normal leading-6 text-justify text-[#0F0F0F] " >
                        Access to menstrual hygiene products is another valuable application of
                        automated vending. Having essential products available in workplaces,
                        educational institutions, healthcare facilities, malls, and public
                        locations can make everyday situations more convenient.
                    </p>

                   <p className=" w-full text-[16px] font-normal leading-[23px] text-[#0F0F0F] " >
                        Vendelle can be used for products including:
                    </p>

                    {/* Product List */}
                  <div className=" flex w-full flex-col text-[16px] font-normal leading-[26px] text-[#0F0F0F] " >
                        <span>Sanitary napkins</span>
                        <span>Pantyliners</span>
                        <span>Tampons</span>
                        <span>Menstrual cups</span>
                        <span>Intimate wipes</span>
                    </div>

                    {/* Additional Content */}
                 <p className=" w-full text-[16px] font-normal leading-6 text-justify text-[#0F0F0F] " >
                        A menstrual hygiene vending machine can provide discreet and convenient
                        access when someone unexpectedly needs a product. Organizations can also
                        use these machines as part of their workplace or campus hygiene
                        initiatives.
                    </p>
                </div>
            </section>
            {/* 3. Personal Care Products */}
            <section
                id="section-4"
                className="flex w-full flex-col items-start gap-4"
            >
                {/* Heading */}
               <h2 className=" w-full text-[24px] font-semibold leading-8 text-[#0F0F0F] " >
                    3. Personal Care Products
                </h2>

                {/* Content */}
                <div className="flex w-full flex-col items-start gap-[13px]">
                  <p className=" w-full text-[16px] font-normal leading-[23px] text-justify text-[#0F0F0F] " >
                        Personal-care essentials are another category that can work well with
                        the Vendelle Vending Machine. People frequently need small products
                        during travel, workdays, or daily activities.
                    </p>

                    <p className=" w-full text-[16px] font-normal leading-[23px] text-[#0F0F0F] " >
                        Depending on the machine configuration, businesses can consider
                        stocking:
                    </p>

                    {/* Product List */}
                   <div className=" grid w-full max-w-[522px] grid-cols-1 gap-y-2 md:grid-cols-2 " >
                        <p className=" text-[16px] font-normal leading-6 text-[#0F0F0F]">
                            Wet wipes
                        </p>

                        <p className=" text-[16px] font-normal leading-6 text-[#0F0F0F]">
                            Tissues
                        </p>

                        <p className=" text-[16px] font-normal leading-6 text-[#0F0F0F]">
                            Hand sanitizer
                        </p>

                        <p className=" text-[16px] font-normal leading-6 text-[#0F0F0F]">
                            Small soaps
                        </p>

                        <p className=" text-[16px] font-normal leading-6 text-[#0F0F0F]">
                            Compact powder
                        </p>

                        <p className=" text-[16px] font-normal leading-6 text-[#0F0F0F]">
                            Deodorants
                        </p>

                        <p className=" text-[16px] font-normal leading-6 text-[#0F0F0F]">
                            Hand creams
                        </p>

                        <p className=" text-[16px] font-normal leading-6 text-[#0F0F0F]">
                            Travel sized skincare products
                        </p>
                    </div>

                    {/* Final Paragraph */}
                 <p className=" w-full text-[16px] font-normal leading-[23px] text-justify text-[#0F0F0F] " >
                        These products are especially relevant for offices, hotels, airports,
                        railway stations, gyms, colleges, hospitals, and other locations where
                        convenience matters.
                    </p>
                </div>
            </section>
            {/* 4. Healthcare & Wellness Essentials */}
            <section
                id="section-5"
                className="flex w-full flex-col items-start gap-4"
            >
                {/* Heading */}
              <h2 className=" w-full text-[24px] font-semibold leading-8 text-[#0F0F0F] " >
                    4. Healthcare & Wellness Essentials
                </h2>

                {/* Content */}
                <div className="flex w-full flex-col items-start gap-[10px]">
                  <p className=" w-full text-[16px] font-normal leading-6 text-justify text-[#0F0F0F] " >
                        Small healthcare and hygiene products can also be made more accessible
                        through vending. While vending machines are not a replacement for
                        professional medical services, they can provide convenient access to
                        selected everyday hygiene and wellness essentials.
                    </p>

                    {/* Potential Products */}
                    <div className="flex w-full flex-col items-start gap-[2px]">
                     <p className=" w-full text-[16px] font-normal leading-[23px] text-[#0F0F0F] " >
                            Potential products include:
                        </p>
<div className=" flex w-full flex-col text-[16px] font-normal leading-[26px] text-[#0F0F0F] " >
                            <span>Face masks</span>
                            <span>Disposable hygiene products</span>
                            <span>Small first-aid items</span>
                            <span>Wellness kits</span>
                            <span>Personal hygiene kits</span>
                        </div>
                    </div>

                    {/* Final Paragraph */}
                  <p className=" w-full text-[16px] font-normal leading-6 text-justify text-[#0F0F0F] " >
                        For example, hospitals and healthcare facilities can consider placing
                        vending machines in suitable non-clinical areas for everyday hygiene
                        products. Corporate offices can also provide personal hygiene and
                        wellness kits to employees.
                    </p>
                </div>
            </section>
            {/* 5. Travel & Emergency Essentials */}
            <section
                id="section-6"
                className="flex w-full flex-col items-start gap-4"
            >
                {/* Heading */}
                <h2 className=" w-full text-[24px] font-semibold leading-8 text-[#0F0F0F] " >
                    5. Travel & Emergency Essentials
                </h2>

                {/* Content */}
                <div className="flex w-full flex-col items-start gap-3">
                    {/* Intro Paragraph */}
                   <p className=" w-full text-[16px] font-normal leading-6 text-justify text-[#0F0F0F] " >
                        Travelling often comes with unexpected needs. A person may forget a
                        toothbrush, need tissues, or suddenly require a basic grooming product.
                    </p>

                    {/* Travel Essentials */}
                    <div className="flex w-full flex-col items-start gap-[2px]">
                       <p className=" w-full text-[16px] font-normal leading-[23px] text-justify text-[#0F0F0F] " >
                            A Vendelle Vending Machine can help address these situations by
                            offering compact travel and emergency essentials such as:
                        </p>
<div className=" flex w-full flex-col text-[16px] font-normal leading-[26px] text-[#0F0F0F] " >
                            <span>Travel hygiene kits</span>
                            <span>Toothbrush and toothpaste kits</span>
                            <span>Earplugs</span>
                            <span>Eye masks</span>
                            <span>Small grooming kits</span>
                            <span>Emergency personal-care kits</span>
                        </div>
                    </div>

                    {/* Final Paragraph */}
                    <p className=" w-full text-[16px] font-normal leading-6 text-justify text-[#0F0F0F] " >
                        Hotels, airports, railway stations, bus terminals, tourist destinations,
                        and corporate travel locations can benefit from having these products
                        readily available.
                    </p>
                </div>
            </section>
            {/* 6. Fitness & Wellness */}
            <section
                id="section-6"
                className="flex w-full flex-col items-start gap-4"
            >
                {/* Heading */}
               <h2 className=" w-full text-[24px] font-semibold leading-8 text-[#0F0F0F] " >
                    6. Fitness & Wellness
                </h2>

                {/* Content */}
                <div className="flex w-full flex-col items-start gap-3">
                    {/* Intro Paragraph */}
                   <p className=" w-full text-[16px] font-normal leading-6 text-justify text-[#0F0F0F] " >
                        Gyms, fitness centres, sports facilities, and wellness spaces are also potential locations for Vendelle. Customers may need hygiene and grooming products before or after physical activity.
                    </p>

                    {/* Travel Essentials */}
                    <div className="flex w-full flex-col items-start gap-[2px]">
                       <p className=" w-full text-[16px] font-normal leading-[23px] text-justify text-[#0F0F0F] " >
                            Possible products include:
                        </p>
<div className=" flex w-full flex-col text-[16px] font-normal leading-[26px] text-[#0F0F0F] " >
                            <span>Small personal-care products</span>
                            <span>Hygiene wipes</span>
                            <span>Recovery and wellness accessories</span>
                            <span>Travel-size grooming products</span>
                        </div>
                    </div>

                    {/* Final Paragraph */}
                   <p className=" w-full text-[16px] font-normal leading-6 text-justify text-[#0F0F0F] " >
                        For fitness businesses, vending provides an additional convenience service without requiring employees to
                        manage a traditional retail counter throughout the day.
                    </p>
                </div>
            </section>
            {/* Why Choose a Vendelle Vending Machine? */}
            <section
                id="section-7"
                className="flex w-full flex-col items-start gap-4"
            >
                {/* Heading */}
               <h2 className=" w-full text-[24px] font-semibold leading-8 text-[#0F0F0F] " >
                    Why Choose a Vendelle Vending Machine?
                </h2>

                {/* Content */}
                <div className="flex w-full flex-col items-start gap-3">
                    {/* Intro Paragraph */}
                   <p className=" w-full text-[16px] font-normal leading-6 text-justify text-[#0F0F0F] " >
                        The biggest advantage of a smart vending machine is convenience.
                        Customers can access products without depending entirely on traditional
                        store timings or retail counters.
                    </p>

                    {/* Benefits */}
                    <div className="flex w-full flex-col items-start gap-4">
                     <p className=" w-full text-[16px] font-normal leading-6 text-[#0F0F0F] " >
                            Some important benefits to include:
                        </p>

                        {/* Cards */}
                        <div className=" grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 " >
                            {/* Card 1 */}
                            <div className=" flex min-h-[190px] w-full flex-col items-center gap-1 rounded-xl border border-[#FCCDDB] bg-white p-3 " >
                                <div className="flex h-[52px] flex-col items-start pb-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFEFF4]">
                                        <span className="text-[20px] leading-none text-[#D81B60]">
                                            ◷
                                        </span>
                                    </div>
                                </div>
<h3 className=" w-full text-center text-[16px] font-bold leading-5 text-[#0F0F0F] " >
                                    24/7 Product Accessibility
                                </h3>
<p className=" w-full text-center text-[12px] font-normal leading-[17px] text-[#5F5F5F] " >
                                    Depending on where the machine is installed and the operating
                                    environment, customers can access products beyond normal retail
                                    hours.
                                </p>
                            </div>

                            {/* Card 2 */}
                         <div className=" flex min-h-[190px] w-full flex-col items-center gap-1 rounded-xl border border-[#FCCDDB] bg-white p-3 " >
                                <div className="flex h-[52px] flex-col items-start pb-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFEFF4]">
                                        <span className="text-[20px] leading-none text-[#D81B60]">
                                            🛒
                                        </span>
                                    </div>
                                </div>

                              <h3 className=" w-full text-center text-[16px] font-bold leading-5 text-[#0F0F0F] " >
                                    Convenient Shopping
                                </h3>

                                <p className=" w-full text-center text-[12px] font-normal leading-[17px] text-[#5F5F5F] " >
                                    Customers can select the product they need quickly, making the
                                    purchasing process simple and convenient.
                                </p>
                            </div>

                            {/* Card 3 */}
                           <div className=" flex min-h-[190px] w-full flex-col items-center gap-1 rounded-xl border border-[#FCCDDB] bg-white p-3 " >
                                <div className="flex h-[52px] flex-col items-start pb-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFEFF4]">
                                        <span className="text-[20px] leading-none text-[#D81B60]">
                                            ▣
                                        </span>
                                    </div>
                                </div>

                              <h3 className=" w-full text-center text-[16px] font-bold leading-5 text-[#0F0F0F] " >
                                    Space-Efficient Retail
                                </h3>

                                <p className=" w-full text-center text-[12px] font-normal leading-[17px] text-[#5F5F5F] " >
                                    A vending machine requires considerably less space than a
                                    conventional retail store, making it suitable for locations with
                                    limited floor space.
                                </p>
                            </div>

                            {/* Card 4 */}
                           <div className=" flex min-h-[190px] w-full flex-col items-center gap-1 rounded-xl border border-[#FCCDDB] bg-white p-3 " >
                                <div className="flex h-[52px] flex-col items-start pb-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFEFF4]">
                                        <span className="text-[20px] leading-none text-[#D81B60]">
                                            ◫
                                        </span>
                                    </div>
                                </div>

                               <h3 className=" w-full text-center text-[16px] font-bold leading-5 text-[#0F0F0F] " >
                                    Multiple Product Categories
                                </h3>

                               <p className=" w-full text-center text-[12px] font-normal leading-[17px] text-[#5F5F5F] " >
                                    Vendelle can support different product categories, allowing
                                    businesses to create a product mix specifically for their
                                    audience.
                                </p>
                            </div>

                            {/* Card 5 */}
                         <div className=" flex min-h-[190px] w-full flex-col items-center gap-1 rounded-xl border border-[#FCCDDB] bg-white p-3 " >
                                <div className="flex h-[52px] flex-col items-start pb-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFEFF4]">
                                        <span className="text-[20px] leading-none text-[#D81B60]">
                                            ♙
                                        </span>
                                    </div>
                                </div>

                                <h3 className=" w-full text-center text-[16px] font-bold leading-5 text-[#0F0F0F] " >
                                    Suitable for High-Traffic
                                </h3>

                                <p className=" w-full text-center text-[12px] font-normal leading-[17px] text-[#5F5F5F] " >
                                    The machine can be strategically installed in places where people
                                    frequently need quick access to personal-care and lifestyle
                                    essentials.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Where Can Vendelle Be Installed? */}
            <section id="section-8" className="flex w-full flex-col items-start gap-4" >
                {/* Heading */}
               <h2 className=" w-full text-[24px] font-semibold leading-8 text-[#0F0F0F] " >
                    Where Can Vendelle Be Installed?
                </h2>

                {/* Content */}
                <div className="flex w-full flex-col items-start gap-3">
                    {/* Intro */}
                  <p className=" w-full text-[16px] font-normal leading-6 text-[#0F0F0F] " >
                        The versatility of Vendelle makes it suitable for many environments,
                        including:
                    </p>

                    {/* Location Badges */}
                   <div className=" grid w-full grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4 " >
                        {/* Offices & Corporate */}
                    <div className=" flex h-[54px] w-full items-center gap-[10px] rounded-lg border border-[#FCCDDB] bg-[#FFEFF4] p-3 " >
                            <span className="text-[18px] leading-7 text-[#D81B60]">🏢</span>

                           <span className=" text-[12px] font-normal leading-4 text-[#0F0F0F] " >
                                Offices & Corporate
                            </span>
                        </div>

                        {/* Hotels & Resorts */}
                      <div className=" flex h-[54px] w-full items-center gap-[10px] rounded-lg border border-[#FCCDDB] bg-[#FFEFF4] p-3 " >
                            <span className="text-[18px] leading-7 text-[#D81B60]">🏨</span>

                           <span className=" text-[12px] font-normal leading-4 text-[#0F0F0F] " >
                                Hotels & Resorts
                            </span>
                        </div>

                        {/* Hospitals & Healthcare */}
                       <div className=" flex h-[54px] w-full items-center gap-[10px] rounded-lg border border-[#FCCDDB] bg-[#FFEFF4] p-3 " >
                            <span className="text-[18px] leading-7 text-[#D81B60]">🏥</span>

                           <span className=" text-[12px] font-normal leading-4 text-[#0F0F0F] " >
                                Hospitals & Healthcare
                            </span>
                        </div>

                        {/* Colleges & Campuses */}
                      <div className=" flex h-[54px] w-full items-center gap-[10px] rounded-lg border border-[#FCCDDB] bg-[#FFEFF4] p-3 " >
                            <span className="text-[18px] leading-7 text-[#D81B60]">🎓</span>

                          <span className=" text-[12px] font-normal leading-4 text-[#0F0F0F] " >
                                Colleges & Campuses
                            </span>
                        </div>

                        {/* Shopping Malls */}
                        <div className=" flex h-[54px] w-full items-center gap-[10px] rounded-lg border border-[#FCCDDB] bg-[#FFEFF4] p-3 " >
                            <span className="text-[18px] leading-7 text-[#D81B60]">🛍️</span>

                            <span className=" text-[12px] font-normal leading-4 text-[#0F0F0F] " >
                                Shopping Malls
                            </span>
                        </div>

                        {/* Airports */}
                      <div className=" flex h-[54px] w-full items-center gap-[10px] rounded-lg border border-[#FCCDDB] bg-[#FFEFF4] p-3 " >
                            <span className="text-[18px] leading-7 text-[#D81B60]">✈️</span>

                         <span className=" text-[12px] font-normal leading-4 text-[#0F0F0F] " >
                                Airports
                            </span>
                        </div>

                        {/* Railway Stations */}
                        <div className=" flex h-[54px] w-full items-center gap-[10px] rounded-lg border border-[#FCCDDB] bg-[#FFEFF4] p-3 " >
                            <span className="text-[18px] leading-7 text-[#D81B60]">🚆</span>

                           <span className=" text-[12px] font-normal leading-4 text-[#0F0F0F] " >
                                Railway Stations
                            </span>
                        </div>

                        {/* Gyms & Fitness */}
                       <div className=" flex h-[54px] w-full items-center gap-[10px] rounded-lg border border-[#FCCDDB] bg-[#FFEFF4] p-3 " >
                            <span className="text-[18px] leading-7 text-[#D81B60]">🏋️</span>

                          <span className=" text-[12px] font-normal leading-4 text-[#0F0F0F] " >
                                Gyms & Fitness
                            </span>
                        </div>

                        {/* Salons & Beauty Spaces */}
                       <div className=" flex h-[54px] w-full items-center gap-[10px] rounded-lg border border-[#FCCDDB] bg-[#FFEFF4] p-3 " >
                            <span className="text-[18px] leading-7 text-[#D81B60]">💇</span>

                           <span className=" text-[12px] font-normal leading-4 text-[#0F0F0F] " >
                                Salons & Beauty Spaces
                            </span>
                        </div>

                        {/* Entertainment Venues */}
                        <div className=" flex h-[54px] w-full items-center gap-[10px] rounded-lg border border-[#FCCDDB] bg-[#FFEFF4] p-3 " >
                            <span className="text-[18px] leading-7 text-[#D81B60]">🎭</span>

                            <span className=" text-[12px] font-normal leading-4 text-[#0F0F0F] " >
                                Entertainment Venues
                            </span>
                        </div>

                        {/* Travel Hubs */}
                        <div className=" flex h-[54px] w-full items-center gap-[10px] rounded-lg border border-[#FCCDDB] bg-[#FFEFF4] p-3 " >
                            <span className="text-[18px] leading-7 text-[#D81B60]">🚏</span>

                           <span className=" text-[12px] font-normal leading-4 text-[#0F0F0F] " >
                                Travel Hubs
                            </span>
                        </div>

                        {/* Public Facilities */}
                       <div className=" flex h-[54px] w-full items-center gap-[10px] rounded-lg border border-[#FCCDDB] bg-[#FFEFF4] p-3 " >
                            <span className="text-[18px] leading-7 text-[#D81B60]">🏛️</span>

                          <span className=" text-[12px] font-normal leading-4 text-[#0F0F0F] " >
                                Public Facilities
                            </span>
                        </div>
                    </div>

                    {/* Final Paragraph */}
                  <p className=" w-full text-[16px] font-normal leading-6 text-[#0F0F0F] " >
                        The ideal product selection should depend on the location, customer
                        demographics, available space, and expected demand.
                    </p>
                </div>
            </section>
            {/* The Future of Automated Personal-Care Retail */}
            <section
                id="section-9"
                className="flex w-full flex-col items-start gap-4"
            >
                {/* Heading */}
              <h2 className=" w-full text-[24px] font-semibold leading-10 text-[#0F0F0F] " >
                    The Future of Automated Personal-Care Retail
                </h2>

                {/* Content */}
                <div className="flex w-full flex-col items-start gap-3">
                    {/* Paragraph 1 */}
                  <p className=" w-full text-[16px] font-normal leading-[23px] text-justify text-[#0F0F0F] " >
                        Consumers are increasingly comfortable with automated purchasing and
                        digital payment systems. This creates an opportunity for businesses to
                        move beyond traditional retail and offer products through smart vending
                        solutions.
                    </p>

                    {/* Paragraph 2 */}
                  <p className=" w-full text-[16px] font-normal leading-[23px] text-justify text-[#0F0F0F] " >
                        The Vendelle Vending Machine brings together convenience, accessibility,
                        and product flexibility. Whether the goal is to provide beauty products,
                        menstrual hygiene essentials, personal-care items, travel kits, or
                        wellness products, automated vending can make everyday necessities
                        easier to access.
                    </p>

                    {/* Paragraph 3 */}
                   <p className=" w-full text-[16px] font-normal leading-[23px] text-justify text-[#0F0F0F] " >
                        For businesses, it can also create an additional retail channel while
                        using limited space efficiently. The right product selection and
                        strategic placement can help improve customer convenience and create a
                        better overall experience.
                    </p>
                </div>
            </section>
            {/* Conclusion */}
            <section
                id="section-10"
                className="flex w-full flex-col items-start gap-4"
            >
                {/* Heading */}
              <h2 className=" w-full text-[24px] font-semibold leading-10 text-[#0F0F0F] " >
                    Conclusion
                </h2>

                {/* Content */}
                <div className="flex w-full flex-col items-start gap-3">
                    {/* Paragraph 1 */}
                    <p className=" w-full text-[16px] font-normal leading-[23px] text-justify text-[#0F0F0F] " >
                        The Vendelle Vending Machine is more than a conventional vending
                        machine. It can serve as a compact automated retail point for beauty,
                        cosmetics, menstrual hygiene, personal care, healthcare, travel,
                        fitness, and wellness essentials.
                    </p>

                    {/* Paragraph 2 */}
                   <p className=" w-full text-[16px] font-normal leading-6 text-justify text-[#0F0F0F] " >
                        From lipstick and skincare products to sanitary napkins, wet wipes,
                        travel kits, and hygiene essentials, businesses can select products
                        according to their customers' needs.
                    </p>

                    {/* Paragraph 3 */}
                    <p className=" w-full text-[16px] font-normal leading-6 text-justify text-[#0F0F0F] " >
                        As automated retail continues to grow in India, solutions such as
                        Vendelle can help businesses provide essential products where and when
                        customers need them most.
                    </p>

                    {/* Paragraph 4 */}
                 <p className=" w-full text-[16px] font-normal leading-[23px] text-justify text-[#0F0F0F] " >
                        If you are looking for a flexible vending machine for beauty, personal
                        care, hygiene, and wellness products, Vendelle can be an effective
                        solution for modern retail environments.
                    </p>
                </div>
            </section>
            </div>
                <BlogSidebar/>
            </div>

            <FAQAccordion faqs={faqs} />
        </main>
    )
}
