import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const Input = styled.input`
  width: 15%;
  height: 30px;
  border-radius: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  text-align: center;
`;

const Button = styled.button`
  width: 10%;
  height: 30px;
  border-radius: 10px;
  font-size: 16px;
  text-align: center;
`;
const Form = styled.form`
  text-align: center;
`;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };

  submitForm = e => {
    e.preventDefault();
    const endpoint = "http://localhost:5000/api/auth/login";
    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/users");
      })
      .catch(err => {
        console.error("Login error", err);
      });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.submitForm}>
          <div>
            <label htmlFor="username" />
            <Input
              type="text"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" />
            <Input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Button type="submit">Log In</Button>
          </div>
        </Form>
      </>
    );
  }
}

export default Login;
