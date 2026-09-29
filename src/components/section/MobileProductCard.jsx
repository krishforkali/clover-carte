
import Image from "next/image";
import Link from "next/link";
import RequestQuoteButton from "../common/RequestQuoteButton";

export default function MobileProductCard({ product,priority }) {


    return (
        <>
            <div
                className=" box-border flex w-full  flex-col items-start gap-3 rounded-xl border border-[#C1E2C2] bg-white p-3
            "
            >
                {/* =========================
                PRODUCT IMAGE
            ========================== */}
                <div className="relative h-[332px] w-full overflow-hidden rounded-[12px_12px_0_0]">
                    <Image
                        src={product.image} priority={priority}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 337px" 
                    />
                </div>

                {/* =========================
                PRODUCT CONTENT
            ========================== */}
                <div className="flex w-full flex-col items-start gap-4">

                    {/* Product Name + Subtitle */}
                    <div className="flex w-full flex-col items-start gap-1">

                        <h2
                            className=" flex h-6 w-full items-center  text-[16px] font-bold leading-6 text-[#0F0F0F]"
                        >
                            {product.name}
                        </h2>

                        <p
                            className=" flex min-h-12 w-full items-center  text-[16px] font-normal leading-6 text-[#5F5F5F]"
                        >
                            {product.subtitle}
                        </p>

                    </div>

                    {/* =========================
                    IDEAL FOR
                ========================== */}
                    <div className="flex w-full flex-col items-start gap-2">

                        <span
                            className=" flex h-4 w-full items-center  text-[12px] font-medium leading-4 tracking-[0.6px] text-[#0F0F0F] uppercase"
                        >
                            Ideal For
                        </span>

                        <div className="flex w-full flex-wrap gap-2">

                            {product.idealFor?.slice(0, 4).map((item, index) => (
                                <span
                                    key={item + index}
                                    className=" flex min-h-6 items-center rounded-full bg-[#F1F9F1] px-3 py-1  text-[12px] font-normal leading-4 tracking-[0.24px] text-[#018A06]"
                                >
                                    {item}
                                </span>
                            ))}

                        </div>
                    </div>

                    {/* =========================
                    STORAGE / OUTPUT
                ========================== */}
                    <div className="flex w-full flex-row items-start justify-center gap-4">
                        {product.specs?.slice(0, 2).map((item, index) => (
                            <div key={item.value}
                                className=" box-border flex h-[53px] flex-1 flex-row items-center gap-2 rounded-lg border border-[#018A06] p-2 "
                            >
                                <div className="flex h-[17px] w-[14px] shrink-0 items-center justify-center">
                                    <item.Icon size={24}
                                        className="text-green"
                                    />
                                </div>

                                <div className="flex min-w-0 flex-col">

                                    <span
                                        className="  text-[12px] font-normal leading-[15px] text-[#5F5F5F] uppercase"
                                    >
                                        {item?.label || "Storage"}
                                    </span>

                                    <span className=" text-[12px] font-medium leading-5 text-[#0F0F0F] whitespace-nowrap">
                                        {(item?.value || "-").replace(/\s+/g, " ")}
                                    </span>

                                </div>
                            </div>
                        ))}


                    </div>

                    {/* =========================
                    HIGHLIGHTS
                ========================== */}
                    <div className="flex w-full flex-col items-start gap-2">

                        <div className="flex w-full flex-wrap items-center gap-2">

                            {product.highlights?.map((highlight) => (
                                <span
                                    key={highlight}
                                    className=" box-border flex min-h-[26px] items-center rounded-[6px] border border-dashed border-[#C1E2C2] bg-[#F1F9F1] px-2 py-1  text-[12px] font-medium leading-4 text-[#5F5F5F]"
                                >
                                    {highlight}
                                </span>
                            ))}

                        </div>

                    </div>

                    {/* =========================
                    ACTION BUTTONS
                ========================== */}
                    <div className="flex w-full flex-row items-center  gap-4">

                        <Link className="bg-[#018A06] flex h-12 flex-1 items-center justify-center rounded-[6px]  py-1  text-[16px] font-medium leading-4 text-white"
                            href={`/products/${product.slug}`}
                        >
                            View Details
                        </Link>
                       <RequestQuoteButton productName={product.name} className={`flex h-12 flex-1 items-center justify-center rounded-[6px] border border-[#018A06] py-1  text-[16px] font-medium leading-4 text-black`} label="Request Quote" />

                    </div>

                </div>
            </div>
        </>
    );
}