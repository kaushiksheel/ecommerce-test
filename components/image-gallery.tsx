"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export const ImageGallery = ({ thumbnails }: { thumbnails: string[] }) => {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  const handleNext = () => {
    if (selectedImageIndex < thumbnails.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    } else {
      setSelectedImageIndex(0);
    }
  };
  const handlePrev = () => {
    if (selectedImageIndex > thumbnails.length - 1) {
      setSelectedImageIndex(selectedImageIndex - 1);
    } else {
      setSelectedImageIndex(0);
    }
  };

  return (
    <div className="w-full col-span-2 ">
      <div className="relative w-full h-[500px] border transition-all ease-linear rounded-xl overflow-hidden">
        <Image
          src={thumbnails[selectedImageIndex]}
          className="object-cover transition-all ease-linear"
          alt="shoe"
          loading="lazy"
          fill
        />
        <div className="flex space-x-3   absolute !bottom-2 right-2">
          <Button onClick={handlePrev} variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button onClick={handleNext} variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mt-2 space-x-2 overflow-x-auto">
        {thumbnails.map((thumbnail, index) => (
          <div
            key={index}
            onMouseEnter={() => setSelectedImageIndex(index)}
            className={`min-w-[110px] h-[100px] relative cursor-pointer overflow-hidden rounded-xl ${selectedImageIndex ===index && "border-2  border-black dark:border-white" } transition-all ease-linear`}
          >
            <Image
              loading="lazy"
              src={thumbnail}
              className="object-cover transition-all ease-linear"
              alt="shoe"
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
};
