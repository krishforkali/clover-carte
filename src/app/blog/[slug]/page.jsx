import BlogDetails from "@/app/blog/[slug]/BlogDetails";
import BlogBreadcrumbSchema from "@/components/schema/BlogBreadcrumbSchema";
import BlogPostingSchema from "@/components/schema/BlogPostingSchema";
import BlogDetailsClient from "./BlogDetailsClient";

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}blog/public/${slug}`,
        {
            next: {
                cache: "no-store",
            },
        }
    );

    if (!res.ok) {
        return {
            title: "Blog Not Found | Clover Carte",
        };
    }

    const data = await res.json();
    const blog = data.blog;

    return {
        title: `${blog?.seo?.metaTitle}`,

        description:
            blog?.seo?.metaDescription,

        keywords: blog?.seo?.keywords,

        alternates: {
            canonical: blog?.seo?.canonicalUrl,
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
                "max-video-preview": -1,
            },
        },

        openGraph: {
            title: blog?.seo?.ogTitle,

            description:
                blog.blog?.seo?.ogDiscription,

            url: `https://clovercarte.com/blog/${blog.slug}`,

            siteName: "Clover Carte",

            locale: "en_IN",

            images: [
                {
                    url: blog?.seo?.ogImage,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],

            type: "article",
        },

        twitter: {
            card: "summary_large_image",
            title: blog.title,

            description:
                blog.shortDescription ||
                blog.content?.replace(/<[^>]*>/g, "").slice(0, 160),

            images: [blog.image?.url],
        },
    };
}

export async function generateStaticParams() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}blog/get`,
        {
            next:  {
            cache: "no-store",
        },
        }
    );

    if (!res.ok) {
        return [];
    }

    const data = await res.json();


    return data.blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogsDetailsPage({ params }) {
    const { slug } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}blog/public/${slug}`, {
            next:  {
            cache: "no-store",
        },
        }

    );

    if (!res.ok) {
        return <div className="py-20 text-center">Blog not found.</div>;
    }

    const data = await res.json();

    return (
        <>
            <BlogPostingSchema
                blog={data.blog}
            />

            <BlogBreadcrumbSchema
                blog={data.blog}
            />
            {/* <BlogDetails blog={data.blog} /> */}
            <BlogDetailsClient slug={slug} />
        </>
    );
}