export default function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",

        name: "Clover Carte",
        url: "https://clovercarte.com",

        logo: "https://clovercarte.com/logo.png",
        image: "https://clovercarte.com/home.webp",

        description:
            "Clover Carte is a leading Smart Vending Machine Manufacturer in India, offering customized coffee, snack, and beverage vending solutions for businesses.",

        email: "contact@clovercarte.com",
        telephone: "+91-8839153737",

        address: {
            "@type": "PostalAddress",
            streetAddress: "A-27 MIDC, Bhagi Mahari, Savner",
            addressLocality: "Nagpur",
            addressRegion: "Maharashtra",
            postalCode: "441107",
            addressCountry: "IN",
        },

        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-8839153737",
            email: "contact@clovercarte.com",
            contactType: "customer support",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
        },

        foundingLocation: {
            "@type": "Place",
            name: "Nagpur, Maharashtra, India",
        },

        "sameAs": [
            "https://www.linkedin.com/company/clovercarte",
            "https://www.facebook.com/clovercarte",
            "https://www.instagram.com/clovercarte",
            "https://www.youtube.com/@clovercarte",
            "https://x.com/clovercarte"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}