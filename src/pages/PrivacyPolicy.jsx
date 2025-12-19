export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-4">
          At <strong>AllGrab</strong> (www.allgrab.in), we value your trust and
          are committed to protecting your personal information. This Privacy
          Policy explains how we collect, use, and safeguard your data.
        </p>

        <Section
          title="1. Information We Collect"
          content={[
            "Personal details such as name, phone number, shipping address.",
            "Payment-related information processed securely via Razorpay (we do not store card details).",
            "Device and browser information for security and analytics purposes.",
          ]}
        />

        <Section
          title="2. How We Use Your Information"
          content={[
            "To process orders and deliver products.",
            "To communicate order updates and customer support.",
            "To improve our website and services.",
          ]}
        />

        <Section
          title="3. Payment Security"
          content={[
            "All payments are processed securely through Razorpay.",
            "We do not store your card, UPI, or banking details on our servers.",
          ]}
        />

        <Section
          title="4. Data Sharing"
          content={[
            "We do not sell or rent your personal data to third parties.",
            "Information may be shared only with delivery partners and payment gateways to complete your order.",
          ]}
        />

        <Section
          title="5. Cookies"
          content={[
            "We use cookies to enhance user experience and analyze website traffic.",
            "You can disable cookies from your browser settings.",
          ]}
        />

        <Section
          title="6. Your Rights"
          content={[
            "You may request access, correction, or deletion of your personal data.",
            "Contact us for any privacy-related concerns.",
          ]}
        />

        <Section
          title="7. Policy Updates"
          content={[
            "We may update this policy from time to time.",
            "Changes will be reflected on this page.",
          ]}
        />

        <Section
          title="8. Contact Information"
          content={[
            "Email: support@allgrab.in",
            "Website: https://www.allgrab.in",
          ]}
        />

        <p className="text-sm text-gray-500 mt-8 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

function Section({ title, content }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}