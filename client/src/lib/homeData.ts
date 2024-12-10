import { transformStockData } from "./utils";
import { StockData } from "@/interfaces";

export const fetchHomepageStockData = async (
  ticker: string
): Promise<StockData[]> => {
  try {
    const response = await fetch(`/routes/stocks/home/${ticker}`);

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();

    return transformStockData(data);
  } catch (error) {
    console.error(
      "There has been a problem with your fetch operation: ",
      error
    );
    return [];
  }
};
