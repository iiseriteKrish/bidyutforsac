import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowRight } from "lucide-react"

export default function CampaignWebsite() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-700 text-white">
        <motion.h1 initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}} className="text-4xl font-bold mb-4">
          Bidyut Bhakat (23MS227)
        </motion.h1>
        <motion.h2 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="text-xl mb-6">
          Candidate for General Secretary, SAC (Hostel & Transport) · 2025–26
        </motion.h2>
        <Button size="lg" className="bg-yellow-400 text-black font-semibold hover:bg-yellow-500">
          Vote for Transparency, Compassion & Honesty
        </Button>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src="/bidyut-photo.jpg"
          alt="Bidyut Bhakat"
          className="rounded-2xl shadow-lg border-4 border-blue-100 object-cover w-full h-96"
          initial={{opacity:0, scale:0.95}}
          animate={{opacity:1, scale:1}}
          transition={{duration:0.6}}
        />
        <div>
          <h3 className="text-3xl font-bold text-blue-800 mb-4">About Me</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            I am <strong>Bidyut Bhakat</strong>, a postgraduate student (23MS227) at IISER Kolkata. Having served as the <strong>Secretary of the Nature Club</strong>, I have first-hand experience in student organization, event logistics, and institutional coordination. I’ve organized bus trips, managed hostel room bookings, and handled administrative permissions and camera repairs — experiences that taught me how the system works and how to make it work better for students.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            More importantly, I’m not part of any group or circle of influence. I’m just a regular student — one who has personally faced the same challenges of room allotment, maintenance delays, and communication gaps that most of us deal with. I understand what it means to feel unheard, and that’s exactly what I’m here to change.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 text-center">
        <h3 className="text-2xl font-bold mb-6">Core Values</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          {['Transparency', 'Compassion', 'Honesty'].map((val) => (
            <Card key={val} className="w-56 shadow-md border-blue-200">
              <CardContent className="py-6 text-lg font-semibold text-blue-700">{val}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold mb-6 text-center text-blue-800">Manifesto Highlights</h3>
        <ScrollArea className="h-[600px] border rounded-lg shadow-sm p-6">
          <h4 className="text-xl font-semibold text-blue-700 mt-6 mb-2">1. Commitment to Transparency</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Public data access for all hostel room details.</li>
            <li>Open publication of meeting minutes and CWH decisions.</li>
            <li>Monthly updates on new hostel construction progress.</li>
            <li>Public decision polls for all key administrative consultations.</li>
          </ul>

          <h4 className="text-xl font-semibold text-blue-700 mt-6 mb-2">2. Protection of Student Rights</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>No forced participation or monetary collection.</li>
            <li>Respect for privacy — no unauthorized room entry.</li>
            <li>Strict cleanliness checks and accountability enforcement.</li>
          </ul>

          <h4 className="text-xl font-semibold text-blue-700 mt-6 mb-2">3. Fair Room Allotment</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Reinstating SAC-led transparent allotment process.</li>
            <li>Real-time room data visibility for all students.</li>
            <li>Alternative arrangements if required (Visitor’s Hostel or Faculty Quarters).</li>
          </ul>

          <h4 className="text-xl font-semibold text-blue-700 mt-6 mb-2">4. Hygiene & Accountability</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Regular hostel hygiene inspections.</li>
            <li>Zero tolerance for tampering with safety materials.</li>
          </ul>

          <h4 className="text-xl font-semibold text-blue-700 mt-6 mb-2">5. Transparent Transport Management</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Fair access to institute buses for all clubs.</li>
            <li>Published fare structure & UPI payments.</li>
            <li>Excursion funds for regular student outings.</li>
          </ul>

          <h4 className="text-xl font-semibold text-blue-700 mt-6 mb-2">6. Reform-Oriented Discipline</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Rehabilitation and counselling instead of punishment.</li>
          </ul>

          <h4 className="text-xl font-semibold text-blue-700 mt-6 mb-2">7. A Different Kind of Leadership</h4>
          <p className="pl-2 italic">Quiet, sincere, and transparent — a leader who listens first and acts with integrity.</p>
        </ScrollArea>
      </section>

      {/* Why Vote for Me Section */}
      <section className="bg-yellow-50 py-16 px-4 text-center">
        <h3 className="text-3xl font-bold text-blue-800 mb-6">Why Vote for Me?</h3>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-4">
          <p>
            Unlike many candidates, I represent the perspective of a <strong>regular student</strong> — someone who understands the real struggles faced by those without strong networks or administrative connections.
          </p>
          <p>
            My leadership in the Nature Club shows I can manage logistics, coordinate with officials, and deliver results responsibly. I know how to <strong>get things done</strong> — from organizing bus trips and arranging accommodations to fixing issues like camera repairs and permissions.
          </p>
          <p>
            I am approachable, responsible, and determined to bridge the gap between students and administration. With me as your representative, <strong>your voice will never be ignored</strong>.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-blue-50 py-16 text-center">
        <motion.h3 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-3xl font-bold mb-4 text-blue-800">
          My Vision
        </motion.h3>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          My dream is to build a campus where no student feels unheard, no issue remains hidden, and no decision is taken without the people it affects. Together, we can create a transparent, compassionate, and fair IISER Kolkata — where every student’s voice matters.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-blue-700 text-white">
        <h3 className="text-2xl font-bold mb-4">Vote for Bidyut Bhakat (23MS227)</h3>
        <p className="mb-6 text-lg">Candidate for General Secretary, SAC (Hostel & Transport), 2025–26</p>
        <Button size="lg" variant="secondary" className="text-blue-700 font-semibold">
          Vote for Integrity <ArrowRight className="ml-2" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2025 Campaign for Bidyut Bhakat · Designed with Transparency in Mind
      </footer>
    </div>
  )
}