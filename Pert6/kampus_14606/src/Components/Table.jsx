import React from "react";

function Table({ mahasiswa, onEdit, onHapus }) {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-4">No</th>
          <th className="p-4">NIM</th>
          <th className="p-4">Nama</th>
          <th className="p-4">Action</th>
        </tr>
      </thead>
      <tbody>
        {mahasiswa.map((mhs, index) => (
          <tr key={mhs.nim}>
            <td className="p-4">{index + 1}</td>
            <td className="p-4">{mhs.nim}</td>
            <td className="p-4">{mhs.nama}</td>
            <td className="p-4 flex space-x-2">
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded"
                onClick={() => onEdit(mhs)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => onHapus(mhs.nim)}
              >
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
