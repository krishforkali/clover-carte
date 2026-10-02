"use client";
import React from 'react';

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

const STEPS = [
    { number: "1", title: "Initial Consultation",     subtitle: "Define requirements",  icon: ClipboardList },
    { number: "2", title: "Custom Design",             subtitle: "CAD/CAM modeling",     icon: PenTool      },
    { number: "3", title: "Prototype",                 subtitle: "Build & validate",     icon: Box          },
    { number: "4", title: "Testing & Refinement",      subtitle: "Iterative testing",    icon: Search       },
    { number: "5", title: "Production Manufacturing",  subtitle: "Mass assembly line",   icon: Settings     },
    { number: "6", title: "Quality Control",           subtitle: "Rigorous inspection",  icon: CheckSquare  },
    { number: "7", title: "Deployment",                subtitle: "Global shipping",      icon: Truck        },
    { number: "8", title: "Maintenance",               subtitle: "Ongoing support",      icon: Wrench       },
];

/* Duplicate cards so the loop is seamless */
const MARQUEE_STEPS = [...STEPS, ...STEPS];

function ManufacturingProc() {
    return (
        <section className="bg-[#F8FAF8] border border-[#E2F0E2] shadow-[0_2px_6px_rgba(0,0,0,0.15)] w-full py-12 lg:py-10">

            <style>{`
                @keyframes mfg-marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .mfg-track {
                    animation: mfg-marquee 28s linear infinite;
                }
                .mfg-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="max-w-[1248px] mx-auto px-3 lg:px-0">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="font-jakarta font-extrabold uppercase text-[30px] sm:text-[36px] lg:text-[40px] leading-[36px] sm:leading-[42px] lg:leading-[44px] text-[#0F0F0F]">
                        Manufacturing Process
                    </h2>
                    <p className="mt-4 lg:mt-6 text-[15px] lg:text-[17px] leading-6 text-[#5F5F5F] max-w-full font-medium mx-auto">
                        We follow a strict, standardized manufacturing process that
                        ensures efficiency, quality control, and timely delivery.
                    </p>
                </div>

            </div>

            {/* Full-width marquee — true edge-to-edge */}
            <div className="overflow-hidden w-full mt-10">
                <div className="mfg-track flex items-center">
                    {MARQUEE_STEPS.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <React.Fragment key={idx}>
                                <div
                                    className="flex flex-col items-center text-center flex-shrink-0 px-6"
                                    style={{ width: "280px" }}
                                >
                                    <div className="w-[80px] h-[80px] rounded-full border-[3px] border-[#018A06] bg-white flex items-center justify-center">
                                        <Icon className="w-10 h-8 text-[#018A06]" />
                                    </div>
                                    <h3 className="mt-5 text-[18px] font-bold text-[#0F0F0F] text-nowrap">
                                        {step.number}. {step.title}
                                    </h3>
                                    <p className="mt-2 text-[15px] text-[#5F5F5F]">{step.subtitle}</p>
                                </div>

                                {/* Double-chevron flow arrow */}
                                <div className="flex items-center flex-shrink-0 -mt-8 gap-[2px]">
                                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4L18 16L4 28" stroke="#018A06" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-2">
                                        <path d="M4 4L18 16L4 28" stroke="#018A06" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>

        </section>
    );
}

export default ManufacturingProc


