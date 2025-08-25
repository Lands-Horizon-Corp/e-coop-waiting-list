"use client";

import { Separator } from "@/components/ui/separator";

export default function PrivacyPage() {
  return (
    <div className="bg-background mt-16 min-h-screen">
      <div className="bg-muted/10 w-full py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-foreground mb-2 text-3xl font-bold">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Effective Date: January 1, 2026
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="bg-card mx-auto max-w-5xl space-y-8 rounded-lg p-8 shadow">
          <section className="prose max-w-none text-current">
            <h2>1. Personal Data We Collect</h2>
            <p>
              We may collect the following types of personal information: name,
              email address, contact number, residential or business address,
              government-issued ID, geographic location, transaction history,
              device information, and other information necessary for service
              delivery.
            </p>

            <Separator className="my-6" />

            <h2>2. How We Collect Data</h2>
            <p>
              Personal data is collected through registration forms, website and
              app usage, cookies and similar technologies, third-party
              integrations (e.g., payment providers), and manual uploads by
              users.
            </p>

            <Separator className="my-6" />

            <h2>3. Purpose of Data Collection</h2>
            <p>
              We use data for account creation and management, processing
              transactions, improving services, marketing (with consent), data
              analytics, and compliance with legal requirements.
            </p>

            <Separator className="my-6" />

            <h2>4. Legal Basis for Processing</h2>
            <p>
              Processing is based on consent, contractual necessity, legal
              obligations, and our legitimate interests (e.g., fraud prevention
              and service improvement).
            </p>

            <Separator className="my-6" />

            <h2>5. How We Use Your Data</h2>
            <p>
              Data is used for authentication, delivering services,
              communicating updates, and analytics for service improvement and
              risk management.
            </p>

            <Separator className="my-6" />

            <h2>6. Sharing and Disclosure of Data</h2>
            <p>
              We may share data with partner cooperatives, payment processors,
              regulatory bodies, and approved third parties via API access.
              Sharing occurs with consent, to fulfill legal obligations, or
              under strict agreements with service providers.
            </p>

            <Separator className="my-6" />

            <h2>7. Data Retention</h2>
            <p>
              We retain data for the duration of membership plus up to five (5)
              years after account closure, or longer if required by law.
              Deletion requests are subject to management approval and legal
              compliance.
            </p>

            <Separator className="my-6" />

            <h2>8. Security Measures</h2>
            <p>
              We implement encryption at rest and in transit, strong password
              hashing (e.g., Argon2), access controls, audits, secure storage,
              protections against XSS/SQLi/CSRF, rate limiting, and IP blocking.
            </p>

            <Separator className="my-6" />

            <h2>9. Your Rights</h2>
            <p>
              You have rights to access, correct, delete, restrict processing,
              withdraw consent, request portability, and file complaints. To
              exercise rights, use the contact options below or the feedback
              forms on the site.
            </p>

            <Separator className="my-6" />

            <h2>10. International Data Transfers</h2>
            <p>
              Currently we do not store or process data outside the Philippines.
              Any future international transfers will include appropriate
              protections and user notification.
            </p>

            <Separator className="my-6" />

            <h2>11. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies for analytics, authentication, and improved user
              experience. You can manage cookie preferences in your browser.
            </p>

            <Separator className="my-6" />

            <h2>12. Children’s Privacy</h2>
            <p>
              We do not intentionally collect data from children. The platform
              is intended for cooperative staff and members; data related to
              minors requires parental consent and legal compliance.
            </p>

            <Separator className="my-6" />

            <h2>13. Policy Updates</h2>
            <p>
              We may update this policy. Major changes will be communicated by
              email or platform notification. Continued use after updates
              indicates acceptance.
            </p>

            <Separator className="my-6" />

            <h2>14. Contact Us</h2>
            <p>
              For privacy questions contact:
              <br />
              Zalven Lemuel Dayao — CEO, Lands Horizon Corp
              <br />
              Email: lands.horizon.corp@gmail.com
              <br />
              Phone: +63 991 617 1081
              <br />
              Address: BLK 5 LOT 49, MAKADIYOS STREET, VILLA MUZON SUBD, MUZON
              EAST, CITY OF SAN JOSE DEL MONTE, BULACAN, REGION III, 3023,
              PHILIPPINES
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
