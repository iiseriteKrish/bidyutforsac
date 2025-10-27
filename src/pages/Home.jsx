import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="text-center py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-4xl font-bold text-blue-900 mb-4">
        Bidyut Bhakat (23MS227)
      </h1>

      <p className="text-lg text-gray-700">
        Candidate for General Secretary, SAC (Hostel & Transport) 2025–26
      </p>

      <p className="mt-4 text-xl font-medium text-yellow-600">
        “Vote for Transparency • Vote for Compassion • Vote for Honesty”
      </p>

      {/* Download Manifesto Button */}
      <motion.a
        href="https://drive.google.com/file/d/1csilOREutM2Wg33yw8DJ5taWm7VA-t1V/view?usp=drive_link" // 🔗 replace this later with your actual link
        download
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block mt-8 px-6 py-3 bg-blue-700 text-white rounded-full shadow-md hover:bg-blue-800 transition-all duration-300"
      >
        📄 Download Manifesto
      </motion.a>
    </motion.div>
  );
}
