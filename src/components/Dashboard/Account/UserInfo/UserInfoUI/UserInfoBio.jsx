"use client";

import { Textarea } from "@/components/ui/textarea";
import { useSelector } from "react-redux";

const UserInfoBio = () => {
  const { bio } = useSelector((state) => state.auth.profileUser);

  return (
    <div className="w-full h-full p-4 bg-[#F7F7F7] border rounded-xl overflow-hidden">
      <h2 className="font-bold">Giới Thiệu Bản Thân</h2>
      <div className="mt-2 space-y-1">
        <Textarea
          value={bio || ""} // set giá trị từ state
          className={`bg-white h-[100px]`}
          placeholder="Nhập giới thiệu bản thân..."
          disabled
        />
      </div>
    </div>
  );
};
export default UserInfoBio;
