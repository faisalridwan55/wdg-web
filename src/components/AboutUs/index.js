import React from "react";
import faisal from "./manDP.png";
import laras from "./womanDP.png";

function AboutUs() {
  const itemsStyle = { fontWeight: "bold", justifyContent: "center" };

  const imgStyle = {
    width: "250px",
    height: "300px",
    padding: "1rem 0",
    borderRadius: "50%",
  };

  const containerStyle = {
    padding: "5%",
    color: "white",
    backgroundColor: "black",
  };

  const sectionStyle = {
    width: "44%",
    margin: "0 2%",
    display: "flex",
    padding: "3% 0",
    borderRadius: "8px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    border: "1px solid white",
  };

  const sectionStyle2 = { ...sectionStyle, width: "37%", margin: "2%" };

  const mobileSection = {
    ...sectionStyle,
    width: "90%",
    padding: "5% 0",
    margin: "1rem 0",
  };

  const openDirections = () => {
    window.open("https://goo.gl/maps/QwVz9PGxGzUcNccs7", "_blank");
  };

  const saveCalendar = () => {
    window.open(
      "https://calendar.google.com/event?action=TEMPLATE&tmeid=NXBvYzBsODNoZDR0azRjcHEwN21xZDlmY2cgamdqZTE5MDVyaDFnNjczZmM3MDdoa21oZzRAZw&tmsrc=jgje1905rh1g673fc707hkmhg4%40group.calendar.google.com",
      "_blank"
    );
  };

  return (
    <div style={containerStyle}>
      <div className="sub-title" style={{ fontWeight: "bold" }}>
        About Us
      </div>

      {/* Komponen About Us saat di mobile */}
      <div className="mobile-only my-col align-items-center">
        <div style={mobileSection}>
          <img alt="Laras" src={laras} style={imgStyle} />
          <div className="row" style={itemsStyle}>
            Citra Ayu Larasati
          </div>
          <div className="row justify-content-center">
            Daughter of Mr. Suranto (Alm)
          </div>
          <div className="row justify-content-center">&</div>
          <div className="row justify-content-center">
            Mrs. Umi Hartati (Almh)
          </div>
        </div>
        <div style={mobileSection}>
          <img alt="Faisal" src={faisal} style={imgStyle} />
          <div className="row mt-4" style={itemsStyle}>
            Muhammad Faisal Taufiqur Ridwan
          </div>
          <div className="row justify-content-center">
            Son of Mr. Ardevi & Mrs. Lina Darlina
          </div>
        </div>
      </div>

      {/* Komponen About Us saat di selain mobile */}
      <div className="desktop-only">
        <div className="row mt-2 justify-content-center">
          <div style={sectionStyle}>
            <img alt="Laras" src={laras} style={imgStyle} />
            <div className="row" style={itemsStyle}>
              Citra Ayu Larasati
            </div>
            <div className="row justify-content-center">
              Daughter of Mr. Suranto (Alm) & Mrs. Umi Hartati (Almh)
            </div>
          </div>
          <div style={sectionStyle}>
            <img alt="Faisal" src={faisal} style={imgStyle} />
            <div className="row" style={itemsStyle}>
              Muhammad Faisal T.R
            </div>
            <div className="row justify-content-center">
              Son of Mr. Ardevi & Mrs. Lina Darlina
            </div>
          </div>
        </div>
      </div>

      <div
        className="sub-title"
        style={{ fontWeight: "bold", marginTop: "5%" }}
      >
        General Informations
      </div>

      {/* Komponen Information saat di mobile */}
      <div className="mobile-only my-col align-items-center">
        {/* Date */}
        <div style={mobileSection}>
          <svg
            width="4em"
            height="4em"
            viewBox="0 0 16 16"
            class="bi bi-calendar2-date"
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

        {/* Time */}
        <div style={mobileSection}>
          <svg
            width="4em"
            height="4em"
            viewBox="0 0 16 16"
            class="bi bi-clock"
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
            Ceremony: 01.00 - 03.00 PM (Family Event)
          </div>
          <div className="row justify-content-center">
            Tasyakuran: 03.00 - 05.00 PM (Friend Event)
          </div>
          <div className="row justify-content-center">
            <button
              className="btn btn-light my-2 font-weight-bold"
              onClick={saveCalendar}
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-calendar-check-fill mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM0 5h16v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5zm10.854 3.854a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
                />
              </svg>
              Add to Calendar
            </button>
          </div>
        </div>

        {/* Venue */}
        <div style={mobileSection}>
          <svg
            width="4em"
            height="4em"
            viewBox="0 0 16 16"
            class="bi bi-building"
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
            Jl. Iskandarsyah Raya No.1, Blok M, Kebayoran Baru, Jakarta Selatan,
            12160
          </div>
          <div
            style={{
              display: "block",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <button
              className="btn btn-light my-2 font-weight-bold"
              onClick={openDirections}
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-signpost-split-fill mr-1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 16h2V6h5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.8 2.4A1 1 0 0 0 14 2H9v-.586a1 1 0 0 0-2 0V7H2a1 1 0 0 0-.8.4L.225 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4h5v5z" />
              </svg>
              Get directions
            </button>
          </div>
        </div>
        <div className="row justify-content-center mt-2">
          <iframe
            title="Denah Ambhara"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1537314838192!2d106.80153411484076!3d-6.243461595480681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f168d382400d%3A0x927a0e793300e1a4!2sAmbhara%20Hotel!5e0!3m2!1sen!2sid!4v1598512669668!5m2!1sen!2sid"
            width="100%"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>

      {/* Komponen Information saat di selain mobile */}
      <div className="desktop-only my-col">
        <div className="row justify-content-center mt-2">
          <div style={sectionStyle2}>
            {/* Date */}
            <svg
              width="4em"
              height="4em"
              viewBox="0 0 16 16"
              class="bi bi-calendar2-date"
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

          <div style={sectionStyle2}>
            {/* Time */}
            <svg
              width="4em"
              height="4em"
              viewBox="0 0 16 16"
              class="bi bi-clock"
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
              Ceremony: 01.00 - 03.00 PM (Family Event)
            </div>
            <div className="row justify-content-center">
              Tasyakuran: 03.00 - 05.00 PM (Friend Event)
            </div>
            <div className="row justify-content-center">
              <button
                className="btn btn-light my-2 font-weight-bold"
                onClick={saveCalendar}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-calendar-check-fill mr-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM0 5h16v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5zm10.854 3.854a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
                  />
                </svg>
                Add to Calendar
              </button>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div style={sectionStyle2}>
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
              Jl. Iskandarsyah Raya No.1, Blok M, Kebayoran Baru, Jakarta
              Selatan, 12160
            </div>
            <div
              style={{
                display: "block",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              <button
                className="btn btn-light my-2 font-weight-bold"
                onClick={openDirections}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-signpost-split-fill mr-1"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 16h2V6h5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.8 2.4A1 1 0 0 0 14 2H9v-.586a1 1 0 0 0-2 0V7H2a1 1 0 0 0-.8.4L.225 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4h5v5z" />
                </svg>
                Get directions
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-2">
          <iframe
            title="Denah Ambhara"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1537314838192!2d106.80153411484076!3d-6.243461595480681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f168d382400d%3A0x927a0e793300e1a4!2sAmbhara%20Hotel!5e0!3m2!1sen!2sid!4v1598512669668!5m2!1sen!2sid"
            width="600"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
