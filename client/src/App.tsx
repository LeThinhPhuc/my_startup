import React from "react";
import Header from "./components/Header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>

      {/* <Routes>
        <Route path="/" element = {<Header />} />
      </Routes>
 */}

    </Router>
  );
}

export default App;
