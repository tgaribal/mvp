class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      initiatives: initiatives,
      navFilter: 'Federal',
      currentUser: 'tim'
    };
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  render () {
    return (
      <div>
        <img src="../styles/voteCA.png" />
        <div className="mainNav">
          <Nav click={this.handleNavClick}/>
        </div>

        <div className="mainBody">
          <InitiativeList level={this.state.navFilter} initiatives={this.state.initiatives} />
        </div>

        <div>
          {(this.state.navFilter === "My Ballot") ? <MyBallot user={this.state.currentUser[0]}/> : <div></div>}
        </div>
      </div>
    );
  }

  componentDidMount () {
    $.get('http://localhost:8080/initiatives', function (data, res) {
      this.setState({initiatives: data});;
    }.bind(this));
    $.get('http://localhost:8080/users', function (data, res) {
      this.setState({currentUser: data})
    }.bind(this))
  }
  
  handleNavClick (level) {
    console.log('click level:',level)
    this.setState({navFilter: level})
  }

}

window.App = App;