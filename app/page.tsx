import Contact from "./components/contact";
import ImagesExampleStatic from "./components/imagesExampleStatic";
import styles from "./page.module.css";
import StaticImage from "../public/unsplash.jpg";
import ImagesExampleDynamic from "./components/imagesExampleDynamic";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Contact />
        <div className="text-lg text-center">
          <p className="text-xl mb-5">imagesExamples</p>
          <div className="flex gap-5">
            <ImagesExampleStatic src={StaticImage} />
            <ImagesExampleDynamic src={"/unsplash.jpg"} />
          </div>
        </div>
      </main>
    </div>
  );
}
