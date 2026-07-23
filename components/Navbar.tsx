"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Kamar", href: "#kamar" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Tentang Kami", href: "#tentang" },
  ];

  const waLink = getWhatsAppLink("6281234567890", "Halo, saya ingin bertanya tentang ketersediaan kos.");

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-cream/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <div className="w-8 h-8 rounded-full bg-forest text-cream flex items-center justify-center font-heading font-bold text-lg">
              K
            </div>
            <span className="font-heading font-bold text-xl text-forest tracking-tight">KawanKos</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-nearblack/80 hover:text-forest font-medium transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-forest hover:bg-sage text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm"
            >
              Hubungi Kami
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2 text-nearblack"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-cream z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 text-xl font-heading font-medium mb-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-nearblack hover:text-forest transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <a 
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-forest text-white px-8 py-3 rounded-lg font-medium text-lg shadow-md"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Hubungi via WhatsApp
        </a>
      </div>
    </header>
  );
}
