import "./Percentage.css";

import Label from "../Label/Label";

const Percentage = ({ label }) => {
  return (
    <section className="percentage">
      <Label label="Select Tip %" inputId="percentage" />
      <section className="percentage__btn-container">
        <input
          className="percentage__btn body-main"
          type="button"
          value="5%"
          id="percentage"
        />
        <input
          className="percentage__btn body-main"
          type="button"
          value="10%"
          id="percentage"
        />
        <input
          className="percentage__btn body-main"
          type="button"
          value="15%"
          id="percentage"
        />
        <input
          className="percentage__btn body-main"
          type="button"
          value="20%"
          id="percentage"
        />
        <input
          className="percentage__btn body-main"
          type="button"
          value="25%"
          id="percentage"
        />
        <input
          className="percentage__input body-main"
          type="number"
          placeholder="Custom"
          id="percentage"
        />
      </section>
    </section>
  );
};

export default Percentage;
