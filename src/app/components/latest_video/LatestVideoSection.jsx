import HomeHeadlines from "../homepage/HomeHeadlines";
import { Suspense } from "react";
import VideoContainer from "./VideoContainer";

const LatestVideo = () => {
  return (
    <section className="video-section">
      <HomeHeadlines text="Latest Video" />
      <Suspense
        fallback={<p>Loading videos..</p>}
      >
        <VideoContainer />
      </Suspense>
    </section>
  );
};

export default LatestVideo;
