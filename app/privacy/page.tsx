import type { Metadata } from "next";
import { ContentShell, styles } from "@/components/content/ContentShell";

export const metadata: Metadata = {
  title: "Privacy | NextChapter",
  description: "A plain-language explanation of NextChapter’s intended privacy approach."
};

export default function PrivacyPage() {
  return (
    <ContentShell title="Privacy" intro="We believe personal reflection deserves careful, plain-language data practices.">
      <div className={styles.notice}>
        <strong>Prototype notice</strong>
        This policy describes the intended behavior of the current prototype as of September 21, 2026. It must be reviewed and updated before production launch or whenever analytics, accounts, storage, or third-party services change.
      </div>
      <div className={styles.prose}>
        <h2>The short version</h2>
        <p>Collect only what the experience needs, explain why it is needed, and give people meaningful control. The prototype should not sell personal information or use private reflections for advertising.</p>

        <h2>Information you choose to provide</h2>
        <p>You may enter answers, notes, preferences, and plans while using NextChapter. Product teams integrating these pages must document whether that information stays in the browser or is sent to a server before launch.</p>

        <h2>Basic technical information</h2>
        <p>A hosted service may receive standard connection information such as browser type, device type, approximate location derived from an IP address, and timestamps. If analytics or error-reporting tools are introduced, their names, purposes, retention periods, and opt-out choices should be listed here.</p>

        <h2>How information should be used</h2>
        <ul>
          <li>To provide and maintain the experience.</li>
          <li>To remember choices you ask the product to remember.</li>
          <li>To protect the service from abuse and diagnose problems.</li>
          <li>To comply with law and protect people’s safety when required.</li>
        </ul>

        <h2>Sharing and sale</h2>
        <p>NextChapter should not sell personal information. Necessary service providers may process limited information on the product’s behalf under appropriate agreements. Any production implementation must list material providers here.</p>

        <h2>Retention and deletion</h2>
        <p>Keep personal information only as long as needed for the stated purpose. The production experience should provide a clear way to delete saved reflections and explain when backups expire.</p>

        <h2>Your choices</h2>
        <p>Visit <a href="/settings/about-data">About your data</a> for a readable summary of storage and deletion controls. Privacy rights differ by location; production contact and request details must be added before launch.</p>

        <h2>Not private or emergency care</h2>
        <p>Do not use NextChapter to store information you would not want handled by a general consumer service. NextChapter is not a medical service or emergency response service. See the <a href="/resources">support resources</a> page if you need urgent help.</p>

        <h2>Policy changes</h2>
        <p>Material changes should be dated and presented clearly. The effective date should reflect the day the production policy becomes binding, not the prototype drafting date.</p>
      </div>
    </ContentShell>
  );
}