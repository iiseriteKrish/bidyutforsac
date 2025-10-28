import React from "react";

export default function Manifesto() {
  const points = [
    [
      "Commitment to Transparency",
      [
        "Open publication of all hostel and transport records, meeting minutes, and allocations.",
        "Open publication of meeting minutes and CWH decisions.",
        "Monthly updates on new hostel construction progress.",
        "Public decision polls for all key administrative consultations."
      ],
    ],
    [
      "Protection of Student Rights",
      [
        "No late night room visits for monetary collection.",
        "Respect for privacy — no unauthorized room entry.",
        "Strict cleanliness checks and accountability enforcements."
      ],
    ],
    [
      "Fair Room Allotment",
      ["Reinstating SAC-led transparent allotment process.",
       "Real-time room data visibility for all students.",
       "Alternative arrangements if required (Visitor’s Hostel or Faculty Quarters)."
      ],
    ],
    [
      "Hygiene & Accountability",
      ["Renovation of bathrooms and washrooms in hostels","Regular hostel hygiene inspections.",
       "Immediate Pest Control of all hostel buildings",
      "Zero tolerance for tampering/diluting with handwash and other amenities."],
    ],
    [
      "Transparent Transport",
      [
        "Fair access to institute buses for all clubs.",
        "Published fare structure & UPI payments.",
        "Excursion funds for regular student outings."
      ],
    ],
    [
      "Reform-Oriented Discipline",
      ["Counselling instead of punishment — fairness over fear."],
    ],
  ];

  return (
    <div className="space-y-10 py-10 px-6 text-gray-800">
      <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
        Manifesto Highlights
      </h2>

      {/* Manifesto Points */}
      <div className="space-y-8">
        {points.map(([title, desc], i) => (
          <div key={i} className="border-l-4 border-blue-400 pl-4">
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              {i + 1}. {title}
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {desc.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Download Button */}
      <div className="text-center pt-10">
        <a
          href="https://drive.google.com/file/d/1YTDC5USYNKCrKEZDl231_pwbnLTMTQZg/view?usp=drive_link" // <-- replace this with your actual manifesto file path
          download
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all"
        >
          Download Detailed Manifesto
        </a>
      </div>
    </div>
  );
}
