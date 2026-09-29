import Image from "next/image";
import React from "react";

export default function FeaturedBlogCard({
    blog,
    reverse = false,
    priority
}) {

    return (
        <section className="w-full">
            <div
                className={`flex flex-col items-center gap-10 lg:gap-16 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                    }`}
            >
                {/* Image */}
                <div className="relative w-full h-[280px] md:h-[350px] lg:h-[400px] lg:w-[50%]">
                    <Image priority={priority}
                        fill
                        src={blog?.image?.url||blog?.featuredImage?.url}
                        alt={blog.title}
                        className="rounded object-content"
                    />
                </div>

                {/* Content */}
                <div className="flex w-full flex-col gap-6 lg:w-[54%]">
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="rounded border border-[#E2F0E2] bg-[#F1F9F1] px-3 py-1">
                            <span className="text-[12px] font-bold uppercase tracking-wider text-[#018A06]">
                                {blog.category}
                            </span>
                        </div>

                        <span className="text-[16px] text-[#5F5F5F]">
                            {new Date(blog.createdAt).toLocaleDateString()}
                        </span>
                    </div>

                    <h2 className="text-[28px] font-semibold leading-tight text-[#0F0F0F] md:text-[32px] lg:text-[34px]">
                        {blog.title}
                    </h2>
                    {blog?.subtitle&&<h2 className="text-[20px] font-semibold leading-tight text-green md:text-[24px] lg:text-[24px]">
                       {blog.subtitle}
                    </h2>}

                    <p className="text-[16px] leading-relaxed text-[#5F5F5F] md:text-[18px]">
                        {blog.shortDescription}
                    </p>

                    <div className="pt-2">
                        <a href={`/blog/${blog.slug}`}
                            className="cursor-pointer text-[16px] font-semibold text-green"
                        >
                            Read More →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}