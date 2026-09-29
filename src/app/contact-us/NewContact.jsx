"use client";

import Image from "next/image";
import Link from "next/link";
import {
    FiArrowRight,
    FiCheckCircle,
    FiClock,
    FiMail,
    FiMapPin,
    FiPhone,
} from "react-icons/fi";


const contactCards = [
    {
        icon: FiMail,
        title: "Email Us",
        value: "hello@vendicarte.com",
        iconBg: "bg-[#F1F9F1]",
        iconColor: "text-[#018A06]",
    },
    {
        icon: FiPhone,
        title: "Call Us",
        value: "+91 00000 00000",
        iconBg: "bg-[#FFF7ED]",
        iconColor: "text-[#F58E05]",
    },
    {
        icon: FiClock,
        title: "Quick Support",
        value: "Within 24 hours",
        iconBg: "bg-[#F1F9F1]",
        iconColor: "text-[#018A06]",
    },
    {
        icon: FiMapPin,
        title: "Location",
        value: "Pan India Support",
        iconBg: "bg-[#FFF7ED]",
        iconColor: "text-[#F58E05]",
    },
];

export default function NewContactPage() {
    return (
        <main className="w-full overflow-hidden bg-white space-y-12">
           
         
          

        </main>
    );
}