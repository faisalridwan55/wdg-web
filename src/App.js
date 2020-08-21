import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import AboutUs from "./components/AboutUs";

function App() {
  const [isFirstOpen, setIsFirstOpen] = useState(true);

  useEffect(() => {
    if (isFirstOpen) setIsFirstOpen(false);
  }, [isFirstOpen]);

  return (
    <div>
      <Header />
      <AboutUs />
    </div>
  );
}

export default App;
