"use client";
import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Bắt đầu với trạng thái không phát

  useEffect(() => {
    audioRef.current = new Audio("/backgroundMusic.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 1;
    audioRef.current.muted = true;

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (!isPlaying) {
      audioRef.current.muted = false; // Bỏ mute khi người dùng tương tác
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Không thể phát nhạc:", err);
        });
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      style={{ position: "fixed", zIndex: 1000 }}
      className={`w-screen h-screen ${isPlaying && "hidden"}`}
    >
      {!isPlaying && (
        <button
          onClick={togglePlay}
          onMouseEnter={togglePlay}
          onMouseDown={togglePlay}
          onMouseLeave={togglePlay}
          onScroll={togglePlay}
          onTouchStart={togglePlay} // cho iOS & Android
          className="w-full h-full  px-4 py-2  text-black rounded-lg shadow"
        >
          {isPlaying ? "" : ""}
        </button>
      )}
    </div>
  );
}
