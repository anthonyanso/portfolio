"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Head from 'next/head';
import ArrowUp from '@/assets/icons/arrow-up-right.svg';
import Logo from '@/assets/images/logo.png';

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#categories", label: "Categories" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Shared nav item classes
  const navItemClass =
    "flex items-center gap-2 px-4 py-2 rounded-full font-medium text-white transition-colors duration-200 hover:bg-emerald-300/20 active:bg-emerald-300/40 focus:outline-none";

  return (
    <>
      <Head>
        <title>Anthony Anso | Portfolio</title>
        <meta name="description" content="Welcome to my portfolio - I'm Anthony Anso, a web developer passionate about creating impactful digital solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="fixed top-3 w-full z-10 px-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          {/* Logo */}
            <a
            href="#home"
            className="bg-white-900/90 backdrop-blur text-white-900 font-bold text-xl p-2.5 rounded-full border border-white/15 hover:bg-emerald-300/20 transition-colors"
            >
            <img
              src={Logo.src}
              alt="Anthony Anso Logo"
              className="h-8 w-8 rounded-full"
              style={{ filter: "grayscale(0) brightness(0) saturate(100%) invert(34%) sepia(98%) saturate(749%) hue-rotate(110deg) brightness(100%) contrast(90%)" }}
            />
            </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1 p-0.5 rounded-full border border-white/15 bg-white/10 backdrop-blur">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className={navItemClass}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className={`${navItemClass} font-semibold`}>
              Contact
              <span className="ml-2 p-1 bg-white rounded-full flex items-center justify-center transition-colors duration-200 group-hover:bg-emerald-300/20 group-active:bg-emerald-300/70">
                <ArrowUp className="size-6 text-gray-900" />
              </span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full bg-white/10 backdrop-blur border border-white/15"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="size-6 text-white" />
            ) : (
              <Menu 
                className="size-6"
                style={{ filter: "grayscale(0) brightness(0) saturate(100%) invert(34%) sepia(98%) saturate(749%) hue-rotate(110deg) brightness(100%) contrast(90%)" }} 
              />
            )}
          </button>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="absolute top-16 left-4 right-4 flex flex-col gap-2 p-4 rounded-2xl border border-white/15 bg-gray-950/90 backdrop-blur md:hidden">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className={`${navItemClass} justify-center`}>
                  {link.label}
                </a>
              ))}
              <a href="#contact" className={`${navItemClass} font-semibold justify-center`}>
                Contact
                <span className="ml-2 p-1 bg-white rounded-full flex items-center justify-center transition-colors duration-200 group-active:bg-emerald-300/70">
                  <ArrowUp className="size-6 text-gray-900" />
                </span>
              </a>
            </nav>
          )}
        </div>
      </div>
    </>
  );
};