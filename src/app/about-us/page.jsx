import OrganizationSchema from "@/components/schema/OrganizationSchema";
import About from "./About";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import AboutPageSchema from "@/components/schema/AboutPageSchema";

export const metadata = {
    title: "About Clover Carte | Smart Vending Machine Manufacturer in India",
    description: "Discover Clover Carte India's first Made in India smart vending machine manufacturer. We engineer end-to-end automated retail & OEM/ODM solutions.",

    alternates: {
        canonical: "https://clovercarte.com/about-us",
    },
    metadataBase: new URL("https://clovercarte.com/about-us"),
    keywords: [
        "Smart Vending Manufacturer",
        " Automated Retail Solutions",
        " Made in India",
        " End-to-End Engineering",
        " IoT-Enabled Vending",
        " OEM/ODM Manufacturing",
        " Retail Automation",
        " Cloud Orchestration",
        " Custom Vending Machines",
        " Intelligent Dispensing Systems",
        " Custom Machine Manufacturing",
        " Automation Engineering",
        " Clover Carte in India"
    ],
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
            "About Clover Carte | Smart Vending Machine Manufacturer in India",

        description:
            "Discover Clover Carte's vision, manufacturing expertise and innovative smart vending machine solutions.",

        url: "https://clovercarte.com/about-us",

        siteName: "Clover Carte",

        locale: "en_IN",

        images: [
            {
                url: "https://clovercarte.com/og/about.webp",
                width: 1200,
                height: 630,
                alt: "About Clover Carte",
            },
        ],

        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title:
            "About Clover Carte | Smart Vending Machine Manufacturer",

        description:
            "Learn about Clover Carte's journey, manufacturing capabilities and intelligent vending solutions.",

        images: [
            "https://clovercarte.com/og/about.webp",
        ],
    },
};

export default function AboutPage() {
    return (
        <>

            <BreadcrumbSchema />
            <OrganizationSchema />
            <AboutPageSchema />
            <About />
        </>
    );
}