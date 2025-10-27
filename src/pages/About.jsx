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
       I am Bidyut Bhakat, a postgraduate student (23MS227) at IISER Kolkata. Having served as the Secretary of the Nature Club, I have first-hand experience in student organization, event logistics, and institutional coordination. I’ve organized bus trips, managed hostel room bookings, and handled administrative permissions and camera repairs — experiences that taught me how the system works and how to make it work better for students.  </p>
      <p>
        More importantly, I’m not part of any group or circle of influence. I’m just a regular student — one who has personally faced the same challenges of room allotment, maintenance delays, and communication gaps that most of us deal with. I understand what it means to feel unheard, and that’s exactly what I’m here to change.

  </p>
      <h3 className="text-2xl font-bold mb-6">Core Values</h3>
<div className="flex justify-center gap-6 flex-wrap">
{['Transparency', 'Compassion', 'Honesty'].map((val) => (
<Card key={val} className="w-56 shadow-md border-blue-200">
<CardContent className="py-6 text-lg font-semibold text-blue-700">{val}</CardContent>
</Card>
    </motion.div>
       
  );
}
