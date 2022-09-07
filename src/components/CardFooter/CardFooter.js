import React, { useContext } from "react";
import { AppContext } from "../../context";
import "./cardfooter.css";

const CardFooter = ({ data }) => {
  const { roundUp } = useContext(AppContext);

  return (
    <>
      {data.length > 0 ? (
        data.map((item, id) => (
          <div className="card__cta" key={id}>
            <h2>{roundUp(item.price).toLocaleString()}</h2>
            <ul>
              {item.taxes_and_fees
                ? item.taxes_and_fees &&
                  Object.entries(item.taxes_and_fees).map(([key, value]) => {
                    return (
                      <li key={value}>{`${
                        key.charAt(0).toUpperCase() + key.slice(1)
                      }:${value}`}</li>
                    );
                  })
                : null}
            </ul>
          </div>
        ))
      ) : (
        <h2>Rates Unavailable</h2>
      )}
    </>
  );
};

export default CardFooter;
