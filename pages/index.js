import React, { useState, useEffect } from "react";
import Filters from "../components/Filters";

function index() {
  const [isApplyingFilter, setIsApplyingFilter] = useState(false);
  const [filterResult, setFilterResult] = useState({ data: [] });

  const handleAppyFilter = (filter) => {
    console.log(filter);
    setIsApplyingFilter(true);
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
