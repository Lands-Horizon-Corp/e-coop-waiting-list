import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — e-coop",
  description:
    "Learn about e-coop, our mission, and the team at Lands Horizon Corp.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
