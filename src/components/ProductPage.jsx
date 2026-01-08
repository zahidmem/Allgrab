import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import whatsAppButton from "./WhatsAppButton";

const ProductPage = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2500,
  };

  const product = {
    title: "Smart Vision Eyewear",
    price: 799,
    description:
      "Premium smart eyewear with lightweight frame, UV protection, and built-in smart assistant compatibility.",
    images: [
      "/product1.jpg",
      "/product2.jpg",
      "/product3.jpg",
      "/product4.jpg",
    ],
  };

  const handleBuyNow = () => {
    navigate("/address", {
      state: { price: product.price }, // <-- sending amount to next page
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Product Card */}
      <div className="bg-white rounded-xl shadow-xl p-2 max-w-xl w-full">
        {/* Carousel */}
        <Slider {...settings}>
          {product.images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                className="rounded-lg w-full h-72 object-cover"
                alt="Product"
              />
            </div>
          ))}
        </Slider>{" "}
        {/* Product Info */}
        <div className="space-y-3">
          <div className="pt-6 border-t border-gray-200 text-gray-600 text-sm "></div>
          <h1 className="text-4xl font-semibold text-gray-900 leading-tight">
            Premium Minimal Eyewear – Ultra-Light & Scratch Proof
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Elevate your everyday look with ultra-light frames, HD UV-400 lenses
            and anti-scratch premium coating. Perfect for daily wear with a
            minimal luxury touch.
          </p>

          {/* Pricing */}
          <div className="flex items-end gap-3">
            <p className="text-5xl font-bold text-gray-900">{product.price}</p>
            <p className="line-through text-gray-400 text-xl">₹2,299</p>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              discount
            </span>
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-900">
              Key Features
            </h2>
            <ul className="text-gray-600 space-y-1">
              <li>✔ Ultra-light Japanese frame</li>
              <li>✔ HD UV-400 Premium Lenses</li>
              <li>✔ Anti-Scratch & Anti-Glare Coated</li>
              <li>✔ Sweat & Dust Resistant</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={handleBuyNow}
              className="bg-black text-white px-10 py-4 rounded-xl text-lg font-medium hover:bg-gray-900 transition shadow-md"
            >
              Buy Now
            </button>
          </div>

          {/* Guarantee */}
          <div className="pt-6 border-t border-gray-200 text-gray-600 text-sm space-y-1">
            <p>💎 All products checked before dispatch</p>
            <p>🚚 Free Delivery Across India</p>
            <p>🔐 100% Secure & Encrypted Payment</p>
          </div>
        </div>
      </div>
    </div>
  );

  <whatsAppButton />
};

export default ProductPage;
