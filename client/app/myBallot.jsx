class MyBallot extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      votes: this.props.user.votes
    }
  }

  render() {
        {console.log(this.state.votes)}
    return (
      <div className="myBallot">
        {Object.keys(this.state.votes).map((key)=>
          <div key={key} className="vote"> For {key} you have selected  <span className="choice">{this.state.votes[key]} </span></div>
        )}
      </div>
    )
  }
}

window.MyBallot = MyBallot;