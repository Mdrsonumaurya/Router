import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email subscription logic here
    alert(`Thanks for subscribing! We'll send updates to ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <svg
                className="h-8 w-8 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
              <span className="ml-2 text-xl font-bold">About To Dance</span>
            </div>
            <p className="text-gray-400 text-sm">
              Bringing rhythm to your life through professional dance training
              and performances.
            </p>
          </div>

          {/* Income Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Income Sources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-500 transition">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition">
                  Promotions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition">
                  Partnerships
                </a>
              </li>
            </ul>
          </div>

          {/* Email Subscription */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition duration-300"
              >
                Subscribe Now
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-400">
              Get latest updates about dance events, workshops and special
              offers
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} About To Dance. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-500 transition"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-500 transition"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
