import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddItem = ({ onSave, item }) => {
  const [name, setName] = useState(item ? item.name : "");
  const [category, setCategory] = useState(item ? item.category : "");
  const [stock, setStock] = useState(item ? item.stock : "");
  const [price, setPrice] = useState(item ? item.price : "");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !stock || !price) {
      alert("Semua informasi barang harus diisi!");
      return;
    }
    const newItem = {
      id: item ? item.id : Date.now(),
      name,
      category,
      stock: Number(stock),
      price: Number(price),
    };
    onSave(newItem);
    navigate("/inventory");
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">
        {item ? "Edit Barang" : "Tambah Barang"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Nama Barang</label>
          <input
            type="text"
            className="border p-2 w-full rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Kategori</label>
          <input
            type="text"
            className="border p-2 w-full rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Stok</label>
          <input
            type="number"
            className="border p-2 w-full rounded"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Harga</label>
          <input
            type="number"
            className="border p-2 w-full rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {item ? "Simpan Perubahan" : "Tambah Barang"}
        </button>
      </form>
    </div>
  );
};

export default AddItem;
