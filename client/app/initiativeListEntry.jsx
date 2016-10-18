class InitiativeListEntry extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      initiative: this.props.initiative,
      hidden: true,
      selection: undefined,
      numChoices: this.props.initiative.numChoices,
    }
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
          <form className="initiativeChoices">
            {this.props.initiative.choices.map (choice =>
              <InitiativeChoice choice={choice} />
            )}
          </form>
          <div className="usersChoice">Your choice: {this.selection}</div>
        </div>
      </div>
    );  
  }

  handleHideClick () {
    this.setState({hidden: !this.state.hidden})
    console.log(this.state.hidden)
  }

}

window.InitiativeListEntry = InitiativeListEntry;