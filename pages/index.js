import React, { useState, useEffect } from "react";

const FilterItem = ({ onApply, filter }) => {
  return;
};

const Filters = ({ onApply }) => {
  const [filters, setFilters] = useState({ data: [] });

  useEffect(() => {
    fetch("/api/filters").then(async (res) => {
      if (res.ok) {
        setFilters(await res.json());
      } else {
        alert("An error occurred while loading filters");
      }
    });
  }, [filters.length || false]);

  return (
    <ul className="filters">
      {filters &&
        filters.data &&
        (filters.data.length || null) &&
        filters.data.map((filter) => (
          <FilterItem key={filter._id} onApply={onApply} filter={filter} />
        ))}
    </ul>
  );
};

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
