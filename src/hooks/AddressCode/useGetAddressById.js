import { useEffect, useState } from "react";

export const useGetAddressById = (address) => {
  const [provinceName, setProvinceName] = useState("");
  const [districtName, setDistrictName] = useState("");
  const [wardName, setWardName] = useState("");

  useEffect(() => {
    const fetchAddressNames = async () => {
      const provinceCode = address?.province;
      const districtCode = address?.district;
      const wardCode = address?.ward;

      try {
        // Lấy tên tỉnh
        if (provinceCode) {
          const res = await fetch(
            `https://provinces.open-api.vn/api/p/${provinceCode}?depth=1`
          );
          if (!res.ok) throw new Error(`Province API error: ${res.status}`);
          const data = await res.json();
          setProvinceName(data.name || "Không tìm thấy tỉnh/thành");
        }

        // Lấy tên quận
        if (districtCode) {
          const res = await fetch(
            `https://provinces.open-api.vn/api/d/${districtCode}?depth=1`
          );
          if (!res.ok) throw new Error(`District API error: ${res.status}`);
          const data = await res.json();
          setDistrictName(data.name || "Không tìm thấy quận/huyện");
        }

        // Lấy tên phường
        if (districtCode && wardCode) {
          const res = await fetch(
            `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`
          );
          if (!res.ok)
            throw new Error(`District wards API error: ${res.status}`);
          const data = await res.json();
          const ward = data.wards?.find((w) => w.code === parseInt(wardCode));
          if (ward) {
            setWardName(ward.name || "Không tìm thấy phường/xã");
          } else {
            setWardName(`Mã phường/xã ${wardCode} không hợp lệ`);
          }
        } else {
          setWardName("Không có mã phường/xã");
        }
      } catch (error) {
        console.error("Lỗi khi lấy địa chỉ:", error);
        setWardName("Lỗi khi lấy phường/xã");
      }
    };

    if (address) {
      fetchAddressNames();
    } else {
      setProvinceName("");
      setDistrictName("");
      setWardName("Không có dữ liệu địa chỉ");
    }
  }, [address]);

  return { provinceName, districtName, wardName };
};
