"use client"
import React from 'react'
import { IoEye } from 'react-icons/io5';
import { SvgIcon } from '../svg/icons';
import { MdOutlineQrCodeScanner } from 'react-icons/md';
import { IoMdCloud } from 'react-icons/io';
import { motion } from "framer-motion";
import solution_4 from "../../assets/images/sol_4.webp";
import Image from 'next/image';
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};
const cardReveal = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.96,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
        },
    },
};

function VendicarteSolution() {
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
    ];
    return (
        <section className="w-full px-3 md:px-12 py-12 ">
            <div className="max-w-[1248px] bg-[#F1F9F1] p-10 mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
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
                    <motion.p
                        variants={fadeUp}
                        className="text-[#6B7280] text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed"
                    >
                        VendiCarte is Clover Carte's vending management platform giving
                        real-time control of your entire fleet, from inventory to
                        analytics, from anywhere.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col sm:flex-row gap-4 mt-4"
                    >
                        <a href='https://app.vendicarte.com/' className="bg-[#018A06] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-[16px] md:text-[18px] font-medium hover:opacity-90 transition">
                            Explore Platform
                        </a>

                        <a
                            href={`/contact-us`}
                            className="border-2 border-[#018A06] text-[#0F0F0F] px-6 md:px-8 py-3 md:py-4 rounded-lg text-[16px] md:text-[18px] font-medium hover:bg-gray-50 transition text-center"
                        >
                            Book a Demo
                        </a>
                    </motion.div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        variants={cardReveal}
                        whileHover={{
                            y: -8,
                        }}
                        className="border border-[#E2F0E2] rounded-2xl overflow-hidden  h-[250px] md:h-[335px]"
                    >
                        <Image
                            src={solution_4} // replace with your image
                            alt="Vendicarte platform"
                            style={{ width: "100%", height: "100%" }}
                            className="
            w-full
            h-[250px]
            md:h-[335px]
            object-cover
            transition-transform
            duration-700
            hover:scale-105
            "
                        />
                    </motion.div>
                </div>
            </div>
            <div className="max-w-[1248px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 gap-6">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white border border-[#E2F0E2] rounded-xl p-6 md:p-8 flex flex-col gap-4 hover:shadow-md transition"
                    >
                        {/* ICON BOX */}
                        <div className="w-[54px] h-[54px] flex items-center justify-center bg-[#F1F9F1] rounded-xl">
                            {item.Icon && <item.Icon color="#018A06" size={24} />}
                        </div>

                        {/* TITLE */}
                        <h3 className="text-[18px] md:text-[20px] font-bold text-[#0F0F0F]">
                            {item.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <motion.p
                            variants={fadeUp}
                            className="text-[#5F5F5F] text-[14px] md:text-[16px] leading-relaxed"
                        >
                            {item.desc}
                        </motion.p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default VendicarteSolution