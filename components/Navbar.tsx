"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLaptopCode, FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: any) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav className="bg-gray-200 border-b border-gray-700 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-gray-500"
        >
          <FaLaptopCode className="text-gray-500 text-xl" />
          <span>Blog for Dev</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative pb-1 transition-colors duration-300
                  ${
                    isActive(link.path)
                      ? "text-gray-600"
                      : "text-gray-500 hover:text-gray-600"
                  }
                  after:absolute after:left-0 after:bottom-0
                  after:h-0.5 after:w-0
                  after:bg-gray-500
                  after:transition-all after:duration-300
                  hover:after:w-full
                  ${isActive(link.path) ? "after:w-full" : ""}
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <Button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-400 text-xl"
            variant="ghost"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900 border-t border-gray-700 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-base transition-colors duration-300
                ${
                  isActive(link.path)
                    ? "text-blue-400 font-semibold"
                    : "text-gray-300 hover:text-blue-400"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
