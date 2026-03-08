"use client";
import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = () => {
  const [text, setText] = useState("https://example.com");

  const downloadQR = () => {
    const canvas = document.querySelector("canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
      <h1 className="text-2xl font-bold mb-4">Trình tạo QR Code</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập đường link..."
        className="border border-gray-300 px-4 py-2 rounded-lg w-80 mb-4 text-center"
      />

      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
        <QRCodeCanvas value={text} size={200} />
        <button
          onClick={downloadQR}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          📥 Tải QR về
        </button>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
