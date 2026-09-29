import FAQAccordion from "@/components/common/FAQAccordion";
import CompanyCapablties from "@/components/home/CompanyCapablties";
import ManufacturingProc from "@/components/home/ManufacturingProc";
import TechnlogyAFeature from "@/components/home/TechnlogyAFeature";
import VendicarteSolution from "@/components/home/VendicarteSolution";
import OrganizationSchema from "@/components/schema/OrganizationSchema";
import SiteNavigationSchema from "@/components/schema/SiteNavigationSchema";
import WebsiteSchema from "@/components/schema/WebsiteSchema";
import CompanyOverview from "@/components/section/CompanyOverview";
import Hero from "@/components/section/Hero";
import IndustriesServed from "@/components/section/Industries";
import MachineSlider from "@/components/section/MachineSlider";
import M_home from "./M_home";

export const metadata = {
    title: "Automatic Vending Machine Manufacturer in India | Clover Carte",
    description:
        "Clover Carte is a trusted automatic vending machine manufacturer in India, offering smart, customized vending solutions for businesses and industries.",
    metadataBase: new URL("https://clovercarte.com"),
    keywords: [
        "Automatic Vending Machine Manufacturer in India",
        "Vending Machine Manufacturer in India",
        "Vending Machine Company in India",
        "Automatic Vending Machine in India",
        "Customized Vending Machine Manufacturer in India",
        "OEM Vending Machine Manufacturer in India",
        "ODM Vending Machine Manufacturer in India",
        "Automatic Vending Solutions in India",
        "Snack and Beverage Vending Machine",
        "Best Vending Machine Manufacturer in India"
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

    alternates: {
        canonical: "https://clovercarte.com",
    },
    openGraph: {
        title:
            "Automatic Vending Machine Manufacturer in India | Clover Carte",
        description:
            "Clover Carte is a trusted automatic vending machine manufacturer in India, offering smart, customized vending solutions for businesses and industries.",
        url: "https://clovercarte.com",
        siteName: "Clover Carte",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://clovercarte.com/og/home.webp",
                width: 1200,
                height: 630,
                alt: "Clover Carte Automactic Vending Machines",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Automatic Vending Machine Manufacturer in India | Clover Carte",
        description:
            "Clover Carte is a trusted automatic vending machine manufacturer in India, offering smart, customized vending solutions for businesses and industries.",
        images: ["https://clovercarte.com/og/home.webp"],
    },
};


const faqs = [
    {
        question: "What types of vending machines does Clover Carte offer?",
        answer: "We manufacture smart coffee, snack, beverage, and fully customized vending machines tailored to different business needs."
    },
    {
        question: "Can I customize a vending machine for my brand?",
        answer: "Yes, we offer branding, tray configuration, and design customization to match your business and space requirements."
    },
    {
        question: "Can I monitor my vending machines remotely?",
        answer: "Yes. Our VendiCarte platform provides real-time monitoring, inventory tracking, sales reports, alerts, and machine health updates."
    },
    {
        question: "Are your vending machines manufactured in India?",
        answer: "Yes. Clover Carte proudly designs and manufactures its vending machines in India with complete in-house engineering and customizati."
    },
    {
        question: "Do your machines support cashless payments?",
        answer: "Yes, all Clover Carte machines support UPI, card, and wallet payments along with cash options."
    },
    {
        question: "How do I get started?",
        answer: "Simply contact our team with your product requirements, and we'll recommend the ideal vending solution for your business."
    },
]


const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

export default function Home() {

    return (<>
        <WebsiteSchema />
        <OrganizationSchema />
        <SiteNavigationSchema />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
        <div className="hidden lg:block">
            <Hero />
            <MachineSlider />
            <CompanyCapablties />
            <ManufacturingProc />
            <TechnlogyAFeature />
            <VendicarteSolution />
            <IndustriesServed />
            <CompanyOverview />

        </div>
        <div className="block lg:hidden">
            <M_home />
        </div>
        <FAQAccordion className="px-4 mt-4 lg:mt-0" faqs={faqs} />
    </>)
}