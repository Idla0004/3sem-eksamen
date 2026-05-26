"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import PrimaryButtons from "../../buttons/PrimaryButtons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostMailInfo } from "./PostMailInfo";

const mailvalidation = z.object({
  email: z.email(),
});

const MailForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mailvalidation),
  });
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    /* AI HJALP MED DETTE: MEDTAG DATA FRA POST komponent */
    // Se synopsis om AI brug: MailForm.jsx
    const result = await PostMailInfo({
      email: data.email,
    });
    /*************/
    if (result.success) {
      setMessage(
        "Thank you for subscribing to our newsletter!",
      );
      reset();
    } else {
      setMessage(result.error);
    }
    console.log("result", result);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap gap-5 place-content-center"
    >
      {errors.email && (
        <div className="text-alert self-center">
          {errors.email.message}
        </div>
      )}
      <input
        {...register("email")}
        type="email"
        name="email"
        id="email"
        placeholder="Enter your e-mail"
        className="outline-none text-foreground placeholder-foreground border-b-2 p-2 tracking-(--letter-spacing-input) w-80 focus:bg-input-bg"
      />
      <PrimaryButtons
        type="submit"
        textInput="Subscribe"
        reset
      />
      {message && (
        <div className="text-alert self-center">
          {message}
        </div>
      )}
    </form>
  );
};

export default MailForm;
