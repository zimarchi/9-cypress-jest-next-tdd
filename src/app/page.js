"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();


  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <button
      onClick={() => router.push("/signup")}
      >
          Go to Signup Page
        </button>
      </div>
    </main>
  );
}
