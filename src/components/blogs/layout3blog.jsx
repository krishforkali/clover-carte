import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiClock, FiCalendar } from "react-icons/fi";
import BlogArticleIntro from "./BlogArticleIntro";
import RequestQuoteButton from "../common/RequestQuoteButton";
import FAQAccordion from "../common/FAQAccordion";

export default function Layout3blog({blog}) {
    const faqs = [
        {question:"What is a coffee vending machine?",answer:"A coffee vending machine is an automated beverage machine that allows users to select and purchase coffee or other beverages through a self-service system."},
        {question:"Is a coffee vending machine suitable for offices?",answer:"Yes. Coffee vending machines are suitable for offices because they provide employees and visitors with convenient access to beverages without requiring a traditional beverage counter."},
        {question:"What is the difference between a tea coffee vending machine and a regular coffee machine?",answer:"A tea coffee vending machine can provide multiple beverage choices through an automated self-service system, whereas a regular coffee machine may primarily focus on coffee preparation and can require more manual operation."},
        {question:"Why choose Clover Carte for vending solutions?",answer:"Clover Carte provides smart vending solutions designed for modern businesses and different installation environments. Its solutions can help organizations adopt automated retail and beverage-serving experiences."},
    ]
    return (
        <main className="w-full px-6 md:px-10 lg:px-12 space-y-12 mt-12">
            <section className="w-full ">
                <div className=" mx-auto flex w-full max-w-[1248px] flex-col items-center gap-8 lg:flex-row lg:gap-6 ">

                    <div className=" flex w-full flex-col items-start gap-3 lg:w-[636px] ">

                        <div className=" flex h-[28px] items-center justify-center rounded-[4px] border-[1.125px] border-[#C1E2C2] bg-[#F1F9F1] px-[9px] py-1 ">
                            <span className="  text-[12px] font-bold uppercase leading-[18px] tracking-[1px] text-[#018A06] ">
                                Machines
                            </span>
                        </div>
                        <div className="flex w-full flex-col gap-8">
                            <div className="flex w-full flex-col gap-[23px]">
                                <div className="flex w-full flex-col justify-center gap-3">
                                    <div className="">
                                    <h1 className=" w-full  text-[36px] font-bold leading-[46px] text-[#0F0F0F] md:text-[42px] md:leading-[53px] lg:text-[48px] lg:leading-[60px] ">
                                        Caftina Coffee Vending Machine, By Clover Carte :
                                    </h1>
                                    <h2 className=" w-full  text-[28px] font-bold leading-[46px] text-green md:text-[28px] md:leading-[28px] lg:text-[30px] lg:leading-[40px] ">
                                       Smart, Convenient Coffee for Modern Workspaces
                                    </h2>
                                    </div>

                                    <p className=" w-full  text-[16px] font-normal leading-6 text-[#5F5F5F] md:text-[18px] lg:text-[20px] text-justify">
                                        A smart beverage vending solution designed to provide quick,
                                        convenient tea and coffee access across office, commercial
                                        spaces, institutions and high-footfall locations{" "}
                                    </p>
                                </div>
                                <div className=" flex flex-wrap items-center gap-5 md:gap-6 ">
                                    <div className="flex items-center gap-2">
                                        <FiClock
                                            className="h-6 w-6 text-[#5F5F5F]"
                                            strokeWidth={1.7}
                                        />
                                        <span className="  text-[14px] font-normal leading-5 text-[#5F5F5F] ">
                                            6 Min Read
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FiCalendar
                                            className="h-6 w-6 text-[#5F5F5F]"
                                            strokeWidth={1.7}
                                        />
                                        <span className="  text-[14px] font-normal leading-5 text-[#5F5F5F] ">
                                            August 14, 2026{" "}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex w-full flex-col gap-4 sm:flex-row sm:gap-6 ">
                                <Link
                                    href="/products/caftina"
                                    className=" flex h-[67px] w-full items-center justify-center gap-3 rounded-[9.778px] bg-[#018A06] px-8 py-5 transition-opacity hover:opacity-90 "
                                >
                                    <span className="  text-[18px] font-semibold leading-[27px] text-white md:text-[20px] ">
                                        Explore Caftina
                                    </span>
                                    <FiArrowRight
                                        className="h-[22px] w-[22px] text-white"
                                        strokeWidth={1.8}
                                    />
                                </Link>{" "}
                                <RequestQuoteButton label="Request a Quote" className={` flex h-[67px] w-full items-center justify-center rounded-[9.778px] border text-green -bold border-[#018A06] px-8 py-5 transition-colors hover:bg-[#F1F9F1] `} />
                                
                            </div>{" "}
                        </div>{" "}
                    </div>{" "}
                    {/* Right Image */}{" "}
                    <div className=" relative h-[300px] w-full overflow-hidden rounded-lg sm:h-[400px] lg:h-[498px] lg:w-[588px] lg:shrink-0 ">
                        {" "}
                        <Image
                            src={blog.image.url?.trim()}
                            alt="Caftina Coffee Vending Machine"
                            fill
                            priority
                            className="object-cover"
                        />{" "}
                    </div>{" "}
                </div>
            </section>
            <BlogArticleIntro />
            <FAQAccordion faqs={faqs}/>
        </main>
    );
}
