class AuthService {
  static async registerUser(formData) {
    const res = await fetch(
      "https://expense-tracker-api-k4rj.onrender.com/api/v1/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();
    return data;
  }
}

export default AuthService;
