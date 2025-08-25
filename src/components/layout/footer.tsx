import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-[#f6f6f6]">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-1 sm:py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              About Us
            </h3>
            <p className="mt-4 text-base text-gray-500">
              Empowering communities through cooperative ownership and mutual
              aid, transforming economic challenges into opportunities for
              progress.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  className="text-base text-gray-500 hover:text-gray-900"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-base text-gray-500 hover:text-gray-900"
                  href="/faq"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  className="text-base text-gray-500 hover:text-gray-900"
                  href="/privacy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-base text-gray-500 hover:text-gray-900"
                  href="/terms"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-base text-gray-500 hover:text-gray-900"
                  href="/about"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-500">info@e-coop.org</li>
              <li>
                <a
                  className="text-base text-gray-500 hover:text-gray-900"
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} E-Coop Community. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
