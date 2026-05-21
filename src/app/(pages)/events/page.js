import { ListEventInfo } from "@/app/components/events/ListEventInfo";
import Headline from "@/app/components/Headline";
import { Suspense } from "react";

export default function Events({ searchParams }) {
  return (
    <main>
      <Headline text="events" />
      <Suspense fallback="Loading events...">
        <ListEventInfo
          searchParams={searchParams}
        />
      </Suspense>
    </main>
  );
}
