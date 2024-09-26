import Contact from "./components/contact";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Contact />
      </main>
    </div>
  );
}
