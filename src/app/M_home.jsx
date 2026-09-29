import Image from "next/image";
import Link from "next/link";
import comp_over from "../assets/images/com_over.jpg"
import { features, industries, processSteps, techfeatures } from "@/utils/helper";
import M_home_Hero from "@/components/home/M_home_Hero";
import LatestInsights from "@/components/home/LatestInsight";
import { m_products } from "@/data/m_product";
import FeaturedMachines from "@/components/home/FeatureMachine";
import AutoMarquee from "@/components/common/AutoMarquee";


const platformFeatures = [
  "Fleet Monitoring",
  "Inventory Alerts",
  "Sales Analytics",
  "Cashless Reconciliation",
  "Remote Diagnostics",
];



export default function M_home() {


  return (
    <section className="w-full bg-white px-4   space-y-12">
      {/* Hero Slider */}
      <M_home_Hero />
      {/* Machine Slider */}

      <div className="flex w-full flex-col items-center gap-4">
        {/* Heading */}
        <h2 className="w-full text-center  text-[24px] font-semibold leading-[30px] text-[#0F0F0F]">
          Featured Machines
        </h2>

        {/* Slider */}
        <div
          className="
                        flex
                        w-full
                        gap-3
                        overflow-x-auto
                        pb-1
                        snap-x
                        snap-mandatory
                        scrollbar-none
                    "
        >
          <AutoMarquee speed={25} gap={12} >
          {m_products.map((machine) => (
            <div
              key={machine.slug}
              className="
                                flex
                                w-[280px]
                                min-w-[280px]
                                h-[426px]
                                snap-start
                                flex-col
                                items-start
                                gap-3
                                rounded-2xl
                                border
                                border-[#C1E2C2]
                                bg-white
                                p-4
                            "
            >
              {/* Machine Image */}
              <div className="relative h-[242px] w-full overflow-hidden rounded-[12px_12px_0_0]">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-cover"
                  sizes="248px"
                />
              </div>

              {/* Content */}
              <div className="flex h-[140px] w-full flex-col gap-4">
                {/* Machine Information */}
                <div className="flex h-[76px] w-full flex-col gap-1">
                  <h3 className="w-full  text-[16px] font-bold leading-6 text-[#0F0F0F]">
                    {machine.name}
                  </h3>

                  <p className="w-full  text-[16px] font-normal leading-6 text-[#5F5F5F]">
                    {machine.subtitle}
                  </p>
                </div>

                {/* Button */}
                <Link
                  href={`/products/${machine.slug}`}
                  className="
                                        flex
                                        h-12
                                        w-full
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-[#018A06]
                                        px-0
                                        py-3
                                        
                                        text-[16px]
                                        font-medium
                                        leading-6
                                        text-white
                                    "
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
          </AutoMarquee>
        </div>
      </div>


      {/* Why Clover Carte */}
      <div className="flex w-full flex-col items-center gap-4">

        {/* Section Heading */}
        <h2
          className="  flex  h-[30px]  w-full  items-center  justify-center  text-center    text-[24px]  font-semibold  leading-[30px]  text-[#0F0F0F]"
        >
          Why Clover Carte
        </h2>

        {/* Cards */}
        <div className="grid w-full grid-cols-2 gap-5">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`  box-border  flex  flex-col  items-start  gap-2  rounded-[16px]  border  border-[#C1E2C2]  bg-white  p-4  ${index < 2 ? "min-h-[183px]" : index < 4 ? "min-h-[154px]" : "min-h-[186px]"}`}
              >
                {/* Icon */}
                <div
                  className="  flex  h-[40px]  w-[40px]  shrink-0  items-center  justify-center  rounded-[12px]  bg-[#F1F9F1]"
                >
                  <Icon
                    size={21}
                    strokeWidth={2}
                    className="text-[#018A06]"
                  />
                </div>

                {/* Title */}
                <h3
                  className="  flex  items-center    text-[16px]  font-bold  leading-[24px]  text-[#0F0F0F]"
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className=" flex items-center  text-[16px] font-normal leading-[20px] text-[#5F5F5F] "
                >
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>

      {/* Manufacturing Process */}

      <div className="flex w-full flex-col items-center gap-4">

        <h2
          className="
            flex
            w-full
            items-center
            justify-center
            text-center
            
            text-[24px]
            font-bold
            leading-[30px]
            tracking-[-0.6px]
            text-[#0F0F0F]
            uppercase
          "
        >
          Manufacturing Process
        </h2>

        <p
          className="
            flex
            w-full
            items-center
            justify-center
            text-center
            
            text-[16px]
            font-normal
            leading-[20px]
            text-[#5F5F5F]
          "
        >
          We follow a strict, standardized manufacturing process that ensures
          efficiency, quality control, and timely delivery.
        </p>

      </div>

      {/* Horizontal Process Slider */}
      <div
        className="
          mt-4
          flex
          w-full
          gap-4
          overflow-x-auto
          overflow-y-hidden
          pb-1
          scrollbar-none
        "
      >
         <AutoMarquee speed={25} gap={17} >
        {processSteps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="
                flex
                h-[120px]
                shrink-0
                flex-col
                items-center
                gap-[4px]
              "
            >
              {/* Icon */}
              <div className="flex h-[80px] flex-col items-center pb-4">
                <div
                  className="
                    box-border
                    flex
                    h-[64px]
                    w-[64px]
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-[#018A06]
                    bg-[#F1F9F1]
                  "
                >
                  <Icon
                    size={24}
                    strokeWidth={2}
                    className="text-[#018A06]"
                  />
                </div>
              </div>

              {/* Title */}
              <div
                className="
                  flex
                  min-h-[20px]
                  w-full
                  items-center
                  justify-center
                  text-center
                  
                  text-[14px]
                  font-semibold
                  leading-[20px]
                  tracking-[0.14px]
                  text-[#0F0F0F]
                "
              >
                {step.number} {step.title}
              </div>

              {/* Description */}
              <div
                className="
                  flex
                  min-h-[16px]
                  w-full
                  items-center
                  justify-center
                  text-center
                  
                  text-[12px]
                  font-normal
                  leading-[16px]
                  text-[#5F5F5F]
                "
              >
                {step.description}
              </div>
            </div>
          );
        })}
        </AutoMarquee>
      </div>

      {/* Technology section */}
      <div className="flex w-full flex-col items-center gap-4">

        {/* Section Heading */}
        <h2
          className="
            flex
            h-[32px]
            w-full
            items-center
            justify-center
            text-center
            
            text-[24px]
            font-bold
            leading-[32px]
            text-[#0F0F0F]
            uppercase
          "
        >
          Technology & Features
        </h2>

        {/* Feature Cards */}
        <div className="flex w-full flex-col items-start gap-3">

          {techfeatures.map((feature, index) => {
            const Icon = feature.icon;

            /* --------------------------------
               FEATURED CLOUD MONITORING CARD
            -------------------------------- */
            if (feature.type === "featured") {
              return (
                <div
                  key={index}
                  className="
                    box-border
                    flex
                    h-[167px]
                    w-full
                    flex-col
                    items-start
                    gap-[10px]
                    rounded-[12px]
                    border
                    border-[#C1E2C2]
                    bg-[#F1F9F1]
                    p-3
                  "
                >
                  <div className="flex w-full flex-col gap-4">

                    {/* Title Row */}
                    <div className="flex w-full flex-col gap-2">

                      <div className="flex h-[32px] w-full items-center justify-between">

                        {/* Icon + Title */}
                        <div className="flex h-[32px] items-center gap-2">

                          <div
                            className="
                              flex
                              h-[32px]
                              w-[32px]
                              shrink-0
                              items-center
                              justify-center
                              rounded-[8px]
                              bg-white
                              shadow-[0px_1px_2px_rgba(0,0,0,0.05)]
                            "
                          >
                            <Icon
                              size={22}
                              strokeWidth={2}
                              className="text-[#018A06]"
                            />
                          </div>

                          <h3
                            className="
                              flex
                              h-[28px]
                              items-center
                              
                              text-[16px]
                              font-semibold
                              leading-[28px]
                              text-[#0F0F0F]
                            "
                          >
                            Cloud Monitoring
                          </h3>

                        </div>

                        {/* LIVE Badge */}
                        <div
                          className="
                            flex
                            h-[20px]
                            w-[56px]
                            items-center
                            justify-center
                            gap-1
                            rounded-[19px]
                            bg-[#018A06]
                            px-2
                            py-1
                          "
                        >
                          <span className="h-[6px] w-[6px] rounded-full bg-white" />

                          <span
                            className="
                              
                              text-[10px]
                              font-bold
                              leading-[15px]
                              tracking-[0.5px]
                              text-white
                            "
                          >
                            LIVE
                          </span>
                        </div>

                      </div>

                      {/* Description */}
                      <p
                        className="
                          flex
                          h-[32px]
                          w-full
                          items-center
                          
                          text-[12px]
                          font-normal
                          leading-[16px]
                          text-[#5F5F5F]
                        "
                      >
                        {feature.description}
                      </p>

                    </div>

                    {/* Metrics */}
                    <div className="flex h-[53px] items-center gap-4">

                      {feature.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="
                            box-border
                            flex
                            h-[53px]
                            flex-col
                            items-start
                            rounded-[8px]
                            border
                            border-[#C1E2C2]
                            bg-white
                            px-3
                            py-2
                          "
                        >
                          <span
                            className="
                              h-[15px]
                              
                              text-[10px]
                              font-semibold
                              leading-[15px]
                              text-[#5F5F5F]
                              uppercase
                            "
                          >
                            {metric.label}
                          </span>

                          <span
                            className={`
                              h-[20px]
                              
                              text-[14px]
                              font-bold
                              leading-[20px]
                              ${metric.highlight
                                ? "text-[#018A06]"
                                : "text-[#0F0F0F]"
                              }
                            `}
                          >
                            {metric.value}
                          </span>
                        </div>
                      ))}

                    </div>

                  </div>
                </div>
              );
            }

            /* --------------------------------
               NORMAL FEATURE CARDS
            -------------------------------- */

            return (
              <div
                key={index}
                className={`
                  box-border
                  w-full
                  rounded-[12px]
                  border
                  border-[#C1E2C2]
                  bg-white
                  p-3
                  shadow-[0px_1px_2px_rgba(0,0,0,0.05)]
                  ${feature.title === "Real-Time Analytics"
                    ? "h-[106px]"
                    : feature.title === "Cashless Payments"
                      ? "h-[86px]"
                      : feature.title === "Modular Hardware Systems"
                        ? "h-[128px]"
                        : feature.title === "Inventory Intelligence"
                          ? "h-[110px]"
                          : "h-[90px]"
                  }
                `}
              >
                <div className="flex w-full flex-col gap-2">

                  {/* Icon + Heading */}
                  <div className="flex items-center gap-2">

                    <div
                      className="
                        flex
                        h-[32px]
                        w-[32px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-[8px]
                        bg-[#F1F9F1]
                      "
                    >
                      <Icon
                        size={20}
                        strokeWidth={2}
                        className="text-[#018A06]"
                      />
                    </div>

                    <h3
                      className="
                        
                        text-[16px]
                        font-semibold
                        leading-[20px]
                        tracking-[0.14px]
                        text-[#0F0F0F]
                      "
                    >
                      {feature.title}
                    </h3>

                  </div>

                  {/* Description */}
                  <p
                    className="
                      flex
                      w-full
                      items-center
                      
                      text-[12px]
                      font-normal
                      leading-[20px]
                      text-[#5F5F5F]
                    "
                  >
                    {feature.description}
                  </p>

                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* Industries served */}

      <div className="w-full flex flex-col items-center gap-4">
        {/* =========================
        HEADING
    ========================== */}
        <h2
          className="
            w-full
            h-8
            flex
            items-center
            justify-center
            text-center
            font-bold
            text-[24px]
            leading-[32px]
            uppercase
            text-[#0F0F0F]
        "
        >
          Industries Served
        </h2>

        {/* =========================
        HORIZONTAL INDUSTRY SCROLL
    ========================== */}
        <div
          className="
            w-full
            overflow-x-auto
            overflow-y-hidden
            scrollbar-none
            snap-x
            snap-mandatory
        "
        >
          <div
            className="
                flex
                w-max
                gap-4
                px-1
            "
          >
         <AutoMarquee speed={25} gap={17} >

            {industries.map((industry, index) => (
              <div
                key={index}
                className="
                        relative
                        flex-shrink-0
                        w-[180px]
                        h-[124.6px]
                        overflow-hidden
                        rounded-[12px]
                        bg-[#111]
                        snap-start
                    "
              >
                {/* Background Image */}
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="
                            object-cover
                        "
                  sizes="180px"
                />

                {/* Dark Overlay */}
                <div
                  className="
                            absolute
                            inset-0
                            bg-[rgba(0,0,0,0.4)]
                        "
                />

                {/* Text */}
                <div
                  className="
                            absolute
                            inset-0
                            flex
                            items-end
                            px-3
                            pb-3
                        "
                >
                  <h3
                    className="
                                max-w-[140px]
                                font-bold
                                text-[16px]
                                leading-[20px]
                                uppercase
                                text-white
                            "
                  >
                    {industry.title}
                  </h3>
                </div>
              </div>
            ))}
            </AutoMarquee>
          </div>
        </div>
      </div>

      <section className="w-full ">
        <div className=" relative w-full mx-auto overflow-hidden rounded-[12px] bg-[#0F0F0F] p-3 " >
          {/* Green blurred background */}
          <div className=" pointer-events-none absolute right-0 bottom-0 z-0 h-[176px] w-[176px] rounded-[88px_88px_12px_88px] bg-[rgba(0,107,36,0.2)] blur-[32px] " />

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-4">
            {/* Heading */}
            <h2 className=" flex h-[90px] w-full items-center text-[24px] font-bold leading-[30px] text-white " >
              Run Smarter.<br /> Sell More.<br /> Stress Less.
            </h2>

            {/* Image */}
            <div className=" flex h-[160px] w-full items-center justify-center overflow-hidden rounded-t-[12px] " >
              <Image width={337} height={224}
                src="/images/platform.jpg"
                alt="CloverCarte platform"
                className="
                                h-auto
                                w-full
                                object-cover
                                rounded-t-[8px]
                            "
              />
            </div>

            {/* Feature list */}
            <div className="flex w-full flex-col gap-3">
              {platformFeatures.map((feature) => (
                <div key={feature} className=" box-border flex h-[42px] w-full items-center rounded-[8px] border border-[rgba(189,202,185,0.2)] bg-[rgba(255,255,255,0.1)] px-2 py-2 backdrop-blur-[2px] " >
                  <span className=" w-full text-[16px] font-medium leading-[24px] text-white " > {feature} </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="https://vendicarte.com/" className=" flex h-[56px] w-full items-center justify-center rounded-[12px] bg-[#018A06] px-0 py-4 text-[16px] font-semibold leading-[24px] text-white transition-colors duration-200 hover:bg-[#017505] " >
              Explore Platform
            </Link>
          </div>
        </div>
      </section>

      {/* company Overview */}

      <section className="flex h-[570px] flex-col items-center gap-4 rounded-xl border border-[#C1E2C2] bg-[#F1F9F1] p-3">
        {/* Factory Image */}
        <div className="relative h-[256px] w-full overflow-hidden rounded-xl">
          <Image
            src={comp_over}
            alt="Company Overview"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex w-full flex-col items-start gap-5">
          {/* Heading */}
          <h2 className="h-8 w-full  text-[24px] font-bold leading-8 tracking-[-0.6px] text-[#1C1B1B]">
            COMPANY OVERVIEW
          </h2>

          {/* Paragraph 1 */}
          <p className="h-20 w-full  text-[16px] font-normal leading-5 text-[#3E4A3C]">
            With parts sourced from all over the globe and assembled in our
            state-of-the-art facilities, we provide unmatched manufacturing
            quality and speed.
          </p>

          {/* Paragraph 2 */}
          <p className="h-20 w-full  text-[16px] font-normal leading-5 text-[#3E4A3C] mb-3">
            Our workforce has decades of experience manufacturing complex
            hardware configurations and smart integration systems for top brands
            worldwide.
          </p>

          {/* Button */}
          <button
            type="button"
            className="flex h-11 w-[153px] items-center justify-center rounded-lg bg-[#018A06] px-6 py-3  text-[16px] font-bold leading-5 tracking-[0.14px] text-white"
          >
            LEARN MORE
          </button>
        </div>
      </section>

              <LatestInsights/>
      
    </section>
  );
}




   // <section className="w-full ">
        //     <div className="mx-auto flex w-full  flex-col items-start">
        //         {/* Hero Image */}
        //         <div className="relative flex  w-full items-center justify-center">
        //             <Image
        //                 src="/m_images/home_hero_1.png" 
        //                 alt="CloverCarte Smart Vending Machine"
        //                 width={364}
        //                 height={239}
        //                 priority
        //                 className="h-[200px] w-full object-contain"
        //             />

        //             {/* Eyebrow */}
        //            <div className=" absolute left-1/2 top-0 flex h-[25px] w-[195px] -translate-x-1/2 items-center justify-center rounded-[16px] border border-[#C1E2C2] bg-[#F1F9F1] px-3 py-1 " >
        //                <span className=" whitespace-nowrap text-[12px] font-medium uppercase leading-[18px] text-[#018A06] " > Smart Vending Solutions </span>
        //             </div>
        //         </div>

        //         {/* Content */}
        //         <div className="flex w-full flex-col gap-2">
        //             {/* Heading */}
        //             <div className="flex w-full flex-col items-center ">
        //                 <h1 className=" w-full text-center text-[28px] font-bold leading-[40px] tracking-[-0.8px] text-[#0F0F0F] " > Smart Vending Machine </h1>

        //                <h2 className=" w-full text-center text-[28px] font-semibold leading-[40px] tracking-[-0.8px] text-[#018A06] " > Made in India </h2>
        //             </div>

        //             {/* Description */}
        //           <p className=" flex h-[86px] w-full items-center text-center text-[15px] font-normal leading-[22px] text-[#5F5F5F] " >
        //                 Smart, reliable, and innovative vending solutions
        //                 designed for modern businesses. Automate sales,
        //                 improve convenience, and deliver better experiences
        //                 with Clover Carte.
        //             </p>

        //             {/* Buttons */}
        //             <div className="flex w-full flex-col gap-3">
        //                 {/* Request Demo */}
        //                <Link href="/contact-us" className=" flex h-[52px] w-full items-center justify-center rounded-[8px] bg-[#018A06] px-8 py-4 text-center text-[16px] font-semibold leading-[20px] text-white transition-colors duration-200 hover:bg-[#017505] " >
        //                     Request a Demo
        //                 </Link>

        //                 {/* Explore Machines */}
        //               <Link href="/products" className=" box-border flex h-[54px] w-full items-center justify-center rounded-[8px] border border-[#C1E2C2] bg-white px-8 py-4 text-center text-[16px] font-semibold leading-[20px] text-[#018A06] transition-colors duration-200 hover:bg-[#F1F9F1] " >
        //                     Explore Machines
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </section>