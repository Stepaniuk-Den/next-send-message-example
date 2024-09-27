import * as React from "react";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

const getImageByPath = async (imagePath: string) => {
  const src = imagePath.replace("./public", "");
  const buffer = await fs.readFile(`./public${src}`);

  const plaiceholder = await getPlaiceholder(buffer);

  return { ...plaiceholder, img: { src } };
};

export default async function SingleImage({ src }: { src: string }) {
  const { base64, img } = await getImageByPath(src);

  return (
    <div className="flex relative w-60 h-80">
      <Image
        {...img}
        alt="Selected image"
        title="Dynamic image"
        blurDataURL={base64}
        placeholder="blur"
        fill
      />
    </div>
  );
}
