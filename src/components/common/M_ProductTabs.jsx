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

export default function M_ProductTabs({
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
          <section
                    className=" box-border w-full  rounded-[12px] border-x border-b border-[#C1E2C2] flex flex-col gap-[20px] overflow-hidden"
                >
                    {/* Tabs */}
                    <div
                        className=" flex flex-row justify-center items-start p-[4px] w-full h-[50px] bg-[#F1F9F1] border-y border-[#C1E2C2] rounded-[11px]"
                    >
                        <button onClick={() => setActiveTab("features")}
                            type="button"
                            className={` flex flex-col justify-center items-center py-[8px] w-1/2 h-[40px] rounded-[8px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]  text-[16px] font-normal leading-6  ${activeTab === "features"
                                ? "bg-white text-green font-semibold border border-[#F1F9F1] shadow-sm"
                                : "text-[#5F5F5F]"
                                }`}
                        >
                            Features
                        </button>

                        <button onClick={() => setActiveTab("specification")}
                            type="button"
                            className={` flex flex-col justify-center items-center py-[8px] w-1/2 h-[40px]  text-[16px] font-normal leading-6 text-[#5F5F5F]  ${activeTab === "specification"
                                ? "bg-white text-green font-semibold border border-[#F1F9F1] shadow-sm"
                                : "text-[#5F5F5F]"
                                }`}
                        >
                            Specifications
                        </button>
                    </div>
                    {activeTab === "features" ? (
                        <div className="flex flex-col items-start gap-[12px] w-full px-0 pb-[20px]">
                            {features.map((feature, index) => {
                              const Icon = featureIcons[feature.icon];

                                return (
                                    <div
                                        key={index}
                                        className=" flex flex-row items-start gap-[8px] w-full min-h-[93px] px-[8px] py-[8px]"
                                    >
                                        {/* Icon */}
                                        <div className="w-8 h-8 rounded-full bg-[#F0F5F0] flex items-center justify-center flex-shrink-0">
                                            <Icon
                                                className="text-[#018A06]"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div
                                            className=" flex flex-col items-start gap-[4px] w-[308px] min-w-0"
                                        >
                                            <h3
                                                className=" w-full text-[16px] font-semibold leading-[28px] text-[#0F0F0F]"
                                            >
                                                {feature.title}
                                            </h3>

                                            <p
                                                className=" w-full text-[14px] font-normal leading-[20px] text-[#5F5F5F]"
                                            >
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="flex flex-col items-start gap-[12px] w-full px-0 pb-[20px]">
                            {specification.map((specification, index) => {

                                return (
                                    <div
                                        key={index}
                                        className=" flex flex-row items-start gap-[8px] w-full px-[8px] py-[8px]"
                                    >


                                        {/* Content */}
                                        <div
                                            className=" flex flex-col items-start gap-[4px] w-[308px] min-w-0"
                                        >
                                            <h3
                                                className=" w-full text-[16px] font-semibold leading-[28px] text-[#0F0F0F]"
                                            >
                                                {specification.label}
                                            </h3>

                                            <p
                                                className=" w-full text-[14px] font-normal leading-[20px] text-[#5F5F5F]"
                                            >
                                                {specification.value}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </section>
    );
}