import React from "react";
import "../../sass/SportSection.scss";
const SportSection = () => {
  return (
    <div className="main-sport">
      <div className="sport-left-section">
        <h5>
          ‘Lot of verbal talk against Australia and they’ll always come at you.
          Need to have fighting attitude’: Cheteshwar Pujara, ahead of
          Border-Gavaskar Trophy
        </h5>
        <img src={require("../../assets/images/pujara.jpg")} alt="sport-news" />
        <p>
          Ever since he made his debut against Australia at Bengaluru in 2010,
          Cheteshwar Pujara has been an integral part of Team India. Having
          built his game in the old-school way, Pujara has made the No 3 slot
          his own over the past decade. The second match of the Border-Gavaskar
          Trophy in Delhi will be the 100th Test for the 35-year-old. For a
          batsman who averages 54.08, and has lost only one of the six series he
          has played against Australia, Pujara took time out from his
          preparations in Rajkot last week to speak to the Indian Express for an
          exclusive chat. Excerpts from the interview:
        </p>
      </div>
      <div className="sport-right-section">
        <h4>Latest Updates</h4>
        <div className="sport-headline">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            quidem eaque aperiam dolore repellat adipisci dolorem, sunt
            laboriosam commodi voluptate error eos voluptatum, sed totam natus
            perferendis ea, aut quos.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            quidem eaque aperiam dolore repellat adipisci dolorem, sunt
            laboriosam commodi voluptate error eos voluptatum, sed totam natus
            perferendis ea, aut quos.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            quidem eaque aperiam dolore repellat adipisci dolorem, sunt
            laboriosam commodi voluptate error eos voluptatum, sed totam natus
            perferendis ea, aut quos.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            quidem eaque aperiam dolore repellat adipisci dolorem, sunt
            laboriosam commodi voluptate error eos voluptatum, sed totam natus
            perferendis ea, aut quos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SportSection;
