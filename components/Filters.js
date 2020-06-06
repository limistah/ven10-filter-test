import React, { useState, useEffect } from "react";

const FilterItem = ({ onApply, filter, onSetActive, isActive }) => {
  return (
    <li
      className={`filter-list-item ${isActive ? "active" : ""}`.trim()}
      onClick={() => {
        onSetActive(filter._id);
        onApply(filter);
      }}
    >
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
  const [activeId, setActiveId] = useState(10000);

  const handleSetActive = (id) => setActiveId(id);

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
        filters.data.map((filter, index) => (
          <FilterItem
            isActive={filter._id === activeId}
            key={filter._id}
            onApply={onApply}
            onSetActive={handleSetActive}
            filter={filter}
          />
        ))}
    </ul>
  );
};

export default Filters;
