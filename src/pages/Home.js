import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-screen">
      <img src={logo} alt="logo" />
      <h1>Are you an NBA fan? Find a drink that's just for you!</h1>
      <Link to="/questions/1">
        <button className="btn btn-primary">Take the test!</button>
      </Link>
    </div>
  );
};

export default Home;
