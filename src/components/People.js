import React from "react";
import List from "./List";
import Navbar from "../common/navbar";
import Header from "../common/header";

const People = () => {
  return (
    <div>
      <Navbar />
      <Header content="People" />
      <List content="people" />
    </div>
  );
};

export default People;
