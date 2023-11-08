import React from "react";
// import "bulma/css/bulma.min.css";
import "../Components/Herosection.css";
const Herosection = () => {
  return (
    <React.Fragment>
      <section className="hero imags">
        <div className="hero__text hast-text-centered">
          <h1 className="is-size-1-desktop is-size-4-mobile">Lorem Ipsum</h1>
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...There is no one who loves pain itself,
            who seeks after it and wants to have it, simply because it is
            pain...
          </p>
          <button className="button is-medium is-responsive is-link is-rounded mt-4">
            Get Started
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Herosection;
