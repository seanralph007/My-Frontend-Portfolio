import React, { useState } from "react";
import "./Certificates.css";

const Certificates = () => {
  const [toggle, setToggle] = useState(1);

  const toggleHandler = (index) => {
    setToggle(index);
  };

  return (
    <section className="certificate section" id="certifications">
      <h2 className="section-title">My Certificates</h2>
      <span className="section-subtitle">My Personal journey</span>

      <div className="certificate-container container">
        <div className="certificate-tabs">
          <div
            className={
              toggle === 1
                ? "certificate-button certificate-active button-flex"
                : "certificate-button button-flex"
            }
            onClick={() => toggleHandler(1)}
          >
            <i className="uil uil-graduation-cap certificate-icon"></i>
            Education
          </div>

          <div
            className={
              toggle === 2
                ? "certificate-button certificate-active button-flex"
                : "certificate-button button-flex"
            }
            onClick={() => toggleHandler(2)}
          >
            <i className="uil uil-briefcase-alt certificate-icon"></i>
            Experience
          </div>
        </div>

        <div className="certificate-sections">
          <div
            className={
              toggle === 1
                ? "certificate-content certificate-content-active"
                : "certificate-content"
            }
          >
            <div className="certificate-data">
              <div>
                <h3 className="certificate-title">HTML</h3>
                <span className="certificate-subtitle">FreeCodeCamp</span>
                <div className="certificate-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021- Present
                </div>
              </div>

              <div>
                <span className="certificate-rounder"></span>
                <div className="certificate-line"></div>
              </div>
            </div>

            <div className="certificate-data">
              <div></div>

              <div>
                <span className="certificate-rounder"></span>
                <span className="certificate-line"></span>
              </div>

              <div>
                <h3 className="certificate-title">Css</h3>
                <span className="certificate-subtitle">FreeCodeCamp</span>
                <div className="certificate-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021- Present
                </div>
              </div>
            </div>

            <div className="certificate-data">
              <div>
                <h3 className="certificate-title">Javascript</h3>
                <span className="certificate-subtitle">Udemy</span>
                <div className="certificate-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021- Present
                </div>
              </div>

              <div>
                <span className="certificate-rounder"></span>
                <div className="certificate-line"></div>
              </div>
            </div>

            <div className="certificate-data">
              <div></div>

              <div>
                <span className="certificate-rounder"></span>
                <span className="certificate-line"></span>
              </div>

              <div>
                <h3 className="certificate-title">React</h3>
                <span className="certificate-subtitle">Udemy</span>
                <div className="certificate-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021- Present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2
                ? "certificate-content certificate-content-active"
                : "certificate-content"
            }
          >
            <div className="certificate-data">
              <div>
                <h3 className="certificate-title">Frontend Developer</h3>
                <span className="certificate-subtitle">
                  HighScoreTech - Nigeria
                </span>
                <div className="certificate-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021- Present
                </div>
              </div>

              <div>
                <span className="certificate-rounder"></span>
                <div className="certificate-line"></div>
              </div>
            </div>

            <div className="certificate-data">
              <div></div>

              <div>
                <span className="certificate-rounder"></span>
                <span className="certificate-line"></span>
              </div>

              <div>
                <h3 className="certificate-title">Appwrite hackathon</h3>
                <span className="certificate-subtitle">
                  Re-designed appwrite web
                </span>
                <div className="certificate-calendar">
                  <i className="uil uil-calendar-alt"></i> 2021- Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
