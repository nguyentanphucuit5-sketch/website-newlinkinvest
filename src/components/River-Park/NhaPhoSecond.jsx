"use client";
import React, { useRef, useEffect } from "react";
import NP1 from "../../assets/RiverPark/NP1.png";
import NP2 from "../../assets/RiverPark/NP2.png";
import NP3 from "../../assets/RiverPark/NP3.png";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const NhaPhoSecond = () => {
  const titleRef = useRef(null);
  const townRef = useRef(null);
  const infoRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img1MobileRef = useRef(null);
  const img3MobileRef = useRef(null);

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
  }, []);

  useGSAP(() => {
    // Animation for title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for town
    gsap.fromTo(
      townRef.current,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: townRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for info
    gsap.fromTo(
      infoRef.current,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for img1 (desktop)
    gsap.fromTo(
      img1Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: img1Ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for img1Mobile
    gsap.fromTo(
      img1MobileRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: img1MobileRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for img2
    gsap.fromTo(
      img2Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: img2Ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for img3 (desktop)
    gsap.fromTo(
      img3Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: img3Ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for img3Mobile
    gsap.fromTo(
      img3MobileRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: img3MobileRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="w-full h-full max-w-[1440px] mx-auto pt-10 relative px-2">
      <div className="max-w-[1000px] mx-auto">
        <p
          ref={titleRef}
          className="text-[24px] md:text-[32px] bg-clip-text text-transparent font-1ftv-nillota"
          style={{
            backgroundImage: "linear-gradient(to bottom, #007A7C 0%, #04F7FB 80%)",
          }}
        >
          Nhà phố liền kề
        </p>
        <div className="space-x-4 flex">
          <p ref={townRef} className="text-[#A97C50]">
            TOWN
            <br /> HOUSE
          </p>
          <div
            ref={infoRef}
            className="border-l-2 pl-5 border-[#A97C50] max-w-[400px] space-y-3"
          >
            <p>
              Thiết kế sang trọng và hiện đại, mang đến không gian sống, làm việc
              tiện nghi và thoải mái, là lựa chọn hoàn hảo cho những chủ nhân
              năng động và tinh tế.
            </p>
            <p>
              Diện tích đất: <span className="font-bold">90m²</span>
            </p>
            <p>
              Diện tích xây dựng: <span className="font-bold">152,8m²</span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-20 right-0 hidden md:block">
        <div className="relative">
          <Image
            ref={img1Ref}
            src={NP1}
            alt="River Park NP1 - NewLink Investment"
            width={700}
            height={400} // Adjust based on image aspect ratio
            className="w-[700px]"
          />
          <div className="absolute -bottom-72 -left-10">
            <Image
              ref={img3Ref}
              src={NP3}
              alt="River Park NP3 - NewLink Investment"
              width={600}
              height={340} // Adjust based on image aspect ratio
              className="w-[600px]"
            />
          </div>
        </div>
      </div>
      <div className="pt-20">
        <Image
          ref={img1MobileRef}
          src={NP1}
          alt="River Park NP1 - NewLink Investment"
          width={700}
          height={400} // Adjust based on image aspect ratio
          className="w-[700px] md:hidden"
        />
        <Image
          ref={img2Ref}
          src={NP2}
          alt="River Park NP2 - NewLink Investment"
          width={600}
          height={340} // Adjust based on image aspect ratio
          className="w-[600px]"
        />
        <Image
          ref={img3MobileRef}
          src={NP3}
          alt="River Park NP3 - NewLink Investment"
          width={600}
          height={340} // Adjust based on image aspect ratio
          className="w-[600px] md:hidden"
        />
      </div>
    </div>
  );
};

export default NhaPhoSecond;