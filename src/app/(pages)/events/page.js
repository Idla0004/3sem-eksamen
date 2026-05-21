import { ListEventInfo } from "@/app/components/events/ListEventInfo";
import Headline from "@/app/components/Headline";
import { Suspense } from "react";

export default function Events() {
  return (
    <main>
      <Headline text="events" />
      <Suspense>
        <ListEventInfo />
      </Suspense>
    </main>
  );
}
