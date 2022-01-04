import "./App.css";
import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import PowerBlock from "./Components/PowerBlock/PowerBlock";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userSessions")) || null
  );

  // const history = useHistory();

  // useEffect(() => {
  //   if (!user) history.push("/login");
  //   else history.push("/");
  // }, [user]);

  return (
    <div className="App">
      <PowerBlock user={user} setUser={setUser} />
    </div>
  );
}

export default App;
