module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://next-movies-two.vercel.app/:path*",
      },
    ];
  },
};
