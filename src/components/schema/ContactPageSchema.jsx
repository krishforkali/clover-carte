export default function ContactPageSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",

        name: "Contact Clover Carte",

        description:
            "Get in touch with Clover Carte for smart vending machine solutions and business enquiries.",

        url: "https://clovercarte.com/contact-us",

        mainEntity: {
            "@type": "Organization",
            name: "Clover Carte",
            url: "https://clovercarte.com",
            email: "contact@clovercarte.com",
            telephone: "+91-8839153737",
        },
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