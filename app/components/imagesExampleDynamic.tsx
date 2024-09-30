import React from "react";
import Image, { StaticImageData } from "next/image";

// import { getPlaiceholder } from "plaiceholder";
// import fs from "node:fs/promises";

interface ImagesExampleProps {
  src: string;
  images: {
    img: StaticImageData;
    name: string;
  }[];
}

const ImagesExampleDynamic = ({ src, images }: ImagesExampleProps) => {
  // not working in app router [slug]=========
  // const ImagesExampleDynamic = async ({ src, images }: ImagesExampleProps) => {
  // const buffer = await fs.readFile(`./public${src}`);
  // const { base64 } = await getPlaiceholder(buffer);
  // =========================================
  if (!images) return;

  const imageName = src.split("/").pop()?.split(".")[0];
  const currentImg = images.find((image) => image.name === imageName);

  if (!currentImg) return;

  return (
    <div className="flex flex-col gap-4">
      <p>Dynamic Image</p>
      <div className="relative w-60 h-80">
        <Image
          src={currentImg.img}
          alt="dynamic"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          // blurDataURL={base64}
        />
      </div>
    </div>
  );
};

export default ImagesExampleDynamic;
