"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CH from "../../assets/langomm/CS.png";

const ChinhSachThanhToan = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const leftBlockRef = useRef(null);
  const rightImageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(leftBlockRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
      });

      gsap.from(rightImageRef.current, {
        opacity: 0,
        x: 50,
        rotate: 15, // nghiêng ra ngoài
        duration: 1,
        delay: 0.8,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="">
        <h2
          ref={titleRef}
          className="w-full text-center text-[24px] md:text-[48px] font-ftv-blushing-rose text-white"
        >
          CHÍNH SÁCH BÁN HÀNG
        </h2>
        <div
          ref={subtitleRef}
          className="w-full text-[12px] md:text-[18px] max-w-[800px] mx-auto text-white text-center"
        >
          Áp dụng nhiều chính sách ưu đãi hấp dẫn dành riêng cho khách hàng giao
          dịch sớm Chiết khấu linh hoạt – quà tặng giá trị – hỗ trợ tài chính
          tối đa
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto p-2 md:p-10 text-white flex flex-col md:flex-row md:space-x-5 space-y-4 md:space-y-0">
        <div ref={leftBlockRef} className="w-full md:w-3/5 flex flex-col gap-2">
          {/* Block 1 */}
          <div className="backdrop-blur-md shadow-2xl rounded-[30px] p-4 px-6">
            <h3 className="text-[20px] md:text-[22px] text-center">
              Phương thức thanh toán 1 : Chiết khấu 3% giá trị chuyển nhượng
            </h3>
            <p className="pt-4 text-[12px] md:text-[16px]">
              Thanh toán dự kiến ký Chuyển nhượng trong vòng 7-15 ngày
            </p>
            <div className="overflow-x-auto">
              <table className="table-fixed w-full text-left border-y border-white">
                <thead>
                  <tr className="border-b border-white h-[64px] text-[14px] md:text-[18px]">
                    <th className="w-[15%] px-4">Tiến độ</th>
                    <th className="w-[35%] px-4">Thời gian</th>
                    <th className="w-[50%] px-4">Số tiền</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white h-[64px] text-[14px] md:text-[18px]">
                    <td className="px-4">Đợt 1</td>
                    <td className="px-4">Đặt cọc</td>
                    <td className="px-4">50,000,000 đồng</td>
                  </tr>
                  <tr className="border-b border-white h-[64px] text-[14px] md:text-[18px]">
                    <td className="px-4">Đợt 2</td>
                    <td className="px-4">7 - 10 ngày kể từ ngày Đặt cọc</td>
                    <td className="px-4">
                      Thanh toán hết và ký chuyển nhượng, giữ lại 10,000,000
                      đồng tiền sổ
                    </td>
                  </tr>
                  <tr className="h-[64px] text-[14px] md:text-[18px]">
                    <td className="px-4">Đợt 3</td>
                    <td className="px-4">Nhận sổ</td>
                    <td className="px-4">Thanh toán 10,000,000 đồng</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Block 2 */}
          <div className="backdrop-blur-md bg-white/0 shadow-2xl rounded-[30px] p-4 px-6">
            <h3 className="text-[20px] md:text-[22px] text-center">
              Phương thức thanh toán 2 : Chiết khấu 2% giá trị chuyển nhượng
            </h3>
            <p className="pt-4 text-[12px] md:text-[16px]">Vay vốn ngân hàng</p>
            <div className="overflow-x-auto">
              <table className="table-fixed w-full text-left border-y border-white">
                <thead>
                  <tr className="border-b border-white h-[64px] text-[14px] md:text-[18px]">
                    <th className="w-[15%] px-4">Tiến độ</th>
                    <th className="w-[35%] px-4">Thời gian</th>
                    <th className="w-[50%] px-4">Số tiền</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white h-[64px] text-[14px] md:text-[18px]">
                    <td className="px-4">Đợt 1</td>
                    <td className="px-4">Đặt cọc</td>
                    <td className="px-4">50,000,000 đồng</td>
                  </tr>
                  <tr className="border-b border-white h-[64px] text-[14px] md:text-[18px]">
                    <td className="px-4">Đợt 2</td>
                    <td className="px-4">
                      Nhận Thông báo cho vay của ngân hàng
                    </td>
                    <td className="px-4">Thanh toán 50% GTHĐ (bao gồm cọc)</td>
                  </tr>
                  <tr className="h-[64px] text-[14px] md:text-[18px]">
                    <td className="px-4">Đợt 3</td>
                    <td className="px-4">
                      Ký công chứng chuyển nhượng ba bên với ngân hàng
                    </td>
                    <td className="px-4">Vay 50% GTHĐ còn lại</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="pt-4 text-[12px] md:text-[16px]">
              Bên bán chịu chi phí vay
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div
          ref={rightImageRef}
          className="w-full md:w-2/5 mt-3 md:mt-0 flex items-center"
        >
          <div className="w-full h-full backdrop-blur-md shadow-2xl bg-white/0 rounded-[30px] p-4 px-6">
            <Image
              src={CH}
              alt="Chính Sách Làng Omm - NewLink Investment"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChinhSachThanhToan;
