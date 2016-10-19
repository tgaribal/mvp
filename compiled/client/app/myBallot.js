"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyBallot = function (_React$Component) {
  _inherits(MyBallot, _React$Component);

  function MyBallot(props) {
    _classCallCheck(this, MyBallot);

    var _this = _possibleConstructorReturn(this, (MyBallot.__proto__ || Object.getPrototypeOf(MyBallot)).call(this, props));

    _this.state = {
      votes: _this.props.user.votes
    };
    return _this;
  }

  _createClass(MyBallot, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      {
        console.log(this.state.votes);
      }
      return React.createElement(
        "div",
        { className: "myBallot" },
        Object.keys(this.state.votes).map(function (key) {
          return React.createElement(
            "div",
            { key: key, className: "vote" },
            " For ",
            key,
            " you have selected  ",
            React.createElement(
              "span",
              { className: "choice" },
              _this2.state.votes[key],
              " "
            )
          );
        })
      );
    }
  }]);

  return MyBallot;
}(React.Component);

window.MyBallot = MyBallot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9hcHAvbXlCYWxsb3QuanN4Il0sIm5hbWVzIjpbIk15QmFsbG90IiwicHJvcHMiLCJzdGF0ZSIsInZvdGVzIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUTs7O0FBQ0osb0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSxvSEFDWkEsS0FEWTs7QUFFbEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sTUFBS0YsS0FBTCxDQUFXRyxJQUFYLENBQWdCRDtBQURaLEtBQWI7QUFGa0I7QUFLbkI7Ozs7NkJBRVE7QUFBQTs7QUFDSDtBQUFDRSxnQkFBUUMsR0FBUixDQUFZLEtBQUtKLEtBQUwsQ0FBV0MsS0FBdkI7QUFBOEI7QUFDbkMsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFVBQWY7QUFDR0ksZUFBT0MsSUFBUCxDQUFZLEtBQUtOLEtBQUwsQ0FBV0MsS0FBdkIsRUFBOEJNLEdBQTlCLENBQWtDLFVBQUNDLEdBQUQ7QUFBQSxpQkFDakM7QUFBQTtBQUFBLGNBQUssS0FBS0EsR0FBVixFQUFlLFdBQVUsTUFBekI7QUFBQTtBQUFzQ0EsZUFBdEM7QUFBQTtBQUE4RDtBQUFBO0FBQUEsZ0JBQU0sV0FBVSxRQUFoQjtBQUEwQixxQkFBS1IsS0FBTCxDQUFXQyxLQUFYLENBQWlCTyxHQUFqQixDQUExQjtBQUFBO0FBQUE7QUFBOUQsV0FEaUM7QUFBQSxTQUFsQztBQURILE9BREY7QUFPRDs7OztFQWpCb0JDLE1BQU1DLFM7O0FBb0I3QkMsT0FBT2IsUUFBUCxHQUFrQkEsUUFBbEIiLCJmaWxlIjoibXlCYWxsb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNeUJhbGxvdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdm90ZXM6IHRoaXMucHJvcHMudXNlci52b3Rlc1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUudm90ZXMpfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15QmFsbG90XCI+XG4gICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnZvdGVzKS5tYXAoKGtleSk9PlxuICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cInZvdGVcIj4gRm9yIHtrZXl9IHlvdSBoYXZlIHNlbGVjdGVkICA8c3BhbiBjbGFzc05hbWU9XCJjaG9pY2VcIj57dGhpcy5zdGF0ZS52b3Rlc1trZXldfSA8L3NwYW4+PC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxud2luZG93Lk15QmFsbG90ID0gTXlCYWxsb3Q7Il19