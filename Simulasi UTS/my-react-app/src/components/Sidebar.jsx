import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="bg-blue-600 text-white w-64 h-screen p-6">
    <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
    <nav>
      <Link to="/dashboard" className="block py-2 px-4 rounded hover:bg-blue-600">Dashboard</Link>
      <Link to="/inventory" className="block py-2 px-4 rounded hover:bg-blue-600">Inventory List</Link>
      <Link to="/add" className="block py-2 px-4 rounded hover:bg-blue-600">Tambah Barang</Link>
    </nav>
  </div>
);

export default Sidebar;
