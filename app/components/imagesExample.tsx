import Image from "next/image";
import React from "react";
import img from "../../public/images/unsplash.jpg";

const ImagesExample = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>Static Image</p>
      <Image
        src={img}
        alt="local"
        width={200}
        height={400}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
      />
    </div>
  );
};

export default ImagesExample;
