import React, { useContext} from "react";
import "./navbar.css";
import logo from "../../logo/ascenda_logo.png";
import { AppContext } from "../../context";

const Navbar = () => {
  const { setCurrency} = useContext(AppContext);

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
