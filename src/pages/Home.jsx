import React from "react";
import { motion } from "framer-motion";



export default function Home() {
  return (
    <motion.div
      className="text-center py-16 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Candidate Info */}
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
        href="https://drive.google.com/file/d/1csilOREutM2Wg33yw8DJ5taWm7VA-t1V/view?usp=drivesdk"
        download
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block mt-8 px-6 py-3 bg-blue-700 text-white rounded-full shadow-md hover:bg-blue-800 transition-all duration-300"
      >
        📄 Download Manifesto
      </motion.a>

      {/* Profile Section */}
      <motion.div
        className="mt-16 max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Profile Image */}
        <motion.img
  src="/bidyutforsac/public/your-photo.jpg"
  alt="Bidyut Bhakat"
  className="w-48 h-48 rounded-full mx-auto mb-6 shadow-md border-4 border-blue-200 object-cover object-center bg-gray-100"
  whileHover={{ scale: 1.05 }}
  onError={(e) => (e.target.style.backgroundColor = '#f8f9fa')}
/>

        {/* Why Vote for Me Section */}
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Why Vote for Me?
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          Unlike many candidates, I represent the perspective of a regular
          student — someone who understands the real struggles faced by those
          without strong networks or administrative connections.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify mt-3">
          My leadership in the Nature Club shows I can manage logistics,
          coordinate with officials, and deliver results responsibly. I know how
          to get things done — from organizing bus trips and arranging
          accommodations to fixing issues like camera repairs and permissions.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify mt-3">
          I am approachable, responsible, and determined to bridge the gap
          between students and administration. With me as your representative,
          your voice will never be ignored.
        </p>
      </motion.div>
    </motion.div>
  );
}
