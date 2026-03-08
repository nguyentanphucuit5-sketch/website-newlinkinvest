"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ManagerTableUI from "./ManagerUI/ManagerTableUI";
import { AccountTableData } from "@/lib/TableDashboard/TableDashboard";
import {
  useDeleteAccountMutation,
  useRestoreAccountMutation,
  useSendResetPasswordMutation,
} from "@/redux/api/authSlice";
import useAccountList from "@/hooks/Dashboard/Account/useAccountList";

const ITEMS_PER_PAGE = 100;

const ManagerTable = () => {
  // Khởi tạo
  const router = useRouter();
  const dispatch = useDispatch();

  // Redux
  const [deleteAccount] = useDeleteAccountMutation();
  const [restoreAccount] = useRestoreAccountMutation();
  const [send] = useSendResetPasswordMutation();
  const dataAccount = useSelector((state) => state.auth.accountManager);
  const dataSearch = useSelector((state) => state.search.accountSearch);

  // Custom hook
  const { accountRefetch } = useAccountList();

  // State
  const [filteredData, setFilteredData] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);

  // Lấy dữ liệu và lọc theo search
  useEffect(() => {
    if (dataAccount) {
      let result = [...dataAccount];

      // Lọc dữ liệu
      if (dataSearch && dataSearch.trim() !== "") {
        const searchTerm = dataSearch.toLowerCase();
        result = result.filter((item) =>
          item.email?.toLowerCase().includes(searchTerm)
        );
      }

      setFilteredData(result);
      setCurrentPage(1); // reset trang khi search
    }
  }, [dataAccount, dataSearch]);

  // Cập nhật mỗi khi trang thay đổi
  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setCurrentItems(filteredData.slice(startIndex, endIndex));
  }, [filteredData, currentPage]);

  // Hàm xử lý Reset Password Account
  const EditHandle = async (data) => {
    try {
      const res = await send({ email: data.email }).unwrap();
      toast.success(`${res.message}`);
    } catch (err) {
      console.log(err);
      toast.error(err.data?.message || "Reset mật khẩu thất bại");
    }
  };

  // Hàm xử lý Xóa Account
  const DeleteAccountHandle = async (id) => {
    try {
      const res = await deleteAccount(id).unwrap();
      if (res) {
        await accountRefetch();
        toast.success(`${res.message}`);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.data?.message || "Xóa tài khoản thất bại");
    }
  };

  //Hàm khôi phục tài khoản
  const restoreHandle = async (id) => {
    try {
      const res = await restoreAccount(id).unwrap();
      if (res) {
        await accountRefetch();
        toast.success(`${res.message}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Hàm sắp xếp dữ liệu
  const sortData = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    const sorted = [...filteredData].sort((a, b) => {
      const result = a[key].localeCompare(b[key], "vi", {
        sensitivity: "base",
      });
      return direction === "asc" ? result : -result;
    });
    setFilteredData(sorted);
    setSortConfig({ key, direction });
  };

  // Tính toán số trang
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  //Hàm xử lý mỗi khi chuyển pagination sẽ cuộn lên đầu trang
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage + 1); // vì ReactPaginate đếm từ 0

    window.scrollTo({
      top: 0,
      behavior: "smooth", // Cuộn mượt mà
    });
  };

  return (
    <div>
      <ManagerTableUI
        EditHandle={EditHandle}
        DeleteHandle={DeleteAccountHandle}
        currentItems={currentItems}
        sortConfig={sortConfig}
        sortData={sortData}
        tableHeader={AccountTableData}
        restoreHandle={restoreHandle}
      />

      {/* Pagination controls */}
      <ReactPaginate
        pageCount={totalPages}
        onPageChange={({ selected }) => handlePageChange(selected)}
        containerClassName="flex items-center justify-center gap-2 mt-6"
        pageClassName="border border-gray-300 rounded-lg"
        pageLinkClassName="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 transition-colors rounded-lg duration-200 cursor-pointer"
        activeClassName="bg-gray-300 text-white "
        previousClassName="border border-gray-300 rounded-lg"
        previousLinkClassName="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
        nextClassName="border border-gray-300 rounded-lg"
        nextLinkClassName="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
        disabledClassName="opacity-30 cursor-not-allowed"
        previousLabel={<ChevronLeft className="w-5 h-5 text-gray-900" />}
        nextLabel={<ChevronRight className="w-5 h-5 text-gray-900" />}
        breakLabel="..."
        breakClassName="px-4 py-2 text-sm font-medium text-gray-900"
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default ManagerTable;
