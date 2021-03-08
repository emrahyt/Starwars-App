import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Button } from "@material-ui/core";
import Navbar from "../common/navbar";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
  },
  approveContainer: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  cancelContainer: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  approve: {
    width: "90%",
    height: "100%",
    backgroundColor: "#00c853",
    color: "#ffffff",
    fontSize: 20,
    "&:hover": {
      backgroundColor: "#00c853",
    },
    textTransform: "capitalize",
  },
  cancel: {
    width: "90%",
    height: "100%",
    backgroundColor: "#e53935",
    color: "#ffffff",
    fontSize: 20,
    "&:hover": {
      backgroundColor: "#e53935",
    },
    textTransform: "capitalize",
  },
  header: {
    width: "100%",
    minHeight: 250,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTextMain : {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  headerTextSub: {
    fontSize: 20,
    textAlign: "center",
  }
}));

const Home = ({history}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Navbar />
      <Container className={classes.header}>
        <Typography className={classes.headerTextMain}>
          Welcome to Star Wars App
        </Typography>
        <Typography className={classes.headerTextSub} >
          You can visit either People page or Starships page using buttons below
        </Typography>
      </Container>
      <Container maxWidth="sm">
        <div className={classes.buttonContainer}>
          <div className={classes.approveContainer}>
            <Button
              variant="contained"
              className={classes.approve}
              onClick={() => history.push("/people")}
            >
              People
            </Button>
          </div>
          <div className={classes.cancelContainer}>
            <Button
              variant="contained"
              className={classes.cancel}
              onClick={() => history.push("/starships")}
            >
              Starships
            </Button>
          </div>
        </div>
      </Container>      
    </React.Fragment>
  );
};

export default withRouter(Home);
