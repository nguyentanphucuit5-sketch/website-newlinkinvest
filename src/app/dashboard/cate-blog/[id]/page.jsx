import EditCateBlogComponent from "@/components/Dashboard/CateBlog/EditCateBlog/EditCateBlogComponent";
import HeaderSideBar from "@/components/Dashboard/SideBar/HeaderSideBar";


const EditCateBlogPage = () => {
  return (
    <div>
      <HeaderSideBar title="Loại Bài Viết" />
      <div className="p-6 ">
        <EditCateBlogComponent />
      </div>
    </div>
  );
};

export default EditCateBlogPage;
