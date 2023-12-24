import { useState } from "react";
import "./FilterList.css";

const FilterList = () => {
  const [filters, setFilters] = useState([
    { text: "Show All", active: true },
    { text: "Frontend", active: false },
    { text: "Backend", active: false },
    { text: "Hardware", active: false },
    { text: "Machine Learning", active: false },
    { text: "Python", active: false },
    { text: "ReactJS", active: false },
    { text: "SQL", active: false },
  ]);

  const onClickHandler = (event) => {
    const tempFilters = filters.map((filter) => {
      filter.active = false;
      return filter;
    });
    setFilters(tempFilters);
    var filterObj = filters.filter((obj) => {
      return obj.text === event.target.id;
    })[0];
    filterObj.active = true;
  };

  return (
    <div className="filter-list">
      <ul>
        {filters.map((filter) => (
          <li key={"li-" + filter.text}>
            <span
              key={filter.text}
              id={filter.text}
              onClick={onClickHandler}
              style={
                filter.active
                  ? {
                      backgroundColor: "#111111",
                      border: "3px solid white",
                      color: "#deccac",
                    }
                  : {}
              }
            >
              {filter.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterList;
