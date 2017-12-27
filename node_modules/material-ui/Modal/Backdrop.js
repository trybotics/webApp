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

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      zIndex: -1,
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      // Remove grey highlight
      WebkitTapHighlightColor: theme.palette.common.transparent,
      backgroundColor: theme.palette.common.lightBlack,
      transition: theme.transitions.create('opacity'),
      willChange: 'opacity',
      opacity: 0
    },
    invisible: {
      backgroundColor: theme.palette.common.transparent
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  /**
   * Can be used, for instance, to render a letter inside the avatar.
   */
  children: typeof babelPluginFlowReactPropTypes_proptype_Node === 'function' ? babelPluginFlowReactPropTypes_proptype_Node : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Node),

  /**
   * Useful to extend the style applied to components.
   */
  classes: require('prop-types').object,

  /**
   * @ignore
   */
  className: require('prop-types').string,

  /**
   * If `true`, the backdrop is invisible.
   */
  invisible: require('prop-types').bool.isRequired
};

/**
 * @ignore - internal component.
 */
var Backdrop = function (_React$Component) {
  (0, _inherits3.default)(Backdrop, _React$Component);

  function Backdrop() {
    (0, _classCallCheck3.default)(this, Backdrop);
    return (0, _possibleConstructorReturn3.default)(this, (Backdrop.__proto__ || (0, _getPrototypeOf2.default)(Backdrop)).apply(this, arguments));
  }

  (0, _createClass3.default)(Backdrop, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          invisible = _props.invisible,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'invisible']);


      var backdropClass = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.invisible, invisible), className);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: backdropClass, 'aria-hidden': 'true' }, other),
        children
      );
    }
  }]);
  return Backdrop;
}(_react2.default.Component);

Backdrop.defaultProps = {
  invisible: false
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiBackdrop' })(Backdrop);