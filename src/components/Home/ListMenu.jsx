"use client";
import { Menu } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import gsap from "gsap";

const DesktopMenu = ({ pathname }) => {
  return (
    <div className="hidden md:flex space-x-8 text-[16px]">
      {Menu.map((item) => {
        const cleanSourceLink = item.sourceLink.split("?")[0];
        const isActive =
          pathname === cleanSourceLink ||
          (cleanSourceLink !== "/" && pathname.startsWith(cleanSourceLink));

        return (
          <div key={item.id} className="relative pb-1 group">
            <Link
              href={item.sourceLink}
              className={`font-utm-avo relative flex items-center gap-1 p-2 ${
                isActive ? "border-b pb-0.5" : ""
              }`}
            >
              <span>{item.text}</span>
              <div>
                {item.hiddenList && (
                  <FiChevronDown className="text-white  group-hover:rotate-180 transition-transform duration-200" />
                )}{" "}
              </div>
            </Link>

            {item.hiddenList && (
              <div className="absolute left-0 top-8 mt-2 hidden group-hover:block bg-[#33525C] shadow-lg rounded-b-lg rounded-r-lg w-50 z-[1000]">
                {item.hiddenList.map((subItem, index) => (
                  <div key={index}>
                    <Link
                      href={subItem.link}
                      className="block px-4 py-3 text-white hover:bg-[#487381] rounded-b-lg rounded-r-lg text-[16px] font-utm-avo"
                    >
                      {subItem.text}
                    </Link>
                    {index !== item.hiddenList.length - 1 && (
                      <div className="px-5 border-b border-[#09303D]"></div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen, pathname }) => {
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    // Animate the menu container
    tl.fromTo(
      menuRef.current,
      { x: "100%", autoAlpha: 0 },
      { x: "0%", autoAlpha: 1, duration: 0.5, ease: "power3.out" }
    );

    // Animate menu items with stagger
    tl.fromTo(
      menuItemsRef.current,
      { x: 20, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.3, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    );

    // Play or reverse the timeline based on isMobileMenuOpen
    if (isMobileMenuOpen) {
      tl.play();
    } else {
      tl.reverse();
    }

    // Cleanup on unmount
    return () => {
      tl.kill();
    };
  }, [isMobileMenuOpen]);

  return (
    <div
      ref={menuRef}
      className={`md:hidden fixed inset-0 bg-[#09303d] bg-opacity-90 z-100 ${
        isMobileMenuOpen ? "visible" : "invisible"
      }`}
    >
      <div className="w-64 bg-[#0c3d4a] text-white h-full shadow-lg p-5 fixed right-0 top-0">
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="mb-4 text-gray-300 flex justify-end w-full"
        >
          <FiX size={24} color="white" />
        </button>
        {Menu.map((item, index) => {
          const cleanSourceLink = item.sourceLink.split("?")[0];
          const isActive =
            pathname === cleanSourceLink ||
            (cleanSourceLink !== "/" && pathname.startsWith(cleanSourceLink));

          return (
            <div
              key={item.id}
              ref={(el) => (menuItemsRef.current[index] = el)}
              className="mb-3"
            >
              <Link
                href={item.sourceLink}
                className={`block px-4 py-2 rounded-lg text-lg ${
                  isActive
                    ? "bg-[#12728a] text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.text}
              </Link>
              {item.hiddenList && (
                <div className="ml-4 border-l-2 border-gray-500 pl-2 mt-1 space-y-2">
                  {item.hiddenList.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.link}
                      className="block py-1 text-gray-300 text-sm hover:underline"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ListMenu = () => {
  let pathname = usePathname();
  pathname = pathname.split("?")[0]; // Loại bỏ query params
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const phoneWrapperRef = useRef(null); // Ref cho phần gọi điện
  const menuButtonRef = useRef(null); // Ref cho nút menu mobile

  // Hiệu ứng cho phone wrapper
  useEffect(() => {
    gsap.from(phoneWrapperRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
      delay: 0,
    });
  }, []);

  // Hiệu ứng cho nút menu khi mở/đóng
  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(menuButtonRef.current, {
        scale: 1.2, // Phóng to nhẹ
        rotate: 90, // Xoay 90 độ
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuButtonRef.current, {
        scale: 1, // Trở về kích thước ban đầu
        rotate: 0, // Xoay về 0 độ
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="relative w-full flex justify-center">
      {/* Nút menu cho mobile */}
      <button
        ref={menuButtonRef} // Gắn ref cho nút
        className="md:hidden absolute right-4 top-2 text-white z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Menu Desktop */}
      <DesktopMenu pathname={pathname} />
      {/* Menu Mobile */}
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        pathname={pathname}
      />

      {/* Nút gọi điện */}
      <div
        ref={phoneWrapperRef}
        className="absolute md:-bottom-14 -bottom-20 right-4 md:right-0 flex items-center space-x-2 z-50"
      >
        <div className="relative group">
          <a
            href="tel:0901234567"
            className="absolute right-0 text-[14px] border h-10 w-[170px] pl-4 flex items-center rounded-full opacity-0 group-hover:opacity-100"
          >
            <p>090.9999.619</p>
          </a>
          <a
            href="tel:0909999619"
            className="relative border h-8 w-8 md:h-10 md:w-10 rounded-full flex justify-center items-center hover:bg-white text-white hover:text-black"
          >
            <FiPhone size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ListMenu;
