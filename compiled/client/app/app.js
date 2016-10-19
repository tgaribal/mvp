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
        React.createElement('img', { src: '../styles/voteCA.png' }),
        React.createElement(
          'div',
          { className: 'mainNav' },
          React.createElement(Nav, { click: this.handleNavClick })
        ),
        React.createElement(
          'div',
          { className: 'mainBody' },
          React.createElement(InitiativeList, { level: this.state.navFilter, initiatives: this.state.initiatives })
        ),
        React.createElement(
          'div',
          null,
          this.state.navFilter === "My Ballot" ? React.createElement(MyBallot, { user: this.state.currentUser[0] }) : React.createElement('div', null)
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $.get('http://localhost:8080/initiatives', function (data, res) {
        this.setState({ initiatives: data });;
      }.bind(this));
      $.get('http://localhost:8080/users', function (data, res) {
        this.setState({ currentUser: data });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9hcHAvYXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJpbml0aWF0aXZlcyIsIm5hdkZpbHRlciIsImN1cnJlbnRVc2VyIiwiaGFuZGxlTmF2Q2xpY2siLCJiaW5kIiwiJCIsImdldCIsImRhdGEiLCJyZXMiLCJzZXRTdGF0ZSIsImxldmVsIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSwwR0FDWkEsS0FEWTs7QUFFbEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG1CQUFhQSxXQURGO0FBRVhDLGlCQUFXLFNBRkE7QUFHWEMsbUJBQWE7QUFIRixLQUFiO0FBS0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQVBrQjtBQVFuQjs7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0UscUNBQUssS0FBSSxzQkFBVCxHQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxTQUFmO0FBQ0UsOEJBQUMsR0FBRCxJQUFLLE9BQU8sS0FBS0QsY0FBakI7QUFERixTQUZGO0FBTUU7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0UsOEJBQUMsY0FBRCxJQUFnQixPQUFPLEtBQUtKLEtBQUwsQ0FBV0UsU0FBbEMsRUFBNkMsYUFBYSxLQUFLRixLQUFMLENBQVdDLFdBQXJFO0FBREYsU0FORjtBQVVFO0FBQUE7QUFBQTtBQUNJLGVBQUtELEtBQUwsQ0FBV0UsU0FBWCxLQUF5QixXQUExQixHQUF5QyxvQkFBQyxRQUFELElBQVUsTUFBTSxLQUFLRixLQUFMLENBQVdHLFdBQVgsQ0FBdUIsQ0FBdkIsQ0FBaEIsR0FBekMsR0FBd0Y7QUFEM0Y7QUFWRixPQURGO0FBZ0JEOzs7d0NBRW9CO0FBQ25CRyxRQUFFQyxHQUFGLENBQU0sbUNBQU4sRUFBMkMsVUFBVUMsSUFBVixFQUFnQkMsR0FBaEIsRUFBcUI7QUFDOUQsYUFBS0MsUUFBTCxDQUFjLEVBQUNULGFBQWFPLElBQWQsRUFBZCxFQUFtQztBQUNwQyxPQUYwQyxDQUV6Q0gsSUFGeUMsQ0FFcEMsSUFGb0MsQ0FBM0M7QUFHQUMsUUFBRUMsR0FBRixDQUFNLDZCQUFOLEVBQXFDLFVBQVVDLElBQVYsRUFBZ0JDLEdBQWhCLEVBQXFCO0FBQ3hELGFBQUtDLFFBQUwsQ0FBYyxFQUFDUCxhQUFhSyxJQUFkLEVBQWQ7QUFDRCxPQUZvQyxDQUVuQ0gsSUFGbUMsQ0FFOUIsSUFGOEIsQ0FBckM7QUFHRDs7O21DQUVlTSxLLEVBQU87QUFDckJDLGNBQVFDLEdBQVIsQ0FBWSxjQUFaLEVBQTJCRixLQUEzQjtBQUNBLFdBQUtELFFBQUwsQ0FBYyxFQUFDUixXQUFXUyxLQUFaLEVBQWQ7QUFDRDs7OztFQTFDZUcsTUFBTUMsUzs7QUE4Q3hCQyxPQUFPbEIsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5pdGlhdGl2ZXM6IGluaXRpYXRpdmVzLFxuICAgICAgbmF2RmlsdGVyOiAnRmVkZXJhbCcsXG4gICAgICBjdXJyZW50VXNlcjogJ3RpbSdcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlTmF2Q2xpY2sgPSB0aGlzLmhhbmRsZU5hdkNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz1cIi4uL3N0eWxlcy92b3RlQ0EucG5nXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluTmF2XCI+XG4gICAgICAgICAgPE5hdiBjbGljaz17dGhpcy5oYW5kbGVOYXZDbGlja30vPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5Cb2R5XCI+XG4gICAgICAgICAgPEluaXRpYXRpdmVMaXN0IGxldmVsPXt0aGlzLnN0YXRlLm5hdkZpbHRlcn0gaW5pdGlhdGl2ZXM9e3RoaXMuc3RhdGUuaW5pdGlhdGl2ZXN9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgeyh0aGlzLnN0YXRlLm5hdkZpbHRlciA9PT0gXCJNeSBCYWxsb3RcIikgPyA8TXlCYWxsb3QgdXNlcj17dGhpcy5zdGF0ZS5jdXJyZW50VXNlclswXX0vPiA6IDxkaXY+PC9kaXY+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgJC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9pbml0aWF0aXZlcycsIGZ1bmN0aW9uIChkYXRhLCByZXMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2luaXRpYXRpdmVzOiBkYXRhfSk7O1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgJC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91c2VycycsIGZ1bmN0aW9uIChkYXRhLCByZXMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRVc2VyOiBkYXRhfSlcbiAgICB9LmJpbmQodGhpcykpXG4gIH1cbiAgXG4gIGhhbmRsZU5hdkNsaWNrIChsZXZlbCkge1xuICAgIGNvbnNvbGUubG9nKCdjbGljayBsZXZlbDonLGxldmVsKVxuICAgIHRoaXMuc2V0U3RhdGUoe25hdkZpbHRlcjogbGV2ZWx9KVxuICB9XG5cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=