/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "flagcdn.com"],
  },
};
