import { useState } from "react";
import ReactSlider from "react-slider";

const FilterBar = ({
  majors,
  onYearFilter,
  onGpaFilter,
  onMajorFilter,
}) => {
  const [filters, setFilters] = useState({
    year: "",
    gpa: "",
    major: "",
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "gpa":
        onGpaFilter(value);
        break;
      case "major":
        onMajorFilter(value);
        break;
      case "year":
        onYearFilter(value);
        break; 
      default:
        break;
    }
  };

  return (
    <div className="row my-5">
      <div className="col">
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="year" className="filter__title">School year:</label>
        <div>
        <div>
        <input
        type="radio"
        className = "filter__slide"
        id="year"
        checked={filters.year === "Freshman"}
        onChange={handleInput("year")}
        value="Freshman"/> Freshman
        </div>
        <div>
        <input
        type="radio"
        className = "filter__slide"
        id="year"
        checked={filters.year === "Sophomore"}
        onChange={handleInput("year")}
        value="Sophomore"/> Sophomore
        </div>
        <div>
        <input
        type="radio"
        className = "filter__slide"
        id="year"
        checked={filters.year === "Junior"}
        onChange={handleInput("year")}
        value="Junior"/> Junior
        </div>
        <div>
        <input
        type="radio"
        className = "filter__boxes"
        id="year"
        checked={filters.year === "Senior"}
        onChange={handleInput("year")}
        value="Senior"/> Senior
        </div>
        <div>
        <input
        type="radio"
        className = "filter__boxes"
        id="year"
        checked={filters.year === "Graduate"}
        onChange={handleInput("year")}
        value="Graduate"/> Graduate
        </div>
        </div>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="gpa" className="filter__title">Min GPA:</label>
        <div>
            <ReactSlider 
                marks={1}
                markClassName = "example-mark"
                min="0"
                max="4"
                step={0.1}
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                id="gpa"
                onChange={(valueNow, index) => <div value = {valueNow} onChange = {handleInput("gpa")}></div>}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            />
        </div>
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="major" className="filter__title">Subject:</label>
        <div>
        <select
          className="filter__slide"
          id="major"
          onChange={handleInput("major")}
        >
          <option className = "filter__slide" value=""></option>
          {majors.map((major) => (
            <option className = "filter__slide" value={major} key={major}>
              {major}
            </option>
          ))}
        </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;