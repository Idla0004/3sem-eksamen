import HomeHeadlines from "../homepage/HomeHeadlines";
import VideoComponent from "./VideoComponent";
import { Suspense } from "react";
import VideoContainer from "./VideoContainer";

const LatestVideo = () => {
  return (
    <section className="video-section">
      <HomeHeadlines text="Latest Video" />
      <VideoContainer />
    </section>
  );
};

export default LatestVideo;
