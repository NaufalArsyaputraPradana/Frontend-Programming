import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import AddUser from "./components/AddUser";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "User 1", role: "Admin", email: "user1@example.com" },
    { id: 2, name: "User 2", role: "Editor", email: "user2@example.com" },
    { id: 3, name: "User 3", role: "Viewer", email: "user3@example.com" },
  ]);

  const [editingUser, setEditingUser] = useState(null);

  const handleAddOrEditUser = (newUser) => {
    if (editingUser) {
      setUsers(users.map((user) => (user.id === newUser.id ? newUser : user)));
    } else {
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
    }
    setEditingUser(null);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col mt-2">
          <Header userName="Naufal Arsyaputra Pradana" />
          <main className="p-6 bg-blue-50 min-h-screen mt-16 ml-64">
            <Routes>
              <Route path="/dashboard" element={<Dashboard users={users} />} />
              <Route
                path="/users"
                element={
                  <UserList
                    users={users}
                    onEdit={(user) => setEditingUser(user)}
                    onDelete={handleDelete}
                  />
                }
              />
              <Route path="/user/:id" element={<UserDetail users={users} />} />
              <Route
                path="/add"
                element={
                  <AddUser onSave={handleAddOrEditUser} user={editingUser} />
                }
              />
              <Route
                path="/edit"
                element={
                  <AddUser onSave={handleAddOrEditUser} user={editingUser} />
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
