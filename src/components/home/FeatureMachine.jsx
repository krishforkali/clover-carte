"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedMachines({ m_products = [] }) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (!marquee || m_products.length === 0) return;

    let startX = 0;
    let startTranslateX = 0;
    let isDragging = false;
    let resumeTimer;

    // Get current X position of the marquee
    const getTranslateX = () => {
      const style = window.getComputedStyle(marquee);
      const matrix = new DOMMatrix(style.transform);

      return matrix.m41;
    };

    // Pause automatic scrolling
    const pauseMarquee = () => {
      clearTimeout(resumeTimer);

      marquee.style.animationPlayState = "paused";
      marquee.classList.add("is-dragging");
    };

    // Resume automatic scrolling
    const resumeMarquee = () => {
      clearTimeout(resumeTimer);

      resumeTimer = setTimeout(() => {
        marquee.classList.remove("is-dragging");
        marquee.style.animationPlayState = "running";
      }, 1500);
    };

    // User starts dragging
    const handlePointerDown = (e) => {
      isDragging = true;

      startX = e.clientX;
      startTranslateX = getTranslateX();

      pauseMarquee();

      marquee.setPointerCapture(e.pointerId);
    };

    // User moves finger/mouse
    const handlePointerMove = (e) => {
      if (!isDragging) return;

      const currentX = e.clientX;
      const difference = currentX - startX;

      let newTranslateX = startTranslateX + difference;

      /*
       * The second copy starts at roughly 50%.
       * Prevent the user from dragging beyond the
       * duplicated content.
       */
      const maxTranslate = -(marquee.scrollWidth / 2);

      // Prevent moving past the beginning
      if (newTranslateX > 0) {
        newTranslateX = 0;
      }

      // Prevent moving past the duplicated content
      if (newTranslateX < maxTranslate) {
        newTranslateX = maxTranslate;
      }

      marquee.style.transform = `translateX(${newTranslateX}px)`;
    };

    // User releases
    const handlePointerUp = (e) => {
      if (!isDragging) return;

      isDragging = false;

      try {
        marquee.releasePointerCapture(e.pointerId);
      } catch (error) {
        // Ignore pointer capture errors
      }

      resumeMarquee();
    };

    marquee.addEventListener("pointerdown", handlePointerDown);
    marquee.addEventListener("pointermove", handlePointerMove);
    marquee.addEventListener("pointerup", handlePointerUp);
    marquee.addEventListener("pointercancel", handlePointerUp);

    return () => {
      clearTimeout(resumeTimer);

      marquee.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      marquee.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      marquee.removeEventListener(
        "pointerup",
        handlePointerUp
      );

      marquee.removeEventListener(
        "pointercancel",
        handlePointerUp
      );
    };
  }, [m_products]);

  if (!m_products?.length) {
    return null;
  }

  return (
    <div className="flex w-full flex-col items-center gap-4">

      {/* Heading */}
      <h2 className="w-full text-center text-[24px] font-semibold leading-[30px] text-[#0F0F0F]">
        Featured Machines
      </h2>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">

     

       

        <div
          ref={marqueeRef}
          className="
            machine-marquee
            flex
            w-max
            gap-3
            select-none
          "
        >


          {m_products.map((machine) => (
            <div
              key={`first-${machine.slug}`}
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
              <div
                className="
                  relative
                  h-[242px]
                  w-full
                  overflow-hidden
                  rounded-[12px_12px_0_0]
                "
              >
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-cover"
                  sizes="248px"
                  draggable={false}
                />
              </div>

              {/* Content */}
              <div className="flex h-[140px] w-full flex-col gap-4">

                {/* Machine Information */}
                <div className="flex h-[76px] w-full flex-col gap-1">

                  <h3 className="w-full text-[16px] font-bold leading-6 text-[#0F0F0F]">
                    {machine.name}
                  </h3>

                  <p className="w-full text-[16px] font-normal leading-6 text-[#5F5F5F]">
                    {machine.subtitle}
                  </p>

                </div>

                {/* Button */}
                <Link
                  href={`/products/${machine.slug}`}
                  draggable={false}
                  onPointerDown={(e) => e.stopPropagation()}
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


          {/* ========================= */}
          {/* DUPLICATE SET */}
          {/* ========================= */}

          {m_products.map((machine) => (
            <div
              key={`second-${machine.slug}`}
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
              <div
                className="
                  relative
                  h-[242px]
                  w-full
                  overflow-hidden
                  rounded-[12px_12px_0_0]
                "
              >
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-cover"
                  sizes="248px"
                  draggable={false}
                />
              </div>

              {/* Content */}
              <div className="flex h-[140px] w-full flex-col gap-4">

                {/* Machine Information */}
                <div className="flex h-[76px] w-full flex-col gap-1">

                  <h3 className="w-full text-[16px] font-bold leading-6 text-[#0F0F0F]">
                    {machine.name}
                  </h3>

                  <p className="w-full text-[16px] font-normal leading-6 text-[#5F5F5F]">
                    {machine.subtitle}
                  </p>

                </div>

                {/* Button */}
                <Link
                  href={`/products/${machine.slug}`}
                  draggable={false}
                  onPointerDown={(e) => e.stopPropagation()}
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

        </div>
      </div>
    </div>
  );
}