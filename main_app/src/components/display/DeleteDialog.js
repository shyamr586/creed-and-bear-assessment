import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteUser } from "../api/deleteUser";
import PublicContext from "../context/PublicContext";
import { useNavigate } from "react-router-dom";


export default function DeleteDialog(props) {
  const navigate = useNavigate()
  const { fetched, setFetched } = useContext(PublicContext);
  function handleSubmit() {
    const doDeleteUser = async () => {
      console.log(props.items)
      const result = await deleteUser(props.items, fetched);
      navigate("/users")
      setFetched(result);
      props.handleDelete()
    };
    doDeleteUser();
  }

  return (
    <div>
      <Dialog open={props.deleteDialogOpen}>
        <DialogTitle>Do you want to delete item(s)?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            The deletion process is irreversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="error" onClick={handleSubmit}>
            Delete
          </Button>
          <Button onClick={props.handleDelete}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
