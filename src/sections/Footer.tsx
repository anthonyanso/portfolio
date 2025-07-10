"use client";
import * as React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';

export function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const socialMediaLinks = [
    { name: 'Twitter', href: 'https://x.com/thomas_smith247' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/anthony-anso/' },
    { name: 'Instagram', href: 'https://www.instagram.com/anth_onydigital/' },
    { name: 'Facebook', href: 'https://www.facebook.com/anthony.hub.2025/' },
    { name: 'Whatsapp', href: 'https://wa.link/8jydbw' },
    { name: 'Github', href: 'https://github.com/anthonyanso' }
  ];

  const handleSubscribe = async () => {
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message || 'Subscribed successfully!');
        setEmail('');
      } else {
        toast.error(data.error || data.message || 'Subscription failed.');
      }
    } catch (err) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Navigation Column */}
        <div className="col-span-1">
          <h3 className="text-lg font-medium mb-4 text-gray-300">Navigation</h3>
          <ul className="space-y-3">
            {['Home', 'About', 'Project', 'Categories', 'Testimonials', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#?" className="hover:text-emerald-400 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Services Column */}
        <div className="col-span-1">
          <h3 className="text-lg font-medium mb-4 text-gray-300">Services</h3>
          <ul className="space-y-3">
            {['Branding', 'U/UX Design', 'Graphic Designing', 'Web Developemnt', 'Mobile App Development'].map((item) => (
              <li key={item}>
                <a href="#?" className="hover:text-emerald-400 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Social Media Column */}
        <div className="col-span-1">
          <h3 className="text-lg font-medium mb-4 text-gray-300">Social Media</h3>
          <ul className="space-y-3">
            {socialMediaLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Information */}
        <div className="col-span-2 md:col-span-1 lg:col-span-2">
          <h3 className="text-lg font-medium mb-4 text-gray-300">Contact</h3>
          <div className="space-y-4">
            <p className="text-sm"><a href="mailto:anthonyanso@outlookcom">anthonyanso@outlook.com</a></p>
            <p className="text-sm">1 Mission Road, GRA, Onitsha, Anambra State. Nigeria</p>
            <p className="text-sm"><a href="tel:09073451545">(+234) 907 345 1545</a></p>
          </div>
        </div>
        {/* Newsletter */}
        <div className="col-span-2 md:col-span-4 lg:col-span-5 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h3 className="text-2xl font-medium mb-2">Be Creative,</h3>
              <h3 className="text-2xl font-medium">Be Solutive</h3>
            </div>
            <div className="w-full md:w-auto">
              <form
                className="relative max-w-md flex"
                onSubmit={e => {
                  e.preventDefault();
                  handleSubscribe();
                }}
                autoComplete="off"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-l-full bg-[#18181b] border-none py-3 px-5 text-white placeholder-gray-400  focus:outline-none transition-all shadow-lg shadow-black/10"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled={loading}
                  style={{ minWidth: 0 }}
                />
                <button
                  type="submit"
                  className="rounded-r-full bg-gradient-to-r from-emerald-400 to-blue-500 hover:from-blue-500 hover:to-emerald-400 text-white font-semibold px-6 py-3 transition-all duration-200 shadow-lg shadow-black/10 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                      Subscribing...
                    </span>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
}
