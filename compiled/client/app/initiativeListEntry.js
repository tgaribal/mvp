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
              return React.createElement(InitiativeChoice, { choice: choice, click: _this2.handleInitiativeChoiceSelection.bind(_this2) });
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
    key: "handleHideClick",
    value: function handleHideClick() {
      this.setState({ hidden: !this.state.hidden });
      console.log(this.state.hidden);
    }
  }, {
    key: "handleInitiativeChoiceSelection",
    value: function handleInitiativeChoiceSelection(choice) {
      this.setState({
        choice: this.state.choice === choice ? undefined : choice
      });
      if (this.state.choice) {
        $(this).addClass('voted');
      }
    }
  }]);

  return InitiativeListEntry;
}(React.Component);

window.InitiativeListEntry = InitiativeListEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9hcHAvaW5pdGlhdGl2ZUxpc3RFbnRyeS5qc3giXSwibmFtZXMiOlsiSW5pdGlhdGl2ZUxpc3RFbnRyeSIsInByb3BzIiwic3RhdGUiLCJpbml0aWF0aXZlIiwiaGlkZGVuIiwiY2hvaWNlIiwidW5kZWZpbmVkIiwibnVtQ2hvaWNlcyIsIm5hbWUiLCJoYW5kbGVIaWRlQ2xpY2siLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2hvaWNlcyIsIm1hcCIsImhhbmRsZUluaXRpYXRpdmVDaG9pY2VTZWxlY3Rpb24iLCJiaW5kIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiJCIsImFkZENsYXNzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsbUI7OztBQUNKLCtCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsMElBQ1pBLEtBRFk7O0FBRWxCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxrQkFBWSxNQUFLRixLQUFMLENBQVdFLFVBRFo7QUFFWEMsY0FBUSxJQUZHO0FBR1hDLGNBQVFDLFNBSEc7QUFJWEMsa0JBQVksTUFBS04sS0FBTCxDQUFXRSxVQUFYLENBQXNCSTtBQUp2QixLQUFiO0FBRmtCO0FBUW5COzs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHFCQUFmO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxnQkFBZjtBQUFpQyxlQUFLTixLQUFMLENBQVdFLFVBQVgsQ0FBc0JLLElBQXZEO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxRQUFoQjtBQUNFLHlDQUFLLFNBQVMsS0FBS0MsZUFBbkIsRUFBb0MsS0FBSSw0Q0FBeEM7QUFERjtBQURGLFNBRkY7QUFRRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLG9CQUFmO0FBQXFDLGlCQUFLUixLQUFMLENBQVdFLFVBQVgsQ0FBc0JPO0FBQTNELFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHVCQUFmO0FBQXdDLGlCQUFLVCxLQUFMLENBQVdFLFVBQVgsQ0FBc0JRO0FBQTlELFdBRkY7QUFHRTtBQUFBO0FBQUEsY0FBSyxXQUFVLG1CQUFmO0FBQ0csaUJBQUtWLEtBQUwsQ0FBV0UsVUFBWCxDQUFzQlMsT0FBdEIsQ0FBOEJDLEdBQTlCLENBQW1DO0FBQUEscUJBQ2xDLG9CQUFDLGdCQUFELElBQWtCLFFBQVFSLE1BQTFCLEVBQWtDLE9BQU8sT0FBS1MsK0JBQUwsQ0FBcUNDLElBQXJDLFFBQXpDLEdBRGtDO0FBQUEsYUFBbkM7QUFESCxXQUhGO0FBUUU7QUFBQTtBQUFBLGNBQUssV0FBVSxhQUFmO0FBQUE7QUFBMEM7QUFBQTtBQUFBLGdCQUFLLFdBQVUsaUJBQWY7QUFBa0MsbUJBQUtiLEtBQUwsQ0FBV0c7QUFBN0M7QUFBMUM7QUFSRjtBQVJGLE9BREY7QUFxQkQ7OztzQ0FFa0I7QUFDakIsV0FBS1csUUFBTCxDQUFjLEVBQUNaLFFBQVEsQ0FBQyxLQUFLRixLQUFMLENBQVdFLE1BQXJCLEVBQWQ7QUFDQWEsY0FBUUMsR0FBUixDQUFZLEtBQUtoQixLQUFMLENBQVdFLE1BQXZCO0FBQ0Q7OztvREFFZ0NDLE0sRUFBUTtBQUN2QyxXQUFLVyxRQUFMLENBQWM7QUFDWlgsZ0JBQVMsS0FBS0gsS0FBTCxDQUFXRyxNQUFYLEtBQXNCQSxNQUF2QixHQUFpQ0MsU0FBakMsR0FBNkNEO0FBRHpDLE9BQWQ7QUFHQSxVQUFJLEtBQUtILEtBQUwsQ0FBV0csTUFBZixFQUF1QjtBQUNyQmMsVUFBRSxJQUFGLEVBQVFDLFFBQVIsQ0FBaUIsT0FBakI7QUFDRDtBQUNGOzs7O0VBL0MrQkMsTUFBTUMsUzs7QUFtRHhDQyxPQUFPdkIsbUJBQVAsR0FBNkJBLG1CQUE3QiIsImZpbGUiOiJpbml0aWF0aXZlTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSW5pdGlhdGl2ZUxpc3RFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5pdGlhdGl2ZTogdGhpcy5wcm9wcy5pbml0aWF0aXZlLFxuICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgY2hvaWNlOiB1bmRlZmluZWQsXG4gICAgICBudW1DaG9pY2VzOiB0aGlzLnByb3BzLmluaXRpYXRpdmUubnVtQ2hvaWNlc1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbml0aWF0aXZlTGlzdEVudHJ5XCI+IFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5pdGlhdGl2ZU5hbWVcIj57dGhpcy5wcm9wcy5pbml0aWF0aXZlLm5hbWV9IFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV4cGFuZFwiPiBcbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17dGhpcy5oYW5kbGVIaWRlQ2xpY2t9IHNyYz1cImh0dHA6Ly93d3cuYXRsYW50aWNtYWNoLmNvbS9leHBhbmREb3duLnBuZ1wiLz4gXG4gICAgICAgICAgPC9zcGFuPiBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluaXRpYXRpdmVTdWJ0aXRsZVwiPnt0aGlzLnByb3BzLmluaXRpYXRpdmUuc3VidGl0bGV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbml0aWF0aXZlRGVzY3JpcHRpb25cIj57dGhpcy5wcm9wcy5pbml0aWF0aXZlLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5pdGlhdGl2ZUNob2ljZXNcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmluaXRpYXRpdmUuY2hvaWNlcy5tYXAgKGNob2ljZSA9PlxuICAgICAgICAgICAgICA8SW5pdGlhdGl2ZUNob2ljZSBjaG9pY2U9e2Nob2ljZX0gY2xpY2s9e3RoaXMuaGFuZGxlSW5pdGlhdGl2ZUNob2ljZVNlbGVjdGlvbi5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcnNDaG9pY2VcIj5Zb3VyIGNob2ljZTogPGRpdiBjbGFzc05hbWU9XCJ1c2Vyc0Nob2ljZU5hbWVcIj57dGhpcy5zdGF0ZS5jaG9pY2V9PC9kaXY+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTsgIFxuICB9XG5cbiAgaGFuZGxlSGlkZUNsaWNrICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtoaWRkZW46ICF0aGlzLnN0YXRlLmhpZGRlbn0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5oaWRkZW4pXG4gIH1cblxuICBoYW5kbGVJbml0aWF0aXZlQ2hvaWNlU2VsZWN0aW9uIChjaG9pY2UpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNob2ljZTogKHRoaXMuc3RhdGUuY2hvaWNlID09PSBjaG9pY2UpID8gdW5kZWZpbmVkIDogY2hvaWNlLFxuICAgIH0pO1xuICAgIGlmICh0aGlzLnN0YXRlLmNob2ljZSkge1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygndm90ZWQnKTtcbiAgICB9XG4gIH1cblxufVxuXG53aW5kb3cuSW5pdGlhdGl2ZUxpc3RFbnRyeSA9IEluaXRpYXRpdmVMaXN0RW50cnk7Il19