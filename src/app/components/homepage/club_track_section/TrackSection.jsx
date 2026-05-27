import HomeHeadlines from "../HomeHeadlines";
import TrackPlayer from "./TrackPlayer";
import Artists from "./ArtistCarousel";
import { Suspense } from "react";

const TrackSection = () => {
  return (
    <section className="track-container">
      <HomeHeadlines text="night club track" />
      <TrackPlayer />
      <Artists />
    </section>
  );
};

export default TrackSection;
