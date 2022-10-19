import React, { useState, useEffect } from "react";
import {
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Pagination,
  Stack,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditDialog from "./EditDialog";

const UsersDisplay = (props) => {
  const users = props.users;

  const [currPage, setCurrPage] = useState(props.currPage);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [currUser, setCurrUser] = useState({})

  const navigate = useNavigate();

  function handleClick(e, id) {
    let { checked } = e.target;
    if (checked) {
      props.setCheckedItems([...props.checkedItems, id]);
    } else {
      props.setCheckedItems(props.checkedItems.filter((item) => item !== id));
    }
  }

  function handleSingleDelete(id) {
    props.setCheckedItems([id]);
    props.handleDelete();
  }

  function handleCheckAll(e) {
    let { checked } = e.target;
    let idArr = users.map((elem) => elem.id);
    if (checked) {
      props.setCheckedItems([...props.checkedItems, ...idArr]);
    } else {
      props.setCheckedItems(
        props.checkedItems.filter((item) => !idArr.includes(item))
      );
    }
  }

  const handleEdit = () => {
    setEditDialogOpen((prev) => !prev);
  };

  const handleEditItem = (user) => {
    setCurrUser(user);
    handleEdit();
  };

  return (
    <>
      {editDialogOpen && (
        <EditDialog
          editDialogOpen={editDialogOpen}
          first_name={currUser.first_name}
          last_name={currUser.last_name}
          email={currUser.email}
          id={currUser.id}
          avatar={currUser.avatar}
          handleEdit={handleEdit}
        ></EditDialog>
      )}

      <Grid container justifyContent={"center"} style={{margin:"10px auto"}}>
        <Grid item xs={6} >
          <Button onClick={props.handleCreate}>Add entry</Button>
        </Grid>
        <Grid item xs={6} style={{textAlign:"right"}}>
          <Button
            variant="outlined"
            disabled={props.checkedItems.length === 0}
            color="error"
            onClick={props.handleDelete}
          >
            Delete {props.checkedItems.length}
            {props.checkedItems.length > 1 ? " entries" : " entry"}
          </Button>
        </Grid>
      </Grid>
      <List
        sx={{
          margin: "10px auto",
          maxWidth: "100%",
          bgcolor: "background.paper",
          border: "1px solid grey",
          borderRadius: "10px",
          padding:"0px"
        }}
      >
        <ListItem divider
          style={{backgroundColor:"#F9FBFC",borderTopLeftRadius: "10px",}}
          
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              onChange={(e) => handleCheckAll(e)}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText >
            <Grid container spacing={2} >
              <Grid item xs={2} style={{ margin: "10px auto" }} fontWeight={600}>
                Avatar
              </Grid>
              <Grid item xs={10} md={5} style={{ margin: "10px auto" }} fontWeight={600}>
                Name
              </Grid>
              <Grid className="email" item xs={0} md={5} style={{ margin: "10px auto" }} fontWeight={600}>
                Email
              </Grid>
            </Grid>
          </ListItemText>
        </ListItem>
        {users
          .slice(
            (currPage - 1) * props.perPage,
            currPage * (props.perPage - 1) + currPage
          )
          .map((user,i) => {
            return (
              <ListItem
                divider
                key={i}
                secondaryAction={
                  <>

                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleEditItem(user)}
                  >
                    <EditOutlinedIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    style={{ paddingRight: "15px" }}
                    onClick={() => handleSingleDelete(user.id)}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                  </>
                }
                style={{ padding: "0px" }}
              >
                <ListItemIcon style={{ paddingLeft: "15px" }}>
                  <Checkbox
                    edge="start"
                    onChange={(e) => handleClick(e, user.id)}
                    checked={props.checkedItems.includes(user.id)}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemButton
                  role={undefined}
                  onClick={() => navigate(`/users/${user.id}`)}
                  dense
                  style={{ width: "100%" }}
                >
                  <ListItemText>
                    <Grid container spacing={2}>
                      <Grid item xs={2}>
                        <Avatar
                          alt={user.first_name + user.last_name}
                          src={user.avatar}
                        />
                      </Grid>
                      <Grid item xs={10} md={5} style={{ margin: "10px auto" }}>
                        {user.first_name + " " + user.last_name}
                      </Grid>
                      <Grid className="email" item xs={0} md={5} style={{ margin: "10px auto" }}>
                        {user.email}
                      </Grid>
                    </Grid>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        <Grid justifyContent={"center"} container style={{ margin: "10px auto"}}>
          <Grid item xs={12}>
            <Stack spacing={2} style={{ margin: "auto"}}>
              <Pagination
              style={{ margin: "auto"}}
                page={currPage ? currPage : 1}
                count={props.totalPages}
                color="primary"
                onChange={(e, v) => {
                  setCurrPage(v);
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </List>
    </>
  );
};

export default UsersDisplay;
