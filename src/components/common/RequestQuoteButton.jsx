"use client";

import { useState } from "react";
import RequestQuoteModal from "../common/RequestQuote";
import RequestQuoteModalNew from "./RequestQuoteNew";

export default function RequestQuoteButton({ productName, className, label = "Request a Quote →", model = "first",labelClass }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className={className}
            >
               <span className={labelClass} > {label}</span> 
            </button>
            {model === "second" ? (
                <RequestQuoteModalNew isOpen={isOpen}
                    productName={productName}
                    onClose={() => setIsOpen(false)} />) :
                (<RequestQuoteModal
                    isOpen={isOpen}
                    productName={productName}
                    onClose={() => setIsOpen(false)}
                />)}
        </>
    );
}