import { useState } from "react";
import { FaChevronDown, FaLinkedin, FaEnvelope } from "react-icons/fa";

function ContactDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown position-relative">
      {/* Toggle button */}
      <button
        className="btn dropdown-btn dropdown-toggle d-flex align-items-center gap-2"
        onClick={() => setOpen(!open)}
      >
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          className="dropdown-menu show position-absolute mt-2"
        >
          <a
            className="dropdown-item d-flex align-items-center gap-2"
            href="https://www.linkedin.com/in/paul-marbella-206598244/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            className="dropdown-item d-flex align-items-center gap-2"
            href="mailto:paulmarbella12@gmail.com"
          >
            <FaEnvelope /> Email Me
          </a>
        </div>
      )}
    </div>
  );
}

export default ContactDropdown;
