'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Park Swift (Parking Reservation App)',
    description:
      'Integrated Firebase + Google Maps to handle 500+ location lookups daily with under 2s response time. Built 4 SwiftUI UI components (calendar, search bar, navigation, picker) that reduced booking time by 35%. Coordinated release to a closed beta with 30+ student testers, achieving 80% successful reservation completion.',
    tech: 'React Native, Google Maps API',
    period: 'Jan. 2025 - Dec. 2025',
  },
  {
    title: 'BlueHire (Interview Prep App)',
    description:
      'Designed custom UI and search features, reducing average query time by 25% for interview questions. Supported 1,000+ question entries in backend, with Python handling 99% of requests under 500ms. Deployed collaborative forum where 50+ students shared interview solutions within first month of release.',
    tech: 'SwiftUI / UIKit, Python',
    period: 'Oct. 2024 - Apr. 2025',
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-white"
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
            Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my technical projects and contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-100 rounded-full">
                  {project.tech}
                </span>
                {project.period && (
                  <span className="inline-block px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full">
                    {project.period}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

