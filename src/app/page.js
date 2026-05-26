import { Suspense } from "react";
import Hero from "./components/homepage/Hero";
import WelcomeSection from "./components/homepage/welcomesection/WelcomeSection";
import GallerySection from "./components/homepage/night_club_gallery/GallerySection";
import FeaturedSection from "./components/homepage/featuredevents_section/FeaturedSection";
import TestimonialsSection from "./components/homepage/testimonials_section/TestimonialsSection";
import LatestVideo from "./components/latest_video/LatestVideoSection";
import TrackSection from "./components/homepage/club_track_section/TrackSection";
import MailSection from "./components/homepage/mail_list/MailSection";
import Header from "./components/Header";
import Loading from "./loading";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Hero />
        <div className="sticky-container">
          <Header />
        </div>
        <WelcomeSection />
        <FeaturedSection />
        <GallerySection />
        <TrackSection />
        <LatestVideo />
        <TestimonialsSection />
        <MailSection />
      </Suspense>
    </main>
  );
}
