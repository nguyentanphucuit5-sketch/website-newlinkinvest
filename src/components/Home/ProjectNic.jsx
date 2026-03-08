import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import linhvuc from "../../assets/images/linhvuc.png";
import ItemField from "./ItemField";

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ProjectNic = () => {
  const containerRef = useRef(null);
  const imageDesktopRef = useRef(null);
  const imageMobileRef = useRef(null);
  const headingRef = useRef(null);
  const itemFieldRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        defaults: { ease: "power2.out", duration: 1 },
      });

      tl.from([imageDesktopRef.current, imageMobileRef.current], {
        x: -50,
        opacity: 0,
      })
        .from(headingRef.current, { y: 40, opacity: 0 }, "-=0.5")
        .from(itemFieldRef.current, { y: 20, opacity: 0 }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#09303D] -mt-20 md:-mt-24 relative z-50"
    >
      <div className="max-w-[1240px] mx-auto py-5 px-4">
        <div className="flex space-x-5 flex-col md:flex-row">
          <Image
            ref={imageDesktopRef}
            src={linhvuc}
            alt="New Link Investment - Lĩnh Vực"
            className="hidden md:block"
          />
          <div className="space-y-3 flex flex-col justify-center">
            <h2
              ref={headingRef}
              className="text-center md:text-start text-[20px] md:text-[32px] font-utm-avo bg-gradient-to-t from-[#FAD48A] via-[#FFF5BE] to-[#D9B770] bg-clip-text text-transparent"
            >
              LĨNH VỰC
              <br className="hidden md:block" /> HOẠT ĐỘNG
            </h2>
            <Image
              ref={imageMobileRef}
              src={linhvuc}
              alt="New Link Investment - Lĩnh Vực"
              className="block md:hidden"
            />
            <div ref={itemFieldRef}>
              <ItemField />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectNic;
