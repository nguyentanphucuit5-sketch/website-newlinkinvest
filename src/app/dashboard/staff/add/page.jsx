import HeaderSideBar from "@/components/Dashboard/SideBar/HeaderSideBar";
import AddStaffComponent from "@/components/Dashboard/Staff/AddStaff/AddStaffComponent";

const AddStaffPage = () => {
  return (
    <div>
      <HeaderSideBar title="Thêm Nhân Viên" showButton={false} />
      <div className="p-6 ">
        <AddStaffComponent />
      </div>
    </div>
  );
};

export default AddStaffPage;
