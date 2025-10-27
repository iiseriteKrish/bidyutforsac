import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold text-green-700">About Me</h2>
      <p>
        As Secretary of the Nature Club, I’ve organized bus trips, managed bookings, handled camera repairs,
        and collaborated directly with administration. These experiences taught me how the system works — and how to make it work better.
      </p>
      <p>
        I’m not from any group or lobby. I’m a regular student who has faced the same problems you do —
        from room allotment issues to lack of transparency. I want to fix those from within.
      </p>
    </motion.div>
  );
}
