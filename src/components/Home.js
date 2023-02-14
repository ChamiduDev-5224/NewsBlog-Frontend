import React from "react";
import "../sass/Home.scss";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SectionTwo } from "./sections/Section-2";
import SportSection from "./sections/Section-3";
import Business from "./sections/Section.4";
export const Home = () => {
  return (
    <div>
      {/* include header */}
      <div className="header-section">
        <Header />
      </div>
      {/*End include header */}
      <div className="main-body">
        <div className="section-1">
          <div className="top-news-section">
            <h3 className="top-news-header">Top News</h3>
            <h2>
              Survivors count on blessings as they recall Türkiye earthquake
            </h2>
            <img
              src={require("../assets/images/topNews.jpg")}
              alt="top-news"
              className="top-news-img"
            />
            <h6>updated {new Date().toLocaleTimeString()}</h6>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              voluptas blanditiis nulla nam deserunt quisquam sunt pariatur,
              omnis, quod dicta voluptates architecto. Minima officiis velit rem
              quaerat aspernatur nostrum eaque! <label>Read More..</label>
            </h4>
          </div>
          <div className="sub-news-section">
            <div>
              <h3
                style={{
                  backgroundColor: "red",
                  width: "fit-content",
                  padding: "2px",
                }}
              >
                Local News
              </h3>
              <h2>Istanbul sees 9% rise in air pollution in 2022</h2>
              <img src={require("../assets/images/sub1.jpg")} alt="sub1" />
              <h4>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam facere excepturi rem perspiciatis illo consequatur
                culpa provident deleniti molestias accusamus sed, doloremque
                praesentium labore ullam minima repellendus, eligendi sequi cum?
              </h4>
            </div>
            <div>
              <h2>
                Istanbul's Aydos Castle set to reopen after 12-year restoration
              </h2>
              <img src={require("../assets/images/sub2.jpg")} alt="sub2" />
              <h4>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus, eaque officia libero reiciendis laboriosam esse
                recusandae asperiores magni quae quas, nihil praesentium
                molestias quis placeat nobis. Vitae excepturi quod libero?
              </h4>
            </div>
          </div>
        </div>
        <div className="section-2">
          <h2 className="category-name">World News</h2>
          <SectionTwo />
        </div>
        <div className="sport-section">
          <h2 className="sport-category-name">Sport News</h2>
          <SportSection />
        </div>
        <div className="business-section">
          <h2 className="business-category-name">Business World</h2>
          <Business />
        </div>
        <div className="weather-chart">
          <table>
            <thead>
              <tr>
                <th>
                  <span>Sunday</span>
                  <img
                    src={require("../assets/icons/sun.png")}
                    alt="weather"
                    width={24}
                    height={24}
                  />
                </th>
                <th>
                  <span>Monday</span>
                  <img
                    src={require("../assets/icons/cloudy.png")}
                    alt="weather"
                    width={24}
                    height={24}
                  />
                </th>
                <th>
                  <span>Thursday</span>
                  <img
                    src={require("../assets/icons/thunder.png")}
                    alt="weather"
                    width={24}
                    height={24}
                  />
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
