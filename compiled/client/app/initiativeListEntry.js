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
      choice: undefined,
      numChoices: _this.props.initiative.numChoices
    };
    _this.handleInitiativeChoiceSelection = _this.handleInitiativeChoiceSelection.bind(_this);
    return _this;
  }

  _createClass(InitiativeListEntry, [{
    key: "render",
    value: function render() {
      var _this2 = this;

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
            "div",
            { className: "initiativeChoices" },
            this.props.initiative.choices.map(function (choice) {
              return React.createElement(InitiativeChoice, { selection: _this2.state.choice, key: choice, choice: choice, click: _this2.handleInitiativeChoiceSelection });
            })
          ),
          React.createElement(
            "div",
            { className: "usersChoice" },
            "Your choice: ",
            React.createElement(
              "div",
              { className: "usersChoiceName" },
              this.state.choice
            )
          )
        )
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      $.get('http://localhost:8080/users', function (data, res) {
        this.setState({ choice: data[0].votes[this.props.initiative.name] });
      }.bind(this));
    }
  }, {
    key: "handleHideClick",
    value: function handleHideClick() {
      this.setState({ hidden: !this.state.hidden });
    }
  }, {
    key: "handleInitiativeChoiceSelection",
    value: function handleInitiativeChoiceSelection(choice) {
      this.setState({
        choice: this.state.choice === choice ? undefined : choice
      });

      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/users',
        data: JSON.stringify({
          vote: choice,
          initiative: this.props.initiative.name,
          user: 'tim'
        }),
        contentType: 'application/JSON',
        success: function success() {
          console.log('Post is complete');
        }
      });
    }
  }]);

  return InitiativeListEntry;
}(React.Component);

window.InitiativeListEntry = InitiativeListEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9hcHAvaW5pdGlhdGl2ZUxpc3RFbnRyeS5qc3giXSwibmFtZXMiOlsiSW5pdGlhdGl2ZUxpc3RFbnRyeSIsInByb3BzIiwic3RhdGUiLCJpbml0aWF0aXZlIiwiaGlkZGVuIiwiY2hvaWNlIiwidW5kZWZpbmVkIiwibnVtQ2hvaWNlcyIsImhhbmRsZUluaXRpYXRpdmVDaG9pY2VTZWxlY3Rpb24iLCJiaW5kIiwibmFtZSIsImhhbmRsZUhpZGVDbGljayIsInN1YnRpdGxlIiwiZGVzY3JpcHRpb24iLCJjaG9pY2VzIiwibWFwIiwiJCIsImdldCIsImRhdGEiLCJyZXMiLCJzZXRTdGF0ZSIsInZvdGVzIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5Iiwidm90ZSIsInVzZXIiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsbUI7OztBQUNKLCtCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsMElBQ1pBLEtBRFk7O0FBRWxCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxrQkFBWSxNQUFLRixLQUFMLENBQVdFLFVBRFo7QUFFWEMsY0FBUSxJQUZHO0FBR1hDLGNBQVFDLFNBSEc7QUFJWEMsa0JBQVksTUFBS04sS0FBTCxDQUFXRSxVQUFYLENBQXNCSTtBQUp2QixLQUFiO0FBTUEsVUFBS0MsK0JBQUwsR0FBdUMsTUFBS0EsK0JBQUwsQ0FBcUNDLElBQXJDLE9BQXZDO0FBUmtCO0FBU25COzs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxnQkFBZjtBQUFpQyxlQUFLUixLQUFMLENBQVdFLFVBQVgsQ0FBc0JPLElBQXZEO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxRQUFoQjtBQUNFLHlDQUFLLFNBQVMsS0FBS0MsZUFBbkIsRUFBb0MsS0FBSSw0Q0FBeEM7QUFERjtBQURGLFNBREY7QUFPRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLG9CQUFmO0FBQXFDLGlCQUFLVixLQUFMLENBQVdFLFVBQVgsQ0FBc0JTO0FBQTNELFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHVCQUFmO0FBQXdDLGlCQUFLWCxLQUFMLENBQVdFLFVBQVgsQ0FBc0JVO0FBQTlELFdBRkY7QUFHRTtBQUFBO0FBQUEsY0FBSyxXQUFVLG1CQUFmO0FBQ0csaUJBQUtaLEtBQUwsQ0FBV0UsVUFBWCxDQUFzQlcsT0FBdEIsQ0FBOEJDLEdBQTlCLENBQW1DO0FBQUEscUJBQ2xDLG9CQUFDLGdCQUFELElBQWtCLFdBQVcsT0FBS2IsS0FBTCxDQUFXRyxNQUF4QyxFQUFnRCxLQUFLQSxNQUFyRCxFQUE2RCxRQUFRQSxNQUFyRSxFQUE2RSxPQUFPLE9BQUtHLCtCQUF6RixHQURrQztBQUFBLGFBQW5DO0FBREgsV0FIRjtBQVFFO0FBQUE7QUFBQSxjQUFLLFdBQVUsYUFBZjtBQUFBO0FBQTBDO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGlCQUFmO0FBQWtDLG1CQUFLTixLQUFMLENBQVdHO0FBQTdDO0FBQTFDO0FBUkY7QUFQRixPQURGO0FBb0JEOzs7d0NBRW9COztBQUVuQlcsUUFBRUMsR0FBRixDQUFNLDZCQUFOLEVBQXFDLFVBQVVDLElBQVYsRUFBZ0JDLEdBQWhCLEVBQXFCO0FBQ3hELGFBQUtDLFFBQUwsQ0FBYyxFQUFDZixRQUFRYSxLQUFLLENBQUwsRUFBUUcsS0FBUixDQUFjLEtBQUtwQixLQUFMLENBQVdFLFVBQVgsQ0FBc0JPLElBQXBDLENBQVQsRUFBZDtBQUNELE9BRm9DLENBRW5DRCxJQUZtQyxDQUU5QixJQUY4QixDQUFyQztBQUdEOzs7c0NBRWtCO0FBQ2pCLFdBQUtXLFFBQUwsQ0FBYyxFQUFDaEIsUUFBUSxDQUFDLEtBQUtGLEtBQUwsQ0FBV0UsTUFBckIsRUFBZDtBQUNEOzs7b0RBRWdDQyxNLEVBQVE7QUFDdkMsV0FBS2UsUUFBTCxDQUFjO0FBQ1pmLGdCQUFTLEtBQUtILEtBQUwsQ0FBV0csTUFBWCxLQUFzQkEsTUFBdkIsR0FBaUNDLFNBQWpDLEdBQTZDRDtBQUR6QyxPQUFkOztBQUlBVyxRQUFFTSxJQUFGLENBQU87QUFDTEMsY0FBTSxNQUREO0FBRUxDLGFBQUssNkJBRkE7QUFHTE4sY0FBTU8sS0FBS0MsU0FBTCxDQUFlO0FBQ25CQyxnQkFBTXRCLE1BRGE7QUFFbkJGLHNCQUFZLEtBQUtGLEtBQUwsQ0FBV0UsVUFBWCxDQUFzQk8sSUFGZjtBQUduQmtCLGdCQUFNO0FBSGEsU0FBZixDQUhEO0FBUUxDLHFCQUFhLGtCQVJSO0FBU0xDLGlCQUFTLG1CQUFZO0FBQ25CQyxrQkFBUUMsR0FBUixDQUFZLGtCQUFaO0FBQ0Q7QUFYSSxPQUFQO0FBYUQ7Ozs7RUFoRStCQyxNQUFNQyxTOztBQW9FeENDLE9BQU9uQyxtQkFBUCxHQUE2QkEsbUJBQTdCIiwiZmlsZSI6ImluaXRpYXRpdmVMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBJbml0aWF0aXZlTGlzdEVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbml0aWF0aXZlOiB0aGlzLnByb3BzLmluaXRpYXRpdmUsXG4gICAgICBoaWRkZW46IHRydWUsXG4gICAgICBjaG9pY2U6IHVuZGVmaW5lZCxcbiAgICAgIG51bUNob2ljZXM6IHRoaXMucHJvcHMuaW5pdGlhdGl2ZS5udW1DaG9pY2VzXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlSW5pdGlhdGl2ZUNob2ljZVNlbGVjdGlvbiA9IHRoaXMuaGFuZGxlSW5pdGlhdGl2ZUNob2ljZVNlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluaXRpYXRpdmVMaXN0RW50cnlcIj4gXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5pdGlhdGl2ZU5hbWVcIj57dGhpcy5wcm9wcy5pbml0aWF0aXZlLm5hbWV9IFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV4cGFuZFwiPiBcbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17dGhpcy5oYW5kbGVIaWRlQ2xpY2t9IHNyYz1cImh0dHA6Ly93d3cuYXRsYW50aWNtYWNoLmNvbS9leHBhbmREb3duLnBuZ1wiLz4gXG4gICAgICAgICAgPC9zcGFuPiBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluaXRpYXRpdmVTdWJ0aXRsZVwiPnt0aGlzLnByb3BzLmluaXRpYXRpdmUuc3VidGl0bGV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbml0aWF0aXZlRGVzY3JpcHRpb25cIj57dGhpcy5wcm9wcy5pbml0aWF0aXZlLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5pdGlhdGl2ZUNob2ljZXNcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmluaXRpYXRpdmUuY2hvaWNlcy5tYXAgKGNob2ljZSA9PlxuICAgICAgICAgICAgICA8SW5pdGlhdGl2ZUNob2ljZSBzZWxlY3Rpb249e3RoaXMuc3RhdGUuY2hvaWNlfSBrZXk9e2Nob2ljZX0gY2hvaWNlPXtjaG9pY2V9IGNsaWNrPXt0aGlzLmhhbmRsZUluaXRpYXRpdmVDaG9pY2VTZWxlY3Rpb259Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2Vyc0Nob2ljZVwiPllvdXIgY2hvaWNlOiA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzQ2hvaWNlTmFtZVwiPnt0aGlzLnN0YXRlLmNob2ljZX08L2Rpdj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApOyAgXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG5cbiAgICAkLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VzZXJzJywgZnVuY3Rpb24gKGRhdGEsIHJlcykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2hvaWNlOiBkYXRhWzBdLnZvdGVzW3RoaXMucHJvcHMuaW5pdGlhdGl2ZS5uYW1lXX0pXG4gICAgfS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgaGFuZGxlSGlkZUNsaWNrICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtoaWRkZW46ICF0aGlzLnN0YXRlLmhpZGRlbn0pXG4gIH1cblxuICBoYW5kbGVJbml0aWF0aXZlQ2hvaWNlU2VsZWN0aW9uIChjaG9pY2UpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNob2ljZTogKHRoaXMuc3RhdGUuY2hvaWNlID09PSBjaG9pY2UpID8gdW5kZWZpbmVkIDogY2hvaWNlLFxuICAgIH0pO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91c2VycycsXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHZvdGU6IGNob2ljZSxcbiAgICAgICAgaW5pdGlhdGl2ZTogdGhpcy5wcm9wcy5pbml0aWF0aXZlLm5hbWUsXG4gICAgICAgIHVzZXI6ICd0aW0nXG4gICAgICB9KSxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vSlNPTicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQb3N0IGlzIGNvbXBsZXRlJyk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59XG5cbndpbmRvdy5Jbml0aWF0aXZlTGlzdEVudHJ5ID0gSW5pdGlhdGl2ZUxpc3RFbnRyeTsiXX0=