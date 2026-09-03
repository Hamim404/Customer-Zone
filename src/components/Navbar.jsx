import { Plus } from "lucide-react";

const NAV_LINKS = ["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"];

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b border-base-200 px-6 max-w-7xl mx-auto">
      {/* Logo / site name */}
      <div className="navbar-start">
        <span className="text-lg font-bold text-gray-900 tracking-tight">
          CS — Ticket System
        </span>
      </div>

      {/* Desktop menu */}
      <div className="navbar-end hidden md:flex gap-4">
        <ul className="menu menu-horizontal px-1 gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a className="text-sm text-gray-600 hover:text-gray-900">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button className="btn btn-primary btn-sm rounded-lg gap-1.5">
          <Plus size={16} strokeWidth={2.5} />
          New Ticket
        </button>
      </div>

      {/* Mobile: just the New Ticket button, menu can be wired to a drawer later */}
      <div className="navbar-end md:hidden">
        <button className="btn btn-primary btn-sm rounded-lg gap-1.5">
          <Plus size={16} strokeWidth={2.5} />
          New Ticket
        </button>
      </div>
    </div>
  );
}
