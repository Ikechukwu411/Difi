import React, { useEffect } from "react";
import "../Components/ThirdSection.css";
import Bitcoin from "../Images/bitcoin.jpg";
import Ethereum from "../Images/Ethereum.jpg";
import Litcoin from "../Images/litcoin.jpg";
import Ripple from "../Images/ripple.jpeg";
import Puppet from "../Images/puppet.png";
import Shiba from "../Images/shiba.jpg";
import Tether from "../Images/Tether.jpg";
import Cardano from "../Images/cardanp.jpeg";
import XRP from "../Images/XRP.jpg";

const ThirdSection = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // Check if the animation has already been applied to avoid duplication
        if (!scroller.getAttribute("data-animated")) {
          scroller.setAttribute("data-animated", true);

          const scrollerInner = scroller.querySelector(".scroller__inner");
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }

    // Call the addAnimation function only once after the initial render
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  return (
    <React.Fragment>
      <section className="section">
        <div className="scroller">
          <div className="scroller__inner">
            <img src={Bitcoin} />
            <img src={Ethereum} />
            <img src={Litcoin} />
            <img src={Ripple} />
            <img src={Puppet} />
            <img src={Shiba} />
            <img src={Tether} />
            <img src={Cardano} />
            <img src={XRP} />
            <img src={Bitcoin} />
            <img src={Ethereum} />
            <img src={Litcoin} />
            <img src={Bitcoin} />
            <img src={Ethereum} />
            <img src={Litcoin} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ThirdSection;
