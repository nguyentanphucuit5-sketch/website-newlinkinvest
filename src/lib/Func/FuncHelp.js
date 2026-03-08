const formattedNumber = (item) =>
  item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

function formatDate(isoString) {
  const date = new Date(isoString);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
  const year = date.getUTCFullYear();
  return `${day}/${month}/${year}`;
}

const removeVietnameseTones = (str) => {
  return str
    .normalize("NFD") // Tách dấu khỏi ký tự
    .replace(/[\u0300-\u036f]/g, "") // Xoá dấu
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};

export { formattedNumber, formatDate, removeVietnameseTones };
