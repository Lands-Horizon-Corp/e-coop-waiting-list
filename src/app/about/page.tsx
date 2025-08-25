"use client";

import Link from "next/link";
import {
  ArrowRightIcon,
  BarChart2,
  Building,
  FileText,
  LifeBuoy,
  MessageSquare,
  ShieldCheck,
  UserIcon,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const features = [
    {
      title: "Digital Cooperative Banking",
      icon: Building,
      desc: "Secure online account management for members and cooperatives. Digital transactions, savings, loans, and payments.",
    },
    {
      title: "Membership Management",
      icon: Users,
      desc: "Easy onboarding and KYC verification. Member records, profiles, and automated status tracking.",
    },
    {
      title: "Financial Tools & Analytics",
      icon: BarChart2,
      desc: "Automated financial reports, loan processing, budgeting, forecasting, and customizable dashboards.",
    },
    {
      title: "Secure Document Management",
      icon: FileText,
      desc: "Encrypted document storage, role-based access, and e-signature support for approvals.",
    },
    {
      title: "Communication & Collaboration",
      icon: MessageSquare,
      desc: "Announcements, messaging, discussion boards, voting tools, and event scheduling.",
    },
    {
      title: "API & Integrations",
      icon: Zap,
      desc: "Developer APIs and webhooks for transactions, forecasting, and integrations.",
    },
    {
      title: "Support & Training",
      icon: LifeBuoy,
      desc: "Dedicated customer support, help center, and training sessions for cooperative leaders.",
    },
    {
      title: "Security & Transparency",
      icon: ShieldCheck,
      desc: "Encryption, RBAC, audits, and transparent transaction histories for member trust.",
    },
  ];

  return (
    <div className="py-20">
      <div className="to-background/0 via-background/0 from-primary/50 absolute right-0 -z-10 -mt-16 h-screen w-full bg-radial-[ellipse_at_20%_0%] to-100%" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-foreground text-4xl font-extrabold">
            About e-coop
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Lands Horizon Corp builds e-coop-suite to empower cooperatives with
            secure, user-friendly digital tools that increase financial
            inclusion, transparency, and operational efficiency.
          </p>

          <div className="bg-card/50 mt-8 rounded-lg p-6 shadow-sm">
            <h2 className="text-foreground text-xl font-semibold">
              Our Promise
            </h2>
            <p className="mt-2">
              We prioritize transparency, trust, and member success in every
              product we build — combining modern security with simple,
              practical workflows for cooperative growth.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Button variant="default" asChild>
                <Link href="/join">
                  <UserIcon className="inline h-5 w-5" />
                  Join Waitlist
                  <ArrowRightIcon className="inline h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h3 className="sr-only">Features</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(f => (
              <article
                className="bg-card/50 rounded-lg p-6 text-current shadow transition-shadow hover:shadow-md"
                key={f.title}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-md p-3">
                    <f.icon className="text-primary h-6 w-6" />
                  </div>
                  <h4 className="text-foreground font-semibold">{f.title}</h4>
                </div>
                <p className="text-muted-foreground mt-3 text-sm">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-3xl text-center">
          <h3 className="text-foreground text-2xl font-semibold">
            Get to know us
          </h3>
          <p className="text-muted-foreground mt-4">
            At Lands Horizon Corp, we are passionate about empowering
            cooperatives and their members. Our team delivers technology that
            enhances financial inclusion, operational efficiency, and community
            prosperity.
          </p>
          <p className="text-muted-foreground mt-4">
            Join us on our journey to transform the cooperative experience —
            where growth, security, and trust are always at the heart of what we
            do.
          </p>
        </section>
      </div>
    </div>
  );
}
