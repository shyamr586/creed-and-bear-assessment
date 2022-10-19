import React, { useEffect, useState, useContext } from "react";
import { getUser } from "../api/getUser";
import { useParams } from "react-router-dom";
import PublicContext from "../context/PublicContext";
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";
import UserCardDisplay from "./UserCardDisplay";
import UserOptionsDisplay from "./UserOptionsDisplay";

const User = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const [user, setUser] = useState({});
  const { fetched } = useContext(PublicContext);

  const handleEdit = () => {
    setEditDialogOpen((prev) => !prev);
  };

  const handleDelete = () => {
    setDeleteDialogOpen((prev) => !prev);
  };

  useEffect(() => {
    const doGetUser = async () => {
      const result = await getUser(id, fetched);
      setUser(result);
    };
    doGetUser();
  }, [fetched, id]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      {editDialogOpen && (
        <EditDialog
          editDialogOpen={editDialogOpen}
          first_name={user.first_name}
          last_name={user.last_name}
          email={user.email}
          id={id}
          avatar={user.avatar}
          handleEdit={handleEdit}
        ></EditDialog>
      )}

      {deleteDialogOpen && (
        <DeleteDialog
          deleteDialogOpen={deleteDialogOpen}
          handleDelete={handleDelete}
          items={[id]}
        />
      )}
      <UserCardDisplay
        first_name={user.first_name}
        last_name={user.last_name}
        email={user.email}
        avatar={user.avatar}
      />
      <br></br>
      <UserOptionsDisplay handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default User;
