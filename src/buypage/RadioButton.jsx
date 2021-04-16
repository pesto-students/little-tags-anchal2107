import "./RadioButton.scss";

const RadioButton = (props) => {
  return (
    <div className="radio-button">
      <input
        id={props.id}
        onChange={props.changed}
        value={props.value}
        type="radio"
        checked={props.isSelected}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default RadioButton;
