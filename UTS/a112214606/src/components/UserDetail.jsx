import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserDetail = ({ users }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return (
      <p className="text-center text-red-500">Pengguna tidak ditemukan.</p>
    );
  }

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-4">Detail Pengguna</h2>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Nama:</strong> {user.name}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Kembali ke Daftar Pengguna
      </button>
    </div>
  );
};

export default UserDetail;
