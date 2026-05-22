"use client";
import Image from "next/image";
import {
  BiSolidLeftArrow,
  BiSolidRightArrow,
} from "react-icons/bi";
import { useState, useEffect } from "react";

const artistImages = {
  "Black Box Funky":
    "/assets/content-img/track1.jpg",
  Euphoria: "/assets/content-img/track2.jpg",
  "Fashion Red Tape":
    "/assets/content-img/track3.jpg",
  "Neon Nanny": "/assets/content-img/track4.jpg",
  Overload: "/assets/content-img/track5.jpg",
};

export default function Artists({
  songs = [],
  setCurrentSong,
  setisPlaying,
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] =
    useState(0);

  useEffect(() => {
    const checkScreen = () =>
      setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener(
      "resize",
      checkScreen,
    );
    return () =>
      window.removeEventListener(
        "resize",
        checkScreen,
      );
  }, []);

  useEffect(() => {
    if (!isMobile) setCurrentIndex(0);
  }, [isMobile]);

  const handleSongChoice = (song) => {
    setCurrentSong(song);
    setisPlaying(true);
  };

  const next = () =>
    setCurrentIndex(
      (prev) => (prev + 1) % songs.length,
    );
  const prev = () =>
    setCurrentIndex(
      (prev) =>
        (prev - 1 + songs.length) % songs.length,
    );

  if (isMobile && songs.length > 0) {
    return (
      <div className="w-full mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="p-2 text-white border"
        >
          <BiSolidLeftArrow size={25} />
        </button>
        <div
          onClick={() =>
            handleSongChoice(songs[currentIndex])
          }
          className="relative cursor-pointer group"
        >
          <Image
            src={
              artistImages[
                songs[currentIndex]?.title
              ]
            }
            alt={songs[currentIndex]?.title}
            width={200}
            height={200}
            className="max-h-50 max-w-50 object-cover"
          />
          <div className="absolute inset-0 flex flex-col bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="border-s-(--pink) border-bs-transparent border-e-transparent border-be-transparent border-s-20 border-bs-0 border-e-0 border-be-20"></div>
            <div className="flex flex-col items-center mt-auto flex-1 justify-center">
              <button className="cursor-pointer p-4 relative z-10">
                <Image
                  src="/assets/icon/Play_btn.svg"
                  alt="Play"
                  width={35}
                  height={35}
                />
              </button>
              <p className="text-center mt-1 uppercase text-sm text-white">
                {songs[currentIndex]?.title}
              </p>
            </div>
            <div className="mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-20 border-e-20 border-be-0 w-0 h-0 self-end"></div>
          </div>
        </div>
        <button
          onClick={next}
          className="p-2 text-white border"
        >
          <BiSolidRightArrow size={25} />
        </button>
      </div>
    );
  }

  return (
    <ul className="artists-scroller flex flex-row w-full p-0 m-0 list-none overflow-x-scroll">
      {songs.map((song) => (
        <li key={song.title} className="shrink-0">
          <div
            onClick={() => handleSongChoice(song)}
            className="relative cursor-pointer group artist-track h-full w-full"
          >
            <Image
              src={artistImages[song.title]}
              alt={song.title}
              width={250}
              height={250}
              layout="responsive"
              className="h-fit w-fit object-cover"
            />
            <div className="absolute inset-0 flex flex-col bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="border-s-(--pink) border-bs-transparent border-e-transparent border-be-transparent border-s-20 border-bs-0 border-e-0 border-be-20"></div>
              <div className="flex flex-col items-center mt-auto flex-1 justify-center">
                <button className="cursor-pointer p-4 relative z-10">
                  <Image
                    src="/assets/icon/Play_btn.svg"
                    alt="Play"
                    width={35}
                    height={35}
                  />
                </button>
                <p className="text-center mt-1 uppercase text-sm text-white">
                  {song.title}
                </p>
              </div>
              <div className="mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-20 border-e-20 border-be-0 w-0 h-0 self-end"></div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
