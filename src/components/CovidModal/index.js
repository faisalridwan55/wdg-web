import React from "react";
import "./index.css";

function CovidModal({ setIsFirstOpen }) {
  return (
    <>
      <div className="modal-window">
        <div className="modal-container">
          <div className="modal-header">
            <div className="modal-header-title">PROTOKOL KESEHATAN</div>
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
              Acara ini diselenggarakan dengan protokol kesehatan yang harus
              dipatuhi demi mencegah penyebaran virus COVID-19
            </p>
            <p>
              Tanpa mengurangi rasa hormat, para tamu undangan yang bersedia
              menghadiri acara dimohon kesediannya untuk:
            </p>
            <ol>
              <li>
                Menggunakan masker wajah dan/atau transparant face shield.
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
                mempelai juga orang tua mempelai.
              </li>
              <li>
                Menjaga jarak dengan pengantin dan tamu undangan lain selama
                acara berlangsung.
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
