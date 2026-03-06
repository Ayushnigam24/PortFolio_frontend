import { useState, useEffect } from "react"
import axios from "axios"

export default function AdminProjects() {
  const [projects, setProjects] = useState([])
  const [form, setForm] = useState({
    title: "", description: "", image: "", liveLink: "", githubLink: "", techStack: ""
  })

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    const res = await axios.get("http://localhost:5000/api/projects")
    setProjects(res.data)
  }

  const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await axios.post("http://localhost:5000/api/projects", {
      ...form,
      techStack: form.techStack.split(",").map(tag => tag.trim())
    })
    setForm({title: "", description: "", image: "", liveLink: "", githubLink: "", techStack: ""})
    fetchProjects()
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Project</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-8 flex flex-col gap-4">
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} className="border p-2 rounded"/>
        <input type="text" name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 rounded"/>
        <input type="text" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="border p-2 rounded"/>
        <input type="text" name="liveLink" placeholder="Live URL" value={form.liveLink} onChange={handleChange} className="border p-2 rounded"/>
        <input type="text" name="githubLink" placeholder="GitHub URL" value={form.githubLink} onChange={handleChange} className="border p-2 rounded"/>
        <input type="text" name="techStack" placeholder="techStack comma separated" value={form.techStack} onChange={handleChange} className="border p-2 rounded"/>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Add Project</button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Existing Projects</h2>
      <ul>
        {projects.map(p => (
          <li key={p._id} className="bg-white p-4 rounded shadow mb-2 flex justify-between items-center">
            <span>{p.title}</span>
            <button onClick={async () => {
              await axios.delete(`http://localhost:5000/api/projects/${p._id}`)
              fetchProjects()
            }} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}