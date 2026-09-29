
import Products from "@/app/products/Products";
import BreadcrumbProductsSchema from "@/components/schema/BreadcrumbProductsSchema";
import ProductCollectionSchema from "@/components/schema/ProductCollectionSchema";


export const metadata = {
    title:
        "Vending Machines in India | Smart Vending Machines | Clover Carte",

    description:
        "Explore smart vending machines by Clover Carte for snacks, beverages, coffee and retail. Discover customized vending solutions for businesses in India.",

    keywords: [
"Clover Carte", 
"Smart Vending Machines",
"Vending Machines in India",
"Caftina Vending Machine", 
"Vendshop Vending Machine",
"Vendmini Vending Machine", 
"SmartSlim Vending Machine",
"Smart Slim 3 Vending Machine",
"Vendelle Vending Machine", 
"Snack Vending Machine",
"Beverage Vending Machine",
"Coffee Vending Machine",
"Automatic Vending Machine",
"Smart Retail Vending Machines",
"OEM Vending Machine Manufacturer in India",
"Vending Machine Solutions in India",
"Vending Machines in India",
"Smart Vending Machine Manufacturer in India",
"Customized Vending Machines in India"
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    alternates: {
        canonical: "https://clovercarte.com/products",
    },

    openGraph: {
        title:
            "Smart Vending Machine Products | Clover Carte",

        description:
            "Explore coffee, snack, beverage and customized vending machine solutions by Clover Carte.",

        url: "https://clovercarte.com/products",

        siteName: "Clover Carte",

        locale: "en_IN",

        images: [
            {
                url: "https://clovercarte.com/og/products.webp",
                width: 1200,
                height: 630,
                alt: "Clover Carte Products",
            },
        ],

        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Smart Vending Machine Products | Clover Carte",

        description:
            "Explore coffee, snack, beverage and customized vending machine solutions by Clover Carte.",

        images: [
            "https://clovercarte.com/og/products.webp",
        ],
    },
};

export default function ProductDetailsPage() {
    return (
        <>
            <BreadcrumbProductsSchema />
            <ProductCollectionSchema />
            <Products />
        </>
    );
}