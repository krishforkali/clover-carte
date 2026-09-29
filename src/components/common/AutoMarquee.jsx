"use client";

import { useEffect, useRef, useState } from "react";

export default function AutoMarquee({
  children,
  speed = 30,
  gap = 12,
  className = "",
}) {
  const trackRef = useRef(null);
  const firstGroupRef = useRef(null);

  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const calculateDistance = () => {
      if (!firstGroupRef.current) return;

      const width = firstGroupRef.current.offsetWidth;

      setDistance(width + gap);
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, [gap, children]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let startX = 0;
    let startTranslateX = 0;
    let isDragging = false;
    let resumeTimer;

    const getTranslateX = () => {
      const style = window.getComputedStyle(track);
      const matrix = new DOMMatrix(style.transform);

      return matrix.m41;
    };

    const pause = () => {
      clearTimeout(resumeTimer);

      track.style.animationPlayState = "paused";
      track.classList.add("is-dragging");
    };

    const resume = () => {
      clearTimeout(resumeTimer);

      resumeTimer = setTimeout(() => {
        track.classList.remove("is-dragging");
        track.style.animationPlayState = "running";
      }, 1500);
    };

    const handlePointerDown = (e) => {
      isDragging = true;

      startX = e.clientX;
      startTranslateX = getTranslateX();

      pause();

      track.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e) => {
      if (!isDragging) return;

      const difference = e.clientX - startX;

      const newTranslateX =
        startTranslateX + difference;

      track.style.transform =
        `translate3d(${newTranslateX}px, 0, 0)`;
    };

    const handlePointerUp = (e) => {
      if (!isDragging) return;

      isDragging = false;

      try {
        track.releasePointerCapture(e.pointerId);
      } catch {}

      resume();
    };

    track.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    track.addEventListener(
      "pointermove",
      handlePointerMove
    );

    track.addEventListener(
      "pointerup",
      handlePointerUp
    );

    track.addEventListener(
      "pointercancel",
      handlePointerUp
    );

    return () => {
      clearTimeout(resumeTimer);

      track.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      track.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      track.removeEventListener(
        "pointerup",
        handlePointerUp
      );

      track.removeEventListener(
        "pointercancel",
        handlePointerUp
      );
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">

      {/* Moving Track */}
      <div
        ref={trackRef}
        className={`auto-marquee-track ${className}`}
        style={{
          "--marquee-distance": `${distance}px`,
          "--marquee-speed": `${speed}s`,
          gap: `${gap}px`,
        }}
      >

        {/* First Group */}
        <div
          ref={firstGroupRef}
          className="auto-marquee-group"
          style={{
            gap: `${gap}px`,
          }}
        >
          {children}
        </div>

        {/* Duplicate Group */}
        <div
          className="auto-marquee-group"
          style={{
            gap: `${gap}px`,
          }}
        >
          {children}
        </div>

      </div>
    </div>
  );
}
