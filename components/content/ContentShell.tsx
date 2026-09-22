import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./content.module.css";

type Crumb = { label: string; href?: string };

type ContentShellProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  wide?: boolean;
  breadcrumbs?: Crumb[];
};

export function ContentShell({ eyebrow, title, intro, children, wide = false, breadcrumbs = [] }: ContentShellProps) {
  const trail: Crumb[] = [{ label: "NextChapter", href: "/" }, ...breadcrumbs];

  return (
    <main className={styles.page} id="main-content">
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <ol>
          {trail.map((crumb, index) => {
            const current = index === trail.length - 1;
            return (
              <li key={`${crumb.label}-${index}`}>
                {crumb.href && !current
                  ? <Link href={crumb.href}>{crumb.label}</Link>
                  : <span aria-current={current ? "page" : undefined}>{crumb.label}</span>}
              </li>
            );
          })}
        </ol>
      </nav>
      <div className={wide ? styles.wide : styles.measure}>
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