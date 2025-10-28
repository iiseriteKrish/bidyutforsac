import React from "react";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <motion.div
      className="text-center py-12 px-6"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-semibold text-purple-700 mb-4">My Vision</h2>
      <p className="text-gray-700 text-lg max-w-2xl mx-auto">
        My dream is to build a campus where no student feels unheard, no issue remains hidden, and no decision is taken without the people it affects. Together, we can create a transparent, compassionate, and fair IISER Kolkata — where every student’s voice matters.


      </p>
    </motion.div>
  );
}
