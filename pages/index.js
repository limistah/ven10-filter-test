import React, { useState, useEffect } from "react";
import Filters from "../components/Filters";
import FilterResult from "../components/FilterResult";

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
    setFilterResult({ data: [] });
    location.replace("#pageHead");
    setIsApplyingFilter(true);
    applyFilter(filter, (json) => {
      setFilterResult(json);
      setIsApplyingFilter(false);
    });
  };
  return (
    <div className="page">
      <h2 className="header" id="pageHead">
        Ven10 Filter MERN Test
      </h2>
      <div className="content">
        <div className="filter-container">
          <Filters onApply={handleAppyFilter} />
        </div>
        <div className="result-container" id="resultContainer">
          {isApplyingFilter && (
            <div className="applying-filter">Applying Filter...</div>
          )}
          {!isApplyingFilter && !filterResult.data.length && (
            <div className="empty-data">
              {" "}
              No Data / Empty Result <br />{" "}
              <small className="">Use a filter from the left column</small>{" "}
            </div>
          )}
          {filterResult.data && (filterResult.data.length || "") && (
            <FilterResult result={filterResult} />
          )}
        </div>
      </div>
    </div>
  );
}

export default index;
