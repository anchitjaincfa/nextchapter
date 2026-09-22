import type { Metadata } from "next";
import Link from "next/link";
import { ContentShell, styles } from "@/components/content/ContentShell";

export const metadata: Metadata = {
  title: "Preferences & information | NextChapter",
  description: "Understand and adjust your NextChapter experience."
};

export default function SettingsPage() {
  return (
    <ContentShell
      title="Preferences & information"
      intro="Keep the experience comfortable, understandable, and under your control."
      breadcrumbs={[{ label: "Preferences & information" }]}
    >
      <ul className={styles.settingsList}>
        <li>
          <h2>Text size</h2>
          <p>Use your browser’s zoom or text-size controls to make this page more comfortable to read.</p>
        </li>
        <li>
          <h2>Motion</h2>
          <p>These content pages follow your device’s reduced-motion preference. The guided demo should be checked with that preference before release.</p>
        </li>
        <li>
          <h2>Printing</h2>
          <p>Every complete guide includes a print control and a paper-friendly layout.</p>
        </li>
        <li>
          <h2><Link href="/settings/about-data">About your data</Link></h2>
          <p>See what the current guided demo stores in this tab and how to clear it.</p>
        </li>
        <li>
          <h2><Link href="/privacy">Privacy</Link></h2>
          <p>Read the current plain-language privacy statement.</p>
        </li>
      </ul>
    </ContentShell>
  );
}