import React from "react";
import { connect } from "react-redux";

import "./UserDisplay.css";

const UserDisplay = ({ user }) => (
  <div className="bt-user-display">
    <p>User's Name: {user.name}</p>
    <p>User's Username: {user.username}</p>
    <p>User's Phone: {user.phone}</p>
  </div>
);

const mapStateToAppProps = state => ({
  user: state.user
});

export default connect(mapStateToAppProps)(UserDisplay);
