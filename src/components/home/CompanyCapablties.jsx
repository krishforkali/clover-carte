import React from 'react'
import { SvgIcon } from '../svg/icons'
import { Cpu, Factory } from 'lucide-react'
import { MdOutlineSupportAgent } from 'react-icons/md'

function CompanyCapablties() {

    return (
        <section className="w-full py-10 lg:py-16 px-4 sm:px-6 lg:px-5 bg-white">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-8 lg:gap-10 ">
                {/* Header */}
                <div className="max-w-[1089px] text-center">
                    <h2
                        className="font-['Plus_Jakarta_Sans']
                text-[30px]
                sm:text-[36px]
                lg:text-[40px]
                leading-[36px]
                sm:leading-[42px]
                lg:leading-[44px]
                font-extrabold
                uppercase
                tracking-[0.9px]
                text-[#0F0F0F]"
                    >
                        Company Capabilities
                    </h2>

                    <p className="mt-4 lg:mt-5 text-[15px] lg:text-[16px] leading-6 text-[#5F5F5F] max-w-6xl mx-auto">
                        Engineered precision for high-demand environments. Our
                        manufacturing foundation is built on rigorous standards and
                        advanced integrations.
                    </p>
                </div>

                {/* Cards Wrapper */}
                <div className="flex justify-center">
                    <div className="w-full grid grid-cols-1 xl:grid-cols-[399px_824px] items-center gap-6 lg:gap-[25px]">
                        {/* LEFT CARD */}
                        <div
                            className="relative
                                min-h-[380px]
                                lg:h-[443px]
                                rounded-2xl
                                bg-[#FFFFFF99]
                                transition-all
                                duration-500
                                hover:bg-green
                                hover:border-[#005E03]
                                hover:-translate-y-2
                                p-6
                                lg:p-8
                                group border-1 border-[#E2F0E2] shadow-[0px_4px_10px_(rgba(1, 138, 6, 0.2)]"
                        >
                            <div className="flex justify-between items-start">
                                <div
                                    className=" w-[59px]
                                                    h-[59px]
                                                    rounded-2xl
                                                    bg-green
                                                    flex
                                                    items-center
                                                    justify-center
                                                    transition-all
                                                    duration-500 group-hover:bg-white"
                                >
                                    <SvgIcon.Compass
                                        size={22}
                                        className=" text-white group-hover:text-green "
                                    />
                                </div>

                                <span className="border border-green rounded-lg px-4 py-2 text-xs text-green group-hover:border-white group-hover:text-white">
                                    Primary
                                </span>
                            </div>

                            <div className="mt-8">
                                <h3
                                    className="text-[#0F0F0F]
        group-hover:text-white
        font-bold
        text-[22px]
        lg:text-[25px]
        leading-[30px]
        lg:leading-[34px]
        transition-all
        duration-500
        group-hover:translate-x-1"
                                >
                                    Custom Design
                                    <br />
                                    Engineering
                                </h3>

                                <p
                                    className="mt-5 lg:mt-6 text-black text-[15px] lg:text-[16px] leading-6  transition-all
        duration-500
        group-hover:translate-x-1 group-hover:text-white"
                                >
                                    Expert mechanical engineers create perfect configurations
                                    tailored to your specific operational needs and environmental
                                    constraints.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="flex flex-col gap-6">
                            {/* TOP CARDS */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[25px]">
                                {/* CARD 1 */}
                                <div
                                    className="
    min-h-[250px]
    lg:h-[280px]
    rounded-2xl
    bg-white
    transition-all
    duration-300
    hover:-translate-y-2
    hover:ring-2
    hover:ring-green
    ring-1
    ring-[#E2F0E2]
    shadow-[0_2px_6px_rgba(rgba(0, 0, 0, 0.05))]
    p-6
    "
                                >
                                    <div className="w-[51px] h-[51px] rounded-lg bg-[#F1F9F1] flex items-center justify-center">
                                        <Factory size={20} className="text-green" />
                                    </div>

                                    <h3 className="mt-5 lg:mt-6 text-[18px] lg:text-[20px] font-bold text-[#0F0F0F]">
                                        OEM / ODM Manufacturing
                                    </h3>

                                    <p className="mt-3 text-[15px] lg:text-[16px] leading-6 text-[#5F5F5F]">
                                        End-to-end manufacturing process under strict ISO 9001
                                        guidelines and continuous automated testing.
                                    </p>

                                    <div className="mt-5 lg:mt-6 flex items-center gap-2 text-xs text-[#5F5F5F]">
                                        <span className="w-[6px] h-[6px] rounded-full bg-green" />
                                        ISO 9001:2015 Certified
                                    </div>
                                </div>

                                {/* CARD 2 */}
                                <div
                                    className="
    min-h-[250px]
    lg:h-[280px]
    rounded-2xl
    bg-white
    transition-all
    duration-300
    hover:-translate-y-2
    hover:ring-2
    hover:ring-green
     ring-1
    ring-[#E2F0E2]
    shadow-[0_2px_6px_rgba(rgba(0, 0, 0, 0.05))]
    p-6
    "
                                >
                                    <div className="w-[51px] h-[51px] rounded-lg bg-[#F1F9F1] flex items-center justify-center">
                                        <Cpu size={20} className="text-green" />
                                    </div>

                                    <h3 className="mt-5 lg:mt-6 text-[18px] lg:text-[20px] font-bold text-[#0F0F0F]">
                                        Smart Technology Integration
                                    </h3>

                                    <p className="mt-3 text-[15px] lg:text-[16px] leading-6 text-[#5F5F5F]">
                                        Provides seamless technology hardware interfaces and smart
                                        software integration for modern IoT systems.
                                    </p>

                                    <div className="mt-5 lg:mt-6 flex items-center gap-2 text-xs text-[#5F5F5F]">
                                        <span className="w-[6px] h-[6px] rounded-full bg-green" />
                                        API & SDK Ready
                                    </div>
                                </div>
                            </div>

                            {/* SUPPORT CARD */}
                            <div
                                className="rounded-2xl 
    duration-300
    hover:-translate-y-2
    hover:ring-2
    hover:ring-green
     ring-1
    ring-[#E2F0E2]
    shadow-[0_2px_6px_rgba(rgba(0, 0, 0, 0.05))] p-6 lg:px-[25px] lg:h-[139px]"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                                        <div className="w-[51px] h-[51px] rounded-lg bg-[#F1F9F1] flex items-center justify-center shrink-0">
                                            <MdOutlineSupportAgent size={20} className="text-green" />
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-[18px] lg:text-[19px] text-[#0F0F0F]">
                                                Comprehensive Support
                                            </h3>

                                            <p className="mt-2 text-[14px] lg:text-[15px] text-[#5F5F5F] max-w-[530px]">
                                                Entire manufacturing support and a comprehensive network
                                                ensure global reliability and minimal downtime.
                                            </p>
                                        </div>
                                    </div>

                                    {/* SLA Box */}
                                    <div className="w-full sm:w-[180px] lg:w-[130px] h-[59px] border border-[#F1F9F1] rounded-lg p-3 flex flex-col justify-between shrink-0">
                                        <div className="flex justify-between text-[12px] text-[#5F5F5F]">
                                            <span>SLA Target</span>
                                            <span>99.9%</span>
                                        </div>

                                        <div className="h-[6px] rounded-full bg-[#E2F0E2] overflow-hidden">
                                            <div className="h-full w-[99%] bg-green" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompanyCapablties