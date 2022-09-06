import React, { useContext, useEffect } from "react";
import "./navbar.css";
import logo from "../../logo/ascenda_logo.png";
import { AppContext } from "../../context";

const Navbar = () => {
  const { setCurrency, currency } = useContext(AppContext);

  useEffect(() => {
    const savedItem = localStorage.getItem("currency");
    if (savedItem) {
      setCurrency(savedItem);
    } else if (savedItem === null) {
      setCurrency(currency);
    }
  }, [setCurrency, currency]);
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <select
        onChange={(e) => {
          setCurrency(e.target.value);
          localStorage.setItem("currency", e.target.value);
        }}
      >
        <option value="USD">USD</option>
        <option value="SGD">SGD</option>
        <option value="CNY">CNY</option>
        <option value="KRW">KRW</option>
      </select>
    </nav>
  );
};

export default Navbar;
