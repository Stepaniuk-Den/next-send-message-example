import Image, { StaticImageData } from "next/image";
import React from "react";

interface ImagesExampleProps {
  src: StaticImageData;
}

const ImagesExampleStatic = ({ src }: ImagesExampleProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p>Static Image</p>
      <div className="relative w-60 h-80">
        <Image
          src={src}
          alt="static"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default ImagesExampleStatic;
