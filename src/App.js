import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "Frank",
      lastName: "Murphy",
      email: "frank.murphy@test.com",
      role: "User",
    },
    {
      id: 2,
      firstName: "Vic",
      lastName: "Reynolds",
      email: "vic.reynolds@test.com",
      role: "Admin",
    },
    {
      id: 3,
      firstName: "Gina",
      lastName: "Jabowski",
      email: "gina.jabowski@test.com",
      role: "Admin",
    },
    {
      id: 4,
      firstName: "Jessi",
      lastName: "Glaser",
      email: "jessi.glaser@test.com",
      role: "User",
    },
    {
      id: 5,
      firstName: "Jay",
      lastName: "Bilzerian",
      email: "jay.bilzerian@test.com",
      role: "User",
    },
  ]);
  return (
    <div className="App">
      {users &&
        users.map((user) => (
          <ul key={user.id}>
            <li>
              {user.firstName} {user.lastName}
            </li>
            <li>{user.email}</li>
            <li>{user.role}</li>
          </ul>
        ))}
    </div>
  );
}

export default App;
