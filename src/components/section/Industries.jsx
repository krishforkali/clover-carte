import { industries } from "@/utils/helper";
import Image from "next/image";

export default function IndustriesServed() {
    return (
        <section className="w-full py-10 px-3 lg:px-24">
            <div className="max-w-[1248px] mx-auto">
                {/* Heading */}
                <h2 className="text-center text-[40px] leading-[44px] font-extrabold uppercase text-[#0F0F0F] mb-8">
                    Industries Served
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl h-[177px] cursor-pointer"
                        >
                            {/* Image */}
                            <Image
                                style={{ width: "100%", height: "100%" }}
                                src={industry.image}
                                alt={industry.title}
                                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

                            {/* Text */}
                            <div className="absolute inset-0 flex items-center px-6">
                                <h3 className="max-w-[160px] text-white text-[16px] leading-6 font-bold uppercase">
                                    {industry.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}