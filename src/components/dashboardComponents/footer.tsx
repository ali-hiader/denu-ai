import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="mb-22 lg:mb-0 bg-[#0F0320]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4">
          <p className="max-w-3xl text-center text-sm text-gray-600">
            We do not store any data. We do not take any responsibility for
            images created using the site. The images created are art. The
            person in the picture or photograph must not be under 18 years of
            age.
          </p>
          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row text-gray-300 mb-10 md:mb-0">
            <span className="text-sm">
              © 2025
              <Link
                href="/"
                className="footer-link font-medium hover:underline"
              >
                Denu™
              </Link>
              . All Rights Reserved.
            </span>
            <nav>
              <ul className="flex flex-wrap items-center gap-4 text-sm font-medium">
                <li>
                  <Link
                    href="/terms-of-service"
                    className="footer-link hover:underline"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="footer-link hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    target="_blank"
                    className="footer-link hover:underline"
                  >
                    Telegram Support
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
