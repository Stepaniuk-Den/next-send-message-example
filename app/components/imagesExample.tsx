import Image from "next/image";
import React from "react";
import img from "../../public/images/unsplash.jpg";

const ImagesExample = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>Static Image</p>
      <div className="relative w-60 h-80">
        <Image
          src={img}
          alt="local"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default ImagesExample;
