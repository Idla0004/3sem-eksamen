import ListEventCard from "./ListEventCard";
import EventsPagination from "./EventsPagination";

export async function ListEventInfo({
  searchParams,
}) {
  "use server";
  /* AI HJALP MED SYNTAKS RÆKKEFØLGE */
  // Se synopsis om AI brug: ListEventInfo.jsx
  const getParams = await searchParams;
  const currentPage =
    Number(getParams?.page) || 1;
  const limit = 3;
  ////////

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/events?_page=${currentPage}&_limit=${limit}`,
    );
    const FetchEvents = await response.json();

    return (
      <>
        {FetchEvents.map((event) => (
          <ListEventCard
            key={event.id}
            slug={event.slug}
            id={event.id}
            date={event.date}
            location={event.location}
            title={event.title}
            description={event.description}
            imagesrc={`${process.env.NEXT_PUBLIC_API_URL}${event.heroAsset?.url}`}
            alt={
              event.heroAsset?.alt ||
              event.asset?.alt
            }
          />
        ))}

        {/* AI HJALP MED AT OPDELE KNAPPER TIL NYT KOMPONENT  */}
        <EventsPagination
          currentPage={currentPage}
        />
      </>
    );
  } catch (error) {
    return (
      <p>Failed to load upcoming events...</p>
    );
  }
}
