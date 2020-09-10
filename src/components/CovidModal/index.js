import React, { useState } from "react";

function CovidModal({ setIsFirstOpen }) {
  const [isReaded, setIsReaded] = useState(false);

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
              className="btn btn-danger modal-button"
              onClick={() => setIsFirstOpen(false)}
            >
              X
            </button>
          </div>
          <div className="modal-body">
            <p>
              Acara ini diselenggarakan dengan protokol kesehatan yang wajib
              dipatuhi demi mencegah penularan virus Covid-19. Venue acara memiliki kapasitas menampung 
              <i>standing party</i> hingga dengan <b>800 tamu, demi keamanan dan kenyamanan bersama kami menggunakan
              venue hanya untuk +-75 tamu per sesi dengan format acara <i>round table</i></b>
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
                Membawa hand sanitizer (hand sanitizer juga disediakan di tempat).
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
            <div className="row align-items-center">
            <input type="checkbox" name="readed" id="readed" onClick={() => setIsReaded(!isReaded)} /> 
            <b className="ml-1">Klik tombol jika sudah membaca</b>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              disabled={!isReaded}
              style={{ width: "100%" }}
              className="btn btn-primary"
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
