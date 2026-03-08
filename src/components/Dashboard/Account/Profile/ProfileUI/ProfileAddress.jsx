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

const ProfileAddress = () => {
  // State
  const [provinceCode, setProvinceCode] = useState(null);
  const [districtCode, setDistrictCode] = useState(null);
  const [wardCode, setWardCode] = useState(null);
  const [street, setStreet] = useState(null);
  const debounceTimeout = useRef(null);

  // Redux
  const [updateProfile] = useUpdateAccountMutation();
  const { user } = useSelector((state) => state.auth);
  const { address } = useSelector((state) => state.auth.profile);
  const fullAdress = useSelector((state) => state.auth.profile.street);

  // Hooks
  const { profileRefetch } = useProfile(user.id);
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
      setStreet(fullAdress);
    }
  }, [address]);

  // Format data for react-select
  const formatOptions = (data) =>
    data?.map((item) => ({
      value: item.code,
      label: item.name,
    })) || [];

  const handleProvinceChange = (selectedOption) => {
    setProvinceCode(selectedOption); // Set the entire option object
    setDistrictCode(null); // Reset district
    setWardCode(null); // Reset ward
  };

  const handleDistrictChange = (selectedOption) => {
    setDistrictCode(selectedOption); // Set the entire option object
    setWardCode(null); // Reset ward
  };

  const handleWardChange = async (selectedOption) => {
    setWardCode(selectedOption); // Set the entire option object

    try {
      const res = await updateProfile({
        data: {
          address: {
            province: provinceCode,
            district: districtCode,
            ward: selectedOption,
          },
        },
        id: user.id,
      }).unwrap();
      if (res) {
        toast.success(`${res.message}`);
        profileRefetch();
      }
    } catch (err) {
      console.error("Cập nhật địa chỉ thất bại:", err);
    }
  };

  const handleStreetChange = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    setStreet(value);

    // Xóa timeout cũ nếu có
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(async () => {
      try {
        const res = await updateProfile({
          data: {
            street: value,
          },
          id: user.id,
        }).unwrap();
        if (res) {
          toast.success(`${res.message}`);
          profileRefetch();
        }
      } catch (err) {
        console.error("Cập nhật địa chỉ thất bại:", err);
      }
    }, 2000); // 3 giây
  };

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
            onChange={handleProvinceChange}
            isSearchable
            placeholder="Chọn Tỉnh/Thành phố"
            isLoading={loading}
          />
        </div>

        {/* District Select */}
        <div className="space-y-1">
          <Label className="text-gray-400 text-[13px]">Quận / Huyện</Label>
          <Select
            value={districtCode}
            options={formatOptions(districts)}
            onChange={handleDistrictChange}
            isSearchable
            placeholder="Chọn Quận/Huyện"
            isDisabled={!provinceCode}
            isLoading={loading}
          />
        </div>

        {/* Ward Select */}
        <div className="space-y-1">
          <Label className="text-gray-400 text-[13px]">Phường / Xã</Label>
          <Select
            value={wardCode}
            options={formatOptions(wards)}
            onChange={handleWardChange}
            isSearchable
            placeholder="Chọn Phường/Xã"
            isDisabled={!districtCode}
            isLoading={loading}
          />
        </div>

        {/* Street */}
        <div className="space-y-1">
          <Label className="text-gray-400 text-[13px]">Đường</Label>
          <Input
            type={`text`}
            value={street || ""} // set giá trị từ state
            onChange={handleStreetChange}
            className={`bg-white`}
            placeholder="Nhập tên đường, số nhà..."
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileAddress;
