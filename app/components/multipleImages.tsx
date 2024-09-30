import fg from "fast-glob";
import fs from "node:fs/promises";
import * as React from "react";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

const getImages = async (pattern: string) => {
  const files = await fg(pattern);
  return Promise.all(
    files.map(async (file) => {
      const src = file.replace("./public", "");
      const buffer = await fs.readFile(file);

      const plaiceholder = await getPlaiceholder(buffer);

      return { ...plaiceholder, img: { src } };
    })
  );
};

export default async function MultipleImages() {
  const images = await getImages("./public/images/*.{jpg,png}");

  return (
    <div className="flex flex-col">
      <p className="mb-5">Multiple Images</p>
      <ul role="list" className="flex gap-5">
        {images.map(({ base64, img }) => (
          <li key={img.src} className="relative w-60 h-80">
            <Image
              {...img}
              alt="Paint Splashes"
              title="Photo from Unsplash"
              blurDataURL={base64}
              placeholder="blur"
              fill
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
