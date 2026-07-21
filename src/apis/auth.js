import { customFetch } from "./apiClient";

class AuthService {
  static async registerUser(formData) {
    const res = await customFetch(`/api/v1/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    return data;
  }

  static async loginUser(formData) {
    const res = await customFetch(`/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });

    const data = await res.json();
    return data;
  }
}

export default AuthService;
