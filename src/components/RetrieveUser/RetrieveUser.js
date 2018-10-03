import React from 'react';
import intl from 'react-intl-universal';

import UserService from '../../services/UserService';

export default class RetrieveUser extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
    };
  }

  onTextChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = async e => {
    e.preventDefault();
    const { id } = this.state;
    await UserService.fetchUserById(id);
  };

  render() {
    const { id } = this.state;
    return (
      <div className="bt-retrieve-user">
        <p>{intl.get('RETRIEVE_USER_MESSAGE')}</p>
        <form onSubmit={this.submit}>
          <input
            type="number"
            value={id}
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
