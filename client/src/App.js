import "./App.css";
import React, { useState } from "react";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("userSessions")) || null);

  return (
    <div className="App">
      <HomePage user={user} setUser={setUser} />
    </div>
  );
}

export default App;