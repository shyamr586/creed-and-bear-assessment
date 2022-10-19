import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PublicContext from "../context/PublicContext";

const Navbar = () => {

    const {loggedInUser} = useContext(PublicContext)

  return (
    <div style={{ marginBottom: "8%" }}>
      <AppBar style={{ backgroundColor: "#ffffff", color: "black" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Users
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircleIcon />
              <Typography variant="p" style={{fontSize:"12px", paddingLeft:"5px"}}>{loggedInUser}</Typography>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
