import React from "react";
import "./index.css";

function CovidModal({ setIsFirstOpen }) {
  return (
    <>
      <div className="modal-window">
        <div className="modal-container">
          <div className="modal-header">
            <div className="modal-header-title">
              HIMBAUAN PROTOKOL KESEHATAN
            </div>
            <button
              type="button"
              id="modal-button"
              className="btn btn-danger"
              onClick={() => setIsFirstOpen(false)}
            >
              X
            </button>
          </div>
          <div class="modal-body">
            <p>
              Acara ini diselenggarakan dengan protokol kesehatan yang wajib
              dipatuhi demi mencegah penularan virus Covid-19.
            </p>
            <p>
              Tanpa mengurangi rasa hormat, para tamu undangan yang bersedia
              menghadiri acara dimohon kesediaannya untuk:
            </p>
            <ol>
              <li>
                Menggunakan masker wajah atau <i>transparent face shield</i>.
              </li>
              <li>
                Membawa hand sanitizer (untuk meminimalisir antrian cuci
                tangan).
              </li>
              <li>
                Bersedia antre untuk pengecekan suhu tubuh sebelum memasuki
                venue pernikahan.
              </li>
              <li>
                Memberikan selamat dengan cara salam namaste kepada kedua
                mempelai dan orang tua mempelai.
              </li>
              <li>
                Menjaga jarak dengan pengantin dan tamu undangan yang lain
                selama acara berlangsung.
              </li>
            </ol>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              style={{ width: "100%" }}
              onClick={() => setIsFirstOpen(false)}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CovidModal;
