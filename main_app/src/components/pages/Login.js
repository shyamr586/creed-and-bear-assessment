import React, { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PublicContext from "../context/PublicContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const {setLoggedInUser} = useContext(PublicContext)

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      style={{ textAlign: "center", marginTop: "40vh" }}
      onSubmit={(e) => handleSubmit(e)}
    >
      <TextField
        style={{ width: "80%" }}
        variant="outlined"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br></br>
      <TextField
        style={{ width: "80%" }}
        variant="outlined"
        placeholder="Enter username"
      />
      <br></br>
      <br></br>
      <Button variant="contained" type="submit" onClick={()=>setLoggedInUser(username)}>
        <Link to="/users">Login</Link>
      </Button>
    </form>
  );
};

export default Login;
