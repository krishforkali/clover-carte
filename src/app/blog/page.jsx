import BlogsBreadcrumbSchema from "@/components/schema/BlogsBreadcrumbSchema";
import Blogs from "./Blogs";
import BlogCollectionSchema from "@/components/schema/BlogCollectionSchema";

export const metadata = {
    title:
        "Vending Machine Blog | Smart Vending Insights | Clover Carte",

    description:
        "Explore Clover Carte’s vending machine blog for smart vending trends, technology, OEM/ODM insights, industry solutions, and automated retail updates.",

    keywords: [
        "Vending Machine Blog",
        "Smart Vending Machine",
        "Vending Machine Technology",
        "Vending Machine Industry",
        "Automated Retail",
        "Smart Vending Solutions",
        "Latest vending machine technology",
        "Smart vending machine trends",
        "Vending machine industry insights",
        "OEM/ODM vending machine insights",
        "Automated retail solutions",
        "Clover Carte Blog",
    ],

    alternates: {
        canonical: "https://clovercarte.com/blog",
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
        title:
            "Blog | Smart Vending Machines & Retail Automation | Clover Carte",

        description:
            "Explore articles and insights on smart vending machines, automated retail solutions and industry innovations.",

        url: "https://clovercarte.com/blog",

        siteName: "Clover Carte",
        locale: "en_IN",

        images: [
            {
                url: "https://clovercarte.com/og/blogs.webp",
                width: 1200,
                height: 630,
                alt: "Clover Carte Blog",
            },
        ],

        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Blog | Smart Vending Machines & Retail Automation | Clover Carte",

        description:
            "Explore articles and insights on smart vending machines and retail automation.",

        images: [
            "https://clovercarte.com/og/blogs.webp",
        ],
    },
};

export default function BlogsPage() {
    return (
        <>
            <BlogsBreadcrumbSchema />
            <BlogCollectionSchema />
            <Blogs />
        </>
    );
}