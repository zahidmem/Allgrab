import { useState } from "react";
import axios from "axios";

const AddressForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    pincode: "",
    address: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://946ef349-9f61-444f-8fc5-0b63818f9af4-00-16wtvembxsemd.sisko.replit.dev/api/address",
        form,
      );

      alert("Address Saved Successfully!");
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert("Error saving address");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="fullName" placeholder="Full Name" onChange={handleChange} />

      <input name="phone" placeholder="Phone" onChange={handleChange} />

      <input name="pincode" placeholder="Pincode" onChange={handleChange} />

      <input name="address" placeholder="Address" onChange={handleChange} />

      <input name="city" placeholder="City" onChange={handleChange} />

      <input name="state" placeholder="State" onChange={handleChange} />

      <button type="submit">Save Address</button>
    </form>
  );
};

export default AddressForm;
