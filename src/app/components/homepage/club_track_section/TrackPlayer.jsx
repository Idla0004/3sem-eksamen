"use client";
import ArtistCarousel from "./ArtistCarousel";
import Player from "./Player";
import Image from "next/image";
import {
  useRef,
  useState,
  useEffect,
} from "react";

const songsdata = [
  {
    id: 1,
    title: "Black Box Funky",
    src: "/assets/media/black-box-funky.mp3",
    image: "/assets/content-img/track1.jpg",
  },
  {
    id: 2,
    title: "Euphoria",
    src: "/assets/media/euphoria.mp3",
    image: "/assets/content-img/track2.jpg",
  },
  {
    id: 3,
    title: "Fashion Red Tape",
    src: "/assets/media/fashion-red-tape.mp3",
    image: "/assets/content-img/track3.jpg",
  },
  {
    id: 4,
    title: "Neon Nanny",
    src: "/assets/media/black-box-funky.mp3",
    image: "/assets/content-img/track4.jpg",
  },
  {
    id: 5,
    title: "Overload",
    src: "/assets/media/euphoria.mp3",
    image: "/assets/content-img/track5.jpg",
  },
];

const TrackPlayer = () => {
  const [songs] = useState(songsdata);
  const [isPlaying, setisPlaying] =
    useState(false);
  const [currentSong, setCurrentSong] = useState(
    songsdata[0],
  );
  const [currentTime, setCurrentTime] =
    useState(0);
  const [duration, setDuration] = useState(0);

  const audioElem = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying, currentSong.src]);

  const onPlaying = () => {
    if (audioElem.current) {
      setCurrentTime(
        audioElem.current.currentTime,
      );
    }
  };

  const onLoadedMetadata = () => {
    if (audioElem.current) {
      setDuration(audioElem.current.duration);
    }
  };

  return (
    <div className="track-player-container w-full max-w-250 m-auto select-none">
      <div className="track-player-wrapper flex flex-row w-full h-full relative">
        <div className="current-track-image max-w-50 max-h-50 relative">
          <Image
            className="object-cover"
            src={
              currentSong.image ||
              "/assets/content-img/track1.jpg"
            }
            alt={`Image of artist for ${currentSong.title}`}
            width={250}
            height={250}
            priority
          />
        </div>
        <div className="player-controls-wrapper flex flex-col justify-center w-full m-auto">
          <audio
            src={currentSong.src}
            ref={audioElem}
            onTimeUpdate={onPlaying}
            onLoadedMetadata={onLoadedMetadata}
          />

          <Player
            songs={songs}
            isPlaying={isPlaying}
            setisPlaying={setisPlaying}
            audioElem={audioElem}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            currentTime={currentTime}
            duration={duration}
          />
        </div>
      </div>
      <ArtistCarousel
        songs={songs}
        setCurrentSong={setCurrentSong}
        setisPlaying={setisPlaying}
        currentSong={currentSong}
      />
    </div>
  );
};

export default TrackPlayer;
