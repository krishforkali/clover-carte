// HeroSlider.jsx
import { useEffect, useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Monitor,
    UtensilsCrossed,
    BarChart3,
    Building2,
    Plane,
    GraduationCap,
    Hospital,
    Coffee,
    Wifi,
    Grid2x2,
    ArrowRight,
} from "lucide-react";
import Image from "next/image";

const sliderData = [
    {
        id: 1,
        title: "CAFTINA",
        image:
            "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=900&auto=format&fit=crop",
        leftTop: {
            title: "SMART BEVERAGE DISPENSING",
            desc: "Automated touchless beverage dispensing system for hot and cold drink preparation.",
            icon: <Coffee size={20} />,
        },
        leftBottom: {
            title: "RECIPE CUSTOMIZATION",
            desc: "Supports custom beverage recipes with controlled ingredient management.",
            icon: <UtensilsCrossed size={20} />,
        },
        rightTop: {
            title: "REAL-TIME MONITORING",
            desc: "IoT and cloud-enabled telemetry track machine health, inventory, and sales performance.",
            icon: <BarChart3 size={20} />,
        },
        sectors: [
            {
                name: "OFFICES",
                match: "98%",
                icon: <Building2 size={16} />,
            },
            {
                name: "AIRPORTS",
                match: "94%",
                icon: <Plane size={16} />,
            },
            {
                name: "COLLEGES",
                match: "92%",
                icon: <GraduationCap size={16} />,
            },
            {
                name: "HOSPITALS",
                match: "95%",
                icon: <Hospital size={16} />,
            },
        ],
        tags: ["MULTI BEVERAGE", "HOT & COLD BEVERAGE", "IOT ENABLED"],
    },

    {
        id: 2,
        title: "SMART VEND",
        image:
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=900&auto=format&fit=crop",
        leftTop: {
            title: "TOUCHLESS EXPERIENCE",
            desc: "AI-powered touchless vending system with QR and RFID authentication.",
            icon: <Monitor size={20} />,
        },
        leftBottom: {
            title: "LIVE ANALYTICS",
            desc: "Monitor machine performance, sales, and refill schedules in real-time.",
            icon: <BarChart3 size={20} />,
        },
        rightTop: {
            title: "REMOTE MANAGEMENT",
            desc: "Manage vending inventory and machine status remotely using cloud dashboards.",
            icon: <Wifi size={20} />,
        },
        sectors: [
            {
                name: "METRO STATIONS",
                match: "96%",
                icon: <Building2 size={16} />,
            },
            {
                name: "MALLS",
                match: "93%",
                icon: <Grid2x2 size={16} />,
            },
            {
                name: "CORPORATES",
                match: "97%",
                icon: <Building2 size={16} />,
            },
            {
                name: "GYMS",
                match: "90%",
                icon: <Hospital size={16} />,
            },
        ],
        tags: ["AI ENABLED", "CLOUD BASED", "SMART DISPENSING"],
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % sliderData.length);
    };

    const prevSlide = () => {
        setCurrent(
            (prev) => (prev - 1 + sliderData.length) % sliderData.length
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const slide = sliderData[current];

    return (
        <section className="w-full bg-[#dfe6dc] rounded-[40px] overflow-hidden relative py-16 px-6 md:px-12">
            {/* Navigation */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition"
            >
                <ChevronLeft />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition"
            >
                <ChevronRight />
            </button>

            {/* Top Tags */}
            <div className="absolute top-12 right-12 hidden lg:flex flex-col gap-4">
                {slide.tags.map((tag, index) => (
                    <div
                        key={index}
                        className="border border-green-600 rounded-full px-6 py-2 text-sm tracking-wide text-green-700 bg-white/40 backdrop-blur-md"
                    >
                        {tag}
                    </div>
                ))}
            </div>

            {/* Title */}
            <div className="text-center mb-10">
                <h2 className="text-5xl md:text-6xl font-bold tracking-wide">
                    {slide.title}
                </h2>
            </div>

            {/* Main Layout */}
            <div className="grid lg:grid-cols-3 gap-10 items-center px-20">
                {/* Left Cards */}
                <div className="flex flex-col gap-10">
                    <InfoCard
                        title={slide.leftTop.title}
                        desc={slide.leftTop.desc}
                        icon={slide.leftTop.icon}
                    />

                    <InfoCard
                        title={slide.leftBottom.title}
                        desc={slide.leftBottom.desc}
                        icon={slide.leftBottom.icon}
                    />
                </div>

                {/* Center Image */}
                <div className="relative w-[320px] md:w-[400px] flex justify-center">
                    <Image fill
                        src={slide.image}
                        alt={slide.title}
                        className=" object-contain drop-shadow-2xl rounded-3xl"
                    />
                </div>

                {/* Right Cards */}
                <div className="flex flex-col gap-10">
                    <InfoCard
                        title={slide.rightTop.title}
                        desc={slide.rightTop.desc}
                        icon={slide.rightTop.icon}
                    />

                    <div className="bg-[#edf2ea] border border-green-600 rounded-3xl p-6 shadow-sm">
                        <h3 className="text-2xl font-semibold mb-6 tracking-wide">
                            TARGET SECTORS
                        </h3>

                        <div className="space-y-4">
                            {slide.sectors.map((sector, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between text-gray-800"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-green-600">{sector.icon}</span>
                                        <span>{sector.name}</span>
                                    </div>

                                    <span className="text-green-600 font-medium">
                                        MATCH_{sector.match}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center mt-14">
                <button className="bg-green-700 hover:bg-green-800 transition text-white px-10 py-4 rounded-2xl text-2xl font-medium flex items-center gap-3 shadow-lg">
                    View Details
                    <ArrowRight />
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
                {sliderData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 rounded-full transition-all duration-300 ${current === index
                            ? "bg-green-700 w-10"
                            : "bg-gray-400 w-3"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}

function InfoCard({ title, desc, icon }) {
    return (
        <div className="relative bg-[#edf2ea] border border-green-600 rounded-3xl p-6 shadow-sm">
            <div className="absolute left-0 top-6 h-16 w-1 bg-green-600 rounded-full"></div>

            <div className="flex items-center gap-3 mb-4">
                <span className="text-green-700">{icon}</span>

                <h3 className="text-xl font-semibold">{title}</h3>
            </div>

            <p className="text-gray-700 leading-7">{desc}</p>
        </div>
    );
}