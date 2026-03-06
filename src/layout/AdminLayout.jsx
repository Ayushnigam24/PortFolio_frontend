import { Outlet } from "react-router-dom"
import AdminSidebar from "../components/admin/AdminSidebar"
import AdminTopbar from "../components/admin/AdminTopbar"

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminTopbar />
        <main className="p-6 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}