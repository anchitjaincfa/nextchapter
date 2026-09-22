"use client";

import styles from "./content.module.css";

export function QuickExit() {
  function leave() {
    window.sessionStorage.clear();
    window.location.replace("https://www.google.com/");
  }

  return <button className={styles.quickExit} type="button" onClick={leave}>Quick Exit</button>;
}