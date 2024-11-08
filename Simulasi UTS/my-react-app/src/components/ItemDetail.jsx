import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetail = ({ items }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return (
      <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded">
        <h2 className="text-xl font-semibold mb-4">Item Tidak Ditemukan</h2>
        <p className="text-gray-500">Item dengan ID {id} tidak ditemukan.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Kembali ke Daftar Barang
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-4">Detail Barang</h2>
      <p>
        <strong>ID:</strong> {item.id}
      </p>
      <p>
        <strong>Nama Barang:</strong> {item.name}
      </p>
      <p>
        <strong>Kategori:</strong> {item.category}
      </p>
      <p>
        <strong>Stok:</strong> {item.stock}
      </p>
      <p>
        <strong>Harga:</strong> Rp {item.price.toLocaleString()}
      </p>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Kembali ke Daftar Barang
      </button>
    </div>
  );
};

export default ItemDetail;
