import React from "react";
import fb from "../assets/images/fb.png";
import tiktok from "../assets/images/tiktok.png";
import zalo from "../assets/images/zalo.png";
import Image from "next/image";

const IconFooter = () => {
  return (
    <div className="flex space-x-3">
      <a href="https://id.zalo.me/account?continue=http%3A%2F%2Fzalo.me%2F0909999619" target="_blank" rel="noopener noreferrer">
        <Image src={zalo} alt="Zalo" className="w-6 md:w-8 h-6 md:h-8" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61573089065782" target="_blank" rel="noopener noreferrer">
        <Image src={fb} alt="Facebook" className="w-6 md:w-8 h-6 md:h-8" />
      </a>
      <a href="https://www.tiktok.com/@newlink.investmen0?lang=en" target="_blank" rel="noopener noreferrer">
        <Image src={tiktok} alt="TikTok" className="w-6 md:w-8 h-6 md:h-8" />
      </a>
    </div>
  );
};

export default IconFooter;
