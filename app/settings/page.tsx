import type { Metadata } from "next";
import Link from "next/link";
import { ContentShell, styles } from "@/components/content/ContentShell";

export const metadata: Metadata = {
  title: "Settings | NextChapter",
  description: "Understand and manage your NextChapter experience."
};

export default function SettingsPage() {
  return (
    <ContentShell title="Settings" intro="Keep the experience comfortable, understandable, and under your control.">
      <ul className={styles.settingsList}>
        <li>
          <strong>Text size</strong>
          This interface respects your browser’s text-size and zoom settings. Use your browser controls to enlarge text without losing content.
        </li>
        <li>
          <strong>Motion</strong>
          Product motion should follow your device’s reduced-motion preference.
        </li>
        <li>
          <strong>Printing</strong>
          Every complete guide includes a print control and a paper-friendly layout.
        </li>
        <li>
          <strong><Link href="/settings/about-data">About your data</Link></strong>
          See what the prototype may store, what must be documented before launch, and how deletion should work.
        </li>
        <li>
          <strong><Link href="/privacy">Privacy</Link></strong>
          Read the current plain-language privacy statement and prototype notice.
        </li>
      </ul>
    </ContentShell>
  );
}