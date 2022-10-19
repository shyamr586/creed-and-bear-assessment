import React from "react";
import { Grid, Button } from "@mui/material";

const UserOptionsDisplay = (props) => {
  return (
    <Grid container spacing={6} style={{ textAlign: "center" }}>
      <Grid item xs={6}>
        <Button variant="outlined" onClick={props.handleEdit}>
          Edit User
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="outlined" color="error" onClick={props.handleDelete}>
          Delete User
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserOptionsDisplay;
