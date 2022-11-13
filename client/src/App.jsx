import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Week from "./Week";

const App = () => {
  const [currentView, setCurrentView] = useState("menu"); //view is either menu or week?
console.log("current view", currentView);
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="card-container">
        {currentView === "menu" ? (
          <Menu handleBackClick={()=>{setCurrentView("week")}} />
        ) : (
          <Week handleBackClick={()=>{setCurrentView("menu")}} />
        )}
      </div>
    </div>
  );
};

export default App;
