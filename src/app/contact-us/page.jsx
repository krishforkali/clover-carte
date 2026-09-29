import ContactPageSchema from "@/components/schema/ContactPageSchema";
import Contact from "./Contact";
import ContactBreadcrumbSchema from "@/components/schema/ContactBreadcrumbSchema";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import NewContactPage from "./NewContact";
import M_Contact from "./M_Contact";
import CTA_Section from "@/components/common/CTA_Section";

export const metadata = {
    title:
        "Contact Us | Clover Carte - Smart Vending Solutions",

    description:
        "Have questions about smart vending machines? Connect with Clover Carte’s engineering team for custom build consultations, technical support, and sales.",

    keywords: [
        "Contact Clover Carte",
        "Vending Machine Company India",
        "Custom vending machine supplier in India",
        "Contact vending machine manufacturer India",
        "Clover Carte Email",
        "Clover Carte Contact Number",
        "Vending Machine Enquiry Number",
        "Vending Machine Manufacturer Phone Number",
        "Vending Machine Supplier Contact Number",
    ],

    alternates: {
        canonical: "https://clovercarte.com/contact-us",
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
            "Contact Us | Clover Carte - Smart Vending Solutions",

        description:
            "Have questions about smart vending machines? Connect with Clover Carte’s engineering team for custom build consultations, technical support, and sales.",

        url: "https://clovercarte.com/contact-us",

        siteName: "Clover Carte",

        locale: "en_IN",

        images: [
            {
                url: "https://clovercarte.com/og/contact.webp",
                width: 1200,
                height: 630,
                alt: "Contact Clover Carte",
            },
        ],

        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Contact Us | Clover Carte - Smart Vending Solutions",

        description:
            "Have questions about smart vending machines? Connect with Clover Carte’s engineering team for custom build consultations, technical support, and sales.",

        images: [
            "https://clovercarte.com/og/contact.webp",
        ],
    },
};

export default function ContactPage() {
    return (
        <>
            <ContactPageSchema />
            <ContactBreadcrumbSchema />
            <LocalBusinessSchema />
            {/* <NewContactPage/> */}
            <div className="hidden lg:block"><Contact /></div>
            <div className="block lg:hidden"><M_Contact/></div>
            <CTA_Section href="#book-demo" />
            
            
        </>
    );
}