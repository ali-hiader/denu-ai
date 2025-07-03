import Image from "next/image";
import Link from "next/link";
import React from "react";

function PrivacyPolicyPage() {
  return (
    <div className="font-sans text-gray-900 antialiased">
      <div className="pt-4 bg-gray-100">
        <div className="flex flex-col items-center min-h-screen pt-6 sm:pt-0">
          <div>
            <Image
              src="/logo.png"
              alt="Denu"
              className="block w-auto h-9"
              width={100}
              height={20}
            />
          </div>

          <div className="w-full p-6 mt-6 overflow-hidden prose bg-white shadow-md sm:max-w-2xl sm:rounded-lg">
            <h1 className="mt-6 text-2xl font-bold">Privacy Policy</h1>
            <p className="mt-4">
              <strong>Effective Date:</strong> January 13, 2024
            </p>
            <p className="mt-4">
              At DenuAI, we are committed to safeguarding your privacy and
              ensuring the security of your personal information. Our privacy
              policy outlines how we collect, use, and protect your data. By
              using our website, <Link href="/">DenuAI</Link>, and other
              affiliated sites, you agree to the practices described below.
            </p>
            <h2 className="mt-6 text-2xl font-bold">
              Collection of Information
            </h2>
            <p className="mt-4">
              We only request personal information when it is necessary to
              provide you with our services. We gather this information through
              fair and lawful means, always with your informed consent. We are
              transparent about why we collect your data and how it will be
              utilized.
            </p>
            <h2 className="mt-6 text-2xl font-bold">
              Data Retention and Security
            </h2>
            <p className="mt-4">
              We retain your collected information for as long as it is required
              to deliver the services you have requested. We employ commercially
              acceptable measures to safeguard your data against loss, theft,
              unauthorized access, disclosure, copying, use, or modification.
            </p>
            <h2 className="mt-6 text-2xl font-bold">Sharing of Information</h2>
            <p className="mt-4">
              We do not publicly share any personally identifying information
              unless mandated by law.
            </p>
            <h2 className="mt-6 text-2xl font-bold">External Links</h2>
            <p className="mt-4">
              Our website may contain links to external sites that are not
              operated by us. Please be aware that we have no control over the
              content and practices of these sites, and we cannot accept
              responsibility or liability for their respective privacy policies.
            </p>
            <h2 className="mt-6 text-2xl font-bold">Opting Out</h2>
            <p className="mt-4">
              You have the freedom to decline our request for your personal
              information, understanding that this may limit our ability to
              provide certain services.
            </p>
            <h2 className="mt-6 text-2xl font-bold">
              Acceptance of Our Privacy Policy
            </h2>
            <p className="mt-4">
              By continuing to use our website, you signify your acceptance of
              our privacy practices and how we handle user data and personal
              information.
            </p>
            <p className="mt-4">
              If you have any questions or concerns regarding our privacy policy
              or the handling of your data, please do not hesitate to{" "}
              <a href="https://t.me/Denu_app">contact us</a>.
            </p>
            <p className="mt-4">
              Your privacy matters to us, and we are dedicated to upholding the
              highest standards of data protection. Thank you for choosing Denu.
            </p>
            <p className="mt-4">
              <em>For any inquiries or concerns, please reach out to us.</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
