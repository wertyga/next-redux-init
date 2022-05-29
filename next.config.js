function getEnvs() {
  const env = process.env.NODE_ENV_CONFIG;
  switch (env) {
    case 'local':
      return {
        API_GATEWAY: 'http://localhost:3001',
      };
    case 'production':
      return {
        API_GATEWAY: 'http://localhost:3001',
      };
    default:
      return {
        API_GATEWAY: 'http://localhost:3001',
      };
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: getEnvs(),
};

module.exports = nextConfig;
