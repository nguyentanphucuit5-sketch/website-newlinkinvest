"use client";

import Image from "next/image";

const logos = Array.from({ length: 8 }, (_, i) => ({
  src: `/uploads/images/tuyendung/lg-tuyendung${i + 1}.png`,
  alt: `Logo tuyển dụng ${i + 1}`,
}));

export default function LogoTuyenDung() {
  return (
    <section className="mt-6 md:mt-10">
      {/* line trên FULL width */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[1px] bg-[#D4C081]" />

      {/* logo giữ trong container */}
      <div className="max-w-[1240px] mx-auto px-2">
        {/* MOBILE: slider vuốt ngang */}
        <div
          className="
            md:hidden
            overflow-x-auto
            -mx-4 px-4 py-3
            whitespace-nowrap
            scroll-smooth
            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          <div className="flex items-center gap-6">
            {logos.map((item) => (
              <div key={item.src} className="shrink-0">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={320}
                  height={120}
                  className="h-22 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* TABLET/DESKTOP: như cũ */}
        <div className="hidden md:block py-3">
          <div className="flex items-center justify-center gap-2 lg:gap-4 flex-wrap">
            {logos.map((item) => (
              <div key={item.src} className="shrink-0">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={300}
                  className="h-20 md:h-24 lg:h-28 w-auto object-contain"
                  sizes="(max-width: 768px) 180px, 260px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* line dưới FULL width */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[1px] bg-[#D4C081]" />
    </section>
  );
}
