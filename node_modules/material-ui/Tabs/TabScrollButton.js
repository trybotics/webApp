'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ButtonBase = require('../ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _KeyboardArrowLeft = require('../svg-icons/KeyboardArrowLeft');

var _KeyboardArrowLeft2 = _interopRequireDefault(_KeyboardArrowLeft);

var _KeyboardArrowRight = require('../svg-icons/KeyboardArrowRight');

var _KeyboardArrowRight2 = _interopRequireDefault(_KeyboardArrowRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      color: 'inherit',
      flex: '0 0 ' + theme.spacing.unit * 7 + 'px'
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  /**
   * Useful to extend the style applied to components.
   */
  classes: require('prop-types').object,

  /**
   * @ignore
   */
  className: require('prop-types').string,

  /**
   * Which direction should the button indicate?
   */
  direction: require('prop-types').oneOf(['left', 'right']).isRequired,

  /**
   * Callback to execute for button press.
   */
  onClick: require('prop-types').func,

  /**
   * Should the button be present or just consume space.
   */
  visible: require('prop-types').bool
};

var _ref = _react2.default.createElement(_KeyboardArrowLeft2.default, null);

var _ref2 = _react2.default.createElement(_KeyboardArrowRight2.default, null);

/**
 * @ignore - internal component.
 */
var TabScrollButton = function (_React$Component) {
  (0, _inherits3.default)(TabScrollButton, _React$Component);

  function TabScrollButton() {
    (0, _classCallCheck3.default)(this, TabScrollButton);
    return (0, _possibleConstructorReturn3.default)(this, (TabScrollButton.__proto__ || (0, _getPrototypeOf2.default)(TabScrollButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(TabScrollButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          classNameProp = _props.className,
          direction = _props.direction,
          onClick = _props.onClick,
          visible = _props.visible,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'className', 'direction', 'onClick', 'visible']);


      var className = (0, _classnames2.default)(classes.root, classNameProp);

      if (!visible) {
        return _react2.default.createElement('div', { className: className });
      }

      return _react2.default.createElement(
        _ButtonBase2.default,
        (0, _extends3.default)({ className: className, onClick: onClick, tabIndex: -1 }, other),
        direction === 'left' ? _ref : _ref2
      );
    }
  }]);
  return TabScrollButton;
}(_react2.default.Component);

TabScrollButton.defaultProps = {
  visible: true
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTabScrollButton' })(TabScrollButton);