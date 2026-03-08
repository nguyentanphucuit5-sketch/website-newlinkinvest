"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const DichVuDangCap = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://w.ladicdn.com/s1440x1050/5c7362c6c417ab07e5196b05/1048-20241209045115-n8epm.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-full w-[100vw] relative pb-20"
    >
      <div className=" w-[100vw] h-full  md:max-w-[1440px]  md:mx-auto relative pt-20 md:pt-20  ">
        <div className="w-[100vw] h-full md:min-w-[1100px] md:max-w-[1200px] md:mx-auto flex flex-col">
          <h2
            className={`relative z-[40] text-center text-[20px] md:text-[32px] font-pd-bold w-full border bg-[linear-gradient(to_right,_#EFCF9F_0%,_#EDCC9C_8%,_#E8C395_13%,_#DFB488_17%,_#D39F76_21%,_#CE966E_22%,_#D29D74_27%,_#E7C193_54%,_#EFCF9F_68%,_#EBC899_69%,_#DEB286_75%,_#D5A278_82%,_#CF9870_90%,_#CE966E_100%)] bg-clip-text text-transparent`}
          >
            ĐẦY ĐỦ NHỮNG DỊCH VỤ ĐẲNG CẤP
          </h2>

          <div
            style={{
              backgroundImage:
                "url('https://w.ladicdn.com/s1440x1050/5c7362c6c417ab07e5196b05/1048-20241209045115-n8epm.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className={`mt-10 p-1 md:p-5 rounded-lg border border-[#F3DBB8] w-full flex flex-col md:flex-row items-center justify-between relative`}
          >
            <motion.div
              animate={{
                scale: [1, 0.95, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-10 -right-[100px] md:-top-[180px] md:-right-32 z-[40] "
            >
              <Image
                src={`https://w.ladicdn.com/s900x950/5c7362c6c417ab07e5196b05/buom-20241210180353-soabp.png`}
                alt="Ảnh Sợi 2"
                width={2000}
                height={2000}
                className="w-[250px] md:w-[400px] "
              />
            </motion.div>
            <div
              className={`w-full py-5 md:py-0 md:w-[15%] text-[20px] font-bold text-center bg-[linear-gradient(to_right,_#EFCF9F_0%,_#EDCC9C_8%,_#E8C395_13%,_#DFB488_17%,_#D39F76_21%,_#CE966E_22%,_#D29D74_27%,_#E7C193_54%,_#EFCF9F_68%,_#EBC899_69%,_#DEB286_75%,_#D5A278_82%,_#CF9870_90%,_#CE966E_100%)] bg-clip-text text-transparent`}
            >
              Dịch Vụ <br /> Tiêu Chuẩn
            </div>
            <div className={`w-[85%] grid grid-cols-2 md:grid-cols-5`}>
              <div
                className={`border-[#F3DBB8] border-t md:border-t-0 border-r md:border-r-0 md:border-l p-5 md:border-b flex items-center flex-col space-y-3`}
              >
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-244x-20241210181107-hibsc.png`}
                  alt={`Logo Dịch Vụ Lễ Tân`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={``}> Dịch vụ lễ tân</p>
              </div>
              <div
                className={`border-[#F3DBB8] border-t md:border-t-0 md:border-l p-5 md:border-b flex items-center flex-col space-y-3`}
              >
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-254x-20241210181107-tlim4.png`}
                  alt={`Logo An Ninh`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={``}> An Ninh 24/24</p>
              </div>
              <div
                className={`border-[#F3DBB8] border-t border-r md:border-t-0 md:border-r-0 md:border-l p-5 md:border-b flex items-center flex-col space-y-3`}
              >
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-264x-20241210181108-48tsp.png`}
                  alt={`Logo Gym và Yoga`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={``}> Gym và Yoga</p>
              </div>
              <div
                className={`border-[#F3DBB8] border-t md:border-t-0  md:border-l p-5 md:border-b flex items-center flex-col space-y-3`}
              >
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-274x-20241210181108-c2zwh.png`}
                  alt={`Logo Phòng Tiệc Vip`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={``}> Phòng Tiệc Vip</p>
              </div>
              <div
                className={`border-[#F3DBB8] border-t border-r md:border-t-0 md:border-r-0 md:border-l p-5 md:border-b flex items-center flex-col space-y-3`}
              >
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-294x-20241210181108-wmsba.png`}
                  alt={`Logo Cigar Lounge`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={``}> Cigar Lounge</p>
              </div>
              <div
                className={`border-[#F3DBB8]  border-t md:border-t-0  md:border-l p-5 flex items-center flex-col space-y-3`}
              >
                {" "}
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-334x-20241210181108-0jrd4.png`}
                  alt={`Logo Quản lí, giám sát chuyển đến /chuyển đi
`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={` text-center`}>
                  {" "}
                  Quản lí, giám sát chuyển đến /chuyển đi
                </p>
              </div>
              <div
                className={`border-[#F3DBB8] border-t border-r md:border-t-0 md:border-r-0 md:border-l p-5 flex items-center flex-col space-y-3`}
              >
                {" "}
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-314x-20241210181108-zinuv.png`}
                  alt={`Logo Phần mềm quản lí dành riêng cho cư dân

`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={` text-center`}>
                  Phần mềm quản lí dành riêng cho cư dân
                </p>
              </div>{" "}
              <div
                className={`border-[#F3DBB8] border-t md:border-t-0  md:border-l p-5 flex items-center flex-col space-y-3`}
              >
                {" "}
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-334x-20241210181108-0jrd4.png`}
                  alt={`Logo Quản lí, giám sát nhà thầu vào thi công nội thất`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={` text-center`}>
                  Quản lí, giám sát nhà thầu vào thi công nội thất
                </p>
              </div>{" "}
              <div
                className={`border-[#F3DBB8] border-t border-r md:border-t-0 md:border-r-0 md:border-l p-5 flex items-center flex-col space-y-3`}
              >
                {" "}
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-33_14x-20241210181108-iicsd.png`}
                  alt={`Logo Chăm sóc khu vực công cộng`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={` text-center`}>Chăm sóc khu vực công cộng</p>
              </div>{" "}
              <div
                className={`border-[#F3DBB8] border-t md:border-t-0  md:border-l p-5 flex items-center flex-col space-y-3`}
              >
                {" "}
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-33_14x-20241210181108-iicsd.png`}
                  alt={`Logo  Chăm sóc cây xanh vệ sinh bên ngoài tòa nhà`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={` text-center`}>
                  Chăm sóc cây xanh vệ sinh bên ngoài tòa nhà
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage:
                "url('https://w.ladicdn.com/s1440x1050/5c7362c6c417ab07e5196b05/1048-20241209045115-n8epm.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className={`mt-20 p-1 md:p-5  rounded-lg border border-[#F3DBB8] w-full flex flex-col md:flex-row items-center justify-between relative`}
          >
            <div
              className={`py-5 md:py-0 w-full md:w-[15%] text-[20px] font-bold text-center bg-[linear-gradient(to_right,_#EFCF9F_0%,_#EDCC9C_8%,_#E8C395_13%,_#DFB488_17%,_#D39F76_21%,_#CE966E_22%,_#D29D74_27%,_#E7C193_54%,_#EFCF9F_68%,_#EBC899_69%,_#DEB286_75%,_#D5A278_82%,_#CF9870_90%,_#CE966E_100%)] bg-clip-text text-transparent`}
            >
              Dịch Vụ <br /> Yêu Cầu
            </div>
            <div
              className={`w-full md:w-[85%] grid grid-cols-2 md:grid-cols-5`}
            >
              <div
                className={`border-[#F3DBB8] border-t md:border-t-0 border-r md:border-r-0 md:border-l p-5 md:border-b flex items-center flex-col space-y-3`}
              >
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-344x-20241210181121-bpw6s.png`}
                  alt={`Logo Rửa và chăm sóc xe`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={``}> Rửa và chăm sóc xe</p>
              </div>
              <div
                className={`border-[#F3DBB8] border-t md:border-t-0 md:border-l p-5 md:border-b flex items-center flex-col space-y-3`}
              >
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-354x-20241210181121-g2gvj.png`}
                  alt={`Logo An Ninh`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={``}> Chăm Sóc</p>
              </div>
              <div
                className={`border-[#F3DBB8] border-t border-r md:border-t-0 md:border-r-0 md:border-l p-5 md:border-b flex items-center flex-col space-y-3`}
              >
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-364x-20241210181121-3jbad.png`}
                  alt={`Logo Gym và Yoga`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={``}>Giặt Ủi</p>
              </div>
              <div
                className={`border-[#F3DBB8] border-t md:border-t-0  md:border-l p-5 md:border-b flex items-center flex-col space-y-3`}
              >
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-374x-20241210181121-ubmde.png`}
                  alt={`Logo Phòng Tiệc Vip`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={``}>Sửa Chữa</p>
              </div>
              <div
                className={`border-[#F3DBB8] border-t border-r md:border-t-0 md:border-r-0 md:border-l p-5 md:border-b flex items-center flex-col space-y-3`}
              >
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-384x-20241210181121-tiyfc.png`}
                  alt={`Logo Cigar Lounge`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={``}>Dịch Vụ Cho Trẻ Em</p>
              </div>
              <div
                className={`border-[#F3DBB8]  border-t md:border-t-0  md:border-l p-5 flex items-center flex-col space-y-3`}
              >
                {" "}
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-394x-20241210181121-epmqh.png`}
                  alt={`Logo Quản lí, giám sát chuyển đến /chuyển đi
`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={` text-center`}>
                  {" "}
                  Quản lí, giám sát chuyển đến /chuyển đi
                </p>
              </div>
              <div
                className={`border-[#F3DBB8] border-t border-r md:border-t-0 md:border-r-0 md:border-l p-5 flex items-center flex-col space-y-3`}
              >
                {" "}
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-404x-20241210181121-rq2_y.png`}
                  alt={`Logo Phần mềm quản lí dành riêng cho cư dân

`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={` text-center`}>
                  Phần mềm quản lí dành riêng cho cư dân
                </p>
              </div>{" "}
              <div
                className={`border-[#F3DBB8] border-t md:border-t-0  md:border-l p-5 flex items-center flex-col space-y-3`}
              >
                {" "}
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-424x-20241210181121-cwx4p.png`}
                  alt={`Logo Quản lí, giám sát nhà thầu vào thi công nội thất`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={` text-center`}>Dịch Vụ Thú Cưng</p>
              </div>{" "}
              <div
                className={`border-[#F3DBB8] border-t border-r md:border-t-0 md:border-r-0 md:border-l p-5 flex items-center flex-col space-y-3`}
              >
                {" "}
                <Image
                  src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/artboard-33_14x-20241210181108-iicsd.png`}
                  alt={`Logo Chăm sóc khu vực công cộng`}
                  width={1000}
                  height={1000}
                  className="w-[50px] "
                />
                <p className={` text-center`}>Chăm sóc khu vực công cộng</p>
              </div>{" "}
              <div
                className={`border-[#F3DBB8] border-t md:border-t-0  md:border-l p-5 flex items-center flex-col space-y-3`}
              ></div>
            </div>
          </div>

          <motion.div
            animate={{
              scale: [1, 0.95, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-7 left-0 md:top-32 md:-left-10 z-[0] "
          >
            <Image
              src={`https://w.ladicdn.com/s550x500/5c7362c6c417ab07e5196b05/hoa-bbb-20241210180353-rxzle.png`}
              alt="Ảnh Sợi 2"
              width={2000}
              height={2000}
              className="w-[100px] md:w-[250px] "
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DichVuDangCap;
