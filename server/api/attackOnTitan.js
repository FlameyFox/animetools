const rateLimitStore = {};

function rateLimiter(req, maxRequests, windowMs) {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const now = Date.now();

  if (!rateLimitStore[ip]) {
    rateLimitStore[ip] = { lastRequest: now, requestCount: 1 };
  } else {
    if (now - rateLimitStore[ip].lastRequest < windowMs) {
      rateLimitStore[ip].requestCount += 1;
      if (rateLimitStore[ip].requestCount > maxRequests) {
        return false; // Rate limit exceeded
      }
    } else {
      rateLimitStore[ip] = { lastRequest: now, requestCount: 1 }; // Reset after windowMs
    }
  }
  return true; // Within rate limit
}

import { characters } from "./aotData";

export default defineEventHandler((event) => {
  const isWithinLimit = rateLimiter(event.req, 1000, 15 * 60 * 1000); // 100 request per 15 minutes

  if (!isWithinLimit) {
    return {
      status: 429,
      body: { message: "Too many requests" },
    };
  }

  // Send characters data
  return {
    status: 200,
    body: characters,
  };
});
