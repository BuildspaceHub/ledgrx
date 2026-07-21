import { BASE_URL } from "../constants/api_constant";

const transactionBaseUrl = `${BASE_URL}/api/v1/transactions`;

class TransactionService {
  static async getRecentTransaction() {
    try {
      const response = await fetch(transactionBaseUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Error fetching transactions");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default TransactionService;