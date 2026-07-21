import { BASE_URL } from "../constants/api_constant";

class UserService {
  static async getUserData() {
    const res = await fetch(`${BASE_URL}/api/v1/me`, {
      credentials: "include",
    });

    if (!res.ok) throw new Error("Error fetching user data");
    
    return res.json();
  }
}

export default UserService;
