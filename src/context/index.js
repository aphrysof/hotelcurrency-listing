import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    const currentCurrency = localStorage.getItem("currency");
    if (currentCurrency) {
      setCurrency(currentCurrency);
    }
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo/1/` + currency
      )
      .then((res) => {
        setCurrencyData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [currency]);

  return (
    <AppContext.Provider
      value={{
        setCurrency,
        currencyData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppProvider, AppContext };
