var Nav = (props) => (
  <div className="nav">
    <div className="navEntry" onClick={props.click.bind(null, 'Federal')}>Federal</div>
    <div className="navEntry" onClick={props.click.bind(null, 'State')}>State</div>
    <div className="navEntry" onClick={props.click.bind(null, 'State Propositions')}>State Propositions</div>
    <div className="navEntry" onClick={props.click.bind(null, 'Local')}>Local</div>
    <div className="navEntry" onClick={props.click.bind(null, 'Local Propositions')}>Local Propositions</div>
    <div className="navEntry" onClick={props.click.bind(null, 'Information')}>Information</div>
    <div className="navEntry" onClick={props.click.bind(null, 'My Ballot')}>My Ballot</div>
  </div>
);

window.Nav = Nav;