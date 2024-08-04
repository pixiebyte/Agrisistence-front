import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Footer from "./components/Footer"; // Adjust the path as needed
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
      <Footer />
    </div>
  );
};

export default App;
