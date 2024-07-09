import "./Summary.css";

const Summary = ({ children }) => {
  return (
    <section className="summary">
      <section className="summary__details">
        <article className="summary__details-container">
          <p className="summary__details--text body-sm">
            Tip Amount{" "}
            <span className="summary__details--text-sub body-xsm">
              / person
            </span>
          </p>
          <p className="summary__details--number body-large">$0.00</p>
        </article>
        <article className="summary__details-container">
          <p className="summary__details--text body-sm">
            Total
            <span className="summary__details--text-sub body-xsm">
              / person
            </span>
          </p>
          <p className="summary__details--number body-large">$0.00</p>
        </article>
      </section>

      {children}
    </section>
  );
};

export default Summary;
