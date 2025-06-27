import React from "react";

function FAQs() {
  return (
    <section id="faq" className="py-20 bg-dark-deeper">
      {" "}
      <div className="container mx-auto px-4">
        {" "}
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          FAQs
        </h2>{" "}
        <p className="text-xl text-center text-gray-300 mb-12">
          Questions about DenuAI? Here are the answers!
        </p>{" "}
        <div className="max-w-3xl mx-auto">
          {" "}
          <div className="space-y-6">
            {" "}
            <div className="border-b border-gray-700 pb-6">
              {" "}
              <h3 className="text-xl font-semibold mb-2 text-white">
                Is DenuAI Free?
              </h3>{" "}
              <p className="text-gray-300">
                DenuAI operates on a freemium model, allowing you to experiment
                with the free version and offering 3 PRO credits to test our PRO
                features. We do not charge recurring subscriptions; instead, you
                only pay for the credits you want as a one-time payment.
              </p>{" "}
            </div>
            <div className="border-b border-gray-700 pb-6">
              {" "}
              <h3 className="text-xl font-semibold mb-2 text-white">
                How does DenuAI work?
              </h3>{" "}
              <p className="text-gray-300">
                DenuAI uses AI and computer vision to automatically create nude
                images without the need for manual brushing over clothes. Our
                proprietary technology delivers superior results faster than our
                competitors.
              </p>{" "}
            </div>
            <div className="border-b border-gray-700 pb-6">
              {" "}
              <h3 className="text-xl font-semibold mb-2 text-white">
                Are my images stored?
              </h3>{" "}
              <p className="text-gray-300">
                No, we only process the images for the DeepNude process and
                promptly delete all data afterward, ensuring your images remain
                secure and breach-resistant. Additionally, we use anonymization
                techniques to guarantee that the images you generate cannot be
                traced back to you in any way.
              </p>{" "}
            </div>
            <div className="border-b border-gray-700 pb-6">
              {" "}
              <h3 className="text-xl font-semibold mb-2 text-white">
                What are the differences between free, pro and API?
              </h3>{" "}
              <p className="text-gray-300">
                The Free version offers generation with certain limitations to
                prevent abuse, such as a single queue for all free users,
                watermarks, and lower quality outputs to ensure reasonable
                generation times. The PRO version provides access to
                non-watermarked deepnudes with high resolution and a much faster
                queue. The API is designed for developers. With API credits, you
                can build your own DenuAI service and utilize our deepnude
                technology at half the price per image.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

export default FAQs;
