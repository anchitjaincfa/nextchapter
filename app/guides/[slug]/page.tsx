import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentShell, styles } from "@/components/content/ContentShell";
import { PrintButton } from "@/components/content/PrintButton";
import { getGuide, guides } from "@/lib/guides";

type GuidePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  return guide
    ? { title: `${guide.title} | NextChapter`, description: guide.summary }
    : { title: "Guide not found | NextChapter" };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();

  return (
    <ContentShell
      eyebrow={guide.eyebrow}
      title={guide.title}
      intro={guide.summary}
      breadcrumbs={[{ label: "Guides", href: "/guides" }, { label: guide.title }]}
    >
      <p className={styles.meta}>{guide.readTime} · Designed for reading on screen or paper</p>
      <PrintButton />
      <div>
        {guide.sections.map((section) => (
          <section className={styles.section} key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.intro}</p>
            <ul className={styles.actions}>
              {section.actions.map((action) => <li key={action}>{action}</li>)}
            </ul>
            {section.reflection && (
              <p className={styles.prompt}><strong>Pause and consider:</strong> {section.reflection}</p>
            )}
          </section>
        ))}
      </div>
      <aside className={styles.nextStep} aria-labelledby="next-step">
        <h2 id="next-step">One next step</h2>
        <p>{guide.nextStep}</p>
      </aside>
    </ContentShell>
  );
}