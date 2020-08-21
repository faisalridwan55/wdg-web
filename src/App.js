import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
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
        </>
      )}
      {/* <Header />
      <AboutUs /> */}
    </div>
  );
}

export default App;
