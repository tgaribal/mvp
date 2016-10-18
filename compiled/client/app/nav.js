"use strict";

var Nav = function Nav(props) {
  return React.createElement(
    "div",
    { className: "nav" },
    React.createElement(
      "div",
      { className: "navEntry", onClick: props.click.bind(null, 'Federal') },
      "Federal"
    ),
    React.createElement(
      "div",
      { className: "navEntry", onClick: props.click.bind(null, 'State') },
      "State"
    ),
    React.createElement(
      "div",
      { className: "navEntry", onClick: props.click.bind(null, 'State Propositions') },
      "State Propositions"
    ),
    React.createElement(
      "div",
      { className: "navEntry", onClick: props.click.bind(null, 'Local') },
      "Local"
    ),
    React.createElement(
      "div",
      { className: "navEntry", onClick: props.click.bind(null, 'Local Propositions') },
      "Local Propositions"
    )
  );
};

window.Nav = Nav;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9hcHAvbmF2LmpzeCJdLCJuYW1lcyI6WyJOYXYiLCJwcm9wcyIsImNsaWNrIiwiYmluZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRDtBQUFBLFNBQ1I7QUFBQTtBQUFBLE1BQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxVQUFmLEVBQTBCLFNBQVNBLE1BQU1DLEtBQU4sQ0FBWUMsSUFBWixDQUFpQixJQUFqQixFQUF1QixTQUF2QixDQUFuQztBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFLLFdBQVUsVUFBZixFQUEwQixTQUFTRixNQUFNQyxLQUFOLENBQVlDLElBQVosQ0FBaUIsSUFBakIsRUFBdUIsT0FBdkIsQ0FBbkM7QUFBQTtBQUFBLEtBRkY7QUFHRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFVBQWYsRUFBMEIsU0FBU0YsTUFBTUMsS0FBTixDQUFZQyxJQUFaLENBQWlCLElBQWpCLEVBQXVCLG9CQUF2QixDQUFuQztBQUFBO0FBQUEsS0FIRjtBQUlFO0FBQUE7QUFBQSxRQUFLLFdBQVUsVUFBZixFQUEwQixTQUFTRixNQUFNQyxLQUFOLENBQVlDLElBQVosQ0FBaUIsSUFBakIsRUFBdUIsT0FBdkIsQ0FBbkM7QUFBQTtBQUFBLEtBSkY7QUFLRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFVBQWYsRUFBMEIsU0FBU0YsTUFBTUMsS0FBTixDQUFZQyxJQUFaLENBQWlCLElBQWpCLEVBQXVCLG9CQUF2QixDQUFuQztBQUFBO0FBQUE7QUFMRixHQURRO0FBQUEsQ0FBVjs7QUFVQUMsT0FBT0osR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6Im5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBOYXYgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdkVudHJ5XCIgb25DbGljaz17cHJvcHMuY2xpY2suYmluZChudWxsLCAnRmVkZXJhbCcpfT5GZWRlcmFsPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZFbnRyeVwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrLmJpbmQobnVsbCwgJ1N0YXRlJyl9PlN0YXRlPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZFbnRyeVwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrLmJpbmQobnVsbCwgJ1N0YXRlIFByb3Bvc2l0aW9ucycpfT5TdGF0ZSBQcm9wb3NpdGlvbnM8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdkVudHJ5XCIgb25DbGljaz17cHJvcHMuY2xpY2suYmluZChudWxsLCAnTG9jYWwnKX0+TG9jYWw8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdkVudHJ5XCIgb25DbGljaz17cHJvcHMuY2xpY2suYmluZChudWxsLCAnTG9jYWwgUHJvcG9zaXRpb25zJyl9PkxvY2FsIFByb3Bvc2l0aW9uczwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbndpbmRvdy5OYXYgPSBOYXY7Il19