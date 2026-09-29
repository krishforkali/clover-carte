import React from 'react'
import { ProductCard } from '../../components/section/ProductCard';
import { products } from '../../data/product';
import M_Products from './M_Products';


function Products() {

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        itemListElement: products.map((product, index) => ({
                            "@type": "ListItem",
                            position: index + 1,
                            url: `https://clovercarte.com/products/${product.slug}`,
                            name: product.name,
                        })),
                    }),
                }}
            />
            <div className="block lg:hidden">
                <M_Products products={products} />
            </div>
            <section className="max-w-[1248px] mx-auto lg:px-0 py-5 hidden lg:block">
                <div className='px-5 lg:px-0 mb-10'>
                    <h1 className="text-5xl font-bold">
                        Our Products
                    </h1>

                    <p className="text-[#0F0F0F] mt-4 max-w-5xl">
                        Explore Clover Care's intelligent vending systems
                        designed for customization, smart automation and
                        scalable retail deployment.
                    </p>
                </div>
                <div className=" space-y-12 mb-10">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.name}
                            product={product}
                            reverse={index % 2 === 0}
                            priority={index===0}
                        />
                    ))}
                </div>
            </section>

        </>
    )
}

export default Products