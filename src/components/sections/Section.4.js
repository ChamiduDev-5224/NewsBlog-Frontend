import React from "react";
import "../../sass/Business.Section.scss";
const Business = () => {
  return (
    <div className="main-section">
      <div className="business-news-grid">
        <div className="grid">
          <span>
            CCPI based headline inflation eased further in December 2022
          </span>
          <img
            className="grid-img"
            src={require("../../assets/images/srilankan1.jpg")}
            alt="img"
          />
        </div>
        <div className="grid">
          <span>
            Deceleration in inflation expected to continue in ensuing period:
            Central Bank
          </span>
          <img
            className="grid-img"
            src={require("../../assets/images/IMG-1571.jpg")}
            alt="img"
          />
        </div>
        <div className="grid">
          <span>
            10 Billion dollars recorded for Exports in 9 months of 2022 end the
            session.
          </span>
          <img
            className="grid-img"
            src={require("../../assets/images/Fitch.jpg")}
            alt="img"
          />
        </div>
        <div className="grid">
          <span>
            CCPI based headline inflation increased to 64.3-pct in August; food
            inflation increased to 93.7-pct
          </span>
          <img
            className="grid-img"
            src={require("../../assets/images/central-bank.jpg")}
            alt="img"
          />
        </div>
      </div>
      <div className="currency-section">
        <h3>Exchange Rate</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          voluptatem soluta excepturi deleniti velit in molestiae, laborum illo
          quos doloremque, ex culpa delectus quas. Possimus, molestiae? Nisi
          nesciunt esse tenetur.
        </p>
      </div>
    </div>
  );
};

export default Business;
