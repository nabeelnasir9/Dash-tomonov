import React, { useState } from "react";
import { SideMenu } from "../../components";
import axios from "axios";
import "./index.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import FilterListIcon from "@mui/icons-material/FilterList";
const columns = [
  { id: "Products", label: "Products", minWidth: 150 },
  { id: "OrderValue", label: "Order Value", minWidth: 120 },
  {
    id: "Quantity",
    label: "Quantity",
    minWidth: 150,
  },
  {
    id: "OrderID",
    label: "Order ID",
    minWidth: 100,
  },
  {
    id: "ExpectedDelivery",
    label: "Expected Delivery",
    minWidth: 150,
  },
  {
    id: "Status",
    label: "Status",
    minWidth: 150,
  },
];
const OrdersList = [
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Delayed",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Confirmed",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Returned",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Out for delivery",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Delayed",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Confirmed",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Returned",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Out for delivery",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Delayed",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Confirmed",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Returned",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Out for delivery",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Delayed",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Confirmed",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Returned",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Out for delivery",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Delayed",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Confirmed",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Returned",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Out for delivery",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Delayed",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Confirmed",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Returned",
  },
  {
    products: "Paint Image",
    orderValue: "$4306",
    quantity: 43,
    orderID: 7535,
    expectedDelivery: "11/12/24",
    status: "Out for delivery",
  },
];
const Orders = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [Orders, setOrders] = useState([]);
  React.useEffect(() => {
    allOrders();
  }, []);

  const allOrders = async () => {
    const url = `${import.meta.env.VITE_SERVER_URL}/api/admin/all-orders`;
    const response = await axios.get(url);
    console.log(response.data);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <SideMenu>
      <div className="orders-box">
        <p>Overall Inventory</p>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
            <div className="orders-box-inner" style={{ paddingLeft: "0px" }}>
              <p className="orders-box-title" style={{ color: "#1570EF" }}>
                Categories
              </p>
              <p className="orders-box-value">14</p>
              <p className="orders-box-inner-title">Last 7 days</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3.3} lg={3.3} xl={3.3}>
            <div className="orders-box-inner" id="orders-box-inner-2">
              <p className="orders-box-title" style={{ color: "#E19133" }}>
                Total Products
              </p>
              <div className="orders-box-sec">
                <div>
                  <p className="orders-box-value">868</p>
                  <p className="orders-box-inner-title">Last 7 days</p>
                </div>
                <div>
                  <p className="orders-box-value">$25000</p>
                  <p className="orders-box-inner-title">Revenue</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3.3} lg={3.3} xl={3.3}>
            <div className="orders-box-inner" id="orders-box-inner-3">
              <p className="orders-box-title" style={{ color: "#845EBC" }}>
                Top Selling
              </p>
              <div className="orders-box-sec">
                <div>
                  <p className="orders-box-value">5</p>
                  <p className="orders-box-inner-title">Last 7 days</p>
                </div>
                <div>
                  <p className="orders-box-value">$2500</p>
                  <p className="orders-box-inner-title">Cost</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3.3} lg={3.3} xl={3.3}>
            <div
              className="orders-box-inner"
              style={{ borderRightWidth: "0px" }}
            >
              <p className="orders-box-title" style={{ color: "#F36960" }}>
                Low Stocks
              </p>
              <div className="orders-box-sec">
                <div>
                  <p className="orders-box-value">12</p>
                  <p className="orders-box-inner-title">Ordered</p>
                </div>
                <div>
                  <p className="orders-box-value">2</p>
                  <p className="orders-box-inner-title">Not in stock</p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="order-table-main">
        <div className="order-table-header">
          <p>Orders</p>
          <div>
            <Button variant="text" className="order-table-filter-btn">
              <FilterListIcon style={{ marginRight: "10px" }} />
              Filters
            </Button>
            <Button variant="text" className="order-table-history-btn">
              Order History
            </Button>
          </div>
        </div>
        <Paper sx={{ width: "100%" }} style={{ backgroundColor: "#fff" }}>
          <TableContainer sx={{ maxHeight: "55vh" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        backgroundColor: "#fff",
                      }}
                    >
                      <p className="order-table-header-title">{column.label}</p>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody style={{ backgroundColor: "#fff" }}>
                {OrdersList.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage,
                ).map((row, i) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      <TableCell>
                        <p className="order-table-text">{row.products}</p>
                      </TableCell>
                      <TableCell>
                        <p className="order-table-text">{row.orderValue}</p>
                      </TableCell>
                      <TableCell>
                        <p className="order-table-text">
                          {row.quantity} Packets
                        </p>
                      </TableCell>
                      <TableCell>
                        <p className="order-table-text">{row.orderID}</p>
                      </TableCell>
                      <TableCell>
                        <p className="order-table-text">
                          {row.expectedDelivery}
                        </p>
                      </TableCell>
                      <TableCell>
                        <p
                          className="order-table-text"
                          style={{
                            color:
                              row.status === "Delayed"
                                ? "#F79009"
                                : row.status === "Confirmed"
                                  ? "#1570EF"
                                  : row.status === "Returned"
                                    ? "#667085"
                                    : "#12B76A",
                          }}
                        >
                          {row.status}
                        </p>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={OrdersList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            style={{
              backgroundColor: "#fff",
              color: "#6B7280",
              fontFamily: "Inter",
            }}
          />
        </Paper>
      </div>
    </SideMenu>
  );
};
export default Orders;
