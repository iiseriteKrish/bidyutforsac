import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="space-y-12">
      {/* About Section */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-green-700">About Me</h2>
        <p>
          As Secretary of the Nature Club, I’ve organized bus trips, managed bookings, handled camera repairs,
          and collaborated directly with administration. These experiences taught me how the system works — 
          and how to make it work better.
        </p>
        <p>
          I’m not from any group or lobby. I’m a regular student who has faced the same problems you do —
          from room allotment issues to lack of transparency. I want to fix those from within.
        </p>
      </motion.div>

      {/* Core Values */}
      <section className="py-12 text-center">
        <h3 className="text-2xl font-bold mb-6">Core Values</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          {["Transparency", "Compassion", "Honesty"].map((val) => (
            <Card key={val} className="w-56 shadow-md border-blue-200">
              <CardContent className="py-6 text-lg font-semibold text-blue-700">
                {val}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
