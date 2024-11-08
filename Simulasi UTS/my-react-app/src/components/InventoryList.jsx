import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const InventoryList = ({ items, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditClick = (item) => {
    onEdit(item);
    navigate("/edit");
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Item ini akan dihapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(id);
        Swal.fire("Dihapus!", "Item berhasil dihapus.", "success");
      }
    });
  };

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Cari barang..."
        className="border p-2 mb-4 w-full rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">No.</th>
            <th className="py-2 px-4 border-b">Nama Barang</th>
            <th className="py-2 px-4 border-b">Kategori</th>
            <th className="py-2 px-4 border-b">Stok</th>
            <th className="py-2 px-4 border-b">Harga</th>
            <th className="py-2 px-4 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length ? (
            filteredItems.map((item, index) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.category}</td>
                <td className="py-2 px-4 border-b text-center">{item.stock}</td>
                <td className="py-2 px-4 border-b text-right">
                  Rp {item.price.toLocaleString()}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <Link
                    to={`/item/${item.id}`}
                    className="text-blue-500 hover:underline mr-4"
                  >
                    Lihat Detail
                  </Link>
                  <button
                    onClick={() => handleEditClick(item)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mx-1"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-4 text-center text-gray-500">
                Tidak ada data barang yang ditemukan.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
