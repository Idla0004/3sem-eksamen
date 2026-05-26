"use client";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Gallery from "./Gallery";
import PrimaryButtons from "../../buttons/PrimaryButtons";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { MdClose } from "react-icons/md";

export default function GalleryLightBox({
  initialImages,
}) {
  const [currentIndex, setCurrentIndex] =
    useState(null);

  // AI HELPED WITH THIS //
  // Se synopsis om AI brug: GalleryLightbox

  const openLightbox = (index) =>
    setCurrentIndex(index);
  const closeLightbox = () =>
    setCurrentIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex(
      (prev) => (prev + 1) % initialImages.length,
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex(
      (prev) =>
        (prev - 1 + initialImages.length) %
        initialImages.length,
    );
  };
  ///////
  const selectedImage =
    currentIndex !== null
      ? initialImages[currentIndex]
      : null;

  return (
    <div className="gallery-img-wrapper">
      {initialImages.map((gallery, index) => (
        <Gallery
          key={gallery.id}
          id={gallery.id}
          imagesrc={`${process.env.NEXT_PUBLIC_API_URL}${gallery.asset?.url}`}
          alt={
            gallery.asset?.alt ||
            gallery.asset.description
          }
          onClick={() => openLightbox(index)}
        />
      ))}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="gallery-lightbox fixed inset-0 bg-background/95 flex items-center justify-center z-2 p-4 top-20"
            onClick={closeLightbox}
          >
            <div className="button-container relative w-full max-w-260 block mx-8">
              <button
                onClick={prevImage}
                className="button-left absolute left-1 top-1/2 -translate-y-1/2 z-30 text-white hover:text-button-hover border p-2 hover:border-button-hover hover:cursor-pointer text-(length:--font-button) "
              >
                <BiSolidLeftArrow />
              </button>
              <button
                onClick={nextImage}
                className="button-right absolute right-1 top-1/2 -translate-y-1/2 z-30 text-white hover:text-button-hover border p-2 hover:border-button-hover hover:cursor-pointer text-(length:--font-button) "
              >
                <BiSolidRightArrow />
              </button>
              <motion.div
                key={currentIndex}
                initial={{
                  opacity: 0,
                  translateX: "100%",
                }}
                animate={{
                  opacity: 1,
                  translateX: 0,
                }}
                exit={{
                  opacity: 0,
                  translateX: "-100%",
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.4,
                }}
                className="lightbox-wrapper bg-background flex flex-col overflow-visible object-cover"
                onClick={(e) =>
                  e.stopPropagation()
                }
              >
                <div className="relative">
                  <div className="flex flex-col relative border-b-(--pink) border-b-2">
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}${selectedImage.asset?.url}`}
                      className="object-cover max-h-130"
                      alt={
                        selectedImage.asset
                          ?.alt ||
                        selectedImage.asset
                          .description
                      }
                    />
                    <div className="absolute bottom-0 right-0 mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-40 border-e-40 border-be-0"></div>
                  </div>
                </div>
                <button
                  onClick={closeLightbox}
                  className="button-exit absolute top-4 right-4 z-30 text-white hover:text-button-hover hover:cursor-pointer text-3xl"
                >
                  <MdClose />
                </button>
                <div className="flex-1 flex flex-col justify-between p-6">
                  <p className="text-bodyfont text-xl font-semibold">
                    {selectedImage.asset?.alt ||
                      selectedImage.asset
                        .description}
                  </p>
                  <div className="mt-6 flex justify-end">
                    <PrimaryButtons textInput="read more" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
