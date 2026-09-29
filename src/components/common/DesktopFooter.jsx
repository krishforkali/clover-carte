import { footerProductsLink, footerQuickLinks } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'
import { BsHeadset } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa'
import { FiArrowRight, FiClock, FiDownload, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import DunsSeal from '../ifrmae/DunsSeal'

function DesktopFooter({ lionLogo, logo }) {
    return (
        <footer className="w-full hidden lg:block bg-[#110F0D] border-t-2 border-dashed border-[#018A06] mt-20">

            <div className="mx-auto w-full max-w-[1440px] px-[50px] pt-[36px] pb-[20px]">


                <div className="flex flex-col gap-[16px]">

                    <div className="flex justify-between">


                        <div className="box-border flex w-[420px] shrink-0 flex-col items-start gap-[23px] border-r border-[#C1E2C2] pr-[24px]">


                            <div className="flex w-[395px] flex-col gap-[20px]">

                                <div className="flex h-[114px] w-[395px] items-center gap-[24px]">


                                    <div className="flex h-[74px] w-[74px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                                        <Image
                                            src={logo}
                                            alt="CloverCarte"
                                            width={74}
                                            height={74}
                                            className="h-[74px] w-[74px] object-contain"
                                        />
                                    </div>


                                    <div className="flex h-[114px] w-[296px] flex-col items-start gap-[8px]">
                                        <h3 className="w-full text-[20px] font-semibold leading-[26px] text-[#018A06]">
                                            Company Overview
                                        </h3>

                                        <p className="w-full text-[14px] font-normal leading-[20px] text-white">
                                            India's custom smart vending machine manufacturer,
                                            delivering intelligent automation, OEM/ODM manufacturing,
                                            and connected retail solutions.
                                        </p>
                                    </div>
                                </div>

                                {/* Need Help */}
                                <div className="flex w-[395px] flex-col items-start gap-[11px]">

                                    <div className="flex w-[296px] flex-col items-start gap-[8px]">

                                        <div className="flex h-[32px] w-[296px] items-center justify-center gap-[10px]">
                                            <div className="flex h-[32px] w-[32px] items-center justify-center text-[#018A06]">
                                                <BsHeadset size={28} />
                                            </div>

                                            <h3 className="flex-1 text-[20px] font-semibold leading-[31px] text-[#018A06]">
                                                Need Help?
                                            </h3>
                                        </div>

                                        <p className="w-full text-[14px] font-normal leading-[20px] text-white">
                                            We are here to assist you!
                                        </p>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex h-[52px] w-[395px] items-center gap-[16px]">

                                        {/* Contact Us */}
                                        <a
                                            href="/contact-us"
                                            className="box-border flex h-[52px] w-[180px] items-center justify-center gap-[4px] rounded-[8px] border-2 border-[#018A06] px-0 py-[16px] transition-colors hover:bg-[#018A06]"
                                        >
                                            <span className="text-[14px] font-medium leading-[27px] text-white">
                                                Contact Us
                                            </span>

                                            <FiArrowRight
                                                size={24}
                                                className="text-white"
                                            />
                                        </a>

                                        {/* Download Brochure */}
                                        <a
                                            href="/Clover Carte Catalogue.pdf"
                                            download
                                            className="box-border flex h-[52px] w-[198px] items-center justify-center gap-[4px] rounded-[8px] border border-[#018A06] bg-[#018A06] px-[5px] py-[19px] transition-opacity hover:opacity-90"
                                        >
                                            <span className="text-[14px] font-medium leading-[27px] text-white">
                                                Download Brochure
                                            </span>

                                            <FiDownload
                                                size={24}
                                                className="text-white"
                                            />
                                        </a>
                                    </div>
                                </div>

                                {/* Social */}
                                <div className="flex h-[25px] w-[301px] items-start gap-[16px]">

                                    <span className="flex h-[25px] w-[81px] items-center text-[14px] font-normal leading-[20px] text-white">
                                        Follow us:
                                    </span>

                                    <div className="flex h-[24px] w-[204px] items-center gap-[12px]">

                                        <a
                                            href="https://www.facebook.com/Clovercarte"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Facebook"
                                        >
                                            <Image width={30} height={30} alt="Clover Carte Facebook" src="/images/social/fb.png" />
                                            {/* <SocialIcon.facebook size="24px" /> */}
                                        </a>

                                        <a
                                            href="https://www.instagram.com/clovercarte/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Instagram"
                                        >
                                            <Image width={30} height={30} alt="Clover Carte Instagram" src="/images/social/ista.png" />
                                        </a>

                                        <a
                                            href="https://x.com/clovercarte"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="X"
                                        >
                                            <Image width={30} height={30} alt="Clover Carte Twitter" src="/images/social/twtr.png" />
                                            {/* <SocialIcon.twitter size="18px" /> */}
                                        </a>

                                        <a
                                            href="https://www.linkedin.com/company/clovercarte"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                        >

                                            <Image width={30} height={30} alt="Clover Carte Liinkdin" src="/images/social/lnk.png" />
                                            {/* <SocialIcon.linkdin size="24px" /> */}
                                        </a>

                                        <a
                                            href="https://www.youtube.com/@clovercarte"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="YouTube"
                                        >
                                            <Image width={30} height={30} alt="Clover Carte Youtube" src="/images/social/ytb.png" />
                                        </a>

                                        <a
                                            href="https://in.pinterest.com/clovercarte/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Pinterest"
                                            className="bg-white rounded-full"
                                        >
                                            <Image width={30} height={30} alt="Clover Carte Pintrest" src="/images/social/pint.png" />
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* =====================================================
                            COLUMN 2 - QUICK LINKS
                        ====================================================== */}
                        <div className="box-border flex h-[304px] w-[156px] shrink-0 flex-col items-start gap-[16px] border-r border-[#C1E2C2] pr-[24px]">

                            <h3 className="flex h-[36px] w-[132px] items-center text-[20px] font-medium leading-[30px] text-[#018A06]">
                                Quick Links
                            </h3>

                            <div className="flex w-[132px] flex-col gap-[12px]">

                                {footerQuickLinks.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.path}
                                        className="flex h-[24px] w-[132px] items-start gap-[2px] group"
                                    >
                                        <IoIosArrowForward
                                            size={24}
                                            className="shrink-0 text-[#018A06] transition-transform group-hover:translate-x-1"
                                        />

                                        <span className="flex h-[24px] items-center whitespace-nowrap text-[14px] font-medium leading-[20px] text-white transition-colors group-hover:text-[#018A06]">
                                            {item.label}
                                        </span>
                                    </a>
                                ))}

                            </div>
                        </div>


                        {/* =====================================================
                            COLUMN 3 - PRODUCTS
                        ====================================================== */}
                        <div className="box-border flex h-[307px] w-[225px] shrink-0 flex-col items-start gap-[20px] border-r border-[#C1E2C2] pr-[24px]">

                            <div className="flex w-[150px] flex-col items-start gap-[16px]">

                                <h3 className="flex h-[36px] w-[150px] items-center text-[20px] font-medium leading-[30px] text-[#018A06]">
                                    Products
                                </h3>

                                <div className="flex w-[150px] flex-col items-end gap-[12px]">

                                    {footerProductsLink.map((product) => (
                                        <a
                                            key={product.label}
                                            href={product.path}
                                            className="group flex h-[25px] w-[150px] items-center justify-center gap-[10px]"
                                        >
                                            <IoIosArrowForward
                                                size={24}
                                                className="shrink-0 text-[#018A06] transition-transform group-hover:translate-x-1"
                                            />

                                            <span className="flex h-[25px] flex-1 items-center whitespace-nowrap text-[14px] font-medium leading-[20px] text-white transition-colors group-hover:text-[#018A06]">
                                                {product.label}
                                            </span>
                                        </a>
                                    ))}

                                </div>
                            </div>

                            <a
                                href="https://app.vendicarte.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-[25px] whitespace-nowrap text-[20px] font-medium leading-[25px] text-[#018A06] hover:opacity-80"
                            >
                                VendiCarte Software
                            </a>
                        </div>


                        {/* =====================================================
                            COLUMN 4 - CONTACT INFO
                        ====================================================== */}
                        <div className="flex h-[301px] w-[263px] shrink-0 flex-col items-start gap-[16px] pr-[24px]">

                            <h3 className="flex h-[36px] w-[239px] items-center text-[20px] font-medium leading-[30px] text-[#018A06]">
                                Contact Info
                            </h3>

                            <div className="flex w-[239px] flex-col gap-[16px]">

                                {/* Address */}
                                <div className="flex h-[42px] w-[239px] items-start gap-[8px]">
                                    <FiMapPin
                                        size={24}
                                        strokeWidth={1.5}
                                        aria-hidden="true"
                                        className="mt-[1px] shrink-0 text-[#018A06]"
                                    />

                                    <p className="flex h-[42px] w-[217px] items-center text-[14px] font-normal leading-[20px] text-white">
                                        A-27, MIDC Bhagimari, Saoner, Nagpur (MH),441107
                                    </p>
                                </div>

                                {/* Email */}
                                <div className="flex w-[239px] flex-col gap-[12px]">

                                    <div className="flex h-[25px] w-[239px] items-center gap-[16px]">
                                        <FiMail
                                            size={24}
                                            strokeWidth={1.5}
                                            aria-hidden="true"
                                            className="shrink-0 text-[#018A06]"
                                        />

                                        <a
                                            href="mailto:contact@clovercarte.com"
                                            className="flex h-[25px] w-[225px] items-center text-[14px] font-normal leading-[20px] text-white hover:text-[#018A06]"
                                        >
                                            contact@clovercarte.com
                                        </a>
                                    </div>
                                    <div className="flex gap-4">
                                    <div className='space-y-3' >
                                        {/* Phone 1 */}
                                        <div className="flex h-[24px]  items-center gap-[16px]">
                                            <FiPhone
                                                size={24}
                                                strokeWidth={1.5}
                                                aria-hidden="true"
                                                className="shrink-0 text-[#018A06]"
                                            />

                                            <a
                                                href="tel:+918839153737"
                                                className="flex h-[20px] text-nowrap items-center text-[14px] font-normal leading-[20px] text-white hover:text-[#018A06]"
                                            >
                                                +91-8839153737
                                            </a>
                                        </div>

                                        {/* Phone 2 */}
                                        <div className="flex h-[24px]  items-center gap-[16px]">
                                            <FiPhone
                                                size={24}
                                                strokeWidth={1.5}
                                                aria-hidden="true"
                                                className="shrink-0 text-[#018A06]"
                                            />

                                            <a
                                                href="tel:+917499645927"
                                                className="flex h-[20px] text-nowrap items-center text-[14px] font-normal leading-[20px] text-white hover:text-[#018A06]"
                                            >
                                                +91-7499645927
                                            </a>
                                        </div>

                                        {/* WhatsApp */}
                                        <div className="flex h-[24px]  items-center gap-[16px]">
                                            <FaWhatsapp
                                                size={20}
                                                aria-hidden="true"
                                                className="shrink-0 text-[#018A06]"
                                            />

                                            <a
                                                href="https://wa.me/917499645927"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-[20px] text-nowrap items-center text-[14px] font-normal leading-[20px] text-white hover:text-[#018A06]"
                                            >
                                                +91-7499645927
                                            </a>
                                        </div>
                                    </div>
                                      <DunsSeal />
                                    </div>

                                </div>

                               

                                {/* Business Hours */}
                                <div className="flex h-[42px] w-[239px] items-start gap-[16px]">

                                    <FiClock
                                        size={24}
                                        strokeWidth={2}
                                        aria-hidden="true"
                                        className="mt-[1px] shrink-0 text-[#018A06]"
                                    />

                                    <p className="flex h-[42px] w-[223px] items-center text-[14px] font-normal leading-[20px] text-white">
                                        Mon - Sat
                                        <br />
                                        10:30 - 6:30 pm IST
                                    </p>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="h-0 w-full border-t border-[#C1E2C2]" />


                    <div className="flex h-[28px] w-full items-center justify-between ">

                        {/* Copyright */}
                        <div className="flex h-[20px]  items-center">
                            <span className="text-[14px] font-light leading-[20px] text-white">
                                @2026 CloverCarte. All Right Reserved
                            </span>
                        </div>

                        {/* Made in India */}
                        <div className="flex h-[28px] items-center gap-[8px]">

                            <div className="flex h-[28px] w-[55px] items-center justify-center overflow-hidden">
                                <Image
                                    src={lionLogo}
                                    alt="Made in India"
                                    width={100}
                                    height={100}
                                    className=" object-contain"
                                />
                            </div>

                            <span className="flex h-[20px] w-[320px] items-center text-[14px] font-medium leading-[20px] text-white">
                                Proudly Designed & Manufactured in India
                            </span>
                        </div>

                        {/* Legal Links */}
                        <div className="flex h-[20px] items-center gap-[12px]">

                            <a
                                href="/privacy"
                                className="text-[14px] font-light leading-[20px] text-white hover:text-[#018A06]"
                            >
                                Privacy Policy
                            </a>

                            <span className="text-white">|</span>

                            <a
                                href="/term"
                                className="text-[14px] font-light leading-[20px] text-white hover:text-[#018A06]"
                            >
                                Terms & Conditions
                            </a>

                            <span className="text-white">|</span>

                            <a
                                href="/"
                                className="text-[14px] font-light leading-[20px] text-white hover:text-[#018A06]"
                            >
                                Cookie Policy
                            </a>

                            <span className="text-white">|</span>

                            <a
                                href="/sitemap.xml"
                                className="text-[14px] font-light leading-[20px] text-white hover:text-[#018A06]"
                            >
                                Sitemap
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default DesktopFooter