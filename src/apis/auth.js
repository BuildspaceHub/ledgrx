const BASE_URL = "https://expense-tracker-api-k4rj.onrender.com";

class AuthService {
  static async registerUser(formData) {
    const res = await fetch(`${BASE_URL}/api/v1/auth/register`, {
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
    const res = await fetch(`${BASE_URL}/api/v1/auth/login`, {
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
