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
        <div className="mainNav">
          <Nav click={this.handleNavClick}/>
        </div>

        <div className="mainBody">
          <InitiativeList level={this.state.navFilter} initiatives={this.state.initiatives} />
        </div>
      </div>
    );
  }

  componentDidMount () {
    $.get('http://localhost:8080/initiatives', function (data, res) {
      this.setState({initiatives: data});;
    }.bind(this));
  }
  
  handleNavClick (level) {
    console.log('click level:',level)
    this.setState({navFilter: level})
  }

}

window.App = App;