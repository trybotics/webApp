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

var _helpers = require('../utils/helpers');

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Node = require('react').babelPluginFlowReactPropTypes_proptype_Node || require('prop-types').any;
// @inheritedComponent Paper

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box', // Prevent padding issue with the Modal and fixed positioned AppBar.
      zIndex: theme.zIndex.appBar,
      flexShrink: 0
    },
    positionFixed: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0
    },
    positionAbsolute: {
      position: 'absolute',
      top: 0,
      left: 'auto',
      right: 0
    },
    positionStatic: {
      position: 'static',
      flexShrink: 0
    },
    colorDefault: {
      backgroundColor: theme.palette.background.appBar,
      color: theme.palette.getContrastText(theme.palette.background.appBar)
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary[500],
      color: theme.palette.getContrastText(theme.palette.primary[500])
    },
    colorAccent: {
      backgroundColor: theme.palette.secondary.A200,
      color: theme.palette.getContrastText(theme.palette.secondary.A200)
    }
  };
};

var babelPluginFlowReactPropTypes_proptype_Color = require('prop-types').oneOf(['inherit', 'primary', 'accent', 'default']);

var babelPluginFlowReactPropTypes_proptype_Position = require('prop-types').oneOf(['static', 'fixed', 'absolute']);

var babelPluginFlowReactPropTypes_proptype_Props = {
  /**
   * The content of the component.
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
   * The color of the component. It's using the theme palette when that makes sense.
   */
  color: require('prop-types').oneOf(['inherit', 'primary', 'accent', 'default']).isRequired,

  /**
   * The positioning type.
   */
  position: require('prop-types').oneOf(['static', 'fixed', 'absolute']).isRequired
};

var AppBar = function (_React$Component) {
  (0, _inherits3.default)(AppBar, _React$Component);

  function AppBar() {
    (0, _classCallCheck3.default)(this, AppBar);
    return (0, _possibleConstructorReturn3.default)(this, (AppBar.__proto__ || (0, _getPrototypeOf2.default)(AppBar)).apply(this, arguments));
  }

  (0, _createClass3.default)(AppBar, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          color = _props.color,
          position = _props.position,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'color', 'position']);


      var className = (0, _classnames2.default)(classes.root, classes['position' + (0, _helpers.capitalizeFirstLetter)(position)], (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes['color' + (0, _helpers.capitalizeFirstLetter)(color)], color !== 'inherit'), (0, _defineProperty3.default)(_classNames, 'mui-fixed', position === 'fixed'), _classNames), classNameProp);

      return _react2.default.createElement(
        _Paper2.default,
        (0, _extends3.default)({ square: true, component: 'header', elevation: 4, className: className }, other),
        children
      );
    }
  }]);
  return AppBar;
}(_react2.default.Component);

AppBar.defaultProps = {
  color: 'primary',
  position: 'fixed'
};
exports.default = (0, _withStyles2.default)(styles, { name: 'MuiAppBar' })(AppBar);