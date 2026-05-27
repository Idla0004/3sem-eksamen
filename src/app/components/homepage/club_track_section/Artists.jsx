"use client";
import { useState } from "react";
import Image from "next/image";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

const Artists = ({
  songs = [],
  setCurrentSong,
  setisPlaying,
  currentSong,
}) => {
  const [carouselIndex, setCarouselIndex] =
    useState(0);

  const handleSongChoice = (song) => {
    setCurrentSong(song);
    setisPlaying(true);
  };

  const prevSong = () => {
    setCarouselIndex((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1,
    );
  };

  const nextSong = () => {
    setCarouselIndex((prev) =>
      prev === songs.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="w-full relative">
      <div className="w-full overflow-hidden">
        {songs && songs.length > 0 && (
          <ul
            className="flex p-0 m-0 list-none transition-transform duration-500 ease-in-out flex-nowrap flex-row md:transform-none! md:justify-center md:flex-wrap"
            style={{
              transform: `translateX(-${carouselIndex * 100}%)`,
            }}
          >
            {songs.map((song, index) => {
              const isActive =
                currentSong?.id === song.id;

              return (
                <li
                  key={index}
                  className="w-full shrink-0 flex justify-center md:w-auto transition-all duration-500"
                >
                  <div
                    className="artist-track relative max-w-fit cursor-pointer group overflow-hidden"
                    onClick={() =>
                      handleSongChoice(song)
                    }
                  >
                    <Image
                      src={song.image}
                      alt={song.title}
                      width={180}
                      height={180}
                      className="artist-image object-cover max-w-50 min-w-fit md:flex"
                    />

                    <div className="absolute inset-0 flex flex-col bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="border-s-(--pink) border-bs-transparent border-e-transparent border-be-transparent border-s-20 border-bs-0 border-e-0 border-be-20"></div>
                      <div className="flex flex-col items-center mt-auto">
                        <button className="cursor-pointer p-4 relative z-10">
                          <Image
                            src="/assets/icon/Play_btn.svg"
                            alt="a play button"
                            width={35}
                            height={35}
                          />
                        </button>
                      </div>

                      <p className="text-center mt-1 uppercase text-xs text-white px-2 truncate w-full">
                        {song.title}
                      </p>

                      <div className="mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-20 border-e-20 border-be-0 w-0 h-0 self-end"></div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {songs.length > 0 && (
        <div className="flex md:hidden justify-center gap-8 items-center max-w-60 mx-auto mt-4">
          <button
            onClick={prevSong}
            className="text-white border border-white p-1 z-10 hover:border-(--pink) hover:text-(--pink)"
          >
            <BiSolidLeftArrow size={25} />
          </button>
          <button
            onClick={nextSong}
            className="text-white border border-white p-1 z-10 hover:border-(--pink) hover:text-(--pink)"
          >
            <BiSolidRightArrow size={25} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Artists;
