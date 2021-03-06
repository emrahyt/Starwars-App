import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import starWars from "../images/starWars.jpg";
import peopleIcon from "../images/people.png";
import spaceShip from "../images/spaceShip.png";

const useStyles = makeStyles((theme) => ({
  align: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1.3,
    letterSpacing: "normal",
    color: "#fff",
    textTransform: "capitalize",
    height: 40,
    paddingLeft: 0,
    borderRadius: 20,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  listItem: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#acacac !important",
    },
  },
  iconContainer: {
    height: 48,
    width: 48,
    borderRadius: "50%",
    backgroundColor: "#f7f7f7",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 16,
    color: "#333333",
    lineHeight: "21px",
    paddingLeft: 10,
  },
  toolbar: {
    backgroundColor: "black", 
    padding: 0
  },
  gridMain: {
    width: "100%", 
    height: "100%" 
  }
}));

const StyledMenu = withStyles({
  paper: {
    width: 230,
    marginTop: 12,
    boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.16)",
  },
})((props) => (
  <Menu
    elevation={5}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const Navbar = ({ history }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuClick = (event) => {
    setOpenMenu(true);
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setOpenMenu(false);
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Grid container className={classes.gridMain}>
          <Grid item xs={2} className={classes.align}>
            <img
              src={starWars}
              width="50px"
              height="50px"
              alt="starwars"
              onClick={() => history.push("/home")}
            />
          </Grid>
          <Grid item xs={8} className={classes.align}>
            <Typography variant="h4" onClick={() => history.push("/home")}>
              Star Wars
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.align}>
            <div>
              <Button
                className={classes.menuButton}
                size="small"
                onClick={handleMenuClick}
              >
                Menu
              </Button>
              <StyledMenu
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleProfileMenuClose}
              >
                <MenuItem
                  className={classes.listItem}
                  onClick={() => history.push("/people")}
                >
                  <ListItemIcon>
                    <div className={classes.iconContainer}>
                      <img
                        src={peopleIcon}
                        alt="people"
                        height="25px"
                        width="18px"
                      />
                    </div>
                  </ListItemIcon>
                  <ListItemText
                    primary={"People"}
                    className={classes.iconText}
                  />
                </MenuItem>
                <MenuItem
                  className={classes.listItem}
                  onClick={() => history.push("/starships")}
                >
                  <ListItemIcon>
                    <div className={classes.iconContainer}>
                      <img
                        src={spaceShip}
                        alt="space-ship"
                        height="21px"
                        width="24px"
                      />
                    </div>
                  </ListItemIcon>
                  <ListItemText
                    primary={"Star Ships"}
                    className={classes.iconText}
                  />
                </MenuItem>
              </StyledMenu>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Navbar);
