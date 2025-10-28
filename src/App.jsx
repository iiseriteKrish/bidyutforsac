import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Manifesto from "./pages/Manifesto";
import Vision from "./pages/Vision";

// Navbar component with dynamic hiding logic
function Navbar() {
  const location = useLocation();
  const current = location.pathname;

  return (
    <nav className="flex justify-center gap-6 py-4 bg-blue-700 text-white shadow-md">
      {current !== "/" && (
        <Link to="/" className="hover:text-yellow-300 transition">
          Home
        </Link>
      )}
      {current !== "/vision" && (
        <Link to="/vision" className="hover:text-yellow-300 transition">
          Vision
        </Link>
      )}
      {current !== "/about" && (
        <Link to="/about" className="hover:text-yellow-300 transition">
          About
        </Link>
      )}
      {current !== "/manifesto" && (
        <Link to="/manifesto" className="hover:text-yellow-300 transition">
          Manifesto
        </Link>
      )}
    </nav>
  );
}

export default function App() {
  return (
    <Router basename="/bidyutforsac">
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/about" element={<About />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
