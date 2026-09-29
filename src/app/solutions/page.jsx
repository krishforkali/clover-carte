import SolutionsSchema from "@/components/schema/SolutionsSchema";
import Solutions from "./Solutions";
import SolutionsBreadcrumbSchema from "@/components/schema/SolutionsBreadcrumbSchema";
import SolutionsFAQSchema from "@/components/schema/SolutionsFAQSchema";
import M_Solutions from "./M_Solutions";
import CTA_Section from "@/components/common/CTA_Section";

export const metadata = {
    title:
        "Smart Vending Solutions for Every Industry | Clover Carte",

    description:
        "Transform retail with IoT-enabled smart vending solutions. Clover Carte engineers custom automated dispensing machines for offices, healthcare, FMCG & plants.",

    keywords: [
"Industry Smart Vending Solutions", 
"Corporate Vending Machine Solutions", 
"Automated Retail Vending Systems", 
"Healthcare Smart Vending Machines", 
"Educational Campus Vending Kiosks", 
"Cashless Dispensing Kiosks", 
"Commercial IoT Vending Systems", 
"Custom OEM Vending for Brands", 
"Touchscreen Smart Kiosk India",
"Vending Machine Solutions India",
"Automated retail solutions provider India",
"Clover Carte"
    ],

    alternates: {
        canonical: "https://clovercarte.com/solutions",
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
            "Smart Vending Solutions for Every Industry | Clover Carte",

        description:
            "Transform retail with IoT-enabled smart vending solutions. Clover Carte engineers custom automated dispensing machines for offices, healthcare, FMCG & plants.",

        url: "https://clovercarte.com/solutions",

        siteName: "Clover Carte",

        locale: "en_IN",

        images: [
            {
                url: "https://clovercarte.com/og/solutions.webp",
                width: 1200,
                height: 630,
                alt: "Clover Carte Solutions",
            },
        ],

        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Smart Vending Solutions for Every Industry | Clover Carte",

        description:
            "Transform retail with IoT-enabled smart vending solutions. Clover Carte engineers custom automated dispensing machines for offices, healthcare, FMCG & plants.",

        images: [
            "https://clovercarte.com/og/solutions.webp",
        ],
    },
};

export default function SolutionsPage() {
    return (
        <>
            <SolutionsSchema />
            <SolutionsBreadcrumbSchema />
            <SolutionsFAQSchema />
            <div className="lg:block hidden">
            <Solutions />
            </div>
            <div className="block lg:hidden">
                <M_Solutions/>
            </div>
           <CTA_Section href={"/contact-us"} />
        </>
    );
}