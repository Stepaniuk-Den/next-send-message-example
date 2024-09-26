import Image, { StaticImageData } from "next/image";
import React from "react";

interface ImagesExampleProps {
  src: StaticImageData;
}

const ImagesExampleStatic = ({ src }: ImagesExampleProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p>Static Image</p>
      <Image
        src={src}
        alt="static"
        width={200}
        height={400}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
      />
    </div>
  );
};

export default ImagesExampleStatic;
