import { Outlet } from "react-router-dom";


export default function Test() {
  return (
    <>
          <header>
              <div
                  className="items-center justify-between flex bg-gray-800 bg-opacity-90 px-12 py-4 mb-4 mx-auto shadow-2xl">
                  <div className="text-2xl text-white font-semibold inline-flex items-center">
                      <img src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" className="w-16 mr-4" alt="logo-img" />
                      <span className="text-xl font-semibold">School Management</span>
                  </div>
                  <div>
                    <ul className="flex text-white">
                        <li className="ml-5 px-2 py-1"><a href="#">Home page</a></li>
                        <li className="ml-5 px-2 py-1"><a href="#">Login</a></li>
                        <li className="ml-5 px-2 py-1"><a href="#">Register</a></li>
                        <li className="ml-5 px-2 py-1"><a href="#">Users</a></li>
                        <li className="ml-5 px-3 py-1 rounded font-semibold bg-gray-100 text-gray-800"><a href="">DARK MODE</a></li>
                    </ul>
                  </div>
              </div>
          </header>
          <main>
              <Outlet/>
          </main>
    </>
  )
}


