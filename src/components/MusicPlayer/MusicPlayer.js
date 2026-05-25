import React, { useState, useRef } from "react";
import "./MusicPlayer.css";
import { useTranslation } from "react-i18next";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const { t } = useTranslation();

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <button
      aria-label="Play music"
      className="music-player-button"
      onClick={togglePlay}
    >
      <audio ref={audioRef} src="/3.mp3" loop />
      <div className={`cd-icon-container ${isPlaying ? "playing" : ""}`}>
        <svg
          viewBox="0 0 24 24"
          className="cd-svg"
          aria-hidden="true"
          fill="white"
        >
          <path
            d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"
            stroke="black"
            strokeWidth="1"
          ></path>
        </svg>
      </div>
      <div >{t("musicPlayer.music")}</div>
    </button>
  );
};

export default MusicPlayer;
