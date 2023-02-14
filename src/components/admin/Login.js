import React from "react";
import { Footer } from "../Footer";
import "../../sass/admin/Login.scss";
function LoginPage() {
  return (
    <div className="wrapper">
      <form action="" className="login-form">
        <img
          className="logo"
          src={require("../../assets/images/logo.png")}
          alt="logo"
        />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Media Id" />
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
      <div className="login-footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default LoginPage;
