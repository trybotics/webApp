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

var _Typography = require('../Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_ElementType = require('react').babelPluginFlowReactPropTypes_proptype_ElementType || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      'label + div > &': {
        marginTop: -theme.spacing.unit * 2,
        height: 26
      }
    },
    positionStart: {
      marginRight: theme.spacing.unit
    },
    positionEnd: {
      marginLeft: theme.spacing.unit
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Props = {
  /**
   * The content of the component, normally an `IconButton` or string.
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: typeof babelPluginFlowReactPropTypes_proptype_ElementType === 'function' ? babelPluginFlowReactPropTypes_proptype_ElementType.isRequired ? babelPluginFlowReactPropTypes_proptype_ElementType.isRequired : babelPluginFlowReactPropTypes_proptype_ElementType : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_ElementType).isRequired,

  /**
   * If children is a string then disable wrapping in a Typography component.
   */
  disableTypography: require('prop-types').bool.isRequired,

  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: require('prop-types').oneOf(['start', 'end']).isRequired
};

var InputAdornment = function (_React$Component) {
  (0, _inherits3.default)(InputAdornment, _React$Component);

  function InputAdornment() {
    (0, _classCallCheck3.default)(this, InputAdornment);
    return (0, _possibleConstructorReturn3.default)(this, (InputAdornment.__proto__ || (0, _getPrototypeOf2.default)(InputAdornment)).apply(this, arguments));
  }

  (0, _createClass3.default)(InputAdornment, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          children = _props.children,
          Component = _props.component,
          classes = _props.classes,
          className = _props.className,
          disableTypography = _props.disableTypography,
          position = _props.position,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'component', 'classes', 'className', 'disableTypography', 'position']);


      return _react2.default.createElement(
        Component,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.positionStart, position === 'start'), (0, _defineProperty3.default)(_classNames, classes.positionEnd, position === 'end'), _classNames), className)
        }, other),
        typeof children === 'string' && !disableTypography ? _react2.default.createElement(
          _Typography2.default,
          { color: 'secondary' },
          children
        ) : children
      );
    }
  }]);
  return InputAdornment;
}(_react2.default.Component);

InputAdornment.defaultProps = {
  component: 'div',
  disableTypography: false
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiInputAdornment' })(InputAdornment);