import Link from "next/link";
import React from "react";

function HomePageFooter() {
  return (
    <footer className="bg-[#050A14] py-8">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          <div className="flex flex-wrap justify-between md:justify-start gap-4 md:gap-6 border-b border-gray-800 pb-4">
            <h3 className="text-white font-medium w-full md:w-auto md:mr-6">
              Quick Links
            </h3>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <Link
                href="/terms-of-services"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="mailto:hey@DenuAI.app"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className=" pb-4">
            <h3 className="text-white font-medium mb-2">Popular Services</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              <Link
                href="/celebrity-nudes"
                className="text-gray-400 hover:text-primary text-sm"
              >
                Celebrity Nude Generator with DenuAI AI
              </Link>
              <Link
                href="/ai-girlfriend"
                className="text-gray-400 hover:text-primary text-sm"
              >
                AI Girlfriend Creator with DenuAI AI
              </Link>
              <Link
                href="/anime-ai-nude"
                className="text-gray-400 hover:text-primary text-sm"
              >
                Anime AI Nude Generator
              </Link>
              <Link
                href="/nudify-photos"
                className="text-gray-400 hover:text-primary text-sm"
              >
                Nudify Photos with DenuAI AI
              </Link>
              <Link
                href="/bikini-to-nude"
                className="text-gray-400 hover:text-primary text-sm"
              >
                Bikini to Nude AI Generator
              </Link>
            </div>
          </div>
          <div className="text-center text-sm text-gray-400">
            <p>© 2025 DenuAI. All rights reserved.</p>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="space-y-4 text-sm text-gray-500">
              <p>
                By entering this website you confirm to be 18+ to use this
                website. If you are under 18 please immediately leave this
                website.
              </p>
              <p>
                You can&apos;t use photos of other people without their prior
                written permission.
              </p>
              <p>You are solely responsible for the images you generate.</p>
              <p>
                This website is created only for entertainment purposes and is
                not anyhow aimed to insult anyone.
              </p>
              <p>
                This website does not support the creation of {"deepfake"}
                content.
              </p>
              <p>
                The website is solely for the purpose of creating artificially
                generated adult content.
              </p>
              <p>
                Deepfake content is strictly prohibited aswell as being
                impossible to generate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default HomePageFooter;
