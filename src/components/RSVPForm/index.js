import React, { useState } from "react";
import axios from 'axios';

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

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guestOf: "Faisal",
    presence: true,
  });

  const postForm = () => axios.post(process.env.REACT_APP_FORM_URL, formData);

  return (
    <>
      <div className="sub-title pt-4 pb-2" style={{ fontWeight: "bold" }}>
        RSVP Form
      </div>
      <div style={containerStyle}>
        <div id="RSVP-form">
          <div className="my-col my-3 mt-5 px-5">
            <div style={formTitle}>Name:</div>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="my-col my-3 px-5">
            <div style={formTitle}>Phone:</div>
            <input
              type="number"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="my-col my-3 px-5">
            <div style={formTitle}>Guest of:</div>
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
            <div style={formTitle}>Will you come?</div>
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
            <button className="btn btn-success w-50" onClick={postForm}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RSVPForm;
