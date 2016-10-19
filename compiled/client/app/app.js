'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      initiatives: initiatives,
      navFilter: 'Federal',
      currentUser: 'tim'
    };
    _this.handleNavClick = _this.handleNavClick.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'mainNav' },
          React.createElement(Nav, { click: this.handleNavClick })
        ),
        React.createElement(
          'div',
          { className: 'mainBody' },
          React.createElement(InitiativeList, { level: this.state.navFilter, initiatives: this.state.initiatives })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $.get('http://localhost:8080/initiatives', function (data, res) {
        this.setState({ initiatives: data });;
      }.bind(this));
    }
  }, {
    key: 'handleNavClick',
    value: function handleNavClick(level) {
      console.log('click level:', level);
      this.setState({ navFilter: level });
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9hcHAvYXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJpbml0aWF0aXZlcyIsIm5hdkZpbHRlciIsImN1cnJlbnRVc2VyIiwiaGFuZGxlTmF2Q2xpY2siLCJiaW5kIiwiJCIsImdldCIsImRhdGEiLCJyZXMiLCJzZXRTdGF0ZSIsImxldmVsIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSwwR0FDWkEsS0FEWTs7QUFFbEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG1CQUFhQSxXQURGO0FBRVhDLGlCQUFXLFNBRkE7QUFHWEMsbUJBQWE7QUFIRixLQUFiO0FBS0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQVBrQjtBQVFuQjs7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxTQUFmO0FBQ0UsOEJBQUMsR0FBRCxJQUFLLE9BQU8sS0FBS0QsY0FBakI7QUFERixTQURGO0FBS0U7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0UsOEJBQUMsY0FBRCxJQUFnQixPQUFPLEtBQUtKLEtBQUwsQ0FBV0UsU0FBbEMsRUFBNkMsYUFBYSxLQUFLRixLQUFMLENBQVdDLFdBQXJFO0FBREY7QUFMRixPQURGO0FBV0Q7Ozt3Q0FFb0I7QUFDbkJLLFFBQUVDLEdBQUYsQ0FBTSxtQ0FBTixFQUEyQyxVQUFVQyxJQUFWLEVBQWdCQyxHQUFoQixFQUFxQjtBQUM5RCxhQUFLQyxRQUFMLENBQWMsRUFBQ1QsYUFBYU8sSUFBZCxFQUFkLEVBQW1DO0FBQ3BDLE9BRjBDLENBRXpDSCxJQUZ5QyxDQUVwQyxJQUZvQyxDQUEzQztBQUdEOzs7bUNBRWVNLEssRUFBTztBQUNyQkMsY0FBUUMsR0FBUixDQUFZLGNBQVosRUFBMkJGLEtBQTNCO0FBQ0EsV0FBS0QsUUFBTCxDQUFjLEVBQUNSLFdBQVdTLEtBQVosRUFBZDtBQUNEOzs7O0VBbENlRyxNQUFNQyxTOztBQXNDeEJDLE9BQU9sQixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbml0aWF0aXZlczogaW5pdGlhdGl2ZXMsXG4gICAgICBuYXZGaWx0ZXI6ICdGZWRlcmFsJyxcbiAgICAgIGN1cnJlbnRVc2VyOiAndGltJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVOYXZDbGljayA9IHRoaXMuaGFuZGxlTmF2Q2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbk5hdlwiPlxuICAgICAgICAgIDxOYXYgY2xpY2s9e3RoaXMuaGFuZGxlTmF2Q2xpY2t9Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQm9keVwiPlxuICAgICAgICAgIDxJbml0aWF0aXZlTGlzdCBsZXZlbD17dGhpcy5zdGF0ZS5uYXZGaWx0ZXJ9IGluaXRpYXRpdmVzPXt0aGlzLnN0YXRlLmluaXRpYXRpdmVzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgJC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9pbml0aWF0aXZlcycsIGZ1bmN0aW9uIChkYXRhLCByZXMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2luaXRpYXRpdmVzOiBkYXRhfSk7O1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbiAgXG4gIGhhbmRsZU5hdkNsaWNrIChsZXZlbCkge1xuICAgIGNvbnNvbGUubG9nKCdjbGljayBsZXZlbDonLGxldmVsKVxuICAgIHRoaXMuc2V0U3RhdGUoe25hdkZpbHRlcjogbGV2ZWx9KVxuICB9XG5cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=