import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  console.log(total, showPerPage);
  const numberOfButtons = Math.ceil(total / showPerPage);
  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div>
      <nav className="pagination-container">
        <ul className="pagination">
          <li className="page-item">
            <div onClick={() => onButtonClick("prev")}>Previous</div>
          </li>

          {new Array(numberOfButtons).fill("").map((e, index) => (
            <li key={index+1}
              className={`page-item ${
                index + 1 === counter ? "active-page" : null
              }`}
            >
              <div onClick={() => setCounter(index + 1)}>{index + 1}</div>
            </li>
          ))}
          <li className="page-item">
            <div onClick={() => onButtonClick("next")}>Next</div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  showPerPage: PropTypes.number.isRequired,
  onPaginationChange: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  showPerPage: 2,
  onPaginationChange: () => {},
  total: 0,
};
