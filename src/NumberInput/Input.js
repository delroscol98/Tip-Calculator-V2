import "./Input.css";

const Input = ({ value, onChange, image, imageAlt, inputId, min }) => {
  return (
    <article className="input__container">
      <img className="input__image" src={image} alt={imageAlt} />
      <input
        className="input__input "
        type="number"
        name={inputId}
        id={inputId}
        min={min}
        placeholder="0"
        value={value}
        onChange={onChange}
      />
    </article>
  );
};

export default Input;
