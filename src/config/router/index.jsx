import React, { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Dashboard, Orders, Profile } from "../../pages";
function ScrollToTop() {
  const { pathname } = useLocation();

  // useEffect is used to scroll to the top when the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useLayoutEffect is used to scroll to the top when the component mounts
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterNavigation;
