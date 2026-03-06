import { useState, useEffect } from "react"
import axios from "axios"

export default function AdminEducation() {
  const [form, setForm] = useState({
    title: "",
    college: "",
    session: "",
    percentage: "",
    description: ""
  })
  const [educations, setEducations] = useState([])
  const [message, setMessage] = useState("")

  const token = localStorage.getItem("token") // JWT from login

  // Fetch all education
  const fetchEducation = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/education", {
        headers: { Authorization: `Bearer ${token}` }
      })
      setEducations(res.data)
    } catch (err) {
      console.log(err)
      setMessage("Failed to fetch education")
    }
  }

  useEffect(() => {
    fetchEducation()
  }, [])

  // Handle form changes
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  // Submit new education
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:5000/api/education", form, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setMessage("Education added successfully!")
      setForm({ title: "", college: "", session: "", percentage: "", description: "" })
      fetchEducation()
    } catch (err) {
      console.log(err)
      setMessage(err.response?.data?.message || "Failed to add education")
    }
  }

  // Delete education
  const handleDelete = async id => {
    if (!window.confirm("Are you sure you want to delete this education?")) return
    try {
      await axios.delete(`http://localhost:5000/api/education/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setMessage("Education deleted successfully!")
      fetchEducation()
    } catch (err) {
      console.log(err)
      setMessage("Failed to delete education")
    }
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Add Education</h2>

      {message && <p className="mb-4 text-green-600">{message}</p>}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md flex flex-col gap-4 max-w-md">
        <input type="text" name="title" placeholder="Degree / Title" value={form.title} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="college" placeholder="College / Institution" value={form.college} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="session" placeholder="Session / Period (e.g. 2022-2025)" value={form.session} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="percentage" placeholder="Percentage / GPA" value={form.percentage} onChange={handleChange} className="border p-2 rounded" />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 rounded" rows={3} />

        <button type="submit" className="bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors">
          Add Education
        </button>
      </form>

      {/* Existing Education List */}
      <div className="mt-10 max-w-md">
        <h3 className="text-xl font-semibold mb-4">Existing Education</h3>
        <ul className="flex flex-col gap-3">
          {educations.map(edu => (
            <li key={edu._id} className="bg-white p-4 rounded shadow-sm border border-gray-100 flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{edu.title}</h4>
                <p className="text-sm text-gray-600">{edu.college} | {edu.session}</p>
                <p className="text-sm text-gray-500">{edu.description}</p>
                <p className="text-xs text-gray-400">Percentage/GPA: {edu.percentage}</p>
              </div>
              <button
                onClick={() => handleDelete(edu._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors text-xs"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}