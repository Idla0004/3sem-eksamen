import HomeHeadlines from "../homepage/HomeHeadlines";
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
