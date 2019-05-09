import React from "react";
import { Route, NavLink } from "react-router-dom";
import Users from "./components/Users";
import Login from "./components/Login";
import styled from "styled-components";

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;
const H3 = styled.h3`
  text-align: center;
  font-weight: bold;
`;
function App() {
  return (
    <>
      <H3>Users S-P-A</H3>
      <Header>
        <NavLink to="/login">Log-in</NavLink>
        <NavLink to="/users">Users</NavLink>
      </Header>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </div>
    </>
  );
}

export default App;
