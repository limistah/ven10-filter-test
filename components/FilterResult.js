import React from "react";

function FilterResult({ result }) {
  return (
    <ul className="filter-result-list">
      {result.data.map((result) => {
        return (
          <li className="filter-result-list-item">
            <span>id: {result.id}</span>
            <span>_id: {result._id}</span>
            <span>First Name: {result.first_name}</span>
            <span>Last Name: {result.last_name}</span>
            <span>Email: {result.email}</span>
            <span>Gender: {result.gender}</span>
            <span>Job Title: {result.job_title}</span>
            <span>Bio: {result.bio}</span>
            <span>Country: {result.country}</span>
            <span>Car Model: {result.car_model}</span>
            <span>Car Color: {result.car_color}</span>
            <span>Car Model Year: {result.car_model_year}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default FilterResult;
