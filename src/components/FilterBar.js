import { useState } from "react";

const FilterBar = ({
  majors,
  onNameFilter,
  onMajorFilter,
  onYearFilter,
  onDateFilter,
}) => {
  const [filters, setFilters] = useState({
    name: "",
    major: "",
    year: "",
    from: "",
    to: "",
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "name":
        onNameFilter(value);
        break;
      case "major":
        onMajorFilter(value);
        break;
      case "year":
        onYearFilter(value);
        break; 
      case "from":
        onDateFilter(value, "from");
        break;
      case "to":
        break;
      default:
        break;
    }
  };

  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="name">Title</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={filters.name}
          onChange={handleInput("name")}
        />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="year">School year:</label>
        <select
          className="form-control"
          id="year"
          onChange={handleInput("year")}
        >
          <option value="">Select</option>
          <option value="third-year">Third year</option>
          <option value="fourth year">Fourth </option>
        </select>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="major">Major</label>
        <select
          className="form-control"
          id="major"
          onChange={handleInput("major")}
        >
          <option value="">Select</option>
          {majors.map((major) => (
            <option value={major} key={major}>
              {major}
            </option>
          ))}
        </select>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="startDate">From</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          onChange={handleInput("from")}
        />
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="endDate">To</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          onChange={handleInput("to")}
        />
      </div>
    </div>
  );
};

export default FilterBar;
