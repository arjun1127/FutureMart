import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 py-12 px-6 mt-24 mb-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Branding / About */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">FutureMart</h3>
          <p className="text-sm leading-relaxed">
            Your go-to marketplace to showcase and sell your products with ease.
            Join thousands of sellers growing their business with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
            <li><a href="#Features" className="hover:text-white transition">Features</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-between">
          <h4 className="text-white font-semibold mb-0">Follow Us</h4>
          <div className="flex space-x-4 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-xs mt-12 text-gray-600">
        © {new Date().getFullYear()} FutureMart. All rights reserved.
      </div>
    </footer>
  );
}
