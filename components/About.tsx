'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'Swift / SwiftUI', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'JavaScript/TypeScript', level: 85 },
  { name: 'React / Next.js', level: 85 },
  { name: 'C++', level: 80 },
  { name: 'Java', level: 80 },
  { name: 'C', level: 75 },
  { name: 'React Native', level: 75 },
  { name: 'Node.js', level: 75 },
  { name: 'SQL', level: 70 },
]

const About = () => {
  return (
    <section
      id="about"
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
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm currently interning at IBM as a Software Engineer on the z/Architecture
            team, building scalable applications and improving user experiences.
            I'm also pursuing my Bachelor's degree in Computer Science at the University of 
            Michigan. Please reach out if you have any questions!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href="mailto:hanli243023@gmail.com"
                  className="text-primary-600 hover:underline"
                >
                  hanli243023@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">LinkedIn:</span>{' '}
                <a
                  href="https://linkedin.com/in/hanli111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  linkedin.com/in/hanli111
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{' '}
                <a
                  href="tel:3129981665"
                  className="text-primary-600 hover:underline"
                >
                  312-998-1665
                </a>
              </p>
              <p>
                <span className="font-semibold">Github:</span>{' '}
                <a
                  href="https://github.com/hanli111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  github.com/hanli111
                </a>
              </p>
              <p>
                <span className="font-semibold">Education:</span> University of Michigan, College of Engineering
              </p>
              <p>
                <span className="font-semibold">Degree:</span> B.S.E. in Computer Science
              </p>
              <p>
                <span className="font-semibold">GPA:</span> 3.7/4.0
              </p>
              <p>
                <span className="font-semibold">Location:</span> Ann Arbor, MI
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-primary-600 h-2.5 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Education</h3>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="text-primary-600 font-semibold">
                    University of Michigan
                  </p>
                  <p className="text-gray-600">Ann Arbor, MI • Dec 2027</p>
                  <p className="text-gray-600 mt-1">GPA: 3.7/4.0</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2 font-semibold">
                Relevant Coursework:
              </p>
              <div className="grid md:grid-cols-2 gap-2 text-gray-600">
                <p>• Operating Systems</p>
                <p>• Machine Learning</p>
                <p>• Computer Architecture</p>
                <p>• Data Structures and Algorithms</p>
                <p>• Discrete Mathematics</p>
                <p>• Applied Linear Algebra</p>
              </div>
              <p className="text-gray-700 mb-2 mt-4 font-semibold">
                Organizations:
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded-full">CodePath</span>
                <span className="px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded-full">Michigan Hackers</span>
                <span className="px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded-full">VOID Tech</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C++', 'C', 'Assembly', 'Java', 'JavaScript/TypeScript', 'Swift', 'SQL', 'HTML', 'CSS'].map((lang) => (
                  <span key={lang} className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Frameworks & Libraries</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'Angular', '.NET', 'Spark', 'PyTorch', 'React Native', 'Expo', 'Tailwind CSS'].map((framework) => (
                  <span key={framework} className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
                    {framework}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Developer Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Xcode', 'VS Code', 'Firebase', 'Docker', 'AWS'].map((tool) => (
                  <span key={tool} className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

