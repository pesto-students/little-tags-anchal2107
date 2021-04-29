import React from "react";
import PropTypes from "prop-types";

function SizeComponent({ handleSizeCallback }) {
  const handleSizeChange = (e) => {
    handleSizeCallback(e.target.value);
  };
  return (
    <>
      <div className="size align-left">
        <h4>SIZE</h4>
        <div className="size">
          <div>
            <input
              type="radio"
              id="xs"
              name="size"
              value="XS"
              onChange={handleSizeChange}
            />
            <label htmlFor="xs">
              <span>XS</span>
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="s"
              name="size"
              value="S"
              onChange={handleSizeChange}
            />
            <label htmlFor="s">
              <span>S</span>
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="m"
              name="size"
              value="M"
              onChange={handleSizeChange}
              defaultChecked
            />
            <label htmlFor="m">
              <span>M</span>
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="l"
              name="size"
              value="L"
              onChange={handleSizeChange}
            />
            <label htmlFor="l">
              <span>L</span>
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="xl"
              name="size"
              value="XL"
              onChange={handleSizeChange}
            />
            <label htmlFor="xl">
              <span>XL</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default SizeComponent;

SizeComponent.propTypes = {
  handleSizeCallback: PropTypes.func.isRequired,
};

SizeComponent.defaultProps = {
  handleSizeCallback: () => {},
};
