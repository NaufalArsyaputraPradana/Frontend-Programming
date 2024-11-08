import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserList = ({ users, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditClick = (user) => {
    onEdit(user);
    navigate("/edit");
  };

  const handleDeleteClick = (userId) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data ini akan dihapus dan tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(userId);
        Swal.fire("Dihapus!", "Pengguna telah dihapus.", "success");
      }
    });
  };

  return (
    <div className="p-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Cari pengguna..."
          className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="min-w-full bg-white shadow rounded overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4">No.</th>
            <th className="py-3 px-4">Nama</th>
            <th className="py-3 px-4">Role</th>
            <th className="py-3 px-4">Email</th>
            <th className="py-3 px-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.role}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4 space-x-2">
                  <Link
                    to={`/user/${user.id}`}
                    className="text-blue-500 hover:underline mr-4"
                  >
                    Lihat Detail
                  </Link>
                  <button
                    onClick={() => handleEditClick(user)}
                    className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(user.id)}
                    className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-3">
                Tidak ada pengguna yang ditemukan.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
