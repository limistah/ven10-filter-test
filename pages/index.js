import React, { useState, useEffect } from "react";
import Filters from "../components/Filters";

function index() {
  const [isApplyingFilter, setIsApplyingFilter] = useState(false);
  const [filterResult, setFilterResult] = useState({ data: [] });

  const applyFilter = (filter, doneCB = () => {}) => {
    fetch("/api/car-owners/filter", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filter),
    }).then(async (res) => {
      let json = {};
      if (res.ok) {
        json = await res.json();
      }
      doneCB(json);
    });
  };

  const handleAppyFilter = (filter) => {
    console.log(filter);
    setIsApplyingFilter(true);
    applyFilter(filter, (json) => {
      console.log(json);
    });
  };
  return (
    <div className="page">
      <h2 className="header">Ven10 Filter MERN Test</h2>
      <div className="content">
        <div className="filter-container">
          <Filters onApply={handleAppyFilter} />
        </div>
        <div className="result-container">
          {isApplyingFilter && (
            <div className="applying-filter">Applying Filter...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default index;
