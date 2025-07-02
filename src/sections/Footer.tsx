import * as React from 'react';

export function Footer() {
  const socialMediaLinks = [
    { name: 'Twitter', href: 'https://x.com/thomas_smith247' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/anthony-anso/' },
    { name: 'Instagram', href: 'https://www.instagram.com/anth_onydigital/' },
    { name: 'Facebook', href: 'https://www.facebook.com/anthony.hub.2025/' },
    { name: 'Whatsapp', href: 'https://wa.link/8jydbw' },
    { name: 'Github', href: 'https://github.com/anthonyanso' }
  ];

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
                <a href="#" className="hover:text-emerald-400 transition-colors">{item}</a>
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
            <p className="text-sm">anthonyanso@outlook.com</p>
            <p className="text-sm">1 Mission Road, GRA, Onitsha, Anambra State. Nigeria</p>
            <p className="text-sm">(+234) 907 345 1545</p>
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
              <div className="relative max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-gray-600 py-2 px-1 focus:outline-none focus:border-emerald-400 transition-colors"
                />
                <button
                  type="button"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-emerald-400 hover:text-white transition-colors"
                  title="Subscribe"
                  aria-label="Subscribe"
                >
                  Subscribe
                </button>
              </div>
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


