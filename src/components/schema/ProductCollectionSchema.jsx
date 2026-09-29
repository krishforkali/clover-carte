export default function ProductCollectionSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",

        name: "Clover Carte Products",

        description:
            "Explore Clover Carte's smart vending machine products including Caftina, VendShop and customized vending solutions.",

        url: "https://clovercarte.com/products",

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