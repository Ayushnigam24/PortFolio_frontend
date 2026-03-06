import { Link } from 'react-router-dom'

const skills = [
  {
    name: 'React',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.592.068-.852.2-1.56.79-1.817 3.858-.732 7.55-3.755 1.278-5.959 3.2-5.959 4.916 0 1.738 2.278 3.693 6.1 4.975-.895 3.45-.608 6.31.76 7.103.254.142.54.2.856.2 1.37 0 3.156-.98 4.952-2.668 1.785 1.67 3.554 2.628 4.91 2.628.32 0 .607-.06.863-.2 1.577-.82 1.842-3.94.723-7.478 3.648-1.273 5.853-3.194 5.853-4.914 0-1.722-2.234-3.667-5.98-4.95.892-3.395.6-6.262-.77-7.084a1.622 1.622 0 0 0-.854-.2z" />
      </svg>
    ),
    description: 'Building dynamic UIs with modern React patterns',
  },
  {
    name: 'Node.js',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.921a.28.28 0 0 0-.137-.242l-8.791-5.072a.278.278 0 0 0-.271 0L3.075 6.68a.284.284 0 0 0-.139.241v10.15a.27.27 0 0 0 .138.236l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551l-2.31-1.33A1.857 1.857 0 0 1 1.354 17.1V6.921c0-.681.366-1.316.962-1.656l8.795-5.082a1.937 1.937 0 0 1 1.787 0l8.795 5.082c.596.34.962.975.962 1.656v10.15c0 .68-.366 1.314-.962 1.655l-8.795 5.078a1.833 1.833 0 0 1-.9.246z" />
      </svg>
    ),
    description: 'Server-side JavaScript for scalable backends',
  },
  {
    name: 'MongoDB',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.214c.058-.003.164-.527.357-1.465.125-.603.17-1.166.172-1.174.013-.14-.036-.27-.143-.372a6.019 6.019 0 0 1-1.69-4.094c.009-3.18 1.706-5.2 2.373-5.34z" />
      </svg>
    ),
    description: 'NoSQL database for flexible data storage',
  },
  {
    name: 'Express.js',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.042-3.868-2.107-6.443-5.07-6.405-2.97.04-4.476 2.58-4.584 6.405z" />
      </svg>
    ),
    description: 'Minimal web framework for Node.js APIs',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 opacity-60" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="flex flex-col items-center text-center">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary rounded-full text-sm font-medium mb-6">
              Available for freelance work
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark leading-tight">
              Hi, I'm{' '}
              <span className="text-primary">Ayush Nigam</span>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-gray-500">
              MERN Stack Developer
            </p>
            <p className="mt-4 max-w-xl text-gray-500 leading-relaxed">
              I build modern, responsive, and performant web applications using MongoDB, Express.js, React, and Node.js. Let's bring your ideas to life.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/projects"
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
              >
                View My Work
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hello%20Ayush%2C%20I%20want%20to%20hire%20you%20for%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-200 text-dark font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Core Technologies</h2>
            <p className="mt-3 text-gray-500 max-w-lg mx-auto">
              The MERN stack is my bread and butter. Here's what I work with daily.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group p-6 bg-white border border-gray-100 rounded-xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {skill.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-dark">{skill.name}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark">
            Let's Build Something Great Together
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-8 px-8 py-3.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
