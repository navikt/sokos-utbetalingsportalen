import { Link, Route, Routes } from "react-router";
import React from "react";

export default function SubRouter (props:{name:string}) {
  return (
  <>
    <div>
      <h2>SubRouter {props.name}</h2>
      <nav style={{ display: "flex", flexDirection: "column" }}>
        <Link to={`${props.name}/`}>SubRouter Home</Link>
        <Link to={`${props.name}/team`}>Team</Link>
        <Link to={`${props.name}/projects`}>Projects</Link>
      </nav>

      <Routes>
        <Route path={`/`} element="SubRouterHome" />
        <Route path={`/team`} element="SubRouterTeam" />
        <Route path={`/projects`} element="SubRouterProjects" />
      </Routes>
    </div>
  </>
)}