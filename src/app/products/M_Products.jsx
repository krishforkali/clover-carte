
import MobileProductCard from "@/components/section/MobileProductCard";

export default function M_Products({products}) {
    return (
        <section className="w-full bg-white px-2 pb-8">

            <div className="flex w-full flex-col items-center gap-6">

                {products.map((product) => (
                    <MobileProductCard
                        key={product.slug}
                        product={product}
                    />
                ))}

            </div>

        </section>
    );
}