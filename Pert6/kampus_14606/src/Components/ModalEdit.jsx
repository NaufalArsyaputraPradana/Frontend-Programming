import { useState } from "react";

function ModalEdit({ mahasiswa, onEdit, onClose }) {
  const [nama, setNama] = useState(mahasiswa.nama);
  const [nim, setNim] = useState(mahasiswa.nim);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(mahasiswa.nim, nama, nim); // Mengirim nim lama, nama baru, dan nim baru
    setNama("");
    setNim("");
  };

  const handleClear = () => {
    setNama("");
    setNim("");
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow w-1/3 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Edit Mahasiswa</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nama" className="block text-gray-700">
              Nama:
            </label>
            <input
              type="text"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nim" className="block text-gray-700">
              NIM:
            </label>
            <input
              type="text"
              id="nim"
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalEdit;
