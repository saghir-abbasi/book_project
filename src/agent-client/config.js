// docusaurus-book-site/src/agent-client/config.js

export const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://your-production-backend.com' // Replace with your production backend URL
  : 'http://localhost:8000'; // Default for development
