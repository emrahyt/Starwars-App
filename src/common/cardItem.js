import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import CardSub from "./cardSub";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: 250,
    boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.16)",
    backgroundColor: "#fff",
    borderRadius: 6,
    height: "auto",
    minHeight: 250,
    position: "relative",
    [theme.breakpoints.down("md")]: {
      minHeight: 200,
    },
    padding: 0
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",    
    paddingBottom: 15
  },
  nameContainer: {
    color: 'white',
    backgroundColor: '#707070',
    width: "100%",
    height: 50,
    fontWeight: "bold",
    fontSize: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  }, 
}));

const CardItem = ({ data }) => {
  const handleContent = () => {
    if (data.birth_year) {
      return (
        <div className={classes.main}>
          <div className={classes.nameContainer}>{data.name}</div>
          <CardSub
            data={data.gender === "n/a" ? "none" : data.gender}
            subject="Gender"
          />
          <CardSub data={data.height} subject="Height" />
          <CardSub data={data.mass} subject="Mass" />
          <CardSub data={data.skin_color} subject="Skin Color" />
          <CardSub
            data={data.hair_color === "n/a" ? "none" : data.hair_color}
            subject="Hair Color"
          />
        </div>
      );
    } else {
      return (
        <div className={classes.main}>
          <div className={classes.nameContainer}>{data.name}</div>
          <CardSub
            data={data.starship_class === "n/a" ? "none" : data.starship_class}
            subject="Class"
          />
          <CardSub data={data.length} subject="Length" />
          <CardSub data={data.crew} subject="Crew" />
          <CardSub data={data.cargo_capacity} subject="Capacity" />
          <CardSub
            data={data.passengers === "n/a" ? "none" : data.passengers}
            subject="Passangers"
          />
        </div>
      );
    }
  };
  const classes = useStyles();
  return <Card className={classes.root}>{handleContent()}</Card>;
};

export default CardItem;
