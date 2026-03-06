export default function AdminTopbar() {
  return (
    <header className="bg-white border-b p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-dark">Admin Panel</h1>
      <button
  onClick={() => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    window.location.href = "/login"
  }}
  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
>
  Logout
</button>
    </header>
  )
}