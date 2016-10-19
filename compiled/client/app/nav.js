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
    ),
    React.createElement(
      "div",
      { className: "navEntry", onClick: props.click.bind(null, 'Information') },
      "Information"
    ),
    React.createElement(
      "div",
      { className: "navEntry", onClick: props.click.bind(null, 'My Ballot') },
      "My Ballot"
    )
  );
};

window.Nav = Nav;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9hcHAvbmF2LmpzeCJdLCJuYW1lcyI6WyJOYXYiLCJwcm9wcyIsImNsaWNrIiwiYmluZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRDtBQUFBLFNBQ1I7QUFBQTtBQUFBLE1BQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxVQUFmLEVBQTBCLFNBQVNBLE1BQU1DLEtBQU4sQ0FBWUMsSUFBWixDQUFpQixJQUFqQixFQUF1QixTQUF2QixDQUFuQztBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFLLFdBQVUsVUFBZixFQUEwQixTQUFTRixNQUFNQyxLQUFOLENBQVlDLElBQVosQ0FBaUIsSUFBakIsRUFBdUIsT0FBdkIsQ0FBbkM7QUFBQTtBQUFBLEtBRkY7QUFHRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFVBQWYsRUFBMEIsU0FBU0YsTUFBTUMsS0FBTixDQUFZQyxJQUFaLENBQWlCLElBQWpCLEVBQXVCLG9CQUF2QixDQUFuQztBQUFBO0FBQUEsS0FIRjtBQUlFO0FBQUE7QUFBQSxRQUFLLFdBQVUsVUFBZixFQUEwQixTQUFTRixNQUFNQyxLQUFOLENBQVlDLElBQVosQ0FBaUIsSUFBakIsRUFBdUIsT0FBdkIsQ0FBbkM7QUFBQTtBQUFBLEtBSkY7QUFLRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFVBQWYsRUFBMEIsU0FBU0YsTUFBTUMsS0FBTixDQUFZQyxJQUFaLENBQWlCLElBQWpCLEVBQXVCLG9CQUF2QixDQUFuQztBQUFBO0FBQUEsS0FMRjtBQU1FO0FBQUE7QUFBQSxRQUFLLFdBQVUsVUFBZixFQUEwQixTQUFTRixNQUFNQyxLQUFOLENBQVlDLElBQVosQ0FBaUIsSUFBakIsRUFBdUIsYUFBdkIsQ0FBbkM7QUFBQTtBQUFBLEtBTkY7QUFPRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFVBQWYsRUFBMEIsU0FBU0YsTUFBTUMsS0FBTixDQUFZQyxJQUFaLENBQWlCLElBQWpCLEVBQXVCLFdBQXZCLENBQW5DO0FBQUE7QUFBQTtBQVBGLEdBRFE7QUFBQSxDQUFWOztBQVlBQyxPQUFPSixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoibmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE5hdiA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2RW50cnlcIiBvbkNsaWNrPXtwcm9wcy5jbGljay5iaW5kKG51bGwsICdGZWRlcmFsJyl9PkZlZGVyYWw8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdkVudHJ5XCIgb25DbGljaz17cHJvcHMuY2xpY2suYmluZChudWxsLCAnU3RhdGUnKX0+U3RhdGU8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdkVudHJ5XCIgb25DbGljaz17cHJvcHMuY2xpY2suYmluZChudWxsLCAnU3RhdGUgUHJvcG9zaXRpb25zJyl9PlN0YXRlIFByb3Bvc2l0aW9uczwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2RW50cnlcIiBvbkNsaWNrPXtwcm9wcy5jbGljay5iaW5kKG51bGwsICdMb2NhbCcpfT5Mb2NhbDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2RW50cnlcIiBvbkNsaWNrPXtwcm9wcy5jbGljay5iaW5kKG51bGwsICdMb2NhbCBQcm9wb3NpdGlvbnMnKX0+TG9jYWwgUHJvcG9zaXRpb25zPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZFbnRyeVwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrLmJpbmQobnVsbCwgJ0luZm9ybWF0aW9uJyl9PkluZm9ybWF0aW9uPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZFbnRyeVwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrLmJpbmQobnVsbCwgJ015IEJhbGxvdCcpfT5NeSBCYWxsb3Q8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG53aW5kb3cuTmF2ID0gTmF2OyJdfQ==