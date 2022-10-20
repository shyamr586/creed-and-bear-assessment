import React from 'react'
import { Card, Typography, Grid } from '@mui/material'

const UserCardDisplay = (props) => {
  return (
    <div><Card
    style={{
      width: "60%",
      margin: "10px auto",
      marginTop: "30vh",
      padding: "10px",
    }}
  >
    <Typography component="h1" variant="h3">
      {props.first_name} {props.last_name}
    </Typography>
    <hr></hr>
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Typography variant="h6" style={{ margin: "10px auto" }}>
          Hello, I am {props.first_name}. You can contact me at: {props.email}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <img src={props.avatar} alt={props.first_name} style={{ float: "right" }}></img>
      </Grid>
    </Grid>
  </Card></div>
  )
}

export default UserCardDisplay