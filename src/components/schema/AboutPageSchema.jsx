export default function AboutPageSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Clover Carte",
        description:
            "Learn about Clover Carte, our vision, manufacturing capabilities and intelligent vending machine solutions.",

        url: "https://clovercarte.com/about-us",

        mainEntity: {
            "@type": "Organization",
            name: "Clover Carte",
            url: "https://clovercarte.com",
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