"use client";
import { Label } from "@/components/ui/label";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useUpdateAccountMutation } from "@/redux/api/authSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import useProfile from "@/hooks/Dashboard/Account/useProfile";
import { useVietnamAdministrativeUnits } from "@/hooks/AddressCode/useVietnamAdministrativeUnits";

// Dynamically import react-select with SSR disabled
const Select = dynamic(() => import("react-select"), { ssr: false });

const UserInfoAddress = () => {
  // State
  const [provinceCode, setProvinceCode] = useState(null);
  const [districtCode, setDistrictCode] = useState(null);
  const [wardCode, setWardCode] = useState(null);

  // Redux
  const { address } = useSelector((state) => state.auth.profileUser);
  const { street } = useSelector((state) => state.auth.profileUser);
  const fullAdress = useSelector((state) => state.auth.profile.profileUser);

  // Hooks
  const { provinces, districts, wards, loading } =
    useVietnamAdministrativeUnits({
      provinceCode,
      districtCode,
    });

  useEffect(() => {
    if (address) {
      setProvinceCode(address.province);
      setDistrictCode(address.district);
      setWardCode(address.ward);
    }
  }, [address]);

  // Format data for react-select
  const formatOptions = (data) =>
    data?.map((item) => ({
      value: item.code,
      label: item.name,
    })) || [];

  return (
    <div className="w-full h-full p-4 bg-[#F7F7F7] border rounded-xl">
      <h2 className="font-bold">Địa Chỉ Cá Nhân</h2>
      <form className="mt-2 space-y-3">
        {/* Province Select */}
        <div className="space-y-1">
          <Label className="text-gray-400 text-[13px]">Tỉnh / Thành phố</Label>
          <Select
            value={provinceCode}
            options={formatOptions(provinces)}
            isSearchable
            placeholder="Chọn Tỉnh/Thành phố"
            isLoading={loading}
            isDisabled
          />
        </div>

        {/* District Select */}
        <div className="space-y-1">
          <Label className="text-gray-400 text-[13px]">Quận / Huyện</Label>
          <Select
            value={districtCode}
            options={formatOptions(districts)}
            isSearchable
            placeholder="Chọn Quận/Huyện"
            isDisabled
            isLoading={loading}
          />
        </div>

        {/* Ward Select */}
        <div className="space-y-1">
          <Label className="text-gray-400 text-[13px]">Phường / Xã</Label>
          <Select
            value={wardCode}
            options={formatOptions(wards)}
            isSearchable
            placeholder="Chọn Phường/Xã"
            isDisabled
            isLoading={loading}
          />
        </div>

        {/* Street */}
        <div className="space-y-1">
          <Label className="text-gray-400 text-[13px]">Đường</Label>
          <Input
            type={`text`}
            defaultValue={street || ""} // set giá trị từ state
            className={`bg-white`}
            placeholder="Nhập tên đường, số nhà..."
            disabled
          />
        </div>
      </form>
    </div>
  );
};

export default UserInfoAddress;
