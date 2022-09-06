import React from "react";
import "./cardfooter.css";

const CardFooter = ({ data }) => {
  return (
    <>
      {data.map((item, id) => (
        <div className="card__cta" key={id}>
          <h2>{item.price && item.price ? item.price : "Rates Unavailable"}</h2>
          <ul>
            {item.taxes_and_fees
              ? item.taxes_and_fees &&
                Object.entries(item.taxes_and_fees).map(([key, value]) => {
                  return <li key={value}>{`${key}:${value}`}</li>;
                })
              : null}
          </ul>
        </div>
      ))}
    </>
  );
};

export default CardFooter;
