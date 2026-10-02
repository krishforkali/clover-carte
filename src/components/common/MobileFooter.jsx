import Image from 'next/image'
import React from 'react'
import {  FiClock,  FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import MobileFooterAccordion from './MobileFooterAccordion'
import DunsSeal from '../ifrmae/DunsSeal'


function MobileFooter({ lionLogo, logo }) {
    return (
        <footer className="block lg:hidden w-full bg-[#110F0D] border-t-2 border-dashed border-[#018A06] mt-12">

            <div className="w-full px-3 pt-5 pb-6">
                <div className="flex flex-col ">



                    {/* Company Name */}
                    <h3 className=" text-[22px] font-semibold leading-[28px] text-[#018A06]">
                        CLOVER CARTE
                    </h3>

                    <p className="mt-3 max-w-[520px] text-[16px] font-normal leading-[20px] text-white">
                        India's custom smart vending machine manufacturer,
                        delivering intelligent automation, OEM/ODM manufacturing,
                        and connected retail solutions.
                    </p>
                </div>

                <div className="flex flex-row items-center  gap-2 py-2">
                    <div className="flex p-0 items-center justify-center overflow-hidden bg-white" >
                        <Image src={lionLogo} alt="Made in India" width={73} height={67} className="object-contain" />
                    </div>



                    <div className="border-l border-white pl-2">
                        <span className="text-[12px] font-semibold leading-[20px] text-white">
                            Proudly Designed & Manufactured in India
                        </span></div>

                </div>

                <div className="mt-4 flex flex-row gap-2 item-center">

                    <span className="text-[16px] leading-[20px] text-white">
                        Find us on:
                    </span>

                    <div className=" flex items-center gap-4">


                        <a
                            href="https://www.facebook.com/Clovercarte" target="_blank" rel="noopener noreferrer" aria-label="Facebook" >
                            <Image width={24} height={24} alt="Clover Carte Facebook" src="/images/social/fb.webp" />
                            {/* <SocialIcon.facebook size="24px" /> */}
                        </a>

                        <a href="https://www.instagram.com/clovercarte/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" >
                            <Image width={24} height={24} alt="Clover Carte Instagram" src="/images/social/ista.webp" />
                        </a>

                        <a href="https://x.com/clovercarte" target="_blank" rel="noopener noreferrer" aria-label="X" >
                            <Image width={24} height={24} alt="Clover Carte Twitter" src="/images/social/twtr.webp" />
                            {/* <SocialIcon.twitter size="18px" /> */}
                        </a>

                        <a href="https://www.linkedin.com/company/clovercarte" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" >

                            <Image width={24} height={24} alt="Clover Carte Liinkdin" src="/images/social/lnk.webp" />
                            {/* <SocialIcon.linkdin size="24px" /> */}
                        </a>

                        <a href="https://www.youtube.com/@clovercarte" target="_blank" rel="noopener noreferrer" aria-label="YouTube" >
                            <Image width={24} height={24} alt="Clover Carte Youtube" src="/images/social/ytb.webp" />
                        </a>

                        <a href="https://in.pinterest.com/clovercarte/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="bg-white rounded-full" >
                            <Image width={24} height={24} alt="Clover Carte Pintrest" src="/images/social/pint.webp" />
                        </a>

                    </div>
                </div>


                <MobileFooterAccordion />


                <div className="mt-8">

                    <h3 className="text-[20px] font-medium leading-[30px] text-[#018A06]">
                        Contact Info
                    </h3>

                    <div className="mt-4 flex flex-col gap-4">

                        {/* Address */}
                        <div className="flex items-start gap-3">
                            <FiMapPin size={23} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#018A06]" />

                            <p className="text-[14px] leading-[20px] text-white">
                                A-27, MIDC Bhagimari, Saoner,
                                Nagpur (MH), 441107
                            </p>
                        </div>


                        {/* Email */}
                        <div className="flex items-center gap-3">
                            <FiMail size={23} strokeWidth={1.5} className="shrink-0 text-[#018A06]" />

                            <a
                                href="mailto:contact@clovercarte.com"
                                className="text-[14px] leading-[20px] text-white hover:text-[#018A06]"
                            >
                                contact@clovercarte.com
                            </a>
                        </div>
                        <div className="flex gap-10">
                        <div className="space-y-3">
                        {/* Phone */}
                        <div className="flex items-center gap-3">
                            <FiPhone
                                size={23}
                                strokeWidth={1.5}
                                className="shrink-0 text-[#018A06]"
                            />

                            <a
                                href="tel:+918839153737"
                                className="text-[14px] leading-[20px] text-white hover:text-[#018A06]"
                            >
                                +91-8839153737
                            </a>
                        </div>


                        {/* Phone */}
                        <div className="flex items-center gap-3">
                            <FiPhone
                                size={23}
                                strokeWidth={1.5}
                                className="shrink-0 text-[#018A06]"
                            />

                            <a
                                href="tel:+917499645927"
                                className="text-[14px] leading-[20px] text-white hover:text-[#018A06]"
                            >
                                +91-7499645927
                            </a>
                        </div>


                        {/* WhatsApp */}
                        <div className="flex items-center gap-3">
                            <FaWhatsapp
                                size={21}
                                className="shrink-0 text-[#018A06]"
                            />

                            <a
                                href="https://wa.me/917499645927"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] leading-[20px] text-white hover:text-[#018A06]"
                            >
                                +91-7499645927
                            </a>
                        </div>
                        </div>
                        <DunsSeal/>
                        </div>


                        {/* Business Hours */}
                        <div className="flex items-start gap-3">
                            <FiClock
                                size={23}
                                strokeWidth={2}
                                className="mt-0.5 shrink-0 text-[#018A06]"
                            />

                            <p className="text-[14px] leading-[20px] text-white">
                                Mon - Sat
                                <br />
                                10:30 - 6:30 pm IST
                            </p>
                        </div>

                    </div>
                </div>


                <div className="my-7 h-px w-full bg-[#C1E2C2]" />

                <div className="mt-5 text-center">
                    <span className="text-[13px] font-light leading-[20px] text-white">
                        @2026 CloverCarte. All Right Reserved
                    </span>
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-center">

                    <a
                        href="/privacy"
                        className="text-[13px] font-light leading-[20px] text-white hover:text-[#018A06]"
                    >
                        Privacy Policy
                    </a>

                    <span className="text-white">|</span>

                    <a
                        href="/term"
                        className="text-[13px] font-light leading-[20px] text-white hover:text-[#018A06]"
                    >
                        Terms & Conditions
                    </a>

                    <span className="text-white">|</span>

                    <a
                        href="/"
                        className="text-[13px] font-light leading-[20px] text-white hover:text-[#018A06]"
                    >
                        Cookie Policy
                    </a>

                    <span className="text-white">|</span>

                    <a
                        href="/sitemap.xml"
                        className="text-[13px] font-light leading-[20px] text-white hover:text-[#018A06]"
                    >
                        Sitemap
                    </a>

                </div>

            </div>
        </footer>
    )
}

export default MobileFooter