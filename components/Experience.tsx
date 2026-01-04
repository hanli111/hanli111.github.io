'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Isuzu',
    position: 'Software Engineer',
    period: 'Jan. 2026 - Present',
    location: 'Ann Arbor, MI',
    description: [
      'Built an AI-driven fleet optimization system improving delivery efficiency by 18% by designing modular Python services for data ingestion, simulation, and routing orchestration.',
      'Reduced routing failures by 25% in simulation by implementing constraint-aware planning logic for delivery windows, charging logistics, and vehicle limits.',
      'Extended battery range by 12% by modeling BEV energy consumption from speed profiles and elevation gain.',
      'Enabled real-time route adaptation, measured by successful mid-route replanning, by fusing live vehicle state, traffic, and weather inputs into an agent-based decision loop.'
    ],
  },
  {
    company: 'Sideline',
    position: 'Software Development Engineer Intern',
    period: 'May. 2025 - Aug. 2025',
    location: 'Chicago, IL',
    description: [
      'Developed the Post Boosting feature, resulting in a 20% increase in user engagement over a 3-month period.',
      'Built reusable iOS UI components (boost icons, animated overlays, modals), reducing boost-related development time and achieving UI load times under 250ms.',
      'Implemented key API endpoints for post boosting, ensuring API calls complete within 2 seconds and accelerating front-end development by 40%.',
      'Leveraged CI/CD pipelines, Git, and monitoring tools (Cocoa Sentry) to maintain service availability and ensure production readiness.',
    ],
  },
  {
    company: 'VOID Tech',
    position: 'Software Engineer',
    period: 'Jan. 2025 - Dec. 2025',
    location: 'Ann Arbor, MI',
    description: [
      'Managed 18+ issues across sprints, fixing 5+ production bugs and shipping 3 new features that improved user adoption by 15%.',
      'Built 3 SwiftUI components and 2 ScrollView screens, reducing user onboarding friction and improving navigation completion rates by 25%.',
      'Coordinated with 4 developers and 2 designers, ensuring 100% of sprint deliverables were shipped on time.',
    ],
  },
  {
    company: 'Michigan Hackers',
    position: 'iOS Developer',
    period: 'Oct. 2024 - Apr. 2025',
    location: 'Ann Arbor, MI',
    description: [
      'Developed an interview prep app adopted by 100+ UM students within the first semester.',
      'Implemented personalized question history and advanced filters, cutting average search time by 30%.',
      'Led backend integration with Python to support 200+ daily queries with under 1s latency.',
      'Collaborated with 10 iOS devs and 4 designers, achieving a 95% feature completion rate before demo.',
    ],
  },
]

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in software engineering
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {exp.company}
                  </h3>
                  <p className="text-xl text-primary-600 font-semibold mt-1">
                    {exp.position}
                  </p>
                  <p className="text-gray-500 mt-1">{exp.location}</p>
                </div>
                <p className="text-gray-600 font-medium mt-2 md:mt-0">
                  {exp.period}
                </p>
              </div>
              <ul className="space-y-3 mt-4">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

