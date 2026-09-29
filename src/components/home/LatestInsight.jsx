import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getBlogs } from "@/api/blog";

function BlogCard({ blog }) {
    return (
        <article
            className="
                flex
                w-full
                min-w-0
                flex-none
                items-center
                justify-between
                gap-4
            "
        >
            {/* Image */}
            <Link
                href={`/blog/${blog.slug}`}
                className="
                    relative
                    h-[96px]
                    w-[96px]
                    min-w-[96px]
                    flex-none
                    overflow-hidden
                    rounded-[8px]
                    bg-[#E5E2E1]
                "
            >
                <Image
                    src={blog?.image?.url||blog?.featuredImage?.url}
                    alt={blog.title}
                    fill
                    sizes="96px"
                    className="object-cover"
                />
            </Link>

            {/* Content */}
            <div
                className="
                    flex
                    min-w-0
                    flex-1
                    flex-col
                    items-start
                    gap-3
                "
            >
                <div className="flex w-full min-w-0 flex-col gap-1">
                    {/* Category */}
                    <span
                        className="
                            w-full
                            truncate
                            text-[12px]
                            font-medium
                            uppercase
                            leading-[15px]
                            text-[#018A06]
                        "
                    >
                        {blog.category}
                    </span>

                    {/* Title */}
                    <Link
                         href={`/blog/${blog.slug}`}
                        className="w-full min-w-0"
                    >
                        <h3
                            className="
                                line-clamp-2
                                w-full
                                text-[16px]
                                font-semibold
                                leading-[20px]
                                text-[#0F0F0F]
                            "
                        >
                            {blog.title}
                        </h3>
                    </Link>
                </div>

                {/* Read More */}
                <Link
                    href={`/blog/${blog.slug}`}
                    className="
                        group
                        flex
                        items-center
                        gap-1
                        whitespace-nowrap
                        text-[12px]
                        font-normal
                        leading-[15px]
                        text-[#5F5F5F]
                    "
                >
                    <span>Read More</span>

                    <ArrowRight
                        size={14}
                        strokeWidth={1.5}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                </Link>
            </div>
        </article>
    );
}

export default async function LatestInsights() {
    let blogs = [];

    try {
        const res = await getBlogs();

        blogs = [...(res?.blogs || [])];
    } catch (error) {
        console.error("Failed to fetch blogs:", error);
    }

    return (
        <section
            id="latest-insights"
            className="w-full overflow-hidden px-4 md:px-8 lg:px-12 "
        >
            <div className="mx-auto w-full max-w-[1248px]">
                {/* Heading */}
                <h2
                    className="
                        mb-4
                        text-center
                        text-[24px]
                        font-bold
                        leading-[30px]
                        text-[#0F0F0F]
                        lg:mb-8
                        lg:text-[36px]
                        lg:leading-[45px]
                    "
                >
                    Latest Insights
                </h2>

                {/* VERTICAL SCROLL CONTAINER */}
                <div
                    className="
                        flex
                        h-[420px]
                        w-full
                        flex-col
                        gap-3

                        overflow-x-hidden
                        overflow-y-auto

                        pr-2

                        lg:h-[520px]
                        lg:gap-6
                    "
                >
                    {blogs.map((blog, index) => (
                        <BlogCard
                            key={`${blog.slug}-${index}`}
                            blog={blog}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}