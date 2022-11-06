/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    // Silence graphql-codegen "duplicate identifier" error
    // TODO: investigate codegen duplicate types
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["rickandmortyapi.com"],
  },
};
