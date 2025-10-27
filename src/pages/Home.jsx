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
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Bidyut Bhakat (23MS227)</h1>
      <p className="text-lg text-gray-700">
        Candidate for General Secretary, SAC (Hostel & Transport) 2025–26
      </p>
      <p className="mt-4 text-xl font-medium text-yellow-600">
        “Vote for Integrity • Vote for Fairness • Vote for Every Student”
      </p>
    </motion.div>
  );
}
