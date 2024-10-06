// Data Mahasiswa
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
      "Himpunan Teknik Informatika",
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
console.log(dataMahasiswa);

// 1. Destructuring seluruh field
//masukin data json  ke variable, 1 array ada 3 objek
const mhs = dataMahasiswa;
console.log(mhs);

//coba ambil 1 objek dari array
const mhs_pertama = mhs[0];
console.log(mhs[1]);

//destruktif, ambil beberapa key dari objek
// const nama = mhs_pertama.nama
// const fakultas = mhs_pertama.fakultas
const { nama, fakultas, organisasi, tanggalLahir, aktif } = mhs_pertama;
console.log(nama, fakultas);

/// 2. Destructuring pada field nilai
const {
  nilai: { algoritma, basisData, pemrogramanWeb },
} = dataMahasiswa[0];

console.log(algoritma, basisData, pemrogramanWeb);

// 3. Destructuring pada field organisasi
// destrukturing dari arrray
const [orgPertama, orgKedua, ...orgLainnya] = organisasi;
console.log(orgPertama, orgKedua, orgLainnya);

// 4. Spread operator untuk field organisasi
// spread operator
const newOrganisasi = [...organisasi, "Futsal"];
console.log(newOrganisasi);

// 5. Update pada field fakultas dan field semester
dataMahasiswa[0].fakultas = "Fakultas Kedokteran";
dataMahasiswa[0].semester = 7;

console.log(dataMahasiswa[0]);

// 6. Split pada field tanggal lahir dan tampilkan tahun saja
//split string, bikin function
//function oldstyle
function getYear2(str) {
  str.split("-")[0];
}
//function newstyle
const getYear = (str) => str.split("-")[0];

console.log(getYear(tanggalLahir));

console.log(tanggalLahir.split("-"[0]));

// 7. Conditional Operator ‘?’
//conditional "?"
const statusMhs = aktif ? "masih aktif" : "hehe";
console.log(statusMhs);

// old style
console.log("nama:" + nama);

//ES6
console.log(`nama: ${nama}, lahirnya: ${tanggalLahir}`);

// 8. Map tampilkan semua nama mahasiswa
//array map
const namaAllMahasiswa = mhs.map((mahasiswa) => mahasiswa.nama);
console.log(namaAllMahasiswa);

// 9. Filtering tampilkan semua mahasiswa yang aktif
// fillering
const mhsAllAktif = mhs.filter((mahasiswa) => mahasiswa.aktif);
console.log(mhsAllAktif);

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
//sort mengurutkan semester
const sortBySemester = mhs.slice().sort((a, b) => a.semester - b.semester);
console.log(sortBySemester);

// 12. Menambahkan Mahasiswa Baru
const newMahasiswa = {
  id: 4,
  nama: "Naufal Arsyaputra Pradana",
  tanggalLahir: "2004-01-06",
  fakultas: "Fakultas Ilmu Komputer",
  programStudi: "Teknik Informatika",
  semester: 5,
  nilai: {
    algoritma: 100,
    basisData: 105,
  },
  aktif: true,
  organisasi: ["Badan Eksekutif Mahasiswa"],
};

dataMahasiswa.push(newMahasiswa);

console.log(dataMahasiswa);

//   13. Delete dan Update pada salah satu Mahasiswa
// Delete
dataMahasiswa.splice(1);

console.log(dataMahasiswa);

// Update
dataMahasiswa[0].nama = "Monkey D Luffy";

console.log(dataMahasiswa);
