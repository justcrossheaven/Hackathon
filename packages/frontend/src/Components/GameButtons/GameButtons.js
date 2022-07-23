import React from "react";
import { Button, Grid } from "@mui/material";

const GameButtons = () => {
  return (
    <Grid
      container
      sx={{
        position: "absolute",
        left: "0",
        top: "25%",
        width: "100%",
        padding: "20px",
      }}
    >
      <Grid item xs={4}>
        <Button sx={{ color: "white" }}>Pat</Button>
      </Grid>
      <Grid item xs={4}>
        <Button>Feed</Button>
      </Grid>
      <Grid item xs={4}>
        <Button>Drink water</Button>
      </Grid>
      <Grid item xs={4}>
        <Button>Toilet</Button>
      </Grid>
    </Grid>
  );
};

export default GameButtons;
