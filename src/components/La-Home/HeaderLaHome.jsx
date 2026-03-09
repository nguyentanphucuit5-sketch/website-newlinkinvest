"use client";
import React from "react";
import { useLenis } from "../Lenis";

const HeaderLaHome = () => {
    const lenis = useLenis();

    const scrollToContact = () => {
        if (lenis) {
            lenis.scrollTo("bottom", { duration: 1.5 });
        } else {
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }
    };

    return (
        <button
            onClick={scrollToContact}
            style={{
                position: "fixed",
                bottom: "40px",
                right: "40px",
                zIndex: 1000,
                display: "inline-flex",
                height: "42px",
                padding: "7px 24px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "5px",
                border: "2px solid #05A89D",
                background: "#004849",
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "140%",
                fontFamily: "'UTM Avo', sans-serif",
                cursor: "pointer",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 15px rgba(0, 72, 73, 0.4)",
            }}
            onMouseEnter={(e) => {
                e.target.style.background = "#05A89D";
                e.target.style.borderColor = "#05A89D";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 20px rgba(5, 168, 157, 0.5)";
            }}
            onMouseLeave={(e) => {
                e.target.style.background = "#004849";
                e.target.style.borderColor = "#05A89D";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(0, 72, 73, 0.4)";
            }}
            aria-label="Đăng kí tư vấn"
        >
            Đăng kí
        </button>
    );
};

export default HeaderLaHome;
