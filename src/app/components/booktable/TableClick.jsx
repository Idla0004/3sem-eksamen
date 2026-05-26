"use client";

const TableClick = ({
  children,
  tableNumber,
  reserved,
}) => {
  /* AI HELPED WITH THIS FUNCTION: */
  /* se synopsis om AI brug: Book Table */

  const scrollToBookTableForm = () => {
    const formSection = document.querySelector(
      "#book-table-form",
    );
    if (formSection) {
      formSection.scrollIntoView({
        behavior: "smooth",
      });
    }
    const tableInput = document.querySelector(
      "#tableNumber",
    );
    if (tableInput) {
      tableInput.focus();
    }
  };
  /* ******************************** */

  return (
    <div
      className="relative text-center cursor-pointer"
      /* AI HELPED WITH THIS SYNTAX: */
      /* se synopsis om AI brug: Book Table */
      onClick={() => {
        if (reserved.includes(tableNumber)) {
          alert(
            "This table is already booked. Please select an available table.",
          );
          return;
        }
        const selectedTable =
          document.querySelector("#tableNumber");
        if (selectedTable) {
          selectedTable.value = tableNumber;
        }
        scrollToBookTableForm();
      }}
      /* ************************** */
    >
      {children}
    </div>
  );
};

export default TableClick;
