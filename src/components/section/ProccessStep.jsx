import React from "react";

export default function ProcessStep({
    icon: Icon,
    number,
    title,
    subtitle,
}) {
    return (
        <div className="flex flex-col items-center gap-4">
            <div
                className="
          w-[98px]
          h-[98px]
          rounded-full
          bg-white
          border-2
          border-green
          shadow-[0_1px_4px_rgba(0,0,0,0.12)]
          flex
          items-center
          justify-center
        "
            >
                <Icon
                    size={40}
                    className="text-green"
                />
            </div>

            <div className="text-center">
                <h4 className="font-jakarta font-bold text-[16px] text-[#0F0F0F]">
                    {number}. {title}
                </h4>

                <p className="text-[16px] text-[#5F5F5F] mt-1">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}