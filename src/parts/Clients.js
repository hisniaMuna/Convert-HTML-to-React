import React from "react";
import Section from "elements/Section";
import OneImage from "assets/images/clients-01.svg";
import TwoImage from "assets/images/clients-02.svg";
import ThreeImage from "assets/images/clients-03.svg";
import FourImage from "assets/images/clients-04.svg";
import FiveImage from "assets/images/clients-05.svg";
import Fade from "react-reveal/Fade";

export default function Clients() {
  return (
    <Section className="clients">
      <Fade bottom={1700}>
        <div class="container">
          <div class="clients-inner section-inner has-top-divider has-bottom-divider">
            <ul class="list-reset">
              <li>
                <img src={OneImage} alt="Clients 01" />
              </li>
              <li>
                <img src={TwoImage} alt="Clients 02" />
              </li>
              <li>
                <img src={ThreeImage} alt="Clients 03" />
              </li>
              <li>
                <img src={FourImage} alt="Clients 04" />
              </li>
              <li>
                <img src={FiveImage} alt="Clients 05" />
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </Section>
  );
}
