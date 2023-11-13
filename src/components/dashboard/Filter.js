import { useState } from "react";

import classes from "./styles/Filter.module.css";

const Filter = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const handleFilterChange = (event) => {
    const newFilter = event.target.value;
    setSelectedFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <div className={classes.dashboardFilterContainer}>
      <h2>Dashboards</h2>
      <form className={classes.dashboardFilterForm}>
        <label htmlFor="dashboard items filter options">Filter items</label>
        <select
          className={classes.dashboardFilterOptionswrapper}
          name="dashboard items"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="all">All types</option>
          <option value="visualization">Visualization</option>
          <option value="map">Map</option>
          <option value="text">Text</option>
        </select>
      </form>
    </div>
  );
};

export default Filter;
