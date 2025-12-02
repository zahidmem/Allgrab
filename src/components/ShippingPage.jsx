import { useState } from "react";

function ShippingPage() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!/^[6-9]\d{9}$/.test(form.mobile))
      newErrors.mobile = "Enter valid 10-digit mobile number";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!/^\d{6}$/.test(form.pincode))
      newErrors.pincode = "Enter valid 6-digit pincode";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    alert("Shipping Info Submitted Successfully!");
  };

  const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    document.body.appendChild(script);
  });
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  await loadRazorpay();

  const order = await fetch("http://localhost:5000/api/order/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: 499 }), // dynamic amount allowed
  }).then((res) => res.json());

  const options = {
    key: "YOUR_RAZORPAY_KEY",
    amount: order.amount,
    currency: "INR",
    order_id: order.id,
    name: "My Store",
    description: "Order Payment",

    handler: async function (response) {
      // Save to DB
      await fetch("http://localhost:5000/api/order/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
          amount: order.amount / 100,
        }),
      });

      alert("Payment Successful!");
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Shipping Address</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-md bg-white p-6 rounded-xl shadow-md"
      >
        {/* Full Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </div>

        {/* Mobile */}
        <div>
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
          {errors.mobile && (
            <p className="text-red-600 text-sm">{errors.mobile}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
          {errors.address && (
            <p className="text-red-600 text-sm">{errors.address}</p>
          )}
        </div>

        {/* City */}
        <div>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
          {errors.city && (
            <p className="text-red-600 text-sm">{errors.city}</p>
          )}
        </div>

        {/* Pincode */}
        <div>
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={form.pincode}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
          {errors.pincode && (
            <p className="text-red-600 text-sm">{errors.pincode}</p>
          )}
        </div>

        <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ShippingPage;