const nextConfig = {
  images: {
    domains: ["github.com", "lh3.googleusercontent.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.node$/,
        loader: "file-loader",
        options: {
          publicPath: "/_next",
          name: "static/chunks/[name].[hash].[ext]",
          outputPath: "static/chunks",
        },
      });
    }

    return config;
  },
};

export default nextConfig;
