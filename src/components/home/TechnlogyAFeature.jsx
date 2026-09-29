import React from 'react'
import {
    MdOutlineCloudSync,
} from "react-icons/md";
import { SvgIcon } from '../svg/icons';
import { PiContactlessPaymentFill } from 'react-icons/pi';

const smallCards = [
    {
        icon: SvgIcon.SparkleStats,
        title: "Real-Time Analytics",
        desc: "Deep data insights into sales velocity and operational efficiency.",
    },
    {
        icon: PiContactlessPaymentFill,
        title: "Cashless Payments",
        desc: "NFC, RFID, and secure mobile wallet integration protocols.",
    },
    {
        icon: SvgIcon.BoxIcon,
        title: "Inventory Intelligence",
        desc: "Automated stock tracking and dynamic reordering algorithms.",
    },
    {
        icon: SvgIcon.CardWave,
        title: "Remote Diagnostics",
        desc: "Self-healing software routines and hardware fault isolation.",
    },
];

function TechnlogyAFeature() {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-[1248px] mx-auto">
                {/* Heading */}
                <h2
                    className="
                text-[40px]
                leading-[44px]
                font-extrabold
                uppercase
                text-center
                text-[#0F0F0F]
                mb-8
            "
                >
                    Technology & Features
                </h2>

                <div className="grid xl:grid-cols-[615px_616px] gap-[17px] px-3 lg:px-0">
                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-5">
                        {/* CLOUD MONITORING */}
                        <div
                            className="
                        relative
                        h-[197px]
                        overflow-hidden
                        rounded-2xl
                        border
                        border-[#E2F0E2]
                        bg-gradient-to-t
                        from-white
                        to-transparent
                        shadow-[0_2px_6px_rgba(0,0,0,0.15)]
                    "
                        >
                            {/* Green Overlay */}
                            <div className="absolute inset-0 bg-[rgba(5,150,10,0.10)]" />

                            {/* Wave */}
                            <div className="absolute bottom-0 left-0 w-full h-[52px] overflow-hidden">
                                <svg
                                    className="w-full h-full"
                                    viewBox="0 0 575 52"
                                    preserveAspectRatio="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 51.6333V9.55177C115.099 -7.38982 160.546 0.133448 287.5 17.075C408.319 33.1979 479.167 41.9515 575 1.63344V51.6333H0Z"
                                        fill="#05960A"
                                        fillOpacity="0.2"
                                    />
                                </svg>
                            </div>

                            <div className="relative z-10 h-full px-5 py-3   flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-[18px]">
                                        <div className="flex h-[42px]  gap-5 justify-center items-center">
                                            <div className="w-[42px] h-[42px] rounded-lg bg-[rgba(5,150,10,0.10)] flex items-center justify-center">
                                                <MdOutlineCloudSync className="w-7 h-7 text-green " />
                                            </div>
                                            <h3 className="text-[21px] leading-[30px] font-bold text-[#0F0F0F]">
                                                Cloud Monitoring
                                            </h3>
                                        </div>

                                        <div className="flex items-center gap-1 bg-[rgba(5,150,105,0.10)] px-[8px] py-[4px] rounded-lg">
                                            <span className="w-[6px] h-[6px] bg-[#018A06] rounded-full" />
                                            <span className="font-mono text-[10px] text-[#018A06]">
                                                LIVE
                                            </span>
                                        </div>
                                    </div>

                                    <p className="max-w-[388px] text-[14px] leading-[21px] text-[#5F5F5F]">
                                        Centralized fleet management with real-time telemetry,
                                        predictive maintenance alerts, and secure OTA updates.
                                    </p>
                                </div>

                                <div className="flex items-center gap-5 text-[12px]">
                                    <div>
                                        <p className="leading-[17px] text-[#0F0F0F]">Uptime</p>
                                        <p className="font-semibold leading-[17px] text-[#0F0F0F]">
                                            99.98%
                                        </p>
                                    </div>

                                    <div>
                                        <p className="leading-[17px] text-[#0F0F0F]">Latency</p>
                                        <p className="font-semibold leading-[17px] text-[#0F0F0F]">
                                            12ms
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* MODULAR HARDWARE */}
                        <div
                            className="
                        h-[193px]
                        bg-white
                        border
                        border-[#E2F0E2]
                        rounded-2xl
                        shadow-[0_2px_6px_rgba(0,0,0,0.10)]
                        p-5
                        flex
                        items-center
                        gap-6
                    "
                        >
                            <div className="w-[50px] h-[50px] rounded-lg bg-[#F1F9F1] flex items-center justify-center shrink-0">
                                <SvgIcon.GridBox />
                            </div>

                            <div className="max-w-[469px]">
                                <h3 className="text-[17px] leading-[25px] font-bold text-[#0F0F0F] mb-1">
                                    Modular Hardware Systems
                                </h3>

                                <p className="text-[13px] leading-[21px] text-[#5F5F5F]">
                                    Hot-swappable components designed for rapid field
                                    replacement and scalable upgrades without full system
                                    downtime.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="grid lg:grid-cols-2 gap-[17px]">
                        {smallCards.map((card, index) => {
                            const Icon = card.icon;

                            return (
                                <div
                                    key={index}
                                    className="
                                h-[196px]
                                bg-white
                                border
                                border-[#E2F0E2]
                                rounded-2xl
                                shadow-[0_2px_6px_rgba(0,0,0,0.10)]
                                p-5
                                flex
                                flex-col
                                justify-between
                            "
                                >
                                    <div>
                                        <div className="w-[40px] h-[40px]  rounded-lg bg-[#F1F9F1] flex items-center justify-center mb-4">
                                            <Icon size={18} className=" text-[#018A06]" />
                                        </div>

                                        <h3 className="text-[17px] leading-[25px] font-bold text-[#0F0F0F] mb-2">
                                            {card.title}
                                        </h3>
                                    </div>

                                    <p className="text-[13px] leading-[21px] text-[#5F5F5F]">
                                        {card.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnlogyAFeature