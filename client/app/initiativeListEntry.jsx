class InitiativeListEntry extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      initiative: this.props.initiative,
      hidden: true,
      choice: undefined,
      numChoices: this.props.initiative.numChoices
    }
    this.handleInitiativeChoiceSelection = this.handleInitiativeChoiceSelection.bind(this);
  }

  render() {
    return (
      <div className="initiativeListEntry"> 
        <div className="initiativeName">{this.props.initiative.name} 
          <span className="expand"> 
            <img onClick={this.handleHideClick} src="http://www.atlanticmach.com/expandDown.png"/> 
          </span> 
        </div>

        <div className="hidden">
          <div className="initiativeSubtitle">{this.props.initiative.subtitle}</div>
          <div className="initiativeDescription">{this.props.initiative.description}</div>
          <div className="initiativeChoices">
            {this.props.initiative.choices.map (choice =>
              <InitiativeChoice selection={this.state.choice} key={choice} choice={choice} click={this.handleInitiativeChoiceSelection}/>
            )}
          </div>
          <div className="usersChoice">Your choice: <div className="usersChoiceName">{this.state.choice}</div></div>
        </div>
      </div>
    );  
  }

  componentDidMount () {

    $.get('http://localhost:8080/users', function (data, res) {
      this.setState({choice: data[0].votes[this.props.initiative.name]})
    }.bind(this))
  }

  handleHideClick () {
    this.setState({hidden: !this.state.hidden})
  }

  handleInitiativeChoiceSelection (choice) {
    this.setState({
      choice: (this.state.choice === choice) ? undefined : choice,
    });

    $.ajax({
      type: 'POST',
      url: 'http://localhost:8080/users',
      data: JSON.stringify({
        vote: choice,
        initiative: this.props.initiative.name,
        user: 'tim'
      }),
      contentType: 'application/JSON',
      success: function () {
        console.log('Post is complete');
      }
    })
  }

}

window.InitiativeListEntry = InitiativeListEntry;