import PropTypes from "prop-types";
import "./RadioButton.scss";

const RadioButton = ({ id, changed, value, isSelected, label }) => {
  return (
    <div className="radio-button">
      <input
        id={id}
        onChange={changed}
        value={value}
        type="radio"
        checked={isSelected}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;

RadioButton.propTypes = {
  changed: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

RadioButton.defaultProps = {
  changed: () => {},
  value: "",
  isSelected: false,
  label: "",
};
