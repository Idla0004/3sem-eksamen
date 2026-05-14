import HomeHeadlines from "../HomeHeadlines";
import TrackPlayer from "./TrackPlayer";
import Artists from "./Artists";
import KiaTrackPlayer from "./KiaTrackPlayer";

const TrackSection = () => {
  return (
    <section>
      <HomeHeadlines text="night club track" />
      <KiaTrackPlayer />
      <Artists />
    </section>
  );
};

export default TrackSection;
