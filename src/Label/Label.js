import "./Label.css";

const Label = ({ label, inputId }) => {
  return (
    <label className="label body-sm" htmlFor={inputId}>
      {label}
    </label>
  );
};

export default Label;
