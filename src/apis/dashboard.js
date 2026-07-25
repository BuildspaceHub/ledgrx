import { customFetch } from "./apiClient";

class DashboardService {
  static async getDashboardSummary() {
    const res = await customFetch(`/api/v1/dashboard/summary`);

    if (!res.ok) throw new Error("Error fetching user data");

    return res.json();
  }
}

export default DashboardService;
