import React, { useState, useEffect } from "react";

import axios from "axios";
import papa from "papaparse";
import guestListRoute from "./Guest list - Faisal's Guest (CSV).csv";

import "./index.css";

function RSVPForm() {
  const containerStyle = {
    display: "flex",
    padding: "2rem",
    paddingTop: 0,
    justifyContent: "center",
  };

  const formTitle = {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "1%",
  };

  const inputStyle = { borderRadius: "8px", padding: "4px 8px" };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guestOf: "Faisal",
    presence: true,
  });

  const [guestList, setGuestList] = useState([]);

  useEffect(() => {
    if (!Boolean(guestList.length)) getGuest(guestListRoute);
  }, [guestList.length])

  const postForm = () => axios.post(process.env.REACT_APP_FORM_URL, formData);

  const getGuest = source => {
    papa.parse(source, {
      download: true,
      complete: result => setGuestList(result.data),
    });
  }

  const checkNameInput = name => {
    return guestList.find(guest => name.toLowerCase().includes(guest[0].toLowerCase())) || false;
  }

  const footNote = () => {
    const guestDetail = checkNameInput(formData.name);
    if (!guestDetail) {
      return <i className="text-danger">*Please recheck your inputted name</i>
    }
    return <i className="text-success">{`*The invitation is valid for ${guestDetail[1]} person`}</i>
  }
  
  console.log(guestList);
  return (
    <>
      <div className="sub-title pt-4 pb-2" style={{ fontWeight: "bold" }}>
        RSVP Form
      </div>
      <div style={containerStyle}>
        <div id="RSVP-form">
          <div className="my-col my-3 mt-5 px-5">
            <div style={formTitle}>
              Full Name:<small className="text-danger font-italic ml-2">(Required)</small>
            </div>
            <input
              id="name"
              type="text"
              name="name"
              style={inputStyle}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <small>{footNote()}</small>
          </div>
          <div className="my-col my-3 px-5">
            <div style={formTitle}>
              Phone Number:<small className="text-danger font-italic ml-2">(Required)</small>
            </div>
            <input
              id="phone"
              type="number"
              name="phone"
              style={inputStyle}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="my-col my-3 px-5">
            <div style={formTitle}>
              Guest of:
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="text-align-center mx-2">
                <input
                  className="mr-1"
                  type="radio"
                  name="guest-of"
                  value="Faisal"
                  checked={formData.guestOf === "Faisal"}
                  onChange={() =>
                    setFormData({ ...formData, guestOf: "Faisal" })
                  }
                />
                <label htmlFor="Faisal">Faisal</label>
              </div>
              <div className="text-align-center mx-2">
                <input
                  className="mr-1"
                  type="radio"
                  name="guest-of"
                  value="Laras"
                  checked={formData.guestOf === "Laras"}
                  onChange={() =>
                    setFormData({ ...formData, guestOf: "Laras" })
                  }
                />
                <label htmlFor="Laras">Laras</label>
              </div>
            </div>
          </div>
          <div className="my-col my-3 px-5">
            <div style={formTitle}>
              Will you come?
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="text-align-center mx-2">
                <input
                  className="mr-1"
                  type="radio"
                  name="presence"
                  value={true}
                  checked={formData.presence}
                  onChange={() => setFormData({ ...formData, presence: true })}
                />
                Of course!
              </div>
              <div className="text-align-center mx-2">
                <input
                  className="mr-1"
                  type="radio"
                  name="presence"
                  value={false}
                  checked={!formData.presence}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      presence: false,
                    })
                  }
                />
                Unfortunately I can't
              </div>
            </div>
          </div>
          <div className="mb-5 text-center">
            <button 
              onClick={postForm}
              disabled={!(!!checkNameInput(formData.name) && formData.phone.length > 7)}
              className="btn btn-success w-50" 
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RSVPForm;
