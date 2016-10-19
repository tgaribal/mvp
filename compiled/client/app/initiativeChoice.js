"use strict";

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
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: this.state.selected, onClick: this.changeSelection },
        React.createElement(
          "div",
          { className: "click", onClick: this.props.click.bind(null, this.props.choice) },
          this.props.choice
        )
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("1", this.props.choice);
      console.log('2', this.state.selection);
      console.log('3', this.props.selection);
      // this.changeSelection(this.props.selection).bind(this)
      // if (this.props.choice === this.props.selection) {
      //   this.changeSelection(this.props.choice)
      // }
    }
  }, {
    key: "changeSelection",
    value: function changeSelection(choice) {
      this.setState({
        selected: this.state.selected === 'notSelected' ? 'selected' : 'notSelected'
      });
    }
  }]);

  return InitiativeChoice;
}(React.Component);

window.InitiativeChoice = InitiativeChoice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9hcHAvaW5pdGlhdGl2ZUNob2ljZS5qc3giXSwibmFtZXMiOlsiSW5pdGlhdGl2ZUNob2ljZSIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZCIsIm51bUNob2ljZSIsInNlbGVjdGlvbiIsImNoYW5nZVNlbGVjdGlvbiIsImJpbmQiLCJjbGljayIsImNob2ljZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGdCOzs7QUFDSiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsYUFEQztBQUVYQyxpQkFBVyxDQUZBO0FBR1hDLGlCQUFXLE1BQUtKLEtBQUwsQ0FBV0k7QUFIWCxLQUFiO0FBS0EsVUFBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2QjtBQVBpQjtBQVFsQjs7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVyxLQUFLTCxLQUFMLENBQVdDLFFBQTNCLEVBQXFDLFNBQVMsS0FBS0csZUFBbkQ7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWYsRUFBdUIsU0FBUyxLQUFLTCxLQUFMLENBQVdPLEtBQVgsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLEVBQTRCLEtBQUtOLEtBQUwsQ0FBV1EsTUFBdkMsQ0FBaEM7QUFDRyxlQUFLUixLQUFMLENBQVdRO0FBRGQ7QUFERixPQURGO0FBT0Q7Ozt3Q0FFbUI7QUFDaEJDLGNBQVFDLEdBQVIsQ0FBWSxHQUFaLEVBQWlCLEtBQUtWLEtBQUwsQ0FBV1EsTUFBNUI7QUFDQUMsY0FBUUMsR0FBUixDQUFZLEdBQVosRUFBaUIsS0FBS1QsS0FBTCxDQUFXRyxTQUE1QjtBQUNBSyxjQUFRQyxHQUFSLENBQVksR0FBWixFQUFpQixLQUFLVixLQUFMLENBQVdJLFNBQTVCO0FBQ0E7QUFDRjtBQUNBO0FBQ0E7QUFDRDs7O29DQUVnQkksTSxFQUFRO0FBQ3ZCLFdBQUtHLFFBQUwsQ0FBZTtBQUNiVCxrQkFBVSxLQUFLRCxLQUFMLENBQVdDLFFBQVgsS0FBd0IsYUFBeEIsR0FBd0MsVUFBeEMsR0FBcUQ7QUFEbEQsT0FBZjtBQUdEOzs7O0VBbkM0QlUsTUFBTUMsUzs7QUFzQ3JDQyxPQUFPZixnQkFBUCxHQUEwQkEsZ0JBQTFCIiwiZmlsZSI6ImluaXRpYXRpdmVDaG9pY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBJbml0aWF0aXZlQ2hvaWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkOiAnbm90U2VsZWN0ZWQnLFxuICAgICAgbnVtQ2hvaWNlOiAxLFxuICAgICAgc2VsZWN0aW9uOiB0aGlzLnByb3BzLnNlbGVjdGlvblxuICAgIH1cbiAgICB0aGlzLmNoYW5nZVNlbGVjdGlvbiA9IHRoaXMuY2hhbmdlU2VsZWN0aW9uLmJpbmQodGhpcylcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNlbGVjdGVkfSBvbkNsaWNrPXt0aGlzLmNoYW5nZVNlbGVjdGlvbn0+IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWNrXCIgb25DbGljaz17dGhpcy5wcm9wcy5jbGljay5iaW5kKG51bGwsIHRoaXMucHJvcHMuY2hvaWNlKX0+IFxuICAgICAgICAgIHt0aGlzLnByb3BzLmNob2ljZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIjFcIiwgdGhpcy5wcm9wcy5jaG9pY2UpXG4gICAgICBjb25zb2xlLmxvZygnMicsIHRoaXMuc3RhdGUuc2VsZWN0aW9uKVxuICAgICAgY29uc29sZS5sb2coJzMnLCB0aGlzLnByb3BzLnNlbGVjdGlvbilcbiAgICAgIC8vIHRoaXMuY2hhbmdlU2VsZWN0aW9uKHRoaXMucHJvcHMuc2VsZWN0aW9uKS5iaW5kKHRoaXMpXG4gICAgLy8gaWYgKHRoaXMucHJvcHMuY2hvaWNlID09PSB0aGlzLnByb3BzLnNlbGVjdGlvbikge1xuICAgIC8vICAgdGhpcy5jaGFuZ2VTZWxlY3Rpb24odGhpcy5wcm9wcy5jaG9pY2UpXG4gICAgLy8gfVxuICB9XG5cbiAgY2hhbmdlU2VsZWN0aW9uIChjaG9pY2UpIHtcbiAgICB0aGlzLnNldFN0YXRlICh7XG4gICAgICBzZWxlY3RlZDogdGhpcy5zdGF0ZS5zZWxlY3RlZCA9PT0gJ25vdFNlbGVjdGVkJyA/ICdzZWxlY3RlZCcgOiAnbm90U2VsZWN0ZWQnXG4gICAgfSlcbiAgfVxufVxuXG53aW5kb3cuSW5pdGlhdGl2ZUNob2ljZSA9IEluaXRpYXRpdmVDaG9pY2U7Il19