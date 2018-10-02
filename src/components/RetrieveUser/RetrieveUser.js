import React from "react";

import UserService from "../../services/UserService";

export default class RetrieveUser extends React.Component {
  constructor() {
    super();
    this.state = {
      id: ""
    };
  }

  onTextChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = async e => {
    e.preventDefault();
    await UserService.fetchUserById(this.state.id);
  };

  render() {
    return (
      <div className="bt-retrieve-user">
        <form onSubmit={this.submit}>
          <input
            type="number"
            value={this.state.id}
            placeholder="ID (1 - 10)"
            name="id"
            onChange={this.onTextChange}
          />
          <button type="submit">Retrieve User</button>
        </form>
      </div>
    );
  }
}
