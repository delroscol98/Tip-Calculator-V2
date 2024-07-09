import "./Label.css";

const Label = ({ label, inputId, errMsg }) => {
  return (
    <label className="label body-sm" htmlFor={inputId}>
      {label}
      <p className="error-msg">{errMsg}</p>
    </label>
  );
};

export default Label;
