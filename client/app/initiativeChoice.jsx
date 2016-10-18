var InitiativeChoice = (props) => (
  <div className="choice" onClick={props.click.bind(null, props.choice)}>{props.choice} </div>
);

window.InitiativeChoice = InitiativeChoice;