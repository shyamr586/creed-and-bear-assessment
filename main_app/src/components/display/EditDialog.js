import React, { useState, useContext } from "react";
import {
  Dialog,
  DialogTitle,
  Button,
} from "@mui/material";
import PublicContext from "../context/PublicContext";
import { updateUser } from "../api/updateUser";
import { useNavigate } from "react-router-dom";
import InputGrid from "./InputGrid";

const EditDialog = (props) => {
  const [fName, setFName] = useState(props.first_name);
  const [lName, setLName] = useState(props.last_name);
  const [email, setEmail] = useState(props.email);
  const [avatar, setAvatar] = useState(props.avatar);
  const { fetched, setFetched } = useContext(PublicContext);
  const id = props.id;

  const navigate = useNavigate();

  function handleSubmit() {
    const doUpdateUser = async () => {
      const result = await updateUser(id, fetched, fName, lName, email, avatar);
      setFetched(result);
      navigate("/users");
      props.handleEdit();
    };
    doUpdateUser();
  }

  const inputElement = {
    fName: ["First Name: ", fName, setFName],
    lName: ["Last Name: ", lName, setLName],
    email: ["Email: ", email, setEmail],
    avatar: ["Avatar: ", avatar, setAvatar],
  };

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
        {Object.keys(inputElement).map((k, i) => {
          return (
            <InputGrid
              key={i}
              label={inputElement[k][0]}
              defaultValue={inputElement[k][1]}
              placeholder={inputElement[k][0].slice(0, -2)}
              setFunc={inputElement[k][2]}
            />
          );
        })}

        <Button
          variant="contained"
          disabled={fName === "" || lName === "" || email === ""}
          style={{ margin: "10px" }}
          onClick={handleSubmit}
        >
          Edit
        </Button>
        <Button
          variant="error"
          style={{ margin: "10px" }}
          onClick={props.handleEdit}
        >
          Cancel
        </Button>
      </Dialog>
    </div>
  );
};

export default EditDialog;
