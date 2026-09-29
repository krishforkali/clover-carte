import React from 'react'

import {
    ClipboardList,
    PenTool,
    Box,
    Search,
    Settings,
    CheckSquare,
    Truck,
    Wrench,
} from "lucide-react";
function ManufacturingProc() {
    const ProcessStep = ({ icon: Icon, number, title, subtitle }) => {
        return (
            <div className="flex flex-col items-center text-center w-[264px]">
                <div className="relative">
                    <div className="w-[80px] h-[80px] rounded-full border-[3px] border-[#018A06] bg-white flex items-center justify-center">
                        <Icon className="w-10 h-8 text-[#018A06]" />
                    </div>
                </div>

                <h3 className="mt-5 text-[18px] font-bold text-[#0F0F0F] text-nowrap">
                    {number}. {title}
                </h3>

                <p className="mt-2 text-[15px] text-[#5F5F5F]">{subtitle}</p>
            </div>
        );
    };

    const ArrowLine = ({ direction }) => {
        if (direction === "right") {
            return (
                <div className="flex items-center mt-[48px]">
                    <svg
                        width="100"
                        height="15"
                        viewBox="0 0 120 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M119.707 8.07113C120.098 7.68061 120.098 7.04744 119.707 6.65692L113.343 0.292956C112.953 -0.0975687 112.319 -0.0975687 111.929 0.292956C111.538 0.68348 111.538 1.31664 111.929 1.70717L117.586 7.36402L111.929 13.0209C111.538 13.4114 111.538 14.0446 111.929 14.4351C112.319 14.8256 112.953 14.8256 113.343 14.4351L119.707 8.07113ZM0 7.36401L0 8.36401L119 8.36402L119 6.36402L0 6.36401L0 7.36401Z"
                            fill="#018A06"
                        />
                    </svg>
                </div>
            );
        }

        if (direction === "left") {
            return (
                <div className="flex items-center mt-[48px]">
                    <svg
                        width="100"
                        height="15"
                        viewBox="0 0 120 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.292893 8.07113C-0.0976333 7.68061 -0.0976334 7.04744 0.292892 6.65692L6.65685 0.292956C7.04738 -0.0975687 7.68054 -0.0975687 8.07107 0.292956C8.46159 0.68348 8.46159 1.31664 8.07107 1.70717L2.41422 7.36402L8.07107 13.0209C8.46159 13.4114 8.46159 14.0446 8.07107 14.4351C7.68054 14.8256 7.04738 14.8256 6.65685 14.4351L0.292893 8.07113ZM120 7.36401L120 8.36401L1 8.36402L1 6.36402L120 6.36401L120 7.36401Z"
                            fill="#018A06"
                        />
                    </svg>
                </div>
            );
        }

        if (direction === "down") {
            return (
                <div className="flex items-center justify-center">
                    <svg
                        width="15"
                        height="55"
                        viewBox="0 0 15 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.65691 54.7071C7.04743 55.0976 7.6806 55.0976 8.07112 54.7071L14.4351 48.3431C14.8256 47.9526 14.8256 47.3195 14.4351 46.9289C14.0446 46.5384 13.4114 46.5384 13.0209 46.9289L7.36402 52.5858L1.70716 46.9289C1.31664 46.5384 0.683472 46.5384 0.292948 46.9289C-0.0975765 47.3195 -0.0975764 47.9526 0.292948 48.3431L6.65691 54.7071ZM7.36401 0L6.36401 0L6.36402 54L8.36402 54L8.36401 0L7.36401 0Z"
                            fill="#018A06"
                        />
                    </svg>
                </div>
            );
        }

        return null;
    };
    return (
        <section className="bg-[#F8FAF8] border border-[#E2F0E2] shadow-[0_2px_6px_rgba(0,0,0,0.15)] py-12 lg:py-10 px-4 sm:px-6">
            <div className="max-w-[1248px] mx-auto">
                {/* Heading */}
                <div className="text-center mb-10 ">
                    <h2
                        className="
                   font-jakarta
                   font-extrabold
                   uppercase
                   text-[30px]
                   sm:text-[36px]
                   lg:text-[40px]
                   leading-[36px]
                   sm:leading-[42px]
                   lg:leading-[44px]
                   text-[#0F0F0F]
               "
                    >
                        Manufacturing Process
                    </h2>

                    <p className="mt-4 lg:mt-6 text-[15px] lg:text-[17px] leading-6 text-[#5F5F5F] max-w-full font-medium mx-auto">
                        We follow a strict, standardized manufacturing process that
                        ensures efficiency, quality control, and timely delivery.
                    </p>
                </div>

                {/* MOBILE / TABLET */}
                <div className="flex flex-col items-center gap-6 lg:hidden">
                    <ProcessStep
                        number="1"
                        title="Initial Consultation"
                        subtitle="Define requirements"
                        icon={ClipboardList}
                    />

                    <ProcessStep
                        number="2"
                        title="Custom Design"
                        subtitle="CAD/CAM modeling"
                        icon={PenTool}
                    />

                    <ProcessStep
                        number="3"
                        title="Prototype"
                        subtitle="Build & validate"
                        icon={Box}
                    />

                    <ProcessStep
                        number="4"
                        title="Testing & Refinement"
                        subtitle="Iterative testing"
                        icon={Search}
                    />

                    <ProcessStep
                        number="5"
                        title="Production Manufacturing"
                        subtitle="Mass assembly line"
                        icon={Settings}
                    />

                    <ProcessStep
                        number="6"
                        title="Quality Control"
                        subtitle="Rigorous inspection"
                        icon={CheckSquare}
                    />

                    <ProcessStep
                        number="7"
                        title="Deployment"
                        subtitle="Global shipping"
                        icon={Truck}
                    />

                    <ProcessStep
                        number="8"
                        title="Maintenance"
                        subtitle="Ongoing support"
                        icon={Wrench}
                    />
                </div>

                {/* DESKTOP */}
                <div className="hidden lg:block">
                    <div className="relative ">
                        {/* TOP ROW */}
                        <div className="flex justify-between items-start">
                            <ProcessStep
                                width="235px"
                                number="1"
                                title="Initial Consultation"
                                subtitle="Define requirements"
                                icon={ClipboardList}
                            />

                            <ArrowLine direction="right" />

                            <ProcessStep
                                width="172px"
                                number="2"
                                title="Custom Design"
                                subtitle="CAD/CAM modeling"
                                icon={PenTool}
                            />

                            <ArrowLine direction="right" />

                            <ProcessStep
                                width="124px"
                                number="3"
                                title="Prototype"
                                subtitle="Build & validate"
                                icon={Box}
                            />

                            <ArrowLine direction="right" />

                            <ProcessStep
                                width="230px"
                                number="4"
                                title="Testing & Refinement"
                                subtitle="Iterative testing"
                                icon={Search}
                            />
                        </div>

                        {/* Connector */}
                        <div className="flex justify-end mr-[98px]">
                            <ArrowLine direction="down" />
                        </div>

                        {/* Bottom Row */}
                        <div className="flex justify-between items-start mt-4">
                            <ProcessStep
                                width="151px"
                                number="8"
                                title="Maintenance"
                                subtitle="Ongoing support"
                                icon={Wrench}
                            />

                            <ArrowLine direction="left" />

                            <ProcessStep
                                width="142px"
                                number="7"
                                title="Deployment"
                                subtitle="Global shipping"
                                icon={Truck}
                            />

                            <ArrowLine direction="left" />

                            <ProcessStep
                                width="172px"
                                number="6"
                                title="Quality Control"
                                subtitle="Rigorous inspection"
                                icon={CheckSquare}
                            />

                            <ArrowLine direction="left" />

                            <ProcessStep
                                width="279px"
                                number="5"
                                title="Production Manufacturing"
                                subtitle="Mass assembly line"
                                icon={Settings}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ManufacturingProc