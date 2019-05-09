import React from "react";
import axios from "axios";
import styled from "styled-components";

const H3 = styled.h3`
  text-align: center;
`;

axios.defaults.baseUrl = "http://localhost:5000/api";

axios.interceptors.request.use(
  function(requestConfig) {
    requestConfig.headers.authorization = localStorage.getItem("jwt");
    return requestConfig;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem("jwt");
      const notLoggedIn = <H3>Please login to view the users</H3>;

      return <>{token ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  };
}
