import React, { useState, useEffect } from "react";

const FilterItem = ({ onApply, filter }) => {
  return (
    <li className="filter-list-item">
      <span className="filter-list-item-year">
        {filter.start_year} - {filter.end_year}
      </span>
      <span className="filter-list-item-gender">{filter.gender}</span>
      <span className="filter-list-item-countries">
        {filter.countries.join(", ")}
      </span>
      <span className="filter-list-item-colours">
        {filter.colors.map((color) => (
          <>
            {color && (
              <span style={{ backgroundColor: color.toLowerCase() }}> </span>
            )}
          </>
        ))}
      </span>
    </li>
  );
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

export default Filters;
