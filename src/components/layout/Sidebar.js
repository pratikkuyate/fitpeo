import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Header from "./Header"; // Adjust the import path as necessary
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import TaskRoundedIcon from "@mui/icons-material/TaskRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";

const drawerWidth = 240; // Width when text is shown
const drawerWidthCollapsed = 60; // Width when only icons are shown

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Sidebar = ({ open, setOpen, showText, setShowText, isMobile }) => {
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleShowText = () => {
    setShowText(!showText);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Header onClick={handleDrawerOpen} open={open} toggleShowText={toggleShowText} />
      </AppBar>
      <MuiDrawer
        sx={{
          width: showText ? drawerWidth : drawerWidthCollapsed,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: showText ? drawerWidth : drawerWidthCollapsed,
            boxSizing: "border-box",
            zIndex: theme.zIndex.appBar - 1, // Ensure the drawer is behind the header
            transition: "width 0.3s ease !important", // Smooth transition for width change
            backgroundColor: "#1f2029", // Change background color here
          },
        }}
        variant={isMobile ? "temporary" : "persistent"}
        anchor="left"
        open={isMobile ? open : true}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* <List sx={{ overflow: "hidden" }}>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{ minHeight: 48 }}>
                <ListItemIcon sx={{ color: "#fff" }}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    color: "#fff",
                    opacity: showText ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    whiteSpace: "nowrap",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <List sx={{ overflow: "hidden" }}>
          {[
            { text: "Home", icon: <HomeRoundedIcon />, selected: true },
            { text: "Reports", icon: <AssessmentRoundedIcon />, selected: false },
            { text: "Tasks", icon: <TaskRoundedIcon />, selected: false },
            { text: "Wallet", icon: <AccountBalanceWalletRoundedIcon />, selected: false },
            { text: "Orders", icon: <LocalMallRoundedIcon />, selected: false },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ minHeight: 48 }}>
                <ListItemIcon sx={{ color: item.selected ? "#7396ff" : "#fff" }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    color: "#fff",
                    opacity: showText ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    whiteSpace: "nowrap",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </MuiDrawer>
    </Box>
  );
};

export default Sidebar;
export { DrawerHeader };
