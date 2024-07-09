import "./Input.css";

import Label from "../Label/Label";

const Input = ({ label, image, imageAlt }) => {
  return (
    <article className="input">
      <Label label="Bill" inputId="bill" />
      <article className="input__container">
        <img className="input__image" src={image} alt={imageAlt} />
        <input
          className="input__input "
          type="number"
          name="bill"
          id="bill"
          min="0"
          placeholder="0"
        />
      </article>
    </article>
  );
};

export default Input;
