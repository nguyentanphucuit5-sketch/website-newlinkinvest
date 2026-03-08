"use client";
import React, { useRef, useEffect } from "react";
import TTA2 from "../../assets/RiverPark/TTA2.png";
import TTA3 from "../../assets/RiverPark/TTA3.png";
import TTA4 from "../../assets/RiverPark/TTA4.png";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ThanhToSecond = () => {
  const mainRef = useRef(null);
  const tta4Ref = useRef(null);
  const tta3Ref = useRef(null);
  const tta4MobileRef = useRef(null);
  const tta3MobileRef = useRef(null);

  // Refresh ScrollTrigger after images load
  useEffect(() => {
    const images = document.querySelectorAll("img");
    const loadedImages = Array.from(images).map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) resolve();
          else img.onload = resolve;
        })
    );

    Promise.all(loadedImages).then(() => {
      ScrollTrigger.refresh();
    });

    // Fallback: Refresh after 5 seconds if images don't load
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  useGSAP(() => {
    // Animation for main (TTA2)
    gsap.fromTo(
      mainRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: mainRef.current,
          scroller: typeof window !== "undefined" ? window : null, // Ensure window is used as scroller
          start: "top 85%",
          toggleActions: "play none none none",
          markers: true, // Remove in production
          invalidateOnRefresh: true, // Recalculate on refresh
        },
      }
    );

    // Animation for tta4 (desktop)
    gsap.fromTo(
      tta4Ref.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: tta4Ref.current,
          scroller: typeof window !== "undefined" ? window : null,
          start: "top 85%",
          toggleActions: "play none none none",
          markers: true, // Remove in production
          invalidateOnRefresh: true,
        },
      }
    );

    // Animation for tta3 (desktop)
    gsap.fromTo(
      tta3Ref.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: tta3Ref.current,
          scroller: typeof window !== "undefined" ? window : null,
          start: "top 90%",
          toggleActions: "play none none none",
          markers: true, // Remove in production
          invalidateOnRefresh: true,
        },
      }
    );

    // Animation for tta4Mobile
    gsap.fromTo(
      tta4MobileRef.current,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: tta4MobileRef.current,
          scroller: typeof window !== "undefined" ? window : null,
          start: "top 90%",
          toggleActions: "play none none none",
          markers: true, // Remove in production
          invalidateOnRefresh: true,
        },
      }
    );

    // Animation for tta3Mobile
    gsap.fromTo(
      tta3MobileRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: tta3MobileRef.current,
          scroller: typeof window !== "undefined" ? window : null,
          start: "top 90%",
          toggleActions: "play none none none",
          markers: true, // Remove in production
          invalidateOnRefresh: true,
        },
      }
    );
  }, []);

  return (
    <div className="w-full h-full flex max-w-[1440px] mx-auto pt-10 md:pt-20 px-2">
      <div className="w-full h-full relative">
        <div>
          <Image
            src={TTA2}
            alt="Thành Tòa 2"
            width={900}
            height={600} // Adjust based on image aspect ratio
            className="w-[900px] max-w-full"
            ref={mainRef}
            priority={true} // Prioritize loading for above-the-fold image
          />
          <Image
            src={TTA4}
            alt="Thành Tòa 4"
            width={700}
            height={400} // Adjust based on image aspect ratio
            className="w-[700px] max-w-full md:hidden pt-2 scale-x-[-1]"
            ref={tta4MobileRef}
          />
          <Image
            src={TTA3}
            alt="Thành Tòa 3"
            width={700}
            height={160} // Match specified height
            className="w-[700px] h-[160px] max-w-full md:hidden pt-2"
            ref={tta3MobileRef}
          />
          <div className="w-full max-w-[900px] pt-5 hidden md:block">
            <div className="w-full flex justify-end">
              <Image
                src={TTA4}
                alt="Thành Tòa 4"
                width={700}
                height={400} // Adjust based on image aspect ratio
                className="w-[700px] max-w-full"
                ref={tta4Ref}
              />
            </div>
          </div>
        </div>
        <div className="absolute top-40 right-0 hidden md:block">
          <Image
            src={TTA3}
            alt="Thành Tòa 3"
            width={700}
            height={160} // Match specified height
            className="w-[700px] max-w-full"
            ref={tta3Ref}
          />
        </div>
      </div>
    </div>
  );
};

export default ThanhToSecond;
