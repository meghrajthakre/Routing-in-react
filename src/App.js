import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./componant/Home";
import Navbar from "./componant/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from "./componant/Service";
import About from "./componant/About";
import Info from "./componant/Info";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/services"} element={<Service />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/info"} element={<Info />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
