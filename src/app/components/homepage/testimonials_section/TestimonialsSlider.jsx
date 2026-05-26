"use client";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import Testiment from "./Testiment";

// AI HELPED WITH THIS
// Se synopsis om AI brug: TestimonialsSlider.jsx
const TestimonialSlider = ({ testimonials }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTestament = Number(
    searchParams.get("testimonials") || "0",
  );

  const handleButtonClick = (targetIndex) => {
    router.push(`?testimonials=${targetIndex}`, {
      scroll: false,
    });
  };
  /////////

  return (
    <div className="flex flex-col items-center w-full z-1 my-medium ">
      <ul className="testimonials-scroller flex justify-center w-full h-fit">
        {testimonials.map((testiment, index) => (
          <Testiment
            key={testiment.id}
            name={testiment.name}
            index={index}
            activeTestament={activeTestament}
            facebook={testiment.facebook}
            twitter={testiment.twitter}
            testiment={testiment.content}
            imgsrc={`${process.env.NEXT_PUBLIC_API_URL}${testiment.asset.url}`}
            alt={testiment.asset.alt}
          />
        ))}
      </ul>

      <div className="flex justify-center gap-4 w-full mt-small-medium">
        {/* AI HELPED WITH THIS */}
        {/*Se synopsis om AI brug: TestimonialsSlider.jsx */}
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() =>
              handleButtonClick(index)
            }
            className={`w-5 h-5 cursor-pointer border-none transition-transform ${
              activeTestament === index
                ? "bg-(--pink) scale-110"
                : "bg-foreground"
            }`}
            aria-label={`Show testimonial ${index + 1}`}
          />
        ))}
        {/* //////// */}
      </div>
    </div>
  );
};

export default TestimonialSlider;
