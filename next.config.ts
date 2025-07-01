import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), "src/styles")],
    // Using @use/@forward instead of @import
    additionalData: `@use "@/styles/_index.scss" as *;`,
  },
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
