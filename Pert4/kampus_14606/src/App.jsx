import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  return (
    <div className="min-h-screen flex">
      <Sider />
      <div className="flex-1 flex flex-col">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

function Sider() {
  return (
    <aside className="w-64 bg-indigo-900 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <nav className="mt-4">
          <ul>
            <li className="py-2 px-4 hover:bg-indigo-700">
              <a href="#">Dashboard</a>
            </li>
            <li className="py-2 px-4 hover:bg-indigo-700">
              <a href="#">Mahasiswa</a>
            </li>
            <li className="py-2 px-4 hover:bg-indigo-700">
              <a href="#">Setting</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

function Header() {
  return (
    <header className="bg-white p-4">
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </header>
  );
}

function Main() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [isModalTambahOpen, setIsModalTambahOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [currentMahasiswa, setCurrentMahasiswa] = useState({});

  const handleTambah = (nama, nim) => {
    setMahasiswa([...mahasiswa, { nama, nim }]);
    setIsModalTambahOpen(false);
  };

  const handleEdit = (nim, nama) => {
    setMahasiswa(
      mahasiswa.map((mhs) =>
        mhs.nim === nim ? { ...mhs, nama } : { ...mhs, nim, nama }
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
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
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
    <main className="flex-grow p-4 bg-blue-50">
      <div className="flex p-4 mb-1 justify-between bg-blue-50">
        <h2 className="text-2xl font-semibold">List Mahasiswa</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setIsModalTambahOpen(true)}
        >
          Tambah
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">No.</th>
              <th className="px-4 py-2">NIM</th>
              <th className="px-4 py-2">Nama</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.map((mhs, index) => (
              <tr key={mhs.nim}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{mhs.nim}</td>
                <td className="border px-4 py-2">{mhs.nama}</td>
                <td className="border px-4 py-2">
                  <button
                    className="btn-edit bg-yellow-500 text-white px-4 py-2 rounded"
                    onClick={() => {
                      setCurrentMahasiswa(mhs);
                      setIsModalEditOpen(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-hapus bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleHapus(mhs.nim)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

function Footer() {
  return (
    <footer className="bg-indigo-900 text-white text-center p-4">
      &copy; 2024 Admin Panel
    </footer>
  );
}

function ModalTambah({ onTambah, onClose }) {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onTambah(nama, nim);
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
        <h2 className="text-2xl font-bold mb-4">Tambah Mahasiswa</h2>
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
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ModalEdit({ mahasiswa, onEdit, onClose }) {
  const [nama, setNama] = useState(mahasiswa.nama);
  const [nim, setNim] = useState(mahasiswa.nim);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(nim, nama);
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

export default App;
