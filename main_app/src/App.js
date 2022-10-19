import "./App.css";
import { useEffect, useState } from "react";
import Users from "./components/pages/Users";
import UserDisplay from "./components/display/UserDisplay";
import Login from "./components/pages/Login";
import { getUsers } from "./components/api/getUsers";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PublicContext from "./components/context/PublicContext";

function App() {
  const [fetched, setFetched] = useState({});
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    const doGetUsers = async () => {
      const result = await getUsers("check");
      setFetched(result);
    };

    doGetUsers();
  }, []);

  useEffect(() => {
    console.log(fetched);
  }, [fetched]);

  return (
    <PublicContext.Provider
      value={{ fetched, setFetched, loggedInUser, setLoggedInUser }}
    >
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/users/:id" element={<UserDisplay />} />
          <Route exact path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </PublicContext.Provider>
  );
}

export default App;
