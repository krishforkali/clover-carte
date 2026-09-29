export default function BlogPostingSchema({
    blog,
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",

        headline: blog.title,

        description:
            blog.shortDescription,

        image: [
            blog.image?.url,
        ],

        datePublished:
            blog.createdAt,

        dateModified:
            blog.updatedAt ||
            blog.createdAt,

        author: {
            "@type": "Person",
            name:
                blog.author ||
                "Clover Carte",
        },

        publisher: {
            "@type": "Organization",
            name: "Clover Carte",
            logo: {
                "@type": "ImageObject",
                url: "https://clovercarte.com/logo.png",
            },
        },

        mainEntityOfPage: {
            "@type": "WebPage",
            "@id":
                `https://clovercarte.com/blog/${blog.slug}`,
        },
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