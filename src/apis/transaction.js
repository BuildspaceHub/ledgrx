import { customFetch } from "./apiClient";

const transactionBaseUrl = `/api/v1/transactions`;

class TransactionService {
  static async getRecentTransaction() {
    try {
      const response = await customFetch(transactionBaseUrl, {
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
