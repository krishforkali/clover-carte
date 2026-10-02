"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import heroImage from "../../assets/images/image 25.jpeg";
import heroImage2 from "../../assets/images/hero_2.webp";

const heroSlides = [
    {
        image: heroImage,
        alt: "Smart Vending Machine",
    },
    {
        image: heroImage2,
        alt: "Smart Vending Machine",
    },
];

export default function MobileHero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const slide = heroSlides[currentSlide];

    return (
        <div className="flex w-full flex-col items-center justify-center">
            {/* =================================
                MACHINE IMAGE SLIDER
            ================================= */}
            <div className="relative h-[270px] w-full overflow-hidden">
                <div
                    key={currentSlide}
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        animate-[heroFade_0.6s_ease-in-out]
                    "
                >
                    <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        priority={currentSlide === 0}
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 361px"
                    />
                </div>
            </div>

            {/* =================================
                STATIC CONTENT
            ================================= */}
            <div className="mt-[18px] flex min-h-[318px] w-full flex-col items-start">
                <div className="flex w-full flex-col items-start gap-4">

                    {/* Text Content */}
                    <div className="flex w-full flex-col items-start gap-3">

                        {/* Label */}
                        <div className="flex w-full flex-col items-start gap-2">
                            <span
                                className="
                                    flex
                                    h-[20px]
                                    w-full
                                    items-center
                                    text-[12px]
                                    font-semibold
                                    uppercase
                                    leading-[20px]
                                    tracking-[0.6px]
                                    text-[#018A06]
                                "
                            >
                                Smart
                            </span>

                            {/* Title */}
                            <h1
                                className="
                                    flex
                                    min-h-[60px]
                                    w-full
                                    items-center
                                    
                                    text-[24px]
                                    font-bold
                                    leading-[30px]
                                    text-[#0F0F0F]
                                "
                            >
                                Smart Vending Machines Made in India
                            </h1>
                        </div>

                        {/* Description */}
                        <p
                            className="
                                flex
                                min-h-[60px]
                                w-full
                                items-center
                                
                                text-[16px]
                                font-normal
                                leading-[20px]
                                text-[#5F5F5F]
                            "
                        >
                            Custom-designed vending machines with IoT
                            connectivity, cashless payments, and OEM/ODM
                            manufacturing for every business.
                        </p>
                    </div>

                    {/* =================================
                        STATIC BUTTONS
                    ================================= */}
                    <div className="flex w-full flex-col items-start gap-3">

                        <Link
                            href="/contact-us"
                            className="
                                flex
                                h-[52px]
                                w-full
                                items-center
                                justify-center
                                rounded-[16px]
                                bg-[#018A06]
                                px-8
                                py-4
                                
                                text-[16px]
                                font-semibold
                                leading-[20px]
                                text-white
                            "
                        >
                            Request a Demo
                        </Link>

                        <Link
                            href="/products"
                            className="
                                box-border
                                flex
                                h-[54px]
                                w-full
                                items-center
                                justify-center
                                rounded-[16px]
                                border
                                border-[#C1E2C2]
                                bg-white
                                px-8
                                py-4
                                
                                text-[16px]
                                font-semibold
                                leading-[20px]
                                text-[#018A06]
                            "
                        >
                            Explore Machines
                        </Link>

                    </div>
                </div>
            </div>

            {/* Animation */}
            <style>{`
                @keyframes heroFade {
                    from {
                        opacity: 0;
                        transform: translateX(10px);
                    }

                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </div>
    );
}