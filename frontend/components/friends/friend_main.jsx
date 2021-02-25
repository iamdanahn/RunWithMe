import React from "react"

class Friends extends React.Component {
  componentDidMount() {
    debugger;
    this.props.fetchFriends();
  }

  render() {
    debugger;
    console.log(this.props.friends);

    const frands = this.props.friends.map((friend) => {
      return (
        <li key={friend.id}>
          Friends name: {`${friend.first_name} ${friend.last_name}`}
        </li>
      );
    });

    return (
      <div>
        <div>Inside Friend Main - Div 1</div>
        <div>blahblahblah - Div 2</div>
        <ul> {frands} </ul>
      </div>
    );
  }
}

export default Friends
