import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import InventoryList from "./components/InventoryList";
import ItemDetail from "./components/ItemDetail";
import AddItem from "./components/AddItem";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", category: "Kategori A", stock: 10, price: 10000 },
    { id: 2, name: "Item 2", category: "Kategori B", stock: 5, price: 20000 },
    { id: 3, name: "Item 3", category: "Kategori C", stock: 8, price: 15000 },
  ]);

  const [editingItem, setEditingItem] = useState(null);

  const handleAddOrEditItem = (newItem) => {
    if (editingItem) {
      setItems(items.map((item) => (item.id === newItem.id ? newItem : item)));
    } else {
      setItems([...items, { ...newItem, id: Date.now() }]);
    }
    setEditingItem(null);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-grow flex flex-col">
          <Header />
          <div className="p-6 flex-grow">
            <Routes>
              <Route path="/dashboard" element={<Dashboard items={items} />} />
              <Route
                path="/inventory"
                element={
                  <InventoryList
                    items={items}
                    onEdit={setEditingItem}
                    onDelete={handleDelete}
                  />
                }
              />
              <Route path="/item/:id" element={<ItemDetail items={items} />} />
              <Route
                path="/add"
                element={
                  <AddItem onSave={handleAddOrEditItem} item={editingItem} />
                }
              />
              <Route
                path="/edit"
                element={
                  <AddItem onSave={handleAddOrEditItem} item={editingItem} />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
