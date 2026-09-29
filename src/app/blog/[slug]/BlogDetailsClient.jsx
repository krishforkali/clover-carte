"use client";

import { useEffect, useState } from "react";

import BlogDetails from "./BlogDetails";

export default function BlogDetailsClient({ slug }) {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchBlog() {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}blog/public/${slug}`,
                    {
                        cache: "no-store",
                    }
                );

                if (!res.ok) {
                    setError(true);
                    return;
                }

                const data = await res.json();

                setBlog(data.blog);
            } catch (error) {
                console.error("Failed to fetch blog:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchBlog();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-[400px] flex items-center justify-center">
                <p>Loading blog...</p>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="py-20 text-center">
                Blog not found.
            </div>
        );
    }

    return <BlogDetails blog={blog} />;
}