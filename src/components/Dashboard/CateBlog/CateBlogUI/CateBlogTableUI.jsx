import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatDate } from "@/lib/Func/FuncHelp";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const CateBlogTableUI = ({ currentItems, sortData, sortConfig, tableHeader, EditCateBlogHandle, DeleteCateBlogHandle, hoverCateBlogIdHandle }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHeader.map(({ label, key }) => (
            <TableHead key={key} className={key === "status" ? "text-center" : "text-black"}>
              {label}
              <Button variant="ghost" size="sm" onClick={() => sortData(key)} className="ml-2">
                {sortConfig.key === key && sortConfig.direction === "asc" ? "↓" : "↑"}
              </Button>
            </TableHead>
          ))}
          <TableHead />
        </TableRow>
      </TableHeader>

      <TableBody>
        {currentItems.map((item, index) => {
          return (
            <TableRow key={index}>
              <TableCell># {item._id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.slug}</TableCell>
              <TableCell>{formatDate(item.createdAt)}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className={`cursor-pointer`}>
                      <BsThreeDotsVertical />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => EditCateBlogHandle(item)} onMouseEnter={() => hoverCateBlogIdHandle(item)}>
                      Chỉnh Sửa 
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => DeleteCateBlogHandle(item._id)} className="text-red-600">
                      Xóa
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default CateBlogTableUI;
