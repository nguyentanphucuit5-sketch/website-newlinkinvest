import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useSelector } from "react-redux";

const UserInfoTT = () => {
  const { fullName, phone, email, role } = useSelector(
    (state) => state.auth.profileUser
  );

  return (
    <div className="w-full h-full p-4 bg-[#F7F7F7] border rounded-xl overflow-hidden">
      <h2 className="font-bold">Thông Tin Tài Khoản</h2>
      <form className="mt-2 space-y-3">
        <div className="space-y-1">
          <Label className={`text-gray-400 text-[13px]`}>Họ và Tên</Label>
          <Input
            type={`text`}
            defaultValue={fullName || ""}
            disabled
            className={`bg-white`}
          />
        </div>

        <div className="space-y-1">
          <Label className={`text-gray-400 text-[13px]`}>Số Điện Thoại</Label>
          <Input
            type={`text`}
            defaultValue={phone || ""}
            disabled
            className={`bg-white`}
          />
        </div>
        <div className="space-y-1">
          <Label className={`text-gray-400 text-[13px]`}>Địa Chỉ Email</Label>
          <Input
            type={`text`}
            defaultValue={email || ""}
            disabled
            className={`bg-white `}
          />
        </div>
        <div className="space-y-1">
          <Label className={`text-gray-400 text-[13px]`}>Vai trò</Label>
          <Input
            type={`text`}
            defaultValue={role || ""}
            disabled
            className={`bg-white`}
          />
        </div>
      </form>
    </div>
  );
};

export default UserInfoTT;
