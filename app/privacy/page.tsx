import type { Metadata } from "next";
import Link from "next/link";
import { ContentShell, styles } from "@/components/content/ContentShell";

export const metadata: Metadata = {
  title: "Privacy | NextChapter",
  description: "A plain-language explanation of privacy in the NextChapter prototype."
};

export default function PrivacyPage() {
  return (
    <ContentShell
      title="Privacy"
      intro="We believe personal reflection deserves careful, plain-language data practices."
      breadcrumbs={[{ label: "Privacy" }]}
    >
      <div className={styles.notice}>
        <strong>Current prototype · updated September 21, 2026</strong>
        <p>This statement covers the guided demo currently available in NextChapter. It will change if accounts, server storage, analytics, or other services are added.</p>
      </div>
      <div className={styles.prose}>
        <h2>The short version</h2>
        <p>The guided demo has no account and sends your answers nowhere. After you pass the safety check, your choices are held in temporary session storage in this browser tab so the demo can build your conversation map.</p>

        <h2>What is stored</h2>
        <p>The demo stores your current step and the multiple-choice answers you select. It does not ask you to type a name, email address, or free-form reflection.</p>

        <h2>How long it lasts</h2>
        <p>Session storage normally disappears when you close the tab. Choosing Quick Exit or starting again clears the demo data immediately. Browser history or a browser’s session-restore feature may still show that you visited the site. The prototype does not provide an account, cloud sync, or a server-side copy of your answers.</p>

        <h2>Hosting information</h2>
        <p>Like most websites, the hosting service may receive standard connection information needed to deliver and protect the site, such as an IP address, browser type, and request time. The prototype does not intentionally use private answers for advertising or model training.</p>

        <h2>Your choices</h2>
        <p>You can avoid starting the demo, use Quick Exit, start again to clear progress, or close the tab. Read <Link href="/settings/about-data">About your data</Link> for a concise summary.</p>

        <h2>Not for sensitive information or emergencies</h2>
        <p>Do not use NextChapter to store passwords, financial account numbers, government identifiers, detailed medical records, or messages needed for an emergency response. NextChapter is not a medical service or emergency response service. See <Link href="/resources">support resources</Link> if you need urgent help.</p>

        <h2>Before a production launch</h2>
        <p>This notice must be updated if the product adds accounts, persistent storage, analytics, third-party tools, or new data collection. A working privacy contact and any legally required request process must also be provided.</p>
      </div>
    </ContentShell>
  );
}