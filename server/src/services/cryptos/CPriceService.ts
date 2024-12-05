import axios from "axios";
import { coingeckoBaseURL } from "../../config/config";

export const getCurrentCryptoPrice = async (id: string) => {
  try {
    const response = await axios.get(`${coingeckoBaseURL}/simple/price`, {
      params: {
        ids: id,
        vs_currencies: "usd",
      },
    });

    return response.data;
  } catch (error) {
    console.error(`Error fetching data for ${id}:`, error);
    throw error;
  }
};
