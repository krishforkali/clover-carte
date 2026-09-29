"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogCard = ({
    image,
    category,
    date,
    title,
    description,
    _id,
    slug
}) => {
    const router = useRouter();
    return (
        <article
            className="bg-[#F1F9F1] border border-[#E2F0E2] rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300">

            {/* Image */}
            <div className=" relative h-[220px] md:h-[284px] overflow-hidden">
                <Image fill
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 flex flex-col gap-4">

                {/* Category + Date */}
                <div className="flex items-center gap-3 flex-wrap">
                    <div className="bg-white border border-[#E2F0E2] rounded px-2 py-1">
                        <span className="text-[12px] font-bold uppercase tracking-wider text-[#018A06]">
                            {category}
                        </span>
                    </div>

                    <span className="text-[#5F5F5F] text-sm md:text-[14px]">
                        {date}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-[22px] md:text-[25px] font-semibold leading-tight text-[#0F0F0F]">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-[#5F5F5F] text-[14px] md:text-[16px] leading-relaxed">
                    {description}
                </p>

                <div className="pt-2">
                    <a href={`/blog/${slug}`}
                        className="text-green font-semibold text-[16px] cursor-pointer "
                    >
                        Read More →
                    </a>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;