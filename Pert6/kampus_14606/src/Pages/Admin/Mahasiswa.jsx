import React, { useState } from "react";
import Table from "../../Components/Table";
import ModalTambah from "../../Components/ModalTambah";
import ModalEdit from "../../Components/ModalEdit";
import Swal from "sweetalert2";

function Mahasiswa() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [isModalTambahOpen, setIsModalTambahOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [currentMahasiswa, setCurrentMahasiswa] = useState({});


  const handleTambah = (nama, nim) => {
    setMahasiswa([...mahasiswa, { nama, nim }]);
    setIsModalTambahOpen(false);
  };

  const handleEdit = (nimLama, namaBaru, nimBaru) => {
    setMahasiswa(
      mahasiswa.map((mhs) =>
        mhs.nim === nimLama ? { ...mhs, nama: namaBaru, nim: nimBaru } : mhs
      )
    );
    setIsModalEditOpen(false);
  };

  const handleHapus = (nim) => {
    Swal.fire({
      title: "Apakah Anda Yakin?",
      text: "Data yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        setMahasiswa(mahasiswa.filter((mhs) => mhs.nim !== nim));
        Swal.fire("Terhapus!", "Data mahasiswa telah dihapus.", "success");
      }
    });
  };

  return (
    <main className="flex-1 p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">List Mahasiswa</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setIsModalTambahOpen(true)}
        >
          Tambah
        </button>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <Table
          mahasiswa={mahasiswa}
          onEdit={(mhs) => {
            setCurrentMahasiswa(mhs);
            setIsModalEditOpen(true);
          }}
          onHapus={handleHapus}
        />
      </div>
      {isModalTambahOpen && (
        <ModalTambah
          onTambah={handleTambah}
          onClose={() => setIsModalTambahOpen(false)}
        />
      )}
      {isModalEditOpen && (
        <ModalEdit
          mahasiswa={currentMahasiswa}
          onEdit={handleEdit}
          onClose={() => setIsModalEditOpen(false)}
        />
      )}
    </main>
  );
}

export default Mahasiswa;
