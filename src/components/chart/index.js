import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Card, Typography } from "@mui/material";

const uData = [
  4000, 3000, 2000, 2780, 1890, 2390, 3490, 4000, 3000, 2000, 2780, 1890, 2390, 3490, 4000, 3000, 2000, 2780, 1890,
  2390, 3490, 4000, 3000, 2000, 3490,
];

const xLabels = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
];

export default function SimpleBarChart() {
  return (
    <Card
      sx={{
        minWidth: 220,
        backgroundColor: "#1f2029",
        color: "#f7f8fd",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h5" sx={{ paddingTop: 2, paddingLeft: 3, textAlign: "left" }}>
        Activity
      </Typography>
      <BarChart
        height={300}
        series={[{ data: uData, label: "Users", id: "uvId" }]}
        xAxis={[{ data: xLabels, scaleType: "band" }]}
        colors={["#7295ff"]}
        borderRadius={50}
      />
    </Card>
  );
}
