import ItemBLD from "./ItemBLD";
import Menu from "../Menu";

const BanLanhDao = () => {
  return (
    <div className="relative h-[950px] md:h-full ">
      {/* Nội Dung */}
      <div className="max-w-[1240px]  mx-auto py-5 px-1 md:px-0 ">
        <Menu />
        <ItemBLD />
      </div>
    </div>
  );
};

export default BanLanhDao;
