"use client";

import { Separator } from "@/components/ui/separator";

export default function FaqPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-muted/10 w-full py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-foreground mb-2 text-3xl font-bold">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Welcome to the e-coop-suite FAQ page! Here you will find answers to
            common questions about our platform, services, and policies.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="bg-card mx-auto max-w-5xl space-y-8 rounded-lg p-8 shadow">
          <section className="prose max-w-none text-current">
            <h3>1. What is e-coop-suite?</h3>
            <p>
              <strong>e-coop-suite</strong> is a digital platform developed by
              Lands Horizon Corp to empower cooperatives with secure,
              user-friendly, and innovative online tools for managing
              operations, memberships, and financial activities.
            </p>

            <Separator className="my-6" />

            <h3>2. Who can use e-coop-suite?</h3>
            <p>
              The platform is designed for cooperative organizations,
              cooperative banks, their members, staff, and directors. Any
              cooperative organization looking to modernize and streamline its
              operations can register and subscribe.
            </p>

            <Separator className="my-6" />

            <h3>3. How do I register or sign up?</h3>
            <p>
              You can register by visiting ecoop-suite.com. Click the Sign Up
              button and follow the prompts to complete registration.
            </p>

            <Separator className="my-6" />

            <h3>4. What subscription plans are available?</h3>
            <p>
              We offer Basic, Standard, Premium, and Enterprise plans. Each plan
              comes with its own features and pricing. Visit the Subscription
              Plans page for details.
            </p>

            <Separator className="my-6" />

            <h3>5. How does the platform ensure data security?</h3>
            <p>
              Our platform employs industry-standard security measures such as
              data encryption, secure authentication, access controls, and
              regular security audits. All servers are hosted on Fly.io. See the
              Security Policy for more information.
            </p>

            <Separator className="my-6" />

            <h3>6. What is the KYC process?</h3>
            <p>
              Users are required to undergo Know Your Customer (KYC)
              verification, which includes submitting valid identification and
              other necessary documents to comply with regulatory requirements
              and mitigate fraud. See our KYC Policy for details.
            </p>

            <Separator className="my-6" />

            <h3>7. How are my personal and cooperative data protected?</h3>
            <p>
              We adhere to data privacy laws and best practices. Your data is
              encrypted, securely stored, and only accessible to authorized
              personnel. See our Data Protection Policy for full details.
            </p>

            <Separator className="my-6" />

            <h3>8. What fees or charges should I expect?</h3>
            <p>
              Subscription fees apply and certain services may incur additional
              charges. All fees are listed on our Fee and Charges page.
            </p>

            <Separator className="my-6" />

            <h3>9. How do I lodge a complaint or resolve a dispute?</h3>
            <p>
              Submit complaints via our online feedback form, email, phone, or
              mail. We aim to address concerns fairly and promptly. See our
              Complaint Handling page for the process.
            </p>

            <Separator className="my-6" />

            <h3>10. Who do I contact for support?</h3>
            <p>
              For support, email lands.horizon.corp@gmail.com or call +63 991
              617 1081. Our team is ready to assist.
            </p>
            <Separator className="my-6" />

            <h3>11. When is the launch date?</h3>
            <p>January 6, 2026.</p>

            <Separator className="my-6" />

            <h3>12. How many employees or members can use it?</h3>
            <p>
              Unlimited — the platform is built to scale and can support
              millions or more members and users.
            </p>

            <Separator className="my-6" />

            <h3>13. Is there an API or webhooks for developers?</h3>
            <p>
              Yes. Developer APIs and webhook support are available for
              transactions, forecasting, and other integrations. Authorization
              keys are securely stored on your account, and API documentation
              (endpoints, requests, and responses) is provided in the developer
              portal.
            </p>

            <Separator className="my-6" />

            <h3>14. How does the platform ensure data security?</h3>
            <p>
              We use industry-standard measures: encryption at rest and in
              transit, secure authentication, role-based access controls, and
              regular security audits. Our infrastructure is hosted on Fly.io.
              See the Security Policy for full details.
            </p>

            <Separator className="my-6" />

            <h3>15. What is e-coop-suite?</h3>
            <p>
              e-coop-suite is a digital platform from Lands Horizon Corp that
              helps cooperatives manage memberships, finances, and operations
              with secure, user-friendly tools.
            </p>

            <Separator className="my-6" />

            <h3>16. Who can use e-coop-suite?</h3>
            <p>
              Cooperatives, cooperative banks, their members, staff, and
              directors. Any cooperative looking to modernize operations can
              register and subscribe.
            </p>

            <Separator className="my-6" />

            <h3>17. Who do I contact for support?</h3>
            <p>
              Email lands.horizon.corp@gmail.com or call +63 991 617 1081. Our
              support team will assist with inquiries and technical issues.
            </p>

            <Separator className="my-6" />

            <h3>18. What subscription plans are available?</h3>
            <p>
              We offer Basic, Standard, Premium, and Enterprise plans tailored
              to cooperative needs. Each plan includes different features and
              pricing — see the Subscription Plans page for details.
            </p>

            <Separator className="my-6" />

            <p>
              <strong>Did not find your question?</strong>
              <br />
              Contact us at lands.horizon.corp@gmail.com or visit our contact
              page for further assistance.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
