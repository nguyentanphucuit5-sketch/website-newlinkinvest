import trantuananh from "../assets/images/trantuananh.png";
import tranquochuy from "../assets/images/tranquochuy.png";
import doduynghi from "../assets/images/doduynghi.png";

import gamuda from "../assets/images/gamuda.png";
import capitaland from "../assets/images/capitaland.png";
import sungroup from "../assets/images/sungroup.png";
import namlong from "../assets/images/namlong.png";
import keppel from "../assets/images/keppel.png";
import vins from "../assets/images/vins.png";
import khangdien from "../assets/images/khangdien.png";
import masterise from "../assets/images/masterise.png";
import kita from "../assets/images/kita.png";
import prodezi from "../assets/images/prodezi.png";

import linhvuc1 from "../assets/images/linhvuc1.png";
import linhvuc2 from "../assets/images/linhvuc2.png";

import tuyendung1 from "../assets/images/tuyendung1.png";
import tuyendung2 from "../assets/images/tuyendung2.png";
import tuyendung3 from "../assets/images/tuyendung3.png";
import tuyendung4 from "../assets/images/tuyendung4.png";
import tuyendung5 from "../assets/images/tuyendung5.png";

import lahome from "../assets/images/lahome.png";
import kitahome from "../assets/images/kitahome.png";
import mt from "../assets/images/mt eastmark.jpg";
import lancaster from "../assets/images/lancaster Legacy.png";
import delasol from "../assets/images/delasol.png";
import eaton from "../assets/images/eaton park.png";
import glocal from "../assets/images/glocal city.png";
import celadon from "../assets/images/celadon city.png";
import greenHill from "../assets/images/greenhill.jpg";
import langOmm from "../assets/langomm/background.png";
import RiverPark from "../assets/RiverPark/Background.png";

import logoLaHome from "../assets/logo/logoLaHome.png";
import logoKieu from "../assets/logo/logoKieu.png";
import logoMt from "../assets/logo/mt-eastmark-logo-main.svg";
import logoLancaster from "../assets/logo/Lancaster.png";
import logoDelasol from "../assets/logo/delasol.png";
import logoEaton from "../assets/logo/Logo-Eaton-Park.png";
import logoGlobol from "../assets/logo/the global.png";
import logoCeladon from "../assets/logo/celadoncity-logo-4.png";
import logoGreenHill from "../assets/logo/green-hill-retreat-logo.png";
import logoLangOmm from "../assets/langomm/logo.png";
import logoRP from "../assets/RiverPark/LogoRP.png";

export const Menu = [
  {
    id: 1,
    text: "Tổng Quan",
    sourceLink: "/",
    hiddenList: [{ text: "Sơ Đồ Tổ Chức", link: "/so-do-to-chuc" }],
  },
  {
    id: 2,
    text: "Dự Án",
    sourceLink: "/du-an",
  },
  {
    id: 4,
    text: "Thông Tin Dự Án",
    sourceLink: "/thong-tin-du-an",
    hiddenList: [
      { text: "Kiều By KITA", link: "/thong-tin-du-an/kieu-by-kita" },
      { text: "LA Home", link: "/thong-tin-du-an/la-home" },
      { text: "SUNSHINE SKY CITY", link: "/thong-tin-du-an/sunshine-sky-city" },
    ],
  },
  { id: 3, text: "Tin Tức", sourceLink: "/tin-tuc" },
  {
    id: 5,
    text: "Ban Lãnh Đạo",
    sourceLink: "/ban-lanh-dao?name=tran-quoc-huy",
  },
  { id: 6, text: "Tuyển Dụng", sourceLink: "/tuyen-dung" },
];

export const Copy = [
  { id: 1, text: "Tổng Quan", sourceLink: "/" },
  { id: 2, text: "Ý Nghĩa Thương Hiệu", sourceLink: "/y-nghia-thuong-hieu" },
  { id: 3, text: "Dự Án Phân Phối", sourceLink: "/du-an-phan-phoi" },
  { id: 4, text: "Phát Triển Và Đầu Tư", sourceLink: "/phat-trien-dau-tu" },
  {
    id: 5,
    text: "Ban Lãnh Đạo",
    sourceLink: "/ban-lanh-dao?name=tran-quoc-huy",
  },
  { id: 6, text: "Tuyển Dụng", sourceLink: "/tuyen-dung" },
  { id: 7, text: "Liên Hệ", sourceLink: "/lien-he" },
];

export const Field = [
  {
    id: 1,
    text: "Đầu Tư Phát Triển",
    desc: "đầu tư và phát triển các dự án bất động sản.",
    alt: "New Link Investment đầu tư và phát triển các dự án bất động sản.",
    image: linhvuc1,
  },
  {
    id: 2,
    text: "Phân Phối Độc Quyền",
    desc: "phân phối độc quyền các dự án bất động sản của các đối tác uy tín.",
    alt: "New Link Investment phân phối độc quyền các dự án bất động sản của các đối tác uy tín.",
    image: linhvuc2,
  },
];

export const Directors = [
  {
    id: 1,
    name: "TRẦN TUẤN ANH",
    role: "Phó Tổng Giám Đốc",
    year: 10,
    image: trantuananh,
    link: "tran-tuan-anh",
    alt: "New Link Investment - Trần Tuấn Anh",
    li: [
      "Kinh Nghiệm: Trên <span class='font-utm-avo-bold bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent'>10 năm</span> kinh nghiệm BĐS Úc và Việt Nam.",
      "Các dự án đã triển khai: Đô thị vệ tinh, đô thị nghỉ dưỡng, căn hộ cao cấp, trong TP.HCM, Đồng Nai, Phan Thiết,... tại tập đoàn Nova Group.",
      "Bên cạnh đó đã có 5 năm kinh nghiệp quản trị doanh nghiệp riêng triển khai đầu tư và phát triển các dự án.",
    ],
  },
  {
    id: 2,
    name: "TRẦN QUỐC HUY",
    role: "Tổng Giám Đốc",
    year: 15,
    image: tranquochuy,
    style: true,
    link: "tran-quoc-huy",
    alt: "New Link Investment - Trân Quốc Huy",
    li: [
      "Kinh Nghiệm: Trên <span class='font-utm-avo-bold bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent'>15 năm</span> kinh nghiệm bất động sản cho Nova Group.",
      "Các dự án đã triển khai: Đô thị vệ tinh, đô thị nghỉ dưỡng, căn hộ cao cấp, trong TP.HCM, Đồng Nai, Phan Thiết,...",
      "Ngoài ra, còn quản lý phòng kinh doanh với đội ngũ hơn 200 nhân sự bán hàng trực tiếp.",
    ],
  },
  {
    id: 3,
    name: "ĐỖ DUY NGHI",
    role: "Phó Tổng Giám Đốc",
    year: 20,
    image: doduynghi,
    link: "do-duy-nghi",
    alt: "New Link Investment - Đỗ Duy Nghi",
    li: [
      "Kinh Nghiệm: Trên <span class='font-utm-avo-bold bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent'>20 năm</span> kinh nghiệm ngành BĐS.",
      "Từng phụ trách kế toán trưởng công ty Vạn Phát Hưng, An Gia, Phó TGĐ Tập đoàn Seaholding, TGĐ NTC Group.. phụ trách triển khai môi giới độc quyền nhiều dựng án tại khu đông từ năm 2014 đến nay.",
    ],
  },
];

export const Partner = [
  {
    id: 1,
    name: "gamuda",
    image: gamuda,
    alt: "New Link Investment - Gamuda",
    className: "w-[50px] md:w-[150px] md:h-[40px] ",
  },
  {
    id: 2,
    name: "capitaland",
    image: capitaland,
    alt: "New Link Investment - Capitaland",
    className: "w-[50px] md:w-[120px] md:h-[55px] ",
  },
  {
    id: 3,
    name: "sungroup",
    image: sungroup,
    alt: "New Link Investment - Sung Group",
    className: "w-[50px] md:w-[130px] md:h-[44px] ",
  },
  {
    id: 4,
    name: "namlong",
    image: namlong,
    alt: "New Link Investment - Nam Long",
    className: "w-[50px] md:w-[134px] md:h-[39px] ",
  },
  {
    id: 5,
    name: "keppel",
    image: keppel,
    alt: "New Link Investment - Keppel",
    className: "w-[50px] md:w-[134px] md:h-[28px] ",
  },
  {
    id: 6,
    name: "vins",
    image: vins,
    alt: "New Link Investment - VinGroup",
    className: "w-[50px] md:w-[134px] md:h-[59px] ",
  },
  {
    id: 7,
    name: "khangdien",
    image: khangdien,
    alt: "New Link Investment - Khang Điền",
    className: "w-[55px] md:w-[180px] md:h-[29px] ",
  },
  {
    id: 8,
    name: "masterise",
    image: masterise,
    alt: "New Link Investment - Masterise",
    className: "w-[35px] md:w-[95px] md:h-[65px] ",
  },
  {
    id: 9,
    name: "kita",
    image: kita,
    alt: "New Link Investment - Kita",
    className: "w-[50px] md:w-[124px] md:h-[41px] ",
  },
  {
    id: 10,
    name: "prodezi",
    image: prodezi,
    alt: "New Link Investment - Prodezi",
    className: "w-[50px] md:w-[130px] md:h-[34px] ",
  },
];

export const TuyenDung = [
  {
    id: 1,
    role: "NHÂN VIÊN KINH DOANH",
    yc: "không yêu cầu kinh nghiệm trong ngành bất động sản, kinh nghiệm trong lĩnh vực <br /> sales bảo hiểm, chứng khoán, ngân hàng là một lợi thế.",
    ql: "Lương Cơ bản 7,5 triệu/tháng. <br /> Hoa hồng lên đến 70% + thưởng nóng hấp dẫn. <br /> Thưởng hoa hồng trên doanh thu đem về. <br /> Đào tạo bài bản, hỗ trợ data khách hàng tiềm năng. <br /> Thu nhập cao, không giới hạn. <br /> Cơ hội thăng tiến lên cấp quản lý.",
    mt: "Môi trường làm việc chuyên nghiệp, năng động & cơ hội thăng tiến rõ ràng.",
    image: tuyendung1,
  },
  {
    id: 2,
    role: "TRƯỞNG PHÒNG KINH DOANH",
    yc: "Hơn 5 năm kinh nghiệm trong ngành bất động sản và có đội ngũ sales tối thiểu 5 người.",
    ql: "Lương cơ bản từ 15,5 triệu/ tháng. <br /> Hoa hồng bán lên đến 70% + thưởng nóng hấp dẫn. <br /> Hoa hồng team cực kỳ hấp dẫn. <br /> Thưởng KPI cuối năm lên đến 2 tỷ. <br /> Đào tạo bài bản, hỗ trợ data khách hàng tiềm năng. <br /> Thu nhập cao, không giới hạn. <br /> Cơ hội thăng tiến lên quản lý cấp cao.",
    mt: "Môi trường làm việc chuyên nghiệp, năng động, tạo cơ hội thăng tiến rõ ràng và  <br />  phát triển sự nghiệp lâu dài.",
    image: tuyendung2,
  },
  {
    id: 3,
    role: "GIÁM ĐỐC KINH DOANH",
    yc: "Hơn 5 năm kinh nghiệm trong ngành bất động sản và có sẵn ngũ sales tối thiểu 15 người.",
    ql: "Lương cơ bản từ 25 triệu/ tháng. <br /> Hoa hồng bán lên đến 70% + thưởng nóng hấp dẫn. <br /> Hoa hồng team cực kỳ hấp dẫn. <br /> Thưởng KPI cuối năm lên đến 5 tỷ. <br /> Thưởng hoa hồng trên doanh thu đem về. <br /> Thu nhập cao, không giới hạn. <br /> Cơ hội thăng tiến và hỗ trợ mở sàn và chi nhánh riêng trong tương lai.",
    mt: "Môi trường làm việc chuyên nghiệp, năng động, tạo cơ hội thăng tiến rõ ràng và<br /> phát triển  sự nghiệp lâu dài.",
    image: tuyendung3,
  },
  {
    id: 4,
    role: "GIÁM ĐỐC QUAN HỆ KHÁCH HÀNG",

    mcvTitle: "Mô tả công việc",
    mcv: "Xây dựng & triển khai kế hoạch kinh doanh, đảm bảo doanh thu. <br /> Tìm kiếm, phát triển, duy trì quan hệ với khách hàng, đối tác, chủ đầu tư. <br /> Đại diện hình ảnh công ty trong các hoạt động kinh doanh & sự kiện. <br /> Theo dõi tiến độ bán hàng, đề xuất giải pháp xử lý vướng mắc. <br /> Quản lý, báo cáo tình hình kinh doanh & thị trường.",

    ycTitle: "Yêu cầu",
    yc: "Có ít nhất 5 năm kinh nghiệm trong lĩnh vực bất động sản. <br /> Quan hệ rộng, am hiểu thị trường, kỹ năng giao tiếp & đàm phán tốt. <br /> Có nhiều nguồn khách hàng tiềm năng cho các dự án/ sản phẩm BĐS. <br /> Chịu áp lực doanh số tốt.",

    qlTitle: "Quyền Lợi Và Chế Độ Đãi Ngộ",
    ql: "Lương cơ bản lên đến 40 triệu/ tháng. <br /> Thu nhập hấp dẫn: lương cơ bản + hoa hồng + thưởng. <br /> Đầy đủ BHXH, BHYT, BHTN theo luật. <br /> Thưởng lễ, Tết, thưởng nóng theo hiệu quả. <br /> Cơ hội thăng tiến & tham gia dự án lớn.",
    image: tuyendung4,
  },
  {
    id: 5,
    role: "CỘNG TÁC VIÊN KINH DOANH",

    qlTitle: "Quyền Lợi",
    ql: "Hoa hồng lên đến 80%. <br /> Linh hoạt thời gian – không bắt buộc lên văn phòng. <br /> Có thể sử dụng không gian làm việc chuyên nghiệp tại công ty khi cần. <br /> Nhận data nóng từ Marketing. <br /> Đào tạo dự án đầy đủ, có tài liệu hỗ trợ. <br /> Thưởng du lịch, Team Building, KPI và các phúc lợi hàng năm. <br /> Hoa hồng lũy tiến F1 từ chủ đầu tư.",

    ycTitle: "Yêu cầu",
    yc: "Không yêu cầu kinh nghiệm. <br /> Đam mê kinh doanh, giao tiếp tốt, chủ động.",
    image: tuyendung5,
  }
];

export const DuAn = [
  {
    id: 1,
    name: "LaHome ",
    desc: "LA Home kiến tạo không gian sống thịnh vượng, an yên và hạnh phúc. Nơi tôn tạo cách sống cân bằng giữa hiện đại và bình yên trong không gian xanh mát.",
    alt: "New Link - Khu đô thị - công nghiệp xanh cách TP.HCM 5km, tiện ích nội khu đầy đủ ",
    image: lahome,
    da: "longan",
    logo: logoLaHome,
    link: "/la-home",
  },
  {
    id: 2,
    name: "Kiều By Kita",
    desc: "Tọa lạc tại vị trí đắt giá trên Đại lộ Trần Hưng Đạo - tuyến đường huyết mạch 100 năm lịch sử, là nơi kết nối giao thương kinh tế, văn hóa trọng điểm của Sài Gòn xưa và nay.",
    alt: "New Link - Tầm view đẹp trung tâm TP.HCM, tiện ích 5 sao, vị trí kim cương, phong cách sống riêng tư",
    image: kitahome,
    da: "hcm",
    logo: logoKieu,
    link: "/kieu-by-kita",
  },
  {
    id: 10,
    name: "Làng Omm",
    desc: "Giữa nhịp sống bộn bề, Làng Omm hiện lên như một chốn dừng chân lý tưởng – nơi bạn có thể thả lỏng cơ thể và để tâm trí được chữa lành trong không gian xanh mát của thiên nhiên nguyên sơ. Tọa lạc giữa núi rừng trập trùng, bên những con suối trong veo và đồi chè xanh ngát, Làng Omm không chỉ là một điểm đến nghỉ dưỡng mà còn là hành trình tìm về sự tĩnh tại bên trong.",
    alt: "New Link - Tầm view đẹp trung tâm TP.HCM, tiện ích 5 sao, vị trí kim cương, phong cách sống riêng tư",
    image: langOmm,
    da: "baoloc",
    logo: logoLangOmm,
    link: "/lang-omm",
  },
  {
    id: 11,
    name: "River Park",
    desc: "Tọa lạc ngay cửa ngõ khu Tây TP.HCM, Khu đô thị sinh thái LA Home ôm trọn vị thế đắc địa với mặt tiền Đại lộ Lương Hòa Bình Chánh.",
    alt: "New Link - Tầm view đẹp trung tâm TP.HCM, tiện ích 5 sao, vị trí kim cương, phong cách sống riêng tư",
    image: RiverPark,
    da: "hcm",
    logo: logoRP,
    link: "/river-park",
  },
  {
    id: 3,
    name: "MT Eastmark",
    desc: "Nằm tại trung tâm TP. Thủ Đức, gần Khu Công nghệ cao và các tuyến huyết mạch như Vành đai 3, cao tốc Long Thành – Dầu Giây, MT Eastmark City sở hữu tiềm năng tăng giá và cho thuê vượt trội.",
    alt: "New Link - Vị trí chiến lược, gần cao tốc Long Thành - Dầu Giây, tiện ích resort, tiềm năng tăng giá cao",
    image: mt,
    da: "hcm",
    logo: logoMt,
    link: "/du-an/mt-eastmark",
  },
  {
    id: 4,
    name: "Lancaster Legacy",
    desc: "Tọa lạc tại trung tâm Quận 1, TPHCM, Lancaster Legacy hiện lên như một biểu tượng mới trên cung đường Nguyễn Trãi.",
    alt: "New Link",
    image: lancaster,
    da: "hcm",
    logo: logoLancaster,
    link: "/du-an/lancaster-legacy",
  },
  {
    id: 5,
    name: "DE LA SOL",
    desc: "Căn hộ cao cấp CapitaLand tại quận 4, TP.HCM, lấy cảm hứng từ âm nhạc, thiết kế hiện đại và giàu tính nghệ thuật.",
    alt: "New Link",
    image: delasol,
    da: "hcm",
    logo: logoDelasol,
    link: "/du-an/de-la-sol",
  },
  {
    id: 6,
    name: "Eaton Park",
    desc: "Eaton Park nằm trên đại lộ Mai Chí Thọ, An Phú, TP. Thủ Đức, gần hầm Thủ Thiêm, cao tốc Long Thành và Xa lộ Hà Nội, dễ dàng kết nối trung tâm và vùng lân cận.",
    alt: "New Link",
    image: eaton,
    da: "hcm",
    logo: logoEaton,
    link: "/du-an/eaton-park",
  },
  {
    id: 7,
    name: "Global City",
    desc: "Tiện ích trung tâm thương mại, khu nhạc nước lớn nhất ĐNA, công viên, trường học quốc tế, bênh viện",
    alt: "New Link - Tiện ích trung tâm thương mại, khu nhạc nước lớn nhất ĐNA, công viên, trường học quốc tế, bênh viện",
    image: glocal,
    da: "hcm",
    logo: logoGlobol,
    link: "/du-an/global-city",
  },
  {
    id: 8,
    name: "Celadon City",
    desc: "Công viên 16,4 ha, câu lạc bộ thể thao, trung tâm thương mại, trường học quốc tế",
    alt: "New Link - Công viên 16,4 ha, câu lạc bộ thể thao, trung tâm thương mại, trường học quốc tế",
    image: celadon,
    da: "hcm",
    logo: logoCeladon,
    link: "/du-an/celadon-city",
  },
  {
    id: 9,
    name: "Green Hill Retreat",
    desc: "Nhà dưới tán rừng retreat đầu tiên tại Việt Nam, nơi mỗi mái ấm là một hành trình chữa lành giữa thiên nhiên thuần khiết",
    alt: "New Link - Nhà dưới tán rừng retreat đầu tiên tại Việt Nam, nơi mỗi mái ấm là một hành trình chữa lành giữa thiên nhiên thuần khiết",
    image: greenHill,
    da: "baoloc",
    logo: logoGreenHill,
    link: "/du-an/green-hill-retreat",
  },
];
