import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetProfileQuery } from "@/redux/api/authSlice";
import { setProfile } from "@/redux/feature/authSlice";

const useProfile = (id) => {
  const {
    data: profileData,
    isLoading: profileLoading,
    isFetching: profileFetching,
    refetch: profileRefetch,
  } = useGetProfileQuery(id);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);


  useEffect(() => {
    // Cập nhật data khi profileData thay đổi
    if (profileData?.data) {
      setData(profileData.data);
      dispatch(setProfile(profileData.data));
    }
  }, [profileData, profileFetching, profileRefetch, dispatch]);

  // Trả về refetch để có thể gọi lại API từ bên ngoài
  return { data, profileData, profileLoading, profileRefetch, profileFetching };
};

export default useProfile;
