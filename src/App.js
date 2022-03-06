import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
//import pages
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Error from "./pages/Error";
//import components
import logo from "./img/NBA_logo.png";
function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* About */}
        <Route path="/questions/:id" element={<Questions />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
