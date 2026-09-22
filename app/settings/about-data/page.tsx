import type { Metadata } from "next";
import { ContentShell, styles } from "@/components/content/ContentShell";

export const metadata: Metadata = {
  title: "About your data | NextChapter",
  description: "A transparent summary of data handling decisions for the NextChapter prototype."
};

export default function AboutDataPage() {
  return (
    <ContentShell title="About your data" intro="A transparent checklist for what the product remembers and what stays in your control.">
      <div className={styles.notice}>
        <strong>For this prototype</strong>
        The final storage architecture is not asserted here. Before production, this page must be matched to the implemented behavior and named service providers.
      </div>
      <div className={styles.prose}>
        <h2>Questions the product must answer clearly</h2>
        <ul>
          <li>Are reflections stored only in this browser, or synced to a server?</li>
          <li>Can anyone else—including an administrator—read them?</li>
          <li>How long are saved answers, logs, and backups retained?</li>
          <li>Which companies provide hosting, analytics, authentication, or error reporting?</li>
          <li>How can a person export or permanently delete their information?</li>
        </ul>

        <h2>Recommended production controls</h2>
        <ul>
          <li>A visible “Delete my reflections” action with a confirmation step.</li>
          <li>A separate analytics choice that is off until consent where required.</li>
          <li>A simple export in a readable format.</li>
          <li>Clear status messages after save, export, and deletion actions.</li>
          <li>No use of private reflections for targeted advertising or model training without specific, informed consent.</li>
        </ul>

        <h2>What not to enter</h2>
        <p>Avoid entering passwords, financial account numbers, government identifiers, detailed medical records, or information needed for an emergency response.</p>

        <h2>Need support now?</h2>
        <p>NextChapter is not monitored for urgent messages. Visit <a href="/resources">Support and practical resources</a> for crisis and aging-service contacts in the United States.</p>

        <h2>Related information</h2>
        <p>Read the <a href="/privacy">prototype privacy statement</a>. Product owners should add a working privacy contact and jurisdiction-specific request process before launch.</p>
      </div>
    </ContentShell>
  );
}