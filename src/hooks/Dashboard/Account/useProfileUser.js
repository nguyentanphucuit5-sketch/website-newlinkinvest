import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetProfileQuery } from "@/redux/api/authSlice";
import { setProfileUser } from "@/redux/feature/authSlice";

const useProfileUser = (id) => {
  const {
    data: profileUserData,
    isLoading: profileUserLoading,
    isFetching: profileUserFetching,
    refetch: profileUserRefetch,
  } = useGetProfileQuery(id);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Cập nhật data khi profileData thay đổi
    if (profileUserData?.data) {
      setData(profileUserData.data);
      dispatch(setProfileUser(profileUserData.data));
    }
  }, [profileUserData, profileUserFetching, profileUserRefetch, dispatch]);

  // Trả về refetch để có thể gọi lại API từ bên ngoài
  return {
    data,
    profileUserData,
    profileUserLoading,
    profileUserRefetch,
    profileUserFetching,
  };
};

export default useProfileUser;
