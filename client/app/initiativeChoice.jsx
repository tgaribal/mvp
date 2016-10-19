class InitiativeChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'notSelected',
      numChoice: 1,
      selection: this.props.selection
    }
    this.changeSelection = this.changeSelection.bind(this)
  }

  render () {
    return (
      <div className={this.state.selected} onClick={this.changeSelection}> 
        <div className="click" onClick={this.props.click.bind(null, this.props.choice)}> 
          {this.props.choice}
        </div>
      </div>
    );
  }

  componentDidMount() {
      console.log("1", this.props.choice)
      console.log('2', props.selection)
      console.log('3', {this.props.selection})
      // this.changeSelection(this.props.selection).bind(this)
    // if (this.props.choice === this.props.selection) {
    //   this.changeSelection(this.props.choice)
    // }
  }

  changeSelection (choice) {
    this.setState ({
      selected: this.state.selected === 'notSelected' ? 'selected' : 'notSelected'
    })
  }
}

window.InitiativeChoice = InitiativeChoice;