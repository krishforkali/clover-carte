export default function BlogBreadcrumbSchema({
    blog,
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type":
            "BreadcrumbList",

        itemListElement: [
            {
                "@type":
                    "ListItem",
                position: 1,
                name: "Home",
                item:
                    "https://clovercarte.com",
            },
            {
                "@type":
                    "ListItem",
                position: 2,
                name: "Blog",
                item:
                    "https://clovercarte.com/blog",
            },
            {
                "@type":
                    "ListItem",
                position: 3,
                name:
                    blog.title,
                item:
                    `https://clovercarte.com/blog/${blog.slug}`,
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html:
                    JSON.stringify(schema),
            }}
        />
    );
}