"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Directors } from "@/utils/data";
import clippath from "../../assets/images/clippath.png";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";

const ItemBLD = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const checkBLD = Directors.find((item) => item.link === name);

  // Refs for animation
  const imageContainerRef = useRef(null);
  const roleCardRef = useRef(null);
  const textContainerRef = useRef(null);
  const navLinksRef = useRef([]);
  const listItemsRef = useRef([]);

  useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline();

    // Animate image and role card
    if (imageContainerRef.current) {
      tl.fromTo(
        imageContainerRef.current,
        { y: 50, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out" }
      );
    }
    if (roleCardRef.current) {
      tl.fromTo(
        roleCardRef.current,
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out" },
        "-=0.4"
      );
    }

    // Animate text container (title, description, name)
    if (textContainerRef.current) {
      gsap.fromTo(
        textContainerRef.current.children,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }

    // Animate navigation links
    if (navLinksRef.current.length > 0) {
      gsap.fromTo(
        navLinksRef.current,
        { x: -20, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }

    // Animate list items
    if (listItemsRef.current.length > 0) {
      gsap.fromTo(
        listItemsRef.current,
        { y: 20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }

    // Cleanup on unmount
    return () => {
      tl.kill();
    };
  }, [checkBLD]); // Re-run when checkBLD changes

  return (
    <div className="h-[70vh] flex md:items-center w-full pt-20 md:pt-0 px-2">
      <div className="w-[50%] hidden md:block">
        <div className="flex justify-center relative">
          <div ref={imageContainerRef} className="relative w-[300px]">
            <div className="flex justify-center">
              <Image src={checkBLD?.image} alt={checkBLD?.alt} className="" />
            </div>
            <div ref={roleCardRef} className="absolute inset-0 -bottom-8">
              <div className="flex items-end justify-center -mb-2 md:-mb-4 h-full">
                <div className="bg-gradient-to-r from-[#0C6985] to-[#09303D] px-8 md:px-4 py-2 rounded-2xl flex flex-col items-center justify-center border border-[#E7CE8D]">
                  <p className="text-[14px] md:text-[16px] font-utm-avo-bold w-[200px] text-center">
                    {checkBLD?.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -z-50">
            <Image src={clippath} alt="clippath" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-[50%]">
        <div
          ref={textContainerRef}
          className="md:w-[90%] flex flex-col space-y-5 md:space-y-10"
        >
          <div>
            <h1 className="font-utm-avo text-[24px] md:text-[32px] bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
              Ban Lãnh Đạo NewLink
            </h1>
            <h2 className="font-utm-avo text-[12px] md:text-[14px]">
              Với đội ngũ lãnh đạo tại giàu kinh nghiệm, NewLink luôn nỗ lực
              không ngừng để mang lại những giá trị bền vững cho các nhà đầu tư,
              khách hàng và cộng đồng.
            </h2>
          </div>
          <div className="font-utm-avo flex space-x-2 md:space-x-5 border-b-[0.1px] border-[#536E77] pb-4">
            {Directors.map((item, index) => (
              <div key={item.id}>
                <Link
                  href={`/ban-lanh-dao?name=${item.link}`}
                  className={`text-[12px] md:text-[16px] ${
                    item.link === checkBLD?.link ? "font-utm-avo-bold" : ""
                  }`}
                  ref={(el) => (navLinksRef.current[index] = el)}
                >
                  {item.role}
                </Link>
              </div>
            ))}
          </div>
          <div className="space-y-5">
            <p className="font-utm-avo text-center md:text-start text-[32px] md:text-[48px] bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
              {checkBLD?.name}
            </p>
            <div className="w-[70%] mx-auto pb-10 block md:hidden">
              <div className="flex justify-center relative">
                <div ref={imageContainerRef} className="relative w">
                  <Image
                    src={checkBLD?.image}
                    alt={checkBLD?.alt}
                    className=""
                  />
                  <div ref={roleCardRef} className="absolute inset-0 -bottom-8">
                    <div className="flex items-end justify-center -mb-2 md:-mb-4 h-full">
                      <div className="bg-gradient-to-r from-[#0C6985] to-[#09303D] px-8 md:px-4 py-2 rounded-2xl flex flex-col Goldsmiths-center justify-center border border-[#E7CE8D]">
                        <p className="text-[14px] md:text-[16px] font-utm-avo-bold w-[200px] text-center">
                          {checkBLD?.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -z-50">
                  <Image src={clippath} alt="NewLink Investment" />
                </div>
              </div>
            </div>
            <ul className="space-y-3 font-utm-avo text-[14px] list-image-[url('/li.png')] pl-4">
              {checkBLD?.li.map((techstack, index) => (
                <li
                  key={techstack}
                  ref={(el) => (listItemsRef.current[index] = el)}
                  dangerouslySetInnerHTML={{ __html: techstack }}
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBLD;
