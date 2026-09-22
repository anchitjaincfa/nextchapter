import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./content.module.css";

type ContentShellProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  wide?: boolean;
};

export function ContentShell({ eyebrow, title, intro, children, wide = false }: ContentShellProps) {
  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#main-content">Skip to main content</a>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <Link href="/">NextChapter</Link>
        <span aria-hidden="true">/</span>
        <Link href="/guides">Guides</Link>
      </nav>
      <div id="main-content" className={wide ? styles.wide : styles.measure}>
        <header className={styles.hero}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h1>{title}</h1>
          {intro && <p className={styles.lede}>{intro}</p>}
        </header>
        {children}
      </div>
    </main>
  );
}

export { styles };