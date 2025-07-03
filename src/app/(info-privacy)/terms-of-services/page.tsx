import Image from "next/image";
import Link from "next/link";
import React from "react";

function TermOfServicesPage() {
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
            <h1 className="text-4xl font-bold">Terms Of Service</h1>
            <h2 className="mt-6 text-2xl font-bold">Introduction</h2>
            <p className="mt-4">
              These terms and conditions (&quot;Terms&quot;) govern your use of{" "}
              <Link href="/" className="underline font-medium">
                DenuAI
              </Link>{" "}
              (&quot;the Website&quot;). By accessing and using the Website, you
              agree to be bound by these Terms. If you do not agree to these
              Terms, you may not access the Website or use our services.
            </p>
            <h2 className="mt-6 text-2xl font-bold">Definitions</h2>
            <p className="mt-4">
              In these Terms, unless the context otherwise requires, the
              following expressions have the following meanings:
            </p>
            <ul className="list-disc pl-4 mt-3">
              <li>
                &quot;Us,&quot; &quot;We,&quot; &quot;Our,&quot;
                &quot;Ourselves&quot; refers to the operators of the Website,
                including its owners, administrators, developers, and any
                affiliated entities, officers, employees, agents, partners, and
                licensors.
              </li>
            </ul>
            <h2 className="mt-6 text-2xl font-bold">Limitations of Use</h2>
            <p className="mt-4">
              By using this website, you warrant on behalf of yourself, your
              users, and other parties you represent that you will not:
            </p>
            <ol className="list-decimal pl-4 mt-3">
              <li>
                modify, copy, prepare derivative works of, decompile, or reverse
                engineer any materials and software on this website.
              </li>
              <li>
                remove any copyright or other proprietary notations from any
                materials and software on this website.
              </li>
              <li>
                transfer the materials to another person or {"mirror"} the
                materials on any other server.
              </li>
              <li>
                knowingly or negligently use this website or any of its
                associated services in a way that abuses or disrupts our
                networks.
              </li>
              <li>
                use this website or its associated services to transmit or
                publish any harassing, indecent, obscene, fraudulent, or
                unlawful material.
              </li>
              <li>
                use this website or its associated services in violation of any
                applicable laws or regulations.
              </li>
              <li>
                use this website in conjunction with sending unauthorized
                advertising or spam.
              </li>
              <li>
                harvest, collect, or gather user data without the user&apos;s
                consent.
              </li>
              <li>
                use this website or its associated services in such a way that
                may infringe the privacy, intellectual property rights, or other
                rights of third parties.
              </li>
            </ol>
            <h2 className="mt-6 text-2xl font-bold">Intellectual Property</h2>
            <p className="mt-4">
              Users retain ownership of the intellectual property rights of any
              content they upload or generate on this website. You have the
              right to use, reproduce, modify, distribute, and commercialize
              your content as you see fit. We do not claim any ownership rights
              over user-generated content.
            </p>
            <h2 className="mt-6 text-2xl font-bold">User-Generated Content</h2>
            <p className="mt-4">
              Users of this platform are solely responsible for any content they
              upload or generate. We do not endorse, support, or guarantee the
              accuracy, integrity, or quality of any user-generated content. You
              are forbidden from generating images of individuals without their
              explicit consent or individuals who are minors. Any use of our
              services to infract upon others&apos; rights, engage in illegal
              activities, or carry out prohibited actions will not be tolerated.
              By accessing and using this platform, you agree that:
            </p>
            <ol className="list-decimal pl-4 mt-3">
              <li>
                Ownership: You retain ownership of any content you create,
                upload, or submit on the platform. You have the right to use,
                reproduce, modify, distribute, and commercialize your content as
                you see fit.
              </li>
              <li>
                Responsibility: You are solely responsible for any content you
                generate, upload, or submit on the platform, including its
                legality, accuracy, and appropriateness.
              </li>
              <li>
                Liability Waiver: We are not liable for any damages, losses, or
                liabilities arising from user-generated content. This includes
                but is not limited to defamation, infringement of intellectual
                property rights, or any other harm caused by user-generated
                content.
              </li>
              <li>
                Indemnification: You agree to indemnify and hold us harmless
                from any claims, demands, or actions arising out of or related
                to your user-generated content, including but not limited to
                legal fees and expenses incurred in defending against such
                claims.
              </li>
            </ol>
            <p className="mt-4">
              By using this platform, you acknowledge and agree that we reserve
              the right to ban users who violate these terms and conditions or
              submit objectionable content. While we do not actively monitor
              user-generated content, we may take action if necessary to
              maintain the integrity and safety of the platform.
            </p>
            <h3 className="mt-6 text-2xl font-bold">
              Zero Tolerance for Explicit Content Involving Minors
            </h3>
            <p className="mt-4">
              We enforce a strict policy of zero tolerance towards any form of
              explicit content involving minors on this platform. Any user found
              to be involved in the creation, distribution, or promotion of such
              content will be permanently banned from the platform. Such
              activities will also be reported to the appropriate authorities.
            </p>
            <h2 className="mt-6 text-2xl font-bold">Age Requirements</h2>
            <p className="mt-4">
              You must be at least 18 years old to use this platform. By
              accessing and using this platform, you affirm that you are of
              legal age and have the capacity to enter into these terms and
              conditions. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities
              that occur under your account.
            </p>
            <h2 className="mt-6 text-2xl font-bold">Liability</h2>
            <p className="mt-4">
              You acknowledge and agree that we shall not be liable for any
              direct, indirect, incidental, special, consequential, or exemplary
              damages, including but not limited to, damages for loss of
              reputation, profits, goodwill, data, or other intangible losses
              resulting from your use of the website. We provide the website on
              an {"as is"} and {"as available"} basis without any warranties.
              You agree to indemnify and hold us harmless from any claims,
              liabilities, damages, losses, costs, or expenses arising from your
              use of the website or violation of these terms and conditions.
            </p>
            <h2 className="mt-6 text-2xl font-bold">
              Purchases and Payment Options
            </h2>
            <p className="mt-4">
              When making a purchase on our platform, you agree to the following
              terms regarding pricing, product options, and payment methods. We
              offer three distinct product options:
            </p>
            <ul className="list-disc pl-4 mt-3">
              <li>PRO: $0.20 for 1 tokens</li>
              <li>API: $0.10 for 1 tokens</li>
            </ul>
            <p className="mt-4">
              All transactions are securely processed through our trusted
              third-party service providers, ensuring the highest level of
              security for your payments. We do not store or have access to your
              payment information, and by completing a purchase, you acknowledge
              and agree to abide by the terms and conditions set forth by our
              payment service providers. Various payment methods, including
              credit/debit cards, electronic funds transfer, and other options,
              are accepted, facilitated by our payment service providers. Prices
              are subject to change without prior notice, but any changes will
              not affect purchases that have already been confirmed. Refunds, if
              applicable, will be processed through the original payment method
              used for the purchase, subject to our Refund Policy. You are
              responsible for any applicable taxes or fees associated with your
              purchases, as determined by your local jurisdiction.
            </p>
            <h2 className="mt-6 text-2xl font-bold">Exclusion of Warranties</h2>
            <p className="mt-4">
              You expressly understand and agree that your use of the services
              is at your own risk. We provide the services on an {"as is"} and
              {"as available"} basis, without any warranties or representations
              of any kind. We do not warrant that:
            </p>
            <ul className="list-disc pl-4 mt-3">
              <li>The services will meet your requirements.</li>
              <li>
                The services will be uninterrupted, timely, secure, or free from
                error.
              </li>
              <li>
                Any information obtained by you as a result of your use of the
                services will be accurate or reliable.
              </li>
              <li>
                Defects in the operation or functionality of any software
                provided to you as part of the services will be corrected.
              </li>
            </ul>
            <h2 className="mt-6 text-2xl font-bold">Additional Tools</h2>
            <p className="mt-4">
              From time to time, we may provide additional tools or resources on
              the platform for your convenience. These tools are provided on an
              {"as is"} basis, and we make no warranties regarding their
              effectiveness, reliability, or suitability for your purposes.
            </p>
            <h2 className="mt-6 text-2xl font-bold">Indemnification</h2>
            <p className="mt-4">
              You agree to indemnify, defend, and hold harmless us and our
              affiliates, officers, directors, employees, agents, and licensors
              from and against any and all claims, liabilities, damages, losses,
              costs, expenses, or fees (including reasonable attorney&apos;
              fees) arising from:
            </p>
            <ul className="list-disc pl-4 mt-3">
              <li>Your use or misuse of the services.</li>
              <li>Your violation of these terms and conditions.</li>
              <li>
                Your violation of any rights of any other person or entity.
              </li>
              <li>
                Any content you submit, post, transmit, or make available
                through the services.
              </li>
            </ul>
            <p className="mt-4">
              You agree to cooperate as reasonably required by us in the defense
              of any claim. We reserve the right to assume the exclusive defense
              and control of any matter subject to indemnification by you, and
              you will not in any event settle any claim without our prior
              written consent.
            </p>
            <h2 className="mt-6 text-2xl font-bold">Right to Terminate</h2>
            <p className="mt-4">
              We reserve the right to terminate or suspend your access to the
              platform at any time, without prior notice or liability, for any
              reason whatsoever, including without limitation if you breach
              these terms and conditions.
            </p>
            <h2 className="mt-6 text-2xl font-bold">Refund Policy</h2>
            <p className="mt-4">
              Refunds may be issued within a 24-hour window from the date of
              purchase, subject to certain conditions. To be eligible for a
              refund, customers must submit a request within this timeframe,
              citing valid reasons such as products or services not meeting
              advertised specifications, technical issues, or unintentional
              duplicate purchases. Refund requests outside of this window or for
              reasons deemed ineligible, such as change of mind or personal
              preference, will not be honored.
            </p>
            <p className="mt-4">
              Due to the inherent characteristics of cryptocurrency
              transactions, refunds are not available for purchases made using
              this payment method. Cryptocurrency payments are irreversible and
              final once processed on the respective blockchain network. We
              advise customers to thoroughly review the product or service
              details before confirming any cryptocurrency payments.
            </p>
            <p className="mt-4">
              To initiate a refund, customers should email customer support at{" "}
              <a href="mailto:support@Denu.app">support@Denu.app</a>, providing
              details of the purchase and the reason for the request. Refunds
              will be processed through the original payment method, unless
              otherwise specified. We reserve the right to refuse refund
              requests that do not meet the criteria outlined in this policy. By
              making a purchase, customers agree to adhere to the terms of this
              Limited Refunds Policy.
            </p>
            <h2 className="mt-6 text-2xl font-bold">Entire Agreement</h2>
            <p className="mt-4">
              These Terms and any policies or operating rules posted by us on
              the website or with respect to the website constitute the entire
              agreement and understanding between you and us. Our failure to
              exercise or enforce any right or provision of these Terms shall
              not operate as a waiver of such right or provision. These Terms
              operate to the fullest extent permissible by law. We may assign
              any or all of our rights and obligations to others at any time. We
              shall not be responsible or liable for any loss, damage, delay, or
              failure to act caused by any cause beyond our reasonable control.
            </p>
            <p className="mt-4">
              If any provision or part of a provision of these Terms is
              determined to be unlawful, void, or unenforceable, that provision
              or part of the provision is deemed severable from these Terms and
              does not affect the validity and enforceability of any remaining
              provisions. There is no joint venture, partnership, employment, or
              agency relationship created between you and us as a result of
              these Terms or use of the website. You agree that these Terms will
              not be construed against us by virtue of having drafted them. You
              hereby waive any and all defenses you may have based on the
              electronic form of these Terms and the lack of signing by the
              parties hereto to execute these Terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermOfServicesPage;
