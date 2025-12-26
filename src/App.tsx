import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Psycotherapy from "./pages/Psycotherapy";
import Constelations from "./pages/Constelations";
import Contact from "./pages/Contact";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />  
          <Route exact path="/psicoterapia" element={<Psycotherapy />} />  
          <Route exact path="/constelaciones" element={<Constelations />} />  
          <Route exact path="/contacto" element={<Contact />} />  
        </Routes>
      </Router>
    </div>
  )
}


export default App