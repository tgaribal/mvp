class MyBallot extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: this.props.user
    }
  }

  render() {
    return (
      <div className="myBallot">
        {props.user.votes.map((vote, key) => 
          <div className="vote" > For {key} you have selected {vote[key]})}
      </div>
    );
  }
}

window.MyBallot = MyBallot;