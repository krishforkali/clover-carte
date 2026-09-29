import FAQAccordion from "@/components/common/FAQAccordion";
import Image from "next/image";
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiCloud, FiCpu, FiCreditCard, FiHeadphones, FiSettings, FiWifi } from "react-icons/fi";

export default function M_Solutions() {
     const sol_2_features = [
            {
                icon: FiSettings,
                title: "Custom Engineering",
                description:
                    "Tailored hardware and...",
            },
            {
                icon: FiCpu,
                title: "OEM/ODM Manufacturing",
                description:
                    "In-house production…",
            },
            {
                icon: FiWifi,
                title: "IoT Connected",
                description:
                    "Smart machines with remote…",
            },
            {
                icon: FiCreditCard,
                title: "Cashless Ready",
                description:
                    "Integrated digital payment…",
            },
            {
                icon: FiCloud,
                title: "Cloud Fleet Manufacturing",
                description:
                    "Real-time inventory and…",
            },
            {
                icon: FiHeadphones,
                title: "End-to-End Support",
                description:
                    "Installation, maintenance,…",
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

    const platformfeatures = [
    {
        title: "Live Monitoring",
        description:
            "Track machine status and receive instant alerts from anywhere.",
    },
    {
        title: "Inventory Tracking",
        description:
            "Monitor stock levels and schedule refills with real-time visibility.",
    },
    {
        title: "Cashless Payments",
        description:
            "Support UPI, QR, cards, and digital wallets with secure payment processing.",
    },
    {
        title: "Sales Analytics",
        description:
            "Analyze sales trends, product performance, and customer demand.",
    },
    {
        title: "Predictive Maintenance",
        description:
            "Detect potential issues before failures occur to reduce downtime.",
    },
    {
        title: "Promotions & Loyalty",
        description:
            "Launch offers, campaigns, and customer engagement programs remotely.",
    },
];
    return (
        <main className="px-4 space-y-12" >
            <section className="w-full  ">
                <div className="w-full  mx-auto flex flex-col gap-[18px]">

                    {/* Hero Image */}
                    <div className="w-full h-[270.75px] overflow-hidden rounded-[12px]">
                        <Image
                            src={"/images/solution_hero.jpg"}
                            alt="Smart Vending Solutions for Every Business"
                            width={361}
                            height={271}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full flex flex-col gap-[16px]">

                        {/* Heading + Description */}
                        <div className="w-full flex flex-col gap-[12px]">

                            {/* Heading */}
                            <div className="w-full flex flex-col gap-[8px]">

                                <span
                                    className="
                            w-full
                            text-[12px]
                            font-semibold
                            leading-[20px]
                            tracking-[0.6px]
                            uppercase
                            text-[#018A06]
                        "
                                >
                                    Smart
                                </span>

                                <h1
                                    className="
                            w-full
                            
                            text-[24px]
                            font-bold
                            leading-[30px]
                            text-[#0F0F0F]
                        "
                                >
                                    Smart Vending Solutions for Every Business
                                </h1>
                            </div>

                            {/* Description */}
                            <p
                                className="
                        w-full
                        
                        text-[16px]
                        font-normal
                        leading-[20px]
                        text-[#5F5F5F]
                    "
                            >
                                From fully customized vending machines to cloud-connected
                                fleet management, Clover Carte delivers end-to-end
                                automation solutions designed around your products,
                                customers, and business goals.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="w-full flex flex-col gap-[12px]">

                            {/* Customize Solutions */}
                            <button
                                type="button"
                                className="
                        flex
                        flex-col
                        justify-center
                        items-center
                        w-full
                        h-[52px]
                        px-[32px]
                        py-[16px]
                        bg-[#018A06]
                        rounded-[16px]
                        
                        text-[16px]
                        font-semibold
                        leading-[20px]
                        text-white
                    "
                            >
                                Customize Solutions
                            </button>

                            {/* Vendicarte Software */}
                            <button
                                type="button"
                                className="
                        box-border
                        flex
                        flex-col
                        justify-center
                        items-center
                        w-full
                        h-[54px]
                        px-[32px]
                        py-[16px]
                        bg-white
                        border
                        border-[#C1E2C2]
                        rounded-[16px]
                        
                        text-[16px]
                        font-semibold
                        leading-[20px]
                        text-[#018A06]
                    "
                            >
                                Vendicarte Software
                            </button>

                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div
                    className=" box-border w-full mx-auto  p-[12px] flex flex-col items-start gap-[4px] bg-[#F1F9F1] border border-[#C1E2C2] rounded-[12px]
        "
                >
                    {/* Label */}
                    <span
                        className=" w-full h-[15px]  text-[12px] font-bold leading-[15px] tracking-[0.6px] uppercase text-[#008A08]
            "
                    >
                        01 CUSTOMISED SOLUTIONS
                    </span>

                    {/* Content */}
                    <div
                        className=" w-full flex flex-col items-start gap-[12px]
            "
                    >
                        {/* Heading */}
                        <h2
                            className=" w-full  text-[24px] font-bold leading-[30px] text-[#0F0F0F]
                "
                        >
                            Your Vision. Expertly Engineered.
                        </h2>

                        {/* Description */}
                        <p
                            className=" w-full  text-[16px] font-normal leading-[23px] text-[#5F5F5F]
                "
                        >
                            Every business has unique products and operational needs. We
                            design, engineer, and manufacture customized vending solutions
                            that combine intelligent hardware, seamless software, and
                            premium industrial design for reliable, scalable performance.
                        </p>
                    </div>
                </div>
            </section>
             <section className="w-full  ">
                <div className="w-full  mx-auto flex flex-col gap-[18px]">

                    {/* Hero Image */}
                    <div className="w-full h-[250px] overflow-hidden rounded-[12px]">
                        <Image
                            src={"/images/customMachineImage.jpg"}
                            alt="Smart Vending Solutions for Every Business"
                            width={361}
                            height={250}
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </section>
            <section className="w-full ">
                <div className="w-full  mx-auto flex flex-col items-start gap-[8px]">

                    {/* Label */}
                    <div className="w-full h-[15px]">
                        <span
                            className=" block w-full  text-[10px] font-bold leading-[15px] tracking-[0.5px] uppercase text-[#F97316]"
                        >
                            CUSTOM VENDING SOLUTIONS
                        </span>
                    </div>

                    {/* Heading */}
                    <h2
                        className="  w-full  h-[60px]    text-[24px]  font-bold  leading-[30px]  text-[#111827]"
                    >
                        Customized Solutions Built Around Your Business
                    </h2>

                    {/* Features List */}
                    <div className="w-full flex flex-col gap-[12px] py-[16px]">
                        {[
                            "OEM / ODM Manufacturing",
                            "Custom Machine Configuration",
                            "Product-Specific Dispensing Systems",
                            "Branded Hardware & User Interface",
                            "Scalable Deployment & Integration",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="  flex  flex-row  items-center  w-full  min-h-[22px]"
                            >
                                {/* Check Icon */}
                                <div className="w-[20px] h-[20px] shrink-0 flex items-center justify-center">
                                <FaRegCheckCircle className="text-green" />
                                </div>

                                {/* Text */}
                                <span
                                    className="  ml-[12px]    text-[14px]  font-normal  leading-[20px]  text-[#374151] "
                                >
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <Link
                        href="/contact-us"
                        className=" flex flex-row justify-center items-center gap-[8px] w-[267.8px] h-[48px] px-[24px] py-[12px] bg-[#008A08] rounded-[8px]  text-[16px] font-medium leading-[24px] text-white"
                    >
                        <span>Request Custom Machine</span>

                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3 8H13M9 4L13 8L9 12"
                                stroke="white"
                                strokeWidth="1.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </section>

            <section className="w-full">
                <div className="w-full flex flex-col items-start gap-3">
                    {/* Heading */}
                    <div className="w-full flex flex-col items-center">
                        <h3 className="font-bold text-[20px] leading-[28px] tracking-[0.5px] uppercase text-[#111827] text-center">
                            HOW IT WORKS
                        </h3>
                    </div>

                    {/* Process Grid */}
                    <div className="w-full grid grid-cols-2 gap-3">
                        {/* 01 */}
                        <div className="box-border min-h-[176px] p-4 bg-white border border-[#C1E2C2] rounded-xl flex flex-col justify-between items-start">
                            <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-[24px] leading-[36px] text-[#E2F0E2]">
                                01
                            </span>

                            <h4 className="w-full font-['Plus_Jakarta_Sans'] font-bold text-[16px] leading-[20px] text-[#018A06]">
                                Discovery & Consultation
                            </h4>

                            <p className="w-full font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[18px] text-[#5F5F5F]">
                                Understanding your product, audience, and deployment.
                            </p>
                        </div>

                        {/* 02 */}
                        <div className="box-border min-h-[176px] p-4 bg-white border border-[#C1E2C2] rounded-xl flex flex-col justify-between items-start">
                            <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-[24px] leading-[36px] text-[#E2F0E2]">
                                02
                            </span>

                            <h4 className="w-full font-['Plus_Jakarta_Sans'] font-bold text-[16px] leading-[20px] text-[#018A06]">
                                Concept & Prototyping
                            </h4>

                            <p className="w-full font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[18px] text-[#5F5F5F]">
                                3D designs, layouts, and working prototype review.
                            </p>
                        </div>

                        {/* 03 */}
                        <div className="box-border min-h-[176px] p-4 bg-white border border-[#C1E2C2] rounded-xl flex flex-col justify-between items-start">
                            <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-[24px] leading-[36px] text-[#E2F0E2]">
                                03
                            </span>

                            <h4 className="w-full font-['Plus_Jakarta_Sans'] font-bold text-[16px] leading-[20px] text-[#018A06]">
                                Testing & Refinement
                            </h4>

                            <p className="w-full font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[18px] text-[#5F5F5F]">
                                Rigorous testing across performance and durability.
                            </p>
                        </div>

                        {/* 04 */}
                        <div className="box-border min-h-[176px] p-4 bg-white border border-[#C1E2C2] rounded-xl flex flex-col justify-between items-start">
                            <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-[24px] leading-[36px] text-[#E2F0E2]">
                                04
                            </span>

                            <h4 className="w-full font-['Plus_Jakarta_Sans'] font-bold text-[16px] leading-[20px] text-[#018A06]">
                                Production & Deployment
                            </h4>

                            <p className="w-full font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[18px] text-[#5F5F5F]">
                                Manufacturing, installation, and ongoing support.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full ">
                <div className="w-full flex flex-col items-start gap-4">

                    {/* Content */}
                    <div className="w-full flex flex-col items-start gap-3">

                        {/* Badge + Heading */}
                        <div className="w-full flex flex-col items-start gap-2">

                            {/* Badge */}
                            <div className="h-7 flex flex-row items-center justify-center gap-1 px-2 bg-[#F1F9F1] rounded-[16px]">
                                <svg
                                    width="15"
                                    height="11"
                                    viewBox="0 0 15 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-shrink-0"
                                >
                                    <path
                                        d="M1 5.5L5 9.5L14 1"
                                        stroke="#018A06"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                <span className=" font-semibold text-[12px] leading-[20px] tracking-[0.6px] uppercase text-[#018A06]">
                                    Cloud SaaS Platform
                                </span>
                            </div>

                            {/* Heading */}
                            <h2 className="w-full font-['Plus_Jakarta_Sans'] font-bold text-[24px] leading-[30px] text-[#0F0F0F]">
                                Run Smarter. Sell More. Stress Less.
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="w-full font-['Plus_Jakarta_Sans'] font-normal text-[16px] leading-[20px] text-[#5F5F5F]">
                            Monitor inventory, machine health, sales, payments, and
                            analytics through a centralized cloud dashboard designed
                            for intelligent fleet management.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="w-full flex flex-col items-start gap-3">

                        {/* Primary Button */}
                        <Link href="https://vendicarte.com/"
                            className="w-full h-[52px] flex flex-col justify-center items-center px-8 py-4 bg-[#018A06] rounded-[16px]"
                        >
                            <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] leading-[20px] text-white text-center">
                                Explore Platform
                            </span>
                        </Link>

                        {/* Secondary Button */}
                        <Link href="https://vendicarte.com/"
                            type="button"
                            className="box-border w-full h-[54px] flex flex-col justify-center items-center px-8 py-4 bg-white border border-[#C1E2C2] rounded-[16px]"
                        >
                            <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] leading-[20px] text-[#018A06] text-center">
                                Vendicarte Software
                            </span>
                        </Link>

                    </div>
                </div>
            </section>
             <section className=" w-full" >
          <div className=" mx-auto flex w-full max-w-[1248px] flex-col gap-[18px] lg:grid lg:grid-cols-[1fr_1fr] lg:gap-8 lg:items-center " >
                {/* Image */}
               <div className=" relative h-[210px] w-full overflow-hidden rounded-[12px] lg:h-[620px] " >
                    <Image
                        src="/images/platform.jpg"
                        alt="CloverCarte vending machine technology"
                        fill
                        sizes="
                            (max-width: 1024px) 100vw,
                            50vw
                        "
                        className="object-cover"
                    />
                </div>

                {/* Features */}
              <div className=" flex w-full flex-col gap-3 lg:gap-4 " >
                    {platformfeatures.map((feature) => (
                       <div key={feature.title} className=" box-border flex min-h-[98px] w-full flex-col items-start gap-2 rounded-[12px] border border-[#C1E2C2] p-3 lg:min-h-[110px] lg:p-5 " >
                            {/* Title */}
                          <h3 className=" w-full text-[16px] font-semibold leading-[24px] text-[#0F0F0F] lg:text-[18px] lg:leading-[26px] " >
                                {feature.title}
                            </h3>

                            {/* Description */}
                          <p className=" w-full text-[16px] font-normal leading-[20px] text-[#5F5F5F] lg:text-[15px] lg:leading-[22px] " >
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
            <section className="w-full">
                <div className="w-full flex flex-col items-center gap-4">
                    <h2 className="w-full text-center text-[24px] leading-[30px] font-semibold text-[#0F0F0F]">
                        Why Clover Carte
                    </h2>

                    <div className="w-full h-[563px] grid grid-cols-2 gap-5">
                        
                    {sol_2_features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                        <div key={feature.title} className="box-border h-[183px] rounded-2xl border border-[#C1E2C2] bg-white p-4 flex flex-col items-start gap-2">
                            <div className="w-10 h-10 rounded-xl bg-[#F1F9F1] flex items-center justify-center">
                               <Icon className="text-green" size={22}/>
                            </div>

                            <h3 className=" h-12 text-[16px] leading-6 font-bold text-[#0F0F0F]">
                                {feature.title}
                            </h3>

                            <p className="w-[139px] h-10 text-[16px] leading-5 font-normal text-[#5F5F5F]">
                                {feature.description}
                            </p>
                        </div>
                        )})}

                    </div>
                </div>
            </section>
            <FAQAccordion faqs={faqs} className="px-0" />
        </main>
    )
}
