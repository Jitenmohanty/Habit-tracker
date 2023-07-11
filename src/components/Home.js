import React from "react";
import Habits from "./Habits";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Habits />
    </div>
  );
};

export default Home;
