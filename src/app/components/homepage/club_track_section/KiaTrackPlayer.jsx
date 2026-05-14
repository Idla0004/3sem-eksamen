"use client";
import { useRef, useState } from "react";
import KiaPlayer from "./KiaPlayer";

const KiaTrackPlayer = () => {
  const songs = [
    {
      title: "black box funky",
      src: "/assets/media/black-box-funky.mp3",
    },
    {
      title: "euphoria",
      src: "/assets/media/euphoria.mp3",
    },
    {
      title: "fashion red tape",
      src: "/assets/media/fashion-red-tape.mp3",
    },
    {
      title: "neon nanny",
      src: "/assets/media/black-box-funky.mp3",
    },
    {
      title: "overload",
      src: "/assets/media/euphoria.mp3",
    },
  ];

  const [song, setSong] = useState(songs);
  const [isPlaying, setIsPlaying] =
    useState(false);
  const [songChoice, setSongChoice] = useState(
    songs[0],
  );

  const audioElement = useRef();

  return (
    <div>
      <audio src="" ref={audioElement}></audio>
      <KiaPlayer
        song={song}
        setSong={setSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioElement={audioElement}
      ></KiaPlayer>
    </div>
  );
};

export default KiaTrackPlayer;
