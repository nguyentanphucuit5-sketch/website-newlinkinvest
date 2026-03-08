"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { TuyenDung } from "@/utils/data";
import FormTD from "./FormTD";

const GRAD_TEXT =
  "bg-gradient-to-t from-[#FAD48A] via-[#FFF5BE] to-[#D9B770] bg-clip-text text-transparent";

const LINE_COLOR = "bg-[rgba(212,192,129,0.45)]";

function splitToLis(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;

  return String(value)
    .replaceAll("<br />", "\n")
    .replaceAll("<br/>", "\n")
    .replaceAll("<br>", "\n")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function BulletBlock({
  title,
  value,
  showDivider = false,
  splitLi = true, // ✅ true: <br> => tách nhiều <li> | false: <br> => xuống dòng trong 1 <li>
}) {
  if (!value) return null;

  // ✅ chế độ tách nhiều <li>
  const lines = splitLi ? splitToLis(value) : ["__single__"];
  if (!lines.length) return null;

  return (
    <div className="mt-4">
      <div className="font-utm-avo-bold text-white italic text-[13px] md:text-[14px]">
        {title}
      </div>

      <ul className="mt-2 list-disc list-outside pl-5 space-y-1 text-white/90 text-[12px] md:text-[13px] leading-relaxed marker:text-white">
        {splitLi ? (
          lines.map((t, idx) => (
            <li key={idx}>{t.replace(/^•\s?/, "")}</li>
          ))
        ) : (
          // ✅ 1 <li> duy nhất, cho phép <br /> xuống dòng "có nghĩa"
          <li
            dangerouslySetInnerHTML={{
              __html: String(value).replace(/^•\s?/, ""),
            }}
          />
        )}
      </ul>

      {showDivider && <div className="mt-4 h-px w-full bg-white/30" />}
    </div>
  );
}


function JobSection({
  item,
  imageLeft,
  onApply,
  priority = false,
  showTopLine = false,
  className = "", // ✅ thêm để nhận -mt
  hideLastDivider = false,
  isLast = false,
}) {
  return (
    <section className={`w-full overflow-visible ${className}`}>
      <div className="max-w-[1240px] mx-auto px-4 relative overflow-visible">
        {/* line trên chỉ block đầu */}
        {showTopLine && <div className={`h-px ${LINE_COLOR}`} />}

        {/* content */}
        <div className="pt-10 md:pt-14 pb-10 md:pb-14">
          <div
            className={`grid items-center gap-10 md:gap-14 ${imageLeft ? "md:grid-cols-[560px_1fr]" : "md:grid-cols-[1fr_560px]"
              }`}
          >
            {/* IMAGE */}
            <div
              className={`relative overflow-visible z-10 ${imageLeft ? "" : "md:order-2"
                }`}
            >
              <Image
                src={item.image}
                alt={item.role}
                priority={priority}
                className={`
                  relative z-10 w-auto object-contain origin-bottom
                  h-[360px] md:h-[600px] lg:h-[500px]
                  ${isLast ? "scale-[1.15] md:scale-[1.22] translate-y-0 md:translate-y-6"
                    : "scale-[1.35] md:scale-[1.42] translate-y-10 md:translate-y-36"}
                `}
              />
            </div>

            {/* CONTENT */}
            <div className={`${imageLeft ? "" : "md:order-1"}`}>
              <h3
                className={`font-utm-avo-bold text-[18px] md:text-[26px] ${GRAD_TEXT}`}
              >
                {item.role}
              </h3>

              {/* 1) Mô tả công việc (nếu có) - tách nhiều bullet */}
              {item.mcv && (
                <BulletBlock
                  title={item.mcvTitle || "Mô tả công việc"}
                  value={item.mcv}
                  showDivider={true}
                  splitLi={true}
                />
              )}

              {/* 2) Yêu cầu - ✅ cho phép <br/> xuống dòng trong 1 bullet */}
              <BulletBlock
                title={item.ycTitle || "Yêu cầu"}
                value={item.yc}
                showDivider={true}
                splitLi={(item.id === 4 || item.id === 5)}
              />

              {/* 3) Quyền lợi - tách nhiều bullet */}
              <BulletBlock
                title={item.qlTitle || "Quyền Lợi Và Chế Độ Đãi Ngộ"}
                value={item.ql}
                showDivider={Boolean(item.mt)} // mt có thì ql mới có line
                splitLi={true}
              />

              {/* 4) Môi trường - ✅ 1 bullet + <br/> trong cùng <li>, và luôn tắt line */}
              {item.mt && (
                <BulletBlock
                  title={item.mtTitle || "Môi Trường"}
                  value={item.mt}
                  showDivider={false}
                  splitLi={false}
                />
              )}


              <div className="mt-6">
                <button
                  onClick={onApply}
                  className="inline-flex items-center justify-center rounded-full
                    bg-gradient-to-r from-[#FAD48A] via-[#FFF5BE] to-[#D9B770]
                    px-6 py-3
                    text-[#063543] font-utm-avo-bold text-[12px] md:text-[14px]
                    cursor-pointer select-none"
                >
                  Ứng Tuyển Ngay
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* line dưới */}
        <div
          className={`absolute left-4 right-4 bottom-0 h-px ${LINE_COLOR} z-0`}
        />
      </div>
    </section>
  );
}

const ItemTuyenDung = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => {
    setSelectedJob(job);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="space-y-10 md:space-y-12">
      {TuyenDung.map((item, index) => {
        const isFirst = index === 0;

        // block đầu: ảnh trái - text phải, các block sau đối nghịch
        const imageLeft = isFirst ? true : index % 2 === 0;
        const isLast = index === TuyenDung.length - 1;
        return (
          <JobSection
            key={item.id ?? index}
            item={item}
            imageLeft={imageLeft}
            onApply={() => openModal(item)}
            priority={isFirst}
            showTopLine={isFirst}
            // ✅ block 2 kéo lên -70px
           className={
              index === 1
                ? "-mt-[30px  md:mt-[50px]"
                : (index === 2 || index === 3 || index === 4)
                ? "-mt-[30px] md:mt-[0px]"
                : ""
            }

            hideLastDivider={item.id === 4 || item.id === 5}
            isLast={isLast}
          />
        );
      })}

      {isOpen && <FormTD closeModal={closeModal} selectedJob={selectedJob} />}
    </div>
  );
};

export default ItemTuyenDung;
