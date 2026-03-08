"use client";
import React from "react";
import ListMenu from "./Home/ListMenu";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import Link from "next/link";
import useBlogList from "@/hooks/Dashboard/Blog/useBlogList";
import useTrackUserIP from "@/hooks/TrackerIP/useTrackUserIP";

const Menu = () => {
  const { dataBlog } = useBlogList();
  useTrackUserIP();

  return (
    <div className="relative">
      <div className="absolute left-2 z-50">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="New Link Investment"
            className="w-[40px] md:w-[80px] md:block "
          />
        </Link>
      </div>
      <ListMenu />
    </div>
  );
};

export default Menu;
