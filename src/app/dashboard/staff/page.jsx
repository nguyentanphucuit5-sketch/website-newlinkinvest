import HeaderSideBar from "@/components/Dashboard/SideBar/HeaderSideBar";
import StaffManagerComponent from "@/components/Dashboard/Staff/StaffManagerComponent";

const StaffManagerPage = () => {
  return (
    <div>
      <HeaderSideBar
        title="Danh Sách Nhân Viên"
        showButton={true}
        titleButton={`Thêm Staff`}
        linkButton={`/dashboard/staff/add`}
      />
      <div className="p-6 ">
        <StaffManagerComponent />
      </div>
    </div>
  );
};

export default StaffManagerPage;
