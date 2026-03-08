"use client";

import { DuAn } from "@/utils/data";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const ProjectItem = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const dropdownRef = useRef(null);
  const projectRefs = useRef([]);
  const containerRef = useRef(null);

  const handleChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  // Filter projects by location
  const filteredProjects = selectedLocation
    ? DuAn.filter((project) => project.da === selectedLocation)
    : DuAn;

  useEffect(() => {
    // Animate dropdown on mount
    gsap.fromTo(
      dropdownRef.current,
      { y: -20, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out" }
    );

    // Animate project cards
    gsap.fromTo(
      projectRefs.current,
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        clearProps: "all", // Clear GSAP styles after animation
      }
    );
  }, [filteredProjects]); // Re-run when filteredProjects changes

  return (
    <div
      ref={containerRef}
      className="relative z-50 py-5 md:py-10 px-2 mt-20 lg:px-0"
    >
      <div className="flex justify-end">
        <div className="max-w-[400px]">
          <select
            ref={dropdownRef}
            value={selectedLocation}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          >
            <option className="text-black" value="">
              Tất cả khu vực
            </option>
            <option className="text-black" value="hcm">
              Hồ Chí Minh
            </option>
            <option className="text-black" value="baoloc">
              Bảo Lộc
            </option>
            <option className="text-black" value="longan">
              Long An
            </option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 px-2 mt-6">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            className="h-full"
          >
            <Link href={`${project.link}`}>
              <div className="shadow-2xl h-full flex flex-col">
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={500}
                    height={300}
                    className="h-[200px] w-full object-cover"
                  />
                  <div className="absolute top-0 right-0 border-l border-b shadow-xl rounded-bl-2xl border-gray-300 bg-opacity-60 backdrop-blur-xl p-2 flex items-center">
                    <Image
                      src={project.logo}
                      alt={project.alt}
                      width={100}
                      height={100}
                      className="h-[60px] w-[120px] object-contain"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-b-lg p-4 text-black font-utm-avo flex flex-col flex-grow">
                  <h2 className="text-[16px] md:text-[20px] font-utm-avo-bold mb-2">
                    {project.name}
                  </h2>
                  <p className="text-[#2B2B2B] text-[12px] md:text-[16px] line-clamp-3 min-h-[4.5em]">
                    {project.desc}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
