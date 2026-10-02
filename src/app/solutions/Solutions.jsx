import solution_4 from "../../assets/images/sol_4.webp"
import { IoMdCloud } from 'react-icons/io'
import { IoEye } from 'react-icons/io5'
import { SvgIcon } from '../../components/svg/icons'
import { MdOutlinedFlag, MdOutlineQrCodeScanner, MdOutlineSettings, MdOutlineSupportAgent, MdOutlineWifiTethering } from 'react-icons/md'
import Image from 'next/image'
import FAQAccordion from '@/components/common/FAQAccordion'
import Link from 'next/link'
import { FiArrowRight, FiCheck, FiCloud, FiCpu, FiCreditCard, FiDownload, FiHeadphones, FiMapPin, FiSettings, FiShield, FiTruck, FiWifi } from 'react-icons/fi'
import { FaRegCheckCircle } from 'react-icons/fa'
import RequestQuoteButton from '@/components/common/RequestQuoteButton'


function Solutions() {

       const sol_features = [
        "OEM / ODM Manufacturing",
        "Custom Design & Branding",
        "Multiple Payment Options (UPI, Card, Cash)",
        "IoT Integration & Remote Monitoring",
        "Tailored Product Capacity & Layout",
    ];
    const sol_2_features = [
        {
            icon: FiSettings,
            title: "Custom Engineering",
            description:
                "Tailored hardware and software solutions designed around your specific vending requirements, products, space, and business goals.",
        },
        {
            icon: FiCpu,
            title: "OEM/ODM Manufacturing",
            description:
                "In-house OEM/ODM manufacturing capabilities to develop and customize vending machines according to your brand, design, and technical specifications.",
        },
        {
            icon: FiWifi,
            title: "IoT Connected",
            description:
                "Smart IoT-enabled vending machines with remote monitoring, real-time machine insights, inventory tracking, and operational management.",
        },
        {
            icon: FiCreditCard,
            title: "Cashless Ready",
            description:
                "Integrated digital payment solutions that support convenient and secure cashless transactions for a seamless customer experience.",
        },
        {
            icon: FiCloud,
            title: "Cloud Fleet Manufacturing",
            description:
                "Monitor and manage your vending machine network through cloud-based technology with real-time inventory, sales, and machine performance insights.",
        },
        {
            icon: FiHeadphones,
            title: "End-to-End Support",
            description:
                "Comprehensive support from installation and setup to maintenance, troubleshooting, and ongoing technical assistance for smooth operations.",
        },
    ];

    const faqs = [
        {
            question: "Can you customize an existing vending machine model?",
            answer: "Yes. Existing models can be customized with different product configurations, branding, UI, payment systems, and hardware."
        },
        {
            question: "What customization options are available?",
            answer: "You can customize the machine's size, product capacity, branding, dispensing mechanism, touchscreen interface, payment options, and software."
        },
        {
            question: "Do you provide OEM and ODM manufacturing?",
            answer: "Yes. We offer complete OEM and ODM manufacturing services for brands looking to launch their own vending solutions."
        },
        {
            question: "How long does a custom vending machine project take?",
            answer: "Project timelines depend on the level of customization. Our team will provide an estimated timeline after understanding your requirements."
        },
        {
            question: "Can the machine integrate with my existing software?",
            answer: "Yes. Integration options are available depending on your business requirements."
        },
    ]
    const features = [
        {
            title: "Real-time remote monitoring",
            desc: "Status of every machine at every location. Instant alerts for faults, connectivity drops, or unusual activity.",
            Icon: IoEye,
        },
        {
            title: "Inventory tracking & alerts",
            desc: "Set low-stock thresholds across all machines. Refills happen on time, every time no manual counts.",
            Icon: SvgIcon.CapacityIcon,
        },
        {
            title: "Cashless & UPI payments",
            desc: "Accept UPI, cards, wallets, and QR payments. Every transaction logged, reconciled, and visible on your dashboard.",
            Icon: MdOutlineQrCodeScanner,
        },
        {
            title: "Sales analytics & reporting",
            desc: "Understand what sells, when, and where. Optimise product mix, pricing, and restocking with data.",
            Icon: SvgIcon.SparkleStats,
        },
        {
            title: "Predictive maintenance",
            desc: "Performance pattern analysis flags early signs of wear reducing downtime before it happens.",
            Icon: SvgIcon.RoundWrench,
        },
        {
            title: "Promotions & engagement",
            desc: "Run offers and loyalty programs through the machine interface. Every transaction is a brand moment.",
            Icon: SvgIcon.TagHeart,
        },
    ];

    return (
        <>

            <div className='max-w-[1248px] mx-auto space-y-12 ' >
              

                {/* Hero Solution Section */}
               <section className="w-full space-y-4 ">
                  <div className="pt-5">

                    <h1
                        className=" text-[32px] sm:text-[40px] lg:text-5xl leading-tight font-bold"
                    >
                        Solutions
                    </h1>

                    <p
                        className=" text-[#0F0F0F] mt-4 max-w-4xl text-[16px] lg:text-[18px] leading-[26px]"
                    >
                        India's First Made-In-India Smart Vending Machine Manufacturer.
                    </p>

                    </div>
    <div className="relative w-full max-w-[1248px] mx-auto min-h-[607px] overflow-hidden bg-cover bg-center" style={{ backgroundImage: `linear-gradient(270deg, rgba(102,102,102,0) 0%, rgba(0,0,0,0.8) 100%), url(/images/solution_hero.webp)` }}>
        <div className="relative z-10 min-h-[607px] flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[162px] px-8 md:px-12 lg:px-24 py-12 md:py-16">

            {/* LEFT CONTENT */}
            <div className="w-full lg:w-[611px] flex flex-col items-start gap-4">

                <h2 className="w-full text-white font-manrope font-extrabold text-[40px] md:text-[48px] lg:text-[56px] leading-[1.14] tracking-[-1.12px]">
                    Smart Vending Solutions for Every Industry
                </h2>

                <p className="w-full max-w-[487px] text-white font-jakarta text-[16px] md:text-[18px] leading-7">
                    Clover Carte delivers intelligent, customized and reliable vending machine solutions for modern businesses. Built in India. Trusted across industries.
                </p>

                {/* ACTION BUTTONS */}
                <div className="flex flex-col sm:flex-row items-start gap-4 w-full mt-1">
                    <Link href="/contact-us" className="w-full sm:w-[258px] h-[58px] flex items-center justify-center gap-2 px-8 py-4 bg-[#018A06] rounded-xl text-white font-jakarta font-semibold text-[16px] leading-6 hover:bg-[#017505] transition-colors">
                        <span>Request a Demo</span>
                        <FiArrowRight size={14} />
                    </Link>

                    <a href="/Clover Carte Catalogue.pdf" download className="w-full sm:w-[258px] h-[58px] flex items-center justify-center gap-2 px-8 py-4 border border-white rounded-xl text-white font-jakarta font-semibold text-[16px] leading-6 hover:bg-white/10 transition-colors">
                        <FiDownload size={14} />
                        <span>Download Brochure</span>
                    </a>
                </div>

                {/* TRUST INDICATORS */}
                <div className="w-full border-t border-[#C1E2C2] mt-3 pt-7 pr-5">
                    <div className="grid grid-cols-2 md:grid-cols-3  gap-y-5">

                        <div className="flex items-center gap-2 text-[#F1F9F1]">
                            <MdOutlinedFlag className="text-[#018A06] shrink-0" size={24} />
                            <span className="font-inter text-[16px] leading-6">
                                Made in India
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-[#F1F9F1]">
                            <FiWifi className="text-[#018A06] shrink-0" size={24} />
                            <span className="font-inter text-[16px] leading-6">
                                IoT Enabled
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-[#F1F9F1]">
                            <FiSettings className="text-[#018A06] shrink-0" size={24} />
                            <span className="font-inter text-[16px] leading-6">
                                OEM / ODM
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-[#F1F9F1]">
                            <FiMapPin className="text-[#018A06] shrink-0" size={24} />
                            <span className="font-inter text-[16px] leading-6">
                                PAN India Support
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            {/* RIGHT TRUST CARDS */}
            <div className="w-full lg:w-[281px] flex flex-col gap-4">

                <div className="w-full h-[80px] bg-white rounded-xl p-4 flex items-start gap-4">
                    <MdOutlinedFlag className="text-[#018A06] shrink-0 mt-0.5" size={22} />

                    <div className="flex flex-col">
                        <span className="font-jakarta font-medium text-[16px] leading-6 text-[#0F0F0F]">
                            Made in India
                        </span>
                        <span className="font-jakarta font-normal text-[16px] leading-6 text-[#5F5F5F]">
                            Premium Quality
                        </span>
                    </div>
                </div>

                <div className="w-full h-[80px] bg-white rounded-xl p-4 flex items-start gap-4">
                    <MdOutlineWifiTethering className="text-[#F58E05] shrink-0 mt-0.5" size={24} />

                    <div className="flex flex-col">
                        <span className="font-jakarta font-medium text-[16px] leading-6 text-[#0F0F0F]">
                            IoT Enabled
                        </span>
                        <span className="font-jakarta font-normal text-[16px] leading-6 text-[#5F5F5F]">
                            Smart Technology
                        </span>
                    </div>
                </div>

                <div className="w-full h-[80px] bg-white rounded-xl p-4 flex items-start gap-4">
                    <MdOutlineSettings className="text-[#018A06] shrink-0 mt-0.5" size={23} />

                    <div className="flex flex-col">
                        <span className="font-jakarta font-medium text-[16px] leading-6 text-[#0F0F0F]">
                            OEM / ODM
                        </span>
                        <span className="font-jakarta font-normal text-[16px] leading-6 text-[#5F5F5F]">
                            Customization
                        </span>
                    </div>
                </div>

                <div className="w-full h-[80px] bg-white rounded-xl p-4 flex items-start gap-4">
                    <MdOutlineSupportAgent className="text-[#F58E05] shrink-0 mt-0.5" size={24} />

                    <div className="flex flex-col">
                        <span className="font-jakarta font-medium text-[16px] leading-6 text-[#0F0F0F]">
                            PAN India Support
                        </span>
                        <span className="font-jakarta font-normal text-[16px] leading-6 text-[#5F5F5F]">
                            Installation & Service
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
                <section className="w-full ">
                    <div className="max-w-[1248px] flex flex-col gap-10">

                        {/* TOP INTRO CARD */}
                        <div className="bg-[#F1F9F1] border border-[#E2F0E2] rounded-2xl p-8 md:p-12 flex flex-col gap-6">
                            <span className="text-[#018A06] text-xs font-bold tracking-widest uppercase">
                                01 Customised Solutions
                            </span>

                            <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-[#0F0F0F]">
                                Your Vision. Artfully Engineered.
                            </h2>

                            <p className="text-[#5F5F5F] text-[16px] md:text-[18px]  max-w-full text-justify">
                                At Clover Carte, we craft vending solutions that fit real business needs, not one-size-fits-all boxes. Our range spans smart coffee machines, snack and beverage vendors, and fully customized setups designed around your space, footfall, and product mix. Every solution is built with modern technology at its core cashless payment support, real-time inventory tracking, and dependable engineering that keeps machines running smoothly day after day. Whether you're outfitting a single office pantry or scaling across multiple locations, our team works with you to design a vending experience that feels effortless for users and easy to manage for operators. That's Clover Carte in action.
                            </p>
                        </div>
 <div className="max-w-[1248px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-[52px]">

                {/* LEFT IMAGE CARD */}
                <div className="relative w-full lg:w-[584px] h-[400px] lg:h-[501px] rounded-[8px] overflow-hidden ">

                    <Image src="/images/customMachineImage.webp" alt="Custom vending machine solution" fill className="object-cover" />

                   
                </div>

                {/* RIGHT CONTENT */}
                <div className="w-full lg:w-[612px] flex flex-col items-start gap-5">

                    {/* Heading */}
                    <div className="w-full flex flex-col items-start gap-2">
                        <span className="font-jakarta text-[14px] lg:text-[16px] leading-6 font-normal tracking-[0.8px] uppercase text-[#FF7A00]">
                            CUSTOM VENDING SOLUTIONS
                        </span>

                        <h2 className="w-full font-jakarta text-[32px] lg:text-[40px] leading-[40px] lg:leading-[48px] font-bold text-[#1C1B1B]">
                            Customized Solutions Built Around Your Business
                        </h2>
                    </div>

                    {/* Features */}
                    <div className="w-full flex flex-col gap-4">
                        {sol_features.map((feature) => (
                            <div key={feature} className="w-full flex items-start gap-3">
                                <div className="pt-1 flex-shrink-0">
                                    <div className="w-5 h-5 rounded-full flex items-center justify-center">
                                        <FaRegCheckCircle className=" text-green" strokeWidth={3} />
                                    </div>
                                </div>

                                <span className="font-jakarta text-[16px] leading-6 font-normal text-[#0F0F0F]">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <Link href="/contact-us" className="w-fit h-14 px-8 flex items-center justify-center gap-2 bg-[#018A06] rounded-xl font-jakarta text-[16px] leading-6 font-semibold text-white hover:bg-[#017305] transition-colors">
                        <span>Request Custom Machine</span>
                        <FiArrowRight className="w-[14px] h-[14px]" />
                    </Link>

                    {/* Bottom Information Card */}
                    <div className="w-full min-h-[74px] p-3 flex items-center gap-4 bg-[#F1F9F1] border border-[#C1E2C2] rounded-xl">
                        <div className="w-[18px] flex-shrink-0 flex justify-center">
                            <FiMapPin className="w-[18px] h-6 text-[#018A06]" />
                        </div>

                        <p className="font-jakarta text-[14px] lg:text-[16px] leading-6 font-medium text-[#0F0F0F]">
                            From concept to installation we deliver end-to-end custom vending solutions.
                        </p>
                    </div>
                </div>
            </div>

                        {/* HOW IT WORKS */}
                        <div className="border border-[#E2F0E2] rounded-2xl p-6 md:p-10 flex flex-col gap-8">

                            <h3 className="text-center text-[20px] md:text-[24px] font-bold uppercase tracking-wide">
                                How it works
                            </h3>

                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                            >

                                {[
                                    {
                                        num: "01",
                                        title: "Discovery & Consultation",
                                        desc: "Understanding your product, audience, and deployment environment.",
                                    },
                                    {
                                        num: "02",
                                        title: "Concept & Prototyping",
                                        desc: "3D designs, electronics layout, and a working prototype for your review.",
                                    },
                                    {
                                        num: "03",
                                        title: "Testing & Refinement",
                                        desc: "Rigorous testing across performance, durability, and user experience.",
                                    },
                                    {
                                        num: "04",
                                        title: "Production & Deployment",
                                        desc: "Manufacturing, delivery, installation, and ongoing support included.",
                                    },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="bg-[#F1F9F1] border border-[#E2F0E2] rounded-2xl p-6 flex flex-col gap-3"
                                    >
                                        <h4 className="text-[32px] md:text-[40px] font-bold">
                                            {item.num}
                                        </h4>

                                        <h5 className="text-[#018A06] font-bold text-[16px] md:text-[18px]">
                                            {item.title}
                                        </h5>

                                        <p className="text-[#5F5F5F] text-[14px] leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA BOX */}
                        <div
                            viewport={{ once: true }} className="border border-[#E2F0E2] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">

                            <div>
                                <h4 className="text-[18px] md:text-[24px] font-bold text-[#1C1C1C]">
                                    Have a custom vending project in mind?
                                </h4>
                                <p  className="text-[#5F5F5F] text-[14px] md:text-[16px]">
                                    Tell us what you're building we’ll tell you how we make it real.
                                </p>
                            </div>
                            <RequestQuoteButton className={`border-2 border-[#018A06] text-[#018A06] px-8 py-4 rounded-xl font-semibold hover:bg-[#018A06] hover:text-white transition`} label='Start a Conversation' productName={"caftina"} model="second" />
                          </div>

                    </div>
                </section >
                <section className="w-full ">
                    <div className="max-w-[1248px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-12">

                        {/* LEFT CONTENT */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">

                            {/* Tag */}
                            <span className="text-[#327A3A] text-[14px] md:text-[16px] font-medium tracking-wide">
                                02 Vendicarte Solutions
                            </span>

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-[#018A06] text-white px-4 py-1 rounded-full w-fit">
                                <IoMdCloud />
                                <span className="text-[13px] md:text-[15px]">
                                    Cloud SaaS Platform
                                </span>
                            </div>

                            {/* Heading */}
                            <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-[#1C1C1C] leading-[1.2]">
                                Run Smarter. Sell More. Stress Less.
                            </h2>

                            {/* Description */}
                            <p  className="text-[#6B7280] text-[16px] md:text-[18px] lg:text-[17.5px] leading-relaxed text-justify">
                                VendiCarte is Clover Carte's vending management platform giving
                                real-time control of your entire fleet, from inventory to analytics,
                                from anywhere.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-4">

                                <a href='https://app.vendicarte.com/' className="bg-[#018A06] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-[16px] md:text-[18px] font-medium hover:opacity-90 transition">
                                    Explore Platform
                                </a>

                                <a href={`/contact-us`} className="border-2 border-[#018A06] text-[#0F0F0F] px-6 md:px-8 py-3 md:py-4 rounded-lg text-[16px] md:text-[18px] font-medium hover:bg-gray-50 transition">
                                    Book a Demo
                                </a>

                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full h-full lg:w-1/2">
                            <div
                                className="border border-[#E2F0E2] rounded-2xl overflow-hidden w-full h-[250px] md:h-[100%]"
                            >
                                <Image style={{ width: "100%", height: "100%" }}
                                    src={solution_4} // replace with your image
                                    alt="Vendicarte platform"
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>

                    </div>
                </section >
                <section className="w-full ">
                    <div className="max-w-[1248px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-[#E2F0E2] rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:shadow-md transition"
                            >

                                {/* ICON BOX */}
                                <div className="w-[54px] h-[54px] flex items-center justify-center bg-[#F1F9F1] rounded-xl">
                                    {item.Icon && <item.Icon color='#018A06' size={24} />}
                                </div>

                                {/* TITLE */}
                                <h3 className="text-[18px] md:text-[20px] font-bold text-[#0F0F0F]">
                                    {item.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="text-[#5F5F5F] text-[14px] md:text-[16px] leading-relaxed">
                                    {item.desc}
                                </p>

                            </div>
                        ))}

                    </div>
                </section>
                  <section className="w-full">
            <div className="max-w-[1248px] mx-auto flex flex-col items-center gap-8 lg:gap-[38px]">

                {/* SECTION HEADING */}
                <h2 className="w-full text-center font-jakarta text-[32px] md:text-[40px] lg:text-[48px] leading-[40px] lg:leading-[48px] font-bold text-[#1C1B1B]">
                    Why Choose Clover Carte
                </h2>

                {/* FEATURE GRID */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">

                    {sol_2_features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div key={feature.title} className="w-full min-h-[194px] lg:min-h-[210px] p-4 flex flex-col items-start gap-2 bg-white border border-[#C1E2C2] rounded-2xl">

                                {/* ICON */}
                                <div className="w-10 h-10 flex items-center justify-center bg-[#F1F9F1] rounded-xl flex-shrink-0">
                                    <Icon className="w-5 h-5 text-[#018A06]" strokeWidth={1.8} />
                                </div>

                                {/* TITLE */}
                                <h3 className="font-jakarta text-[16px] leading-6 font-bold text-[#0F0F0F]">
                                    {feature.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="font-jakarta text-[16px] leading-5 text-[#5F5F5F]">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
                <FAQAccordion faqs={faqs} />
            </div >
        </>
    )
}

export default Solutions