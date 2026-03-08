"use client";
import React, { useEffect, useRef } from "react";
import CH from "../../assets/langomm/CS2.png";
import Image from "next/image";
import gsap from "gsap";

const ChinhSachThanhToanSecond = () => {
  const imageRef = useRef(null);
  const tableRef = useRef(null);
  const containerRef = useRef(null);

  const paymentSchedule = [
    {
      tienDo: "Đợt 1",
      thoiGian: "Đặt cọc",
      soTien: "Khách hàng thanh toán 50,000,000 đồng",
    },
    {
      tienDo: "Đợt 2",
      thoiGian: "Sau 15 ngày kể từ ngày Đặt cọc",
      soTien: "Khách hàng thanh toán 50% GTHĐ (bao gồm cọc)",
    },
    {
      tienDo: "Đợt 3",
      thoiGian: "Sau 30 ngày kể từ Đợt 2",
      soTien: "Khách hàng thanh toán 15% GTHĐ",
    },
    {
      tienDo: "Đợt 4",
      thoiGian: "Sau 30 ngày kể từ Đợt 3",
      soTien: "Khách hàng thanh toán 15% GTHĐ",
    },
    {
      tienDo: "Đợt 5",
      thoiGian: "Sau 30 ngày kể từ Đợt 4",
      soTien: "Khách hàng thanh toán 15% GTHĐ",
    },
    {
      tienDo: "Đợt 6",
      thoiGian: "Nhận sổ",
      soTien: "Khách hàng thanh toán GTHĐ còn lại",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(tableRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="backdrop-blur-md shadow-2xl">
      <div className="w-full max-w-[1440px] mx-auto p-2 md:p-10 flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-5 md:space-y-0">
        <div ref={imageRef} className="w-full md:w-2/5">
          <Image src={CH} alt="Chính sách thanh toán" className="w-full" />
        </div>
        <div ref={tableRef} className="w-full md:w-3/5 text-white">
          <h3 className="text-[20px] md:text-[22px] text-center">
            Phương thức thanh toán 3 : Chiết khấu 01 chỉ vàng
          </h3>

          <p className="text-[12px] md:text-[16px] pt-4">
            Thanh toán dự kiến theo nhiều đợt
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="table-fixed w-full text-left border-y border-white">
              <thead>
                <tr className="border-b border-white h-[64px] text-[14px] md:text-[18px]">
                  <th className="w-[15%] px-4">Tiến độ</th>
                  <th className="w-[35%] px-4">Thời gian</th>
                  <th className="w-[50%] px-4">Số tiền</th>
                </tr>
              </thead>
              <tbody>
                {paymentSchedule.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-white h-[64px] text-[14px] md:text-[18px]"
                  >
                    <td className="px-4">{item.tienDo}</td>
                    <td className="px-4">{item.thoiGian}</td>
                    <td className="px-4">{item.soTien}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChinhSachThanhToanSecond;
