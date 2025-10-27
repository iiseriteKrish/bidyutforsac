import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Manifesto from "./pages/Manifesto";
import Vision from "./pages/Vision";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Navbar */}
        <nav className="flex justify-center gap-6 py-4 bg-blue-700 text-white shadow-md">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/vision" className="hover:text-yellow-300 transition">Vision</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
          <Link to="/manifesto" className="hover:text-yellow-300 transition">Manifesto</Link>
        </nav>

        {/* Routes */}
        <Routes>
          {/* 👇 This is the default route */}
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision/>} />
          <Route path="/about" element={<About />} />
          <Route path="/manifesto" element={<Manifesto />} />

          {/* Optional: catch-all route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
