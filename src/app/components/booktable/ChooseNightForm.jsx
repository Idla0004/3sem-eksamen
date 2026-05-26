"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import BookEventTitle from "./BookEventTitle";

const valideringsSkema = z.object({
  choiceNight: z
    .string()
    .min(1, "Please select an event"),
});

const ChooseNightForm = ({ events = [] }) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(valideringsSkema),
  });

  /* AI HELPED WITH THIS FUNCTION: */
  /* se synopsis om AI brug: Book Table */
  useEffect(() => {
    const diffPageRoute =
      window.location.pathname;
    const eventId = diffPageRoute
      .split("/")
      .pop();

    if (eventId) {
      setValue("choiceNight", eventId);
    }
  }, [setValue]);
  /*  ********************** */

  return (
    <section className="night-container flex justify-center">
      <form className="night-form flex flex-col gap-2 w-(--form-width-small)">
        <label
          htmlFor="choiceNight"
          className="uppercase text-(length:--font-p) font-bold"
        >
          Choice of Night:
        </label>
        <select
          {...register("choiceNight")}
          /* AI HELPED WITH THIS SYNTAX: */
          /* se synopsis om AI brug: Book Table */
          onChange={(night) => {
            const selectedNight =
              night.target.value;
            if (selectedNight) {
              window.location.href = `/booktable/${selectedNight}`;
            }
          }}
          /* **************************** */
          name="choiceNight"
          id="choiceNight"
          className="border p-4 text-(--color-placeholderfont)"
        >
          {events.map((event) => (
            <BookEventTitle
              key={event.id}
              date={event.date}
              location={event.location}
              title={event.title}
              id={event.id}
            />
          ))}
        </select>
        {errors.choiceNight && (
          <div>{errors.choiceNight.message}</div>
        )}
      </form>
    </section>
  );
};

export default ChooseNightForm;
