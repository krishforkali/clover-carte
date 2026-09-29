"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import CompanyOverview from "./CompanyOverview";

const testimonials = [
    {
        review:
            "Clover Carte is a smart vending manufacturing company focused on designing intelligent automated retail systems for modern businesses. With expertise in engineering, manufacturing, cloud technology, and connected retail ecosystems, we deliver scalable vending solutions across industries.",
        name: "XYZ",
        designation: "CEO of Clover Carte",
    },
    {
        review:
            "Their vending solutions helped us automate our retail operations. The quality, support, and innovation exceeded our expectations.",
        name: "John Smith",
        designation: "Operations Head",
    },
    {
        review:
            "The machines are reliable, easy to manage remotely, and have significantly improved our customer experience.",
        name: "Sarah Wilson",
        designation: "Retail Director",
    },
];

export default function ClientTrust() {
    return (
        <div >
            <section className="w-full px-3 lg:px-24 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">

                    {/* Heading */}
                    <h2 className="text-center uppercase font-extrabold text-[28px] md:text-[40px] leading-tight text-[#0F0F0F]">
                        Client Trust
                    </h2>

                    {/* Slider */}
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}

                        className="w-full"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-[#F9FBF9] rounded-[20px] px-6 md:px-16 py-12 min-h-[290px] flex flex-col items-center justify-center text-center">

                                    {/* Review Text */}
                                    <p className="max-w-4xl text-[#5F5F5F] italic text-base md:text-[20px] leading-[32px] md:leading-[36px]">
                                        {item.review}
                                    </p>

                                    {/* Author */}
                                    <div className="mt-10">
                                        <h4 className="font-bold text-[#0F0F0F] text-[20px]">
                                            - {item.name}
                                        </h4>

                                        <p className="text-[#5F5F5F] text-sm mt-1">
                                            {item.designation}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </section>
        </div>
    );
}