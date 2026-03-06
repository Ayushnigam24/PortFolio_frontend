import { useEffect, useState } from "react"
import axios from "axios"

export default function Education() {
  const [education, setEducation] = useState([])
  const [certifications, setCertifications] = useState([])

  useEffect(() => {
    axios.get("https://portfolio-backend-xmv2.onrender.com/api/education")
      .then(res => setEducation(res.data))
      .catch(err => console.log(err))

    axios.get("https://portfolio-backend-xmv2.onrender.com/api/certifications")
      .then(res => setCertifications(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-dark">Education</h1>
          <p className="mt-3 text-gray-500 max-w-xl">My academic background and professional certifications.</p>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark text-center">Academic Journey</h2>
          <p className="mt-3 text-gray-500 text-center max-w-lg mx-auto">A timeline of my educational milestones.</p>

          <div className="mt-12 max-w-3xl mx-auto relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="flex flex-col gap-10">
              {education.map((edu) => (
                <div key={edu._id} className="relative pl-12">
                  <div className="absolute left-2 top-1.5 w-5 h-5 bg-primary rounded-full border-4 border-white shadow" />
                  <div className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-dark">{edu.title}</h3>
                        <p className="text-sm text-primary font-medium">{edu.college}</p>
                      </div>
                      <span className="text-xs font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                        {edu.session}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-gray-500 leading-relaxed">{edu.description}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs font-medium text-gray-500">Percentage:</span>
                      <span className="text-xs font-semibold text-primary">{edu.percentage}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark text-center">Certifications</h2>
          <p className="mt-3 text-gray-500 text-center max-w-lg mx-auto">Industry-recognized certifications that validate my expertise.</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert._id} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-dark">{cert.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{cert.issuer}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <span className="text-xs text-gray-400">{cert.date}</span>
                      <span className="text-xs text-gray-300">|</span>
                      <span className="text-xs text-gray-400 font-mono">{cert.credentialId}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
