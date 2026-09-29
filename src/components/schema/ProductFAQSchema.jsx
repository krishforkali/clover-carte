// components/schema/ProductFAQSchema.jsx

export default function ProductFAQSchema({ product }) {
    // Don't render schema if there are no FAQs
    if (!product?.faqs?.length) return null;

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": product.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
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