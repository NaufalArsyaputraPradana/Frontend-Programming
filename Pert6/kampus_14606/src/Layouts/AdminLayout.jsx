import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sider from "./Sider";
import Mahasiswa from "../Pages/Admin/Mahasiswa";

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-blue-100">
      <Sider />
      <div className="flex-1 flex flex-col">
        <Header />
        <Mahasiswa />
        <Footer />
      </div>
    </div>
  );
}

export default AdminLayout;
