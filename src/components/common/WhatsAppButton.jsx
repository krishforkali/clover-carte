"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    const phone = "917499645927"; // Replace with your WhatsApp number
    const message = encodeURIComponent(
        "Hello Clover Carte, I'm interested in your vending machines solutions. Please share more detatils about your products and pricing. Thank you!"
    );

    return (
        <Link
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-20 right-6 z-50"
        >
            <div className="bg-[#25D366] hover:bg-[#20ba5a] text-white w-10 h-10 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaWhatsapp size={25} />
            </div>
        </Link>
    );
}