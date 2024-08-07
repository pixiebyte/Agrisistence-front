import React from "react";
import Header from "./Dashboard/Header";
import Sidebar from "./Dashboard/Sidebar";
import Home from "./Dashboard/Home";
import Footer from "./Dashboard/Footer"; // Adjust the path as needed
import "../Styles/components/Dashboard.css";

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

