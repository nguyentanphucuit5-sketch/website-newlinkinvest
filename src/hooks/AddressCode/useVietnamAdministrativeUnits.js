// hooks/useVietnamAdministrativeUnits.js
import { useEffect, useState } from "react";

export const useVietnamAdministrativeUnits = ({
  provinceCode,
  districtCode,
}) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [loading, setLoading] = useState({
    provinces: true,
    districts: false,
    wards: false,
  });

  // Lấy danh sách tỉnh/thành
  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/p/")
      .then((res) => res.json())
      .then((data) => setProvinces(data))
      .finally(() => setLoading((prev) => ({ ...prev, provinces: false })));
  }, []);

  // Lấy danh sách quận/huyện theo mã tỉnh
  useEffect(() => {
    if (provinceCode) {
      setLoading((prev) => ({ ...prev, districts: true }));
      fetch(
        `https://provinces.open-api.vn/api/p/${provinceCode?.value}?depth=2`
      )
        .then((res) => res.json())
        .then((data) => setDistricts(data.districts || []))
        .finally(() => setLoading((prev) => ({ ...prev, districts: false })));
      setWards([]); // reset wards khi đổi tỉnh
    }
  }, [provinceCode]);

  // Lấy danh sách phường/xã theo mã huyện
  useEffect(() => {
    if (districtCode) {
      setLoading((prev) => ({ ...prev, wards: true }));
      fetch(
        `https://provinces.open-api.vn/api/d/${districtCode?.value}?depth=2`
      )
        .then((res) => res.json())
        .then((data) => setWards(data.wards || []))
        .finally(() => setLoading((prev) => ({ ...prev, wards: false })));
    }
  }, [districtCode]);

  return {
    provinces,
    districts,
    wards,
    loading,
  };
};
