import React, { Component } from "react";
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  render() {
    return (
      <div>
        <h3>Users List</h3>
      </div>
    );
  }
}

export default Users;
