import { BASE_URL } from "../constants/api_constant";

export async function customFetch(endpoint, options = {}) {
  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    credentials: "include",
  };

  let response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (response.status === 401) {
    if (endpoint.includes("/api/v1/auth/refresh")) {
      window.location.href = "/auth/login";
      throw new Error("Session expired. Please log in again.");
    }

    try {
      const refreshResponse = await fetch(`${BASE_URL}/api/v1/auth/refresh`, {
        method: "POST",
        credentials: "include",
      });

      if (refreshResponse.ok) {
        response = await fetch(`${BASE_URL}${endpoint}`, config);
      } else {
        window.location.href = "/auth/login";
        throw new Error("Session expired. Please log in again.");
      }
    } catch (error) {
      window.location.href = "/auth/login";
      return Promise.reject(error);
    }
  }

  return response;
}
