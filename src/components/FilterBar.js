import { useState } from "react";
import ReactSlider from "react-slider";
import DatePicker from 'react-date-picker';

const FilterBar = ({
  majors,
  semesters,
  onAllFilter,
}) => {
  const [filters, setFilters] = useState({
    year: "",
    gpa: 4,
    major: "",
    isOnline: false,
    semester: "",
    duration: "",
    toDate: "",
    fromDate: "",
  });

  const handleInput = (field) => (event) => {
    let tool;
    if (field === "gpa") {
      tool = event;
    }
    else if (field === "year") {
      tool = event.target.value
      if (tool === filters.year) {
        tool = ""
      }
    }
    else if (field === "semester" || field === "major") {
      tool = event.target.value
    }

    else if (field === "isOnline") {
      tool = event.target.value
      // console.log(tool)
      // This is for unclicking the button
      if ((tool === "true" && filters.isOnline === true) || (tool === "false" && filters.isOnline === false)) {
        tool = ""
      }
      if (tool === "true") {
        tool = true
      }
      else if (tool === "false") {
        tool = false
      }
    }

    else if (field === "fromDate") {
      tool = event
      console.log(tool)
      if (tool === "") {
        tool = ""
      }
    }

    else if (field === "toDate") {
      tool = event
      console.log(tool)
      if (tool === "") {
        tool = ""
      }
    }

    else {
      tool = event.target.value
    }
    const value = tool;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "year":
        onAllFilter(value, filters.gpa, filters.major, filters.isOnline, filters.semester, filters.fromDate, filters.toDate);
        break;
      case "gpa":
        onAllFilter(filters.year, value, filters.major, filters.isOnline, filters.semester, filters.fromDate, filters.toDate);
        break;
      case "major":
        onAllFilter(filters.year, filters.gpa, value, filters.isOnline, filters.semester, filters.fromDate, filters.toDate);
        break;
      case "isOnline":
        onAllFilter(filters.year, filters.gpa, filters.major, value, filters.semester, filters.fromDate, filters.toDate);
        break;
      case "semester":
        onAllFilter(filters.year, filters.gpa, filters.major, filters.isOnline, value, filters.fromDate, filters.toDate);
        break;
      case "fromDate":
        onAllFilter(filters.year, filters.gpa, filters.major, filters.isOnline, filters.semester, value, filters.toDate);
        break;
      case "toDate":
        onAllFilter(filters.year, filters.gpa, filters.major, filters.isOnline, filters.semester, filters.fromDate, value);
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
        <div className="school-filter">
          <div>
            <input type="radio" className="filter__boxes" id="year" checked={filters.year === "Freshman"}
              onClick={handleInput("year")}
              value="Freshman" /> Freshman
          </div>
          <div>
            <input
              type="radio"
              className="filter__boxes"
              id="year"
              checked={filters.year === "Sophomore"}
              onClick={handleInput("year")}
              value="Sophomore" /> Sophomore
          </div>
          <div>
            <input
              type="radio"
              className="filter__boxes"
              id="year"
              checked={filters.year === "Junior"}
              onClick={handleInput("year")}
              value="Junior" /> Junior
          </div>
          <div>
            <input
              type="radio"
              className="filter__boxes"
              id="year"
              checked={filters.year === "Senior"}
              onClick={handleInput("year")}
              value="Senior" /> Senior
          </div>
          <div>
            <input
              type="radio"
              className="filter__boxes"
              id="year"
              checked={filters.year === "Graduate"}
              onClick={handleInput("year")}
              value="Graduate" /> Graduate
          </div>
        </div>
      </div>

      <div className="">
        <h1>GPA:</h1>
        <label htmlFor="gpa"></label>
        <div>
          <ReactSlider
            // marks={1}
            markClassName="example-mark"
            min={0}
            max={4}
            step={0.1}
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            id="gpa"
            onChange={handleInput("gpa")}
            defaultValue={4}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          />
        </div>
      </div>

      <div className="">
        <h1>Subject:</h1>
        <label htmlFor="major"></label>
        <div className="select-wrapper" >
          <div className="select-dropdown-subject">
            <select
              className=" "
              id="major"
              onChange={handleInput("major")}
            >
              {/* <option value="select">Select</option> */}
              <option className="" value="">CS, Math, Biology...</option>
              {majors.map((major) => (
                <option className="" value={major} key={major}>
                  {major}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="">
        <h1>Location:</h1>
        <label htmlFor="isOnline"></label>
        <div className="school-filter">
          <div>
            <input type="radio"
              className="filter__boxes"
              id="isOnline"
              checked={filters.isOnline === true}
              onClick={handleInput("isOnline")}
              value="true" /> Remote
          </div>
          <div>
            <input
              type="radio"
              className="filter__boxes"
              id="isOnline"
              checked={filters.isOnline === false}
              onClick={handleInput("isOnline")}
              value="false" /> In-person
          </div>
        </div>
      </div>

      <div className="">
        <h1>Semester:</h1>
        <label htmlFor="semester"></label>
        <div className="select-wrapper" >
          <div className="select-dropdown-subject">
            <select
              className=" "
              id="semester"
              onChange={handleInput("semester")}>
              {/* <option value="select">Select</option> */}
              <option className="" value="">Select</option>
              {semesters.map((semester) => (
                <option className="" value={semester} key={semester}>
                  {semester}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* <div className="">
        <div className="select-wrapper">
        <h1>From</h1>
          <label htmlFor="startDate"></label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            onChange={handleInput("from")}
          />
        </div>
        <div className="select-wrapper">
        <h1>To</h1>
          <label htmlFor="endDate"></label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            onChange={handleInput("to")}
          />
        </div>
      </div> */}

      <div className="">
        <div className="select-wrapper">
          <h1>From:</h1>
          <DatePicker
            onChange={handleInput("fromDate")}
            className="form-control"
            id="fromDate"
          />
        </div>
        <div className="select-wrapper">
          <h1>To:</h1>
          <DatePicker
            onChange={handleInput("toDate")}
            className="form-control"
            id="toDate"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;