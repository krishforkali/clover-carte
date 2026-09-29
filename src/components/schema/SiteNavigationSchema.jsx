export default function SiteNavigationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: [
            {
                "@type": "SiteNavigationElement",
                name: "About",
                url: "https://clovercarte.com/about-us/",
            },
            {
                "@type": "SiteNavigationElement",
                name: "Products",
                url: "https://clovercarte.com/products/",
            },
            {
                "@type": "SiteNavigationElement",
                name: "Solutions",
                url: "https://clovercarte.com/solutions/",
            },
            {
                "@type": "SiteNavigationElement",
                name: "Contact",
                url: "https://clovercarte.com/contact-us/",
            },
            {
                "@type": "SiteNavigationElement",
                name: "Blog",
                url: "https://clovercarte.com/blog/",
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