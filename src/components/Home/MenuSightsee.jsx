import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MenuSightsee = ({ onExploreClick }) => {
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.from(btnRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 2, // Delay khớp với NicOverview
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="relative px-2">
      <div className="flex h-full items-end">
        <button
          ref={btnRef}
          onClick={onExploreClick}
          className="bg-gradient-to-r from-[#FAD48A] via-[#FFF5BE] to-[#FAD48A] px-3 md:px-5 py-2 text-black rounded-[55px] font-utm-avo-bold text-[12px] md:text-[16px] cursor-pointer"
        >
          THAM QUAN DỰ ÁN
        </button>
      </div>
    </div>
  );
};

export default MenuSightsee;
