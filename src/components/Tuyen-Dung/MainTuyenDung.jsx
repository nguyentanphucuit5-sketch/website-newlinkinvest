"use client";
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

const MainTuyenDung = () => {
  useEffect(() => {
    gsap.from(".animate-line", {
      y: -24,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: "power3.out",
      clearProps: "transform,opacity",
    });
  }, []);

  // đổi đúng đuôi file của bạn
  const bnSrc = "/uploads/images/tuyendung/bn-tuyendung1.jpg";

  // --- responsive gap + resize ---
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const GAP = isMobile ? 14 : 18;

  // --- đo kích thước khung mosaic để cắt LIỀN MẠCH ---
  const mosaicRef = useRef(null);
  const [mSize, setMSize] = useState({ w: 560, h: 520 });

  useLayoutEffect(() => {
    if (!mosaicRef.current) return;
    const el = mosaicRef.current;

    const update = () => {
      const r = el.getBoundingClientRect();
      setMSize({ w: Math.round(r.width), h: Math.round(r.height) });
    };

    const ro = new ResizeObserver(update);
    ro.observe(el);
    update();

    return () => ro.disconnect();
  }, []);

  // --- tỉ lệ layout giống mẫu ---
  const LEFT_RATIO = 0.44; // cột trái
  const TOP_RATIO = 0.40;  // hàng trên

  const dims = useMemo(() => {
    const w = mSize.w;
    const h = mSize.h;

    const leftW = Math.round((w - GAP) * LEFT_RATIO);
    const rightW = w - GAP - leftW;

    const topH = Math.round((h - GAP) * TOP_RATIO);
    const bottomH = h - GAP - topH;

    return { leftW, rightW, topH, bottomH };
  }, [mSize.w, mSize.h, GAP]);

  // --- PAN để chỉnh “ảnh số 1” đúng mẫu (kéo ảnh xuống, có thể chỉnh thêm) ---
  const PAN_X = 0;
  const PAN_Y = 60; // tăng/giảm 20~80 để khớp ảnh mẫu

  // helper style cho 3 img (cùng 1 ảnh, cùng size => liền mạch)
  const baseImgStyle = {
    width: `${mSize.w}px`,
    height: `${mSize.h}px`,
    objectFit: "cover",
    position: "absolute",
    left: 0,
    top: 0,
    willChange: "transform",
  };

  return (
    <section className="w-full font-utm-avo">
      <div className="max-w-[1240px] mx-auto px-4 py-10 md:py-14">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_560px]">
          {/* LEFT TEXT (fix font đậm/nhạt) */}
          <div className="max-w-[650px] space-y-4">
            <div className="animate-line">
              <h1 className="text-[26px] md:text-[48px] font-utm-avo-bold font-extrabold
                bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%]
                bg-clip-text text-transparent">
                NEWLINK TUYỂN DỤNG
              </h1>
            </div>

            <div className="animate-line">
              <p className="font-utm-avo-bold italic text-[14px] md:text-[17px]
              bg-gradient-to-t from-[#FAD48A] via-[#FFF5BE] to-[#D9B770]
              bg-clip-text text-transparent">
                Môi trường hiện đại – Đãi ngộ hấp dẫn – Đa dạng nghề nghiệp
              </p>
            </div>

            <div className="animate-line">
              <p className="text-[12px] md:text-[14px] text-white/80 leading-relaxed">
                <span className="font-utm-avo-bold">NEWLINK </span> mang đến môi trường làm việc chuyên nghiệp, năng động cùng <br />
                chương trình đào tạo toàn diện về bán hàng, marketing, xây dựng thương
                hiệu<br /> cá nhân và kiến thức chuyên sâu các dự án BĐS hot.
              </p>
            </div>

            <div className="animate-line">
              <p className="text-[12px] md:text-[14px] text-white/80 leading-relaxed">
                Với chính sách đãi ngộ cực hấp dẫn, thu nhập cạnh tranh và hệ thống vị trí<br />
                đa dạng từ CTV, Chuyên viên kinh doanh đến cấp quản lý, <span className="font-utm-avo-bold">NEWLINK </span> tạo điều
                kiện<br /> để bạn phát triển nhanh chóng và bứt phá thu nhập.
              </p>
            </div>

            <div className="animate-line pt-4">
              <div className="relative inline-block">
                {/* BUTTON (chừa chỗ để label không đè chữ) */}
                <button
                  type="button"
                  className="relative rounded-md border border-[rgba(212,192,129,0.75)]
        px-6 pb-3 pt-5
        text-[12px] md:text-[15px] text-white/90 italic
        bg-transparent"
                  style={{ boxShadow: "none" }}
                >
                  Bắt đầu hành trình thăng tiến khẳng định giá trị bản thân!
                </button>

                {/* LABEL đè lên viền (không đè text) */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2
    px-4 flex items-center gap-3 whitespace-nowrap"
                  style={{ backgroundColor: "#063543" }}
                >

                  <span
                    className="font-utm-avo-bold italic text-[14px] md:text-[18px]
      bg-gradient-to-t from-[#FAD48A] via-[#FFF5BE] to-[#D9B770]
      bg-clip-text text-transparent"
                  >
                    Gia nhập NEWLINK
                  </span>

                 
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT MOSAIC (liền mạch + luôn có ảnh dọc to) */}
          {/* RIGHT MOSAIC (ổn định, không mất ảnh dọc) */}
          <div className="animate-line w-full flex justify-end">
            <div className="td-mosaic">
              <div
                className="td-tile td-tl"
                style={{ backgroundImage: `url(${bnSrc})` }}
              />
              <div
                className="td-tile td-bl"
                style={{ backgroundImage: `url(${bnSrc})` }}
              />
              <div
                className="td-tile td-r"
                style={{ backgroundImage: `url(${bnSrc})` }}
              />
            </div>

            <style jsx>{`
  .td-mosaic{
  --gap: 14px;
  --left: 41fr;
  --right: 59fr;
  --top: 38fr;
  --bottom: 62fr;

  display: grid;
  grid-template-columns: var(--left) var(--right);
  grid-template-rows: var(--top) var(--bottom);
  gap: var(--gap);

  width: 100%;
  max-width: 560px;

  /* ✅ Desktop giữ nguyên như bạn muốn */
  height: 440px;
}

/* ✅ Mobile: tự giảm chiều cao theo width => không vỡ */
@media (max-width: 768px){
  .td-mosaic{
    height: auto;
    aspect-ratio: 560 / 520;  /* giữ đúng tỉ lệ layout gốc */
    max-height: 340px;        /* muốn thấp hơn nữa thì giảm số này (vd 300px) */
  }
}

    .td-tile{
      border-radius: 24px;
      overflow: hidden;
      background-repeat: no-repeat;
      background-color: transparent;
    }

    .td-tl{ grid-column: 1; grid-row: 1; }
    .td-bl{ grid-column: 1; grid-row: 2; }
    .td-r{  grid-column: 2; grid-row: 1 / span 2; }

    /* Cắt 1 ảnh thành 3 phần (cùng ảnh) */
    /* TL: phần trái-trên */
    .td-tl{
      background-size: 217.4% 263.2%; /* = 100/0.46 , 100/0.38 */
      background-position: 0% 0%;
    }

    /* BL: phần trái-dưới */
    .td-bl{
      background-size: 217.4% 161.3%; /* = 100/0.46 , 100/0.62 */
      background-position: 0% 100%;
    }

    /* R: phần phải (ảnh dọc to) */
    .td-r{
      background-size: 185.2% 100%;   /* = 100/0.54 */
      background-position: 100% 50%;
    }
  `}</style>
          </div>
          {/* end right */}
        </div>
      </div>
    </section>
  );
};

export default MainTuyenDung;
