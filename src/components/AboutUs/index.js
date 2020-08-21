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
  const itemsStyle = { fontWeight: "bold", justifyContent: "center" };

  return (
    <div id="about-container">
      <div className="sub-title" style={{ fontWeight: "bold" }}>
        About Us
      </div>

      {/* Komponen About Us saat di mobile */}
      <div className="mobile-only col align-items-center">
        <div className="row" style={itemsStyle}>
          Citra Ayu Larasati (Laras)
        </div>
        <div className="row justify-content-center">
          Putri dari Bapak Suranto & Ibu Umi Hartati
        </div>
        <img alt="Laras" src={laras} style={imgStyle} />
        <div className="row mt-4" style={itemsStyle}>
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
            <div className="row" style={itemsStyle}>
              Citra Ayu Larasati (Laras)
            </div>
            <div className="row justify-content-center">
              Putri dari Bapak Suranto & Ibu Umi Hartati
            </div>
            <img alt="Laras" src={laras} style={imgStyle} />
          </div>
          <div className="col-6 align-items-center">
            <div className="row" style={itemsStyle}>
              Muhammad Faisal T.R (Faisal)
            </div>
            <div className="row justify-content-center">
              Putra dari Bapak Ardevi & Ibu Lina Darlina
            </div>
            <img alt="Faisal" src={faisal} style={imgStyle} />
          </div>
        </div>
      </div>

      <div className="sub-title mt-5" style={{ fontWeight: "bold" }}>
        General Informations
      </div>

      {/* Komponen Information saat di mobile */}
      <div className="mobile-only col align-items-center">
        {/* Venue */}
        <svg
          width="4em"
          height="4em"
          viewBox="0 0 16 16"
          class="bi bi-building mt-2"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
          />
          <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
        </svg>
        <div className="row mb-2" style={itemsStyle}>
          Venue
        </div>
        <div className="row justify-content-center">Ambhara Hotel</div>
        <div style={{ display: "block", textAlign: "center" }}>
          Jl. Iskandarsyah Raya No.1, RW.2, Melawai, Kec. Kby. Baru, Kota
          Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160
        </div>

        {/* Date */}
        <svg
          width="4em"
          height="4em"
          viewBox="0 0 16 16"
          class="bi bi-calendar2-date mt-4"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.445 12.438V7.104h-.633A12.6 12.6 0 0 0 4.5 7.91v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871C11.336 7.734 10.555 7 9.383 7c-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
          <path
            fill-rule="evenodd"
            d="M14 2H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
          />
          <path
            fill-rule="evenodd"
            d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
          />
          <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
        </svg>
        <div className="row mb-2" style={itemsStyle}>
          Date
        </div>
        <div className="row justify-content-center">
          Sunday, 11th October 2020
        </div>

        {/* Time */}
        <svg
          width="4em"
          height="4em"
          viewBox="0 0 16 16"
          class="bi bi-clock mt-4"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"
          />
          <path
            fill-rule="evenodd"
            d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
          />
        </svg>
        <div className="row mb-2" style={itemsStyle}>
          Time
        </div>
        <div className="row justify-content-center">
          Ceremony: 14.00 - 15.30 WIB
        </div>
        <div className="row justify-content-center">
          Tasyakuran: 15.30 - 17.30 WIB
        </div>
      </div>

      {/* Komponen Information saat di selain mobile */}
      <div className="desktop-only col">
        <div className="row">
          <div className="col-6 offset-3 align-items-center">
            {/* Venue */}
            <svg
              width="4em"
              height="4em"
              viewBox="0 0 16 16"
              class="bi bi-building mt-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
              />
              <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
            </svg>
            <div className="row mb-2" style={itemsStyle}>
              Venue
            </div>
            <div className="row justify-content-center">Ambhara Hotel</div>
            <div style={{ display: "block", textAlign: "center" }}>
              Jl. Iskandarsyah Raya No.1, RW.2, Melawai, Kec. Kby. Baru, Kota
              Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 align-items-center">
            {/* Date */}
            <svg
              width="4em"
              height="4em"
              viewBox="0 0 16 16"
              class="bi bi-calendar2-date mt-4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.445 12.438V7.104h-.633A12.6 12.6 0 0 0 4.5 7.91v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871C11.336 7.734 10.555 7 9.383 7c-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
              <path
                fill-rule="evenodd"
                d="M14 2H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
              />
              <path
                fill-rule="evenodd"
                d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
              />
              <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
            </svg>
            <div className="row mb-2" style={itemsStyle}>
              Date
            </div>
            <div className="row justify-content-center">
              Sunday, 11th October 2020
            </div>
          </div>
          <div className="col-6 align-items-center">
            {/* Time */}
            <svg
              width="4em"
              height="4em"
              viewBox="0 0 16 16"
              class="bi bi-clock mt-4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"
              />
              <path
                fill-rule="evenodd"
                d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
            <div className="row mb-2" style={itemsStyle}>
              Time
            </div>
            <div className="row justify-content-center">
              Ceremony: 14.00 - 15.30 WIB
            </div>
            <div className="row justify-content-center">
              Tasyakuran: 15.30 - 17.30 WIB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
