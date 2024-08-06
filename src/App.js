import { useState } from "react";
import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./components/dashboard";
import { useTheme, useMediaQuery, Box } from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);
  const [showText, setShowText] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      className={`App ${showText ? "sidebar-open" : "sidebar-closed"}`}
      // sx={{
      //   display: "flex",
      //   flexDirection: isMobile ? "column" : "row",
      // }}
    >
      <Sidebar open={open} setOpen={setOpen} showText={showText} setShowText={setShowText} isMobile={isMobile} />
      <div
        className="content"
        sx={{
          flexGrow: 1,
          padding: theme.spacing(2),
          marginLeft: isMobile ? 0 : open ? theme.spacing(30) : theme.spacing(7),
          transition: theme.transitions.create(["margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Dashboard />
      </div>
    </Box>
  );
}

export default App;
