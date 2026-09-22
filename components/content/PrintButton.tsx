"use client";

import { styles } from "./ContentShell";

export function PrintButton() {
  return <button className={styles.printButton} type="button" onClick={() => window.print()}>Print this guide</button>;
}