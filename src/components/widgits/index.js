import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Widgits({ title, value, percent, isPositive, IconComponent, iconColor, backgroundColor }) {
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
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: backgroundColor,
            borderRadius: "10%",
            width: { xs: 40, sm: 50 },
            height: { xs: 40, sm: 50 },
          }}
        >
          <IconComponent sx={{ color: iconColor, fontSize: { xs: 20, sm: 24 } }} />
        </Box>
        <Typography component="div" sx={{ color: "#f7f8fd", textAlign: { xs: "center", sm: "left" }, marginTop: 1 }}>
          {title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#f7f8fd", fontWeight: "bold", textAlign: { xs: "center", sm: "left" } }}
          >
            {value}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: isPositive ? "#149d78" : "#ac4c51",
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-end" },
              marginLeft: 1,
              fontWeight: "bold",
              marginTop: { xs: 1, sm: 0 },
            }}
          >
            {isPositive ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
            {percent}%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Widgits;
