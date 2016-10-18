"use strict";

var InitiativeChoice = function InitiativeChoice(props) {
  return React.createElement(
    "div",
    { className: "choice", onClick: props.click.bind(null, props.choice) },
    props.choice,
    " "
  );
};

window.InitiativeChoice = InitiativeChoice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9hcHAvaW5pdGlhdGl2ZUNob2ljZS5qc3giXSwibmFtZXMiOlsiSW5pdGlhdGl2ZUNob2ljZSIsInByb3BzIiwiY2xpY2siLCJiaW5kIiwiY2hvaWNlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQ7QUFBQSxTQUNyQjtBQUFBO0FBQUEsTUFBSyxXQUFVLFFBQWYsRUFBd0IsU0FBU0EsTUFBTUMsS0FBTixDQUFZQyxJQUFaLENBQWlCLElBQWpCLEVBQXVCRixNQUFNRyxNQUE3QixDQUFqQztBQUF3RUgsVUFBTUcsTUFBOUU7QUFBQTtBQUFBLEdBRHFCO0FBQUEsQ0FBdkI7O0FBSUFDLE9BQU9MLGdCQUFQLEdBQTBCQSxnQkFBMUIiLCJmaWxlIjoiaW5pdGlhdGl2ZUNob2ljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBJbml0aWF0aXZlQ2hvaWNlID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2hvaWNlXCIgb25DbGljaz17cHJvcHMuY2xpY2suYmluZChudWxsLCBwcm9wcy5jaG9pY2UpfT57cHJvcHMuY2hvaWNlfSA8L2Rpdj5cbik7XG5cbndpbmRvdy5Jbml0aWF0aXZlQ2hvaWNlID0gSW5pdGlhdGl2ZUNob2ljZTsiXX0=