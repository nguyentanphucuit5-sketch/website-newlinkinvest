import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetBlogQuery } from "@/redux/api/blogSlice";
import { setBlogList } from "@/redux/feature/blogSlice";

const useBlogList = () => {
  const { data: dataBlog, isLoading: dataBlogLoading, isFetching: dataBlogFetching, refetch: dataBlogRefetch } = useGetBlogQuery();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Cập nhật data khi getCheckout thay đổi
    if (dataBlog?.data) {
      setData(dataBlog.data);
      dispatch(setBlogList(dataBlog.data));
    }
  }, [dataBlog, dataBlogFetching, dataBlogRefetch, dispatch]); // Thêm refetch vào dependency array

  // Trả về refetch để có thể gọi lại API từ bên ngoài
  return { data, dataBlog, dataBlogLoading, dataBlogRefetch, dataBlogFetching };
};

export default useBlogList;
