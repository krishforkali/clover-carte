export default function PDetailsBread({
    product,
}) {
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
                name: "Products",
                item: "https://clovercarte.com/products",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: product.name,
                item: `https://clovercarte.com/products/${product.slug}`,
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