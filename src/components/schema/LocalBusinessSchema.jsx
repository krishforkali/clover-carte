export default function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",

        name: "Clover Carte",

        image: "https://clovercarte.com/logo.png",

        url: "https://clovercarte.com",

        telephone: "+91-8839153737",

        email: "contact@clovercarte.com",

        address: {
            "@type": "PostalAddress",
            streetAddress: "A-27 MIDC, Bhagi Mahari, Savner",
            addressLocality: "Nagpur",
            addressRegion: "Maharashtra",
            postalCode: "441107",
            addressCountry: "IN",
        },

        areaServed: "India",
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