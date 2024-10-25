import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 py-5">
        <div className="flex justify-center space-x-6">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="h-12" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="h-12" alt="React logo" />
          </a>
        </div>
        <h1 className="text-center text-white text-4xl font-bold mt-4">
          Vite + React
        </h1>
      </header>

      <main className="py-10">
        <div className="text-center mb-6">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            onClick={() => setCount(count + 1)}
          >
            count is {count}
          </button>
          <p className="text-gray-700 mt-3">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        {/* Menampilkan Komponen Lain */}
        <ParentComponent />
        <Table />
        <Landing />
        <MenuKopi />
      </main>

      <footer className="bg-gray-800 text-center text-white py-4">
        <p>Click on the Vite and React logos to learn more</p>
      </footer>
    </div>
  );
}

// Komponen Induk
function ParentComponent() {
  return <ChildComponent name="Jhon" />;
}

// Komponen Anak
function ChildComponent(props) {
  return (
    <p className="text-center text-lg font-semibold">Hello, {props.name}!</p>
  );
}

// Komponen Tabel
function Cell(props) {
  return <td className="border px-4 py-2">{props.isi}</td>;
}

function Table() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded my-6 mx-auto">
        <tbody>
          <Baris isi1="Judul 1" isi2="Judul 2" isi3="Judul 3" />
          <Baris isi1="Judul 1" isi2="Judul 2" isi3="Judul 3" />
          <Baris isi1="Judul 1" isi2="Judul 2" isi3="Judul 3" />
          <Baris isi1="Judul 1" isi2="Judul 2" isi3="Judul 3" />
        </tbody>
      </table>
    </div>
  );
}

function Baris(props) {
  return (
    <tr>
      <Cell isi={props.isi1} />
      <Cell isi={props.isi2} />
      <Cell isi={props.isi3} />
    </tr>
  );
}

// Komponen Landing dengan Header, Deskripsi, dan Footer
function Landing() {
  return (
    <section className="my-8 bg-gray-200 p-6 rounded shadow-lg">
      <Header />
      <Deskripsi
        judul="Mengejar DOa Restu Ayang"
        penulis="sifulan wa fulin"
        deskripsiSingkat="Cerita Pemuda yang rela belajar untuk pujaan hati"
      />
      <Footer />
    </section>
  );
}

// Contoh Komponen Header
function Header() {
  return <h1 className="text-2xl font-bold text-center">Header Komponen</h1>;
}

// Contoh Komponen Footer
function Footer() {
  return <p className="text-center text-gray-600 mt-4">Footer Komponen</p>;
}

// Komponen Deskripsi
function Deskripsi({ judul, penulis, deskripsiSingkat }) {
  return (
    <div className="text-center">
      <h1 className="text-xl font-bold mb-2">{judul}</h1>
      <div className="text-gray-700 mb-1">
        <b>{penulis}</b>
      </div>
      <div className="text-gray-600">{deskripsiSingkat}</div>
    </div>
  );
}

// Komponen MenuKopi dan MenuKopiItem
function MenuKopiItem({ nama, deskripsi, harga }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md m-2">
      <h3 className="text-lg font-semibold">{nama}</h3>
      <p className="text-gray-600">{deskripsi}</p>
      <p className="text-gray-800 font-bold mt-2">{harga}</p>
    </div>
  );
}

function MenuKopi() {
  const menu = [
    {
      nama: "Espresso",
      deskripsi: "Kopi pekat dengan rasa yang khas",
      harga: "Rp 20.000",
    },
    {
      nama: "Capuccino",
      deskripsi: "Kopi dengan campuran susu dan foam susu",
      harga: "Rp 25.000",
    },
    {
      nama: "Latte",
      deskripsi: "Kopi dengan susu dan sedikit foam susu",
      harga: "Rp 27.000",
    },
    {
      nama: "Macha",
      deskripsi: "Kopi dengan campuran susu dan cokelat",
      harga: "Rp 27.000",
    },
    {
      nama: "Americano",
      deskripsi: "Kopi hitam dengan air panas",
      harga: "Rp 18.000",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="text-2xl font-bold text-center mb-6">Menu Kopi</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menu.map((item, index) => (
          <MenuKopiItem
            key={index}
            nama={item.nama}
            deskripsi={item.deskripsi}
            harga={item.harga}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
