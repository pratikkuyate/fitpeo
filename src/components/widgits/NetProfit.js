import React from "react";
import { Typography, Box, CardContent, Card } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CircularWithValueLabel from "./CircleProgress";

function NetProfit() {
  const isPositive = true;
  return (
    <Card
      sx={{
        minWidth: { xs: 180, sm: 220 },
        backgroundColor: "#1f2029",
        color: "#f7f8fd",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
      }}
    >
      <CardContent>
        <Typography component="div" sx={{ color: "#f7f8fd", textAlign: "left", marginTop: 1 }}>
          {"Net Profit"}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 1.2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Typography variant="h3" sx={{ color: "#f7f8fd", fontWeight: "bold" }}>
              ${6759.25}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: isPositive ? "#149d78" : "#ac4c51",
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              {isPositive ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
              {5}%
            </Typography>
          </Box>
          <CircularWithValueLabel />
        </Box>
      </CardContent>
    </Card>
  );
}

export default NetProfit;
