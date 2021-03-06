import React from "react";
import Dialog from "@material-ui/core/Dialog";
import ReactLoading from "react-loading";
import { Grid } from "@material-ui/core";

export const Loading = ({ open }) => {
  return (
    <Dialog
      fullScreen
      fullWidth
      open={open}
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
    >
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        style={{ height: "100%", width: "100%" }}
      >
        <ReactLoading
          type="spinningBubbles"
          color="black"
          height={80}
          width={80}
        />
      </Grid>
    </Dialog>
  );
};

export default Loading;
