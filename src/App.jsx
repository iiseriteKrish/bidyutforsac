import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Home from "./pages/Home";
import Manifesto from "./pages/Manifesto";
import About from "./pages/About";
import Vision from "./pages/Vision";

export default function App() {
  return (
    <Router basename="/bidyutforsac">
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {/* Navbar */}
        <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">

            <div className="space-x-4">
              <Link to="/" className="hover:text-yellow-300">Home</Link>
              <Link to="/manifesto" className="hover:text-yellow-300">Manifesto</Link>
              <Link to="/about" className="hover:text-yellow-300">About_Me</Link>
              <Link to="/vision" className="hover:text-yellow-300">Vision</Link>
            </div>
          </div>
        </nav>

        {/* Animated Page Content */}
        <motion.main
          className="flex-grow max-w-5xl mx-auto p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision" element={<Vision />} />
          </Routes>
        </motion.main>

        {/* Footer */}
        <footer className="bg-blue-900 text-white text-center py-5">
          <p className="text-sm">© 2025 Bidyut Bhakat | General Secretary Candidate</p>
          <p className="text-xs text-blue-200">Built with integrity • React + Tailwind + Motion</p>
        </footer>
      </div>
    </Router>
  );
}
