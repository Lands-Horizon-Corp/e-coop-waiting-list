import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Waitlist — e-coop",
  description:
    "Join the e-coop waitlist to get early access and updates. Enter your organization details to reserve your spot.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
