// components/schema/ProductSchema.jsx

export default function ProductSchema({
    product,
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",

        name: product.name,
        description: product.description,
        image: [
            `https://clovercarte.com${product.image}`,
        ],

        brand: {
            "@type": "Brand",
            name: "Clover Carte",
        },

        manufacturer: {
            "@type": "Organization",
            name: "Clover Carte",
            url: "https://clovercarte.com",
        },

        url: `https://clovercarte.com/products/${product.slug}`,
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