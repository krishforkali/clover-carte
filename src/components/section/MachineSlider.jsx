"use client"
import React, { useEffect, useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { sliderMachine } from "./data";





function MachineSlider() {
    const [current, setCurrent] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const machine = sliderMachine[currentSlide];

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === sliderMachine.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === sliderMachine.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? sliderMachine.length - 1 : prev - 1));
    };




    return (
        <div>
            <section
                className="px-4 lg:px-[2.5%]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* <div className="hidden lg:grid lg:grid-cols-3 items-center gap-16 px-10 pt-10"> */}
                <div
                    key={currentSlide}
                    className="animate-[fadeSlide_600ms_ease] hidden lg:block"
                >
                    <div className="bg-[#ECF6EC] rounded-[20px] lg:rounded-[28px] py-8 lg:py-5 px-4 sm:px-6 lg:px-16 relative overflow-hidden shadow-[0_10px_40px_rgba(27,155,30,0.08)]">
                        {/* Arrows */}
                        <button
                            onClick={prevSlide}
                            aria-label="Previous machine"
                            className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-[0px_2px_6px_rgba(5,150,10,0.1)] flex items-center justify-center z-20 hover:scale-110 transition"
                        >
                            <ChevronLeft
                                size={20}
                                strokeWidth={2}
                                className="text-[#5F5F5F]"
                            />
                        </button>

                        <button
                            onClick={nextSlide}
                            aria-label="Next machine"
                            className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-[0px_2px_6px_rgba(5,150,10,0.1)] flex items-center justify-center z-20 hover:scale-110 transition"
                        >
                            <ChevronRight
                                size={20}
                                strokeWidth={2}
                                className="text-[#5F5F5F]"
                            />
                        </button>

                        {/* Your Existing Content Starts Here */}
                        <div className="max-w-7xl mx-auto">
                            {/* TITLE */}
                            <div className="space-y-5">
                                <h2 className="text-center uppercase text-[32px] sm:text-[42px] md:text-[52px] lg:text-5xl text-[#0F0F0F] font-extrabold leading-none">
                                    {machine.title}
                                </h2>

                                {/* BADGES */}
                                <div className="flex flex-row justify-center gap-3 items-center ">
                                    {machine.badges.map((badge, index) => (
                                        <div
                                            key={index}
                                            className="border border-green rounded-xl px-4 lg:px-5 py-2 flex items-center gap-3 justify-center bg-white/60 "
                                        >
                                            <badge.icon />

                                            <span className="uppercase text-[11px] lg:text-[12px] tracking-[2px] text-[#0F0F0F]">
                                                {badge.title}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10 lg:gap-6 px-0 sm:px-4 lg:px-10 pt-4 lg:pt-2">
                                {/* LEFT SIDE */}
                                <div className="space-y-6">
                                    {machine.leftCards.map((card, index) => {
                                        const Icon = card.icon
                                        return (
                                            <div
                                                key={index}
                                                className="bg-white/60 border border-green rounded-3xl py-5 px-6 relative"
                                            >
                                                <div className="absolute left-0 top-5 h-16 w-1 bg-green shadow-[0_0_9px_#1B9B1E]" />

                                                {/* Connector - Desktop Only */}
                                                <div className="hidden lg:flex absolute -right-[83px] top-1/5 -translate-y-1/2 items-center">
                                                    <div className="w-[77px] h-[1px] bg-[rgba(27,155,30,0.5)]"></div>
                                                    <div className="w-[7px] h-[7px] bg-green rounded-full shadow-[0_0_5.6px_#1B9B1E]"></div>
                                                </div>

                                                <h3 className="text-[16px] text-[#0F0F0F] font-semibold leading-[18px] flex items-center gap-3">
                                                    <Icon
                                                        className="text-[#006B05]"
                                                        size={24}
                                                        aria-hidden="true"
                                                    />
                                                    {card.title}
                                                </h3>

                                                <p className="text-[#0F0F0F] text-[12px] leading-[20px] mt-4">
                                                    {card.desc}
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>

                                {/* CENTER IMAGE */}
                                <div className="flex flex-col items-center">
                                    <div className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[400px] h-[280px] sm:h-[360px] lg:h-[450px] flex items-center justify-center overflow-hidden mx-auto">
                                        <Image
                                            src={machine.image}
                                            alt={machine.title}
                                            width={machine.imageSize.w}
                                            height={machine.imageSize.h}
                                            className="object-contain w-auto h-auto max-w-full max-h-full"
                                        />
                                    </div>

                                    <a
                                        href={`/products/${machine.slug}`}
                                        className="mt-6 lg:mt-12 bg-green transition text-white text-base lg:text-lg font-semibold px-6 lg:px-8 py-3 rounded-2xl"
                                    >
                                        View Details →
                                    </a>
                                </div>

                                {/* RIGHT SIDE */}
                                <div className="space-y-6">
                                    {/* Monitoring */}
                                    <div className="bg-white/60  border border-green rounded-3xl py-2 px-6 relative">
                                        {/* Connector - Desktop Only */}
                                        <div className="hidden lg:flex absolute -left-[53px] top-1/3 -translate-y-1/2 items-center">
                                            <div className="w-[7px] h-[7px] bg-green rounded-full shadow-[0_0_5.6px_#1B9B1E]"></div>
                                            <div className="w-[45px] h-[1px] bg-[rgba(27,155,30,0.5)]"></div>
                                        </div>

                                        <div className="absolute right-0 top-6 h-16 w-1 bg-green shadow-[0_0_9px_#1B9B1E]" />

                                        <h3 className="text-[16px] font-semibold flex items-center gap-3">
                                            <machine.rightTop.icon className="text-green" size={24} />
                                            {machine.rightTop.title}
                                        </h3>

                                        <p className="text-[#0F0F0F] text-[12px] leading-8 mt-2">
                                            {machine.rightTop.desc}
                                        </p>
                                    </div>

                                    {/* TARGET SECTORS */}
                                    <div className="bg-white/60  border border-green rounded-3xl p-4  relative">
                                        {/* Connector - Desktop Only */}
                                        <div className="hidden lg:flex absolute -left-[53px] top-1/4 -translate-y-1/2 items-center">
                                            <div className="w-[7px] h-[7px] bg-green rounded-full shadow-[0_0_5.6px_#1B9B1E]"></div>
                                            <div className="w-[45px] h-[1px] bg-[rgba(27,155,30,0.5)]"></div>
                                        </div>

                                        <h3 className="text-[16px] font-semibold mb-4">
                                            TARGET SECTORS
                                        </h3>

                                        <div className="space-y-2">
                                            {machine.sectors.map((sector, index) => {
                                                const Icon = sector.icon
                                                return (
                                                    <div
                                                        key={index}
                                                        className="flex items-center justify-between gap-3 text-[11px] sm:text-xs"
                                                    >
                                                        <div className="flex items-center gap-3 uppercase">
                                                            <Icon
                                                                className="text-[#006B05]"
                                                                size={16}
                                                                aria-hidden="true"
                                                            />

                                                            <span>{sector.name}</span>
                                                        </div>

                                                        <span className="text-[#006B05] font-semibold whitespace-nowrap">
                                                            MATCH_{sector.match}
                                                        </span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}

            </section>
        </div>
    );
}

export default MachineSlider;
