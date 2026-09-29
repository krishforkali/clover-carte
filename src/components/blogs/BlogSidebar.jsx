"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FiSearch,
    FiDownload,
    FiArrowRight,
} from "react-icons/fi";

export default function BlogSidebar({ theme }) {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}blog/get`,
                    {
                        cache: "no-store",
                    }
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch blogs");
                }

                const data = await res.json();

                setBlogs(data?.blogs || []);
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
                setBlogs([]);
            } finally {
                setLoading(false);
            }
        }

        fetchBlogs();
    }, []);

    const categories = useMemo(() => {
        return [
            ...new Set(
                blogs
                    .map((blog) => blog.category)
                    .filter(Boolean)
            ),
        ];
    }, [blogs]);

    const blogTheme = theme || {
        primary: "#018A06",
        secondary: "#E8F5E9",
        accent: "#B7DDB9",
    };

    return (
        <aside className="flex w-full flex-col gap-7 sm:gap-9">
            {/* =========================
                SEARCH + CATEGORIES
            ========================== */}
            <div className="flex w-full flex-col gap-3">
                {/* Search */}
                <form className="flex h-[58px] w-full items-center rounded-xl border border-[#FCCDDB] bg-white p-3">
                    <div className="flex h-8 w-full items-center gap-2">
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            aria-label="Search blogs"
                            className="h-[31px] min-w-0 flex-1 bg-transparent px-2 py-1.5 text-sm font-normal leading-5 text-[#0F0F0F] outline-none placeholder:text-[#5F5F5F] sm:text-base"
                        />

                        <button
                            type="submit"
                            aria-label="Search"
                            style={{
                                backgroundColor:
                                    blogTheme.primary,
                            }}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                        >
                            <FiSearch
                                size={16}
                                strokeWidth={1.5}
                                className="text-white"
                            />
                        </button>
                    </div>
                </form>

                {/* Categories */}
                {categories.length > 0 && (
                    <div
                        style={{
                            borderColor:
                                blogTheme.secondary,
                        }}
                        className="flex w-full flex-col gap-3 rounded-xl border bg-white p-4"
                    >
                        <h3 className="w-full text-base font-bold leading-5 text-[#0F0F0F]">
                            Categories
                        </h3>

                        <div className="flex w-full flex-col gap-1">
                            {categories.map(
                                (category, index) => (
                                    <Link
                                        key={category}
                                        href="#"
                                        style={{
                                            color:
                                                blogTheme.primary,
                                        }}
                                        className={`flex min-h-9 w-full items-center rounded-lg px-3 py-1 text-sm capitalize leading-5 transition hover:bg-gray-50 sm:text-base ${
                                            index === 0
                                                ? "font-bold"
                                                : "font-normal"
                                        }`}
                                    >
                                        {category}
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* =========================
                RECENT POSTS + CTA + BROCHURE
            ========================== */}
            <div className="flex w-full flex-col gap-7 sm:gap-9">
                {/* =========================
                    RECENT POSTS
                ========================== */}
                {!loading && blogs.length > 0 && (
                    <div className="flex w-full flex-col gap-5">
                        <h2 className="w-full text-xl font-bold leading-6 text-[#0F0F0F]">
                            Recent Posts
                        </h2>

                        <div className="flex max-h-[300px] w-full flex-col gap-4 overflow-y-auto">
                            {blogs.map((post) => {
                                const imageUrl =
                                    post.image?.url ||
                                    post.featuredImage?.url;

                                return (
                                    <Link
                                        key={
                                            post._id ||
                                            post.slug ||
                                            post.title
                                        }
                                        href={`/blog/${post.slug}`}
                                        className="flex w-full min-w-0 items-center gap-3"
                                    >
                                        {/* Thumbnail */}
                                        {imageUrl && (
                                            <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded sm:h-[65px] sm:w-[65px]">
                                                <Image
                                                    src={imageUrl}
                                                    alt={
                                                        post.image
                                                            ?.alt ||
                                                        post.title ||
                                                        ""
                                                    }
                                                    fill
                                                    sizes="65px"
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className="flex min-w-0 flex-1 flex-col gap-1.5 sm:gap-2">
                                            <h3 className="line-clamp-2 w-full break-words text-sm font-bold leading-5 text-[#0F0F0F] sm:text-base">
                                                {post.title}
                                            </h3>

                                            {post.createdAt && (
                                                <p className="w-full text-[10px] font-normal leading-4 text-[#5F5F5F] sm:text-[11px]">
                                                    {new Date(
                                                        post.createdAt
                                                    ).toLocaleDateString(
                                                        "en-US",
                                                        {
                                                            month: "short",
                                                            day: "numeric",
                                                            year: "numeric",
                                                        }
                                                    )}
                                                </p>
                                            )}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* =========================
                    CTA
                ========================== */}
                <div
                    style={{
                        backgroundColor:
                            blogTheme.primary,
                    }}
                    className="flex min-h-[174px] w-full flex-col rounded-2xl p-4 sm:p-5"
                >
                    <div className="flex w-full flex-col gap-3">
                        <h3 className="w-full text-xl font-bold leading-7 text-white">
                            Need a Vending Solution for Your Business?
                        </h3>

                        <p className="w-full text-xs font-normal leading-5 text-white/90">
                            We provide smart, reliable &
                            customized vending solutions for
                            every need.
                        </p>

                        <Link
                            href="/contact-us"
                            className="flex h-9 w-fit items-center gap-1.5 rounded-lg bg-white px-4 py-2 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                        >
                            <span
                                style={{
                                    color:
                                        blogTheme.primary,
                                }}
                                className="text-sm font-semibold leading-4 sm:text-base"
                            >
                                Contact Us
                            </span>

                            <FiArrowRight
                                size={12}
                                strokeWidth={2}
                                style={{
                                    color:
                                        blogTheme.primary,
                                }}
                            />
                        </Link>
                    </div>
                </div>

                {/* =========================
                    DOWNLOAD BROCHURE
                ========================== */}
                <div
                    style={{
                        borderColor:
                            blogTheme.secondary,
                    }}
                    className="flex min-h-[112px] w-full flex-col rounded-2xl border bg-[#FFEFF4] p-4"
                >
                    <div className="flex w-full items-start gap-3">
                        {/* Icon */}
                        <div
                            style={{
                                borderColor:
                                    blogTheme.secondary,
                            }}
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-white"
                        >
                            <FiDownload
                                size={20}
                                strokeWidth={1.7}
                                style={{
                                    color:
                                        blogTheme.primary,
                                }}
                            />
                        </div>

                        {/* Content */}
                        <div className="min-w-0 flex-1">
                            <h3 className="text-sm font-bold leading-5 text-[#0F0F0F]">
                                Download Brochure
                            </h3>

                            <p className="mt-1 text-xs font-normal leading-5 text-[#5F5F5F]">
                                Get our product brochure
                                and know more about our
                                vending solutions.
                            </p>

                            <Link
                                download
                                href="/Clover Carte Catalogue.pdf"
                                style={{
                                    color:
                                        blogTheme.primary,
                                }}
                                className="mt-1 flex w-fit items-center gap-1 text-xs font-bold leading-4"
                            >
                                <span>
                                    Download Now
                                </span>
                                <span>↓</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}