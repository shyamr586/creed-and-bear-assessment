import React, { useState, useContext } from "react";
import {
  Dialog,
  DialogTitle,
  Button,
} from "@mui/material";
import PublicContext from "../context/PublicContext";
import { createUser } from "../api/createUser";
import InputGrid from "./InputGrid";

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
        open={props.createDialogOpen}
        fullWidth
        maxWidth="xs"
        style={{ overflow: "hidden" }}
      >
        <DialogTitle>Create User</DialogTitle>
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
          style={{ margin: "10px" }}
          onClick={handleSubmit}
          disabled={fName === "" || lName === "" || email === ""}
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
