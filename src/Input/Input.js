import "./Input.css";

const NumberInput = ({ label, image, imageAlt }) => {
  return (
    <article className="input">
      <label className="input__label body-sm" htmlFor="bill">
        {label}
      </label>
      <article className="input__container">
        <img className="input__image" src={image} alt={imageAlt} />
        <input
          className="input__input "
          type="number"
          name="bill"
          id="bill"
          placeholder="0"
        />
      </article>
    </article>
  );
};

export default NumberInput;
