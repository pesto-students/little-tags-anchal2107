import React from "react";
import { NavLink } from "react-router-dom";

const Routelink = (props) => {
  return (
    <div>
      <NavLink to={props.routeurl}>{props.linkname}</NavLink>
    </div>
  );
};
export { Routelink };
