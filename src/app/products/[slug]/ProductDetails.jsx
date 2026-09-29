import { products } from "../../../data/product";
import { SvgIcon } from "../../../components/svg/icons";
import { ShieldCheck, Wrench } from "lucide-react";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import Image from "next/image";
import FAQAccordion from "@/components/common/FAQAccordion";
import ProductTabs from "@/components/common/ProductTabs";
import RequestQuoteButton from "@/components/common/RequestQuoteButton";

function ProductDetails({ slug }) {
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

    return (
        <>
           

            <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex flex-wrap items-center gap-2 my-4 lg:mt-10 font-medium">
                    <a href="/products" className="text-[#5F5F5F] text-[14px] sm:text-[16px]" > Products </a>

                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M9 18L15 12L9 6"
                            stroke="#5F5F5F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <span className="text-[#2A2A2A] text-[14px] sm:text-[16px] break-words">
                        {product.name} - {product.subtitle}
                    </span>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-[35px] ">
                    {/* LEFT SIDE */}
                    <div className="relative w-full lg:w-[50%] overflow-hidden">
                        <div className=" relative w-full h-[300px] sm:h-[420px] lg:h-[636px] lg:w-[616px] overflow-hidden " >
                            <Image
                                fill
                                src={product.image}
                                alt={`${product.name} Smart Vending Machine`}
                                priority
                                sizes="(max-width: 1024px) 100vw, 616px"
                                className="object-cover rounded"
                            />
                        </div>

                        <div className="grid grid-cols-4 sm:grid-cols-4 gap-3 lg:gap-5 mt-6 lg:mt-10">
                            {thumbnails.map((thumb, index) => (
                                <div key={index} className=" relative lg:w-full w-[80px] aspect-square overflow-hidden rounded " >
                                    <Image
                                        fill
                                        src={product.image}
                                        alt=""
                                        aria-hidden="true"
                                        sizes="50px"
                                        className="object-cover origin-center"
                                        style={{
                                            transform: thumb.transform,
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-full lg:w-[50%]">
                        {/* Title */}
                        <div>
                            <h1
                                className="text-[32px] leading-[40px] sm:text-[40px] sm:leading-[50px] lg:text-[48px] lg:leading-[59px] font-bold text-green"
                            >
                                {product.name}
                            </h1>

                            <p
                                className=" text-[16px] sm:text-[18px] lg:text-[20px] leading-[28px] lg:leading-[33px] text-[#5F5F5F] mt-4"
                            >
                                {product.subtitle}
                            </p>

                            <p className="text-[16px] text-black mt-5 text-justify">
                                {product.description}
                            </p>
                        </div>

                        {/* Ideal For */}
                        <div className="mt-8 lg:mt-5">
                            <h3 className="text-[16px] font-bold uppercase mb-4">
                                Ideal For
                            </h3>

                            <div className="flex flex-wrap gap-x-5 gap-y-2  ">
                                {product.idealFor.map((item, index) => (
                                    <div
                                        key={item + index}
                                        className="flex items-center gap-2 whitespace-nowrap text-[#5F5F5F]"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-[#5F5F5F] flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Spec Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                            {product.specsDtl.map((spec) => (
                                <div key={spec.label} className=" min-h-[88px] border border-[#E2F0E2] rounded-xl px-4 py-3 flex items-center gap-4 bg-white shadow-sm " >
                                    <div className="px-1 py-1 h-[30px] w-[30px] items-center justify-center flex bg-[#F0F5F0] rounded-lg">
                                        {spec.Icon && <spec.Icon color="green" size={24} />}
                                    </div>

                                    <div>
                                        <p className="text-[10px] uppercase tracking-wide text-[#6B7280] font-semibold">
                                            {spec.label}
                                        </p>

                                        <p className="text-[16px] font-semibold text-[#111827]">
                                            {spec.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Support Strip */}
                        <div className=" mt-6 bg-[#FFFAF5] border border-[#F58E05] rounded-xl px-4 sm:px-6 py-5 " >
                            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 lg:divide-x divide-[#F58E0599] " >
                                <div className="flex items-center gap-3 lg:px-3">
                                    <SvgIcon.IndianflagIcon />
                                    <span className="font-medium">Made in India</span>
                                </div>

                                <div className="flex items-center gap-3 lg:px-3">
                                    <ShieldCheck size={40} />
                                    <span className="font-bold">1-Year Warranty</span>
                                </div>

                                <div className="flex items-center gap-3 lg:px-3">
                                    <Wrench size={40} />
                                    <span className="font-bold">AMC Available</span>
                                </div>

                                <div className="flex items-center gap-3 lg:px-3">
                                    <MdOutlineSupportAgent size={40} />
                                    <span className="font-bold">Remote Support</span>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 mt-6">
                          <RequestQuoteButton productName={product.name} className={` flex-1 bg-green text-white rounded-[10px] font-semibold text-[16px] lg:text-[20px] py-4 `} />

                            <a href={`/contact-us`} className=" flex-1 bg-[#E6F4E6] gap-2 border border-[#B9F8BB80] text-green rounded-[10px] font-semibold text-[16px] lg:text-[20px] flex items-center justify-center py-4 " >
                                Contact Us <FaComment />
                            </a>
                        </div>
                    </div>
                </div>

                <ProductTabs features={product.features} specification={product.specification} />
                <FAQAccordion faqs={product.faqs} />
            </section>
        </>
    );
}

export default ProductDetails;
