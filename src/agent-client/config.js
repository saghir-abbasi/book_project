// docusaurus-book-site/src/agent-client/config.js

export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://book-project-backend.vercel.app/" // Your deployed backend URL
    : "https://book-project-backend.vercel.app/"; // Default for development
