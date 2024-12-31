// services/api.js
import redis from "./redis";

export const getCachedData = async (key, fetchFunction) => {
  try {
    const cachedData = await redis.get(key);

    if (cachedData) {
      console.log(`Cache hit for key: ${key}`);
      return JSON.parse(cachedData);
    }

    console.log(`Cache miss for key: ${key}`);
    const data = await fetchFunction();

    await redis.set(key, JSON.stringify(data), "EX", 3600); // Cache for 1 hour
    return data;
  } catch (error) {
    console.error("Error with Redis caching:", error);
    return fetchFunction();
  }
};
