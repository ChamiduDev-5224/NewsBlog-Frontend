import React from "react";
import { AiFillHome, AiFillYoutube, AiFillFacebook } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import { FaTiktok, FaTwitter } from "react-icons/fa";
import "../sass/Header.scss";
export const Header = () => {
  return (
    <div>
      <div className="nav-section">
        <div className="logo">
          <img src={require("../assets/images/logo.png")} alt="logo" />
        </div>
        <div className="page-link">
          <span>
            <AiFillHome size={25} />
          </span>
          <span>Local</span>
          <span>Forign</span>
          <span>Sport</span>
          <span>Business</span>
          <span>Weather</span>
        </div>
        <div className="subscribe-section">
          <button
            style={{
              marginLeft: "100%",
              borderWidth: "3px",
              borderColor: "red",
              borderRadius: "40px",
              backgroundColor: "black",
              color: "white",
              display: "flex",
              gap: "10px",
              padding: "2px 4px 2px 4px",
              cursor: "pointer",
            }}
          >
            Subscribe <BsFillBellFill />
          </button>
        </div>
        <div className="social-media">
          <span>Follow us</span>
          <ul>
            <li>
              <AiFillYoutube />
            </li>
            <li>
              <AiFillFacebook />
            </li>
            <li>
              <FaTiktok />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>
      </div>
      <div className="trending-section">
        <div className="trending-header">
          <h3>Headline</h3>
        </div>
        <marquee behavior="scroll" direction="left">
          <p>
            ඉන්දියානු ණය ක්‍රමය යටතේ මෙරටට ගෙන්වනු ලබන ඖෂධවලින් සියයට අසූවක්
            ලියා පදිංචි කර නොමැති ඇති ඒවා බවට චෝදනා එල්ල වෙයි. සෞඛ්‍ය
            වෘත්තීවේදින්ගේ විද්වත් සංගමයේ සභාපති රවි කුමුදේශ් මහතා පවසන්නේ මේ
            සම්බන්ධයෙන් ඖෂධ නියාමන අධිකාරිය වගකිව යුතු බවයි. මේ අතර රජයේ
            වෛද්‍යවරුන්ගේ සංගමය සඳහන් කරන්නේ දැනට රෝහල් තුළ ප්‍රතිකාර සඳහා
            ලබාදෙන අත්‍යවශ්‍ය ඖෂධ වර්ග 140ක ප්‍රමාණයක් තොග අවසන්වී ඇති බවයි.
          </p>
        </marquee>
      </div>
    </div>
  );
};
