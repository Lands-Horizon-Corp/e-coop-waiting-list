import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — e-coop Support",
  description:
    "Need help with your cooperative account or e-coop services? Contact our support team for fast, professional assistance.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
