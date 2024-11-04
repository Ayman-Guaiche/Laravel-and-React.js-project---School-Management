import { Outlet, Link } from "react-router-dom";
import Logo from "../pages/Logo";

export default function Layout() {
  return (
    <>
      {/* Header */}
      <header>
        <div className="flex items-center justify-between bg-gray-800 bg-opacity-90 px-6 md:px-10 py-3 shadow-md">
          {/* Logo */}
          <div className="text-xl text-white font-bold flex items-center space-x-2">
            <Logo />
          </div>
          {/* Navigation Links */}
          <div>
            <ul className="flex space-x-3 text-white font-medium">
              <li className="hover:text-gray-300 transition">
                <Link to={'/'}>Home</Link>
              </li>
              <li className="hover:text-gray-300 transition">
                <Link to={'/login'}>Login</Link>
              </li>
              <li className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-md text-sm hover:bg-gray-200 transition">
                <a href="#">Dark Mode</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </>
  );
}
