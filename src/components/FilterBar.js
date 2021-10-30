import { useState } from "react";
import ReactSlider from "react-slider";

const FilterBar = ({
  majors,
  onAllFilter,
}) => {
  const [filters, setFilters] = useState({
    year: "",
    gpa: "",
    major: "",
  });

  const handleInput = (field) => (event) => {
    let tool;
    if (field === "gpa"){
      tool = event;
    }
    else{
      tool = event.target.value
    }
    const value = tool; 

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "gpa":
        onAllFilter(filters.year, value, filters.major);
        break;
      case "major":
        onAllFilter(filters.year, filters.gpa, value);
        break;
      case "year":
        onAllFilter(value, filters.gpa, filters.major);
        break; 
      default:
        break;
    }
  };

  return (
    <div className="filter__container">
      <div className="">
        <h1>School year:</h1>
        <label htmlFor="year"></label>
        <div className ="school-filter">
        <div>
        <input type="radio" className = "filter__boxes"  id="year" checked={filters.year === "Freshman"}
        onChange={handleInput("year")}
        value="Freshman"/> Freshman
        </div>
        <div>
        <input
        type="radio"
        className = "filter__boxes"
        id="year"
        checked={filters.year === "Sophomore"}
        onChange={handleInput("year")}
        value="Sophomore"/> Sophomore
        </div>
        <div>
        <input
        type="radio"
        className = "filter__boxes"
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


      <div className="">
        <h1>Min GPA:</h1>
        <label htmlFor="gpa"></label>
        <div>
            <ReactSlider 
                // marks={1}
                markClassName = "example-mark"
                min={0}
                max={4}
                step={0.1}
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                id="gpa"
                onChange={handleInput("gpa")}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            />
        </div>
      </div>

      <div className="">
        <h1>Subject:</h1>
        <label htmlFor="major"></label>
        <div className = "select-wrapper" >
        <div className = "select-dropdown-subject">
        <select
          className=" "
          id="major"
          onChange={handleInput("major")}
        >
          {/* <option value="select">Select</option> */}
          <option className = "" value="">CS, Math, Biology...</option>
          {majors.map((major) => (
            <option className = "" value={major} key={major}>
              {major}
            </option>
          ))}
        </select>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;