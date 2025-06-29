import React from "react";
import FAQItem from "./faq-item";

function FAQs() {
  return (
    <section id="faq" className="py-20 bg-[#050A14]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        <h2 className="text-4xl font-bold text-center mb-4 text-white">FAQs</h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          Questions about DenuAI? Here are the answers!
        </p>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <FAQItem
              title="Is DenuAI Free?"
              description="DenuAI operates on a freemium model, allowing you to experiment
                with the free version and offering 3 PRO credits to test our PRO
                features. We do not charge recurring subscriptions; instead, you
                only pay for the credits you want as a one-time payment."
            />
            <FAQItem
              title="How does DenuAI work?"
              description=" DenuAI uses AI and computer vision to automatically create nude
                images without the need for manual brushing over clothes. Our
                proprietary technology delivers superior results faster than our
                competitors."
            />
            <FAQItem
              title="Are my images stored?"
              description="No, we only process the images for the DeepNude process and
                promptly delete all data afterward, ensuring your images remain
                secure and breach-resistant. Additionally, we use anonymization
                techniques to guarantee that the images you generate cannot be
                traced back to you in any way."
            />
            <FAQItem
              title="What is the difference between free, pro and API?"
              description="The Free version offers generation with certain limitations to
                prevent abuse, such as a single queue for all free users,
                watermarks, and lower quality outputs to ensure reasonable
                generation times. The PRO version provides access to
                non-watermarked deepnudes with high resolution and a much faster queue. The API is designed for developers. With API credits, you
                can build your own DenuAI service and utilize our deepnude
                technology at half the price per image."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
