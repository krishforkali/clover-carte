"use client";

import { FiCalendar } from "react-icons/fi";

export default function BookDemoButton({className}) {
    const handleBookDemo = () => {
           const section = document.getElementById("book-demo");

    console.log("section:", section);
    console.log("window scrollY:", window.scrollY);
    console.log(
        "document scrollHeight:",
        document.documentElement.scrollHeight
    );
    console.log(
        "window innerHeight:",
        window.innerHeight
    );

    section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });

    };

    return (
        <button
            type="button"
            onClick={handleBookDemo}
            className={className}
        >
            <FiCalendar
                size={20}
                strokeWidth={1.7}
                className="text-white transition-transform duration-300 group-hover:scale-110"
            />

            <span className="whitespace-nowrap text-[16px] font-medium leading-6 text-white">
                Book a Demo
            </span>
        </button>
    );
}