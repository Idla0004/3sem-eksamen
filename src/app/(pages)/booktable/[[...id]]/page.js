import Header from "@/app/components/Header";
import BookTableForm from "@/app/components/booktable/BookTableForm";
import Headline from "@/app/components/Headline";
import Tables from "@/app/components/booktable/Tables";
import { Suspense } from "react";
import { EventFetch } from "@/app/components/booktable/EventFetch";
import BookEventHeadline from "@/app/components/booktable/BookEventHeadline";
import ChooseNightForm from "@/app/components/booktable/ChooseNightForm";
import Loading from "@/app/loading";

const BookTable = ({ params }) => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Details params={params}></Details>
      </Suspense>
    </main>
  );
};

const Details = async ({ params }) => {
  const { id } = await params;
  const events = await EventFetch();

  /* AI HELPED WITH THIS */
  if (!id) {
    return (
      <main>
        <div className="sticky-container">
          <Header />
        </div>
        <Headline text="Book Table" />
        <section className="justify-center items-center place-content-center col-span-full mt-large">
          <ChooseNightForm events={events} />
          <p className="text-center my-large">
            Please select a night to see available
            tables
          </p>
        </section>
      </main>
    );
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${id}`,
  );

  const event = await response.json();

  return (
    <main>
      <div className="sticky-container">
        <Header />
      </div>
      <Headline text="Book Table" />
      <section className="grid grid-cols-subgrid col-span-full mt-8">
        <BookEventHeadline
          title={event.title}
          date={event.date}
        />
        <ChooseNightForm events={events} />
        <Tables eventId={event.id} />
        <BookTableForm
          eventId={event.id}
          eventDate={event.date}
          events={events}
        >
          <EventFetch />
        </BookTableForm>
      </section>
    </main>
  );
};

export default BookTable;
