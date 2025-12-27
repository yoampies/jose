import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";
import Psycotherapy from "./features/psycotherapy/Psycotherapy";
import Constelations from "./features/constelations/Constelations";
import Contact from "./features/contact/Contact";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/psicoterapia" element={<Psycotherapy />} />
          <Route path="/constelaciones" element={<Constelations />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
