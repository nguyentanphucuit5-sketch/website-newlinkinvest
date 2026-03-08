import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCateBlogList } from "@/redux/feature/cateBlogSlice";
import { useGetCateBlogQuery } from "@/redux/api/cateBlogSlice";

const useCateBlogList = () => {
  const { data: dataCateBlog, isLoading: dataCateBlogLoading, isFetching: dataCateBlogFetching, refetch: dataCateBlogRefetch } = useGetCateBlogQuery();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);



  useEffect(() => {
    // Cập nhật data khi getCheckout thay đổi
    if (dataCateBlog?.data) {
      setData(dataCateBlog.data);
      dispatch(setCateBlogList(dataCateBlog.data));
    }
  }, [dataCateBlog, dataCateBlogFetching, dataCateBlogRefetch, dispatch]); // Thêm refetch vào dependency array

  // Trả về refetch để có thể gọi lại API từ bên ngoài
  return { data, dataCateBlog, dataCateBlogLoading, dataCateBlogRefetch, dataCateBlogFetching };
};

export default useCateBlogList;
