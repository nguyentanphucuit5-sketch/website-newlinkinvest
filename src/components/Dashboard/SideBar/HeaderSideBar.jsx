"use client";
import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useAccountList from "@/hooks/Dashboard/Account/useAccountList";
import useCateBlogList from "@/hooks/Dashboard/CateBlog/useCateBlogList";

const HeaderSideBar = ({
  title,
  showButton = false,
  titleButton,
  linkButton,
}) => {
  // Hook
  const { accountLoading } = useAccountList();
  const { dataCateBlogLoading } = useCateBlogList();

  return (
    <div>
      <div className="flex items-center justify-between px-2 md:px-8 py-1 md:py-2 border-b-2">
        <div className="flex items-center space-x-3">
          <SidebarTrigger />
          <div className="w-px h-7 bg-gray-300" />
          <h1 className="text-md md:text-lg font-bold ml-2">{title}</h1>
        </div>
        {showButton && (
          <Button>
            <Link href={linkButton}>{titleButton}</Link>
          </Button>
        )}
      </div>
      <div>
        {(accountLoading || dataCateBlogLoading) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50">
            <div className="text-white text-lg font-semibold">
              Đang nạp dữ liệu...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderSideBar;
