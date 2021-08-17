import React from "react";
import axiosWithAuth from "./../authorization/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friendsList: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="friendslist">
        <h1>Meet The Cast!</h1>
      </div>
    );
  }
}

export default FriendsList;
