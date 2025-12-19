// ---------- All your imports ----------
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
export default function AddressForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    pincode: "",
    state: "",
    city: "",
    addressLine: "",
  });
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const price = location.state?.price || 200; // receiving amount from product page
  var amount = price;
  console.log(amount);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Load Razorpay Script
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const payNow = async () => {
    try {
      setLoading(true); // 🔥 LOADER ON

      const loaded = await loadRazorpay();
      if (!loaded) {
        setLoading(false);
        alert("Razorpay SDK failed to load");
        return;
      }

      const orderRes = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/payment/order`,
        { amount },
      );

      const order = orderRes.data.order;

      const options = {
        key: import.meta.env.VITE_RZP_KEY_ID,
        amount: price,
        currency: "INR",
        name: "allgrab.com",
        description: "Payment",
        order_id: order.id,

        handler: async function (response) {
          setLoading(false); // ✅ LOADER OFF (SUCCESS)

          await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/orders/save`,
            {
              address: formData,
              amount: order.amount,
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              signature: response.razorpay_signature,
            },
          );

          alert("Payment Successful!");
        },

        modal: {
          ondismiss: function () {
            setLoading(false); // ✅ LOADER OFF (CLOSE)
          },
        },

        prefill: {
          name: formData.fullName,
          contact: formData.phone,
        },

        notes: {
          address: formData.addressLine,
        },

        theme: { color: "#000000" },
      };

      const rzp = new window.Razorpay(options);
      if (!order?.id) {
        setLoading(false);
        alert("order not created");
      }
      rzp.open();
    } catch (err) {
      setLoading(false); // 🔥 LOADER OFF (ERROR)
      console.error(err);
      alert("Something went wrong");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    payNow();
  };

  return (
    <>
      {/* FULL SCREEN LOADER */}
      {loading && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white text-lg">Redirecting to payment...</p>
          </div>
        </div>
      )}
      <div className="gap-2 min-h-screen bg-gray-50 flex justify-center py-12 px-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg w-full bg-white p-8 rounded-xl shadow-lg space-y-6"
        >
          <h1 className="py-5 text-2xl font-semibold text-gray-900 text-center">
            Shipping Address
          </h1>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          <textarea
            name="addressLine"
            placeholder="Full Address"
            value={formData.addressLine}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            rows="3"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-900"
          >
            Pay Now (₹{amount})
          </button>
        </form>
      </div>
    </>
  );
}
