import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Psycotherapy from "./pages/Psycotherapy";
import Constelations from "./pages/Constelations";
import Contact from "./pages/Contact";

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