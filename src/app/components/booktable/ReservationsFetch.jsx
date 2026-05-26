export async function ReservationsFetch({
  eventId,
}) {
  "use server";
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/reservations`,
    );

    const fetchReservations =
      await response.json();

    /* AI HELPED WITH THIS */
    /* se synopsis om AI brug: Book Table */
    const reserved = fetchReservations
      .filter(
        (eventRes) =>
          eventRes.eventId === eventId,
      )
      .map((res) => res.table);

    return reserved;
  } catch (error) {
    return [];
  }
  /*  ******************* */
}
