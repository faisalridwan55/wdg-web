import React from "react";
import "./index.css";
import laras from "./womanDP.png";
import faisal from "./manDP.png";

function AboutUs() {
  const imgStyle = {
    width: "250px",
    height: "300px",
    padding: "1rem 0",
    borderRadius: "50%",
  };
  const nameStyle = { fontWeight: "bold", justifyContent: "center" };

  return (
    <div id="about-container">
      <div className="sub-title" style={{ fontWeight: "bold" }}>
        About Us
      </div>

      {/* Komponen About Us saat di mobile */}
      <div className="mobile-only col align-items-center">
        <div className="row" style={nameStyle}>
          Citra Ayu Larasati (Laras)
        </div>
        <div className="row justify-content-center">
          Putri dari Bapak Suranto & Ibu Umi Hartati
        </div>
        <img alt="Laras" src={laras} style={imgStyle} />
        <div className="row mt-4" style={nameStyle}>
          Muhammad Faisal Taufiqur Ridwan (Faisal)
        </div>
        <div className="row justify-content-center">
          Putra dari Bapak Ardevi & Ibu Lina Darlina
        </div>
        <img alt="Faisal" src={faisal} style={imgStyle} />
      </div>

      {/* Komponen About Us saat di selain mobile */}
      <div className="desktop-only">
        <div className="row">
          <div className="col-6 align-items-center">
            <div className="row" style={nameStyle}>
              Citra Ayu Larasati (Laras)
            </div>
            <div className="row justify-content-center">
              Putri dari Bapak Suranto & Ibu Umi Hartati
            </div>
            <img alt="Laras" src={laras} style={imgStyle} />
          </div>
          <div className="col-6 align-items-center">
            <div className="row" style={nameStyle}>
              Muhammad Faisal T.R (Faisal)
            </div>
            <div className="row justify-content-center">
              Putra dari Bapak Ardevi & Ibu Lina Darlina
            </div>
            <img alt="Faisal" src={faisal} style={imgStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
