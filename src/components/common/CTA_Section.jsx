import React from 'react'
import BookDemoButton from '../useClient/BookDemoButton'
import { FiCalendar, FiDownload } from 'react-icons/fi'
import Image from 'next/image'

export default function CTA_Section({href}) {
 
    return (
        <main className="">
        <section className="w-full pt-12 block lg:hidden">
            <div className=" flex p-2 gap-3 items-center justify-center overflow-hidden bg-[#0F0F0F] " >
                <div className=" relative h-[180px] w-[116px] overflow-hidden " >
                    <Image
                        src="/images/contact_image_2.png"
                        alt="VendiCarte smart vending machine"
                        fill
                        className="object-containt object-center"
                    />
                </div>
                <div className=" flex w-full flex-col items-center justify-center gap-3 lg:h-[171px] lg:flex-row lg:gap-[82px]" >
                    {/* LEFT CONTENT */}
                    <div className=" flex w-full items-center gap-6 lg:h-[171px] lg:w-[651.58px] lg:flex-none lg:gap-12 " >

                        {/* Text */}
                        <div className=" flex w-full flex-col items-start gap-2 lg:h-[92px] lg:w-[511.58px] " >
                            <h2 className=" w-full text-[18px] font-bold text-white " >
                                Ready to Automate Your Business?
                            </h2>
                            <p className=" w-full text-[12px] font-normal text-[#F1F9F1] " >
                                Book a free demo today and get the best vending
                                solution for your business.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT ACTIONS */}
                    <div className=" flex w-full flex-col items-stretch gap-2" >
                        {/* Book a Demo */}
                          <a href={href}
            type="button"
            className="flex h-[48px] gap-3 text-[12px] w-full items-center justify-center  rounded-md bg-[#018A06] "
        >
            <FiCalendar
                size={20}
                strokeWidth={1.7}
                className="text-white transition-transform duration-300 group-hover:scale-110"
            />

            <span className="whitespace-nowrap text-[16px] font-medium leading-6 text-white">
                Book a Demo
            </span>
        </a>
                        {/* Download Brochure */}
                        <a href="/Clover Carte Catalogue.pdf" download className=" group box-border flex h-[50px] w-full items-center justify-center gap-3 rounded-md border border-[#018A06] bg-transparent px-6 transition-all duration-300 hover:bg-[#018A06]/10 sm:w-auto lg:w-[238px] " >
                            <FiDownload size={20} strokeWidth={1.7} className=" text-white transition-transform duration-300 group-hover:translate-y-0.5 " />

                            <span className=" whitespace-nowrap text-[16px] font-medium leading-6 text-white " >
                                Download Brochure
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
          <section className="w-full px-6 sm:px-8 md:px-12 lg:px-12 lg:block hidden pt-12">
                <div
                    className=" flex min-h-[185px] w-full max-w-[1248px] items-center justify-center overflow-hidden rounded-2xl bg-[#0F0F0F] px-6 py-7 sm:px-8 lg:h-[185px] lg:px-6 lg:py-[7px]
        "
                >
                    <div
                        className=" flex w-full flex-col items-center justify-center gap-7 lg:h-[171px] lg:flex-row lg:gap-[82px]"
                    >
                        {/* LEFT CONTENT */}
                        <div
                            className=" flex w-full items-center gap-6 lg:h-[171px] lg:w-[651.58px] lg:flex-none lg:gap-12
                "
                        >
                            {/* Product Image */}
                            <div
                                className=" relative hidden h-[140px] w-[75px] shrink-0 overflow-hidden rounded sm:block lg:h-[171px] lg:w-[92px]
                    "
                            >
                                <Image
                                    src="/images/contact_image_2.png"
                                    alt="VendiCarte smart vending machine"
                                    fill
                                    className="object-containt object-center"
                                />
                            </div>

                            {/* Text */}
                            <div
                                className=" flex w-full flex-col items-start gap-2 lg:h-[92px] lg:w-[511.58px]
                    "
                            >
                                <h2
                                    className=" w-full  text-[18px] font-bold leading-[32px] text-white sm:text-[28px] lg:h-9 lg:text-[30px] lg:leading-9
                        "
                                >
                                    Ready to Automate Your Business?
                                </h2>

                                <p
                                    className=" max-w-[503px]  text-[14px] font-normal leading-6 text-[#F1F9F1] sm:text-[16px]
                        "
                                >
                                    Book a free demo today and get the best vending
                                    solution for your business.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT ACTIONS */}
                        <div
                            className="
                    flex
                    w-full
                    flex-col
                    items-stretch
                    gap-3
                    sm:flex-row
                    sm:items-start
                    lg:h-[50px]
                    lg:w-[439px]
                    lg:flex-none
                    lg:gap-4
                "
                        >
                            {/* Book a Demo */}
                            <a href={href}
                                className="
                        group
                        flex
                        h-[50px]
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-md
                        bg-[#018A06]
                        px-6
                        transition-all
                        duration-300
                        hover:bg-[#016F05]
                        sm:w-auto
                        lg:w-[184.81px]
                    "
                            >
                                <FiCalendar
                                    size={20}
                                    strokeWidth={1.7}
                                    className="text-white transition-transform duration-300 group-hover:scale-110"
                                />

                                <span
                                    className="
                            whitespace-nowrap
                            
                            text-[16px]
                            font-medium
                            leading-6
                            text-white
                        "
                                >
                                    Book a Demo
                                </span>
                            </a>

                            {/* Download Brochure */}
                            <a
                                href="/Clover Carte Catalogue.pdf"
                                download
                                className="
                        group
                        box-border
                        flex
                        h-[50px]
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-md
                        border
                        border-[#018A06]
                        bg-transparent
                        px-6
                        transition-all
                        duration-300
                        hover:bg-[#018A06]/10
                        sm:w-auto
                        lg:w-[238px]
                    "
                            >
                                <FiDownload
                                    size={20}
                                    strokeWidth={1.7}
                                    className="
                            text-white
                            transition-transform
                            duration-300
                            group-hover:translate-y-0.5
                        "
                                />

                                <span
                                    className="
                            whitespace-nowrap
                            
                            text-[16px]
                            font-medium
                            leading-6
                            text-white
                        "
                                >
                                    Download Brochure
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            </main>
    )
}
