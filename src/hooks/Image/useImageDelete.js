import { useDeleteImageMutation } from "@/redux/api/imageSlice";

const useImageDelete = () => {
  const [deleteImage, { isLoading: isDelete }] = useDeleteImageMutation();

  const deleteImages = async (ids) => {
    if (!ids || (Array.isArray(ids) && ids.length === 0)) {
      console.log("No image IDs provided to delete.");
      return [];
    }

    // Chuyển ids về mảng nếu là string
    const imageArray = Array.isArray(ids) ? ids : [ids];

    try {
      const response = await deleteImage({ ids: imageArray }).unwrap();

      return response;
    } catch (error) {
      console.error("Failed to delete images:", error);
      return [];
    }
  };

  return { deleteImages, isDelete };
};

export default useImageDelete;
