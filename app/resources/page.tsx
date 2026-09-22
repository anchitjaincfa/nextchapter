import type { Metadata } from "next";
import { ContentShell, styles } from "@/components/content/ContentShell";

export const metadata: Metadata = {
  title: "Resources | NextChapter",
  description: "Starting points for urgent support and aging-related services in the United States."
};

export default function ResourcesPage() {
  return (
    <ContentShell
      title="Support and practical resources"
      intro="A short list of places to start when you or someone you care about needs more support."
      breadcrumbs={[{ label: "Resources" }]}
    >
      <div className={styles.notice}>
        <strong>If there is immediate danger, call 911 or your local emergency number.</strong>
        <p>This page is informational and is not medical, legal, or crisis counseling advice.</p>
      </div>
      <ul className={styles.resourceList}>
        <li>
          <h2>988 Suicide & Crisis Lifeline</h2>
          <p>Call or text <a href="tel:988">988</a>, or use the chat at <a href="https://988lifeline.org/">988lifeline.org</a>.</p>
          <p>Free, confidential crisis support in the United States and its territories.</p>
          <p className={styles.source}>Source: 988 Suicide & Crisis Lifeline official website. Details checked September 21, 2026.</p>
        </li>
        <li>
          <h2>National Domestic Violence Hotline</h2>
          <p>Call <a href="tel:+18007997233">800-799-7233</a>, text <strong>START</strong> to <a href="sms:88788?&amp;body=START">88788</a>, or visit <a href="https://www.thehotline.org/">thehotline.org</a>.</p>
          <p>Confidential support, safety planning, and connections to local services in the United States.</p>
          <p className={styles.source}>Source: National Domestic Violence Hotline official website. Details checked September 21, 2026.</p>
        </li>
        <li>
          <h2>Eldercare Locator</h2>
          <p>Call <a href="tel:+18006771116">800-677-1116</a> or visit <a href="https://eldercare.acl.gov/">eldercare.acl.gov</a>.</p>
          <p>A public service connecting older adults and families with local support resources in the United States.</p>
          <p className={styles.source}>Source: U.S. Administration for Community Living, Eldercare Locator. Details checked September 21, 2026.</p>
        </li>
      </ul>
      <p className={styles.source}>Availability and services can change. Verify details with the organization. NextChapter has no affiliation with these services, and this list has not been clinically reviewed.</p>
    </ContentShell>
  );
}