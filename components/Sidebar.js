import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4 space-y-2">
      <nav className="space-y-1">
        <Link href="/" className="block py-2 px-3 rounded hover:bg-gray-700">Dashboard</Link>
        <Link href="/tools" className="block py-2 px-3 rounded hover:bg-gray-700">Tools</Link>
        <Link href="/companies" className="block py-2 px-3 rounded hover:bg-gray-700">Companies</Link>
        <div>
          <p className="font-semibold mt-4 mb-1">Outlet Hub</p>
          <Link href="/outlets/add" className="block py-2 px-3 rounded hover:bg-gray-700">Add Outlet</Link>
          <Link href="/outlets" className="block py-2 px-3 rounded hover:bg-gray-700">List Outlet</Link>
        </div>
        <div>
          <p className="font-semibold mt-4 mb-1">Other</p>
          <Link href="/profile" className="block py-2 px-3 rounded hover:bg-gray-700">Profile Information</Link>
          <Link href="/change-password" className="block py-2 px-3 rounded hover:bg-gray-700">Change Password</Link>
          <Link href="/logout" className="block py-2 px-3 rounded hover:bg-gray-700">Logout</Link>
        </div>
      </nav>
    </aside>
  )
}
