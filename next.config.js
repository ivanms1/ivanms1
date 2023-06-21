/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");

module.exports = nextTranslate({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
