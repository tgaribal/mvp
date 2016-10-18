"use strict";

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
      navFilter: 'Federal'
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "mainNav" },
          React.createElement(Nav, { click: this.handleNavClick.bind(this) })
        ),
        React.createElement(
          "div",
          { className: "mainBody" },
          React.createElement(InitiativeList, { level: this.state.navFilter, initiatives: this.state.initiatives })
        )
      );
    }
  }, {
    key: "handleNavClick",
    value: function handleNavClick(level) {
      console.log('click level:', level);
      this.setState({ navFilter: level });
      // this.render();
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9hcHAvYXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJpbml0aWF0aXZlcyIsIm5hdkZpbHRlciIsImhhbmRsZU5hdkNsaWNrIiwiYmluZCIsImxldmVsIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLDBHQUNaQSxLQURZOztBQUVsQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQWFBLFdBREY7QUFFWEMsaUJBQVc7QUFGQSxLQUFiO0FBRmtCO0FBTW5COzs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFNBQWY7QUFDRSw4QkFBQyxHQUFELElBQUssT0FBTyxLQUFLQyxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUFaO0FBREYsU0FERjtBQUtFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFLDhCQUFDLGNBQUQsSUFBZ0IsT0FBTyxLQUFLSixLQUFMLENBQVdFLFNBQWxDLEVBQTZDLGFBQWEsS0FBS0YsS0FBTCxDQUFXQyxXQUFyRTtBQURGO0FBTEYsT0FERjtBQVdEOzs7bUNBRWVJLEssRUFBTztBQUNyQkMsY0FBUUMsR0FBUixDQUFZLGNBQVosRUFBMkJGLEtBQTNCO0FBQ0EsV0FBS0csUUFBTCxDQUFjLEVBQUNOLFdBQVdHLEtBQVosRUFBZDtBQUNBO0FBQ0Q7Ozs7RUEzQmVJLE1BQU1DLFM7O0FBK0J4QkMsT0FBT2IsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5pdGlhdGl2ZXM6IGluaXRpYXRpdmVzLFxuICAgICAgbmF2RmlsdGVyOiAnRmVkZXJhbCdcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluTmF2XCI+XG4gICAgICAgICAgPE5hdiBjbGljaz17dGhpcy5oYW5kbGVOYXZDbGljay5iaW5kKHRoaXMpfS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkJvZHlcIj5cbiAgICAgICAgICA8SW5pdGlhdGl2ZUxpc3QgbGV2ZWw9e3RoaXMuc3RhdGUubmF2RmlsdGVyfSBpbml0aWF0aXZlcz17dGhpcy5zdGF0ZS5pbml0aWF0aXZlc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgaGFuZGxlTmF2Q2xpY2sgKGxldmVsKSB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrIGxldmVsOicsbGV2ZWwpXG4gICAgdGhpcy5zZXRTdGF0ZSh7bmF2RmlsdGVyOiBsZXZlbH0pXG4gICAgLy8gdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG59XG5cbndpbmRvdy5BcHAgPSBBcHA7Il19