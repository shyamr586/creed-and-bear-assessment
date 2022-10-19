import React, { useEffect, useState, useContext } from "react";
import UsersDisplay from "../display/UsersDisplay";
import PublicContext from "../context/PublicContext";
import CreateDialog from "../display/CreateDialog";
import DeleteDialog from "../display/DeleteDialog";
import Navbar from "../display/Navbar";
import MetaDataCard from "../display/MetaDataCard";

const Users = () => {
  const { fetched, setFetched } = useContext(PublicContext);
  const [users, setUsers] = useState([]);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const meta = {
    total: fetched.total,
    per_page: fetched.per_page,
    total_pages: fetched.total_pages
  }

  useEffect(() => {
    setUsers(fetched.data);
    setCheckedItems([])
  }, [fetched, fetched.total]);

  function handleCreate() {
    setCreateDialogOpen((prev) => !prev);
  }

  const handleDelete = () => {
    setDeleteDialogOpen((prev) => !prev);
  };

  return (
    <>
      {createDialogOpen && (
        <CreateDialog
          handleCreate={handleCreate}
          createDialogOpen={createDialogOpen}
          setFetched={setFetched}
        />
      )}
      {deleteDialogOpen && (
        <DeleteDialog
          deleteDialogOpen={deleteDialogOpen}
          handleDelete={handleDelete}
          items={checkedItems}
          setFetched={setFetched}
        />
      )}
      <Navbar/>

        <MetaDataCard meta={meta}/>

      <div style={{ width: "95%", margin: "10px auto" }}>
        
        {users && (
          <UsersDisplay
            users={users}
            perPage={fetched.per_page}
            currPage={fetched.page}
            totalPages={fetched.total_pages}
            handleCreate = {handleCreate}
            handleDelete = {handleDelete}
            fetched = {fetched}
            setFetched={setFetched}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
          />
        )}
      </div>
    </>
  );
};

export default Users;
