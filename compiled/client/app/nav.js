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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9hcHAvbmF2LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBTSxTQUFOLEdBQU0sQ0FBQyxLQUFEO1NBQ1I7O01BQUssV0FBVSxLQUFWLEVBQUw7SUFDRTs7UUFBSyxXQUFVLFVBQVYsRUFBcUIsU0FBUyxNQUFNLEtBQU4sQ0FBWSxJQUFaLENBQWlCLElBQWpCLEVBQXVCLFNBQXZCLENBQVQsRUFBMUI7O0tBREY7SUFFRTs7UUFBSyxXQUFVLFVBQVYsRUFBcUIsU0FBUyxNQUFNLEtBQU4sQ0FBWSxJQUFaLENBQWlCLElBQWpCLEVBQXVCLE9BQXZCLENBQVQsRUFBMUI7O0tBRkY7SUFHRTs7UUFBSyxXQUFVLFVBQVYsRUFBcUIsU0FBUyxNQUFNLEtBQU4sQ0FBWSxJQUFaLENBQWlCLElBQWpCLEVBQXVCLG9CQUF2QixDQUFULEVBQTFCOztLQUhGO0lBSUU7O1FBQUssV0FBVSxVQUFWLEVBQXFCLFNBQVMsTUFBTSxLQUFOLENBQVksSUFBWixDQUFpQixJQUFqQixFQUF1QixPQUF2QixDQUFULEVBQTFCOztLQUpGO0lBS0U7O1FBQUssV0FBVSxVQUFWLEVBQXFCLFNBQVMsTUFBTSxLQUFOLENBQVksSUFBWixDQUFpQixJQUFqQixFQUF1QixvQkFBdkIsQ0FBVCxFQUExQjs7S0FMRjs7Q0FEUTs7QUFVVixPQUFPLEdBQVAsR0FBYSxHQUFiIiwiZmlsZSI6Im5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBOYXYgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdkVudHJ5XCIgb25DbGljaz17cHJvcHMuY2xpY2suYmluZChudWxsLCAnRmVkZXJhbCcpfT5GZWRlcmFsPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZFbnRyeVwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrLmJpbmQobnVsbCwgJ1N0YXRlJyl9PlN0YXRlPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZFbnRyeVwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrLmJpbmQobnVsbCwgJ1N0YXRlIFByb3Bvc2l0aW9ucycpfT5TdGF0ZSBQcm9wb3NpdGlvbnM8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdkVudHJ5XCIgb25DbGljaz17cHJvcHMuY2xpY2suYmluZChudWxsLCAnTG9jYWwnKX0+TG9jYWw8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdkVudHJ5XCIgb25DbGljaz17cHJvcHMuY2xpY2suYmluZChudWxsLCAnTG9jYWwgUHJvcG9zaXRpb25zJyl9PkxvY2FsIFByb3Bvc2l0aW9uczwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbndpbmRvdy5OYXYgPSBOYXY7Il19