import { useState } from "react";
import {
  SideMenu,
  SalesAndPurchaseChart,
  OrderSummaryChart,
} from "../../components";
import Grid from "@mui/material/Grid";
import "./index.css";
import SalesIcon from "./../../assets/svg/sales.svg";
import RevenueIcon from "./../../assets/svg/revenue.svg";
import ProfitIcon from "./../../assets/svg/profit.svg";
import CostIcon from "./../../assets/svg/cost.svg";
import QuantityInHandIcon from "./../../assets/svg/quantity-in-hand.svg";
import ToBeReceivedIcon from "./../../assets/svg/to-be-received.svg";
import PurchaseIcon from "./../../assets/svg/purchase.svg";
import CancelIcon from "./../../assets/svg/cancel.svg";
import NumberOfSuppliersIcon from "./../../assets/svg/number-of-suppliers.svg";
import NumberOfCategoriesIcon from "./../../assets/svg/number-of-categories.svg";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("Weekly");
  const FilterList = ["Weekly", "Monthly", "Yearly"];
  return (
    <SideMenu>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <div className="dashboard-box">
            <p className="dashboard-box-title">Sales Overview</p>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
                <div className="dashboard-box-innner">
                  <div className="dashboard-box-icon">
                    <img src={SalesIcon} alt="alt" />
                  </div>
                  <div className="dashboard-box-footer">
                    <p className="dashboard-box-price">$ 832</p>
                    <p className="dashboard-box-footer-title">Sales</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
                <div
                  className="dashboard-box-innner"
                  id="dashboard-box-right-border-hide"
                >
                  <div className="dashboard-box-icon">
                    <img src={RevenueIcon} alt="alt" />
                  </div>
                  <div className="dashboard-box-footer">
                    <p className="dashboard-box-price">$ 18,300</p>
                    <p className="dashboard-box-footer-title">Revenue</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
                <div className="dashboard-box-innner">
                  <div className="dashboard-box-icon">
                    <img src={ProfitIcon} alt="alt" />
                  </div>
                  <div className="dashboard-box-footer">
                    <p className="dashboard-box-price">$ 868</p>
                    <p className="dashboard-box-footer-title">Profit</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
                <div
                  className="dashboard-box-innner"
                  style={{ borderRightWidth: "0px" }}
                >
                  <div className="dashboard-box-icon">
                    <img src={CostIcon} alt="alt" />
                  </div>
                  <div className="dashboard-box-footer">
                    <p className="dashboard-box-price">$ 17,432</p>
                    <p className="dashboard-box-footer-title">Cost</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="dashboard-box">
            <p className="dashboard-box-title">Purchase Overview</p>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
                <div className="dashboard-box-innner">
                  <div className="dashboard-box-icon">
                    <img src={PurchaseIcon} alt="alt" />
                  </div>
                  <div className="dashboard-box-footer">
                    <p className="dashboard-box-price">82</p>
                    <p className="dashboard-box-footer-title">Purchase</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
                <div
                  className="dashboard-box-innner"
                  id="dashboard-box-right-border-hide"
                >
                  <div className="dashboard-box-icon">
                    <img src={CostIcon} alt="alt" />
                  </div>
                  <div className="dashboard-box-footer">
                    <p className="dashboard-box-price">$ 13,573</p>
                    <p className="dashboard-box-footer-title">Cost</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
                <div className="dashboard-box-innner">
                  <div className="dashboard-box-icon">
                    <img src={CancelIcon} alt="alt" />
                  </div>
                  <div className="dashboard-box-footer">
                    <p className="dashboard-box-price">5</p>
                    <p className="dashboard-box-footer-title">Cancel</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
                <div
                  className="dashboard-box-innner"
                  style={{ borderRightWidth: "0px" }}
                >
                  <div className="dashboard-box-icon">
                    <img src={ProfitIcon} alt="alt" />
                  </div>
                  <div className="dashboard-box-footer">
                    <p className="dashboard-box-price">$17,432</p>
                    <p className="dashboard-box-footer-title">Return</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <div className="dashboard-box">
            <p className="dashboard-box-title">Inventory Summary</p>
            <div className="dashboard-box-right">
              <div>
                <img src={QuantityInHandIcon} alt="alt" />
                <p className="dashboard-box-right-counter">868</p>
                <p className="dashboard-box-right-title">Quantity in Hand</p>
              </div>
              <div>
                <img src={ToBeReceivedIcon} alt="alt" />
                <p className="dashboard-box-right-counter">200</p>
                <p className="dashboard-box-right-title">To be received</p>
              </div>
            </div>
          </div>
          <div className="dashboard-box">
            <p className="dashboard-box-title">Product Summary</p>
            <div className="dashboard-box-right">
              <div>
                <img src={NumberOfSuppliersIcon} alt="alt" />
                <p className="dashboard-box-right-counter">31</p>
                <p className="dashboard-box-right-title">Number of Suppliers</p>
              </div>
              <div>
                <img src={NumberOfCategoriesIcon} alt="alt" />
                <p className="dashboard-box-right-counter">21</p>
                <p className="dashboard-box-right-title">
                  Number of Categories
                </p>
              </div>
            </div>
          </div>
          {/* <div className="dashboard-box"> */}
          {/*   <p className="dashboard-box-title">Order Summary</p> */}
          {/*   <div style={{ marginTop: "40px" }}> */}
          {/*     <OrderSummaryChart /> */}
          {/*   </div> */}
          {/* </div> */}
        </Grid>
      </Grid>
      <BootstrapDialog
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={"sm"}
        fullWidth
      >
        <DialogContent dividers style={{ backgroundColor: "#fff" }}>
          <Typography gutterBottom>
            <p className="dashboard-box-title">Sales & Purchase</p>
            {FilterList.map((v, i) => {
              return (
                <Button
                  key={i}
                  style={{ color: v === filter ? "#1570EF" : "#5D6679" }}
                  className="dashboard-filter-list"
                  onClick={() => {
                    setFilter(v);
                    setOpen(false);
                  }}
                >
                  {v} <CheckCircleIcon />
                </Button>
              );
            })}
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </SideMenu>
  );
};
export default Dashboard;
