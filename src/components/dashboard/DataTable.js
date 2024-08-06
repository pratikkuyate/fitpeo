import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import Badge from "@mui/material/Badge";

const rows = [
  { name: "Jenny Wilson", orderNo: 165165, amount: 60.0, status: "Delivered", img: "/avatar-6.jpg" },
  { name: "John Doe", orderNo: 684622, amount: 90.65, status: "Canceled", img: "/avatar-8.jpg" },
  { name: "Bob Smith", orderNo: 632654, amount: 162.0, status: "Delivered", img: "/avatar-10.jpg" },
  { name: "Alice Smith", orderNo: 987320, amount: 133.7, status: "Delivered", img: "/avatar-4.jpg" },
  { name: "Eve Johnson", orderNo: 356415, amount: 216.0, status: "Pending", img: "/avatar-5.jpg" },
];

export default function DataTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        // minWidth: 650,
        backgroundColor: "#1f2029",
        color: "#f7f8fd",
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" sx={{ paddingTop: 2, paddingLeft: 3, textAlign: "left" }}>
        Recent Orders
      </Typography>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ color: "#f7f8fd", padding: 3, borderBottom: "1px solid #4a4a4a" }}>
              Customer
            </TableCell>
            <TableCell align="center" sx={{ color: "#f7f8fd", padding: 3, borderBottom: "1px solid #4a4a4a" }}>
              Order No.
            </TableCell>
            <TableCell align="center" sx={{ color: "#f7f8fd", padding: 3, borderBottom: "1px solid #4a4a4a" }}>
              Amount
            </TableCell>
            <TableCell align="center" sx={{ color: "#f7f8fd", padding: 3, borderBottom: "1px solid #4a4a4a" }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                color: "#f7f8fd",
              }}
            >
              <TableCell
                component="th"
                scope="row"
                align="left"
                sx={{ color: "#f7f8fd", padding: 3, borderBottom: "1px solid #4a4a4a" }}
              >
                <Box display="flex" alignItems="center" mb={1}>
                  <Avatar src={row.img} sx={{ mr: 2 }} />
                  <div>{row.name}</div>
                </Box>
              </TableCell>
              <TableCell align="center" sx={{ color: "#f7f8fd", padding: 3, borderBottom: "1px solid #4a4a4a" }}>
                {row.orderNo}
              </TableCell>
              <TableCell align="center" sx={{ color: "#f7f8fd", padding: 3, borderBottom: "1px solid #4a4a4a" }}>
                ${row.amount}
              </TableCell>
              <TableCell align="center" sx={{ color: "#f7f8fd", padding: 3, borderBottom: "1px solid #4a4a4a" }}>
                <Badge
                  color={row.status === "Delivered" ? "success" : row.status === "Pending" ? "warning" : "error"}
                  badgeContent={row.status}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
