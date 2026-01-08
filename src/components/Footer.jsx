// components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">AllGrab.in</h2>
            <p className="text-gray-400">
              AllGrab.in is an e-commerce platform that offers a wide range of
              products, including eyewear, mobile accessories, and more.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  about
                </Link>
              </li>

              <li>
                <Link
                  to="/PrivacyPolicy"
                  className="text-gray-400 hover:text-white"
                >
                  Privacy-Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/TermsAndConditions"
                  className="text-gray-400 hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Secure Payment</h2>
            <div className="flex space-x-4 mb-4">
              <img src="/paytm.jpeg" alt="paytm Logo" className="w-32 h-8" />
              <img src="/gpay.jpeg" alt="Google Pay Logo" className="w-8 h-8" />
              <img src="/phonepe.png" alt="PhonePe Logo" className="w-8 h-8" />

              <img src="/visa.png" alt="Mastercard Logo" className="w-8 h-8" />
            </div>
            <p className="text-gray-400">
              We use secure payment gateways to process payments.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} AllGrab.in. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
