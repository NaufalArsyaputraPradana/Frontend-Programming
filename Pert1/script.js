// Inisialisasi data mahasiswa
let mahasiswaData = [
  { id: 1, nim: "A11.2022.14606", nama: "Naufal Arsyaputra Pradana" },
  { id: 2, nim: "A11.2022.14607", nama: "Cristiano Ronaldo" },
  { id: 3, nim: "A11.2022.14608", nama: "Leonel Messi" },
];

let editingMahasiswaId = null;

// Fungsi untuk menampilkan tabel mahasiswa
function renderTable() {
  const tbody = document.querySelector("#mahasiswa-table tbody");
  tbody.innerHTML = ""; // Mengosongkan isi tabel
  mahasiswaData.forEach((mahasiswa, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${mahasiswa.nim}</td>
        <td>${mahasiswa.nama}</td>
        <td>
          <button class="btn-edit" data-id="${mahasiswa.id}">Edit</button>
          <button class="btn-hapus" data-id="${mahasiswa.id}">Hapus</button>
        </td>
      `;
    tbody.appendChild(row);
  });
  attachEventHandlers();
}

// Fungsi untuk menambahkan event handler pada tombol edit dan hapus
function attachEventHandlers() {
  // Tombol Edit
  document.querySelectorAll(".btn-edit").forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = parseInt(event.target.dataset.id);
      const mahasiswa = mahasiswaData.find((m) => m.id === id);
      document.getElementById("edit-name").value = mahasiswa.nama;
      document.getElementById("edit-nim").value = mahasiswa.nim;
      editingMahasiswaId = id;
      document.getElementById("modal-edit").style.display = "flex";
    });
  });

  // Tombol Hapus
  document.querySelectorAll(".btn-hapus").forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = parseInt(event.target.dataset.id);
      if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
        mahasiswaData = mahasiswaData.filter((m) => m.id !== id);
        renderTable();
        alert("Data berhasil dihapus");
      }
    });
  });
}

// Menampilkan modal tambah mahasiswa
const btnTambah = document.getElementById("btn-tambah");
const modalTambah = document.getElementById("modal-tambah");

btnTambah.addEventListener("click", () => {
  modalTambah.style.display = "flex";
});

// Menyimpan data mahasiswa baru
// Menangani submit form tambah mahasiswa
document.getElementById("form-tambah").addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah reload halaman
  const name = document.getElementById("name").value;
  const nim = document.getElementById("nim").value;
  // Menambahkan data mahasiswa ke array
  mahasiswaData.push({ id: Date.now(), nama: name, nim: nim });
  modalTambah.style.display = "none"; // Menutup modal setelah simpan
  renderTable(); // Memperbarui tabel
});

// Tombol Clear untuk menghapus input
document.getElementById("clear-form").addEventListener("click", () => {
  document.getElementById("name").value = ""; // Mengosongkan input nama
  document.getElementById("nim").value = ""; // Mengosongkan input NIM
});

// Tombol Clear untuk menghapus input pada form edit
document.getElementById("clear-edit-form").addEventListener("click", () => {
  document.getElementById("edit-name").value = ""; // Mengosongkan input nama
  document.getElementById("edit-nim").value = ""; // Mengosongkan input NIM
});

// Menyimpan perubahan edit mahasiswa
document.getElementById("form-edit").addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah reload halaman
  const name = document.getElementById("edit-name").value;
  const nim = document.getElementById("edit-nim").value;
  // Memperbarui data mahasiswa
  mahasiswaData = mahasiswaData.map((m) =>
    m.id === editingMahasiswaId ? { id: m.id, nama: name, nim: nim } : m
  );
  document.getElementById("modal-edit").style.display = "none"; // Menutup modal setelah update
  renderTable(); // Memperbarui tabel
});

// Menutup modal jika tombol close diklik
document.getElementById("close-tambah").addEventListener("click", () => {
  document.getElementById("modal-tambah").style.display = "none";
});

document.getElementById("close-edit").addEventListener("click", () => {
  document.getElementById("modal-edit").style.display = "none";
});

// Menutup modal jika di klik di luar modal
window.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal-overlay")) {
    event.target.style.display = "none";
  }
});

// Inisialisasi tampilan tabel
renderTable();
