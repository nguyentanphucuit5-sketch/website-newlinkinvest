"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { useGetBlogByIdQuery } from "@/redux/api/blogSlice";
import { setBlogId } from "@/redux/feature/blogSlice";

const useBlogId = (id) => {
  const {
    data: BlogId,
    isLoading: dataBlogIdLoading,
    isFetching: dataBlogIdFetching,
    refetch: dataBlogIdRefetch,
  } = useGetBlogByIdQuery(id);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (pathname.includes("/dashboard/blog")) {
      dataBlogIdRefetch(); // Gọi lại API khi pathname khớp
    }
  }, [pathname, dataBlogIdRefetch]);

  useEffect(() => {
    // Cập nhật data khi getCheckout thay đổi
    if (BlogId?.data) {
      setData(BlogId.data);
      dispatch(setBlogId(BlogId.data));
    }
  }, [BlogId, dataBlogIdFetching, dataBlogIdRefetch, dispatch]); // Thêm refetch vào dependency array

  // Trả về refetch để có thể gọi lại API từ bên ngoài
  return {
    data,
    BlogId,
    dataBlogIdLoading,
    dataBlogIdRefetch,
    dataBlogIdFetching,
  };
};

export default useBlogId;
