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
    } else if (currentCurrency === null) {
      setCurrency(currency);
    }
  }, [currency]);

  useEffect(() => {
    axios
      .get(
        "http://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo/1/" + currency
      )
      .then((res) => {
        setCurrencyData(res.data);
      })
      .catch((err) => console.log(err));
  }, [currency]);

  const roundUp = (num) => {
    if (currency === "USD" || currency === "SGD" || currency === "CNY") {
      return Math.round(num);
    } else if (currency === "KRW") {
      return Math.round(num / 100) * 100;
    }
  };

  const priceDifference = (num, Ourprice) => {
    if (num > Ourprice) {
      //get difference
      const difference = num - Ourprice;
      num = (difference / num) * 100;
      return `Save ${Math.round(num * 10) / 10}% with us`;
    }
  };
  return (
    <AppContext.Provider
      value={{
        setCurrency,
        currencyData,
        roundUp,
        priceDifference,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppProvider, AppContext };
