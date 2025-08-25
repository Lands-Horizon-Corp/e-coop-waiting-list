import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Us Section - Full width on mobile */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
              About Us
            </h3>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed sm:text-base">
              We are engineers and researchers focused on security, AI, and user
              experience. We adapt to cooperative needs to deliver innovation
              and empower communities.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
              Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors sm:text-base"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors sm:text-base"
                  href="/faq"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors sm:text-base"
                  href="/join"
                >
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors sm:text-base"
                  href="/privacy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors sm:text-base"
                  href="/terms"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors sm:text-base"
                  href="/about"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="text-muted-foreground text-sm sm:text-base">
                <a
                  className="hover:text-foreground transition-colors"
                  href="mailto:lands.horizon.corp@gmail.com"
                >
                  lands.horizon.corp@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors sm:text-base"
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t pt-8">
          <p className="text-muted-foreground text-center text-xs leading-relaxed sm:text-sm">
            &copy; {new Date().getFullYear()} E-Coop Community. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
