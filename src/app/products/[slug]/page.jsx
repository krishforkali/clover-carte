import ProductDetails from "@/app/products/[slug]/ProductDetails";
import PDetailsBread from "@/components/schema/PDetailsBread";
import ProductSchema from "@/components/schema/ProductDetailSchema";
import ProductFAQSchema from "@/components/schema/ProductFAQSchema";
import { products } from "@/data/product";
import M_ProductDetails from "./M_ProductDetails";

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const product = products.find(
        (item) => item.slug === slug
    );

    if (!product) {
        return {
            title: "Product Not Found | Clover Carte",
        };
    }


    return {
        title: product.seo.metaTitle,
        description: product.seo.metaDiscription,
        alternates: {
            canonical: `https://clovercarte.com/products/${product.slug}`,
        },
        keywords: product.seo.metaKeywords,

        openGraph: {
            title: product.seo.metaTitle,
            description: product.seo.metaDiscription,
            url: `https://clovercarte.com/products/${product.slug}`,
            siteName: "Clover Carte",
            locale: "en_IN",
            images: [
                {
                    url: product.image,
                    width: 1200,
                    height: 630,
                    alt: product.name,
                },
            ],
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: `${product.name} | Clover Carte`,
            description: product.description,
            images: [product.image],
        },
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

    };
}



export default async function ProductPage({ params }) {
    const { slug } = await params
    const product = products.find(
        (item) => item.slug === slug
    );
    return (
        <>
            <PDetailsBread product={product} />
            <ProductSchema product={product} />
            <ProductFAQSchema product={product} />
            <div className="block lg:hidden">
                <M_ProductDetails slug={slug} />
            </div>
            <div className="lg:block hidden">

            <ProductDetails slug={slug} />
            </div>
        </>
    );
}