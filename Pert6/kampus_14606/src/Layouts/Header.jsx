import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center bg-white shadow px-6 py-4">
      <h1 className="text-lg font-semibold">Daftar User</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Log Out
      </button>
    </header>
  );
}

export default Header;
