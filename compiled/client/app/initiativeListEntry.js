"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InitiativeListEntry = function (_React$Component) {
  _inherits(InitiativeListEntry, _React$Component);

  function InitiativeListEntry(props) {
    _classCallCheck(this, InitiativeListEntry);

    var _this = _possibleConstructorReturn(this, (InitiativeListEntry.__proto__ || Object.getPrototypeOf(InitiativeListEntry)).call(this, props));

    _this.state = {
      initiative: _this.props.initiative,
      hidden: true,
      selection: undefined,
      numChoices: _this.props.initiative.numChoices
    };
    return _this;
  }

  _createClass(InitiativeListEntry, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "initiativeListEntry" },
        React.createElement(
          "div",
          { className: "initiativeName" },
          this.props.initiative.name,
          React.createElement(
            "span",
            { className: "expand" },
            React.createElement("img", { onClick: this.handleHideClick, src: "http://www.atlanticmach.com/expandDown.png" })
          )
        ),
        React.createElement(
          "div",
          { className: "hidden" },
          React.createElement(
            "div",
            { className: "initiativeSubtitle" },
            this.props.initiative.subtitle
          ),
          React.createElement(
            "div",
            { className: "initiativeDescription" },
            this.props.initiative.description
          ),
          React.createElement(
            "form",
            { className: "initiativeChoices" },
            this.props.initiative.choices.map(function (choice) {
              return React.createElement(InitiativeChoice, { choice: choice });
            })
          ),
          React.createElement(
            "div",
            { className: "usersChoice" },
            "Your choice: ",
            this.selection
          )
        )
      );
    }
  }, {
    key: "handleHideClick",
    value: function handleHideClick() {
      this.setState({ hidden: !this.state.hidden });
      console.log(this.state.hidden);
    }
  }]);

  return InitiativeListEntry;
}(React.Component);

window.InitiativeListEntry = InitiativeListEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9hcHAvaW5pdGlhdGl2ZUxpc3RFbnRyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNOzs7QUFDSiwrQkFBYSxLQUFiLEVBQW9COzs7MElBQ1osUUFEWTs7QUFFbEIsVUFBSyxLQUFMLEdBQWE7QUFDWCxrQkFBWSxNQUFLLEtBQUwsQ0FBVyxVQUFYO0FBQ1osY0FBUSxJQUFSO0FBQ0EsaUJBQVcsU0FBWDtBQUNBLGtCQUFZLE1BQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsVUFBdEI7S0FKZCxDQUZrQjs7R0FBcEI7Ozs7NkJBVVM7QUFDUCxhQUNFOztVQUFLLFdBQVUscUJBQVYsRUFBTDtRQUVFOztZQUFLLFdBQVUsZ0JBQVYsRUFBTDtVQUFpQyxLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLElBQXRCO1VBQy9COztjQUFNLFdBQVUsUUFBVixFQUFOO1lBQ0UsNkJBQUssU0FBUyxLQUFLLGVBQUwsRUFBc0IsS0FBSSw0Q0FBSixFQUFwQyxDQURGO1dBREY7U0FGRjtRQVFFOztZQUFLLFdBQVUsUUFBVixFQUFMO1VBQ0U7O2NBQUssV0FBVSxvQkFBVixFQUFMO1lBQXFDLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsUUFBdEI7V0FEdkM7VUFFRTs7Y0FBSyxXQUFVLHVCQUFWLEVBQUw7WUFBd0MsS0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixXQUF0QjtXQUYxQztVQUdFOztjQUFNLFdBQVUsbUJBQVYsRUFBTjtZQUNHLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsT0FBdEIsQ0FBOEIsR0FBOUIsQ0FBbUM7cUJBQ2xDLG9CQUFDLGdCQUFELElBQWtCLFFBQVEsTUFBUixFQUFsQjthQURrQyxDQUR0QztXQUhGO1VBUUU7O2NBQUssV0FBVSxhQUFWLEVBQUw7O1lBQTJDLEtBQUssU0FBTDtXQVI3QztTQVJGO09BREYsQ0FETzs7OztzQ0F3QlU7QUFDakIsV0FBSyxRQUFMLENBQWMsRUFBQyxRQUFRLENBQUMsS0FBSyxLQUFMLENBQVcsTUFBWCxFQUF4QixFQURpQjtBQUVqQixjQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQVosQ0FGaUI7Ozs7O0VBbkNhLE1BQU0sU0FBTjs7QUEwQ2xDLE9BQU8sbUJBQVAsR0FBNkIsbUJBQTdCIiwiZmlsZSI6ImluaXRpYXRpdmVMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBJbml0aWF0aXZlTGlzdEVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbml0aWF0aXZlOiB0aGlzLnByb3BzLmluaXRpYXRpdmUsXG4gICAgICBoaWRkZW46IHRydWUsXG4gICAgICBzZWxlY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgIG51bUNob2ljZXM6IHRoaXMucHJvcHMuaW5pdGlhdGl2ZS5udW1DaG9pY2VzLFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbml0aWF0aXZlTGlzdEVudHJ5XCI+IFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5pdGlhdGl2ZU5hbWVcIj57dGhpcy5wcm9wcy5pbml0aWF0aXZlLm5hbWV9IFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV4cGFuZFwiPiBcbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17dGhpcy5oYW5kbGVIaWRlQ2xpY2t9IHNyYz1cImh0dHA6Ly93d3cuYXRsYW50aWNtYWNoLmNvbS9leHBhbmREb3duLnBuZ1wiLz4gXG4gICAgICAgICAgPC9zcGFuPiBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluaXRpYXRpdmVTdWJ0aXRsZVwiPnt0aGlzLnByb3BzLmluaXRpYXRpdmUuc3VidGl0bGV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbml0aWF0aXZlRGVzY3JpcHRpb25cIj57dGhpcy5wcm9wcy5pbml0aWF0aXZlLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImluaXRpYXRpdmVDaG9pY2VzXCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5pbml0aWF0aXZlLmNob2ljZXMubWFwIChjaG9pY2UgPT5cbiAgICAgICAgICAgICAgPEluaXRpYXRpdmVDaG9pY2UgY2hvaWNlPXtjaG9pY2V9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzQ2hvaWNlXCI+WW91ciBjaG9pY2U6IHt0aGlzLnNlbGVjdGlvbn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApOyAgXG4gIH1cblxuICBoYW5kbGVIaWRlQ2xpY2sgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2hpZGRlbjogIXRoaXMuc3RhdGUuaGlkZGVufSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmhpZGRlbilcbiAgfVxuXG59XG5cbndpbmRvdy5Jbml0aWF0aXZlTGlzdEVudHJ5ID0gSW5pdGlhdGl2ZUxpc3RFbnRyeTsiXX0=