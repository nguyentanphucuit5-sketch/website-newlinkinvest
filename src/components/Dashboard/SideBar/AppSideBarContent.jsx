import React from "react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { DataSideBarContent } from "@/lib/DataUI/SideBarData";
import Link from "next/link";
import { useSelector } from "react-redux";

const AppSideBarContent = () => {
  const data = useSelector((state) => state.auth.user);

  const role = data?.role;

  return (
    <SidebarContent>
      {DataSideBarContent.map((content, index) => {
        // Ẩn "Quản Lý Tài Khoản" nếu không phải admin
        if (content.title === "Quản Lý Tài Khoản" && role !== "admin") {
          return null;
        }

        return (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>{content.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              {content.list.map((item) => (
                <SidebarMenuItem key={item.title} className="list-none">
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span className="text-center">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        );
      })}
    </SidebarContent>
  );
};

export default AppSideBarContent;
