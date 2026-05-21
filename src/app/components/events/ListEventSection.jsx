import { ListEventInfo } from "./ListEventInfo";
import Link from "next/link";

const ListEventSection = ({
  pageNumber,
  FetchEvents,
}) => {
  return (
    <section>
      <ListEventInfo></ListEventInfo>
      {pageNumber !== 1 && (
        <Link
          href={
            pageNumber === 2
              ? "/events"
              : {
                  pathname: "/events",
                  query: {
                    page:
                      pageNumber > 1
                        ? pageNumber - 1
                        : 1,
                  },
                }
          }
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
    </section>
  );
};

export default ListEventSection;
