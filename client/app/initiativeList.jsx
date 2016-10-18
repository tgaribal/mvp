var InitiativeList = (props) => (
  <div className="initiativeList">
    {props.initiatives.filter(initiative => initiative.level === props.level)
                      .map(initiative => 
      <InitiativeListEntry initiative={initiative} />
    )}
  </div>
);

window.InitiativeList = InitiativeList;