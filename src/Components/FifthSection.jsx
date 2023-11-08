import React from "react";
import "bulma/css/bulma.min.css";
import "../Components/FifthSection.css";
import { ImCheckboxChecked } from "react-icons/im";
import { BsAsterisk } from "react-icons/bs";

const FifthSection = () => {
  return (
    <React.Fragment>
      <section className="section fifth__bg">
        <div className="has-text-centered mb-5">
          <p
            className="is-size-5-desktop is-size-6-mobile has-text-weight-bold"
            style={{ color: "#1e074a" }}
          >
            Pricing Plan
          </p>
          <h2
            className="is-size-3-desktop is-size-5-mobil"
            style={{ color: "#5E17EB" }}
          >
            Choose the best plat that fit for you
          </h2>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column col mr-3 box p-5 Basic__bg">
              <div className="has-text-centered">
                <div>
                  <p className="is-size-3-desktop is-size-4-mobile">Basic</p>
                  <p>Accounts</p>
                </div>
                <div>
                  <p>$0oo</p>
                  <p>/monthly</p>
                </div>
              </div>
              <div>
                <p>
                  <span>
                    <ImCheckboxChecked />
                  </span>
                  <span>General Investment Account</span>
                </p>
                <hr />
                <p>
                  <span>
                    <BsAsterisk />
                  </span>
                  <span>Stock and Shares ISA</span>
                </p>
                <hr />
                <p>
                  <span>
                    <BsAsterisk />
                  </span>
                  <span>Self-investment personal pension</span>
                </p>
                <hr />
              </div>
              <button className="button">Choose a Plan</button>
            </div>
            <div className="column col mr-3 box p-5 Basic__bg">
              <div className="has-text-centered">
                <div>
                  <p className="is-size-3-desktop is-size-4-mobile">Standard</p>
                  <p>Accounts</p>
                </div>
                <div>
                  <p>$0oo</p>
                  <p>/monthly</p>
                </div>
              </div>
              <div>
                <p>
                  <span>
                    <ImCheckboxChecked />
                  </span>
                  <span>General Investment Account</span>
                </p>
                <hr />
                <p>
                  <span>
                    <BsAsterisk />
                  </span>
                  <span>Stock and Shares ISA</span>
                </p>
                <hr />
                <p>
                  <span>
                    <BsAsterisk />
                  </span>
                  <span>Self-investment personal pension</span>
                </p>
                <hr />
              </div>
              <button className="button">Choose a Plan</button>
            </div>
            <div className="column col mr-3 box p-5 Basic__bg">
              <div className="has-text-centered">
                <div>
                  <p className="is-size-3-desktop is-size-4-mobile">Plus</p>
                  <p>Accounts</p>
                </div>
                <div>
                  <p>$0oo</p>
                  <p>/monthly</p>
                </div>
              </div>
              <div>
                <p>
                  <span>
                    <ImCheckboxChecked />
                  </span>
                  <span>General Investment Account</span>
                </p>
                <hr />
                <p>
                  <span>
                    <BsAsterisk />
                  </span>
                  <span>Stock and Shares ISA</span>
                </p>
                <hr />
                <p>
                  <span>
                    <BsAsterisk />
                  </span>
                  <span>Self-investment personal pension</span>
                </p>
                <hr />
              </div>
              <button className="button">Choose a Plan</button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FifthSection;
