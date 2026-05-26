"use server";

export async function PostContactInfo({
  name,
  email,
  contactMessage,
}) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/contact_messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          content: contactMessage,
          /* AI HELPED WITH THIS */
          /* se synopsis om AI brug: POSTs */
          date: new Date().toISOString(),
          /************/
          email,
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
