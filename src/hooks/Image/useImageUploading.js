// hooks/useImageUploader.js hoặc
import { useUploadImageMutation } from "@/redux/api/imageSlice";

const useImageUploading = () => {
  const [upload, { isLoading: isUploading }] = useUploadImageMutation();

  const uploadImages = async (images) => {
    const uploadedUrls = [];

    if (!images) return uploadedUrls;

    const formData = new FormData();
    const imageArray = images instanceof File ? [images] : Array.from(images); // flexible giữa mảng và file đơn

    imageArray.forEach((image) => {
      formData.append("images", image); // Dùng plural key
    });

    const response = await upload(formData).unwrap();

    if (response?.data) {
      uploadedUrls.push(...response.data); // trải mảng
    } else {
      throw new Error(response?.data?.message || "Upload ảnh thất bại");
    }
    return uploadedUrls;
  };

  return { uploadImages, isUploading };
};

export default useImageUploading;
