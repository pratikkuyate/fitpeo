import React from "react";
import DataTable from "./DataTable";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Widgits from "../widgits";
import RedeemIcon from "@mui/icons-material/Redeem";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import NoEncryptionIcon from "@mui/icons-material/NoEncryption";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import NetProfit from "../widgits/NetProfit";
import MenuWidgit from "../widgits/MenuWidgit";
import CustomerFeedbackList from "../widgits/CustomerFeedback";
import SimpleBarChart from "../chart";

const widgitsData = [
  {
    title: "Total Order",
    value: 75,
    isPositive: true,
    percent: 5,
    iconComponent: RedeemIcon,
    iconColor: "#3d64f9",
    backgroundColor: "#2c3368",
  },
  {
    title: "Total Delivered",
    value: 124,
    isPositive: false,
    percent: 7,
    iconComponent: LocalMallIcon,
    iconColor: "#00c888",
    backgroundColor: "#145347",
  },
  {
    title: "Total Cancled",
    value: 20,
    isPositive: false,
    percent: 2,
    iconComponent: NoEncryptionIcon,
    iconColor: "#f45c5c",
    backgroundColor: "#603437",
  },
  {
    title: "Total Revenue",
    value: 54,
    isPositive: true,
    percent: 5,
    iconComponent: AttachMoneyIcon,
    iconColor: "#e742a7",
    backgroundColor: "#5b2a4b",
  },
];

function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid container item spacing={2} xs={12} md={8}>
          {widgitsData.map((data, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Widgits
                title={data.title}
                value={data.value}
                percent={data.percent}
                isPositive={data.isPositive}
                IconComponent={data.iconComponent}
                iconColor={data.iconColor}
                backgroundColor={data.backgroundColor}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container item spacing={2} xs={12} md={4}>
          <Grid item xs={12}>
            <NetProfit />
          </Grid>
        </Grid>
        <Grid container item spacing={2} xs={12} md={8}>
          <Grid item xs={12}>
            <SimpleBarChart />
          </Grid>
        </Grid>
        <Grid container item spacing={2} xs={12} md={4}>
          <Grid item xs={12}>
            <MenuWidgit />
          </Grid>
        </Grid>
        <Grid container item spacing={2} xs={12} md={8}>
          <Grid item xs={12}>
            <DataTable />
          </Grid>
        </Grid>
        <Grid container item spacing={2} xs={12} md={4}>
          <Grid item xs={12}>
            <CustomerFeedbackList />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
