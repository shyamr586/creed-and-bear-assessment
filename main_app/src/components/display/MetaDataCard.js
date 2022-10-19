import React from "react";
import { Grid, Typography } from "@mui/material";

const MetaDataCard = (props) => {
  const labels = {
    "total": "Total Entries",
    "per_page": "Entries per page",
    "total_pages": "Number of pages",
  };

  return (
    <Grid container maxWidth="95%" style={{ margin: "10px auto" }}>
      {Object.keys(props.meta).map((k, i) =>(
        <Grid key={i} item container xs={12} md={4} style={{ margin:"10px auto"}}>
            <div style={{width:"85%", border:"1px solid #d8dadd", margin:"10px auto", padding:"10px", borderRadius:"10px"}}>

          <Grid item xs={12} fontSize="12px" fontWeight={500}>
            {labels[k]?labels[k]:k}
          </Grid>
          <Grid item xs={12} >
            <Typography fontWeight={600} variant = "h4" component="p">

            {props.meta[k]}
            </Typography>
          </Grid>
            </div>
        </Grid>
      ))}
      
    </Grid>
  );
};

export default MetaDataCard;
