import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — e-coop",
  description:
    "Frequently asked questions about e-coop services, membership, and features.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
