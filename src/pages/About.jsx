// pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About AllGrab.in</h1>
          <p className="text-gray-600">Your trusted partner for quality products and exceptional service</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              AllGrab.in is a leading e-commerce platform that offers a wide range of products, including eyewear, mobile accessories, and more. Our mission is to provide our customers with the best possible shopping experience, with a focus on quality, service, and competitive prices.
            </p>
            <p className="text-gray-600 mb-4">
              We are committed to building trust with our customers by offering authentic products, ensuring timely delivery, and providing excellent customer service. Our team is dedicated to making your shopping experience seamless and enjoyable.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Authentic products from trusted brands</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Competitive prices with best offers</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Timely delivery with reliable shipping</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Excellent customer service with 24/7 support</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Products</h2>
          <p className="text-gray-600 mb-4">
            We offer a wide range of products, including:
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Eyewear products from top brands</span>
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Mobile accessories from leading manufacturers</span>
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Gifts and other products</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
