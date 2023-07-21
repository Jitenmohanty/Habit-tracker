import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import WeekView from "./WeekView";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} exact to="/"/>
        <Route path="/week-view" element={<WeekView />} />
      </Routes>
    </div>
  );
};

export default App;
