export default function BreadcrumbSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://clovercarte.com",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "About Us",
                item: "https://clovercarte.com/about-us",
            },
        ],
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