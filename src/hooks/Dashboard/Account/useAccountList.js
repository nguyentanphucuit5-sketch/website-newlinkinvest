import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetAccountQuery } from "@/redux/api/authSlice";
import {
  setAccountList,
  setAccountManager,
  setAccountUser,
} from "@/redux/feature/authSlice";

const useAccountList = () => {
  const {
    data: accountData,
    isLoading: accountLoading,
    isFetching: accountFetching,
    refetch: accountRefetch,
  } = useGetAccountQuery();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Cập nhật data khi accountData thay đổi
    if (accountData?.data) {
      setData(accountData.data);
      dispatch(setAccountList(accountData.data));

      // Lọc và lưu account manager vào Redux
      const managers = accountData.data.filter(
        (account) => account.role === "manager"
      );
      dispatch(setAccountManager(managers));

      // Lọc và lưu account user vào Redux
      const users = accountData.data.filter(
        (account) => account.role === "user"
      );
      dispatch(setAccountUser(users));
    }
  }, [accountData, accountFetching, accountRefetch, dispatch]);

  // Trả về refetch để có thể gọi lại API từ bên ngoài
  return { data, accountData, accountLoading, accountRefetch, accountFetching };
};

export default useAccountList;
