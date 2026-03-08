"use client";
import React, { useEffect } from "react";
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";
import AppSideBarContent from "./AppSideBarContent";
import AppSideBarFooter from "./AppSideBarFooter";
import { SideBarHeader } from "@/lib/DataUI/SideBarData";
import { useDispatch } from "react-redux";
import { setAuth } from "@/redux/feature/authSlice";
import useProfile from "@/hooks/Dashboard/Account/useProfile";

const AppSideBar = ({ session }) => {
  // Khởi tạo
  const dispatch = useDispatch();

  // Hook
  useProfile(session?.user?.id);

  // Action
  useEffect(() => {
    if (session) {
      dispatch(setAuth(session.user));
    }
  }, [session]);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel className="justify-center text-xl">
            {SideBarHeader.title}
          </SidebarGroupLabel>
        </SidebarGroup>
      </SidebarHeader>

      {/* Middle */}
      <AppSideBarContent />
      {/* Footer */}
      <AppSideBarFooter session={session} />
    </Sidebar>
  );
};

export default AppSideBar;
