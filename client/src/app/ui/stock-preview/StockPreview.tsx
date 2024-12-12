"use client";

import "./stockpreview.css";
// import { fetchHomepageStockData } from "@/lib/homeData";
import { StockData } from "@/interfaces";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
// import { useState, useEffect } from "react";
// import StockGraph from "../../images/images.jpeg";

const chartConfig = {
  price: {
    label: "Price",
    color: "hsl(var(--chart1))",
  },
} satisfies ChartConfig;

const StockPreview = ({ ticker }: { ticker: string }) => {
  console.log(ticker);

  // const [chartData, setChartData] = useState<{ date: string; price: number }[]>(
  //   []
  // );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchHomepageStockData(ticker);

  //     if (data) {
  //       const mappedData = data
  //         .map((dataPoint: StockData) => ({
  //           date: dataPoint.date,
  //           price: dataPoint.close,
  //         }))
  //         .reverse()
  //         .slice(-30);
  //       console.log(mappedData);
  //       setChartData(mappedData);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const testData = [
    { date: "2024-11-11", price: 224.23 },
    { date: "2024-11-12", price: 224.23 },
    { date: "2024-11-13", price: 225.12 },
    { date: "2024-11-14", price: 228.22 },
    { date: "2024-11-15", price: 225.0 },
    { date: "2024-11-16", price: 228.02 },
    { date: "2024-11-17", price: 228.28 },
    { date: "2024-11-18", price: 229.0 },
    { date: "2024-11-19", price: 228.52 },
    { date: "2024-11-20", price: 229.87 },
    { date: "2024-11-21", price: 232.87 },
    { date: "2024-11-22", price: 235.06 },
    { date: "2024-11-23", price: 234.93 },
    { date: "2024-11-24", price: 237.33 },
    { date: "2024-11-25", price: 239.59 },
    { date: "2024-11-26", price: 242.65 },
    { date: "2024-11-27", price: 243.01 },
    { date: "2024-11-28", price: 243.04 },
    { date: "2024-11-29", price: 242.84 },
    { date: "2024-11-30", price: 246.75 },
    { date: "2024-12-01", price: 247.77 },
    { date: "2024-12-02", price: 249.91 },
  ];

  const stockName = "Dow Jones Industrial Accositoion!";
  const maxLength = 22;

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="stock-preview-container">
      <div className="stock-name">
        <h1>Dow Jones</h1>
        <h2>{truncateText(stockName, maxLength)}</h2>
      </div>
      <div className="stock-preview-graph">
        <Card className="w-4/5 border-slate-800" id="chart1-card">
          <CardContent className="h-32">
            <ChartContainer config={chartConfig} className="w-full h-32">
              <AreaChart
                accessibilityLayer
                data={testData}
                margin={{
                  top: 10,
                  left: 15,
                  right: 15,
                  bottom: 10,
                }}
              >
                <CartesianGrid vertical={false} stroke="333" />
                <XAxis
                  dataKey="date"
                  tickLine={true}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(date) =>
                    new Date(date + "T24:00:00Z").toLocaleString("en-US", {
                      month: "numeric",
                      day: "numeric",
                    })
                  }
                  interval={6}
                />
                <YAxis hide domain={["auto", "auto"]} />
                <defs>
                  <linearGradient id="fillChart" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="lightgreen"
                      stopOpacity={0.7}
                    />
                    <stop
                      offset="95%"
                      stopColor="lightgreen"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="price"
                  type="linear"
                  fill="url(#fillChart)"
                  fillOpacity={0.4}
                  stroke="lightgreen"
                  strokeWidth={1.5}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className="stock-preview-prices">
        <h1>44,401.93</h1>
        <div className="change-holder">
          <h2>-240.59</h2>
        </div>
      </div>
    </div>
  );
};

export default StockPreview;
