"use Client";
import { useRef, useState } from "react";

import { FaFastForward } from "react-icons/fa";
import { FaFastBackward } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegCirclePause } from "react-icons/fa6";
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";

const Player = ({
  audioElem,
  isPlaying,
  setisPlaying,
  currentSong,
  setCurrentSong,
  songs,
  currentTime,
  duration,
}) => {
  const clickRef = useRef();

  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const PlayPause = () => {
    setisPlaying(!isPlaying);
  };

  const checkWidth = (e) => {
    if (!duration) return;
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const audioprogress = offset / width;
    audioElem.current.currentTime =
      audioprogress * duration;
  };

  const prevSong = () => {
    const index = songs.findIndex(
      (x) => x.title == currentSong.title,
    );
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
  };

  const nextSong = () => {
    const index = songs.findIndex(
      (x) => x.title == currentSong.title,
    );

    if (index == songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
  };

  // AI HELPED WITH THIS //
  //  Se synopsis om AI brug: Player.jsx
  const handleVolumeChange = (e) => {
    const rawVolume = parseFloat(e.target.value);

    const newVolume = Math.max(
      0,
      Math.min(1, rawVolume),
    );

    setVolume(newVolume);

    if (audioElem.current) {
      audioElem.current.volume = newVolume;
    }

    if (newVolume > 0) {
      setIsMuted(false);
    } else {
      setIsMuted(true);
    }
  };
  const toggleMute = () => {
    if (isMuted) {
      audioElem.current.volume = volume;
      setIsMuted(false);
    } else {
      audioElem.current.volume = 0;
      setIsMuted(true);
    }
  };
  /////////////////

  // AI HELPED WITH THIS //
  //  Se synopsis om AI brug: Player.jsx
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(
      timeInSeconds / 60,
    );
    const secs = Math.floor(timeInSeconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const progressPercent = duration
    ? (currentTime / duration) * 100
    : 0;
  ///////////////////////////////

  return (
    <div className="music-container flex flex-col text-center mx-auto px-8 w-full">
      <div className="title mb-10 font-bold text-xl text-left">
        <p>{currentSong.title}</p>
      </div>

      <div className="navigation mb-4 flex items-center">
        <div
          className="navigation-wrapper bg-trackbg h-1 cursor-pointer w-full relative"
          onClick={checkWidth}
          ref={clickRef}
        >
          <div
            className="progress-bar h-1 bg-progressbg relative"
            style={{
              width: `${progressPercent}%`,
            }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-progressbg transition-transform duration-100 hover:scale-125" />
          </div>
        </div>
      </div>

      <div className="track-controls flex flex-row text-2xl justify-between items-center pt-2">
        <div className="time-display flex flex-row text-(length:--small-p) text-progressbg gap-1 font-medium self-center">
          <span>{formatTime(currentTime)}</span>
          <span>/</span>
          <span>{formatTime(duration)}</span>
        </div>
        <div className="track-icons flex flex-row gap-6 justify-between ">
          <FaFastBackward
            className="btn-prevnext"
            onClick={prevSong}
          />
          {isPlaying ? (
            <FaRegCirclePause
              className="btn-playpause"
              onClick={PlayPause}
            />
          ) : (
            <FaRegCirclePlay
              className="btn-playpause"
              onClick={PlayPause}
            />
          )}
          <FaFastForward
            className="btn-prevnext"
            onClick={nextSong}
          />
        </div>
        <div className="volume-container flex items-center gap-2 group text-2xl pt-5 m-auto md:pt-0 md:m-0">
          {/* AI HELPED WITH THIS */}
          {/* Se synopsis om AI brug: Player.jsx*/}
          <button
            onClick={toggleMute}
            className="focus:outline-none text-2xl hover:text-trackbg"
          >
            {isMuted || volume === 0 ? (
              <FaVolumeMute />
            ) : (
              <FaVolumeUp />
            )}
          </button>
          {/* ////////////// */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="volume-slider w-25 h-1 appearance-none cursor-pointer bg-trackbg"
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
