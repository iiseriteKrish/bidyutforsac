import React from "react";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <motion.div
      className="text-center py-12"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-semibold text-purple-700 mb-4">My Vision</h2>
      <p className="text-gray-700 text-lg max-w-2xl mx-auto">
        I dream of a campus where every student’s voice counts,
        where fairness and empathy guide decisions,
        and where leadership means service — not privilege.
      </p>
    </motion.div>
  );
}
