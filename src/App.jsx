import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6 shadow-lg">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold">Bidyut Bhakat (23MS227)</h1>
          <h2 className="text-lg mt-1">
            Candidate for General Secretary, SAC (Hostel & Transport), 2025–26
          </h2>
          <p className="mt-3 text-blue-100">
            I stand for transparency, compassion, and honesty in every action. <br />
            Together, we can build a fair and open IISER Kolkata where every student’s voice matters.
          </p>
          <p className="mt-2 font-semibold text-yellow-300">Vote for Integrity ✦ Vote for Bidyut</p>
        </div>
      </header>

      {/* Manifesto Section */}
      <main className="max-w-4xl mx-auto px-6 py-10 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            1. Commitment to Transparency
          </h2>
          <p>
            I will ensure complete transparency in all hostel-related processes. 
            Every meeting minute, decision, and occupancy detail will be published 
            openly on a student-accessible website. Students will also be able 
            to attend meetings and participate through public polls.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            2. Protection of Student Rights & Dignity
          </h2>
          <p>
            No student will be forced into unwanted collections or activities. 
            Privacy and consent will be respected. Cleanliness will be personally inspected 
            and accountability enforced for maintenance lapses.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            3. Restoring Fairness in Room Allotment
          </h2>
          <p>
            Transparency and fairness will return to hostel allotment. 
            I will revert decisions that allowed external handling, 
            ensure all data is public, and guarantee no student suffers due to bias or delay.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            4. Hygiene, Cleanliness, and Accountability
          </h2>
          <p>
            Hygiene is essential for health and safety. I will enforce high standards, 
            and any tampering or theft of sanitary items will invite strict action.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            5. Transparent Transport Management
          </h2>
          <p>
            I will establish a transparent, student-friendly bus booking system, 
            publish fare details, and introduce UPI payments. I will also initiate 
            regular, affordable excursions for recreation and learning.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            6. Reform-Oriented Discipline
          </h2>
          <p>
            Instead of punishing, I’ll promote counselling and rehabilitation 
            for students struggling with smoking or intoxication. Reform, not exclusion, 
            should be our guiding principle.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            7. A Different Kind of Leadership
          </h2>
          <p>
            I believe in quiet, sincere, and steady leadership — listening first, 
            then acting decisively for every student’s benefit.
          </p>
        </section>

        {/* About Me Section */}
        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            About Me
          </h2>
          <p>
            As Secretary of the Nature Club, I have organized bus trips, arranged rooms, 
            handled camera repairs, and coordinated with administration. 
            I know how to get work done — responsibly and respectfully. 
            But above all, I’m just like any other student: I’ve faced the same difficulties 
            in room allotment and daily hostel life, and I understand what needs to change.
          </p>
        </section>

        {/* Why Vote for Me Section */}
        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Why Vote for Me
          </h2>
          <p>
            Because I represent every ordinary student — not a group, not a lobby. 
            I will bring fairness, transparency, and compassion to student governance.
          </p>
        </section>

        {/* Vision Section */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            My Vision
          </h2>
          <p>
            My dream is to build a campus where no student feels unheard, 
            where accountability is natural, and where every action reflects fairness, 
            care, and transparency.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6">
        <p className="text-sm">
          © 2025 Bidyut Bhakat | Candidate for General Secretary, SAC (Hostel & Transport)
        </p>
        <p className="mt-1 text-xs text-blue-200">
          Built with integrity • Powered by React + Tailwind
        </p>
      </footer>
    </div>
  );
}
