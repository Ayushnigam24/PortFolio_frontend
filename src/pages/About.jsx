const skills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'MongoDB', level: 80 },
  { name: 'Express.js', level: 85 },
  { name: 'JavaScript', level: 92 },
  { name: 'Tailwind CSS', level: 88 },
]

const experience = [
  {
    role: 'Mern Stack Developer Intern',
    company: 'Techpile technology pvt Ltd',
    period: 'june 2025 - July 2025',
    description:
      'Learn and bulid Mern stack Projects with Rest API and gained hand on Experience',
  },
  {
    role: 'Frontend Developer',
    company: 'SyntecxHub',
    period: 'Jan 2026 - Feb 2026',
    description:
      'Build and Learn frontend UI design and basic javascript for frontend',
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-dark">About Me</h1>
          <p className="mt-3 text-gray-500 max-w-xl">
            Get to know more about my background, skills, and professional journey.
          </p>
        </div>
      </section>

      {/* Professional Intro */}
     {/* Professional Intro */}
<section className="py-16">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

      {/* Left Content */}
      <div className="lg:col-span-1">
        <h2 className="text-3xl font-bold text-dark">
          A Passionate <span className="text-primary">Developer</span>
        </h2>
        <p className="mt-4 text-gray-500 leading-relaxed">
          With over 2 years of experience in web development, I specialize in building full-stack applications using the MERN stack.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail Oriented'].map(
            (trait) => (
              <span
                key={trait}
                className="px-4 py-1.5 bg-primary-50 text-primary text-sm font-medium rounded-full"
              >
                {trait}
              </span>
            )
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="lg:col-span-1 bg-gray-50 rounded-2xl p-8 border border-gray-100">
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: 'Years Experience', value: '2+' },
            { label: 'Projects Completed', value: '10+' },
            { label: 'Happy Clients', value: '8+' },
            { label: 'Technologies', value: '5+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Right Side */}
      <div className="justify-end">
        <img
          src='avsc3.png'
          alt="About"
          className="w-72 h-72 object-cover rounded-2xl shadow-xl"
        />
      </div>

    </div>

  </div>
</section>
      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark text-center">Technical Skills</h2>
          <p className="mt-3 text-gray-500 text-center max-w-lg mx-auto">
            Proficiency levels across my core technology stack.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-dark">{skill.name}</span>
                  <span className="text-sm font-medium text-primary">{skill.level}%</span>
                </div>
                <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark text-center">Experience</h2>
          <p className="mt-3 text-gray-500 text-center max-w-lg mx-auto">
            My professional journey in the tech industry.
          </p>

          <div className="mt-10 max-w-3xl mx-auto relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

            <div className="flex flex-col gap-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-2 top-1.5 w-5 h-5 bg-primary rounded-full border-4 border-white shadow" />

                  <div className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <span className="text-sm font-medium text-primary">{exp.period}</span>
                    <h3 className="mt-1 text-lg font-semibold text-dark">{exp.role}</h3>
                    <p className="text-sm text-gray-500">{exp.company}</p>
                    <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}