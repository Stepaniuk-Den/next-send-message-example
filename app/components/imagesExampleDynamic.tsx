import React from "react";
import Image from "next/image";

import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

interface ImagesExampleProps {
  src: string;
}

const ImagesExampleDynamic = async ({ src }: ImagesExampleProps) => {
  const buffer = await fs.readFile(`./public${src}`);
  const { base64 } = await getPlaiceholder(buffer);

  return (
    <div className="flex flex-col gap-4">
      <p>Dynamic Image</p>
      <div className="relative w-60 h-80">
        <Image
          src={src}
          alt="dynamic"
          // width={200}
          // height={400}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={base64}
          // className="w-50 h-100"
        />
      </div>
    </div>
  );
};

export default ImagesExampleDynamic;
