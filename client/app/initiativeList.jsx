var InitiativeList = (props) => (
  <div className="initiativeList">
    {props.initiatives.map(initiative => 
      <InitiativeListEntry initiative={initiative} /> 
    )}
  </div>
);

window.InitiativeList = InitiativeList;