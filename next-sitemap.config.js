const { TinTucData } = require("./src/utils/tintuc");

module.exports = {
  siteUrl: "https://newlinkinvest.com", // Đặt siteUrl là https://newlinkinvest.com
  changefreq: "daily", // Tần suất thay đổi của các trang trong sitemap
  priority: 0.8, // Độ ưu tiên của các trang
  sitemapSize: 5000, // Số lượng tối đa URL trong mỗi sitemap
  generateRobotsTxt: true, // Tạo robots.txt tự động

  additionalPaths: async (config) => {
    return TinTucData.map((post) => ({
      loc: `/tin-tuc/${post.slug}`,
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(post.date).toISOString(),
    }));
  },

  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;

    // Set higher priority for homepage
    if (path === "/") {
      priority = 1.0; // Trang chủ có độ ưu tiên cao nhất
      changefreq = "hourly"; // Tần suất thay đổi hàng giờ cho trang chủ
    }

    return {
      loc: path, // URL của trang
      changefreq: config.changefreq, // Tần suất thay đổi
      priority: priority, // Độ ưu tiên động
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined, // Ngày cập nhật
      alternateRefs: config.alternateRefs ?? [], // Các tham chiếu thay thế nếu có
    };
  },
};
