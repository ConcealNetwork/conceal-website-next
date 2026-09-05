// GITHUB_PAGES=true builds the preview at https://concealnetwork.github.io/conceal-website-next/.
// The production build for conceal.network runs without it (site served from the domain root).
const basePath = process.env.GITHUB_PAGES === 'true' ? '/conceal-website-next' : '';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default config;
