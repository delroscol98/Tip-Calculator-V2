import "./NumberInput.css";

import Label from "../Label/Label";
import Input from "./Input";

const NumberInput = ({ children }) => {
  return <article className="number-input">{children}</article>;
};

export default NumberInput;
