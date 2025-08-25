import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — e-coop",
  description:
    "Terms and conditions for using e-coop services, membership, and platform features.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
