import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import RSVPForm from "./components/RSVPForm";
import CovidModal from "./components/CovidModal";

function App() {
  const [isFirstOpen, setIsFirstOpen] = useState(true);

  return (
    <div>
      {isFirstOpen ? (
        <CovidModal setIsFirstOpen={setIsFirstOpen} />
      ) : (
        <>
          <Header />
          <AboutUs />
          <RSVPForm />
        </>
      )}
      {/* <Header />
      <AboutUs />
      <RSVPForm /> */}
    </div>
  );
}

export default App;
