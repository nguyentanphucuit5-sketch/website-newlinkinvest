"use client";
import React, { useState, useEffect } from "react";
import { useLenis } from "../Lenis";

const HeaderLaHome = () => {
    const lenis = useLenis();
    const [isVisible, setIsVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const formEl = document.getElementById("lien-he");
        if (!formEl) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(!entry.isIntersecting);
            },
            { threshold: 0.15 }
        );

        observer.observe(formEl);
        return () => observer.disconnect();
    }, []);

    const scrollToContact = () => {
        const target = document.getElementById("lien-he");
        if (!target) return;
        if (lenis) lenis.stop();
        target.scrollIntoView({ behavior: "smooth" });
        if (lenis) setTimeout(() => lenis.start(), 1500);
    };

    return (
        <button
            onClick={scrollToContact}
            style={{
                position: "fixed",
                bottom: isMobile ? "20px" : "40px",
                right: isMobile ? "20px" : "40px",
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
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? "auto" : "none",
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

