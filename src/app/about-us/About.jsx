import React from 'react'
import aboutImage from "../../assets/images/abt_1.webp"
import aboutImage_2 from "../../assets/images/abt_2.webp"
import { ArrowRight } from 'lucide-react';
import { MdOutlineCloudSync } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import { SvgIcon } from '@/components/svg/icons';
import M_About from './M_About';



function About() {

    const workflowSteps = [
        {
            number: "01",
            title: "CONSULTATION & SCOPE",
            description:
                "Defining technical requirements, operational context, and strategic objectives.",
        },
        {
            number: "02",
            title: "INDUSTRIAL DESIGN",
            description:
                "CAD modeling, structural analysis, and user experience framing.",
        },
        {
            number: "03",
            title: "PROTOTYPING",
            description:
                "Rapid fabrication of functional MVPs for tactile and systemic validation.",
        },
        {
            number: "04",
            title: "SOFTWARE INTEGRATION",
            description:
                "Binding embedded firmware with cloud telemetry and UI logic.",
        },
        {
            number: "05",
            title: "QUALITY ASSURANCE",
            description:
                "Rigorous stress testing, thermal cycling, and security auditing.",
        },
        {
            number: "06",
            title: "DEPLOYMENT & SCALABILITY",
            description:
                "Logistical rollout and activation of fleet management protocols.",
        },
    ];
    return (
        <>
        <div className="block lg:hidden">
        <M_About/>
        </div>
        <div className="hidden lg:block" >
            {/* Intro */}
            <section className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-0 pt-8 lg:py-5">
                <h1
                    className=" text-[32px] sm:text-[40px] lg:text-5xl leading-tight font-bold text-black"
                >
                    About Us
                </h1>

                <p
                    className=" text-black mt-4 max-w-4xl text-[16px] lg:text-[18px] leading-[6px]"
                >
                    India's First Made-In-India Smart Vending Machine Manufacturer.
                </p>
            </section>

            {/* Main About Section */}
            <section className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-0 py-4 ">

                <div
                    className="flex flex-col lg:flex-row  gap-10 lg:gap-[50px]"
                >

                    {/* Left Image */}
                    <div
                        className="w-full lg:w-[676px] h-[430px] "
                    >

                        <Image priority style={{ width: "100%", height: "100%" }}
                            src={aboutImage}
                            alt="About Clover Carte"
                            className="
                        object-containt
                        rounded-[4px]
                        shadow-[6px_8px_10px_rgba(1,138,6,0.20)]
                    "

                        />

                    </div>

                    {/* Right Content */}
                    <div
                        className="w-full lg:w-[522px] flex flex-col gap-8 lg:gap-5"
                    >

                        <div className="flex flex-col gap-4 lg:gap-5">

                            {/* Label */}
                            <span
                                className=" text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] lg:leading-[2px] font-bold uppercase text-[#0F0F0F]"
                            >
                                ABOUT <span className="text-[#018A06]">CLOVER CARTE</span>
                            </span>

                            {/* Heading */}
                            <h2
                                className=" font-bold text-[#0F0F0F] text-[36px sm:text-[48px] sm:leading-[58px] lg:text-[48px] "
                            >
                                Engineering the
                                <br />
                                Future Of
                                <span className="text-[#018A06]">
                                    &nbsp;Automated
                                    <br />
                                    Retail.
                                </span>
                            </h2>

                        </div>

                        {/* Description */}
                        <p
                            className="  text-[#5F5F5F]  text-[16px]  sm:text-[18px]  sm:leading-[30px]  lg:text-[18px]  text-justify"
                        >
                            At <a href='/' className='font-bold' >Clover Carte</a>, we are redefining retail automation for
                            India's FMCG sector. We help brands create exclusive
                            branded distribution channels through smart vending
                            solutions that operate 24×7 without manpower.

                            <br />

                            We are India's first Made-in-India smart vending machine
                            manufacturer designing, building, and deploying intelligent
                            vending solutions for India's most iconic FMCG brands.
                        </p>

                    </div>

                </div>

            </section>
            <section className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-0 py-8 ">

                <div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8"
                >

                    {/* WHO WE ARE */}
                    <div
                        className=" lg:col-span-4 lg:row-span-2 border border-[#E2F0E2] rounded-2xl bg-white p-6 sm:p-8 lg:p-9"
                    >
                        <div className="flex flex-col h-full">

                            <span className="text-xs font-medium tracking-[1px] uppercase text-[#018A06]">
                                Who We Are
                            </span>

                            <h2
                                className=" mt-5 text-[30px] leading-[40px] sm:text-[36px] sm:leading-[48px] lg:text-[40px] lg:leading-[54px] font-semibold text-[#018A06]"
                            >
                                We Engineer,
                                <br />
                                Don't Just
                                <br />
                                Assemble.
                            </h2>

                            <p
                                className=" mt-6 lg:mt-12 text-[15px] sm:text-[16px] leading-[26px] lg:leading-[27px] text-[#0F0F0F] text-justify"
                            >
                                Our philosophy is rooted in end-to-end engineering.
                                <br />
                                We design, fabricate, and integrate every component
                                in-house ensuring complete cohesion between the
                                hardware, software, and the intelligence that drives it.
                            </p>

                        </div>
                    </div>

                    {/* IOT */}
                    <div

                        className=" lg:col-span-4 border border-[#E2F0E2] rounded-2xl bg-white p-6 sm:p-8 lg:p-9"
                    >
                        <div className="mb-5">
                            <SvgIcon.IotIcon />
                        </div>

                        <h3
                            className=" text-[20px] sm:text-[22px] lg:text-[24px] leading-[30px] lg:leading-8 font-semibold text-[#018A06]"
                        >
                            IoT Architecture
                        </h3>

                        <p className="mt-3 text-[15px] sm:text-[16px] leading-[24px] text-[#0F0F0F] text-justify">
                            Real-time telemetry and IoT-connected sensors provide
                            synchronous operation and live monitoring across all
                            deployed machines.
                        </p>
                    </div>

                    {/* APPLIED AI */}
                    <div
                        className=" lg:col-span-4 border border-[#E2F0E2] rounded-2xl bg-white p-6 sm:p-8 lg:p-9"
                    >
                        <div className="mb-5">
                            <SvgIcon.AppliedAI />
                        </div>

                        <h3
                            className=" text-[20px] sm:text-[22px] lg:text-[24px] leading-[30px] lg:leading-8 font-semibold text-[#018A06]"
                        >
                            Applied AI
                        </h3>

                        <p className="mt-3 text-[15px] sm:text-[16px] leading-[24px] text-[#0F0F0F] text-justify">
                            Predictive maintenance algorithms and dynamic inventory
                            routing maximize uptime and revenue.
                        </p>
                    </div>

                    {/* CLOUD ORCHESTRATION */}
                    <div
                        className=" lg:col-span-8 bg-[#018A06] border border-[#005E03] rounded-2xl p-6 sm:p-8 lg:p-9 relative overflow-hidden"
                    >
                        <div className='flex justify-between'>
                            <h3
                                className=" text-[20px] sm:text-[22px] lg:text-[24px] leading-[30px] lg:leading-8 font-semibold text-white"
                            >
                                Cloud Orchestration
                            </h3>
                            <MdOutlineCloudSync
                                className="w-10 h-10 lg:w-[35px] lg:h-[28px] text-[#FFFFFF80]"
                            />


                        </div>

                        <div className="mt-4">
                            <p
                                className=" mt-3 max-w-full text-white text-[15px] sm:text-[16px] leading-[22.5px] text-justify"
                            >
                                Power your vending ecosystem through a centralized cloud platform with real-time telemetry, inventory synchronization, remote diagnostics, predictive maintenance, and intelligent fleet management. Gain complete operational visibility and scale confidently across every connected machine. Secure cloud infrastructure ensures seamless operations, faster decision-making, and enterprise-grade control across your entire fleet.
                            </p>

                        </div>


                    </div>

                    {/* CUSTOM MANUFACTURING */}
                    <div
                        className=" lg:col-span-8 border border-[#E2F0E2] rounded-2xl bg-white p-6 sm:p-8 lg:p-9"
                    >
                        <h3
                            className=" text-[20px] sm:text-[22px] lg:text-[24px] leading-[30px] lg:leading-8 font-semibold text-[#018A06]"
                        >
                            Custom Machine Manufacturing
                        </h3>

                        <p className="mt-3 text-[15px] sm:text-[16px] leading-[24px] text-[#0F0F0F] text-justify">
                            Design and manufacture bespoke vending machines tailored to your products, business goals, and operational requirements. Our in-house engineering team develops custom dispensing systems, modular architectures, temperature-controlled solutions, branded exteriors, and intelligent software integrations to create vending machines that combine exceptional functionality with a premium customer experience.
                        </p>
                    </div>

                    {/* AUTOMATION */}
                    <div
                        className=" lg:col-span-4 border border-[#E2F0E2] rounded-2xl bg-white p-6 sm:p-8 lg:p-9"
                    >
                        <h3
                            className=" text-[20px] sm:text-[22px] lg:text-[24px] leading-[30px] lg:leading-8 font-semibold text-[#018A06]"
                        >
                            Automation Engineering
                        </h3>

                        <p className="mt-3 text-[15px] sm:text-[16px] leading-[24px] text-[#0F0F0F] text-justify">
                            We combine precision mechanics, embedded electronics, and intelligent control systems to deliver reliable dispensing, optimized workflows, and consistent machine performance.
                        </p>
                    </div>

                </div>

            </section>

            <section className="max-w-[1248px] mx-auto  py-12">
                {/* Heading */}

                <div
                    className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-4"
                >
                    <div
                        className=""
                    >
                        <p className="text-[#F58E05] text-[16px] font-semibold tracking-[1.2px] uppercase ">
                            PROCESS 04 // METHODOLOGY
                        </p>

                        <h2 className="text-[32px] md:text-[40px]  font-extrabold uppercase text-green">
                            THE ENGINEERING WORKFLOW
                        </h2>
                    </div>

                </div>

                {/* Workflow Grid */}

                <div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4"
                >
                    {workflowSteps.map((step) => (
                        <div
                            key={step.number}
                            className=" p-6 min-h-[200px] border border-[#E2F0E2] hover:border-transparent hover:border-t-4 hover:border-t-[#018A06] rounded-xl bg-transparent transition-all duration-300 hover:bg-white hover:rounded-none "
                        >
                            <div
                                className="text-[32px] leading-[40px] font-extrabold text-[#F58E05] mb-6"
                            >
                                {step.number}
                            </div>

                            <div className="flex flex-col gap-3">
                                <h3 className=" text-[24px] leading-7 font-bold uppercase text-[#0F0F0F] " >
                                    {step.title}
                                </h3>

                                <p className="text-[16px] leading-6 text-[#5F5F5F]">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-[#F1F9F1] py-12 ">
                <div className="max-w-[1248px] mx-auto px-5">

                    {/* Mission */}

                    <div
                        className="mb-16"
                    >
                        <p
                            className="text-[16px] font-semibold tracking-[1.35px] uppercase text-green mb-3"
                        >
                            Mission
                        </p>

                        <h2
                            transition={{ delay: 0.15 }}
                            className="text-[24px] md:text-[32px] leading-[40px] font-bold text-[#F58E05] mb-2"
                        >
                            Built for Brands. Engineered for India.
                        </h2>

                        <p
                            className="text-[16px] leading-6 italic text-[#3F3F3F] max-w-[1100px]"
                        >
                            To help India's most iconic FMCG brands reach their consumers
                            anywhere, anytime through intelligent branded vending channels
                            that operate 24×7 without manpower.
                        </p>
                    </div>

                    {/* Vision */}

                    <div
                        className="flex justify-end"
                    >
                        <div
                            className="max-w-[900px] text-right"
                        >
                            <p
                                className="text-[16px] font-semibold tracking-[1.35px] uppercase text-[#F58E05] mb-3"
                            >
                                Vision
                            </p>

                            <h2
                                className="text-[24px] md:text-[32px] leading-[40px] font-bold text-green mb-2"
                            >
                                The Future of Retail is Automated.
                            </h2>

                            <p
                                className="text-[16px] leading-6 italic text-[#3F3F3F]"
                            >
                                To become India's most trusted smart vending manufacturer
                                powering the next generation of automated retail across every
                                industry and every consumer touchpoint in India.
                            </p>
                        </div>
                    </div>

                </div>
            </section >


            <section className="w-full py-12 lg:py-20 px-6 md:px-12 lg:px-16">
                <div
                    className="max-w-[1253px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[50px]"
                >
                    {/* LEFT CONTENT */}
                    <div
                        className="w-full lg:max-w-[577px] flex flex-col gap-7"
                    >
                        <h2
                            className="text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-[150%] text-[#018A06]"
                        >
                            Proudly Engineered & <br />
                            Manufactured in India.
                        </h2>

                        <p
                            className="text-[16px] md:text-[18px] lg:text-[20px] leading-[180%] text-[#0F0F0F] text-justify"
                        >
                            Our manufacturing facility is based in Nagpur, Maharashtra
                            operating under Shree Padmavati Techsolution Pvt. Ltd. Every{" "}
                            <a href="/" className="font-bold">
                                Clover Carte
                            </a>{" "}
                            machine is designed, assembled, tested, and dispatched from our
                            facility built to handle the demands of real-world Indian
                            environments with vandal-resistant MS body panels, power
                            fluctuation tolerance, and cloud-connected sensors running round
                            the clock.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div
                        className="relative w-full lg:max-w-[624px] h-[260px] md:h-[340px] lg:h-[388px] overflow-hidden"
                    >
                        <Image
                            src={aboutImage_2}
                            alt="Manufacturing Plant"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full pb-6  px-6 flex justify-center items-center">
                <div
                    className="max-w-[700px] w-full flex flex-col items-center gap-6 text-center"
                >

                    {/* Heading */}
                    <h2
                        className="text-[32px] md:text-[48px] lg:text-[64px] leading-[1.2] font-bold text-[#03271A]"
                    >
                        Let's Build Your Next <br className="hidden md:block" />
                        Retail Experience.
                    </h2>

                    {/* Buttons */}
                    <div
                        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4"
                    >

                        {/* Primary Button */}
                        <Link
                            href={`/products`}
                            className="bg-[#018A06] text-white px-10 md:px-[75px] py-4 md:py-[19px] rounded-md text-[16px] md:text-[20px] font-semibold"
                        >
                            Explore Our Machines
                        </Link>

                        {/* Secondary Button */}
                        <Link href={`/contact-us`}
                            className="flex items-center gap-2 border border-[#018A06] px-8 md:px-[44px] py-4 md:py-[20px] rounded-md text-[16px] md:text-[20px] font-semibold text-[#0F0F0F]"
                        >
                            Get In Touch
                            <ArrowRight size={20} />
                        </Link>

                    </div>
                </div>
            </section>

        </div >
        </>
    )
}

export default About