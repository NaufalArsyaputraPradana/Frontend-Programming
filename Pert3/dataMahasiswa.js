const dataMahasiswa = [
  {
    id: 1,
    nama: "Budi Santoso",
    tanggalLahir: "2000-01-15",
    fakultas: "Fakultas Ilmu Komputer",
    programStudi: "Teknik Informatika",
    semester: 6,
    nilai: {
      algoritma: 85,
      basisData: 88,
      pemrogramanWeb: 90,
    },
    aktif: true,
    organisasi: [
      "Himpunan Mahasiswa Teknik",
      "Komunitas Pemrograman",
      "DNCC",
      "Doscom",
      "Himpunan",
    ],
  },
  {
    id: 2,
    nama: "Siti Aminah",
    tanggalLahir: "1999-05-10",
    fakultas: "Fakultas Ekonomi Bisnis",
    programStudi: "Manajemen",
    semester: 4,
    nilai: {
      manajemenKeuangan: 78,
      akuntansi: 82,
      pemasaran: 75,
    },
    aktif: true,
    organisasi: ["Koperasi Mahasiswa"],
  },
  {
    id: 3,
    nama: "Rudi Hartono",
    tanggalLahir: "1998-12-01",
    fakultas: "Fakultas Teknik",
    programStudi: "Teknik Elektro",
    semester: 8,
    nilai: {
      mekanikaTanah: 85,
      strukturBangunan: 89,
    },
    aktif: false,
    organisasi: ["Himpunan Mahastswa Teknik Sipil"],
  },
];



// 2. Destructuring pada field nilai
const {
  nilai: { algoritma, basisData, pemrogramanWeb },
} = dataMahasiswa[0];

console.log(algoritma, basisData, pemrogramanWeb);

// 3. Destructuring pada field organisasi
const {
  organisasi: [org1, org2, org3, org4, org5],
} = dataMahasiswa[0];

console.log(org1, org2, org3, org4, org5);

// 4. Spread operator untuk field organisasi
const { organisasi } = dataMahasiswa[0];
const newOrganisasi = [...organisasi, "New Organisation"];

console.log(newOrganisasi);

// 5. Update pada field fakultas dan field semester
dataMahasiswa[0].fakultas = "Fakultas Baru";
dataMahasiswa[0].semester = 7;

console.log(dataMahasiswa[0]);

// 6. Split pada field tanggal lahir dan tampilkan tahun saja
const { tanggalLahir } = dataMahasiswa[0];
const tahun = tanggalLahir.split("-")[0];

console.log(tahun);

// 7. Conditional Operator ‘?’
const { aktif } = dataMahasiswa[0];
const status = aktif ? "Aktif" : "Tidak Aktif";

console.log(status);

// 8. Map tampilkan semua nama mahasiswa
const namaMahasiswa = dataMahasiswa.map((mahasiswa) => mahasiswa.nama);

console.log(namaMahasiswa);

// 9. Filtering tampilkan semua mahasiswa yang aktif dan dari Fakultas Ilmu Komputer
const filteredMahasiswa = dataMahasiswa.filter(
  (mahasiswa) =>
    mahasiswa.aktif && mahasiswa.fakultas === "Fakultas Ilmu Komputer"
);

console.log(filteredMahasiswa);

// 10. Totalkan nilai seluruh mahasiswa
const totalNilai = dataMahasiswa.reduce((acc, mahasiswa) => {
  const nilai = Object.values(mahasiswa.nilai).reduce(
    (acc, nilai) => acc + nilai,
    0
  );
  return acc + nilai;
}, 0);

console.log(totalNilai);

// 11. Sort seluruh mahasiswa berdasarkan semester
dataMahasiswa.sort((a, b) => a.semester - b.semester);

console.log(dataMahasiswa);

// 12. Menambahkan Mahasiswa Baru
const newMahasiswa = {
  id: 4,
  nama: "New Mahasiswa",
  tanggalLahir: "2001-01-01",
  fakultas: "Fakultas Ilmu Komputer",
  programStudi: "Teknik Informatika",
  semester: 2,
  nilai: {
    algoritma: 80,
    basisData: 85,
  },
  aktif: true,
  organisasi: ["New Organisation"],
};

dataMahasiswa.push(newMahasiswa);

console.log(dataMahasiswa);

//   13. Delete dan Update pada salah satu Mahasiswa
// Delete
dataMahasiswa.splice(1);

console.log(dataMahasiswa);

// Update
dataMahasiswa[0].nama = "Budi Santoso Updated";

console.log(dataMahasiswa);
