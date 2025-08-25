import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — e-coop",
  description:
    "e-coop is committed to protecting your privacy. read our privacy policy for details on data collection, use, and security.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
