import { ListEventInfo } from "@/app/components/events/ListEventInfo";
import Header from "@/app/components/Header";
import Headline from "@/app/components/Headline";
import Loading from "@/app/loading";
import { Suspense } from "react";

export default function Events({ searchParams }) {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <div className="sticky-container">
          <Header />
        </div>
        <Headline text="events" />
        <ListEventInfo
          searchParams={searchParams}
        />
      </Suspense>
    </main>
  );
}
