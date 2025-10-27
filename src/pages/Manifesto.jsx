import React from "react";

export default function Manifesto() {
  const points = [
    ["Commitment to Transparency", "Open publication of all hostel and transport records, meeting minutes, and allocations."],
    ["Protection of Student Rights", "No forced collections; dignity and consent come first.", "ugbjjwv3rogbuiwcviebhw"],
    ["Fair Room Allotment", "Allotment lists made public and verifiable by students."],
    ["Hygiene & Accountability", "Strict inspection and immediate maintenance action."],
    ["Transparent Transport", "UPI payments, clear schedules, and affordable student excursions."],
    ["Reform-Oriented Discipline", "Counselling instead of punishment — fairness over fear."],
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold text-blue-800 mb-6">My Manifesto</h2>
      {points.map(([title, desc], i) => (
        <div key={i}>
          <h3 className="text-xl font-bold text-blue-700 mb-2">{i + 1}. {title}</h3>
          <p className="text-gray-700">{desc}</p>
        </div>
      ))}
    </div>
  );
}
