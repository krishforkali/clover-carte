"use client";

import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

export default function NavLabel({ name, path,arrow=false }) {
    const pathname = usePathname();

    const isActive =
        path === "/"
            ? pathname === "/"
            : pathname.startsWith(path);

    return (
        <div className="relative">
            <a
                href={path}
                className={`text-[18px] transition-all duration-300 flex items-center  ${
                    isActive
                        ? "text-green font-[600]"
                        : "text-[#0F0F0F] font-[400]"
                } hover:text-green`}
            >
                {name}{arrow&&<IoIosArrowDown className="mt-2" />}
            </a>

            <span
                className={`absolute left-0 -bottom-2 h-[2px] bg-green transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                }`}
            />
        </div>
    );
}