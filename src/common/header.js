import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, IconButton, Typography } from "@material-ui/core";
import { withRouter } from 'react-router-dom'
import backIcon from "../images/backIcon.svg";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    minHeight: 160,
    width: "100%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 65,
    [theme.breakpoints.down('xs')]: {
        marginTop: 55,
        minHeight: 80
      },
  },
  headerText: {
    fontSize: 34,
    lineHeight: 1.32,
    color: "#333333",
    textAlign: "center",
    width: "100%",
    marginRight: 50
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const Header = ({ content, history }) => {
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <Container maxWidth="lg" className={classes.header}>
        <IconButton
          color="inherit"
          aria-label="close"
          onClick={() => history.goBack()}
        >
          <img src={backIcon} alt="Back" />
        </IconButton>
        <Typography className={classes.headerText}>{content}</Typography>
      </Container>
    </div>
  );
};

export default withRouter(Header) ;
