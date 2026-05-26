"use client";
import { useForm } from "react-hook-form";
import PrimaryButtons from "../buttons/PrimaryButtons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useEffect } from "react";
import { PostBooking } from "./PostBooking";
import BookEventTitle from "./BookEventTitle";

const valideringsSkema = z.object({
  name: z
    .string()
    .min(
      2,
      "Please have a name with more than one letter",
    ),
  email: z.email(),
  bookingMessage: z
    .string()
    .max(
      100,
      "Say it with less words, please... No more than 100 characters!",
    ),
  guestsAmount: z.coerce
    .number()
    .gte(
      1,
      "Please insert a number bewteen 1-8 guests",
    )
    .lte(
      8,
      "Please insert a number bewteen 1-8 guests",
    ),
  phoneNumber: z
    .string()
    .length(
      8,
      "Please insert a danish phone number, 8 digits long.",
    ),
  tableNumber: z
    .string()
    .min(1, "Please select a table"),
  choiceNight: z
    .string()
    .min(1, "Please select an event"),
});

const BookTableForm = ({
  eventDate,
  events = [],
}) => {
  const {
    register,
    handleSubmit,
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
    const defaultTitle =
      document.querySelector("#default");
    if (eventId) {
      setValue("choiceNight", eventId);
    }
  }, [setValue]);
  /*  ********************** */

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    /* AI HJALP MED DETTE: MEDTAG DATA FRA POST komponent */
    /* se synopsis om AI brug: Forms */
    const result = await PostBooking({
      name: data.name,
      email: data.email,
      tableNumber: data.tableNumber,
      guestsAmount: data.guestsAmount,
      choiceNight: data.choiceNight,
      phoneNumber: data.phoneNumber,
      eventDate: eventDate,
      bookingMessage: data.bookingMessage,
    });
    console.log("result:", result);
    /*************/

    if (result.success) {
      setMessage(
        "Thank you for submitting your booking!",
      );
    } else {
      setMessage(
        "Ooops! We failed to submit your booking...",
      );
    }
  };

  const [bookingName, setBookingName] =
    useState("");
  const [bookingEmail, setBookingEmail] =
    useState("");
  const [phoneNumber, setPhoneNumber] =
    useState("");
  const [tableNumber, setTableNumber] =
    useState("");
  const [guestsAmount, setGuestsAmount] =
    useState("");
  const [choiceNight, setChoiceNight] =
    useState("");

  const [bookingMessage, setBookingMessage] =
    useState("");
  const [bookingId, setBookingId] = useState("");

  const updateBookings = () => {
    setBookingName(bookingName);
    setBookingEmail(bookingEmail);
    setPhoneNumber(phoneNumber);
    setTableNumber(tableNumber);
    setGuestsAmount(guestsAmount);
    setChoiceNight(choiceNight);
    setBookingMessage(bookingMessage);
    setBookingId(bookingId);
  };

  return (
    <section
      id="book-table-form"
      className="form-container my-20"
    >
      <h1 className="text-(length:--font-h2) uppercase font-bold my-6 mx-4">
        book a table
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-4 "
      >
        <div className="input-wrapper flex gap-[1.3em] flex-wrap">
          <div className="flex flex-col">
            <input
              {...register("name")}
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="name-input border p-4"
            ></input>
            {errors.name && (
              <div className="text-alert">
                {errors.name.message}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <input
              {...register("email")}
              type="text"
              name="email"
              id="email"
              placeholder="Your email"
              className="email-input border p-4"
            ></input>
            {errors.email && (
              <div className="text-alert">
                {errors.email.message}
              </div>
            )}
          </div>
        </div>
        <div className="input-wrapper flex gap-[1.3em] flex-wrap">
          <div className="flex flex-col">
            <select
              {...register("tableNumber")}
              name="tableNumber"
              id="tableNumber"
              disabled
              placeholder="Table Number"
              className="table-input border p-4 text-(--color-placeholderfont)"
            >
              <option value="1">Table: 1</option>
              <option value="2">Table: 2</option>
              <option value="3">Table: 3</option>
              <option value="4">Table: 4</option>
              <option value="5">Table: 5</option>
              <option value="6">Table: 6</option>
              <option value="7">Table: 7</option>
              <option value="8">Table: 8</option>
              <option value="9">Table: 9</option>
              <option value="10">
                Table: 10
              </option>
              <option value="11">
                Table: 11
              </option>
              <option value="12">
                Table: 12
              </option>
              <option value="13">
                Table: 13
              </option>
              <option value="14">
                Table: 14
              </option>
              <option value="15">
                Table: 15
              </option>
            </select>
            {errors.tableNumber && (
              <div className="text-alert">
                {errors.tableNumber.message}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <input
              {...register("guestsAmount")}
              type="number"
              name="guestsAmount"
              id="guestsAmount"
              placeholder="Number Of Guests"
              className="guests-input border p-4"
            ></input>
            {errors.guestsAmount && (
              <div className="text-alert">
                {errors.guestsAmount.message}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap">
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
            className="border p-4 hidden text-(--color-placeholderfont)"
          >
            <option
              id="default"
              className="text-(--color-formfont)"
            >
              Choose Night
            </option>
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
            <div className="text-alert">
              {errors.choiceNight.message}
            </div>
          )}
          <input
            {...register("phoneNumber")}
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Your Contact Number"
            className="border p-4 w-(--form-width-big) "
          ></input>
          {errors.phoneNumber && (
            <div className="text-alert">
              {errors.phoneNumber.message}
            </div>
          )}
        </div>
        <div className="flex flex-col w-(--form-width-big)">
          <textarea
            {...register("bookingMessage")}
            type="text"
            name="bookingMessage"
            id="bookingMessage"
            placeholder="Your comment"
            className="border p-4 w-full h-[12em]"
          ></textarea>
          {errors.bookingMessage && (
            <div className="text-alert">
              {errors.bookingMessage.message}
            </div>
          )}
          <div className="ml-auto mt-5">
            <PrimaryButtons
              type="submit"
              textInput="submit"
              onClick={() => {
                updateBookings;
              }}
            ></PrimaryButtons>
          </div>
        </div>
        <div className="text-alert font-h3 place-self-center font-bold mx-4">
          {message}
        </div>
      </form>
    </section>
  );
};

export default BookTableForm;
