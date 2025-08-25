"use client";

import { Separator } from "@/components/ui/separator";

export default function TermsPage() {
  return (
    <div className="bg-background mt-16 min-h-screen">
      <div className="bg-muted/10 w-full py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-foreground mb-2 text-3xl font-bold">
            Terms and Conditions
          </h1>
          <p className="text-muted-foreground">
            Effective Date: January 1, 2026
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="bg-card mx-auto max-w-5xl space-y-8 rounded-lg p-8 shadow">
          <section className="prose max-w-none text-current">
            <h2>1. Definitions</h2>
            <p>
              <strong>Platform:</strong> The e-coop-suite digital solution for
              cooperative banking and management.
            </p>
            <p>
              <strong>Services:</strong> Includes savings, loans, digital
              wallets, payment processing, member management, accounts, and
              related features.
            </p>
            <p>
              <strong>Users:</strong> Cooperative businesses, their members,
              staff, admins, tellers, collectors, employees, and the general
              public.
            </p>
            <p>
              <strong>Organization:</strong> Refers to the cooperative business
              registered on the platform.
            </p>

            <Separator className="my-6" />

            <h2>2. Eligibility & Registration</h2>
            <p>
              Registration is open to cooperative organizations, individual
              members, staff, and the general public (subject to approval).
              Users must provide a valid email, secure password, contact number,
              and accurate location. Users can join or create cooperatives after
              registration and are responsible for maintaining credential
              confidentiality.
            </p>

            <Separator className="my-6" />

            <h2>3. Services Provided</h2>
            <p>
              The platform offers digital savings and loan products, a digital
              wallet, payment processing, member/account management tools, and
              batch and blotter balancing. Services are available to
              organizations and their members.
            </p>

            <Separator className="my-6" />

            <h2>4. Roles & Permissions</h2>
            <p>
              Role-Based Access Control (RBAC) is used. Roles include owner,
              staff, teller, collector, member, employee and others; each role
              has specific permissions restricting actions and data access.
            </p>

            <Separator className="my-6" />

            <h2>5. Fees & Subscription</h2>
            <p>
              Platform use is subject to subscription fees with monthly or
              yearly billing. Pricing depends on member and employee counts.
              Fees are disclosed during sign-up and may be updated with prior
              notice.
            </p>

            <Separator className="my-6" />

            <h2>6. User Responsibilities</h2>
            <p>
              Users and organizations must protect credentials, safeguard member
              data, use strong passwords, and comply with applicable laws. Users
              must avoid prohibited activities (sharing passwords, tampering
              with security, fraud, or unauthorized data changes). Major changes
              require higher-level approval.
            </p>

            <Separator className="my-6" />

            <h2>7. Data Ownership & Privacy</h2>
            <p>
              Data entered or uploaded belongs to the organization and users.
              Data is stored securely and encrypted. It is used for accounting
              and service delivery. Data is not shared without consent and any
              third-party API access requires owner approval.
            </p>

            <Separator className="my-6" />

            <h2>8. Dispute Resolution</h2>
            <p>
              Financial transactions require authorized approval and daily batch
              balancing. Disputes are handled by the cooperative’s admin and
              staff; arbitration or mediation can be used for unresolved issues.
              Platform management does not intervene in internal disputes except
              when required by law or security.
            </p>

            <Separator className="my-6" />

            <h2>9. Termination & Suspension</h2>
            <p>
              Accounts may be suspended or terminated by organizations or the
              platform for security breaches, fraud, or T&C violations. The
              platform does not remove members on behalf of cooperatives except
              as legally required.
            </p>

            <Separator className="my-6" />

            <h2>10. Modifications to Terms</h2>
            <p>
              Lands Horizon Corp may update these terms. Significant changes
              will be communicated and continued use constitutes acceptance.
            </p>

            <Separator className="my-6" />

            <h2>11. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Philippines and
              disputes are subject to Philippine courts.
            </p>

            <Separator className="my-6" />

            <h2>12. Contact Us</h2>
            <p>
              For questions or legal inquiries,
              <br />
              lands.horizon.corp@gmail.com
              <br />
              or call +63 991 617 1081.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
