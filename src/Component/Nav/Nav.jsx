import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Nav() {
  const page = useSelector((state) => state.userInteraction.page);
  return (
    <nav>
      <div
        className={`navLinkContainer ${
          page === "index" ? "navLinkContainer--selected" : ""
        }`}
      >
        <Link to={"/"}>Current Employees</Link>
      </div>
      <div
        className={`navLinkContainer ${
          page === "employee" ? "navLinkContainer--selected" : ""
        }`}
      >
        <Link to={"/addemployee"}>Add Employee</Link>
      </div>
    </nav>
  );
}
