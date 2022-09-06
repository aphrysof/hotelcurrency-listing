import React from "react";
import "./competitors.css";

const Competitors = ({ data }) => {
  return (
    <>
      {data &&
        data.map((item, id) => (
          <>
            <div className="competitor" key={id}>
              <ul>
                {item.competitors
                  ? item.competitors &&
                    Object.entries(item.competitors).map(([key, value]) => {
                      return <li key={value}>{`${key}:${value}`}</li>;
                    })
                  : null}
              </ul>
            </div>
            <button>Book Hotel</button>
          </>
        ))}
    </>
  );
};

export default Competitors;
