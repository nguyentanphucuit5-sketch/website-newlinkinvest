"use client";
import React, { useState } from "react";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronUp } from "lucide-react";
import { DataSideBarFooter } from "@/lib/DataUI/SideBarData";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";
import ProfileAva from "@/assets/images/AvataProfile.jpg"; // Import a default profile image
const AppSideBarFooter = () => {
  // State
  const [open, setOpen] = useState(false); // State to control dropdown open/close

  //Redux
  const { fullName, image } = useSelector((state) => state.auth.profile);

  // Handler to close dropdown
  const handleItemClick = () => {
    setOpen(false);
  };

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <Image
                  src={image?.url || ProfileAva}
                  alt="avatar Profile"
                  width={1000}
                  height={1000}
                  className="w-7 h-7 rounded-full "
                />
                <span className="w-full text-center font-bold">{fullName}</span>
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="right"
              className="w-[--radix-popper-anchor-width]"
            >
              {DataSideBarFooter.map((item) => {
                if (item.title === "Logout") {
                  return (
                    <DropdownMenuItem
                      key={item.title}
                      onClick={handleItemClick} // Use onClick instead of onSelect
                    >
                      <LogoutButton onClick={handleItemClick} />{" "}
                      {/* Pass onClick to LogoutButton */}
                    </DropdownMenuItem>
                  );
                }
                return (
                  <DropdownMenuItem
                    key={item.title}
                    onClick={handleItemClick} // Use onClick instead of onSelect
                  >
                    <Link
                      href={item.url}
                      className="flex space-x-2 w-full"
                      onClick={handleItemClick} // Ensure Link click closes dropdown
                    >
                      <item.icon /> <span>{item.title}</span>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default AppSideBarFooter;
