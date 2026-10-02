"use client";

import { useState } from "react";
import { products } from "../../../data/product";
import { SvgIcon } from "../../../components/svg/icons";
import { ShieldCheck, Wrench } from "lucide-react";
import { MdOutlineSupportAgent } from "react-icons/md";
import Image from "next/image";
import FAQAccordion from "@/components/common/FAQAccordion";
import Link from "next/link";
import M_ProductTabs from "@/components/common/M_ProductTabs";
import RequestQuoteButton from "@/components/common/RequestQuoteButton";

function M_ProductDetails({ slug }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const product = products.find((item) => item.slug === slug);

    if (!product) return <h1>Product Not Found</h1>;

    const thumbnails = [
        {
            name: "full",
            transform: "scale(1)",
        },
        {
            name: "screen",
            transform: "scale(2.8) translate(-15%, -20%)",
        },
        {
            name: "dispenser",
            transform: "scale(2.8) translate(-15%,20%)",
        },
        {
            name: "product",
            transform: "scale(2) translate(-10%, -10%)",
        },
    ];
    
    const desc = product.description || "";
    const isLongText = desc.length > 130;
    const displayText = isLongText && !isExpanded ? `${desc.slice(0, 130)}...` : desc;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        name: product.name,
                        description: product.description,
                        image: [`https://clovercarte.com${product.image}`],
                        brand: {
                            "@type": "Brand",
                            name: "Clover Carte",
                        },
                        url: `https://clovercarte.com/products/${product.slug}`,
                    }),
                }}
            />

            <main className="max-w-full px-4 space-y-12">

                <section className="w-full space-y-4 ">
                    <div className="relative w-full h-[352px] overflow-hidden rounded-[4px]">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="flex w-full gap-4 overflow-x-auto scrollbar-none">
                        {thumbnails.map((thumbnail) => (
                            <button
                                key={thumbnail.name}
                                type="button"
                                className={`relative h-[100px] w-[100px] shrink-0 overflow-hidden rounded-[4px] `}
                            >
                                <Image
                                    src={product.image || "/images/product-placeholder.png"}
                                    alt={`${product.name || "Product"} ${thumbnail.name}`}
                                    fill
                                    className="object-cover"
                                    style={{ transform: thumbnail.transform }}
                                />
                            </button>
                        ))}
                    </div>
                </section>
                <section className="flex w-full flex-col items-center gap-5">
                    <div className="flex w-full  flex-col gap-4">
                        <div className="flex flex-col gap-3">
                            <h1 className="w-full  text-[20px] font-bold leading-6 text-[#0F0F0F]">
                                {product.name}
                            </h1>

                            <div className="flex w-full flex-col gap-1">
                                <h2 className="w-full  text-[16px] font-medium leading-6 text-[#0F0F0F]">
                                    {product.subtitle}
                                </h2>

                                <p className="w-full  text-[14px] font-normal leading-[20px] text-[#5F5F5F]">
                                    {displayText}{" "}
                                    {isLongText && (
                                        <button
                                            type="button"
                                            onClick={() => setIsExpanded(!isExpanded)}
                                            className="text-[#018A06] font-semibold underline ml-1 focus:outline-none"
                                        >
                                            {isExpanded ? "Read Less" : "Read More"}
                                        </button>
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="flex w-full flex-col gap-2">
                            <span className=" text-[12px] font-medium leading-4 tracking-[0.6px] text-[#0F0F0F]">
                                IDEAL FOR
                            </span>

                            <div className="flex w-full flex-wrap gap-2">
                                {product.idealFor?.map((item, index) => (
                                    <span
                                        key={index}
                                        className="rounded-full bg-[#F1F9F1] px-3 py-1  text-[12px] font-normal leading-4 tracking-[0.24px] text-[#018A06]"
                                    >
                                        {typeof item === "string" ? item : item?.value || "-"}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full flex-row items-center gap-3 border border-[#F58E05] bg-[#FFFAF5] px-2 py-3 overflow-x-auto scrollbar-none">
                        <div className="flex shrink-0 items-center gap-2">
                            <SvgIcon.IndianflagIcon />
                            <span className="w-[45px]  text-[12px] font-medium leading-[18px] text-[#0F0F0F]">
                                Made in
                                <br />
                                India
                            </span>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                            <ShieldCheck size={24} strokeWidth={1.5} />
                            <div >
                                <span className="w-[52px]  text-[12px] font-bold leading-[18px] text-[#0F0F0F]">
                                    1-Year
                                </span><br />
                                <span className="w-[52px]  text-[12px] font-normal leading-[18px] text-[#0F0F0F]">

                                    Warranty
                                </span>
                            </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                            <Wrench size={24} strokeWidth={1.5} />

                            <div >
                                <span className="w-[52px]  text-[12px] font-bold leading-[18px] text-[#0F0F0F]">
                                    AMC
                                </span><br />
                                <span className="w-[52px]  text-[12px] font-normal leading-[18px] text-[#0F0F0F]">

                                    Availabel
                                </span>
                            </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                            <MdOutlineSupportAgent size={24} />

                            <div >
                                <span className="w-[52px]  text-[12px] font-bold leading-[18px] text-[#0F0F0F]">
                                    24/7
                                </span><br />
                                <span className="w-[52px]  text-[12px] font-normal leading-[18px] text-[#0F0F0F]">

                                    Remote Support
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full items-center  gap-5">
                      <RequestQuoteButton productName={product.name} label="Request Quote" className={`flex flex-1 h-12  items-center justify-center rounded-[6px] bg-[#018A06] px-2 py-1  text-[16px] font-medium leading-4 text-white`}/>

                        <Link href="/contact-us"
                            type="button"
                            className="flex flex-1 h-12  items-center justify-center rounded-[6px] border border-[#018A06] bg-white px-2 py-1  text-[16px] font-medium leading-4 text-[#0F0F0F]"
                        >
                            Contact Us
                        </Link>
                    </div>
                </section>

               <section className=" w-full " >
                  <div className=" w-full mx-auto grid grid-cols-2 gap-[13px_8px] " >
                        {product.specsDtl.map((spec, index) => (
                          <div key={`${spec.label}-${index}`} className=" box-border w-full h-[122px] p-4 flex flex-col items-start gap-2 bg-white border border-[#C1E2C2] rounded-[12px] " >
                                {/* Icon */}
                                <div className=" w-8 h-8 shrink-0 flex items-center justify-center p-2 bg-[#F1F9F1] rounded-[8px] " >
                                    <spec.Icon className="text-green" size={24} />
                                </div>

                                {/* Content */}
                              <div className=" flex flex-col items-start w-full min-w-0 " >
                                 <span className=" text-[15px] font-medium leading-6 uppercase text-[#5F5F5F] whitespace-nowrap " >
                                        {spec.label}
                                    </span>

                                    <span className=" text-[14px] font-normal leading-6 text-[#0F0F0F] whitespace-nowrap " >
                                        {spec.value}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


             <M_ProductTabs features={product.features} specification={product.specification} />

                <FAQAccordion faqs={product.faqs} className="px-0" />
              
            </main>
        </>
    );
}

export default M_ProductDetails;
