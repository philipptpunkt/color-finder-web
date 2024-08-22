"use strict"

const nrExternals = require("@newrelic/next/load-externals")

module.exports = {
  output: "standalone",
  experimental: {
    serverComponentsExternalPackages: ["newrelic"],
  },
  webpack: (config) => {
    nrExternals(config)
    return config
  },
}
