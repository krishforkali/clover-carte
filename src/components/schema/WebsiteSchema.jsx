export default function WebsiteSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Clover Carte",
        alternateName: "Clover Carte Vending Solutions",
        url: "https://clovercarte.com",
        inLanguage: "en-IN",
        publisher: {
            "@type": "Organization",
            name: "Clover Carte",
            url: "https://clovercarte.com",
            logo: {
                "@type": "ImageObject",
                url: "https://clovercarte.com/logo.png",
            },
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