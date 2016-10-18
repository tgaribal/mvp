class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      initiatives: initiatives,
      navFilter: 'Federal'
    };
  }

  render () {
    return (
      <div>
        <div className="mainNav">
          <Nav click={this.handleNavClick.bind(this)}/>
        </div>

        <div className="mainBody">
          <InitiativeList level={this.state.navFilter} initiatives={this.state.initiatives} />
        </div>
      </div>
    );
  }

  handleNavClick (level) {
    console.log('click level:',level)
    this.setState({navFilter: level})
    // this.render();
  }

}

window.App = App;