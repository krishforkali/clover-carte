"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

function Hero() {
  const [current, setCurrent] = useState(1);

  const slides = [

    {
      id: 2,
      type: "custom",
      title: "Imagine It. We Build It. You Sell It.",
      subtitle:
        "Clover Carte designs and manufactures custom smart vending machines tailored to your products, your brand, and your retail environment.",
      image: "https://res.cloudinary.com/ds4hqamlq/image/upload/v1790137733/df84930664d78c3b5bd3266975f26c8de872bb79_1_tepleu.jpg",
    },
    {
      id: 1,
      type: "automatic",
      image: "https://res.cloudinary.com/ds4hqamlq/image/upload/v1790137538/9ab0af8eea7b94e9feb1886e7a7fdb4837e9a1be_1_arnf4x.jpg",
    },
  ];

  useEffect(() => {
      const timer = setInterval(() => {
          setCurrent((prev) => (prev + 1) % slides.length);
      }, 5000);

      return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative mt-2 mb-10 w-full overflow-hidden bg-white">
      <div className="relative min-h-[760px] lg:min-h-[580px]">

        {/* =====================================================
                    SLIDE 1
                ====================================================== */}
   <div
          className={`transition-all pt-4 duration-700 ease-in-out ${current === 0
              ? "opacity-100 relative translate-x-0"
              : "opacity-0 absolute inset-0 translate-x-10 pointer-events-none"
            }`}
        >

         <section className="relative mx-auto h-[600px] w-full max-w-[1248px] overflow-hidden">
    {/* Background Image */}
    <Image
        src="https://res.cloudinary.com/ds4hqamlq/image/upload/v1790137538/9ab0af8eea7b94e9feb1886e7a7fdb4837e9a1be_1_arnf4x.jpg"
        alt="Automatic Vending Machine Manufacturer - CloverCarte"
        fill
        priority
        sizes="(max-width: 1280px) 100vw, 1248px"
        className="object-cover"
    />

    {/* Content */}
    <div className="absolute left-[96px] top-[96px]">
        {/* Heading */}
        <h2 className="flex flex-col w-[421px] items-start  text-[48px] font-bold leading-[60px] text-[#018A06]">
            Automatic <span className="text-white" >Vending Machine Manufacturer</span> 
        </h2>

        {/* Subtitle */}
        <p className="mt-[24px] flex w-[408px] items-center  text-[24px] font-semibold leading-[28px] text-white">
            Innovative | Reliable | Customizable
        </p>

        {/* CTA */}
        <a
            href="/contact-us"
            className="mt-[48px] flex h-[64px] w-[317px] items-center justify-center rounded-[4.8855px] bg-[#018A06] px-[24px] py-[12px]  text-[20px] font-semibold leading-[34px] text-white transition-colors duration-200 hover:bg-[#016F05]"
        >
            Build Your Custom Machine
        </a>
    </div>
</section>

        </div>
      


        {/* =====================================================
                    SLIDE 2
                ====================================================== */}

       <div
  className={`transition-all duration-700 ease-in-out ${
    current === 1
      ? "opacity-100 relative translate-x-0"
      : "opacity-0 absolute inset-0 translate-x-10 pointer-events-none"
  }`}
>
  <div className="min-h-[760px] lg:min-h-[600px] flex items-center">

    <div className="max-w-[1248px] mx-auto px-5 lg:px-0 w-full">

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-[25px]">

        {/* LEFT */}
        <div className="w-full lg:w-[562px] lg:h-[510px] flex flex-col justify-between gap-10 lg:gap-0 text-center lg:text-left">

          <div className="flex flex-col gap-6">

            <p className="uppercase font-bold text-[14px] sm:text-[16px] lg:text-[20px] leading-[80%]">
              <span className="text-[#0F0F0F]">
                Custom Built.
              </span>{" "}
              <span className="text-[#F58E05]">
                Smarter By Design.
              </span>
            </p>

            <div className="flex flex-col gap-4">

              <h2 className="font-extrabold uppercase text-[#0F0F0F] text-[34px] sm:text-[42px] lg:text-[45px] leading-[1.15] lg:leading-[62px]">
                Imagine It.
                <br />

                <span className="text-[#018A06]">
                  We Build It.
                </span>

                <br />

                You Sell It.
              </h2>

              <p className="text-black font-semibold text-[16px] sm:text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px]">
                Built for Your Brand. Designed for Your Business.
              </p>

              <p className="text-[#5F5F5F] font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[26px] lg:leading-[28px]">
                Clover Carte creates custom smart vending machines tailored to your products, brand, and business needs. From design to functionality, we build vending solutions that make automated retail smarter, faster, and more convenient.
              </p>

            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-[34px]">

            <a
              href="/contact-us"
              className="w-full sm:w-auto lg:w-[309px] h-[56px] lg:h-[59px] bg-[#018A06] rounded-[4.8855px] flex items-center justify-center text-white text-[16px] lg:text-[20px] font-semibold hover:bg-[#017505] transition"
            >
              Build Your Custom Machine
            </a>

            <a
              href="/products"
              className="w-full sm:w-auto lg:w-[218px] h-[56px] lg:h-[59px] border-2 border-[#018A06] rounded-[4.8855px] flex items-center justify-center text-[16px] lg:text-[20px] font-semibold hover:bg-[#018A06] hover:text-white transition"
            >
              Explore Machines
            </a>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div
          className="
            relative
            w-full
            max-w-[661px]
            h-[400px]
            sm:h-[500px]
            lg:w-[661px]
            lg:h-[510px]
            flex-shrink-0
          "
        >
          <Image
            src="https://res.cloudinary.com/ds4hqamlq/image/upload/v1790137733/df84930664d78c3b5bd3266975f26c8de872bb79_1_tepleu.jpg"
            alt="Smart Vending Machine"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 661px"
            className="
              object-cover
              rounded-[4px]
              shadow-[8px_8px_12px_rgba(1,138,6,0.2)]
            "
          />
        </div>

      </div>

    </div>

  </div>
</div>



      </div>
    </section>
  );
}

export default Hero;