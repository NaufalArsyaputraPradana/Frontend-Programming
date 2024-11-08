import React from "react";

const Dashboard = ({ items }) => {
  const totalStock = items.reduce((acc, item) => acc + item.stock, 0);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p className="text-lg">
        Total Stok Barang: <span className="font-bold">{totalStock}</span>
      </p>
    </div>
  );
};

export default Dashboard;
