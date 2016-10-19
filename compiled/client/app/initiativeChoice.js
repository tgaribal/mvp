'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InitiativeChoice = function (_React$Component) {
  _inherits(InitiativeChoice, _React$Component);

  function InitiativeChoice(props) {
    _classCallCheck(this, InitiativeChoice);

    var _this = _possibleConstructorReturn(this, (InitiativeChoice.__proto__ || Object.getPrototypeOf(InitiativeChoice)).call(this, props));

    _this.state = {
      selected: 'notSelected',
      numChoice: 1,
      selection: _this.props.selection
    };
    _this.changeSelection = _this.changeSelection.bind(_this);
    return _this;
  }

  _createClass(InitiativeChoice, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        'div',
        { className: this.state.selected, onClick: this.changeSelection },
        React.createElement(
          'div',
          { className: 'click', onClick: this.props.click.bind(null, this.props.choice) },
          this.props.choice
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // console.log("1", this.props.choice)
      // console.log('2', props.selection)
      // console.log('3', {this.props.selection})
      // this.changeSelection(this.props.selection).bind(this)
      // if (this.props.choice === this.props.selection) {
      //   this.changeSelection(this.props.choice)
      // }
    }
  }, {
    key: 'changeSelection',
    value: function changeSelection(choice) {
      this.setState({
        selected: this.state.selected === 'notSelected' ? 'selected' : 'notSelected'
      });
    }
  }]);

  return InitiativeChoice;
}(React.Component);

window.InitiativeChoice = InitiativeChoice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9hcHAvaW5pdGlhdGl2ZUNob2ljZS5qc3giXSwibmFtZXMiOlsiSW5pdGlhdGl2ZUNob2ljZSIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsIm51bUNob2ljZSIsInNlbGVjdGlvbiIsImNoYW5nZVNlbGVjdGlvbiIsImJpbmQiLCJjbGljayIsImNob2ljZSIsInNldFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsZ0I7OztBQUNKLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxhQURDO0FBRVhDLGlCQUFXLENBRkE7QUFHWEMsaUJBQVcsTUFBS0osS0FBTCxDQUFXSTtBQUhYLEtBQWI7QUFLQSxVQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBUGlCO0FBUWxCOzs7OzZCQUVTOztBQUVSLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVyxLQUFLTCxLQUFMLENBQVdDLFFBQTNCLEVBQXFDLFNBQVMsS0FBS0csZUFBbkQ7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWYsRUFBdUIsU0FBUyxLQUFLTCxLQUFMLENBQVdPLEtBQVgsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLEVBQTRCLEtBQUtOLEtBQUwsQ0FBV1EsTUFBdkMsQ0FBaEM7QUFDRyxlQUFLUixLQUFMLENBQVdRO0FBRGQ7QUFERixPQURGO0FBT0Q7Ozt3Q0FFbUI7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDRjtBQUNBO0FBQ0E7QUFDRDs7O29DQUVnQkEsTSxFQUFRO0FBQ3ZCLFdBQUtDLFFBQUwsQ0FBZTtBQUNiUCxrQkFBVSxLQUFLRCxLQUFMLENBQVdDLFFBQVgsS0FBd0IsYUFBeEIsR0FBd0MsVUFBeEMsR0FBcUQ7QUFEbEQsT0FBZjtBQUdEOzs7O0VBcEM0QlEsTUFBTUMsUzs7QUF1Q3JDQyxPQUFPYixnQkFBUCxHQUEwQkEsZ0JBQTFCIiwiZmlsZSI6ImluaXRpYXRpdmVDaG9pY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBJbml0aWF0aXZlQ2hvaWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkOiAnbm90U2VsZWN0ZWQnLFxuICAgICAgbnVtQ2hvaWNlOiAxLFxuICAgICAgc2VsZWN0aW9uOiB0aGlzLnByb3BzLnNlbGVjdGlvblxuICAgIH1cbiAgICB0aGlzLmNoYW5nZVNlbGVjdGlvbiA9IHRoaXMuY2hhbmdlU2VsZWN0aW9uLmJpbmQodGhpcylcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWR9IG9uQ2xpY2s9e3RoaXMuY2hhbmdlU2VsZWN0aW9ufT4gXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpY2tcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsaWNrLmJpbmQobnVsbCwgdGhpcy5wcm9wcy5jaG9pY2UpfT4gXG4gICAgICAgICAge3RoaXMucHJvcHMuY2hvaWNlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiMVwiLCB0aGlzLnByb3BzLmNob2ljZSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCcyJywgcHJvcHMuc2VsZWN0aW9uKVxuICAgICAgLy8gY29uc29sZS5sb2coJzMnLCB7dGhpcy5wcm9wcy5zZWxlY3Rpb259KVxuICAgICAgLy8gdGhpcy5jaGFuZ2VTZWxlY3Rpb24odGhpcy5wcm9wcy5zZWxlY3Rpb24pLmJpbmQodGhpcylcbiAgICAvLyBpZiAodGhpcy5wcm9wcy5jaG9pY2UgPT09IHRoaXMucHJvcHMuc2VsZWN0aW9uKSB7XG4gICAgLy8gICB0aGlzLmNoYW5nZVNlbGVjdGlvbih0aGlzLnByb3BzLmNob2ljZSlcbiAgICAvLyB9XG4gIH1cblxuICBjaGFuZ2VTZWxlY3Rpb24gKGNob2ljZSkge1xuICAgIHRoaXMuc2V0U3RhdGUgKHtcbiAgICAgIHNlbGVjdGVkOiB0aGlzLnN0YXRlLnNlbGVjdGVkID09PSAnbm90U2VsZWN0ZWQnID8gJ3NlbGVjdGVkJyA6ICdub3RTZWxlY3RlZCdcbiAgICB9KVxuICB9XG59XG5cbndpbmRvdy5Jbml0aWF0aXZlQ2hvaWNlID0gSW5pdGlhdGl2ZUNob2ljZTsiXX0=