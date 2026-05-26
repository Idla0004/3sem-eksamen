"use server";

export async function PostMailInfo({ email }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/newsletters`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      },
    );
    /* AI HELPED WITH THIS: */
    /* se synopsis om AI brug: POSTs */
    if (!response.ok) {
      if (response.status === 409) {
        return {
          success: false,
          error:
            "This email is already subscribed to our newsletter!",
        };
      }

      const errorResponse = await response.json();
      return {
        success: false,
        error:
          errorResponse.message ||
          "Subscription failed!",
      };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error:
        error.message ||
        "An unexpected error occured.",
    };
  }
}
/***************/
