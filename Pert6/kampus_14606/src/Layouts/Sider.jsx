import React from "react";

function Sider() {
  return (
    <aside className="w-64 bg-blue-900 text-white flex flex-col">
      <div className="p-4">
        <h2 className="text-2xl font-bold p-4">Admin Panel</h2>
        <nav className="flex-1 p-4 space-y-4">
          <ul>
            <li className="block py-2 px-4 rounded hover:bg-blue-700">
              <a href="#">Dashboard</a>
            </li>
            <li className="block py-2 px-4 rounded hover:bg-blue-700">
              <a href="#">Mahasiswa</a>
            </li>
            <li className="block py-2 px-4 rounded hover:bg-blue-700">
              <a href="#">Setting</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sider;
