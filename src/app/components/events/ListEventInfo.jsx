import { cacheLife } from "next/cache";
import ListEventCard from "./ListEventCard";
import Link from "next/link";

export async function ListEventInfo({
  searchParams,
}) {
  "use cache";
  cacheLife("hours");

  console.log(
    "ListEventInfo searchParams:",
    searchParams,
  );
  try {
    const limit = 3;
    const pageNumber =
      Number(searchParams?.page) || 1;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/events?_page=${pageNumber}&_limit=${limit}`,
    );

    const FetchEvents = await response.json();

    return (
      <section>
        <div>
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
                event.asset.alt
              }
            />
          ))}
        </div>
        <div>
          {pageNumber > 1 && (
            <Link
              href={{
                pathname: "/events",
                query: {
                  page: pageNumber - 1,
                },
              }}
            >
              Previous
            </Link>
          )}

          {FetchEvents.length === limit && (
            <Link
              href={{
                pathname: "/events",
                query: { page: pageNumber + 1 },
              }}
            >
              Next
            </Link>
          )}
        </div>
      </section>
    );
  } catch (error) {
    return (
      <p>Failed to load upcoming events...</p>
    );
  }
}
