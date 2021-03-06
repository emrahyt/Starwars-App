import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  subs: {
    width: "85%",
    height: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: 'center',
    borderBottom: "1px solid #E9ECEF",
    marginBottom: 5,

  },
  subject: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: 110,
    marginRight: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  res: {
    fontSize: 20,
  },
}));

const CardSub = ({subject, data}) => {
  const classes = useStyles();
  return (
    <div className={classes.subs}>
      <div className={classes.subject}>
        <div>{subject}</div>
        <div>:</div>
      </div>
      <div className={classes.res}>
        {data}
      </div>
    </div>
  );
};

export default CardSub;
