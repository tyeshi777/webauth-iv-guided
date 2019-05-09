import React, { Component } from "react";
import styled from "styled-components";

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
      username: "yeshi",
      password: "tenzing"
    };
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <>
        <Form>
          <div>
            <label htmlFor="username" />
            <Input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" />
            <Input
              type="password"
              name="password"
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
