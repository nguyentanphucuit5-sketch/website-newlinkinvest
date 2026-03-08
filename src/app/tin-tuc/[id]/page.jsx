import Menu from "@/components/Menu";
import BlogDetail from "@/components/TinTuc/BlogDetail";
import useTrackUserIP from "@/hooks/TrackerIP/useTrackUserIP";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/blog/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store", // luôn lấy dữ liệu mới
  });

  if (!res.ok) {
    return {
      title: "Bài viết không tồn tại",
      description: "Không tìm thấy nội dung bạn yêu cầu.",
      robots: "noindex, nofollow",
    };
  }

  const data = await res.json();
  const blog = data.data;

  const url = `${process.env.NEXT_PUBLIC_URL_API}/blog/${id}`;

  return {
    title: blog.title,
    description: blog.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: blog.title,
      description: blog.metaDescription,
      url: url,
      type: "article",
      images: [
        {
          url: `https://ed74-2402-800-6345-af6d-c9b4-852f-4d76-1cb4.ngrok-free.app/api/image/1751102406919-kitahome.png`,
          width: 800,
          height: 600,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.metaDescription || blog.shortDescription,
      images: [
        `https://ed74-2402-800-6345-af6d-c9b4-852f-4d76-1cb4.ngrok-free.app/api/image/1751102406919-kitahome.png`,
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const DetailNewsPage = () => {
  return (
    <div className="relative md:h-full">
      <div className="max-w-[1240px] mx-auto py-5 px-1 md:px-0">
        <Menu />
        <BlogDetail />
      </div>
    </div>
  );
};

export default DetailNewsPage;
