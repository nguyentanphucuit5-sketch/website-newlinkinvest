const OrderTableData = [
  { label: "ID", key: "_id" },
  { label: "Ngày", key: "createdAt" },
  { label: "Khách hàng", key: "customer.name" },
  { label: "SĐT", key: "customer.phone" },
  { label: "Tổng tiền", key: "totalAmount" },
  { label: "Số sản phẩm", key: "cartItems" },
  { label: "Trạng thái", key: "paymentStatus" },
];

const CateBlogTableData = [
  { label: "ID", key: "_id" },
  { label: "Tên danh mục", key: "name" },
  { label: "Slug", key: "slug" },
  { label: "Ngày tạo", key: "createdAt" },
];

const BlogTableData = [
  { label: "ID", key: "_id" },
  { label: "Bài Viết", key: "title" },
  { label: "Tác Giả", key: "author" },
  { label: "Ngày tạo", key: "createdAt" },
];

const AccountTableData = [
  { label: "Email", key: "email" },
  { label: "Họ và tên", key: "fullName" },
  { label: "Số điện thoại", key: "phone" },
  { label: "Trạng thái", key: "isDeleted" },
];

export { OrderTableData, CateBlogTableData, BlogTableData, AccountTableData };
