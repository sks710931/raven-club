import React from "react";
import { Appbar } from "./appbar";

export const Layout = (props) => {
  return (
    <div className="layout">
      <Appbar />
      <div className="children">{props.children}</div>
    </div>
  );
};
