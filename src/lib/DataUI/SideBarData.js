import { FiUser } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaNewspaper } from "react-icons/fa";

// Dữ liệu cho Sidebar Header
const SideBarHeader = {
  title: "NewLink",
};

// Dữ liệu cho Sidebar Content
const DataSideBarContent = [
  {
    title: "Quản Lý Bài Viết",
    list: [
      {
        id: 1,
        title: "Danh Sách Bài Viết",
        url: "/dashboard/blog",
        icon: FaNewspaper,
      },
      {
        id: 2,
        title: "Loại Bài Viết",
        url: "/dashboard/cate-blog",
        icon: BiCategory,
      },
    ],
  },
  {
    title: "Quản Lý Nhân Viên",
    list: [
      {
        id: 1,
        title: "Danh Sách Nhân Viên",
        url: "/dashboard/staff",
        icon: FaNewspaper,
      },
      
    ],
  },
  {
    title: "Quản Lý Tài Khoản",
    list: [
      {
        id: 1,
        title: "Tài Khoản Quản Lý",
        url: "/dashboard/account/manager",
        icon: GrUserManager,
      },
    ],
  },
];

// Dữ liệu cho Sidebar Footer
const DataSideBarFooter = [
  {
    title: "Profile",
    url: "/dashboard/account/profile",
    icon: FiUser,
  },
  {
    title: "Logout",
    url: "#",
    icon: IoIosLogOut,
  },
];

export { SideBarHeader, DataSideBarContent, DataSideBarFooter };
