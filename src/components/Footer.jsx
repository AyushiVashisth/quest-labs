import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 md:py-28">
      <div className="container mx-auto flex flex-wrap gap-8 md:gap-0 md:grid-cols-2 lg:grid-cols-4 w-11/12 lg:w-[82%]">
        <div className="flex-1">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M19.3333 0.666748V6.88897L13.1111 13.1112V6.88897H6.88885V10.9969C6.88885 12.1649 7.83514 13.1112 9.00311 13.1112H13.1111L6.88885 19.3334C3.45237 19.3334 0.666626 16.5477 0.666626 13.1112V0.666748H19.3333Z"
              fill="white"
            ></path>
            <path
              d="M19.3333 13.1112L13.1111 13.1112L13.1111 19.3334H19.3333V13.1112Z"
              fill="white"
            ></path>
          </svg>
          <div className="mt-2">
            <a href="/" className="font-bold text-lg">
              Quest Labs INC
            </a>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="text-sm font-medium uppercase mb-2 text-white">
            Resources
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/blog"
                className="hover:text-white hover:underline text-sm text-gray-500"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/newsletter"
                className="hover:text-white hover:underline text-sm text-gray-500"
              >
                Newsletter
              </a>
            </li>
            <li>
              <a
                href="/playbook"
                className="hover:text-white hover:underline text-sm text-gray-500"
              >
                Playbook
              </a>
            </li>
            <li>
              <a
                href="/docs"
                className="hover:text-white hover:underline text-sm text-gray-500"
              >
                Docs
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h4 className="text-sm font-medium uppercase mb-2 text-white">
            Support
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/contact"
                className="hover:text-white hover:underline text-sm text-gray-500"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/join-quest-club"
                className="hover:text-white hover:underline text-sm text-gray-500"
              >
                Join Quest Club
              </a>
            </li>
            <li>
              <a
                href="/sales-partner"
                className="hover:text-white hover:underline text-sm text-gray-500"
              >
                Sales Partner
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h4 className="text-sm font-medium uppercase mb-2 text-white">
            Legal
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-white hover:underline text-sm text-gray-500"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-of-use"
                className="hover:text-white hover:underline text-sm text-gray-500"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                href="/cookie-policy"
                className="hover:text-white hover:underline text-sm text-gray-500"
              >
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-gray-900 border-2 mt-8 mx-auto w-11/12 lg:w-[82%]"></div>

      <p className="mt-4 text-sm text-left mx-auto w-11/12 lg:w-[82%]">
        © {new Date().getFullYear()} Quest Labs INC. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
