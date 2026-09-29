export default function SolutionsSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",

        name: "Business Solutions",

        description:
            "Smart vending machine solutions for offices, hospitals, educational institutions, retail stores and commercial environments.",

        url: "https://clovercarte.com/solutions",

        publisher: {
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