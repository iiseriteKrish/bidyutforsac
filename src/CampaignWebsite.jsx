import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CampaignWebsite() {
  return (
    <div className="text-center p-10 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Bidyut Bhakat (23MS227)</h1>
      <h2 className="text-xl text-gray-700 mb-8">
        Candidate for General Secretary, SAC (Hostel & Transport) 2025–26
      </h2>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-6">
          I stand for transparency, compassion, and honesty in every action. Together, we can build a fair and open IISER Kolkata where every student’s voice matters.
        </p>
      </motion.div>
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold inline-flex items-center">
        Vote for Integrity <ArrowRight className="ml-2" />
      </button>
    </div>
  )
}
