"use client";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Testiment = ({
  imgsrc,
  alt,
  name,
  testiment,
  facebook,
  twitter,
  index,
  activeTestament,
}) => {
  // AI HELPED WITH THIS
  // Se synopsis om AI brug: Testiment.jsx
  const isActive = index === activeTestament;
  /////////
  return (
    <li
      className={`justify-center flex flex-col items-center gap-2 pt-small transition-all duration-250 ease-in ${isActive ? "relative flex opacity-100 translate-y-0 scale-100 z-10" : "absolute opacity-0 translate-y-4 scale-100 pointer-events-none z-0"}`}
    >
      <Image
        src={imgsrc}
        alt={alt}
        width={200}
        height={200}
      />
      <h3 className="my-small uppercase font-(--font-weight-h3)">
        {name}
      </h3>
      <p className="text-center text-(length:--font-testimonial-p) leading-[180%] w-full max-w-[100ch] px-4">
        {testiment}
      </p>
      <div className="flex gap-6 mt-small-medium">
        <a
          className="border p-2"
          href={facebook}
          target="_blank"
        >
          <FaFacebookF size={25} />
        </a>
        <a
          className="border p-2"
          href={twitter}
          target="_blank"
        >
          <FaTwitter size={25}></FaTwitter>
        </a>
      </div>
    </li>
  );
};

export default Testiment;
