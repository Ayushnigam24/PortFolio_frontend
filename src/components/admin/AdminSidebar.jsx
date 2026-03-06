import { NavLink } from "react-router-dom"

export default function AdminSidebar() {
  const links = [
    { name: "Dashboard", path: "/admin" },
    { name: "Projects", path: "/admin/projects" },
    { name: "Education", path: "/admin/education" },
    { name: "Certifications", path: "/admin/certifications" },
    { name: "Messages", path: "/admin/messages" },
  ]

  return (
    <aside className="w-64 bg-white border-r p-6 flex flex-col">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-2">
        {links.map(link => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "bg-primary text-white px-4 py-2 rounded"
                : "text-gray-700 px-4 py-2 rounded hover:bg-gray-100"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}