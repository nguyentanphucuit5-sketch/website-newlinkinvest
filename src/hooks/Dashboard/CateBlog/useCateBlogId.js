import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCateBlogId } from "@/redux/feature/cateBlogSlice";
import { useGetIdCateBlogQuery } from "@/redux/api/cateBlogSlice";

const useCateBlogId = (id) => {
  const {
    data: CateBlogId,
    isLoading: dataCateBlogIdLoading,
    isFetching: dataCateBlogIdFetching,
    refetch: dataCateBlogIdRefetch,
  } = useGetIdCateBlogQuery(id);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);


  useEffect(() => {
    // Cập nhật data khi getCheckout thay đổi
    if (CateBlogId?.data) {
      setData(CateBlogId.data);
      dispatch(setCateBlogId(CateBlogId.data));
    }
  }, [CateBlogId, dataCateBlogIdFetching, dataCateBlogIdRefetch, dispatch]); // Thêm refetch vào dependency array

  // Trả về refetch để có thể gọi lại API từ bên ngoài
  return {
    data,
    CateBlogId,
    dataCateBlogIdLoading,
    dataCateBlogIdRefetch,
    dataCateBlogIdFetching,
  };
};

export default useCateBlogId;
