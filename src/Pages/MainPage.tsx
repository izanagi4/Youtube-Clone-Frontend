import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import "./MainPage.css";

export default function MainPage() {
  return (
    <div className="MainPage">
      <div className="top">
        <Navbar />
      </div>
      <div className="center">
        <Sidebar />
        <div className="videoView"></div>
      </div>
    </div>
  );
}
