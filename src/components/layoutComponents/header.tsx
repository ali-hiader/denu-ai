import Image from "next/image";
import React from "react";

function Header() {
  return (
    <section className="relative min-h-[100svh] bg-gradient-to-br from-dark-deeper via-dark to-dark-deeper overflow-hidden pt-18">
      {" "}
      <div className="absolute inset-0 opacity-5">
        {" "}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(235,0,144,0.1),transparent_50%)]"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {" "}
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-8 -left-8 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>{" "}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        {" "}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 py-12 md:py-0 min-h-[calc(100svh-4rem)]">
          {" "}
          <div className="flex-1 text-center md:text-left">
            {" "}
            <div className="max-w-2xl mx-auto md:mx-0 md:pr-8">
              {" "}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 backdrop-blur-sm border border-primary/20">
                {" "}
                <span className="text-xs md:text-sm font-semibold">
                  ✨ AI-Powered Technology
                </span>{" "}
              </div>{" "}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-[1.1]">
                {" "}
                Undress images with{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
                  Denu
                </span>{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-white">
                  {" "}
                  AI
                </span>{" "}
              </h1>{" "}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                {" "}
                Experience the future of Nudes with our advanced deepnude AI
                technology.{" "}
              </p>{" "}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center sm:items-start">
                {" "}
                <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
                  {" "}
                  <a
                    seo-landings=""
                    href="https://use.n8ked.app/register"
                    className="group relative inline-block w-full sm:w-auto"
                  >
                    {" "}
                    <div className="absolute inset-0 bg-primary hover:bg-primary-dark rounded-full transition-colors"></div>{" "}
                    <div className="relative flex items-center justify-center text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                      {" "}
                      <span>Undress Now!</span>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        {" "}
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>{" "}
                      </svg>{" "}
                    </div>{" "}
                  </a>{" "}
                  <span className="text-sm text-gray-400 mt-2">
                    ✨ 3 free nudes included
                  </span>{" "}
                </div>{" "}
                <a
                  href="https://t.me/n8kedapp_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block self-center sm:self-start w-full sm:w-auto"
                >
                  {" "}
                  <div className="absolute inset-0 border border-gray-600 group-hover:border-gray-400 rounded-full transition-colors backdrop-blur-sm"></div>{" "}
                  <div className="relative flex items-center justify-center text-gray-300 group-hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      {" "}
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.29-.49.8-.75 3.12-1.36 5.2-2.26 6.24-2.7 2.98-1.25 3.6-1.47 4.01-1.47.09 0 .28.02.4.12.11.08.14.19.16.27.02.07.02.14.01.2z"></path>{" "}
                    </svg>{" "}
                    <span>Telegram Bot</span>{" "}
                  </div>{" "}
                </a>{" "}
                <a
                  href="#how-it-works"
                  className="group relative inline-block self-center sm:self-start w-full sm:w-auto"
                >
                  {" "}
                  <div className="absolute inset-0 border border-gray-600 group-hover:border-gray-400 rounded-full transition-colors backdrop-blur-sm"></div>{" "}
                  <div className="relative flex items-center justify-center text-gray-300 group-hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
                    {" "}
                    <span>Learn More</span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-y-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>{" "}
                    </svg>{" "}
                  </div>{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div className="hidden md:block mt-12">
              {" "}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                {" "}
                <div className="group relative">
                  {" "}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl backdrop-blur-sm border border-gray-700/30 transition-all duration-300 group-hover:scale-105"></div>{" "}
                  <div className="absolute -inset-1 bg-primary/5 rounded-xl blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>{" "}
                  <div className="relative p-4 text-center">
                    {" "}
                    <div className="text-2xl mb-2">👥</div>{" "}
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {" "}
                      <span className="relative">
                        {" "}
                        +450k{" "}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>{" "}
                      </span>{" "}
                    </div>{" "}
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {" "}
                      Users{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="group relative">
                  {" "}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl backdrop-blur-sm border border-gray-700/30 transition-all duration-300 group-hover:scale-105"></div>{" "}
                  <div className="absolute -inset-1 bg-primary/5 rounded-xl blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>{" "}
                  <div className="relative p-4 text-center">
                    {" "}
                    <div className="text-2xl mb-2">🖼️</div>{" "}
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {" "}
                      <span className="relative">
                        {" "}
                        +2M{" "}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>{" "}
                      </span>{" "}
                    </div>{" "}
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {" "}
                      Images{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="group relative">
                  {" "}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl backdrop-blur-sm border border-gray-700/30 transition-all duration-300 group-hover:scale-105"></div>{" "}
                  <div className="absolute -inset-1 bg-primary/5 rounded-xl blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>{" "}
                  <div className="relative p-4 text-center">
                    {" "}
                    <div className="text-2xl mb-2">⚡</div>{" "}
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {" "}
                      <span className="relative">
                        {" "}
                        99.95%{" "}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>{" "}
                      </span>{" "}
                    </div>{" "}
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {" "}
                      Uptime{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex-1 w-full max-w-[280px] sm:max-w-md mx-auto relative">
            {" "}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg blur-xl"></div>{" "}
            <div className="absolute -inset-1.5 bg-gradient-to-br from-primary/20 to-transparent rounded-lg blur-2xl animate-pulse"></div>{" "}
            <div className="relative bg-dark-deeper rounded-lg p-1 backdrop-blur-sm border border-primary/10">
              {" "}
              <div
                className="relative w-full aspect-[3/4] rounded-lg overflow-hidden group"
                role="img"
                aria-label="Before and after image comparison"
                data-astro-cid-fztqauyw=""
              >
                {" "}
                <Image
                  src="/image-2.jpg"
                  alt="Before transformation"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  data-astro-cid-fztqauyw=""
                  width={500}
                  height={1000}
                />{" "}
                <div
                  className="absolute inset-0 clip-animation"
                  data-astro-cid-fztqauyw=""
                >
                  {" "}
                  <Image
                    src="/image-2.jpg"
                    alt="After transformation"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="sync"
                    data-astro-cid-fztqauyw=""
                    width={500}
                    height={1000}
                  />{" "}
                </div>{" "}
                <div
                  className="absolute inset-0 pointer-events-none"
                  role="presentation"
                  aria-hidden="true"
                  data-astro-cid-fztqauyw=""
                >
                  {" "}
                  <div
                    className="absolute top-0 h-full w-1 scanning-line"
                    data-astro-cid-fztqauyw=""
                  >
                    {" "}
                    <div
                      className="h-full w-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-50 blur-[2px]"
                      data-astro-cid-fztqauyw=""
                    ></div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="md:hidden w-full">
            {" "}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {" "}
              <div className="group relative">
                {" "}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl backdrop-blur-sm border border-gray-700/30 transition-all duration-300 group-hover:scale-105"></div>{" "}
                <div className="absolute -inset-1 bg-primary/5 rounded-xl blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>{" "}
                <div className="relative p-4 text-center">
                  {" "}
                  <div className="text-2xl mb-2">👥</div>{" "}
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {" "}
                    <span className="relative">
                      {" "}
                      +450k{" "}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {" "}
                    Users{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <div className="group relative">
                {" "}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl backdrop-blur-sm border border-gray-700/30 transition-all duration-300 group-hover:scale-105"></div>{" "}
                <div className="absolute -inset-1 bg-primary/5 rounded-xl blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>{" "}
                <div className="relative p-4 text-center">
                  {" "}
                  <div className="text-2xl mb-2">🖼️</div>{" "}
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {" "}
                    <span className="relative">
                      {" "}
                      +2M{" "}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {" "}
                    Images{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <div className="group relative">
                {" "}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl backdrop-blur-sm border border-gray-700/30 transition-all duration-300 group-hover:scale-105"></div>{" "}
                <div className="absolute -inset-1 bg-primary/5 rounded-xl blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>{" "}
                <div className="relative p-4 text-center">
                  {" "}
                  <div className="text-2xl mb-2">⚡</div>{" "}
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {" "}
                    <span className="relative">
                      {" "}
                      99.95%{" "}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {" "}
                    Uptime{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

export default Header;
