import React from "react";

function NotificationModal({ setIsOpen }) {
  return (
    <>
      <div className="modal-window">
        <div className="modal-container">
          <div className="modal-header">
            <></>
            <button
              type="button"
              className="btn btn-danger modal-button"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
          </div>
          <div className="modal-body text-center">
            <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-calendar-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
              <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
            </svg>
            <p>
              Terimakasih sudah bersedia datang:) 
            </p>
            <b>
              Acara ini diselenggarakan dengan protokol kesehatan yang wajib
              dipatuhi demi mencegah penularan virus Covid-19.
            </b>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: "100%" }}
              onClick={() => setIsOpen(false)}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationModal;
