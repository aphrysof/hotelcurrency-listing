import React, { useContext, useState } from "react";
import "./card.css";
import { IoStar } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AppContext } from "../../context";
import { Competitor, CardFooter } from "..";

const Card = ({ data }) => {
  const { currencyData } = useContext(AppContext);
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <section>
      {data &&
        data.map((item, id) => (
          <div className="card__item" key={id}>
            <div className="card__details">
              <div className="item">
                <img src={item.photo} alt="hotel" />
                <div className="item__details">
                  <div className="item__rating">
                    <div className="rating">
                      <IoStar />
                      <span>
                        {" "}
                        {item.stars} ({item.rating})
                      </span>
                    </div>

                    <h2>{item.name}</h2>
                    <address>{item.address}</address>
                  </div>
                  {currencyData && currencyData ? (
                    <CardFooter
                      data={currencyData.filter(
                        (element) => element.id === item.id
                      )}
                    />
                  ) : null}
                </div>
              </div>

              <div className="item__competitors">
                {currencyData && currencyData ? (
                  <Competitor
                    data={currencyData.filter(
                      (element) => element.id === item.id
                    )}
                  />
                ) : null}
              </div>
            </div>
            <div className="hotel__description">
              <div className="description">
                <h2>Good to Know:</h2>
                <p>
                  {isReadMore
                    ? item.description
                        .replace(/<\/?[^>]+(>|$)/g, "")
                        .slice(0, 300)
                    : item.description.replace(/<\/?[^>]+(>|$)/g, "")}
                </p>

                <div>
                  <button onClick={toggleReadMore}>
                    {isReadMore ? "Read More" : "Show Less"}
                    <MdKeyboardArrowDown size={16} />
                  </button>
                </div>
                {/* <p>{item.description.replace(/<\/?[^>]+(>|$)/g, "")}</p> */}
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Card;

// replace(/<\/?[^>]+(>|$)/g, "");
