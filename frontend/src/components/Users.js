import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import requiresAuth from "../auth/requiresAuth";

const Div = styled.div`
  text-align: center;
  font-size: 24px;
`;

const Li = styled.li`
  list-style-type: none;
`;

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    // const endpoint = "/users";
    const endpoint = "http://localhost:5000/api/users";
    // const token = localStorage.getItem("jwt");
    // const requestConfig = {
    //   headers: {
    //     authorization: token
    //   }
    // };
    axios
      .get(endpoint)
      // .get(endpoint, requestConfig)
      .then(res => {
        console.log(res);
        this.setState({
          users: res.data
        });
      })
      .catch(err => {
        console.error("Users error", err);
      });
  }

  render() {
    // console.log(this.state.users);
    return (
      <Div>
        <h3>Users List</h3>
        {this.state.users &&
          this.state.users.map(user => <Li key={user.id}>{user.username}</Li>)}
      </Div>
    );
  }
}

export default requiresAuth(Users);
