import Link from "next/link";

// AI HELPED WITH THIS //
// Se synopsis om AI brug: EventsPagination.jsx
const EventsPagination = ({ currentPage }) => {
  const totalPages = 3;
  const pages = [1, 2, 3];

  let previousButtonClass =
    "text-foreground cursor-pointer transition";
  let nextButtonClass =
    "text-foreground cursor-pointer transition";

  if (currentPage === 1) {
    previousButtonClass =
      "text-foreground/50 pointer-events-none";
  }

  if (currentPage === totalPages) {
    nextButtonClass =
      "text-foreground/50 pointer-events-none";
  }
  ////////

  return (
    <nav
      className="pagination-content flex items-center justify-center gap-x-6 my-8"
      aria-label="Pagination"
    >
      <Link
        href={`?page=${currentPage - 1}`}
        className={previousButtonClass}
      >
        Previous
      </Link>

      <div className="flex items-center gap-x-5">
        {pages.map((page) => {
          const isActive = page === currentPage;
          return (
            <Link
              key={page}
              href={`?page=${page}`}
              aria-current={
                isActive ? "page" : undefined
              }
              className={` transition ${
                isActive
                  ? "text-foreground font-bold underline"
                  : "text-foreground/70 cursor-pointer hover:text-foreground"
              }`}
            >
              {page}
            </Link>
          );
        })}
      </div>

      <Link
        href={`?page=${currentPage + 1}`}
        className={nextButtonClass}
      >
        Next
      </Link>
    </nav>
  );
};

export default EventsPagination;
