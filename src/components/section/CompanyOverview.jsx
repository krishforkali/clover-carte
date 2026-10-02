import React from "react";
import comp_over from "../../assets/images/com_over.webp"
import Image from "next/image";

export default function CompanyOverview() {
    return (
        <section className="w-full mb-12 bg-[#F8F9FA] py-5 lg:py-20">
            <div className="max-w-[1236px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[58px]">

                    {/* Left Image */}
                    <div className="w-full lg:w-[567px] h-[350px] lg:h-[489px] overflow-hidden rounded-[4px] shadow-md">
                        <Image
                            src={comp_over}
                            alt="Company Overview"
                            className="object-cover"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col justify-center items-start gap-12 max-w-[611px]">

                        <div className="flex flex-col gap-6">
                            <h2 className="font-extrabold text-[32px] lg:text-[48px] leading-[44px] uppercase tracking-[0.9px] text-[#0F0F0F]">
                                Company Overview
                            </h2>

                            <div className="flex flex-col gap-[10px]">
                                <p className="text-[#5F5F5F] text-[18px] lg:text-[20px] leading-[32px] text-justify">
                                    With parts sourced from all over the globe
                                    and assembled using strict quality control
                                    standards, our vending solutions are built
                                    to perform reliably in diverse business
                                    environments.
                                </p>

                                <p className="text-[#5F5F5F] text-[18px] lg:text-[20px] leading-[32px] text-justify">
                                    Our workforce has decades of experience
                                    manufacturing intelligent retail systems.
                                    We combine engineering excellence,
                                    innovative software, and customer-focused
                                    design to create future-ready vending
                                    experiences.
                                </p>
                            </div>
                        </div>

                        {/* Button */}
                        <a href="/about-us" className="bg-green hover:bg-[#017305] text-white uppercase font-bold text-[18px] lg:text-[20px] tracking-[0.4px] rounded-md px-8 py-3 transition-all duration-300">
                            Learn More
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
}