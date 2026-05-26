"use server";
import { revalidatePath } from "next/cache";

export async function PostBooking({
  name,
  email,
  tableNumber,
  guestsAmount,
  choiceNight,
  phoneNumber,
  eventDate,
  bookingMessage,
}) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/reservations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          table: tableNumber,
          guests: guestsAmount,
          eventId: Number(choiceNight),
          phone: phoneNumber,
          date: eventDate,
          content: bookingMessage,
        }),
      },
    );

    /* AI HELPED WITH THIS: */
    /* se synopsis om AI brug: POSTs */
    if (!response.ok) {
      const errorComment = await response.json();
      return {
        success: false,
        error: errorComment.message,
      };
    }

    revalidatePath(`/booktable/${choiceNight}`);

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  /***************/
}
