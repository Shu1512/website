/** @type {import('next').NextConfig} */
const path = require('path')
const withTM = require('next-transpile-modules')(['three'])

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: '@import "config.scss";',
  },
  ...withTM(),
}

module.exports = nextConfig
