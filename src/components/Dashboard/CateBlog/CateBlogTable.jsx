"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { setCateBlogId } from "@/redux/feature/cateBlogSlice";
import CateBlogTableUI from "./CateBlogUI/CateBlogTableUI";
import { CateBlogTableData } from "@/lib/TableDashboard/TableDashboard";
import useCateBlogList from "@/hooks/Dashboard/CateBlog/useCateBlogList";
import { useDeleteCateBlogMutation } from "@/redux/api/cateBlogSlice";

const ITEMS_PER_PAGE = 20;

const CateBlogTable = () => {
  // Router
  const router = useRouter();

  // Redux
  const dispatch = useDispatch();
  const { dataCateBlogRefetch } = useCateBlogList();
  const [deleteCateBlog] = useDeleteCateBlogMutation();
  const dataCateBlog = useSelector((state) => state.cateBlog.cateBlog);
  const dataSearch = useSelector((state) => state.search.cateBlogSearch);

  // State
  const [filteredData, setFilteredData] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);

  // Action
  useEffect(() => {
    if (dataCateBlog) {
      let result = [...dataCateBlog];

      // Lọc dữ liệu theo search
      if (dataSearch && dataSearch.trim() !== "") {
        const searchTerm = dataSearch.toLowerCase();
        result = result.filter((item) =>
          item.name?.toLowerCase().includes(searchTerm)
        );
      }

      setFilteredData(result);
      setCurrentPage(1); // reset trang khi search
    }
  }, [dataCateBlog, dataSearch]);

  // Lọc dữ liệu theo trang
  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setCurrentItems(filteredData.slice(startIndex, endIndex));
  }, [filteredData, currentPage]);

  // Hàm xử lý vô trang detail cate blog
  const EditCateBlogHandle = (data) => {
    router.push(`/dashboard/cate-blog/${data._id}`);
  };

  // Hàm hover vào cate blog để hiện thông tin
  const hoverCateBlogIdHandle = (data) => {
    dispatch(setCateBlogId(data));
  };

  // Hàm xử lý delte cate blog
  const DeleteCateBlogHandle = async (id) => {
    try {
      const res = await deleteCateBlog(id).unwrap();
      if (res) {
        await dataCateBlogRefetch();
        toast.success("Xóa thành công!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Sắp xếp dữ liệu tăng, giảm dần
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

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage + 1); // vì ReactPaginate đếm từ 0

    window.scrollTo({
      top: 0,
      behavior: "smooth", // Cuộn mượt mà
    });
  };

  return (
    <div>
      <CateBlogTableUI
        EditCateBlogHandle={EditCateBlogHandle}
        DeleteCateBlogHandle={DeleteCateBlogHandle}
        currentItems={currentItems}
        sortConfig={sortConfig}
        sortData={sortData}
        tableHeader={CateBlogTableData}
        hoverCateBlogIdHandle={hoverCateBlogIdHandle}
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

export default CateBlogTable;
