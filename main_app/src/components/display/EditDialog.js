import React, { useState, useContext } from "react";
import {
  TextField,
  Dialog,
  DialogTitle,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import PublicContext from "../context/PublicContext";
import { updateUser } from "../api/updateUser";
import { useNavigate  } from "react-router-dom";

const EditDialog = (props) => {
  const [fName, setFName] = useState(props.first_name);
  const [lName, setLName] = useState(props.last_name);
  const [email, setEmail] = useState(props.email);
  const [avatar, setAvatar] = useState(props.avatar);
  const { fetched, setFetched } = useContext(PublicContext);
  const id = props.id

  const navigate = useNavigate()

  function handleSubmit(){
    const doUpdateUser = async () => {
      const result = await updateUser(id, fetched, fName, lName, email, avatar);
      setFetched(result);
      navigate("/users")
      props.handleEdit()
    };
    doUpdateUser();
  }

  return (
    <div>
      <Dialog
        onClose={props.handleClose}
        open={props.editDialogOpen}
        fullWidth
        maxWidth="xs"
        style={{ overflow: "hidden" }}
      >
        <DialogTitle>Edit Details</DialogTitle>
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
        <Button variant="contained"
        disabled={fName===""||lName===""||avatar===""||email===""}
         style={{margin:"10px"}} onClick={handleSubmit}>Edit</Button>
        <Button variant="error" style={{margin:"10px"}} onClick={props.handleEdit}>Cancel</Button>
      </Dialog>
    </div>
  );
};

export default EditDialog;
