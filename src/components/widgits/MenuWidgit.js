import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

const menuData = [
  {
    title: "Goals",
    iconComponent: TrackChangesIcon,
    iconColor: "#d46b4a",
    backgroundColor: "#5e3238",
  },
  {
    title: "Popular Dishes",
    iconComponent: LunchDiningIcon,
    iconColor: "#7b84d4",
    backgroundColor: "#293268",
  },
  {
    title: "Menus",
    iconComponent: RestaurantMenuIcon,
    iconColor: "#2d93c0",
    backgroundColor: "#1f4b5e",
  },
  {
    title: "Orders",
    iconComponent: TrackChangesIcon,
    iconColor: "#d46b4a",
    backgroundColor: "#5e3238",
  },
];

function MenuWidget() {
  return (
    <Card
      sx={{
        minWidth: { xs: '100%', sm: 220 },
        backgroundColor: "#1f2029",
        color: "#f7f8fd",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
      }}
    >
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {menuData.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={3} sm={2}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: item.backgroundColor,
                        borderRadius: "50%",
                        width: { xs: 40, sm: 50 },
                        height: { xs: 40, sm: 50 },
                        margin: "0 auto",
                      }}
                    >
                      <item.iconComponent sx={{ color: item.iconColor, fontSize: { xs: '1.5rem', sm: '2rem' } }} />
                    </Box>
                  </Grid>
                  <Grid item xs={7} sm={8}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#f7f8fd",
                        fontWeight: "bold",
                        fontSize: { xs: '1rem', sm: '1.25rem' },
                        textAlign: { xs: "left", sm: "left" }
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#494949",
                        borderRadius: "50%",
                        width: { xs: 30, sm: 35 },
                        height: { xs: 30, sm: 35 },
                        margin: "0 auto",
                      }}
                    >
                      <ArrowForwardIosIcon sx={{ color: "#f7f8fd", fontSize: { xs: '0.8rem', sm: '1rem' } }} />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MenuWidget;