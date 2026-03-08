import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const UserTableUI = ({
  currentItems,
  sortData,
  sortConfig,
  tableHeader,
  ChangePageHandle,
}) => {
  // Hàm định dạng thời gian đếm ngược
  const formatCountdown = (deletedAt) => {
    if (!deletedAt) return "Không có ngày";

    const deletedDate = new Date(deletedAt);
    if (isNaN(deletedDate)) return "Ngày không hợp lệ";

    // Thời điểm hết hạn: 24 giờ sau deletedAt
    const expiryDate = new Date(deletedDate.getTime() + 24 * 60 * 60 * 1000);
    const now = new Date(); // Thời điểm hiện tại

    // Tính khoảng cách thời gian (mili giây)
    const timeDiff = expiryDate - now;

    if (timeDiff <= 0) return "Đã hết hạn";

    // Chuyển mili giây thành giờ và phút
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    return ` ${hours}:${minutes} `;
  };

  // State để lưu trữ thời gian đếm ngược cho tất cả các mục
  const [countdowns, setCountdowns] = useState({});

  // Cập nhật đếm ngược mỗi phút
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedCountdowns = {};
      currentItems.forEach((item) => {
        if (item.isDeleted && item.deletedAt) {
          updatedCountdowns[item._id] = formatCountdown(item.deletedAt);
        }
      });
      setCountdowns(updatedCountdowns);
    }, 60000); // Cập nhật mỗi phút

    // Cập nhật ngay lập tức khi component mount
    const initialCountdowns = {};
    currentItems.forEach((item) => {
      if (item.isDeleted && item.deletedAt) {
        initialCountdowns[item._id] = formatCountdown(item.deletedAt);
      }
    });
    setCountdowns(initialCountdowns);

    return () => clearInterval(interval); // Dọn dẹp khi component unmount
  }, [currentItems]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHeader.map(({ label, key }) => (
            <TableHead
              key={key}
              className={key === "status" ? "text-center" : "text-black"}
            >
              {label}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => sortData(key)}
                className="ml-2"
              >
                {sortConfig.key === key && sortConfig.direction === "asc"
                  ? "↓"
                  : "↑"}
              </Button>
            </TableHead>
          ))}
          <TableHead />
        </TableRow>
      </TableHeader>

      <TableBody>
        {currentItems.map((item) => (
          <TableRow key={item._id}>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.fullName}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>
              {item && typeof item.isDeleted !== "undefined" ? (
                item.isDeleted ? (
                  <div className="text-red-500">
                    Xóa sau {formatCountdown(item.deletedAt)}
                  </div>
                ) : item.isOnline ? (
                  "online"
                ) : (
                  "offline"
                )
              ) : (
                "Không có dữ liệu"
              )}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="cursor-pointer">
                    <BsThreeDotsVertical />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => ChangePageHandle(item)}>
                    Thông tin Khách
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTableUI;
