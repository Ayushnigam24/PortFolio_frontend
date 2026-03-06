import { useState, useEffect } from "react"
import axios from "axios"

export default function AdminCertifications() {
  const [form, setForm] = useState({
    name: "",
    issuer: "",
    date: "",
    credentialId: ""
  })
  const [certifications, setCertifications] = useState([])
  const [message, setMessage] = useState("")

  const token = localStorage.getItem("token")

  // Fetch certifications
  const fetchCertifications = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/certifications", {
        headers: { Authorization: `Bearer ${token}` }
      })
      setCertifications(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchCertifications()
  }, [])

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:5000/api/certifications", form, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setMessage("Certification added successfully!")
      setForm({ name: "", issuer: "", date: "", credentialId: "" })
      fetchCertifications()
    } catch (err) {
      console.log(err)
      setMessage("Failed to add certification")
    }
  }

  const handleDelete = async id => {
    if (!window.confirm("Are you sure you want to delete this certification?")) return
    try {
      await axios.delete(`http://localhost:5000/api/certifications/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setMessage("Certification deleted successfully!")
      fetchCertifications()
    } catch (err) {
      console.log(err)
      setMessage("Failed to delete certification")
    }
  }

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Add Certification</h2>

      {message && <p className="mb-4 text-green-600">{message}</p>}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md flex flex-col gap-4 max-w-md">
        <input type="text" name="name" placeholder="Certification Name" value={form.name} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="issuer" placeholder="Issuer / Organization" value={form.issuer} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="date" placeholder="Date (e.g. July 2025)" value={form.date} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="credentialId" placeholder="Credential ID" value={form.credentialId} onChange={handleChange} className="border p-2 rounded" />

        <button type="submit" className="bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors">
          Add Certification
        </button>
      </form>

      {/* Existing Certifications List */}
      <div className="mt-10 max-w-md">
        <h3 className="text-xl font-semibold mb-4">Existing Certifications</h3>
        <ul className="flex flex-col gap-3">
          {certifications.map(cert => (
            <li key={cert._id} className="bg-white p-4 rounded shadow-sm border border-gray-100 flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.issuer} | {cert.date}</p>
                <p className="text-xs text-gray-400">Credential ID: {cert.credentialId}</p>
              </div>
              <button
                onClick={() => handleDelete(cert._id)}
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