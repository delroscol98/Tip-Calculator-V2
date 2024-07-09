import "./Percentage.css";

import Label from "../Label/Label";
import Button from "../Button/Button";

const Percentage = ({
  onSetPercentage,
  customPercentage,
  onSetCustomPercentage,
}) => {
  return (
    <section className="percentage">
      <Label
        label="Select Tip %"
        inputId="percentage"
        errMsg={customPercentage < 0 && "Can't be less than zero"}
      />
      <section className="percentage__btn-container">
        <Button
          className="percentage__btn body-main"
          id="percentage"
          value={5}
          onClick={onSetPercentage}
        >
          5%
        </Button>
        <Button
          className="percentage__btn body-main"
          id="percentage"
          value={10}
          onClick={onSetPercentage}
        >
          10%
        </Button>
        <Button
          className="percentage__btn body-main"
          id="percentage"
          value={15}
          onClick={onSetPercentage}
        >
          15%
        </Button>
        <Button
          className="percentage__btn body-main"
          id="percentage"
          value={20}
          onClick={onSetPercentage}
        >
          20%
        </Button>
        <Button
          className="percentage__btn body-main"
          id="percentage"
          value={25}
          onClick={onSetPercentage}
        >
          25%
        </Button>
        <input
          className="percentage__input body-main"
          type="number"
          placeholder="Custom"
          id="percentage"
          min="0"
          value={customPercentage}
          onChange={onSetCustomPercentage}
        />
      </section>
    </section>
  );
};

export default Percentage;
