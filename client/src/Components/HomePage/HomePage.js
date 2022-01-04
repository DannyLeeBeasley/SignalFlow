import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

import MyPedalboards from "../MyPedalboards/MyPedalboards";
import AllPedals from "../AllPedals/AllPedals";
import NewPedalForm from "../NewPedalForm/NewPedalForm";
import LoginPage from "../LoginPage/LoginPage";
import "./HomePage.css";

function MainPage({ user, setUser }) {
  const [users, setUsers] = useState([]);
  const [usersLoaded, setUsersLoaded] = useState(false);
  const [pedals, setPedals] = useState([]);
  const [pedalsLoaded, setPedalsLoaded] = useState(false);
  const [pedalboardPedals, setPedalboardPedals] = useState([]);
  const [pedalboardPedalsLoaded, setPedalboardPedalsLoaded] = useState(false);
  const [pedalboards, setPedalboards] = useState([]);
  const [pedalboardsLoaded, setPedalboardsLoaded] = useState(false);

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((usersArr) => {
        setUsers(usersArr);
        setUsersLoaded(true);
      });
  }, []);

  useEffect(() => {
    fetch("/pedals")
      .then((r) => r.json())
      .then((pedalsArr) => {
        setPedals(pedalsArr);
        setPedalsLoaded(true);
      });
  }, []);

  useEffect(() => {
    fetch("/pedalboards")
      .then((r) => r.json())
      .then((pedalboardsArr) => {
        setPedalboards(pedalboardsArr);
        setPedalboardsLoaded(true);
      });
  }, []);

  useEffect(() => {
    fetch("/pedalboard_pedals")
      .then((r) => r.json())
      .then((pedalboardPedalsArr) => {
        setPedalboardPedals(pedalboardPedalsArr);
        setPedalboardPedalsLoaded(true);
      });
  }, []);

  function addNewPedal(newPedal) {
    const updatedPedalsArray = [...pedals, newPedal];
    setPedals(updatedPedalsArray);
  }

  function addNewPedalboard(newPedalboard) {
    const updatedPedalboardArray = [...pedalboards, newPedalboard];
    setPedalboards(updatedPedalboardArray);
  }

  function updatePedalboard(pedalboardToUpdate) {
    const pedalboardsNotToUpdate = pedalboards.filter(
      (pedalboard) => pedalboard.id != pedalboardToUpdate.id
    );
    const updatedPedalboardArray = [
      ...pedalboardsNotToUpdate,
      pedalboardToUpdate,
    ];
    setPedalboards(updatedPedalboardArray);
  }

  function deletePedal(pedalToDelete) {
    const updatedPedalsArray = [...pedals].filter(
      (pedal) => pedal.id !== pedalToDelete.id
    );
    setPedals(updatedPedalsArray);
    fetch(`/pedals/${pedalToDelete.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => console.log("The Pedal You Added Was Deleted"));
  }

  function deletePedalboard(pedalboardToDeleteId) {
    fetch(`/pedalboards/${pedalboardToDeleteId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => alert("Your pedalboard has been deleted"));
    setPedalboards(
      pedalboards.filter((pedalboard) => pedalboard.id !== pedalboardToDeleteId)
    );
  }

  function findAssociatedPedal(pedalboardPedal) {
    let foundAssociatedPedal = pedals.find(
      (pedal) => pedal.id == pedalboardPedal.pedal_id
    );
    return foundAssociatedPedal;
  }

  if (
    !usersLoaded ||
    !pedalsLoaded ||
    !pedalboardsLoaded ||
    !pedalboardPedalsLoaded
  ) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      {/* <Header />
      <NavBar user={user} setUser={setUser} /> */}
      <Route exact path="/">
        <MyPedalboards
          user={user}
          users={users}
          pedals={pedals}
          pedalboards={pedalboards}
          usersLoaded={usersLoaded}
          pedalsLoaded={pedalsLoaded}
          pedalboardsLoaded={pedalboardsLoaded}
          pedalboardPedalsLoaded={pedalboardPedalsLoaded}
          deletePedalboard={deletePedalboard}
        />
      </Route>
      {/* <Route exact path="/newpedalboard">
        <NewPedalboardForm
          user={user}
          pedals={pedals}
          pedalboards={pedalboards}
          unitList={unitList}
          usersLoaded={usersLoaded}
          pedalsLoaded={pedalsLoaded}
          pedalboardsLoaded={pedalboardsLoaded}
          pedalboardPedalsLoaded={pedalboardPedalsLoaded}
          findAssociatedPedal={findAssociatedPedal}
          addNewPedalboard={addNewPedalboard}
        />
      </Route> */}
      <Route exact path="/pedals">
        <AllPedals
          user={user}
          pedals={pedals}
          usersLoaded={usersLoaded}
          pedalsLoaded={pedalsLoaded}
          pedalboardsLoaded={pedalboardsLoaded}
          pedalboardPedalsLoaded={pedalboardPedalsLoaded}
          deletePedal={deletePedal}
        />
      </Route>
      <Route exact path="/newpedal">
        <NewPedalForm addNewPedal={addNewPedal} user={user} />
      </Route>
      {/* <Route path="/updatepedalboard/:id">
        <UpdatePedalboardForm
          user={user}
          pedals={pedals}
          pedalboards={pedalboards}
          pedalboardPedals={pedalboardPedals}
          unitList={unitList}
          usersLoaded={usersLoaded}
          pedalsLoaded={pedalsLoaded}
          pedalboardsLoaded={pedalboardsLoaded}
          pedalboardPedalsLoaded={pedalboardPedalsLoaded}
          updatePedalboard={updatePedalboard}
          findAssociatedPedal={findAssociatedPedal}
          setPedalboardPedals={setPedalboardPedals}
        />
      </Route> */}
      {/* <Route path="/viewpedalboard/:id">
        <ViewPedalboard
          user={user}
          pedalboards={pedalboards}
          pedals={pedals}
          pedalboardPedals={pedalboardPedals}
          usersLoaded={usersLoaded}
          pedalsLoaded={pedalsLoaded}
          pedalboardsLoaded={pedalboardsLoaded}
          pedalboardPedalsLoaded={pedalboardPedalsLoaded}
          updatePedalboard={updatePedalboard}
          findAssociatedPedal={findAssociatedPedal}
        />
      </Route> */}
      <Route exact path="/signin">
        <LoginPage setUser={setUser} />
      </Route>
      {/* <Route exact path="/signup">
        <NewUserPage setUser={setUser} />
      </Route> */}
      {/* <Route exact path="/about">
        <AboutPage />
      </Route> */}
      {/* <Route exact path="/loggedout">
        <LoggedOutPage />
      </Route> */}
    </Router>
  );
}

export default MainPage;
