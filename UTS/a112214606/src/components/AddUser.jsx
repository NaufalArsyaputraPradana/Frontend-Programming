import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = ({ onSave, user }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [role, setRole] = useState(user ? user.role : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !role || !email) {
      alert("Semua informasi pengguna harus diisi!");
      return;
    }
    const newUser = { id: user ? user.id : Date.now(), name, role, email };
    onSave(newUser);
    navigate("/users");
  };

  return (
    <div className="p-8 max-w-xl mx-auto bg-white shadow rounded mt-12">
      <h2 className="text-3xl font-semibold mb-6">
        {user ? "Edit Pengguna" : "Tambah Pengguna"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-1">Nama Pengguna</label>
          <input
            type="text"
            className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Role</label>
          <input
            type="text"
            className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-600 transition w-full"
        >
          {user ? "Simpan Perubahan" : "Tambah Pengguna"}
        </button>
      </form>
    </div>
  );
};

export default AddUser;
