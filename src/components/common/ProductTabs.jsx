"use client";

import { useState } from "react";
import { IoIosSnow,  IoMdCloudOutline, } from "react-icons/io";
import { MdOutlineWaterDrop, MdOutlineCloudSync, MdOutlineCoffeeMaker, MdOutlineLockOpen, MdOutlineSanitizer, MdOutlineAdminPanelSettings, MdOutlineColorLens, MdOutlineElevator, MdOutlineTouchApp, MdLockOutline, MdOutlineCleanHands, } from "react-icons/md";
import { BiStopwatch, BiTransfer, } from "react-icons/bi";
import { PiContactlessPayment, PiClockClockwise, PiLayout, } from "react-icons/pi";
import { GiElectric, } from "react-icons/gi";
import { GoVideo, } from "react-icons/go";
import { LiaHandPointer, } from "react-icons/lia";
import { BsDisplay, BsArrowsCollapse, } from "react-icons/bs";
import { TbSparkles, } from "react-icons/tb";
import { AiOutlineLayout, } from "react-icons/ai";
import { SvgIcon, } from "@/components/svg/icons";
export default function ProductTabs({
    features,
    specification,
}) {
    const [activeTab, setActiveTab] = useState("features");
    const featureIcons = {
    snow: IoIosSnow,

    "water-drop": MdOutlineWaterDrop,

    "menu-dots": SvgIcon.Menudots,

    "cloud-sync": MdOutlineCloudSync,

    "coffee-maker": MdOutlineCoffeeMaker,

    "lock-open": MdOutlineLockOpen,

    sanitizer: MdOutlineSanitizer,

    "admin-security": MdOutlineAdminPanelSettings,

    "bar-chart": SvgIcon.barStatIcon,

    stopwatch: BiStopwatch,

    transfer: BiTransfer,

    radar: SvgIcon.radarIcon,

    "cloud-outline": IoMdCloudOutline,

    "contactless-payment": PiContactlessPayment,

    "color-lens": MdOutlineColorLens,

    electric: GiElectric,

    clock: PiClockClockwise,

    temperature: SvgIcon.TemperatureIcon,

    slot: SvgIcon.SlotIcon,

    video: GoVideo,

    "cloud-done": IoIosSnow,

    "hand-pointer": LiaHandPointer,

    "clean-hands": MdOutlineCleanHands,

    "user-lock": SvgIcon.UserlockIcon,

    "database-edit": SvgIcon.DatabaseeditIcon,

    screenshot: SvgIcon.ScreenshotIcon,

    display: BsDisplay,

    "lock-plus": SvgIcon.Lockplus,

    "server-configuration": SvgIcon.Serverconfiguration,

    sparkles: TbSparkles,

    layout: PiLayout,

    elevator: MdOutlineElevator,

    "arrows-collapse": BsArrowsCollapse,

    "layout-outline": AiOutlineLayout,

    touch: MdOutlineTouchApp,

    lock: MdLockOutline,

    iot: SvgIcon.Iotsensor,

    "container-slot": SvgIcon.Containerslot,

    package: SvgIcon.Packagegood,
};

    return (
        <div className="my-12 lg:my-20 bg-[#F8FCF8] border border-[#E2F0E2] rounded-2xl overflow-hidden">

            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 lg:gap-20 p-3 border-b border-[#F1F9F1]">

                <button
                    type="button"
                    onClick={() => setActiveTab("features")}
                    className={`
                        w-full
                        sm:w-[280px]
                        lg:w-[340px]
                        h-10
                        rounded-full
                        text-[16px]
                        lg:text-[20px]
                        transition-all
                        ${activeTab === "features"
                            ? "bg-white text-green font-semibold border border-[#F1F9F1] shadow-sm"
                            : "text-[#5F5F5F]"
                        }
                    `}
                >
                    Features
                </button>

                <button
                    type="button"
                    onClick={() => setActiveTab("specifications")}
                    className={`
                        w-full
                        sm:w-[280px]
                        lg:w-[340px]
                        h-10
                        rounded-full
                        text-[16px]
                        lg:text-[20px]
                        transition-all
                        ${activeTab === "specifications"
                            ? "bg-white text-green font-semibold border border-[#F1F9F1] shadow-sm"
                            : "text-[#5F5F5F]"
                        }
                    `}
                >
                    Specifications
                </button>
            </div>

            {/* Content */}
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-b-2xl">

                {activeTab === "features" ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">

                        {features.map((feature, index) => {
                            const Icon = featureIcons[feature.icon];
                           return (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-2"
                            >
                                <div className="w-8 h-8 rounded-full bg-[#F0F5F0] flex items-center justify-center flex-shrink-0">
                                    {feature.icon && (
                                        <Icon color="green" />
                                    )}
                                </div>

                                <div>
                                    <h4 className="text-[18px] lg:text-[20px] leading-[28px] font-semibold text-black">
                                        {feature.title}
                                    </h4>

                                    <p className="text-[16px] leading-6 text-[#5F5F5F] mt-1">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>)
})}

                    </div>
                ) : (
                    <div className="w-full bg-white rounded-b-2xl px-2 sm:px-5 md:px-8 py-6">

                        <div className="flex flex-col">

                            {specification?.map((spec) => (
                                <div
                                    key={spec.label}
                                    className="
                                        grid
                                        grid-cols-1
                                        sm:grid-cols-2
                                        gap-2
                                        sm:gap-0
                                        items-center
                                        py-4
                                    "
                                >
                                    <div className="text-[#0F0F0F] text-base font-medium leading-6">
                                        {spec.label}
                                    </div>

                                    <div className="text-[#0F0F0F] text-base font-medium leading-6 sm:text-right">
                                        {spec.value}
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}