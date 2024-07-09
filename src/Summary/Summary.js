import "./Summary.css";

const Summary = () => {
  return (
    <section className="summary">
      <section className="summary__details">
        <article className="summary__details-container">
          <p className="summary__details--text body-sm">
            Tip Amount{" "}
            <span className="summary__details--text-sub body-xsm" role="text">
              / person
            </span>
          </p>
          <p className="summary__details--number body-large">$0.00</p>
        </article>
        <article className="summary__details-container">
          <p className="summary__details--text body-sm">
            Total
            <span className="summary__details--text-sub body-xsm" role="text">
              / person
            </span>
          </p>
          <p className="summary__details--number body-large">$0.00</p>
        </article>
      </section>

      <button className="summary__btn" disabled>
        RESET
      </button>
    </section>
  );
};

export default Summary;
