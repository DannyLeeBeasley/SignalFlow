import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home";
import Login from "./Components/LoginPage/LoginPage";
import NewUser from "./Components/NewUser/NewUser";
import Pedals from "./Components/Pedals/Pedals";
import MyPedals from "./Components/Pedals/MyPedals";
import NewPedal from "./Components/Pedals/NewPedal";
import PedalBoards from "./Components/Pedalboard/PedalBoards";
import NewPedalBoard from "./Components/Pedalboard/NewPedalBoard";
// import useToken from "./useToken";
import { BrowserRouter as Router } from "react-router-dom";

import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
const API_PATH = `http://localhost:3000/`;

function App() {
  const [pedals, setPedals] = useState([]);
  const [pedalboards, setPedalboards] = useState([]);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  const history = useHistory();

  useEffect(() => {
    if (!user) history.push("/login");
    else history.push("/");
  }, [user]);

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((usersArr) => {
        setUsers(usersArr);
        // setUsersLoaded(true);
      });
  }, []);

  useEffect(() => {
    fetch("/pedals")
      .then((res) => res.json())
      .then((pedals) => {
        console.log(pedals);
        setPedals(pedals);
      });
  }, []);

  useEffect(() => {
    fetch("/pedalboards")
      .then((res) => res.json())
      .then((pedalboards) => {
        console.log("pbnj", pedalboards);
        setPedalboards(pedalboards);
      });
  }, []);

  useEffect(() => {
    fetch("/pedalboard_pedals")
      .then((res) => res.json())
      .then((pedalboards) => {
        console.log("pbnj", pedalboards);
        setPedalboards(pedalboards);
      });
  }, []);

  function addNewPedal(newPedal) {
    const updatedPedalArray = [...pedals, newPedal];
    setPedals(updatedPedalArray);
  }

  function addNewPedalboard(newPedalboard) {
    const updatedPedalboardArray = [...pedalboards, newPedalboard];
    setPedalboards(updatedPedalboardArray);
  }

  function handleDeletePedalboard(pedalboardToDeleteId) {
    fetch(`/pedalboards/${pedalboardToDeleteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((newPedal) => addNewPedalboard(newPedal));
    // const updatedPedalboardArray = [...pedalboards].filter((pedalboard) => pedalboard.id !== itemToDelete.id);
    // setPedalboards(updatedPedalboardArray);
    history.push("/pedalboards");
  }

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Route exact path="/newuser">
        <NewUser />
      </Route>
      <Route exact path="/login">
        <Login setUser={setUser} />
      </Route>
      <Route exact path="/pedals">
        <Pedals
          pedals={pedals}
          setPedals={setPedals}
          addNewPedal={addNewPedal}
        />
      </Route>
      <Route exact path="/mypedals">
        <MyPedals pedals={pedals} />
      </Route>
      <Route exact path="/newpedal">
        <NewPedal addNewPedal={addNewPedal} />
      </Route>
      <Route exact path="/pedalboards">
        <PedalBoards
          user={user}
          pedals={pedals}
          id={pedalboards.id}
          pedalboards={pedalboards}
          setPedalboards={setPedalboards}
          addNewPedalboard={addNewPedalboard}
          handleDeletePedalboard={handleDeletePedalboard}
        />
      </Route>
      <Route exact path="/newpedalboard">
        <NewPedalBoard
          pedals={pedals}
          addNewPedalboard={addNewPedalboard}
          history={history}
          user={user}
        />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
