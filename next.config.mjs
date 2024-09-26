/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  images: {
    domains: [],
  },
};

// export default nextConfig;
export default withPlaiceholder(nextConfig);
