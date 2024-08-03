import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
