import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    height: 500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    height: 50,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: "#707070",
    textAlign: "center",
    marginBottom: 20,
  },
  imageContainer: {
    width: "100%",
    height: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
  },
}));

const NoMatch = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.container}>
      <div className={classes.headerContainer}>
        <Typography variant="h4" className={classes.header}>
          404 - Page Not Found
        </Typography>
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            color: "#707070",
            fontSize: 25,
            fontWeight: 500,
          }}
        >
          Go to Home Page
        </Link>
      </div>
    </Container>
  );
};

export default withRouter(NoMatch);
