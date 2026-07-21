import { customFetch } from "./apiClient";

class UserService {
  static async getUserData() {
    const res = await customFetch(`/api/v1/me`);

    if (!res.ok) throw new Error("Error fetching user data");

    return res.json();
  }
}

export default UserService;
