import React, {  useState, useContext } from "react";
import {
  TextField,
  Dialog,
  DialogTitle,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import PublicContext from "../context/PublicContext";
import { createUser } from "../api/createUser";

const CreateDialog = (props) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const { fetched } = useContext(PublicContext);


  function handleSubmit() {
    const doCreateUser = async () => {
      const result = await createUser(fetched, fName, lName, email, avatar);
      props.setFetched(result);
      props.handleCreate();
    };
    doCreateUser();
  }

  return (
    <div>
      <Dialog
        onClose={props.handleClose}
        open={props.createDialogOpen}
        fullWidth
        maxWidth="xs"
        style={{ overflow: "hidden" }}
      >
        <DialogTitle>Create User</DialogTitle>
        <Grid container style={{ padding: "20px" }}>
          <Grid item xs={4} style={{ margin: "10px auto" }}>
            <Typography style={{ margin: "10px auto", paddingLeft: "5px" }}>
              First Name:
            </Typography>
          </Grid>
          <Grid item xs={8} style={{ margin: "10px auto" }}>
            <TextField
              variant="outlined"
              defaultValue={fName}
              placeholder="First Name"
              onChange={(e) => setFName(e.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={4} style={{ margin: "10px auto" }}>
            <Typography style={{ margin: "10px auto", paddingLeft: "5px" }}>
              Last Name:
            </Typography>
          </Grid>
          <Grid item xs={8} style={{ margin: "10px auto" }}>
            <TextField
              variant="outlined"
              defaultValue={lName}
              placeholder="Last Name"
              onChange={(e) => setLName(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={4} style={{ margin: "10px auto" }}>
            <Typography style={{ margin: "10px auto", paddingLeft: "5px" }}>
              Email:
            </Typography>
          </Grid>
          <Grid item xs={8} style={{ margin: "10px auto" }}>
            <TextField
              variant="outlined"
              defaultValue={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={4} style={{ margin: "10px auto" }}>
            <Typography style={{ margin: "10px auto", paddingLeft: "5px" }}>
              Avatar:
            </Typography>
          </Grid>
          <Grid item xs={8} style={{ margin: "10px auto" }}>
            <TextField
              variant="outlined"
              defaultValue={avatar}
              placeholder="Avatar"
              onChange={(e) => setAvatar(e.target.value)}
            ></TextField>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          style={{ margin: "10px" }}
          onClick={handleSubmit}
          disabled={fName===""||lName===""||email===""}
        >
          Add
        </Button>
        <Button
          variant="error"
          style={{ margin: "10px" }}
          onClick={props.handleCreate}
        >
          Cancel
        </Button>
      </Dialog>
    </div>
  );
};

export default CreateDialog;
