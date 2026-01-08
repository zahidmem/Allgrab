export default function WhatsAppButton() {
  const phoneNumber = "918200658501"; // country code ke saath
  const message = "Hi, I am interested in this product. Please share details.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="w-7 h-7"
        />
      </div>
    </a>
  );
}