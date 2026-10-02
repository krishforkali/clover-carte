"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({
    title = "FAQs",
    faqs = [],
    className,
}) {
    const [activeIndex, setActiveIndex] = useState(0);

    // Don't render FAQ section when there are no FAQs
    if (!faqs || faqs.length === 0) {
        return null;
    }

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`w-full ${className}`}>
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="mb-5 text-center font-semibold text-[#3C3834] text-[32px] leading-[40px] md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[60px]">
                    {title}
                </h2>

                <div className="space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className="border border-[#C1E2C2] rounded-xl bg-[#F1F9F1] p-2 lg:p-4"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex w-full items-center justify-between gap-6 py-2 text-left cursor-pointer"
                                >
                                    <h3 className="text-[14px] md:text-[18px] font-medium leading-[17px] lg:leading-[27px] text-[#0F0F0F]">
                                        {faq.question}
                                    </h3>

                                    <ChevronDown
                                        size={24}
                                        className={`min-w-6 text-[#33363F] transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                                        isOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[22px] text-[#3C3834] text-left">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}