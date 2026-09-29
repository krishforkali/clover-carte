"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const ScrollToTop = () => {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);

    // Show button after user scrolls
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        // Check initial scroll position
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Scroll to top when route changes
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });

        setIsVisible(false);
    }, [pathname]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`
                fixed
                bottom-32
                right-6
                z-50
                bg-white
                hover:bg-green
                text-green
                hover:text-white
                w-10
                h-10
                rounded-full
                shadow-xl
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-110
                ${isVisible
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }
            `}
        >
            <MdOutlineKeyboardArrowUp size={25} />
        </button>
    );
};

export default ScrollToTop;