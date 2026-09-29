export default function ManufacturingSchems() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ManufacturingBusiness",
        name: "Clover Carte",
        url: "https://clovercarte.com",
        logo: "https://clovercarte.com/logo.png",
        title:"Smart Vending Machine Manufacturer in India | Clover Carte",
        description:
            "Clover Carte is a smart vending machine manufacturer in India offering custom, OEM and ODM vending machines for beverages, snacks, retail and multiple industries.",
        address: {
            "@type": "PostalAddress",
            addressCountry: "IN"
        }
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