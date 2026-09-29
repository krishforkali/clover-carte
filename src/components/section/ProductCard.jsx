import { SvgIcon } from "../svg/icons";
import { FaRegComment } from "react-icons/fa";
import Image from "next/image";
import RequestQuoteButton from "../common/RequestQuoteButton";

export const ProductCard = ({ product, reverse, priority }) => {



    return (
        <div className={`overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center px-1 lg:px-0 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`} >
            {/* Image */}
            <div
                className="relative h-[280px] sm:h-[420px] lg:h-[620px] px-2 lg:px-0 overflow-hidden rounded-md"
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority={priority}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover rounded-md transition-transform duration-700 "
                />
            </div>
            {/* Content */}
            <div className=" px-4 py-5 rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:px-5 lg:p-0 lg:bg-transparent lg:shadow-none " >
                <h2 className=" text-green text-[32px] leading-[40px] sm:text-[42px] sm:leading-[50px] lg:text-5xl font-bold " >
                    {product.name}
                </h2>

                <p className=" text-[#5F5F5F] text-[16px] sm:text-[18px] lg:text-xl mt-2 " >
                    {product.subtitle}
                </p>

                {/* Ideal For */}
                <div
                    className="mt-6 lg:mt-8"
                >
                    <h4 className="font-bold uppercase mb-3">
                        Ideal For
                    </h4>

                    <div className="flex flex-wrap gap-3">
                        {product.idealFor.map((item, index) => (
                            <span key={index} className=" flex items-center gap-2 text-[#5F5F5F] text-[16px] leading-[26px] font-normal" >
                                <span>•</span>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Specs */}
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mt-6 lg:mt-8 " >
                    {product.specs.map((spec) => (
                        <div key={spec.label} className=" border border-dashed border-orange-400 rounded-xl p-3 flex items-center gap-3 bg-white hover:border-[#018A06] hover:shadow-[0_8px_20px_rgba(1,138,6,0.08)] transition-all duration-300 " >
                            <div>
                                {spec.Icon && (
                                    <spec.Icon size={25} color={spec.color ? spec.color : "black"} />
                                )}
                            </div>

                            <div>
                                <p className="uppercase text-xs text-gray-500 font-bold">
                                    {spec.label}
                                </p>

                                <p className="font-semibold mt-2">
                                    {spec.value}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Support Box */}
                <div className=" mt-8 bg-[#FFFAF5] border border-[#FFF6EB] rounded-xl p-4 sm:px-6 sm:py-5 " >
                    <div
                        className=" grid grid-cols-2 lg:flex lg:flex-nowrap gap-5 lg:gap-0 items-center lg:justify-between "
                    >
                        <div className="flex items-center gap-3">
                            <SvgIcon.IndianflagIcon />
                            <div className="text-[12px] leading-[18px] font-medium">
                                <div>Made in</div>
                                <div>India</div>
                            </div>
                        </div>

                        <div className="hidden lg:block w-px h-10 bg-[#FEE68599]" />

                        <div className="flex items-center gap-3">
                            <SvgIcon.ShieldCheckIcon />
                            <div className="text-[12px] leading-[18px] font-medium">
                                <div>1-Year</div>
                                <div>Warranty</div>
                            </div>
                        </div>

                        <div className="hidden lg:block w-px h-10 bg-[#FEE68599]" />

                        <div className="flex items-center gap-3">
                            <SvgIcon.ServiceIcon />
                            <div className="text-[12px] leading-[18px] font-medium">
                                <div>AMC</div>
                                <div>Available</div>
                            </div>
                        </div>

                        <div className="hidden lg:block w-px h-10 bg-[#FEE68599]" />

                        <div className="flex items-center gap-3">
                            <div className="text-[20px] font-bold leading-[22px] text-[#1E391F]">
                                24/7
                            </div>

                            <div className="text-[12px] leading-[18px] font-medium">
                                <div>Remote</div>
                                <div>Support</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div
                    className=" border border-dashed rounded-lg p-3 mt-5 text-sm lg:text-base leading-7 flex items-center justify-center"
                >
                    {product.highlights.join(" • ")}
                </div>

                {/* Buttons */}
                <div
                    className="flex flex-col md:flex-row gap-3 lg:gap-5 mt-6 lg:mt-8"
                >
                    <div
                        className="flex-1"
                    >
                        <a
                            href={`/products/${product.slug}`}
                            aria-label={`View details of ${product.name}`}
                            className=" text-center bg-green text-white px-6 lg:px-10 py-4 rounded-lg font-semibold flex items-center justify-center gap-2
                            "
                        >
                            View Details <FaRegComment />
                        </a>
                    </div>

                    <RequestQuoteButton productName={product.name} className={` flex-1 border-2 border-green px-6 lg:px-10 py-4 rounded-lg font-semibold`} />
                </div>
            </div>
        </div>
    );
};