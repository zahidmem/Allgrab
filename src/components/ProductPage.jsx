import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

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
    price: "₹2,999",
    description:
      "Premium smart eyewear with lightweight frame, UV protection, and built-in smart assistant compatibility.",
    images: [
      "/product1.jpg",
      "/product2.jpg",
      "/product3.jpg",
      "/product4.jpg",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-white shadow p-5 text-center text-2xl font-bold tracking-wide">
        MyEyewearStore
      </header>

      {/* Product Card */}
      <div className="mt-10 bg-white rounded-xl shadow-xl p-6 max-w-xl w-full">
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
        </Slider>

        {/* Product Info */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">{product.title}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>

          <p className="text-3xl font-bold text-blue-600 mt-4">
            {product.price}
          </p>

          <button
            onClick={() => navigate("/shipping")}
            className="mt-6 w-full bg-blue-600 text-white text-lg py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
