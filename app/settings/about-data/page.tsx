import type { Metadata } from "next";
import Link from "next/link";
import { ContentShell, styles } from "@/components/content/ContentShell";

export const metadata: Metadata = {
  title: "About your data | NextChapter",
  description: "What the current NextChapter prototype stores and how to clear it."
};

export default function AboutDataPage() {
  return (
    <ContentShell
      title="About your data"
      intro="What the current guided demo remembers—and how you can clear it."
      breadcrumbs={[{ label: "Preferences & information", href: "/settings" }, { label: "About your data" }]}
    >
      <div className={styles.prose}>
        <h2>Your choices stay in this tab</h2>
        <p>After the safety check, the demo stores your current step and multiple-choice answers in this tab’s temporary session storage. It does not send those answers to a NextChapter account or database.</p>

        <h2>How to clear your choices</h2>
        <ul>
          <li><strong>Quick Exit:</strong> clears the demo data and immediately leaves NextChapter.</li>
          <li><strong>Start again:</strong> clears the current answers and returns to the beginning.</li>
          <li><strong>Close the tab:</strong> normally removes its session storage.</li>
          <li><strong>Browser history:</strong> may still show this visit, and session restore can reopen a page. If someone monitors your device, consider a private window or a safer device.</li>
        </ul>

        <h2>What the demo does not ask for</h2>
        <p>There is no sign-in, name, email address, free-form text box, cloud sync, or saved account history in the current guided demo.</p>

        <h2>Standard website requests</h2>
        <p>The hosting service may process ordinary connection information needed to deliver and protect the site, such as an IP address, browser type, and request time. This is separate from the choices held in your tab.</p>

        <h2>What not to enter</h2>
        <p>Avoid entering passwords, financial account numbers, government identifiers, detailed medical records, or information needed for an emergency response.</p>

        <h2>Related information</h2>
        <p>Read the <Link href="/privacy">privacy statement</Link>, or visit <Link href="/resources">support resources</Link> if you need urgent help.</p>
      </div>
    </ContentShell>
  );
}