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
        <Nav />
      </div>

      <div className="mainBody">
        <InitiativeList initiatives={this.state.initiatives}/>
      </div>
    );
  }

}

window.App = App;