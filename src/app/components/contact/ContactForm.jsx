"use client";
import { useForm } from "react-hook-form";
import PrimaryButtons from "../buttons/PrimaryButtons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { PostContactInfo } from "./PostContactInfo";

const valideringsSkema = z.object({
  name: z.string(
    "Hard to have a name without letters... Please use the alphabet for your name.",
  ),
  name: z
    .string()
    .min(
      2,
      "Please have a name with more than one letter",
    ),
  email: z.email(),
  contactMessage: z
    .string()
    .max(
      100,
      "Say it with less words, please... No more than 100 characters!",
    ),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(valideringsSkema),
  });

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    /* AI HJALP MED DETTE: MEDTAG DATA FRA POST komponent */
    /* se synopsis om AI brug: Forms */
    const result = await PostContactInfo({
      name: data.name,
      email: data.email,
      contactMessage: data.contactMessage,
    });
    console.log("result:", result);
    /*************/

    setMessage(
      "Thank you for submitting your message!",
    );
  };

  const [contactDate, setContactDate] =
    useState("");
  const [contactId, setContactId] = useState("");
  const [contactName, setContactName] =
    useState("");
  const [contactEmail, setContactEmail] =
    useState("");
  const [contactMessage, setContactMessage] =
    useState("");

  const updateContact = () => {
    setContactDate(contactDate);
    setContactId(contactId);
    setContactName(contactName);
    setContactEmail(contactEmail);
    setContactMessage(contactMessage);
  };

  return (
    <section className="my-20 mx-(--fluid-20-180)">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center w-full items-center gap-4"
      >
        <input
          {...register("name")}
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          className="border p-4 w-full"
        ></input>
        {errors.name && (
          <div>{errors.name.message}</div>
        )}
        <input
          {...register("email")}
          type="text"
          name="email"
          id="email"
          placeholder="Your email"
          className="border p-4 w-full"
        ></input>
        {errors.email && (
          <div>{errors.email.message}</div>
        )}

        <div className="flex w-full flex-col">
          <textarea
            {...register("contactMessage")}
            type="text"
            name="contactMessage"
            id="contactMessage"
            placeholder="Your comment"
            className="border box-border w-full p-4 h-[12em]"
          ></textarea>
          {errors.contactMessage && (
            <div className="my-4 mx-4">
              {errors.contactMessage.message}
            </div>
          )}
          <div className="ml-auto mt-5">
            <PrimaryButtons
              type="submit"
              textInput="submit"
              onClick={() => {
                updateContact;
              }}
            ></PrimaryButtons>
          </div>
        </div>
        <div className="font-h3 font-bold mx-4">
          {message}
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
