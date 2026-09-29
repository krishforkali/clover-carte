import { aboutFeatures, aboutWorkflowSteps } from '@/utils/helper';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import aboutHeroImage from "../../assets/images/abt_1.webp";
import aboutImage_2 from "../../assets/images/abt_2.jpg";

export default function M_About() {
    return (
        <section className="w-full px-4 space-y-12 ">
            {/* Hero Section */}
            <div className="flex w-full flex-col items-start gap-[18px]">
                {/* Image */}
                <div className="relative h-[270.75px] w-full overflow-hidden rounded-xl">
                    <Image
                        src={aboutHeroImage}
                        alt="Clover Carte smart vending solutions"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 361px, 361px"
                    />
                </div>

                {/* Content */}
                <div className="flex w-full flex-col items-start gap-3">
                    {/* Heading */}
                    <h1 className="w-full  text-[24px] font-bold leading-[30px] text-[#0F0F0F]">
                        Engineering the <span className="text-green"> Future of Automated Retail</span>
                    </h1>

                    {/* Description */}
                    <p className="w-full  text-[16px] tracking-tight font-normal leading-[20px] text-[#5F5F5F]">
                        Clover Carte designs and manufactures custom smart
                        vending machines for India's FMCG and retail sectors.
                        From engineering and manufacturing to cloud-connected
                        software, we build intelligent vending solutions
                        tailored to every business.
                    </p>
                </div>
            </div>

            {/* Engeering Section */}

            <div className="flex w-full flex-col items-start gap-5">
                {/* Introduction */}
                <div className="flex w-full flex-col items-start gap-3">
                    <h2 className="w-full  text-[24px] font-bold leading-[30px] text-[#0F0F0F]">
                        We <span className="text-green">Engineer.</span><br /> <span className="text-green">We</span> Don't Just Assemble.
                    </h2>

                    <p className="w-full  text-[16px] font-normal leading-[20px] text-[#5F5F5F]">
                        Our philosophy is rooted in end-to-end engineering.<br/> We
                        design, fabricate, and integrate every component
                        in-house ensuring complete cohesion between the
                        hardware, software, and the intelligence that drives
                        it.
                    </p>
                </div>

                {/* Feature Cards Slider */}
                <div className=" flex w-full gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none " >
                    {aboutFeatures.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <article key={feature.title} className=" box-border flex h-[197px] min-w-[361px] snap-start flex-col items-start justify-center rounded-2xl border border-[#C1E2C2] bg-white p-3 "
                            >
                                <div className="flex w-full flex-col items-start gap-3">
                                    {/* Icon */}
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center text-[#018A06]">
                                        <Icon
                                            size={24}
                                            strokeWidth={2}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex w-full flex-col items-start gap-3">
                                        <h3 className="w-full  text-[20px] font-semibold leading-8 text-[#018A06]">
                                            {feature.title}
                                        </h3>

                                        <p className="w-full  text-[16px] font-normal leading-[22px] text-[#0F0F0F]">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>

            {/* Workflow Section */}

            <div className="flex w-full flex-col items-start gap-4 py-2">
                {/* Section Header */}
                <div className="flex w-full flex-col items-start gap-2">
                    <span className=" w-full text-[12px] font-medium leading-4 tracking-[0.6px] text-[#5F5F5F] " >
                        PROCESS // METHODOLOGY
                    </span>

                    <h2 className=" w-full text-[24px] font-bold leading-8 text-[#018A06] " >
                        The Engineering Workflow
                    </h2>
                </div>

                {/* Workflow Steps */}
                <div className="flex w-full flex-col items-start gap-3">
                    {aboutWorkflowSteps.map((step, index) => {
                        const isLast = index === aboutWorkflowSteps.length - 1;

                        return (
                            <div key={step.number} className={` box-border flex w-full items-start gap-4 ${isLast ? "h-[80px]" : "h-[93px] border-b border-[#F1F9F1] pb-3"} `} >
                                {/* Step Number */}
                                <span className=" shrink-0 font-['Inter'] text-[24px] font-bold leading-8 tracking-[-0.24px] text-[#C1E2C2] " >
                                    {step.number}
                                </span>

                                {/* Step Content */}
                                <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
                                    <h3 className=" w-full text-[20px] font-semibold leading-7 text-[#0F0F0F] " >
                                        {step.title}
                                    </h3>

                                    <p className=" w-full text-[16px] font-normal leading-6 text-[#5F5F5F] " >
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Mission & Vision Section */}

            <div className="flex w-full flex-col items-start gap-4">
                {/* Mission */}
                <div className=" flex w-full flex-col items-start gap-3 rounded-xl border border-[#C1E2C2] bg-[#F1F9F1] p-3 " >
                    <span className=" w-full text-[12px] font-bold uppercase leading-4 text-[#169B3B] " >
                        Mission
                    </span>
                    <p className=" w-full text-[16px] italic font-normal leading-6 text-[#0F0F0F] " >
                        To help India's most iconic FMCG brands reach their
                        consumers anywhere, anytime through intelligent branded
                        vending channels that operate 24×7 without manpower.
                    </p>
                </div>

                {/* Vision */}
                <div className=" flex w-full flex-col items-end gap-3 rounded-xl border border-[#C1E2C2] bg-[#F1F9F1] p-3 " >
                    <span className=" w-full text-right text-[12px] font-bold uppercase leading-4 text-[#F58E05] " >
                        Vision
                    </span>
                    <p className=" w-full text-right text-[16px] italic font-normal leading-6 text-[#0F0F0F] " >
                        To become India's most trusted smart vending
                        manufacturer powering the next generation of automated
                        retail across every industry and every consumer
                        touchpoint in India.
                    </p>
                </div>
            </div>

            {/* India Manufacturing Section */}

            <div className="flex w-full flex-col items-start gap-4">
                {/* Manufacturing Image */}
                <div className="relative h-[289px] w-full overflow-hidden rounded-xl">
                    <Image
                        src={aboutImage_2}
                        alt="Clover Carte manufacturing facility in India"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 361px, 361px"
                    />
                </div>

                {/* Content */}
                <div className="flex w-full flex-col items-start gap-3 px-1">
                    <h2 className=" w-full text-[24px] font-bold leading-[30px] text-[#018A06] " >
                        Proudly Engineered &amp; Manufactured in India.
                    </h2>
                    <p className=" w-full text-[16px] font-normal leading-[24px] text-[#0F0F0F] " >
                        Our manufacturing facility is based in Nagpur,
                        Maharashtra operating under Shree Padmavati Techsolution
                        Pvt. Ltd. Every Clover Carte machine is designed,
                        assembled, tested, and dispatched from our facility
                        built to handle the demands of real-world Indian
                        environments with vandal-resistant MS body panels,
                        power fluctuation tolerance, and cloud-connected
                        sensors running round the clock.
                    </p>
                </div>
            </div>

            {/* CTA Section */}

            <div className="flex w-full flex-col items-center justify-center gap-5">
                {/* Heading */}
                <h2
                    className=" w-full text-center text-[24px] font-bold leading-[30px] text-[#018A06] "
                >
                    Let&apos;s Build Your Next<br /> Retail Experience.
                </h2>

                {/* Buttons */}
                <div className="flex w-full flex-col items-start justify-center gap-3">
                    {/* Contact Us */}
                    <a href='products' type="button" className=" flex h-[52px] w-full items-center justify-center rounded-[4px] bg-[#018A06] text-[20px] font-semibold leading-[27px] text-white transition-opacity active:opacity-80 " > Explore Our Machines </a>

                    {/* Request a Demo */}
                    <a href='contact-us' type="button" className=" flex h-[52px] w-full items-center justify-center gap-2 rounded-[4px] border border-[#018A06] px-[44px] py-5 text-[20px] font-semibold leading-[27px] text-[#0F0F0F] transition-colors active:bg-[#F1F9F1] " >
                        <span>Get In Touch</span>

                        <FiArrowUpRight
                            size={22}
                            strokeWidth={1.8}
                        />
                    </a>
                </div>
            </div>
        </section>

    )
}
