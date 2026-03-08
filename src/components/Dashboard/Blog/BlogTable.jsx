"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogTableUI from "./BlogUI/BlogTableUI";
import { BlogTableData } from "@/lib/TableDashboard/TableDashboard";
import useBlogList from "@/hooks/Dashboard/Blog/useBlogList";
import { useDeleteBlogMutation } from "@/redux/api/blogSlice";
import { setBlogId } from "@/redux/feature/blogSlice";
import useImageDelete from "@/hooks/Image/useImageDelete";

const ITEMS_PER_PAGE = 10;

const BlogTable = () => {
  const router = useRouter();
  const { dataBlogRefetch } = useBlogList();
  const dataBlog = useSelector((state) => state.blog.blog);
  const dataSearch = useSelector((state) => state.search.blogSearch);

  const [filteredData, setFilteredData] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);

  const [deleteBlog] = useDeleteBlogMutation();
  const dispatch = useDispatch();

  const { deleteImages, isDelete } = useImageDelete();

  useEffect(() => {
    if (dataBlog) {
      let result = [...dataBlog];

      // Lọc dữ liệu
      if (dataSearch && dataSearch.trim() !== "") {
        const searchTerm = dataSearch.toLowerCase();
        result = result.filter((item) =>
          item.title?.toLowerCase().includes(searchTerm)
        );
      }

      setFilteredData(result);
      setCurrentPage(1); // reset trang khi search
    }
  }, [dataBlog, dataSearch]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setCurrentItems(filteredData.slice(startIndex, endIndex));
  }, [filteredData, currentPage]);

  const EditBlogHandle = (data) => {
    router.push(`/dashboard/blog/${data._id}`);
  };

  const hoverBlogIdHandle = (data) => {
    dispatch(setBlogId(data));
  };

  const DeleteBlogHandle = async (data) => {
    try {
      // Xoá ảnh liên quan nếu có
      if (data.image) {
        await deleteImages(data.image._id);
      }

      const res = await deleteBlog(data._id).unwrap();
      if (res) {
        await dataBlogRefetch();
        toast.success("Xóa thành công!");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
      <BlogTableUI
        EditBlogHandle={EditBlogHandle}
        DeleteBlogHandle={DeleteBlogHandle}
        currentItems={currentItems}
        sortConfig={sortConfig}
        sortData={sortData}
        tableHeader={BlogTableData}
        hoverBlogIdHandle={hoverBlogIdHandle}
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
export default BlogTable;
