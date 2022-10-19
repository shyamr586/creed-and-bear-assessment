import React, { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PublicContext from "../context/PublicContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const { setLoggedInUser } = useContext(PublicContext);

  const textFieldStyle = { width: "80%",marginBottom: "1%" }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      style={{ textAlign: "center", marginTop: "40vh" }}
      onSubmit={(e) => handleSubmit(e)}
    >
      <TextField
        style={textFieldStyle}
        variant="outlined"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br></br>
      <br></br>
      <TextField
        style={textFieldStyle}
        variant="outlined"
        placeholder="Enter password"
        type="password"
      />
      <br></br>
      <br></br>
      <Link to="/users" style={{ color: "inherit", textDecoration: "inherit" }}>
        <Button
          variant="contained"
          type="submit"
          onClick={() => setLoggedInUser(username)}
        >
          Login
        </Button>
      </Link>
    </form>
  );
};

export default Login;
