import React, { useContext } from "react";
import { AppContext } from "../../context";
import "./competitors.css";
import { BsInfoCircle } from "react-icons/bs";
import ReactTooltip from "react-tooltip";

const Competitors = ({ data }) => {
  const { roundUp, priceDifference } = useContext(AppContext);

  return (
    <>
      {data &&
        data.map((item, id) => (
          <div className="competitor" key={id}>
            <h3>{item.competitors ? "Competitors" : null}</h3>
            {item.competitors
              ? item.competitors &&
                Object.entries(item.competitors).map(([key, value]) => {
                  return (
                    <div className="prices">
                      <p key={value}>{`${key}:${roundUp(
                        value
                      ).toLocaleString()}`}</p>
                      <span>
                        {`${value}` > item.price ? (
                          <BsInfoCircle data-tip data-for="priceInfo" />
                        ) : null}
                      </span>
                      <ReactTooltip
                        id="priceInfo"
                        place="top"
                        type="info"
                        effect="solid"   
                      >
                        Hello
                      </ReactTooltip>
                    </div>
                  );
                })
              : null}
          </div>
        ))}
    </>
  );
};

export default Competitors;
