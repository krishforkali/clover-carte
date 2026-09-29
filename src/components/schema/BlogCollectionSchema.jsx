export default function BlogCollectionSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Blog",

        name: "Clover Carte Blog",

        description:
            "Articles and insights on smart vending machines, automated retail solutions and vending industry innovations.",

        url: "https://clovercarte.com/blog",

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