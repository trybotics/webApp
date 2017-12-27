'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      height: 1,
      margin: 0, // Reset browser default style.
      border: 'none',
      flexShrink: 0
    },
    default: {
      backgroundColor: theme.palette.text.divider
    },
    inset: {
      marginLeft: 72
    },
    light: {
      backgroundColor: theme.palette.text.lightDivider
    },
    absolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  absolute: require('prop-types').bool.isRequired,

  /**
   * Useful to extend the style applied to components.
   */
  classes: require('prop-types').object,

  /**
   * @ignore
   */
  className: require('prop-types').string,

  /**
   * If `true`, the divider will be indented.
   */
  inset: require('prop-types').bool.isRequired,

  /**
   * If `true`, the divider will have a lighter color.
   */
  light: require('prop-types').bool.isRequired
};

var Divider = function (_React$Component) {
  (0, _inherits3.default)(Divider, _React$Component);

  function Divider() {
    (0, _classCallCheck3.default)(this, Divider);
    return (0, _possibleConstructorReturn3.default)(this, (Divider.__proto__ || (0, _getPrototypeOf2.default)(Divider)).apply(this, arguments));
  }

  (0, _createClass3.default)(Divider, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          absolute = _props.absolute,
          classes = _props.classes,
          classNameProp = _props.className,
          inset = _props.inset,
          light = _props.light,
          other = (0, _objectWithoutProperties3.default)(_props, ['absolute', 'classes', 'className', 'inset', 'light']);


      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.absolute, absolute), (0, _defineProperty3.default)(_classNames, classes.inset, inset), (0, _defineProperty3.default)(_classNames, light ? classes.light : classes.default, true), _classNames), classNameProp);

      return _react2.default.createElement('hr', (0, _extends3.default)({ className: className }, other));
    }
  }]);
  return Divider;
}(_react2.default.Component);

Divider.defaultProps = {
  absolute: false,
  inset: false,
  light: false
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDivider' })(Divider);