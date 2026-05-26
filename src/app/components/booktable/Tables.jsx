import Image from "next/image";
import { ReservationsFetch } from "./ReservationsFetch";
import TableClick from "./TableClick";

const Tables = async ({ eventId }) => {
  /* AI HELPED WITH THIS */
  /* se synopsis om AI brug: Book table */
  const reserved = await ReservationsFetch({
    eventId,
  });
  /*  ****************** */

  return (
    <section>
      <div className="table-container my-large">
        <TableClick
          tableNumber="1"
          reserved={reserved}
        >
          <Image
            src="/assets/table/table_1.png"
            alt="Table 1"
            width={300}
            height={200}
            id="1"
            className="table-img"
            style={{
              opacity: reserved.includes("1")
                ? 0.3
                : 1,
              background: reserved.includes("1")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            1
          </p>
        </TableClick>

        <TableClick
          tableNumber="2"
          reserved={reserved}
        >
          <Image
            src="/assets/table/table_1.png"
            alt="Table 2"
            width={300}
            height={200}
            id="2"
            className="table-img"
            style={{
              opacity: reserved.includes("2")
                ? 0.3
                : 1,
              background: reserved.includes("2")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            2
          </p>
        </TableClick>
        <TableClick
          tableNumber="3"
          reserved={reserved}
        >
          <Image
            src="/assets/table/table_2.png"
            alt="Table 3"
            width={300}
            height={200}
            id="3"
            className="table-img"
            style={{
              opacity: reserved.includes("3")
                ? 0.3
                : 1,
              background: reserved.includes("3")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            3
          </p>
        </TableClick>
        <TableClick
          tableNumber="4"
          reserved={reserved}
        >
          <Image
            src="/assets/table/table_1.png"
            alt="Table 4"
            width={300}
            height={200}
            id="4"
            className="table-img"
            style={{
              opacity: reserved.includes("4")
                ? 0.3
                : 1,
              background: reserved.includes("4")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            4
          </p>
        </TableClick>
        <TableClick
          tableNumber="5"
          reserved={reserved}
        >
          <Image
            src="/assets/table/table_3.png"
            alt="Table 5"
            width={300}
            height={200}
            id="5"
            className="table-img"
            style={{
              opacity: reserved.includes("5")
                ? 0.3
                : 1,
              background: reserved.includes("5")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            5
          </p>
        </TableClick>
        <TableClick
          tableNumber="6"
          reserved={reserved}
        >
          <Image
            src="/assets/table/table_1.png"
            alt="Table 6"
            width={300}
            height={200}
            id="6"
            className="table-img"
            style={{
              opacity: reserved.includes("6")
                ? 0.3
                : 1,
              background: reserved.includes("6")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            6
          </p>
        </TableClick>
        <TableClick
          tableNumber="7"
          reserved={reserved}
        >
          <Image
            src="/assets/table/table_1.png"
            alt="Table 7"
            width={300}
            height={200}
            id="7"
            className="table-img"
            style={{
              opacity: reserved.includes("7")
                ? 0.3
                : 1,
              background: reserved.includes("7")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            7
          </p>
        </TableClick>
        <TableClick
          tableNumber="8"
          reserved={reserved}
        >
          <Image
            src="/assets/table/table_2.png"
            alt="Table 8"
            width={300}
            height={200}
            id="8"
            className="table-img"
            style={{
              opacity: reserved.includes("8")
                ? 0.3
                : 1,
              background: reserved.includes("8")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            8
          </p>
        </TableClick>
        <TableClick
          tableNumber="9"
          reserved={reserved}
        >
          <Image
            src="/assets/table/table_1.png"
            alt="Table 9"
            width={300}
            height={200}
            id="9"
            className="table-img"
            style={{
              opacity: reserved.includes("9")
                ? 0.3
                : 1,
              background: reserved.includes("9")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            9
          </p>
        </TableClick>
        <TableClick
          tableNumber="10"
          reserved={reserved}
        >
          <Image
            src="/assets/table/table_3.png"
            alt="Table 10"
            width={300}
            height={200}
            id="10"
            className="table-img"
            style={{
              opacity: reserved.includes("10")
                ? 0.3
                : 1,
              background: reserved.includes("10")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            10
          </p>
        </TableClick>
        <TableClick
          tableNumber="11"
          reserved={reserved}
        >
          <Image
            src="/assets/table/table_1.png"
            alt="Table 11"
            width={300}
            height={200}
            id="11"
            className="table-img"
            style={{
              opacity: reserved.includes("11")
                ? 0.3
                : 1,
              background: reserved.includes("11")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            11
          </p>
        </TableClick>
        <TableClick
          tableNumber="12"
          reserved={reserved}
        >
          <Image
            src="/assets/table/table_1.png"
            alt="Table 12"
            width={300}
            height={200}
            id="12"
            className="table-img"
            style={{
              opacity: reserved.includes("12")
                ? 0.3
                : 1,
              background: reserved.includes("12")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            12
          </p>
        </TableClick>
        <TableClick
          tableNumber="13"
          reserved={reserved}
        >
          <Image
            src="/assets/table/table_2.png"
            alt="Table 13"
            width={300}
            height={200}
            id="13"
            className="table-img"
            style={{
              opacity: reserved.includes("13")
                ? 0.3
                : 1,
              background: reserved.includes("13")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            13
          </p>
        </TableClick>
        <TableClick
          tableNumber="14"
          reserved={reserved}
        >
          <Image
            src="/assets/table/table_1.png"
            alt="Table 14"
            width={300}
            height={200}
            id="14"
            className="table-img"
            style={{
              opacity: reserved.includes("14")
                ? 0.3
                : 1,
              background: reserved.includes("14")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            14
          </p>
        </TableClick>
        <TableClick
          tableNumber="15"
          reserved={reserved}
        >
          <Image
            src="/assets/table/table_3.png"
            alt="Table 15"
            width={300}
            height={200}
            id="15"
            className="table-img"
            style={{
              opacity: reserved.includes("15")
                ? 0.3
                : 1,
              background: reserved.includes("15")
                ? "red"
                : "none",
            }}
          />
          <p className="booking-number absolute text-(length:--font-table-p)">
            15
          </p>
        </TableClick>
      </div>
    </section>
  );
};

export default Tables;
