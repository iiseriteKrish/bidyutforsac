import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"; // ✅ import added (for Core Values cards)

export default function About() {
  return (
    <div>
      {/* About Section */}
      <section className="max-w-5xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src="/bidyut-photo.jpg"
          alt="Bidyut Bhakat"
          className="rounded-2xl shadow-lg border-4 border-blue-100 object-cover w-full h-96"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <div>
          <h3 className="text-3xl font-bold text-blue-800 mb-4">About Me</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            I am <strong>Bidyut Bhakat</strong>, a postgraduate student (23MS227) at IISER Kolkata. Having
            served as the <strong>Secretary of the Nature Club</strong>, I have first-hand experience in
            student organization, event logistics, and institutional coordination. I’ve organized bus trips,
            managed hostel room bookings, and handled administrative permissions and camera repairs —
            experiences that taught me how the system works and how to make it work better for students.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            More importantly, I’m not part of any group or circle of influence. I’m just a regular student —
            one who has personally faced the same challenges of room allotment, maintenance delays, and
            communication gaps that most of us deal with. I understand what it means to feel unheard, and
            that’s exactly what I’m here to change.
          </p>
        </div>
      </section>

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
