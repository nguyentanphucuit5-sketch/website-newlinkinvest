"use client";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import React from "react";

const FooterProvider = () => {
  const pathname = usePathname();
  const isExcluded =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/kieu-by-kita") ||
    pathname.startsWith("/la-home") ||
    pathname.startsWith("/lang-omm") ||
    pathname.startsWith("/auth") ||
    pathname.startsWith("/verify-email") ||
    pathname.startsWith("/river-park");

  return <div> {!isExcluded && <Footer />}</div>;
};

export default FooterProvider;
