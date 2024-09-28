// "use server";

// import redis from "redis";
// import Jimp from "jimp";

// export const getImageUrlBase64 = async (url: string) => {
//   const cacheImage = await redis.get(url);
//   if (cacheImage) {
//     return cacheImage;
//   }
//   const response = await fetch(url);
//   const buffer = Buffer.from(await response.arrayBuffer());
//   const image = await Jimp.read(buffer);
//   const processedImage = image.resize(20, Jimp.AUTO).quality(60).blur(5);
//   const base64String = await processedImage.getBase64Async(Jimp.MIME_JPEG);
//   await redis.set(url, base64String);
//   return base64String;
// };

import { createClient } from "redis";
import sharp from "sharp";

const client = createClient();

client.connect();

export const getImageUrlBase64 = async (url: string) => {
  const cacheImage = await client.get(url);
  if (cacheImage) {
    return cacheImage;
  }

  const response = await fetch(url);
  const buffer = Buffer.from(await response.arrayBuffer());

  const processedImageBuffer = await sharp(buffer)
    .resize(20)
    .jpeg({ quality: 60 })
    .blur(5)
    .toBuffer();

  const base64String = `data:image/jpeg;base64,${processedImageBuffer.toString(
    "base64"
  )}`;

  await client.set(url, base64String);

  return base64String;
};
