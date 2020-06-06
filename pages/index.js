import React, { useState, useEffect } from "react";
import Filters from "../components/Filters";

function index() {
  return (
    <div className="page">
      <h2 className="header">Ven10 Filter MERN Test</h2>
      <div className="content">
        <div className="filter-container">
          <Filters />
        </div>
        <div className="result-container"></div>
      </div>
    </div>
  );
}

export default index;
