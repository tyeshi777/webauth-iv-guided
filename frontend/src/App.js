import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import Users from "./components/Users";
import Login from "./components/Login";
import styled from "styled-components";
import Register from "./components/Register";

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;
const H3 = styled.h3`
  text-align: center;
  font-weight: bold;
`;
function App(props) {
  function logout() {
    localStorage.removeItem("jwt");
    props.history.push("./login");
  }
  return (
    <>
      <H3>Users S-P-A</H3>
      <Header>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Log-in</NavLink>
        <NavLink to="/users">Users</NavLink>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </Header>
      <div>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </div>
    </>
  );
}

export default withRouter(App);
