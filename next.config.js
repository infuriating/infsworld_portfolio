/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WEBHOOK_URL:
      // webhook will be reset after commit, just for testing purposes
      "https://discord.com/api/webhooks/1129491585298600067/gvXbhm1UKNrFJc0P_K7gbI0T65RVmzSChmP9cFKwf46RYeHXoOtHU2bm4sQfTGzmlcez",
  },
};

module.exports = nextConfig;
