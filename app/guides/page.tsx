import type { Metadata } from "next";
import Link from "next/link";
import { ContentShell, styles } from "@/components/content/ContentShell";
import { futureTopics, guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides | NextChapter",
  description: "Practical, unhurried guides for shaping what comes next."
};

export default function GuidesPage() {
  return (
    <ContentShell
      title="Guides for what comes next"
      intro="Practical ideas you can try at your own pace. Start where life feels most ready for a small change."
      wide
    >
      <h2 className={styles.sectionTitle}>Ready to explore</h2>
      <ul className={styles.grid}>
        {guides.map((guide) => (
          <li key={guide.slug}>
            <article className={styles.card}>
              <p className={styles.eyebrow}>{guide.eyebrow}</p>
              <h3>{guide.title}</h3>
              <p>{guide.summary}</p>
              <Link href={`/guides/${guide.slug}`}>Read guide <span aria-hidden="true">→</span></Link>
            </article>
          </li>
        ))}
      </ul>

      <h2 className={styles.sectionTitle}>More topics on the horizon</h2>
      <p>These nine topic cards are previews only; they do not link to unfinished pages.</p>
      <ul className={styles.grid}>
        {futureTopics.map((topic) => (
          <li key={topic.title}>
            <article className={`${styles.card} ${styles.future}`}>
              <span className={styles.badge}>Future guide</span>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </ContentShell>
  );
}