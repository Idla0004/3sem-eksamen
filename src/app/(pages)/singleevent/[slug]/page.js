import Headline from "@/app/components/Headline";
import { AmountFetch } from "@/app/components/singleevent/AmountFetch";
import CommentForm from "@/app/components/singleevent/CommentForm";
import { EventComments } from "@/app/components/singleevent/EventComments";
import EventOverview from "@/app/components/singleevent/EventOverview";
import { Suspense } from "react";
import Header from "@/app/components/Header";
import Loading from "@/app/loading";

const SingleEvent = ({ params }) => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <div className="sticky-container">
          <Header />
        </div>
        <Details params={params}></Details>
      </Suspense>
    </main>
  );
};

const Details = async ({ params }) => {
  const { slug } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${slug}`,
  );

  const event = await response.json();

  return (
    <main>
      <Headline text={event.title} />
      <EventOverview
        imagesrc={`${process.env.NEXT_PUBLIC_API_URL}${event.heroAsset?.url}`}
        alt={
          event.heroAsset?.alt || event.asset.alt
        }
        date={event.date}
        doorsOpen={event.doorsOpen}
        startTime={event.schedule[0].time}
        location={event.location}
        category={event.category}
        price={event.price}
        ageRestriction={event.ageLimit}
        lineUp={event.lineup}
        schedule={event.schedule[2].time}
        content={event.content}
        id={event.id}
      />
      <section className="commentsection">
        <AmountFetch id={event.id}></AmountFetch>
        <EventComments id={event.id} />
      </section>
      <CommentForm eventId={event.id} />
    </main>
  );
};

export default SingleEvent;
