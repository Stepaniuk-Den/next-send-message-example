// import Contact from "./components/contact";
import ImagesExampleStatic from "./components/imagesExampleStatic";
import styles from "./page.module.css";
import StaticImage from "../public/images/unsplash.jpg";
import ImagesExampleDynamic from "./components/imagesExampleDynamic";
import Link from "next/link";
import { images } from "@/utils/imageItems";
// import MultipleImages from "./components/multipleImages";
// import SingleImage from "./components/singleImage";

const slug = { static: "static", dynamic: "dynamic" };

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={`${styles.main} flex flex-col`}>
        {/* <Contact /> */}
        <div className="text-lg text-center">
          <p className="text-xl mb-5">imagesExamples</p>
          <div className="flex gap-5">
            <ImagesExampleStatic src={StaticImage} />
            <ImagesExampleDynamic
              src={"/images/unsplash.jpg"}
              images={images}
            />
            {/* <MultipleImages /> */}
            {/* <SingleImage src={"/images/unsplash.jpg"} /> */}
          </div>
        </div>
        <Link href={`/${slug.static}`}>Go to Static Images Page</Link>
        <Link href={`/${slug.dynamic}`}>Go to Dynamic Images Page</Link>
      </main>
    </div>
  );
}
