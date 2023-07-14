import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggle, setToggle] = useState(0);

  const toggleHandler = (index) => {
    setToggle(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section-title">My Services</h2>
      <span className="section-subtitle">What i offer</span>

      <div className="services-container container grid">
        <div className="services-content">
          <div>
            <i className="uil uil-web-grid services-icon"></i>
            <h3 className="services-title">
              Product <br /> Designer
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleHandler(1)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggle === 1 ? "services-modal active-modal" : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                className="uil uil-times services-modal-close"
                onClick={() => setToggle(0)}
              ></i>

              <h3 className="services-modal-title"> Product Designer</h3>
              <p className="services-modal-description">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Web page development.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i className="uil uil-arrow services-icon"></i>
            <h3 className="services-title">
              Ui/Ux <br /> Designer
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleHandler(2)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggle === 2 ? "services-modal active-modal" : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                className="uil uil-times services-modal-close"
                onClick={() => setToggle(0)}
              ></i>

              <h3 className="services-modal-title">Ui/Ux Designer</h3>
              <p className="services-modal-description">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Web page development.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i className="uil uil-edit services-icon"></i>
            <h3 className="services-title">
              Visual <br /> Designer
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleHandler(3)}>
            View More
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div  className={
              toggle === 3 ? "services-modal active-modal" : "services-modal"
            }>
            <div className="services-modal-content">
              <i className="uil uil-times services-modal-close"  onClick={() => setToggle(0)}></i>

              <h3 className="services-modal-title">Visual Designer</h3>
              <p className="services-modal-description">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Web page development.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
