export default function SolutionsFAQSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",

        mainEntity: [
            {
                "@type": "Question",
                name:
                    "Which industries can use Clover Carte vending solutions?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Clover Carte vending solutions can be deployed in offices, hospitals, educational institutions, malls, retail stores and commercial environments.",
                },
            },
            {
                "@type": "Question",
                name:
                    "Can Clover Carte provide customized vending solutions?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Yes, Clover Carte provides customized vending solutions tailored to specific business requirements and branding needs.",
                },
            },
            {
                "@type": "Question",
                name:
                    "Do Clover Carte solutions support cloud monitoring?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Yes, Clover Carte's smart vending solutions support real-time monitoring and analytics capabilities.",
                },
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