import React, { useState, useEffect } from "react";
import Filters from "../components/Filters";

function index() {
  return (
    <div className="page">
      <h2 className="header">Ven10 Filter MERN Test</h2>
      <div className="content">
        <Filters />
        <div className="results"></div>
      </div>
    </div>
  );
}

export default index;
