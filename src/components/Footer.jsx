import { Mail } from "lucide-react";
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: ["About Us", "Our Mission", "Contact Sales"],
  },
  {
    title: "Services",
    links: ["Products & Services", "Customer Stories", "Download Apps"],
  },
  {
    title: "Information",
    links: ["Privacy Policy", "Terms & Conditions", "Join Us"],
  },
];

const SOCIAL_LINKS = [
  { id: "twitter", icon: FaXTwitter, label: "@CS — Ticket System" },
  { id: "linkedin", icon: FaLinkedinIn, label: "@CS — Ticket System" },
  { id: "facebook", icon: FaFacebookF, label: "@CS — Ticket System" },
  { id: "email", icon: Mail, label: "support@cst.com" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand + blurb */}
        <div className="lg:col-span-2">
          <p className="footer-title text-white opacity-100 p-0 mb-3">
            CS — Ticket System
          </p>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Link columns */}
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <h6 className="footer-title text-white opacity-100 p-0 mb-3">
              {col.title}
            </h6>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a className="link link-hover text-sm text-gray-500 hover:text-gray-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social links */}
        <div>
          <h6 className="footer-title text-white opacity-100 p-0 mb-3">
            Social Links
          </h6>
          <ul className="space-y-2.5">
            {SOCIAL_LINKS.map(({ id, icon: Icon, label }) => (
              <li
                key={id}
                className="flex items-center gap-2 text-sm text-gray-500"
              >
                <Icon size={13} />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-gray-500">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}